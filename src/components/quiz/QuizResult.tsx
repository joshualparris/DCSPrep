import React from 'react';
import type { QuizQuestion } from '../../types/training';

type Props = {
  score: number;
  total: number;
  questions?: QuizQuestion[];
  answers?: Record<string, number | boolean>;
  onRetry?: () => void;
};

export default function QuizResult({ score, total, questions = [], answers = {}, onRetry }: Props) {
  return (
    <div className="bg-white border rounded p-4 shadow-sm text-left">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Results</h3>
          <div className="text-sm text-slate-500 mt-1">You scored <strong className="text-indigo-600">{Math.round(score)}%</strong> — {Math.round(score)} of {total}</div>
        </div>

        <div>
          <button onClick={onRetry} className="px-3 py-1 bg-indigo-600 text-white rounded">Retry quiz</button>
        </div>
      </div>

      <div className="mt-4 space-y-3 text-sm">
        {questions.map((q, i) => {
          const a = answers[q.id];
          let correctLabel = '';
          let userLabel = '';
          let isCorrect = false;

          if (q.type === 'mcq') {
            correctLabel = q.options[q.answerIndex];
            userLabel = typeof a === 'number' ? q.options[a] : 'No answer';
            isCorrect = typeof a === 'number' && a === q.answerIndex;
          } else {
            correctLabel = String(q.answer);
            userLabel = typeof a === 'boolean' ? String(a) : 'No answer';
            isCorrect = typeof a === 'boolean' && a === q.answer;
          }

          return (
            <div key={q.id} className="p-3 border rounded">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="font-semibold">{i + 1}. {q.question}</div>
                  <div className="mt-2 text-xs text-slate-500">{q.type === 'mcq' ? 'Multiple choice' : 'True / False'}</div>
                </div>
                <div className="text-right">
                  <div className={`px-2 py-0.5 rounded text-xs ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {isCorrect ? 'Correct' : 'Incorrect'}
                  </div>
                </div>
              </div>

              <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <div>
                  <div className="text-xs text-slate-500">Your answer</div>
                  <div className={`mt-1 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>{userLabel}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Correct answer</div>
                  <div className="mt-1 text-slate-700">{correctLabel}</div>
                </div>
              </div>

              {q.explanation && (
                <div className="mt-2 text-xs text-slate-500">Explanation: {q.explanation}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
