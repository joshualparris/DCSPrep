"use client";
import React from 'react';

export default function FlashcardCard({ front, back, flipped, onFlip }: { front: string; back: string; flipped: boolean; onFlip: () => void }) {
  return (
    <button onClick={onFlip} aria-pressed={flipped} className="w-full max-w-2xl mx-auto p-6 rounded-lg border bg-white shadow cursor-pointer text-left">
      <div className="text-sm text-slate-500 mb-2">Flashcard (press Space or click)</div>
      <div className="text-lg font-semibold">{flipped ? back : front}</div>
    </button>
  );
}
