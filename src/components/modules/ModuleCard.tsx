import React from 'react';
import Link from 'next/link';

export default function ModuleCard({ id, title, description, progress = 0 }: { id: string; title: string; description: string; progress?: number }) {
  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <div className="font-semibold text-lg">{title}</div>
          <div className="text-xs text-slate-500 mt-1">{description}</div>
        </div>

        <div className="text-right">
          <div className="text-sm font-semibold">{Math.round(progress)}%</div>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-3 justify-between">
        <div className="w-2/3 bg-slate-100 h-3 rounded overflow-hidden">
          <div style={{ width: `${progress}%` }} className="h-3 bg-indigo-600" />
        </div>
        <div>
          <Link href={`/modules/${id}`} className="inline-block px-3 py-1 rounded bg-indigo-50 text-indigo-700 text-sm">Start / Continue</Link>
        </div>
      </div>
    </div>
  );
}
