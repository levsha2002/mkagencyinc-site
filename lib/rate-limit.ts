// Per-IP sliding-window limiter used by the chat widget (/api/chat) and the
// Studio key check (/api/generate-image).
//
// STORE: in-memory, per serverless instance. The project has no key-value
// store (no Vercel KV / Upstash). Neon Postgres is configured, but it is the
// TCPA lead store and /api/lead fails hard when Neon is unavailable, so we
// deliberately do not couple every chat message (and any abusive traffic) to
// it. Consequence: each warm Vercel instance keeps its own counters, so the
// effective limit is "N per IP per hour per instance" and counters reset on a
// cold start. With Fluid compute one instance serves many concurrent requests,
// so a single client hammering the endpoint is normally stopped quickly; this
// is a best-effort cost guard, not a hard global quota. To make it global,
// back `createSlidingWindowLimiter` with KV/Redis — call sites do not change.

export type LimitResult = {
  /** true when the request must be refused */
  limited: boolean;
  /** events currently counted in the window for this key */
  count: number;
  /** how many more events are allowed in the current window */
  remaining: number;
  /** ms until the oldest counted event leaves the window (0 when not limited) */
  retryAfterMs: number;
};

export type SlidingWindowLimiter = {
  /** Count one event if under the limit. Refused events are NOT recorded. */
  consume(key: string, now?: number): LimitResult;
  /** Read-only check: is this key already at/over the limit? */
  peek(key: string, now?: number): LimitResult;
  /** Unconditionally record one event (e.g. a failed login attempt). */
  record(key: string, now?: number): LimitResult;
  /** Test helper. */
  reset(): void;
  /** Test/diagnostics helper. */
  size(): number;
};

export function createSlidingWindowLimiter(opts: {
  windowMs: number;
  max: number;
  maxKeys?: number;
}): SlidingWindowLimiter {
  const { windowMs, max } = opts;
  const maxKeys = opts.maxKeys ?? 10_000;
  const hits = new Map<string, number[]>();

  function recent(key: string, now: number): number[] {
    const list = hits.get(key);
    if (!list) return [];
    const kept = list.filter((t) => now - t < windowMs);
    if (kept.length) hits.set(key, kept);
    else hits.delete(key);
    return kept;
  }

  function result(list: number[], now: number): LimitResult {
    const limited = list.length >= max;
    return {
      limited,
      count: list.length,
      remaining: Math.max(0, max - list.length),
      retryAfterMs: limited ? Math.max(0, windowMs - (now - list[0])) : 0,
    };
  }

  // Bound memory. Array.from rather than for..of over the Map: this project's
  // tsconfig has no downlevelIteration.
  function prune(now: number) {
    if (hits.size <= maxKeys) return;
    Array.from(hits.keys()).forEach((k) => recent(k, now));
    if (hits.size <= maxKeys) return;
    // Still too many active keys (flood from many IPs): drop the oldest-inserted.
    const excess = hits.size - maxKeys;
    Array.from(hits.keys()).slice(0, excess).forEach((k) => hits.delete(k));
  }

  function add(key: string, list: number[], now: number): number[] {
    const next = list.concat(now);
    hits.delete(key); // re-insert so Map order approximates recency
    hits.set(key, next);
    prune(now);
    return next;
  }

  return {
    consume(key, now = Date.now()) {
      const list = recent(key, now);
      if (list.length >= max) return result(list, now);
      const next = add(key, list, now);
      return { ...result(next, now), limited: false };
    },
    peek(key, now = Date.now()) {
      return result(recent(key, now), now);
    },
    record(key, now = Date.now()) {
      return result(add(key, recent(key, now), now), now);
    },
    reset() {
      hits.clear();
    },
    size() {
      return hits.size;
    },
  };
}

/** Client IP on Vercel: first x-forwarded-for entry, then x-real-ip. */
export function clientIp(req: Request): string {
  const h = req.headers;
  const fwd = h.get('x-forwarded-for');
  if (fwd) {
    const first = fwd.split(',')[0].trim();
    if (first) return first;
  }
  return (h.get('x-real-ip') || '').trim() || h.get('x-vercel-forwarded-for') || 'unknown';
}

export const HOUR_MS = 60 * 60 * 1000;

// Survive dev hot-reloads / module re-evaluation within one instance.
const g = globalThis as unknown as { __mkLimiters?: Record<string, SlidingWindowLimiter> };
export function sharedLimiter(name: string, opts: { windowMs: number; max: number; maxKeys?: number }) {
  g.__mkLimiters = g.__mkLimiters || {};
  if (!g.__mkLimiters[name]) g.__mkLimiters[name] = createSlidingWindowLimiter(opts);
  return g.__mkLimiters[name];
}
