'use client';

import { useState } from 'react';

export default function HumanLifeValueCalculator() {
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
      <h2>Human Life Value calculator</h2>
      <p className="sub">
        A simple estimate of how much life insurance coverage might make sense for your
        situation — not a quote, just a starting point for the conversation.
      </p>

      <div className="grid2">
        <div className="field">
          <label>Your annual income ($)</label>
          <input
            type="number"
            min={0}
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            placeholder="e.g. 65000"
          />
        </div>
        <div className="field">
          <label>Years until retirement</label>
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
          <label>Outstanding debts (mortgage, loans, etc.)</label>
          <input
            type="number"
            min={0}
            value={debts}
            onChange={(e) => setDebts(e.target.value)}
            placeholder="e.g. 200000"
          />
        </div>
        <div className="field">
          <label>Existing savings / life insurance</label>
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
            Estimated coverage to consider
          </p>
          <p style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--navy)' }}>
            ${estimate.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </p>
        </div>
      )}

      <p className="privacy" style={{ marginTop: 14 }}>
        This is a simplified estimate for educational purposes only, not a formal needs
        analysis. Talk to a licensed agent to find the right coverage for your situation.
      </p>
    </div>
  );
}
