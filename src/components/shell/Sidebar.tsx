import React from 'react';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white rounded-lg border p-4 shadow-sm hidden md:block">
      <div className="text-sm font-semibold mb-4">DCSPrep</div>
      <nav className="flex flex-col gap-2 text-sm">
        <Link href="/" className="px-2 py-1 rounded hover:bg-slate-50">Home</Link>
        <Link href="/modules" className="px-2 py-1 rounded hover:bg-slate-50">Modules</Link>
        <Link href="/progress" className="px-2 py-1 rounded hover:bg-slate-50">Progress</Link>
        <Link href="/settings" className="px-2 py-1 rounded hover:bg-slate-50">Settings</Link>
      </nav>
    </aside>
  );
}
