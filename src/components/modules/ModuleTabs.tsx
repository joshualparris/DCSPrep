"use client";
import React, { useState } from 'react';

export default function ModuleTabs({ tabs, onChange }: { tabs: string[]; onChange?: (tab: string) => void; children?: React.ReactNode }) {
  const [active, setActive] = useState(tabs[0] || '');
  return (
    <div>
      <div className="flex gap-2 mb-4">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => {
              setActive(t); onChange?.(t);
            }}
            className={`px-3 py-1 rounded ${active === t ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'}`}
          >
            {t}
          </button>
        ))}
      </div>

      <div>{/* The consumer will implement showing specific content for selected tab */}</div>
    </div>
  );
}
