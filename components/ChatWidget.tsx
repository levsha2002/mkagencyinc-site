'use client';

import { useEffect, useRef, useState } from 'react';
import { getDict } from '@/lib/dictionaries';

type Msg = { role: 'user' | 'assistant'; content: string };

// Detects a phone number or email address anywhere in the visitor's messages.
const PHONE_REGEX = /(\+?1[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/;
const EMAIL_REGEX = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

function hasContactInfo(messages: Msg[]) {
  const visitorText = messages
    .filter((m) => m.role === 'user')
    .map((m) => m.content)
    .join(' \n ');
  return PHONE_REGEX.test(visitorText) || EMAIL_REGEX.test(visitorText);
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

  const [cb, setCb] = useState({ name: '', phone: '' });
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
        body: JSON.stringify({ messages, visitorEmail, lang }),
      }).catch(() => {
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
        body: JSON.stringify({ messages: next, lang }),
      });
      const data = await res.json();
      setMessages([...next, { role: 'assistant', content: data.reply || t.errMsg }]);
    } catch {
      setMessages([...next, { role: 'assistant', content: t.errMsg }]);
    }
    setBusy(false);
  };

  const submitCb = async (e: React.FormEvent) => {
    e.preventDefault();
    setCbStatus('sending');
    try {
      const res = await fetch('/api/callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...cb, lang }),
      });
      setCbStatus(res.ok ? 'ok' : 'err');
      if (res.ok) setCb({ name: '', phone: '' });
    } catch { setCbStatus('err'); }
  };

  return (
    <div className="mk-widget">
      {open && (
        <div className="mk-panel">
          <div className="mk-head">
            <span>💬 {t.title}</span>
            <button onClick={() => setOpen(false)}>✕</button>
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
                  <div key={i} className={`msg ${m.role === 'user' ? 'user' : 'bot'}`}>{m.content}</div>
                ))}
                {busy && <div className="msg bot">…</div>}
              </div>
              <div className="mk-input">
                <input value={input} placeholder={t.placeholder}
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
                  <input type="email" placeholder={t.yourEmail} value={visitorEmail}
                    style={{ flex: 1, padding: '9px 10px', border: '1px solid #d8e0ec', borderRadius: 8 }}
                    onChange={(e) => setVisitorEmail(e.target.value)} />
                </div>
              )}
            </>
          )}

          {tab === 'callback' && (
            <form className="mk-cb" onSubmit={submitCb}>
              <input required placeholder={t.cbName} value={cb.name}
                onChange={(e) => setCb({ ...cb, name: e.target.value })} />
              <input required type="tel" placeholder={t.yourPhone} value={cb.phone}
                onChange={(e) => setCb({ ...cb, phone: e.target.value })} />
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
          <button className="mk-fab" onClick={() => { setOpen(true); setTab('chat'); }}>💬 {t.fab}</button>
          <button className="mk-fab secondary" onClick={() => { setOpen(true); setTab('callback'); }}>📞 {t.cbFab}</button>
        </>
      )}
    </div>
  );
}
