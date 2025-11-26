"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { modules } from '../../src/data/modules';
import ModuleCard from '../../src/components/modules/ModuleCard';
import { getProgress } from '../../src/lib/progress';
import { getModuleCompletion } from '../../src/lib/moduleMath';

export default function ModulesPage() {
  const [progress, setProgress] = useState<any>(undefined);

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="text-sm text-slate-500">
          <Link href="/" className="underline">← Home</Link>
          <span className="px-2">/</span>
          <span className="font-semibold">Modules</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">All Modules</h2>
        <div className="text-sm text-slate-500">{modules.length} modules</div>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {modules.map((m) => (
          <ModuleCard key={m.id} id={m.id} title={m.title} description={m.description} progress={Math.round(getModuleCompletion(m.id, progress, m))} />
        ))}
      </div>
    </div>
  );
}
