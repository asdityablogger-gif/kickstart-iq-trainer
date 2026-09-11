import { useCallback, useEffect, useState } from "react";

const KEY = "football-iq-v1";

export type ProgressState = {
  completedLessons: string[];
  achievements: string[];
  stats: {
    answered: number;
    correct: number;
    quizzesTaken: number;
    bestScorePercent: number;
  };
  settings: { sound: boolean };
};

const defaultState: ProgressState = {
  completedLessons: [],
  achievements: [],
  stats: { answered: 0, correct: 0, quizzesTaken: 0, bestScorePercent: 0 },
  settings: { sound: true },
};

function read(): ProgressState {
  if (typeof window === "undefined") return defaultState;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return defaultState;
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    return {
      completedLessons: Array.isArray(parsed.completedLessons)
        ? parsed.completedLessons.filter((x) => typeof x === "string")
        : [],
      achievements: Array.isArray(parsed.achievements)
        ? parsed.achievements.filter((x) => typeof x === "string")
        : [],
      stats: {
        answered: Number(parsed.stats?.answered) || 0,
        correct: Number(parsed.stats?.correct) || 0,
        quizzesTaken: Number(parsed.stats?.quizzesTaken) || 0,
        bestScorePercent: Number(parsed.stats?.bestScorePercent) || 0,
      },
      settings: { sound: parsed.settings?.sound !== false },
    };
  } catch {
    return defaultState;
  }
}

function write(state: ProgressState) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* storage unavailable — app still works in memory */
  }
}

export const levels = [
  { min: 0, max: 20, name: "Beginner" },
  { min: 21, max: 40, name: "Learner" },
  { min: 41, max: 60, name: "Game Reader" },
  { min: 61, max: 80, name: "Tactical Thinker" },
  { min: 81, max: 100, name: "Football IQ" },
];

export function accuracyOf(state: ProgressState) {
  if (!state.stats.answered) return 0;
  return Math.round((state.stats.correct / state.stats.answered) * 100);
}

export function levelOf(state: ProgressState) {
  const acc = accuracyOf(state);
  const found = levels.find((l) => acc >= l.min && acc <= l.max);
  return found ? found.name : "Beginner";
}

export const achievementList = [
  { id: "first-lesson", name: "First Lesson", desc: "Complete your first lesson" },
  { id: "first-quiz", name: "First Quiz", desc: "Finish one quiz" },
  { id: "q10", name: "10 Questions", desc: "Answer 10 quiz questions" },
  { id: "q50", name: "50 Questions", desc: "Answer 50 quiz questions" },
  { id: "l5", name: "5 Lessons", desc: "Complete five lessons" },
  {
    id: "formation-explorer",
    name: "Formation Explorer",
    desc: "Complete all five formation lessons",
  },
  { id: "attack-student", name: "Attack Student", desc: "Complete all attacking lessons" },
  { id: "defense-student", name: "Defense Student", desc: "Complete all defensive lessons" },
];

function evaluateAchievements(
  state: ProgressState,
  counts: { formations: number; attack: number; defense: number },
): string[] {
  const unlocked = new Set(state.achievements);
  const done = state.completedLessons;
  const has = (prefix: string, total: number) =>
    done.filter((id) => id.startsWith(prefix)).length >= total;

  if (done.length >= 1) unlocked.add("first-lesson");
  if (done.length >= 5) unlocked.add("l5");
  if (state.stats.quizzesTaken >= 1) unlocked.add("first-quiz");
  if (state.stats.answered >= 10) unlocked.add("q10");
  if (state.stats.answered >= 50) unlocked.add("q50");
  if (has("form-", counts.formations)) unlocked.add("formation-explorer");
  if (has("atk-", counts.attack)) unlocked.add("attack-student");
  if (has("def-", counts.defense)) unlocked.add("defense-student");
  return Array.from(unlocked);
}

const listeners = new Set<(s: ProgressState) => void>();
let memory: ProgressState | null = null;

function current(): ProgressState {
  if (memory === null) memory = read();
  return memory;
}

function update(fn: (s: ProgressState) => ProgressState) {
  const next = fn(current());
  memory = next;
  write(next);
  listeners.forEach((l) => l(next));
}

export function useProgress() {
  const [state, setState] = useState<ProgressState>(defaultState);

  useEffect(() => {
    memory = read();
    setState(memory);
    const listener = (s: ProgressState) => setState(s);
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  const withAchievements = (s: ProgressState) => ({
    ...s,
    achievements: evaluateAchievements(s, {
      formations: 5,
      attack: 7,
      defense: 7,
    }),
  });

  const completeLesson = useCallback((id: string) => {
    update((s) =>
      withAchievements({
        ...s,
        completedLessons: s.completedLessons.includes(id)
          ? s.completedLessons
          : [...s.completedLessons, id],
      }),
    );
  }, []);

  const uncompleteLesson = useCallback((id: string) => {
    update((s) => ({
      ...s,
      completedLessons: s.completedLessons.filter((x) => x !== id),
    }));
  }, []);

  const recordQuiz = useCallback((total: number, correct: number) => {
    update((s) => {
      const percent = total ? Math.round((correct / total) * 100) : 0;
      return withAchievements({
        ...s,
        stats: {
          answered: s.stats.answered + total,
          correct: s.stats.correct + correct,
          quizzesTaken: s.stats.quizzesTaken + 1,
          bestScorePercent: Math.max(s.stats.bestScorePercent, percent),
        },
      });
    });
  }, []);

  const reset = useCallback(() => {
    memory = { ...defaultState, completedLessons: [], achievements: [] };
    try {
      window.localStorage.removeItem(KEY);
    } catch {
      /* ignore */
    }
    listeners.forEach((l) => l(memory as ProgressState));
  }, []);

  return {
    state,
    completeLesson,
    uncompleteLesson,
    recordQuiz,
    reset,
    accuracy: accuracyOf(state),
    level: levelOf(state),
  };
}
