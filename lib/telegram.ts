// Server-only: Telegram lead alerts for the agency owner.
//
// Import this ONLY from API routes (app/api/**). It reads TELEGRAM_BOT_TOKEN,
// which must never reach the browser, so it must not be imported by any
// client component and the env vars must never get a NEXT_PUBLIC_ prefix.
//
// Env (Vercel -> Settings -> Environment Variables, Production + Preview):
//   TELEGRAM_BOT_TOKEN  bot token from @BotFather (mark as Sensitive)
//   TELEGRAM_CHAT_ID    the owner's private chat id with the bot
// If either is missing, alerts are skipped silently.
//
// Guarantees for the visitor-facing request:
//   - never throws (every failure is caught and logged without secrets);
//   - hard 5s timeout, so a slow Telegram API cannot hold a lead submission;
//   - callers run it in parallel with the existing email, never before it,
//     and only after spam checks passed and the lead was accepted.

const TIMEOUT_MS = 5000;
const MAX_MESSAGE_CHARS = 1000;
const MAX_FIELD_CHARS = 300;
const TELEGRAM_LIMIT = 4096;

export type TelegramLeadType =
  | 'Quote form'
  | 'Contact form'
  | 'Insurance quote form'
  | 'Talk to Agent Now'
  | 'Chat callback'
  | 'Protection check'
  | 'Chat';

export type TelegramLead = {
  type: TelegramLeadType;
  lang?: string;
  name?: string;
  phone?: string;
  email?: string;
  zip?: string;
  coverage?: string;
  message?: string;
  pageUrl?: string;
  /** Extra label/value rows (e.g. address, preferred contact method). */
  extra?: Array<[string, string | undefined | null]>;
  /** Prefix the alert with a TEST banner (manual checks only). */
  test?: boolean;
};

function escapeHtml(v: unknown): string {
  return String(v ?? '').replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c] as string));
}

function clip(v: unknown, max = MAX_FIELD_CHARS): string {
  const s = typeof v === 'string' ? v : v == null ? '' : String(v);
  const t = s.trim();
  return t.length > max ? `${t.slice(0, max)}…` : t;
}

/** US numbers -> +1XXXXXXXXXX, which Telegram renders as a tappable phone link. */
export function tappablePhone(raw: string): string {
  const digits = raw.replace(/\D/g, '');
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
  return '';
}

/** Only real http(s) URLs are shown; anything else is dropped. */
function safeUrl(raw: string): string {
  try {
    const u = new URL(raw);
    return u.protocol === 'https:' || u.protocol === 'http:' ? u.toString() : '';
  } catch {
    return '';
  }
}

export function formatLeadMessage(lead: TelegramLead, now: Date = new Date()): string {
  const rows: string[] = [];
  const row = (label: string, value: string) => {
    if (value) rows.push(`<b>${escapeHtml(label)}:</b> ${value}`);
  };

  const phone = clip(lead.phone, 50);
  const e164 = phone ? tappablePhone(phone) : '';
  // Normalized +1 number is tappable in Telegram; fall back to what was typed.
  const phoneOut = escapeHtml(e164 || phone);

  row('Type', escapeHtml(lead.type));
  row('Language', escapeHtml(clip(lead.lang, 10) || 'en'));
  row('Name', escapeHtml(clip(lead.name, 200)));
  row('Phone', phoneOut);
  row('Email', escapeHtml(clip(lead.email, 200)));
  row('ZIP', escapeHtml(clip(lead.zip, 20)));
  row('Coverage', escapeHtml(clip(lead.coverage, 200)));
  (lead.extra || []).forEach(([label, value]) => row(label, escapeHtml(clip(value))));
  const message = clip(lead.message, MAX_MESSAGE_CHARS);
  if (message) rows.push(`<b>Message:</b>\n${escapeHtml(message)}`);
  const url = safeUrl(clip(lead.pageUrl, 500));
  row('Page', escapeHtml(url));
  row(
    'Time',
    escapeHtml(
      `${now.toLocaleString('en-US', {
        timeZone: 'America/New_York',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
      })} ET`
    )
  );

  const header = `${lead.test ? '🧪 <b>TEST — please ignore</b>\n' : ''}🔔 <b>New website lead — ${escapeHtml(lead.type)}</b>`;
  const text = `${header}\n\n${rows.join('\n')}`;
  // Every field is capped above, so this is only a last-resort guard; cut at a
  // line break so no HTML tag is left open.
  if (text.length <= TELEGRAM_LIMIT) return text;
  const cut = text.slice(0, TELEGRAM_LIMIT - 2);
  return `${cut.slice(0, cut.lastIndexOf('\n'))}\n…`;
}

function redact(s: string, token: string): string {
  return token ? s.split(token).join('[redacted]') : s;
}

/**
 * Sends one lead alert. Resolves to true when Telegram accepted it, false on
 * any failure or when not configured. Never throws.
 */
export async function sendTelegramLeadAlert(lead: TelegramLead): Promise<boolean> {
  const token = (process.env.TELEGRAM_BOT_TOKEN || '').trim();
  const chatId = (process.env.TELEGRAM_CHAT_ID || '').trim();
  if (!token || !chatId) return false; // not configured: skip silently

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: formatLeadMessage(lead),
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
      signal: controller.signal,
      cache: 'no-store',
    });
    if (!res.ok) {
      let description = '';
      try {
        const data = await res.json();
        description = typeof data?.description === 'string' ? data.description : '';
      } catch {}
      console.error('Telegram alert failed:', res.status, redact(description, token).slice(0, 200));
      return false;
    }
    return true;
  } catch (err) {
    const e = err as { name?: string; message?: string };
    const reason = e?.name === 'AbortError' ? `timeout after ${TIMEOUT_MS}ms` : `${e?.name || 'Error'}: ${e?.message || ''}`;
    console.error('Telegram alert error:', redact(reason, token).slice(0, 200));
    return false;
  } finally {
    clearTimeout(timer);
  }
}
