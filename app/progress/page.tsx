import React from 'react';
import Link from 'next/link';
import ProgressView from '../../src/components/ProgressView';

export default function ProgressPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="text-sm text-slate-500">
          <Link href="/" className="underline">← Home</Link>
          <span className="px-2">/</span>
          <span className="font-semibold">Progress</span>
        </div>
      </div>

      <ProgressView />
    </div>
  );
}
