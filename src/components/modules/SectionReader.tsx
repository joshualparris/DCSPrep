"use client";
import React, { useEffect, useRef, useState } from 'react';

type Props = {
  id: string;
  title: string;
  bodyMarkdown: string;
  onMarkRead?: (sectionId: string) => void;
  isRead?: boolean;
};

export default function SectionReader({ id, title, bodyMarkdown, onMarkRead, isRead }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [scrolledToBottom, setScrolledToBottom] = useState(false);
  const [justMarked, setJustMarked] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const onScroll = () => {
      const bottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 12;
      setScrolledToBottom(bottom);
      if (bottom && onMarkRead) onMarkRead(id);
    };
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, [ref, id, onMarkRead]);

  return (
    <div className="bg-white rounded p-4 border">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="font-semibold">{title}</div>
        </div>
        <div className="text-xs text-slate-400">{isRead ? 'Read' : scrolledToBottom ? 'Marked read' : 'Not read'}</div>
      </div>

      <div ref={ref} style={{ maxHeight: 260 }} className="prose prose-sm overflow-auto text-sm text-slate-700 whitespace-pre-line">
        {bodyMarkdown}
      </div>

      <div className="mt-3 flex justify-end">
        <button
          onClick={() => {
            if (!isRead) {
              onMarkRead?.(id);
              setJustMarked(true);
              setScrolledToBottom(true);
            }
          }}
          disabled={Boolean(isRead)}
          aria-pressed={Boolean(isRead)}
          aria-label={isRead ? 'Section read' : 'Mark section as read'}
          className={`text-sm px-3 py-1 rounded ${isRead ? 'bg-slate-300 text-slate-700' : 'bg-indigo-600 text-white'}`}
        >
          {isRead ? 'Read' : justMarked ? 'Marked' : 'Mark section as read'}
        </button>
      </div>
    </div>
  );
}
