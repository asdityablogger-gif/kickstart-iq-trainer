import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, LinkButton, ProgressBar, Screen, StatTile } from "@/components/ui-kit";
import { categories, lessons } from "@/data/lessons";
import { useProgress } from "@/lib/progress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Learn Basic Football IQ — Understand the Game" },
      {
        name: "description",
        content:
          "A simple offline app for football beginners: positions, formations, attacking and defensive decisions, quizzes and progress tracking.",
      },
      { property: "og:title", content: "Learn Basic Football IQ" },
      {
        property: "og:description",
        content:
          "Simple lessons, pitch diagrams and quizzes to understand football tactics.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const { state, accuracy, level } = useProgress();
  const done = state.completedLessons.length;
  const percent = Math.round((done / lessons.length) * 100);

  return (
    <Screen>
      <header className="mb-5">
        <p className="text-xs font-bold uppercase tracking-widest text-primary">
          Football IQ
        </p>
        <h1 className="mt-1 text-3xl font-extrabold leading-tight tracking-tight">
          Learn how the game is really played
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Short lessons, real pitch diagrams and quizzes. Everything works offline.
        </p>
      </header>

      <Card className="mb-4">
        <div className="mb-2 flex items-baseline justify-between">
          <span className="text-sm font-bold">Your progress</span>
          <span className="text-xs font-semibold text-muted-foreground">
            {done}/{lessons.length} lessons
          </span>
        </div>
        <ProgressBar percent={percent} />
        <div className="mt-4 grid grid-cols-3 gap-2">
          <StatTile value={`${percent}%`} label="Complete" />
          <StatTile value={`${accuracy}%`} label="Accuracy" />
          <StatTile value={level} label="Level" />
        </div>
      </Card>

      <div className="mb-4 grid grid-cols-2 gap-3">
        <LinkButton to="/learn">Start learning</LinkButton>
        <LinkButton to="/quiz" variant="secondary">
          Take a quiz
        </LinkButton>
      </div>

      <h2 className="mb-2 mt-6 text-sm font-bold uppercase tracking-wide text-muted-foreground">
        Topics
      </h2>
      <div className="grid gap-3">
        {categories.map((c) => (
          <Link key={c.id} to="/learn/$category" params={{ category: c.id }}>
            <Card className="flex items-center gap-3">
              <span className="text-2xl">{c.icon}</span>
              <span className="flex-1">
                <span className="block text-sm font-bold">{c.name}</span>
                <span className="block text-xs text-muted-foreground">{c.blurb}</span>
              </span>
              <span className="text-muted-foreground">›</span>
            </Card>
          </Link>
        ))}
        <Link to="/glossary">
          <Card className="flex items-center gap-3">
            <span className="text-2xl">📖</span>
            <span className="flex-1">
              <span className="block text-sm font-bold">Football Terms</span>
              <span className="block text-xs text-muted-foreground">
                Plain-English meanings of the words commentators use.
              </span>
            </span>
            <span className="text-muted-foreground">›</span>
          </Card>
        </Link>
      </div>
    </Screen>
  );
}
