import { createHash, timingSafeEqual } from "crypto";
import { clientIp, sharedLimiter, HOUR_MS } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const maxDuration = 60;

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

// Brute-force guard for the Studio key: after STUDIO_MAX_FAILS wrong keys from
// one IP within a rolling hour, that IP gets 429 (even with the right key)
// until the oldest failure is an hour old. In-memory, per serverless instance
// (see lib/rate-limit.ts).
const STUDIO_MAX_FAILS = 10;
const studioFails = sharedLimiter("studio-key-fail", { windowMs: HOUR_MS, max: STUDIO_MAX_FAILS });

// Constant-time comparison. Hashing both sides first gives equal-length
// buffers (timingSafeEqual requires that) and hides the real key's length.
function keyMatches(given, expected) {
  if (!expected || typeof given !== "string" || !given) return false;
  const a = createHash("sha256").update(given, "utf8").digest();
  const b = createHash("sha256").update(expected, "utf8").digest();
  return timingSafeEqual(a, b);
}

export async function POST(req) {
  // Simple gate so random visitors can't spend your xAI credits.
  const ip = clientIp(req);
  const blocked = studioFails.peek(ip);
  if (blocked.limited) {
    const retryAfter = Math.max(1, Math.ceil(blocked.retryAfterMs / 1000));
    const mins = Math.max(1, Math.ceil(retryAfter / 60));
    return new Response(
      JSON.stringify({ error: `Too many wrong Studio key attempts. Try again in about ${mins} minute${mins === 1 ? "" : "s"}.` }),
      { status: 429, headers: { "Content-Type": "application/json", "Retry-After": String(retryAfter) } }
    );
  }
  if (!keyMatches(req.headers.get("x-studio-key"), process.env.STUDIO_KEY)) {
    const after = studioFails.record(ip);
    console.warn("[studio] wrong key from ip", ip, "| failures this hour:", after.count);
    return json({ error: "Unauthorized. Enter the correct Studio key." }, 401);
  }
  if (!process.env.XAI_API_KEY) {
    return json({ error: "Server is missing XAI_API_KEY (set it in .env.local)." }, 500);
  }

  let payload;
  try {
    payload = await req.json();
  } catch {
    return json({ error: "Invalid request body." }, 400);
  }
  const prompt = (payload.prompt || "").trim();
  const n = Math.min(Math.max(parseInt(payload.n || 1, 10), 1), 4);
  const aspect_ratio = payload.aspect_ratio || "1:1";
  if (!prompt) return json({ error: "Please enter a prompt." }, 400);

  // xAI image generation — endpoint + model verified from docs.x.ai
  let r;
  try {
    r = await fetch("https://api.x.ai/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.XAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "grok-imagine-image-quality",
        prompt,
        n,
        aspect_ratio,
        response_format: "url",
      }),
    });
  } catch (e) {
    console.error("[studio] could not reach xAI:", e);
    return json({ error: "Could not reach the image service. Please try again in a minute." }, 502);
  }

  if (!r.ok) {
    // Raw xAI error text stays in the server log (Vercel -> Logs); the client
    // only gets a generic message.
    const t = await r.text().catch(() => "");
    console.error("[studio] xAI image error:", r.status, t.slice(0, 2000));
    const msg =
      r.status === 400 || r.status === 422
        ? "The image service rejected this request. Try rephrasing the prompt."
        : r.status === 429
          ? "The image service is busy. Please try again in a minute."
          : "Image generation failed. Please try again later.";
    return json({ error: msg }, r.status === 400 || r.status === 422 || r.status === 429 ? r.status : 502);
  }

  const data = await r.json();
  const items = data.data || [];

  // Re-host each image as a base64 data URL so it always displays and downloads
  // cleanly in the browser (xAI's temporary URLs can be cross-origin).
  const images = [];
  for (const it of items) {
    if (it.b64_json) {
      images.push({ dataUrl: `data:image/jpeg;base64,${it.b64_json}`, revised_prompt: it.revised_prompt || "" });
      continue;
    }
    try {
      const ir = await fetch(it.url);
      const buf = Buffer.from(await ir.arrayBuffer());
      images.push({ dataUrl: `data:image/jpeg;base64,${buf.toString("base64")}`, revised_prompt: it.revised_prompt || "" });
    } catch {
      images.push({ url: it.url, revised_prompt: it.revised_prompt || "" });
    }
  }

  return json({ images });
}
