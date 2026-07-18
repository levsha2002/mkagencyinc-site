'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { team } from '@/lib/team-data';

type Lang = 'en' | 'es' | 'ru';

/* Insurance types for the compact dropdown — the full catalog with
   descriptions lives on the /insurance page. */
const CATS: { id: string; label: Record<Lang, string>; types: string[] }[] = [
  {
    id: 'auto',
    label: { en: 'Auto', es: 'Auto', ru: 'Авто' },
    types: [
      'Standard / Low-Risk Auto',
      'High-Risk · SR-22 / FR-44',
      'Classic & Collector',
      'Electric Vehicle (EV)',
      'Commercial Auto',
      'Rideshare · Uber / Lyft',
    ],
  },
  {
    id: 'home',
    label: { en: 'Home', es: 'Hogar', ru: 'Дом' },
    types: ['Single-Family Home', 'Condo (HO-6)', 'Townhouse', 'Renters'],
  },
  {
    id: 'life',
    label: { en: 'Life', es: 'Vida', ru: 'Жизнь' },
    types: ['Term Life', 'Whole Life'],
  },
  {
    id: 'other',
    label: { en: 'Specialty', es: 'Especiales', ru: 'Другое' },
    types: ['Motorcycle', 'Boat / Watercraft', 'Jet Ski / PWC', 'Off-Road (ATV / UTV)', 'Golf Cart', 'Pet Insurance', 'Umbrella'],
  },
];

const AGENTS = team.filter((m) => m.slug !== 'mikhail-kozlov');
const PHONE = '3058593953';
const MAP_EMBED =
  'https://www.google.com/maps?q=33550+S+Dixie+Hwy+Suite+102,+Florida+City,+FL+33034&output=embed';

const UI: Record<Lang, Record<string, string>> = {
  en: {
    tagline: 'Home · Auto · Commercial · Florida', call: 'Call',
    callUs: 'Call us', textUs: 'Text us', visitUs: 'Visit us',
    h1a: 'Contact our', h1b: 'Agents',
    sub: 'Licensed. Local. In English, Español, По-русски.',
    formTitle: 'Request a callback',
    agentLabel: 'Who would you like to talk to?', agentAny: 'Any available agent',
    need: 'What do you need?', needPh: 'Choose insurance type…',
    zip: 'ZIP code', name: 'Full name', phName: 'Your name', phone: 'Phone', email: 'Email',
    message: 'Message (optional)', phMessage: 'Anything we should know?',
    consent: 'I agree that M&K Agency may contact me by phone, text, or automated/AI calls at the number provided about insurance, even if it is on a Do-Not-Call list. Consent is not a condition of purchase. Message/data rates may apply.',
    submit: 'Request my callback →', sending: 'Sending…',
    err: 'Something went wrong — please try again or call (305) 859-3953.',
    errConsent: 'Please check the consent box so we can contact you.',
    privacy: '🔒 Your info stays private. No spam, ever.',
    okH1: "You're all set!", okSub: 'Thanks — our team will call you back shortly. Need us now?', okCall: '📞 Call (305) 859-3953',
    mapTitle: '📍 Visit us — 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034',
    scan: 'Scan to open or share this page on your phone',
    callTitle: 'Call', textTitle: 'Text', smsBody: "Hi! I'd like to talk to {name} about my insurance.",
    prefAgent: 'Preferred agent',
  },
  es: {
    tagline: 'Hogar · Auto · Comercial · Florida', call: 'Llamar',
    callUs: 'Llámenos', textUs: 'Envíe un texto', visitUs: 'Visítenos',
    h1a: 'Contacte a nuestros', h1b: 'Agentes',
    sub: 'Licenciados. Locales. En English, Español, По-русски.',
    formTitle: 'Solicitar una llamada',
    agentLabel: '¿Con quién le gustaría hablar?', agentAny: 'Cualquier agente disponible',
    need: '¿Qué necesita?', needPh: 'Elija el tipo de seguro…',
    zip: 'Código postal', name: 'Nombre completo', phName: 'Tu nombre', phone: 'Teléfono', email: 'Correo electrónico',
    message: 'Mensaje (opcional)', phMessage: '¿Algo que debamos saber?',
    consent: 'Acepto que M&K Agency puede contactarme por teléfono, mensaje de texto o llamadas automatizadas/IA al número proporcionado sobre seguros, incluso si está en una lista de No Llamar. El consentimiento no es una condición de compra. Pueden aplicarse tarifas de mensajes/datos.',
    submit: 'Solicitar mi llamada →', sending: 'Enviando…',
    err: 'Algo salió mal — inténtalo de nuevo o llama al (305) 859-3953.',
    errConsent: 'Marca la casilla de consentimiento para que podamos contactarte.',
    privacy: '🔒 Tu información es privada. Sin spam, nunca.',
    okH1: '¡Todo listo!', okSub: 'Gracias — nuestro equipo te llamará en breve. ¿Nos necesitas ahora?', okCall: '📞 Llamar (305) 859-3953',
    mapTitle: '📍 Visítenos — 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034',
    scan: 'Escanee para abrir o compartir esta página en su teléfono',
    callTitle: 'Llamar', textTitle: 'Texto', smsBody: 'Hola! Me gustaría hablar con {name} sobre mi seguro.',
    prefAgent: 'Agente preferido',
  },
  ru: {
    tagline: 'Дом · Авто · Бизнес · Флорида', call: 'Звонок',
    callUs: 'Позвонить', textUs: 'Написать SMS', visitUs: 'Приехать',
    h1a: 'Свяжитесь с нашими', h1b: 'агентами',
    sub: 'Лицензированные. Местные. English, Español, По-русски.',
    formTitle: 'Заказать обратный звонок',
    agentLabel: 'С кем хотите поговорить?', agentAny: 'Любой свободный агент',
    need: 'Что вам нужно?', needPh: 'Выберите вид страхования…',
    zip: 'Индекс (ZIP)', name: 'Полное имя', phName: 'Ваше имя', phone: 'Телефон', email: 'Эл. почта',
    message: 'Сообщение (необязательно)', phMessage: 'Что нам важно знать?',
    consent: 'Я согласен(на), что M&K Agency может связаться со мной по телефону, SMS или с помощью автоматических/ИИ-звонков по указанному номеру по вопросам страхования, даже если номер внесён в список «Не звонить». Согласие не является условием покупки. Может взиматься плата за сообщения/данные.',
    submit: 'Заказать обратный звонок →', sending: 'Отправка…',
    err: 'Что-то пошло не так — попробуйте ещё раз или позвоните (305) 859-3953.',
    errConsent: 'Отметьте согласие, чтобы мы могли с вами связаться.',
    privacy: '🔒 Ваши данные конфиденциальны. Никакого спама.',
    okH1: 'Готово!', okSub: 'Спасибо — наша команда скоро перезвонит. Нужны прямо сейчас?', okCall: '📞 Позвонить (305) 859-3953',
    mapTitle: '📍 Наш офис — 33550 S Dixie Hwy, Suite 102, Florida City, FL 33034',
    scan: 'Отсканируйте, чтобы открыть или поделиться этой страницей',
    callTitle: 'Позвонить', textTitle: 'Написать', smsBody: 'Здравствуйте! Хочу поговорить с {name} о страховке.',
    prefAgent: 'Предпочитаемый агент',
  },
};

export default function ContactAgentsPage() {
  const params = useParams();
  const raw = Array.isArray(params?.lang) ? params.lang[0] : (params?.lang as string | undefined);
  const lang: Lang = raw === 'es' || raw === 'ru' ? raw : 'en';
  const t = UI[lang];

  const [agent, setAgent] = useState('');
  const [ins, setIns] = useState('');
  const [form, setForm] = useState({ zip: '', name: '', phone: '', email: '', message: '', consent: false });
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err' | 'err-consent'>('idle');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.consent) { setStatus('err-consent'); return; }
    setStatus('sending');
    let src = 'contact-agents';
    try { const p = new URLSearchParams(window.location.search).get('src'); if (p) src = p; } catch {}
    const msg = (agent ? `${t.prefAgent}: ${agent}. ` : '') + form.message;
    try {
      const res = await fetch('/api/lead', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          insurance_type: ins || 'General',
          zip_code: form.zip, name: form.name, phone: form.phone, email: form.email,
          message: msg, consent: form.consent, lang, source: src,
        }),
      });
      setStatus(res.ok ? 'ok' : 'err');
    } catch { setStatus('err'); }
  }

  if (status === 'ok') {
    return (
      <main className="qh-ok">
        <style>{CSS}</style>
        <div className="qh-ok-box">
          <div className="qh-check">✓</div>
          <h1>{t.okH1}</h1>
          <p>{t.okSub}</p>
          <a href={`tel:${PHONE}`} className="qh-btn qh-btn-white">{t.okCall}</a>
        </div>
      </main>
    );
  }

  return (
    <main className="qh">
      <style>{CSS}</style>

      {/* ===== Navy premium hero: brand, quick actions, agents ===== */}
      <div className="qh-navy">
        <div className="qh-top-in">
          <Image src="/images/mikhail-avatar.jpg" alt="Mikhail Kozlov" width={44} height={44} className="qh-av" />
          <div className="qh-brand">
            <strong>M&amp;K Agency</strong>
            <span>{t.tagline}</span>
          </div>
          <a href={`tel:${PHONE}`} className="qh-call-gold">📞 {t.call}</a>
        </div>

        <div className="qh-actions">
          <a href={`tel:${PHONE}`}>📞 {t.callUs}</a>
          <a href={`sms:${PHONE}`}>💬 {t.textUs}</a>
          <a href="#map">📍 {t.visitUs}</a>
        </div>

        <div className="qh-hero">
          <h1>{t.h1a} <span className="qh-gold">{t.h1b}</span></h1>
          <p className="qh-hero-sub">{t.sub}</p>

          <div className="qh-agents">
            {AGENTS.map((a) => {
              const first = a.name.split(' ')[0];
              const body = encodeURIComponent(t.smsBody.replace('{name}', a.name));
              return (
                <div key={a.slug} className="qh-agent">
                  <img src={a.photo} alt={a.name} />
                  <div className="qh-agent-name">{first}</div>
                  <div className="qh-agent-actions">
                    <a href={`tel:${PHONE}`} title={`${t.callTitle} — ${a.name}`}>📞</a>
                    <a href={`sms:${PHONE}?body=${body}`} title={`${t.textTitle} — ${a.name}`}>💬</a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ===== White content: callback form, map, QR ===== */}
      <div className="qh-wrap">
        <form onSubmit={submit} className="qh-form">
          <h2>{t.formTitle}</h2>

          <div className="qh-row">
            <div>
              <label>{t.agentLabel}</label>
              <select value={agent} onChange={(e) => setAgent(e.target.value)}>
                <option value="">{t.agentAny}</option>
                {AGENTS.map((a) => (
                  <option key={a.slug} value={a.name}>{a.name.split(' ')[0]}</option>
                ))}
              </select>
            </div>
            <div>
              <label>{t.need}</label>
              <select value={ins} onChange={(e) => setIns(e.target.value)} required>
                <option value="" disabled>{t.needPh}</option>
                {CATS.map((c) => (
                  <optgroup key={c.id} label={c.label[lang]}>
                    {c.types.map((ty) => (
                      <option key={ty} value={ty}>{ty}</option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>
          </div>

          <div className="qh-row">
            <div>
              <label>{t.zip}</label>
              <input inputMode="numeric" maxLength={5} value={form.zip}
                onChange={(e) => setForm({ ...form, zip: e.target.value })} placeholder="33034" required />
            </div>
            <div>
              <label>{t.name}</label>
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder={t.phName} required />
            </div>
          </div>

          <div className="qh-row">
            <div>
              <label>{t.phone}</label>
              <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="(305) 555-0123" required />
            </div>
            <div>
              <label>{t.email}</label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@email.com" required />
            </div>
          </div>

          <label>{t.message}</label>
          <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder={t.phMessage} />

          <label className="qh-consent">
            <input type="checkbox" checked={form.consent}
              onChange={(e) => setForm({ ...form, consent: e.target.checked })} required />
            <span>{t.consent}</span>
          </label>

          <button type="submit" className="qh-btn qh-btn-navy" disabled={status === 'sending'}>
            {status === 'sending' ? t.sending : t.submit}
          </button>

          {(status === 'err' || status === 'err-consent') && (
            <p className="qh-err">{status === 'err-consent' ? t.errConsent : t.err}</p>
          )}
          <p className="qh-priv">{t.privacy}</p>
        </form>

        <div className="qh-map" id="map">
          <div className="qh-map-cap">{t.mapTitle}</div>
          <iframe src={MAP_EMBED} loading="lazy" title="M&K Agency office map" />
        </div>

        <div className="qh-qr">
          <Image src="/images/quote-qr.png" alt="QR code — M&K Agency contact page" width={116} height={116} />
          <span>{t.scan}</span>
        </div>
      </div>
    </main>
  );
}

const CSS = `
.qh{background:#f5f7fa;min-height:100vh;color:#0f172a;font-family:inherit}
.qh-navy{background:#061c3d;color:#fff;padding-bottom:44px}
.qh-top-in{max-width:820px;margin:0 auto;display:flex;align-items:center;gap:12px;padding:14px 18px}
.qh-av{border-radius:50%;box-shadow:0 0 0 2px rgba(255,209,102,.6)}
.qh-brand{display:flex;flex-direction:column;line-height:1.2}
.qh-brand span{font-size:12px;color:#9dc0ee}
.qh-call-gold{margin-left:auto;background:#ffd166;color:#061c3d;text-decoration:none;font-weight:800;font-size:14px;padding:9px 16px;border-radius:12px}
.qh-actions{display:flex;gap:10px;max-width:820px;margin:0 auto;padding:4px 18px 0;flex-wrap:wrap}
.qh-actions a{flex:1 1 130px;text-align:center;font-weight:800;font-size:15px;padding:12px 10px;border-radius:14px;border:1.5px solid rgba(255,255,255,.25);background:rgba(255,255,255,.08);color:#fff;text-decoration:none;transition:.15s}
.qh-actions a:hover{background:rgba(255,255,255,.16);border-color:#ffd166}
.qh-hero{max-width:820px;margin:0 auto;padding:20px 18px 0;text-align:center}
.qh-hero h1{font-size:31px;font-weight:800;margin:0;color:#fff}
.qh-gold{color:#ffd166}
.qh-hero-sub{color:#9dc0ee;margin:6px 0 0;font-size:15px}
.qh-agents{display:flex;justify-content:center;gap:18px;flex-wrap:wrap;margin-top:24px}
.qh-agent{text-align:center;flex:0 0 auto;width:104px}
.qh-agent img{width:88px;height:88px;border-radius:50%;object-fit:cover;border:3px solid #ffd166;display:block;margin:0 auto 8px;background:#0d2b57}
.qh-agent-name{font-size:17px;font-weight:800;color:#fff}
.qh-agent-actions{display:flex;justify-content:center;gap:6px;margin-top:6px}
.qh-agent-actions a{display:flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,.12);text-decoration:none;font-size:15px;transition:.15s}
.qh-agent-actions a:hover{background:rgba(255,209,102,.35)}
.qh-wrap{max-width:820px;margin:-26px auto 0;padding:0 18px 60px}
.qh-form{background:#fff;border-radius:22px;border-top:4px solid #ffd166;padding:22px 20px;box-shadow:0 10px 34px rgba(6,28,61,.14)}
.qh-form h2{color:#082a59;font-size:20px;margin:0 0 6px}
.qh-form label{display:block;font-size:13px;font-weight:700;margin:12px 0 5px;color:#334155}
.qh-form input,.qh-form textarea,.qh-form select{width:100%;padding:12px 13px;border:1.5px solid #d9e2ec;border-radius:12px;font-size:15px;font-family:inherit;box-sizing:border-box;background:#fff}
.qh-form input:focus,.qh-form textarea:focus,.qh-form select:focus{outline:none;border-color:#1d6fe0}
.qh-form textarea{height:64px;resize:vertical}
.qh-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.qh-consent{display:flex;gap:10px;align-items:flex-start;font-size:12px;color:#5b6b7f;font-weight:400;margin-top:14px;cursor:pointer}
.qh-consent input{width:16px;height:16px;flex:0 0 auto;margin-top:2px}
.qh-btn{display:inline-block;text-align:center;text-decoration:none;font-weight:800;border:none;border-radius:16px;cursor:pointer;transition:.15s}
.qh-btn-navy{width:100%;background:#061c3d;color:#fff;padding:15px;font-size:17px;margin-top:16px}
.qh-btn-navy:hover{background:#0d2b57}
.qh-btn-navy:disabled{opacity:.6}
.qh-btn-white{background:#fff;color:#082a59;padding:13px 26px;font-size:16px;margin-top:22px}
.qh-err{color:#dc2626;font-size:14px;font-weight:600;text-align:center;margin-top:10px}
.qh-priv{color:#94a3b8;font-size:12px;text-align:center;margin-top:12px}
.qh-map{margin-top:26px;border-radius:20px;overflow:hidden;border:1px solid #dbe4f0;box-shadow:0 8px 28px rgba(6,28,61,.10)}
.qh-map-cap{background:#fff;padding:12px 16px;font-size:14px;font-weight:700;color:#082a59}
.qh-map iframe{width:100%;height:300px;border:0;display:block}
.qh-qr{display:flex;flex-direction:column;align-items:center;gap:8px;margin:26px auto 0;padding:18px;background:#fff;border:1px solid #e6ecf5;border-radius:18px;max-width:220px;text-align:center}
.qh-qr span{font-size:12px;color:#5b6b7f;line-height:1.4}
.qh-ok{min-height:100vh;background:#061c3d;color:#fff;display:flex;align-items:center;justify-content:center;padding:24px}
.qh-ok-box{text-align:center;max-width:420px}
.qh-check{width:64px;height:64px;border-radius:50%;background:#ffd166;color:#061c3d;display:flex;align-items:center;justify-content:center;font-size:30px;font-weight:800;margin:0 auto 22px}
.qh-ok-box h1{font-size:30px;margin:0 0 10px}
.qh-ok-box p{color:#c9dcf5;font-size:17px;margin:0}
@media(max-width:560px){.qh-row{grid-template-columns:1fr}.qh-hero h1{font-size:25px}.qh-agents{gap:12px}.qh-agent{width:92px}.qh-agent img{width:76px;height:76px}}
`;
