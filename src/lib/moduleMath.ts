import type { TrainingModule } from '../types/training';
import type { UserProgress } from './progress';

export function getModuleCompletion(moduleId: string, progress: UserProgress | undefined, moduleData: TrainingModule): number {
  // default 0
  const modProg = progress?.modules?.[moduleId];

  // Sections: 50% split evenly
  const sectionWeight = 50;
  const totalSections = moduleData.sections.length || 1;
  const sectionsReadCount = modProg ? Object.values(modProg.sectionsRead).filter(Boolean).length : 0;
  const sectionsPct = (sectionsReadCount / totalSections) * sectionWeight;

  // Flashcards: 20% total, engagement counts as known or learning
  const flashWeight = 20;
  const totalFlash = moduleData.flashcards.length || 1;
  const flashEngaged = modProg ? Object.values(modProg.flashcards).filter((s) => s !== 'unseen').length : 0;
  const flashPct = (flashEngaged / totalFlash) * flashWeight;

  // Quiz: 30% total -> if attempted at least once = 15% + (score/100 * 15%)
  const quizWeight = 30;
  const baseAttemptPct = 15; // given existence of attempts
  let quizPct = 0;
  if (modProg && modProg.quizAttempts.length > 0) {
    const last = modProg.quizAttempts[modProg.quizAttempts.length - 1];
    quizPct = baseAttemptPct + (last.score / 100) * (quizWeight - baseAttemptPct);
  }

  const total = sectionsPct + flashPct + quizPct;
  const clean = Math.min(100, Math.max(0, total));
  return Math.round(clean * 100) / 100;
}

export function getOverallProgress(modules: TrainingModule[], progress?: UserProgress): number {
  if (!modules || modules.length === 0) return 0;
  const total = modules.reduce((acc, mod) => acc + getModuleCompletion(mod.id, progress, mod), 0);
  return Math.round((total / modules.length) * 100) / 100;
}
