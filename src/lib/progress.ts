import type { TrainingModule } from '../types/training';

export type QuizAttempt = {
  attemptAtIso: string;
  score: number; // 0-100
  answers: Record<string, number | boolean>;
};

export type ModuleProgress = {
  sectionsRead: Record<string, boolean>;
  flashcards: Record<string, 'known' | 'learning' | 'unseen'>;
  quizAttempts: QuizAttempt[];
};

export type UserProgress = {
  lastOpenedModuleId?: string;
  modules: Record<string, ModuleProgress>;
};

const STORAGE_KEY = 'dcsprep_user_progress_v1';

export function getProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { modules: {} };
    return JSON.parse(raw) as UserProgress;
  } catch (err) {
    console.error('getProgress error', err);
    return { modules: {} };
  }
}

export function saveProgress(progress: UserProgress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (err) {
    console.error('saveProgress error', err);
  }
}

export function resetProgress() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error('resetProgress error', err);
  }
}

export function ensureModuleProgress(progress: UserProgress, module: TrainingModule): UserProgress {
  if (!progress.modules[module.id]) {
    progress.modules[module.id] = {
      sectionsRead: Object.fromEntries(module.sections.map((s) => [s.id, false])) as Record<string, boolean>,
      flashcards: Object.fromEntries(module.flashcards.map((f) => [f.id, 'unseen'])) as Record<string, 'known' | 'learning' | 'unseen'>,
      quizAttempts: []
    };
  }
  return progress;
}
