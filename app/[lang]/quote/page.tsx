'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { team } from '@/lib/team-data';

type Lang = 'en' | 'es' | 'ru';

/* Insurance types for the compact dropdown — the full catalog with
   descriptions lives on the /insurance page; this page stays a clean
   contact page. Titles double as the insurance_type recorded on the lead. */
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

const UI: Record<Lang, Record<string, string>> = {
  en: {
    tagline: 'Home · Auto · Commercial · Florida', call: 'Call',
    h1: 'Contact us', sub: 'Call, text, or visit — or tell us what you need and a licensed agent calls you back.',
    callUs: 'Call us', textUs: 'Text us', visitUs: 'Visit us',
    agentsTitle: 'Prefer a specific agent?', agentsSub: 'Reach out to any of us by name — call or text.',
    formTitle: 'Request a callback',
    need: 'What do you need?', needPh: 'Choose insurance type…',
    zip: 'ZIP code', name: 'Full name', phName: 'Your name', phone: 'Phone', email: 'Email',
    message: 'Message (optional)', phMessage: 'Anything we should know?',
    consent: 'I agree that M&K Agency may contact me by phone, text, or automated/AI calls at the number provided about insurance, even if it is on a Do-Not-Call list. Consent is not a condition of purchase. Message/data rates may apply.',
    submit: 'Request my callback →', sending: 'Sending…',
    err: 'Something went wrong — please try again or call (305) 859-3953.',
    errConsent: 'Please check the consent box so we can contact you.',
    privacy: '🔒 Your info stays private. No spam, ever.',
    okH1: "You're all set!", okSub: 'Thanks — our team will call you back shortly. Need us now?', okCall: '📞 Call (305) 859-3953',
    scan: 'Scan to open or share this page on your phone',
    callTitle: 'Call', textTitle: 'Text',
  },
  es: {
    tagline: 'Hogar · Auto · Comercial · Florida', call: 'Llamar',
    h1: 'Contáctenos', sub: 'Llame, envíe un texto o visítenos — o díganos qué necesita y un agente licenciado le devuelve la llamada.',
    callUs: 'Llámenos', textUs: 'Envíe un texto', visitUs: 'Visítenos',
    agentsTitle: '¿Prefiere un agente específico?', agentsSub: 'Contacte a cualquiera de nosotros por nombre — llamada o texto.',
    formTitle: 'Solicitar una llamada',
    need: '¿Qué necesita?', needPh: 'Elija el tipo de seguro…',
    zip: 'Código postal', name: 'Nombre completo', phName: 'Tu nombre', phone: 'Teléfono', email: 'Correo electrónico',
    message: 'Mensaje (opcional)', phMessage: '¿Algo que debamos saber?',
    consent: 'Acepto que M&K Agency puede contactarme por teléfono, mensaje de texto o llamadas automatizadas/IA al número proporcionado sobre seguros, incluso si está en una lista de No Llamar. El consentimiento no es una condición de compra. Pueden aplicarse tarifas de mensajes/datos.',
    submit: 'Solicitar mi llamada →', sending: 'Enviando…',
    err: 'Algo salió mal — inténtalo de nuevo o llama al (305) 859-3953.',
    errConsent: 'Marca la casilla de consentimiento para que podamos contactarte.',
    privacy: '🔒 Tu información es privada. Sin spam, nunca.',
    okH1: '¡Todo listo!', okSub: 'Gracias — nuestro equipo te llamará en breve. ¿Nos necesitas ahora?', okCall: '📞 Llamar (305) 859-3953',
    scan: 'Escanee para abrir o compartir esta página en su teléfono',
    callTitle: 'Llamar', textTitle: 'Texto',
  },
  ru: {
    tagline: 'Дом · Авто · Бизнес · Флорида', call: 'Звонок',
    h1: 'Свяжитесь с нами', sub: 'Позвоните, напишите SMS или приезжайте — или скажите, что нужно, и лицензированный агент перезвонит.',
    callUs: 'Позвонить', textUs: 'Написать SMS', visitUs: 'Приехать',
    agentsTitle: 'Хотите конкретного агента?', agentsSub: 'Свяжитесь с любым из нас по имени — звонком или SMS.',
    formTitle: 'Заказать обратный звонок',
    need: 'Что вам нужно?', needPh: 'Выберите вид страхования…',
    zip: 'Индекс (ZIP)', name: 'Полное имя', phName: 'Ваше имя', phone: 'Телефон', email: 'Эл. почта',
    message: 'Сообщение (необязательно)', phMessage: 'Что нам важно знать?',
    consent: 'Я согласен(на), что M&K Agency может связаться со мной по телефону, SMS или с помощью автоматических/ИИ-звонков по указанному номеру по вопросам страхования, даже если номер внесён в список «Не звонить». Согласие не является условием покупки. Может взиматься плата за сообщения/данные.',
    submit: 'Заказать обратный звонок →', sending: 'Отправка…',
    err: 'Что-то пошло не так — попробуйте ещё раз или позвоните (305) 859-3953.',
    errConsent: 'Отметьте согласие, чтобы мы могли с вами связаться.',
    privacy: '🔒 Ваши данные конфиденциальны. Никакого спама.',
    okH1: 'Готово!', okSub: 'Спасибо — наша команда скоро перезвонит. Нужны прямо сейчас?', okCall: '📞 Позвонить (305) 859-3953',
    scan: 'Отсканируйте, чтобы открыть или поделиться этой страницей',
    callTitle: 'Позвонить', textTitle: 'Написать',
  },
};

export default function ContactUsPage() {
  const params = useParams();
  const raw = Array.isArray(params?.lang) ? params.lang[0] : (params?.lang as string | undefined);
  const lang: Lang = raw === 'es' || raw === 'ru' ? raw : 'en';
  const t = UI[lang];

  const [ins, setIns] = useState('');
  const [form, setForm] = useState({ zip: '', name: '', phone: '', email: '', message: '', consent: false });
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err' | 'err-consent'>('idle');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.consent) { setStatus('err-consent'); return; }
    setStatus('sending');
    let src = 'contact-us';
    try { const p = new URLSearchParams(window.location.search).get('src'); if (p) src = p; } catch {}
    try {
      const res = await fetch('/api/lead', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          insurance_type: ins || 'General',
          zip_code: form.zip, name: form.name, phone: form.phone, email: form.email,
          message: form.message, consent: form.consent, lang, source: src,
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

      <header className="qh-top">
        <div className="qh-top-in">
          <Image src="/images/mikhail-avatar.jpg" alt="Mikhail Kozlov" width={44} height={44} className="qh-av" />
          <div className="qh-brand">
            <strong>M&amp;K Agency</strong>
            <span>{t.tagline}</span>
          </div>
          <a href={`tel:${PHONE}`} className="qh-call">📞 {t.call}</a>
        </div>
      </header>

      <div className="qh-wrap">
        <h1 className="qh-h1">{t.h1}</h1>
        <p className="qh-sub">{t.sub}</p>

        {/* Left: call / text / visit (vertical). Right: contact an agent by name. */}
        <div className="qh-two">
          <div className="qh-contact">
            <a href={`tel:${PHONE}`} className="qh-cbtn">📞 {t.callUs}</a>
            <a href={`sms:${PHONE}`} className="qh-cbtn">💬 {t.textUs}</a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=33550+S+Dixie+Hwy+Suite+102+Florida+City+FL+33034"
              target="_blank"
              rel="noopener noreferrer"
              className="qh-cbtn"
            >
              📍 {t.visitUs}
            </a>
          </div>

          <div className="qh-agents">
            <h2 className="qh-h2">{t.agentsTitle}</h2>
            <p className="qh-agents-sub">{t.agentsSub}</p>
            <div className="qh-ag-grid">
              {AGENTS.map((a) => {
                const body = encodeURIComponent(`Hi! I'd like to talk to ${a.name} about my insurance.`);
                return (
                  <div key={a.slug} className="qh-ag">
                    <img src={a.photo} alt={a.name} />
                    <span className="qh-ag-name">{a.name.split(' ')[0]}</span>
                    <span className="qh-ag-actions">
                      <a href={`tel:${PHONE}`} title={`${t.callTitle} — ${a.name}`}>📞</a>
                      <a href={`sms:${PHONE}?body=${body}`} title={`${t.textTitle} — ${a.name}`}>💬</a>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Callback form — compact type picker; the full catalog lives on /insurance */}
        <form id="q-form" onSubmit={submit} className="qh-form">
          <h2 className="qh-h2" style={{ marginTop: 0 }}>{t.formTitle}</h2>

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

          <label>{t.phone}</label>
          <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="(305) 555-0123" required />

          <label>{t.email}</label>
          <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@email.com" required />

          <label>{t.message}</label>
          <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder={t.phMessage} />

          <label className="qh-consent">
            <input type="checkbox" checked={form.consent}
              onChange={(e) => setForm({ ...form, consent: e.target.checked })} required />
            <span>{t.consent}</span>
          </label>

          <button type="submit" className="qh-btn qh-btn-blue" disabled={status === 'sending'}>
            {status === 'sending' ? t.sending : t.submit}
          </button>

          {(status === 'err' || status === 'err-consent') && (
            <p className="qh-err">{status === 'err-consent' ? t.errConsent : t.err}</p>
          )}
          <p className="qh-priv">{t.privacy}</p>
        </form>

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
.qh-top{background:#082a59;color:#fff}
.qh-top-in{max-width:760px;margin:0 auto;display:flex;align-items:center;gap:12px;padding:14px 18px}
.qh-av{border-radius:50%;box-shadow:0 0 0 2px rgba(255,255,255,.3)}
.qh-brand{display:flex;flex-direction:column;line-height:1.2}
.qh-brand span{font-size:12px;color:#9dc0ee}
.qh-call{margin-left:auto;background:rgba(255,255,255,.12);color:#fff;text-decoration:none;font-weight:600;font-size:14px;padding:8px 12px;border-radius:12px}
.qh-wrap{max-width:760px;margin:0 auto;padding:22px 18px 60px}
.qh-h1{font-size:28px;font-weight:800;color:#082a59;margin:0}
.qh-h2{font-size:18px;font-weight:800;color:#082a59;margin:0 0 4px}
.qh-sub{color:#475569;margin:6px 0 18px}
.qh-two{display:grid;grid-template-columns:200px 1fr;gap:16px;margin-bottom:22px}
.qh-contact{display:flex;flex-direction:column;gap:10px}
.qh-cbtn{text-align:center;background:#fff;border:1.5px solid #d9e2ec;border-radius:14px;padding:13px 14px;color:#082a59;font-weight:700;font-size:15px;text-decoration:none;transition:.15s}
.qh-cbtn:hover{border-color:#1d6fe0;box-shadow:0 6px 18px rgba(8,42,89,.08)}
.qh-agents{background:#fff;border:1px solid #e6ecf5;border-radius:18px;padding:16px}
.qh-agents-sub{font-size:13px;color:#5b6b7f;margin:0 0 12px}
.qh-ag-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px}
.qh-ag{display:flex;align-items:center;gap:8px;background:#f8fafd;border:1.5px solid #e2e8f0;border-radius:12px;padding:7px 9px}
.qh-ag img{width:38px;height:38px;border-radius:50%;object-fit:cover;flex:0 0 auto}
.qh-ag-name{font-weight:700;color:#082a59;font-size:14px;flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis}
.qh-ag-actions{display:flex;gap:4px}
.qh-ag-actions a{display:flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:50%;background:#eef5ff;text-decoration:none;font-size:14px;transition:.15s}
.qh-ag-actions a:hover{background:#dbeafe}
.qh-form{background:#fff;border-radius:22px;padding:20px 18px;box-shadow:0 8px 30px rgba(8,42,89,.06)}
.qh-form label{display:block;font-size:13px;font-weight:600;margin:12px 0 5px}
.qh-form input,.qh-form textarea,.qh-form select{width:100%;padding:12px 13px;border:1.5px solid #d9e2ec;border-radius:12px;font-size:15px;font-family:inherit;box-sizing:border-box;background:#fff}
.qh-form input:focus,.qh-form textarea:focus,.qh-form select:focus{outline:none;border-color:#1d6fe0}
.qh-form textarea{height:70px;resize:vertical}
.qh-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.qh-consent{display:flex;gap:10px;align-items:flex-start;font-size:12px;color:#5b6b7f;font-weight:400;margin-top:14px;cursor:pointer}
.qh-consent input{width:16px;height:16px;flex:0 0 auto;margin-top:2px}
.qh-btn{display:inline-block;text-align:center;text-decoration:none;font-weight:700;border:none;border-radius:16px;cursor:pointer;transition:.15s}
.qh-btn-blue{width:100%;background:#1d6fe0;color:#fff;padding:15px;font-size:17px;margin-top:16px}
.qh-btn-blue:hover{background:#1a63c9}
.qh-btn-blue:disabled{opacity:.6}
.qh-btn-white{background:#fff;color:#082a59;padding:13px 26px;font-size:16px;margin-top:22px}
.qh-err{color:#dc2626;font-size:14px;font-weight:600;text-align:center;margin-top:10px}
.qh-priv{color:#94a3b8;font-size:12px;text-align:center;margin-top:12px}
.qh-ok{min-height:100vh;background:#082a59;color:#fff;display:flex;align-items:center;justify-content:center;padding:24px}
.qh-ok-box{text-align:center;max-width:420px}
.qh-check{width:64px;height:64px;border-radius:50%;background:#1d6fe0;display:flex;align-items:center;justify-content:center;font-size:30px;margin:0 auto 22px}
.qh-ok-box h1{font-size:30px;margin:0 0 10px}
.qh-ok-box p{color:#c9dcf5;font-size:17px;margin:0}
.qh-qr{display:flex;flex-direction:column;align-items:center;gap:8px;margin:26px auto 0;padding:18px;background:#fff;border:1px solid #e6ecf5;border-radius:18px;max-width:220px;text-align:center}
.qh-qr span{font-size:12px;color:#5b6b7f;line-height:1.4}
@media(max-width:560px){.qh-two{grid-template-columns:1fr}.qh-h1{font-size:24px}}
`;
