"use client";
import React, { useMemo, useState } from 'react';
import type { QuizQuestion } from '../../types/training';
import QuizResult from './QuizResult';

type Props = {
  questions: QuizQuestion[];
  onSubmitAttempt: (attempt: { attemptAtIso: string; score: number; answers: Record<string, number | boolean> }) => void;
};

export default function QuizEngine({ questions, onSubmitAttempt }: Props) {
  const [answers, setAnswers] = useState<Record<string, number | boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const totalPoints = questions.length;

  const handleAnswer = (qid: string, val: number | boolean) => setAnswers((s) => ({ ...s, [qid]: val }));

  const computeScore = () => {
    let correct = 0;
    questions.forEach((q) => {
      const a = answers[q.id];
      if (q.type === 'mcq') {
        if (typeof a === 'number' && a === q.answerIndex) correct++;
      } else if (q.type === 'true_false') {
        if (typeof a === 'boolean' && a === q.answer) correct++;
      }
    });
    return Math.round((correct / totalPoints) * 100);
  };

  const onSubmit = () => {
    const s = computeScore();
    setScore(s);
    setSubmitted(true);
    onSubmitAttempt({ attemptAtIso: new Date().toISOString(), score: s, answers });
  };

  const onRetry = () => {
    setAnswers({}); setSubmitted(false); setScore(0);
  };

  return (
    <div>
      {!submitted ? (
        <div className="space-y-4">
          {questions.map((q, idx) => (
            <div key={q.id} className="bg-white border rounded p-3 text-sm">
              <div className="font-semibold">{idx + 1}. {q.question}</div>
              <div className="mt-2 grid gap-2">
                {q.type === 'mcq' && q.options.map((opt, i) => (
                  <label key={opt} className="flex items-center gap-2">
                    <input type="radio" checked={answers[q.id] === i} onChange={() => handleAnswer(q.id, i)} />
                    <span>{opt}</span>
                  </label>
                ))}

                {q.type === 'true_false' && (
                  <div className="flex gap-2">
                    <label className="flex items-center gap-2"><input type="radio" checked={answers[q.id] === true} onChange={() => handleAnswer(q.id, true)} /> True</label>
                    <label className="flex items-center gap-2"><input type="radio" checked={answers[q.id] === false} onChange={() => handleAnswer(q.id, false)} /> False</label>
                  </div>
                )}
              </div>
            </div>
          ))}

          <div className="flex justify-end mt-2">
            <button onClick={onSubmit} className="px-3 py-1 rounded bg-indigo-600 text-white">Submit quiz</button>
          </div>
        </div>
      ) : (
        <QuizResult score={score} total={100} onRetry={onRetry} questions={questions} answers={answers} />
      )}
    </div>
  );
}
