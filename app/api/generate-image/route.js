export const runtime = "nodejs";
export const maxDuration = 60;

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req) {
  // Simple gate so random visitors can't spend your xAI credits.
  const key = req.headers.get("x-studio-key");
  if (!process.env.STUDIO_KEY || key !== process.env.STUDIO_KEY) {
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
    return json({ error: "Could not reach xAI: " + e.message }, 502);
  }

  if (!r.ok) {
    const t = await r.text();
    return json({ error: "xAI error (" + r.status + "): " + t }, r.status);
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
