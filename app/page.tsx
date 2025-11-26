"use client";
import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { modules } from '../src/data/modules';
import { getOverallProgress, getModuleCompletion } from '../src/lib/moduleMath';
import { getProgress } from '../src/lib/progress';

export default function HomePage() {
  const moduleList = modules;
  const [progress, setProgress] = useState(() => undefined as any);

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  const overall = useMemo(() => getOverallProgress(moduleList, progress), [moduleList, progress]);
  const completedCount = useMemo(() => moduleList.filter((m) => getModuleCompletion(m.id, progress, m) >= 100).length, [moduleList, progress]);

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h1 className="text-2xl font-semibold">Welcome to DCSPrep</h1>
        <p className="text-slate-600 mt-2">Quick onboarding for Library & ICT Assistant support staff.</p>

        <div className="mt-4 flex items-center gap-4">
          <Link href="/modules" className="inline-block bg-indigo-600 text-white py-2 px-4 rounded">Browse modules</Link>
          <Link href="/progress" className="text-sm text-slate-500 underline">View progress</Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow-sm">
          <div className="text-xs text-slate-500">Completed modules</div>
          <div className="text-xl font-bold mt-1">{completedCount}/{moduleList.length}</div>
        </div>

        <div className="bg-white p-4 rounded shadow-sm md:col-span-2">
          <div className="text-xs text-slate-500">Overall completion</div>
          <div className="mt-2 flex items-center gap-4">
            <div className="w-full bg-slate-100 rounded h-4 overflow-hidden">
              <div style={{ width: `${Math.round(overall)}%` }} className="bg-indigo-600 h-4" />
            </div>
            <div className="text-sm font-semibold">{Math.round(overall)}%</div>
          </div>
        </div>
      </div>

      <section>
        <h3 className="text-lg font-semibold mb-3">Quick Modules</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {moduleList.map((m) => (
            <div key={m.id} className="bg-white p-4 rounded shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold">{m.title}</div>
                  <div className="text-xs text-slate-500 mt-1">{m.description}</div>
                </div>
                <div className="text-xs text-slate-400">{m.sections.length} sections</div>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <Link href={`/modules/${m.id}`} className="inline-block px-3 py-1 rounded bg-indigo-50 text-indigo-700 text-sm">Open</Link>
                <div className="text-xs text-slate-400">Progress: {Math.round(getModuleCompletion(m.id, progress, m))}%</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
