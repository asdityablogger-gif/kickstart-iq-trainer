import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button, Card, ProgressBar, Screen, StatTile } from "@/components/ui-kit";
import {
  questions,
  questionsByCategory,
  quizCategories,
  type Question,
  type QuizCategory,
} from "@/data/questions";
import { useProgress } from "@/lib/progress";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Football Quiz — Test Your Football IQ" },
      {
        name: "description",
        content:
          "Multiple-choice football quizzes on positions, formations, attacking, defending and football vocabulary.",
      },
      { property: "og:title", content: "Football Quiz — Football IQ" },
      {
        property: "og:description",
        content: "Test yourself on positions, formations, attacking and defending.",
      },
    ],
  }),
  component: QuizPage,
});

const QUIZ_LENGTH = 10;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function QuizPage() {
  const { recordQuiz } = useProgress();
  const [set, setSet] = useState<Question[] | null>(null);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [finished, setFinished] = useState(false);

  const start = (pool: Question[]) => {
    setSet(shuffle(pool).slice(0, QUIZ_LENGTH));
    setIndex(0);
    setPicked(null);
    setCorrect(0);
    setFinished(false);
  };

  if (!set) {
    return (
      <Screen title="Quiz" subtitle="Ten questions, instant explanations.">
        <div className="grid gap-3">
          <Card className="flex items-center gap-3">
            <span className="text-2xl">🎲</span>
            <span className="flex-1">
              <span className="block text-sm font-bold">Mixed quiz</span>
              <span className="block text-xs text-muted-foreground">
                Questions from every topic.
              </span>
            </span>
            <span className="w-24">
              <Button onClick={() => start(questions)}>Start</Button>
            </span>
          </Card>
          {quizCategories.map((c) => {
            const pool = questionsByCategory(c.id as QuizCategory);
            return (
              <Card key={c.id} className="flex items-center gap-3">
                <span className="text-2xl">{c.icon}</span>
                <span className="flex-1">
                  <span className="block text-sm font-bold">{c.name}</span>
                  <span className="block text-xs text-muted-foreground">
                    {pool.length} questions
                  </span>
                </span>
                <span className="w-24">
                  <Button variant="secondary" onClick={() => start(pool)}>
                    Start
                  </Button>
                </span>
              </Card>
            );
          })}
        </div>
      </Screen>
    );
  }

  if (finished) {
    const percent = Math.round((correct / set.length) * 100);
    return (
      <Screen title="Quiz complete">
        <Card className="text-center">
          <div className="text-5xl font-extrabold text-primary">{percent}%</div>
          <p className="mt-2 text-sm text-muted-foreground">
            {correct} correct out of {set.length}
          </p>
        </Card>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <StatTile value={`${correct}`} label="Correct" />
          <StatTile value={`${set.length - correct}`} label="Missed" />
        </div>
        <div className="mt-6 grid gap-3">
          <Button onClick={() => start(set)}>Try again</Button>
          <Button variant="ghost" onClick={() => setSet(null)}>
            Choose another quiz
          </Button>
        </div>
      </Screen>
    );
  }

  const q = set[index];
  const last = index === set.length - 1;

  const next = () => {
    if (last) {
      recordQuiz(set.length, correct);
      setFinished(true);
    } else {
      setIndex(index + 1);
      setPicked(null);
    }
  };

  const pick = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    if (i === q.answer) setCorrect((c) => c + 1);
  };

  return (
    <Screen>
      <div className="mb-5">
        <div className="mb-2 flex items-center justify-between text-xs font-semibold text-muted-foreground">
          <span>
            Question {index + 1} of {set.length}
          </span>
          <button
            type="button"
            className="font-bold text-primary"
            onClick={() => setSet(null)}
          >
            Quit
          </button>
        </div>
        <ProgressBar percent={((index + (picked !== null ? 1 : 0)) / set.length) * 100} />
      </div>

      <h1 className="mb-4 text-lg font-bold leading-snug">{q.q}</h1>

      <div className="grid gap-2">
        {q.options.map((o, i) => {
          const isAnswer = i === q.answer;
          const cls =
            picked === null
              ? "border border-border bg-card"
              : isAnswer
                ? "bg-success text-success-foreground"
                : picked === i
                  ? "bg-destructive text-destructive-foreground"
                  : "border border-border bg-card opacity-60";
          return (
            <button
              key={i}
              type="button"
              onClick={() => pick(i)}
              className={`min-h-12 rounded-2xl px-4 py-2 text-left text-sm font-semibold transition ${cls}`}
            >
              {o}
            </button>
          );
        })}
      </div>

      {picked !== null && (
        <>
          <Card className="mt-4">
            <p className="text-xs font-bold uppercase tracking-wide text-primary">
              {picked === q.answer ? "Correct" : "Not quite"}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-foreground/90">
              {q.explanation}
            </p>
          </Card>
          <div className="mt-5">
            <Button onClick={next}>{last ? "See results" : "Next question"}</Button>
          </div>
        </>
      )}
    </Screen>
  );
}
