'use client';

import { useState } from 'react';

type Lang = 'en' | 'es' | 'ru';

// Localised so the educational-estimate disclaimer reaches the visitor in
// their own language. It previously rendered in English on /es and /ru, which
// meant a Spanish- or Russian-speaking visitor saw a dollar figure with no
// disclaimer they could read.
const T: Record<Lang, Record<string, string>> = {
  en: {
    h: 'Human Life Value calculator',
    sub: 'A simple estimate of how much life insurance coverage might make sense for your situation — not a quote, just a starting point for the conversation.',
    income: 'Your annual income ($)',
    years: 'Years until retirement',
    debts: 'Outstanding debts (mortgage, loans, etc.)',
    savings: 'Existing savings / life insurance',
    result: 'Estimated coverage to consider',
    note: 'This is a simplified estimate for educational purposes only, not a formal needs analysis and not a quote. Talk to a licensed agent to find the right coverage for your situation.',
  },
  es: {
    h: 'Calculadora de Valor de Vida Humana',
    sub: 'Una estimación simple de cuánta cobertura de seguro de vida podría tener sentido en su situación — no es una cotización, solo un punto de partida para la conversación.',
    income: 'Su ingreso anual ($)',
    years: 'Años hasta la jubilación',
    debts: 'Deudas pendientes (hipoteca, préstamos, etc.)',
    savings: 'Ahorros / seguro de vida existentes',
    result: 'Cobertura estimada a considerar',
    note: 'Esta es una estimación simplificada con fines educativos únicamente; no es un análisis formal de necesidades ni una cotización. Hable con un agente licenciado para encontrar la cobertura correcta para su situación.',
  },
  ru: {
    h: 'Калькулятор Human Life Value',
    sub: 'Простая оценка того, какой размер страхования жизни может подойти в вашей ситуации — это не расчёт стоимости, а лишь отправная точка для разговора.',
    income: 'Ваш годовой доход ($)',
    years: 'Лет до выхода на пенсию',
    debts: 'Текущие долги (ипотека, кредиты и т. д.)',
    savings: 'Имеющиеся накопления / страхование жизни',
    result: 'Ориентировочная сумма покрытия',
    note: 'Это упрощённая оценка исключительно в образовательных целях — не формальный анализ потребностей и не расчёт стоимости. Поговорите с лицензированным агентом, чтобы подобрать покрытие под вашу ситуацию.',
  },
};

export default function HumanLifeValueCalculator({ lang = 'en' }: { lang?: string }) {
  const t = T[(lang as Lang) in T ? (lang as Lang) : 'en'];

  const [income, setIncome] = useState('');
  const [yearsToRetirement, setYearsToRetirement] = useState('');
  const [debts, setDebts] = useState('');
  const [savings, setSavings] = useState('');

  const incomeNum = parseFloat(income) || 0;
  const yearsNum = parseFloat(yearsToRetirement) || 0;
  const debtsNum = parseFloat(debts) || 0;
  const savingsNum = parseFloat(savings) || 0;

  // Simplified income-replacement method:
  // (income you'd need replaced each year × years remaining) + outstanding debts − existing savings/coverage
  const estimate = Math.max(0, incomeNum * yearsNum * 0.7 + debtsNum - savingsNum);

  const hasInput = incomeNum > 0 && yearsNum > 0;

  return (
    <div className="card" style={{ marginTop: 24 }}>
      <h2>{t.h}</h2>
      <p className="sub">{t.sub}</p>

      <div className="grid2">
        <div className="field">
          <label>{t.income}</label>
          <input
            type="number"
            min={0}
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            placeholder="e.g. 65000"
          />
        </div>
        <div className="field">
          <label>{t.years}</label>
          <input
            type="number"
            min={0}
            value={yearsToRetirement}
            onChange={(e) => setYearsToRetirement(e.target.value)}
            placeholder="e.g. 25"
          />
        </div>
      </div>

      <div className="grid2">
        <div className="field">
          <label>{t.debts}</label>
          <input
            type="number"
            min={0}
            value={debts}
            onChange={(e) => setDebts(e.target.value)}
            placeholder="e.g. 200000"
          />
        </div>
        <div className="field">
          <label>{t.savings}</label>
          <input
            type="number"
            min={0}
            value={savings}
            onChange={(e) => setSavings(e.target.value)}
            placeholder="e.g. 30000"
          />
        </div>
      </div>

      {hasInput && (
        <div
          style={{
            background: '#f2f7ff',
            borderRadius: 14,
            padding: '18px 20px',
            marginTop: 8,
            textAlign: 'center',
          }}
        >
          <p style={{ color: 'var(--muted)', fontSize: '.85rem', marginBottom: 4 }}>
            {t.result}
          </p>
          <p style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--navy)' }}>
            ${estimate.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </p>
        </div>
      )}

      <p className="privacy" style={{ marginTop: 14 }}>
        {t.note}
      </p>
    </div>
  );
}
