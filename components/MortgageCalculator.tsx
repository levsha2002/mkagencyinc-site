'use client';

import { useMemo, useState } from 'react';

// Mortgage payment calculator.
//
// This is arithmetic, not advice, and the distinction is what keeps it clean:
// it computes a payment from numbers the visitor supplies. It does not quote
// an interest rate, does not say what anyone can afford or qualify for, and
// does not price insurance. Escrow figures are the visitor's own estimates,
// labelled as such — a calculator that guessed someone's Florida insurance
// premium would be quoting, which only a licensed agent may do.
//
// It sits on the protection page for one reason: the mortgage is usually the
// largest fixed obligation a household has, and seeing the monthly number is
// what makes the question underneath it concrete — what carries this payment
// if the income behind it stops? That question routes to an agent; the
// calculator itself stays neutral.

type Lang = 'en' | 'es' | 'ru';

const T: Record<Lang, Record<string, string>> = {
  en: {
    title: 'Mortgage payment calculator',
    sub: 'Work out the monthly payment on a home loan. Everything you enter stays in your browser — nothing is sent anywhere.',
    price: 'Home price',
    down: 'Down payment',
    rate: 'Interest rate (%)',
    years: 'Loan term (years)',
    tax: 'Property tax per year (your estimate)',
    ins: 'Home insurance per year (your estimate)',
    hoa: 'HOA per month (if any)',
    monthly: 'Estimated monthly payment',
    principal: 'Principal & interest',
    escrow: 'Taxes, insurance & HOA',
    loanAmt: 'Loan amount',
    totalInt: 'Total interest over the term',
    note: 'Arithmetic only, based on the numbers you entered. It is not a loan offer, not a rate quote, not an insurance quote, and it does not indicate what you qualify for. Your lender sets the rate and terms; your insurance premium is set by the insurance company.',
    tie: 'The question underneath the number',
    tieBody:
      'This payment continues whether or not the income behind it does. If someone depends on that income, it is worth knowing what would carry the payment if it stopped — a licensed agent can walk through it with you.',
    tieCta: 'Take the protection check →',
  },
  es: {
    title: 'Calculadora de pago hipotecario',
    sub: 'Calcule el pago mensual de un préstamo hipotecario. Todo lo que escriba queda en su navegador — no se envía a ningún lado.',
    price: 'Precio de la casa',
    down: 'Pago inicial',
    rate: 'Tasa de interés (%)',
    years: 'Plazo del préstamo (años)',
    tax: 'Impuesto predial al año (su estimación)',
    ins: 'Seguro de casa al año (su estimación)',
    hoa: 'HOA por mes (si aplica)',
    monthly: 'Pago mensual estimado',
    principal: 'Capital e intereses',
    escrow: 'Impuestos, seguro y HOA',
    loanAmt: 'Monto del préstamo',
    totalInt: 'Interés total durante el plazo',
    note: 'Solo aritmética, basada en los números que usted ingresó. No es una oferta de préstamo, ni una cotización de tasa, ni una cotización de seguro, y no indica para qué califica. Su prestamista fija la tasa y los términos; su prima de seguro la fija la compañía de seguros.',
    tie: 'La pregunta detrás del número',
    tieBody:
      'Este pago continúa aunque el ingreso que lo sostiene no continúe. Si alguien depende de ese ingreso, vale la pena saber qué sostendría el pago si se detuviera — un agente licenciado puede repasarlo con usted.',
    tieCta: 'Hacer la revisión de protección →',
  },
  ru: {
    title: 'Калькулятор ипотечного платежа',
    sub: 'Посчитайте ежемесячный платёж по ипотеке. Всё, что вы вводите, остаётся в браузере — никуда не отправляется.',
    price: 'Цена дома',
    down: 'Первоначальный взнос',
    rate: 'Процентная ставка (%)',
    years: 'Срок кредита (лет)',
    tax: 'Налог на недвижимость в год (ваша оценка)',
    ins: 'Страховка дома в год (ваша оценка)',
    hoa: 'HOA в месяц (если есть)',
    monthly: 'Ориентировочный платёж в месяц',
    principal: 'Основной долг и проценты',
    escrow: 'Налоги, страховка и HOA',
    loanAmt: 'Сумма кредита',
    totalInt: 'Всего процентов за срок',
    note: 'Это только арифметика по введённым вами числам. Это не предложение кредита, не котировка ставки, не расчёт стоимости страховки и не показатель того, на что вы можете претендовать. Ставку и условия определяет кредитор; страховую премию определяет страховая компания.',
    tie: 'Вопрос, который стоит за этой цифрой',
    tieBody:
      'Этот платёж продолжается независимо от того, продолжается ли доход, который его тянет. Если от этого дохода кто-то зависит, стоит понимать, чем платёж будет закрываться, если доход прекратится, — лицензированный агент разберёт это с вами.',
    tieCta: 'Пройти проверку защиты →',
  },
};

const money = (n: number, lang: Lang) =>
  new Intl.NumberFormat(lang === 'ru' ? 'ru-RU' : lang === 'es' ? 'es-US' : 'en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(Number.isFinite(n) ? n : 0);

export default function MortgageCalculator({ lang = 'en' }: { lang?: string }) {
  const L: Lang = lang === 'es' || lang === 'ru' ? lang : 'en';
  const t = T[L];

  const [price, setPrice] = useState('420000');
  const [down, setDown] = useState('84000');
  const [rate, setRate] = useState('6.5');
  const [years, setYears] = useState('30');
  const [tax, setTax] = useState('5200');
  const [ins, setIns] = useState('4800');
  const [hoa, setHoa] = useState('0');

  const num = (v: string) => {
    const n = parseFloat(v);
    return Number.isFinite(n) && n >= 0 ? n : 0;
  };

  const calc = useMemo(() => {
    const p = num(price);
    const d = Math.min(num(down), p);
    const loan = Math.max(p - d, 0);
    const r = num(rate) / 100 / 12;
    const n = Math.round(num(years) * 12);

    let pi = 0;
    if (loan > 0 && n > 0) {
      // Zero-rate loans divide evenly; the standard formula would divide by zero.
      pi = r === 0 ? loan / n : (loan * r) / (1 - Math.pow(1 + r, -n));
    }
    const escrow = num(tax) / 12 + num(ins) / 12 + num(hoa);
    return {
      loan,
      pi,
      escrow,
      total: pi + escrow,
      totalInterest: pi > 0 && n > 0 ? pi * n - loan : 0,
    };
  }, [price, down, rate, years, tax, ins, hoa]);

  const field: React.CSSProperties = {
    padding: '11px 13px',
    borderRadius: 10,
    border: '1px solid #dfe6f0',
    fontSize: '.95rem',
    width: '100%',
  };
  const label: React.CSSProperties = {
    display: 'block',
    fontSize: '.85rem',
    color: 'var(--muted)',
    marginBottom: 5,
  };

  const Row = ({ id, v, set, l }: { id: string; v: string; set: (s: string) => void; l: string }) => (
    <div>
      <label htmlFor={id} style={label}>
        {l}
      </label>
      <input
        id={id}
        type="number"
        min={0}
        inputMode="decimal"
        value={v}
        onChange={(e) => set(e.target.value)}
        style={field}
      />
    </div>
  );

  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid #e6ecf5',
        borderRadius: 18,
        padding: '26px 24px',
        boxShadow: '0 10px 30px rgba(8,42,89,.06)',
      }}
    >
      <h2 style={{ textAlign: 'left', marginTop: 0, marginBottom: 6 }}>{t.title}</h2>
      <p style={{ color: 'var(--muted)', lineHeight: 1.6, marginBottom: 22 }}>{t.sub}</p>

      <div
        style={{
          display: 'grid',
          gap: 14,
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          marginBottom: 22,
        }}
      >
        <Row id="mc-price" v={price} set={setPrice} l={t.price} />
        <Row id="mc-down" v={down} set={setDown} l={t.down} />
        <Row id="mc-rate" v={rate} set={setRate} l={t.rate} />
        <Row id="mc-years" v={years} set={setYears} l={t.years} />
        <Row id="mc-tax" v={tax} set={setTax} l={t.tax} />
        <Row id="mc-ins" v={ins} set={setIns} l={t.ins} />
        <Row id="mc-hoa" v={hoa} set={setHoa} l={t.hoa} />
      </div>

      <div
        style={{
          background: '#f2f7ff',
          borderRadius: 14,
          padding: '20px 22px',
        }}
      >
        <p style={{ color: 'var(--muted)', fontSize: '.85rem', margin: 0 }}>{t.monthly}</p>
        <p
          style={{
            fontSize: '2.1rem',
            fontWeight: 800,
            color: 'var(--navy)',
            margin: '4px 0 14px',
            lineHeight: 1.1,
          }}
        >
          {money(calc.total, L)}
        </p>

        <div style={{ display: 'grid', gap: 6, fontSize: '.9rem', color: '#41546e' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
            <span>{t.principal}</span>
            <strong>{money(calc.pi, L)}</strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
            <span>{t.escrow}</span>
            <strong>{money(calc.escrow, L)}</strong>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 12,
              borderTop: '1px solid #dbe6f5',
              paddingTop: 6,
              marginTop: 4,
            }}
          >
            <span>{t.loanAmt}</span>
            <strong>{money(calc.loan, L)}</strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
            <span>{t.totalInt}</span>
            <strong>{money(calc.totalInterest, L)}</strong>
          </div>
        </div>
      </div>

      <p className="privacy" style={{ marginTop: 16, fontSize: '.8rem', lineHeight: 1.55 }}>
        {t.note}
      </p>

      <div
        style={{
          marginTop: 20,
          borderTop: '1px solid #e6ecf5',
          paddingTop: 18,
        }}
      >
        <p style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: 6 }}>{t.tie}</p>
        <p style={{ color: 'var(--muted)', fontSize: '.93rem', lineHeight: 1.6, marginBottom: 12 }}>
          {t.tieBody}
        </p>
        <a href="#protection-check" style={{ color: 'var(--blue)', fontWeight: 600, textDecoration: 'none' }}>
          {t.tieCta}
        </a>
      </div>
    </div>
  );
}
