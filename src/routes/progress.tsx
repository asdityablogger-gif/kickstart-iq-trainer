import { createFileRoute } from "@tanstack/react-router";
import { Button, Card, ProgressBar, Screen, StatTile } from "@/components/ui-kit";
import { achievementList, levels, useProgress } from "@/lib/progress";
import { categories, lessons, lessonsByCategory } from "@/data/lessons";

export const Route = createFileRoute("/progress")({
  head: () => ({
    meta: [
      { title: "Your Progress — Football IQ" },
      {
        name: "description",
        content:
          "Track completed football lessons, quiz accuracy, your knowledge level and unlocked achievements.",
      },
      { property: "og:title", content: "Your Progress — Football IQ" },
      {
        property: "og:description",
        content: "Lessons completed, quiz accuracy, level and achievements.",
      },
    ],
  }),
  component: ProgressPage,
});

function ProgressPage() {
  const { state, accuracy, level, reset } = useProgress();
  const done = state.completedLessons.length;
  const percent = Math.round((done / lessons.length) * 100);

  return (
    <Screen title="Progress" subtitle="Everything is saved on this device.">
      <Card className="mb-4">
        <div className="mb-2 flex items-baseline justify-between">
          <span className="text-sm font-bold">Lessons</span>
          <span className="text-xs font-semibold text-muted-foreground">
            {done}/{lessons.length}
          </span>
        </div>
        <ProgressBar percent={percent} />
      </Card>

      <div className="mb-4 grid grid-cols-2 gap-2">
        <StatTile value={`${state.stats.quizzesTaken}`} label="Quizzes taken" />
        <StatTile value={`${state.stats.answered}`} label="Questions answered" />
        <StatTile value={`${accuracy}%`} label="Accuracy" />
        <StatTile value={`${state.stats.bestScorePercent}%`} label="Best score" />
      </div>

      <Card className="mb-4">
        <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
          Current level
        </p>
        <p className="mt-1 text-xl font-extrabold text-primary">{level}</p>
        <div className="mt-3 grid gap-1.5">
          {levels.map((l) => (
            <div
              key={l.name}
              className={`flex items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold ${
                l.name === level
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              <span>{l.name}</span>
              <span>
                {l.min}–{l.max}% accuracy
              </span>
            </div>
          ))}
        </div>
      </Card>

      <h2 className="mb-2 mt-6 text-sm font-bold uppercase tracking-wide text-muted-foreground">
        By topic
      </h2>
      <div className="mb-6 grid gap-3">
        {categories.map((c) => {
          const list = lessonsByCategory(c.id);
          const n = list.filter((l) => state.completedLessons.includes(l.id)).length;
          return (
            <Card key={c.id}>
              <div className="mb-2 flex items-center justify-between text-sm font-bold">
                <span>
                  {c.icon} {c.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {n}/{list.length}
                </span>
              </div>
              <ProgressBar percent={(n / list.length) * 100} />
            </Card>
          );
        })}
      </div>

      <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-muted-foreground">
        Achievements
      </h2>
      <div className="grid gap-2">
        {achievementList.map((a) => {
          const unlocked = state.achievements.includes(a.id);
          return (
            <Card
              key={a.id}
              className={`flex items-center gap-3 ${unlocked ? "" : "opacity-60"}`}
            >
              <span className="text-xl">{unlocked ? "🏅" : "🔒"}</span>
              <span className="flex-1">
                <span className="block text-sm font-bold">{a.name}</span>
                <span className="block text-xs text-muted-foreground">{a.desc}</span>
              </span>
            </Card>
          );
        })}
      </div>

      <div className="mt-8">
        <Button
          variant="danger"
          onClick={() => {
            if (
              typeof window === "undefined" ||
              window.confirm("Reset all progress on this device?")
            ) {
              reset();
            }
          }}
        >
          Reset all progress
        </Button>
      </div>
    </Screen>
  );
}
