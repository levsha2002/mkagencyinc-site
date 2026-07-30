// Abuse protection for the public lead endpoints.
//
// /api/lead, /api/callback and /api/insurance-quote each write to Postgres and
// send email, and had no protection of any kind. A trivial script could fill
// the database, flood the agency inbox and burn the Resend quota — and, worse
// for a business about to buy traffic, mix junk into the paid-lead pipeline so
// real and fake leads become indistinguishable.
//
// Two cheap layers, no third-party dependency and no friction for real users:
//   1. A honeypot field that humans never see and bots reliably fill in.
//   2. A per-IP sliding-window rate limit.
//
// The limiter is in-memory and therefore per serverless instance, so it is
// best-effort rather than a hard global guarantee. That is the right trade for
// this volume: it stops scripted floods without adding a database round-trip to
// every submission. If abuse becomes targeted, move the counter into Postgres
// or Vercel KV — the call sites do not change.

const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const MAX_TRACKED_IPS = 5_000;

const hits = new Map<string, number[]>();

function clientIp(req: Request): string {
  const h = req.headers;
  const fwd = h.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0].trim();
  return h.get('x-real-ip') || h.get('x-vercel-forwarded-for') || 'unknown';
}

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  // Bound memory: drop entries with no activity in the current window.
  // forEach rather than for..of — this project's tsconfig target predates
  // downlevelIteration, so iterating a Map directly will not compile.
  if (hits.size > MAX_TRACKED_IPS) {
    const cutoff = now - WINDOW_MS;
    const stale: string[] = [];
    hits.forEach((v, k) => {
      if (!v.some((t) => t > cutoff)) stale.push(k);
    });
    stale.forEach((k) => hits.delete(k));
  }
  return recent.length > MAX_PER_WINDOW;
}

// Flat shape with optional fields rather than a discriminated union: this
// project compiles without strictNullChecks, so `if (!guard.ok)` would not
// narrow a union and every field access would error.
export type GuardResult = {
  ok: boolean;
  status?: number;
  reason?: 'honeypot' | 'rate_limited';
};

/**
 * Runs both checks. `body.company` is the honeypot — the field is rendered
 * off-screen and left empty by real users, so any value means a bot.
 * Returns a result rather than a Response so each route keeps its own shape.
 */
export function guardSubmission(req: Request, body: Record<string, unknown>): GuardResult {
  const honeypot = typeof body.company === 'string' ? body.company.trim() : '';
  if (honeypot) {
    // Answer 200-shaped success at the call site so bots get no signal that
    // they were detected; the route simply does not persist anything.
    return { ok: false, status: 200, reason: 'honeypot' };
  }
  if (rateLimited(clientIp(req))) {
    return { ok: false, status: 429, reason: 'rate_limited' };
  }
  return { ok: true };
}

/** Props for the hidden honeypot input. Rendered by every public form. */
export const HONEYPOT_FIELD = 'company';
