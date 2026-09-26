'use client';

import { useEffect, useRef, useState } from 'react';
import { getDict, PHONE_DISPLAY } from '@/lib/dictionaries';
import { trackConversion, newTransactionId } from '@/lib/analytics';
import { getAttribution } from '@/lib/attribution';
import { consentPayload } from '@/lib/consent';
import ConsentCheckbox from '@/components/ConsentCheckbox';
import { useLeadFormInView } from '@/components/useLeadFormInView';
import WhatsAppLink, { WhatsAppIcon } from '@/components/WhatsAppLink';

// `links` is only set on server refusals (rate limit / too long): tap-to-call
// and on-site quote links rendered under the bot bubble. Never sent back to
// the API (see apiMessages).
type Msg = { role: 'user' | 'assistant'; content: string; links?: { tel: string; quote: string } };

// Same cap as /api/chat (MAX_MESSAGE_CHARS) so real visitors never hit the
// server-side rejection.
const MAX_MESSAGE_CHARS = 1000;
const apiMessages = (list: Msg[]) => list.map(({ role, content }) => ({ role, content }));

// Detects a phone number or email address anywhere in the visitor's messages.
const PHONE_REGEX = /(\+?1[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/;
const EMAIL_REGEX = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

function visitorText(messages: Msg[]) {
  return messages
    .filter((m) => m.role === 'user')
    .map((m) => m.content)
    .join(' \n ');
}

function hasContactInfo(messages: Msg[]) {
  const text = visitorText(messages);
  return PHONE_REGEX.test(text) || EMAIL_REGEX.test(text);
}

function extractContact(messages: Msg[], extraEmail = '') {
  const text = visitorText(messages);
  const phone = text.match(PHONE_REGEX)?.[0] || '';
  const email = text.match(EMAIL_REGEX)?.[0] || (/@/.test(extraEmail) ? extraEmail : '');
  return { phone, email };
}

export default function ChatWidget({ lang }: { lang: string }) {
  const t = getDict(lang).chat;
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<'chat' | 'callback'>('chat');
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [consent, setConsent] = useState(false);
  const [visitorEmail, setVisitorEmail] = useState('');
  // sentRef persists for the whole conversation — once true, never reset,
  // so the transcript email fires at most ONCE per chat session.
  const sentRef = useRef(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  // At most ONE chat_lead conversion per page session, whichever capture
  // path gets there first (AI chat with contact details, transcript copy, or
  // the callback tab), so one visitor is never counted twice.
  const leadFiredRef = useRef(false);
  const hideForForm = useLeadFormInView();

  const fireChatLead = (method: string, contact: { phone?: string; email?: string }) => {
    if (leadFiredRef.current) return;
    leadFiredRef.current = true;
    trackConversion('chat_lead', { contact_method: method, lang }, { transactionId: newTransactionId('chat'), ...contact });
  };

  const [cb, setCb] = useState({ name: '', phone: '' });
  const [cbConsent, setCbConsent] = useState(false);
  const [cbStatus, setCbStatus] = useState<'' | 'sending' | 'ok' | 'err'>('');

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, open]);

  // Send transcript copy to the agency ONCE — only after the visitor has
  // shared a phone number or email in the conversation (or typed one into
  // the optional field), and only if they've checked the consent box.
  useEffect(() => {
    if (!consent || sentRef.current) return;
    const contactShared = hasContactInfo(messages) || /@/.test(visitorEmail);
    if (!contactShared) return;

    const timer = setTimeout(() => {
      sentRef.current = true; // locked for the rest of this session
      fetch('/api/transcript', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages(messages), visitorEmail, lang }),
      })
        .then((res) => {
          if (res.ok) {
            // Lead captured: the agency received the transcript with a phone
            // number or email in it.
            fireChatLead('chat_transcript', extractContact(messages, visitorEmail));
          } else {
            sentRef.current = false;
          }
        })
        .catch(() => {
          // If the send fails, allow one retry attempt on the next message.
          sentRef.current = false;
        });
    }, 2000);
    return () => clearTimeout(timer);
  }, [consent, messages, visitorEmail, lang]);

  const send = async () => {
    const text = input.trim();
    if (!text || busy) return;
    const next: Msg[] = [...messages, { role: 'user', content: text }];
    setMessages(next);
    setInput('');
    setBusy(true);
    // NOTE: sentRef is intentionally NOT reset here — the email should only
    // ever go out once per conversation, not once per message.
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages(next), lang }),
      });
      const data = await res.json();
      const links = data.limited && /^\d{10,11}$/.test(String(data.phone_tel)) && /^\/(en|es|ru)\/quote$/.test(String(data.quote_url))
        ? { tel: String(data.phone_tel), quote: String(data.quote_url) }
        : undefined;
      setMessages([...next, { role: 'assistant', content: data.reply || t.errMsg, ...(links ? { links } : {}) }]);
      // /api/chat forwards the conversation to the agency on its success path
      // and says so with lead_captured. Count it once the visitor has shared a
      // phone number or email in the chat.
      if (res.ok && data.lead_captured === true && hasContactInfo(next)) {
        fireChatLead('chat_ai', extractContact(next));
      }
    } catch {
      setMessages([...next, { role: 'assistant', content: t.errMsg }]);
    }
    setBusy(false);
  };

  const submitCb = async (e: React.FormEvent) => {
    e.preventDefault();
    setCbStatus('sending');
    const transactionId = newTransactionId('chatcb');
    try {
      const res = await fetch('/api/callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...cb,
          lang,
          contact_method: 'call',
          transaction_id: transactionId,
          ...consentPayload(lang),
          attribution: getAttribution(),
        }),
      });
      setCbStatus(res.ok ? 'ok' : 'err');
      if (res.ok) {
        if (!leadFiredRef.current) {
          leadFiredRef.current = true;
          trackConversion('chat_lead', { contact_method: 'call', lang }, { transactionId, phone: cb.phone });
        }
        setCb({ name: '', phone: '' });
        setCbConsent(false);
      }
    } catch { setCbStatus('err'); }
  };

  return (
    <div className={`mk-widget${hideForForm && !open ? ' form-in-view' : ''}`}>
      {open && (
        <div className="mk-panel">
          <div className="mk-head">
            <span>💬 {t.title}</span>
            <button onClick={() => setOpen(false)} aria-label="Close">✕</button>
          </div>
          <div className="mk-tabs">
            <button className={tab === 'chat' ? 'on' : ''} onClick={() => setTab('chat')}>💬 {t.fab}</button>
            <button className={tab === 'callback' ? 'on' : ''} onClick={() => setTab('callback')}>📞 {t.cbFab}</button>
          </div>

          {tab === 'chat' && (
            <>
              <div className="mk-body" ref={bodyRef}>
                <div className="msg bot">{t.greeting}</div>
                {messages.map((m, i) => (
                  <div key={i} className={`msg ${m.role === 'user' ? 'user' : 'bot'}`}>
                    {m.content}
                    {m.links && (
                      <span style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 6 }}>
                        <a href={`tel:${m.links.tel}`} style={{ fontWeight: 700 }}>📞 {PHONE_DISPLAY}</a>
                        <a href={m.links.quote} style={{ fontWeight: 700 }}>{getDict(lang).nav.quote} →</a>
                      </span>
                    )}
                  </div>
                ))}
                {busy && <div className="msg bot">…</div>}
              </div>
              <div className="mk-input">
                <input value={input} placeholder={t.placeholder} aria-label={t.placeholder} maxLength={MAX_MESSAGE_CHARS}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && send()} />
                <button onClick={send}>{t.send}</button>
              </div>
              <label className="mk-consent">
                <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
                <span>{t.consent}</span>
              </label>
              {consent && (
                <div className="mk-consent" style={{ paddingTop: 0 }}>
                  <input type="email" inputMode="email" autoComplete="email" aria-label={t.yourEmail} placeholder={t.yourEmail} value={visitorEmail}
                    style={{ flex: 1, padding: '9px 10px', border: '1px solid #d8e0ec', borderRadius: 8 }}
                    onChange={(e) => setVisitorEmail(e.target.value)} />
                </div>
              )}
            </>
          )}

          {tab === 'callback' && (
            <form className="mk-cb" onSubmit={submitCb}>
              <input required aria-label={t.cbName} placeholder={t.cbName} autoComplete="name" value={cb.name}
                onChange={(e) => setCb({ ...cb, name: e.target.value })} />
              <input required type="tel" inputMode="tel" autoComplete="tel" aria-label={t.yourPhone} placeholder={t.yourPhone} value={cb.phone}
                onChange={(e) => setCb({ ...cb, phone: e.target.value })} />
              <ConsentCheckbox id="mk-cb-consent" lang={lang} className="mk-consent" style={{ fontSize: '.74rem' }}
                checked={cbConsent} onChange={setCbConsent} />
              <button type="submit" disabled={cbStatus === 'sending'}>
                {cbStatus === 'sending' ? t.cbSending : t.cbSubmit}
              </button>
              {cbStatus === 'ok' && <p className="status-ok" style={{ fontSize: '.85rem' }}>{t.cbOk}</p>}
              {cbStatus === 'err' && <p className="status-err" style={{ fontSize: '.85rem' }}>{t.errMsg}</p>}
            </form>
          )}
        </div>
      )}

      {!open && (
        <>
          {/* WhatsApp sits at the top of the launcher column so it always
              stacks above the chat buttons and shares their hide rules. */}
          <WhatsAppLink lang={lang} placement="floating" className="wa-fab">
            <WhatsAppIcon size={30} />
          </WhatsAppLink>
          <button className="mk-fab" onClick={() => { setOpen(true); setTab('chat'); }}>💬 {t.fab}</button>
          <button className="mk-fab secondary" onClick={() => { setOpen(true); setTab('callback'); }}>📞 {t.cbFab}</button>
        </>
      )}
    </div>
  );
}
