export type MCQQuestion = {
  id: string;
  type: 'mcq';
  question: string;
  options: string[];
  answerIndex: number;
  explanation?: string;
};

export type TFQuestion = {
  id: string;
  type: 'true_false';
  question: string;
  answer: boolean;
  explanation?: string;
};

export type QuizQuestion = MCQQuestion | TFQuestion;

export type Section = {
  id: string;
  title: string;
  bodyMarkdown: string;
};

export type Flashcard = {
  id: string;
  front: string;
  back: string;
};

export type TrainingModule = {
  id: string;
  title: string;
  description: string;
  learningObjectives: string[];
  sections: Section[];
  flashcards: Flashcard[];
  quiz: QuizQuestion[];
};
