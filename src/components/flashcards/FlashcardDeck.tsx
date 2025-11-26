"use client";
import React, { useCallback, useEffect, useState } from 'react';
import FlashcardCard from './FlashcardCard';
import type { Flashcard } from '../../types/training';

type Props = {
  cards: Flashcard[];
  statuses: Record<string, 'known' | 'learning' | 'unseen'>;
  onUpdate: (id: string, status: 'known' | 'learning' | 'unseen') => void;
};

export default function FlashcardDeck({ cards, statuses, onUpdate }: Props) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    setFlipped(false);
  }, [index]);

  const next = useCallback(() => setIndex((i) => (i + 1) % cards.length), [cards.length]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + cards.length) % cards.length), [cards.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code === 'Space') { e.preventDefault(); setFlipped((f) => !f); }
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  const card = cards[index];

  return (
    <div className="space-y-4">
      <FlashcardCard front={card.front} back={card.back} flipped={flipped} onFlip={() => setFlipped((f) => !f)} />

      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-2">
          <button onClick={() => onUpdate(card.id, 'learning')} className="px-3 py-1 border rounded">Still learning</button>
          <button onClick={() => onUpdate(card.id, 'known')} className="px-3 py-1 bg-indigo-600 text-white rounded">Know this</button>
        </div>

        <div className="flex items-center gap-2 text-sm text-slate-500">
          <button onClick={prev} className="px-2 py-1 border rounded">◀</button>
          <div>{index + 1}/{cards.length}</div>
          <button onClick={next} className="px-2 py-1 border rounded">▶</button>
        </div>
      </div>
    </div>
  );
}
