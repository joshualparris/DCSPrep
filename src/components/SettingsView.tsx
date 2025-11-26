"use client";
import React from 'react';
import { resetProgress } from '../lib/progress';

export default function SettingsView() {
  const onReset = () => {
    if (confirm('Reset all progress? This cannot be undone.')) {
      resetProgress();
      window.location.reload();
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Settings</h2>

      <div className="bg-white p-4 rounded shadow-sm">
        <div className="text-sm text-slate-600">Reset application progress stored in your browser.</div>
        <div className="mt-4">
          <button onClick={onReset} className="px-3 py-1 bg-red-500 text-white rounded">Reset progress</button>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow-sm text-sm text-slate-500">
        <div className="font-semibold">About</div>
        <div className="mt-2">DCSPrep — Onboarding for Library & ICT Support at Dubbo Christian School. Local progress is stored in your browser's localStorage for the MVP. No credentials included.</div>
      </div>
    </div>
  );
}
