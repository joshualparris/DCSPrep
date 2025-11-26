import { describe, it, expect } from 'vitest';
import { modules } from '../data/modules';

describe('modules data', () => {
  it('should include foundations module', () => {
    const found = modules.find((m) => m.id === 'foundations');
    expect(found).toBeDefined();
    expect(found?.title).toContain('Welcome to DCS');
  });

  it('should include library daily routines module', () => {
    const m2 = modules.find((m) => m.id === 'library-daily-routines');
    expect(m2).toBeDefined();
    expect(m2?.title).toContain('DCS Library Daily Routines');
    // quick sanity checks
    expect(m2?.sections.length).toBeGreaterThanOrEqual(6);
    expect(m2?.flashcards.length).toBeGreaterThanOrEqual(16);
    expect(m2?.quiz.length).toBeGreaterThanOrEqual(12);
  });

  it("includes Module 3 (ict-helpdesk-101) with minimum content", () => {
    const m3 = modules.find((m) => m.id === 'ict-helpdesk-101');
    expect(m3).toBeTruthy();
    expect(m3!.sections.length).toBeGreaterThanOrEqual(8);
    expect(m3!.flashcards.length).toBeGreaterThanOrEqual(16);
    expect(m3!.quiz.length).toBeGreaterThanOrEqual(12);
  });
});
