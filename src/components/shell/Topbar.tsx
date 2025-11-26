import React from 'react';
import Link from 'next/link';

export default function Topbar({ children }: { children?: React.ReactNode }) {
  return (
    <div className="bg-white px-4 py-2 rounded shadow-sm flex justify-between items-center mb-4">
      <div className="flex items-center gap-4">
        <div className="text-sm font-bold">DCSPrep</div>
        <div className="text-xs text-slate-500">Onboarding for Library & ICT Support</div>
      </div>

      <div className="flex items-center gap-3">
        <nav className="hidden sm:flex items-center gap-3 text-sm">
          <Link href="/" className="underline">Home</Link>
          <Link href="/modules" className="underline">Modules</Link>
          <Link href="/progress" className="underline">Progress</Link>
          <Link href="/settings" className="underline">Settings</Link>
        </nav>
        <div className="text-xs text-slate-500">{children}</div>
      </div>
    </div>
  );
}
