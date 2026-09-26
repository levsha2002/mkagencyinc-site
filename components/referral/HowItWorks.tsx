'use client';

import { useState } from 'react';

type Step = { h: string; p: string };

// "Three steps, either way": tabs switch between the friend and business flows.
// Both panels are rendered in the HTML (the inactive one is `hidden`), so the
// copy is crawlable and works before hydration.
export default function HowItWorks({ tabs, friend, partner }: { tabs: [string, string]; friend: Step[]; partner: Step[] }) {
  const [tab, setTab] = useState<0 | 1>(0);
  const panels = [friend, partner];
  return (
    <div>
      <div className="ref-tabs" role="tablist">
        {tabs.map((label, i) => (
          <button
            key={label}
            type="button"
            role="tab"
            id={`ref-tab-${i}`}
            aria-selected={tab === i}
            aria-controls={`ref-panel-${i}`}
            className={tab === i ? 'on' : ''}
            onClick={() => setTab(i as 0 | 1)}
          >
            {label}
          </button>
        ))}
      </div>
      {panels.map((steps, i) => (
        <div key={i} id={`ref-panel-${i}`} role="tabpanel" aria-labelledby={`ref-tab-${i}`} hidden={tab !== i} className="ref-steps">
          {steps.map((s, n) => (
            <div className="ref-step" key={s.h}>
              <div className="n">{n + 1}</div>
              <h3>{s.h}</h3>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
