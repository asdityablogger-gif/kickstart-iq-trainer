import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, Screen } from "@/components/ui-kit";
import { categories, lessonsByCategory } from "@/data/lessons";
import { useProgress } from "@/lib/progress";

export const Route = createFileRoute("/learn/")({
  head: () => ({
    meta: [
      { title: "Learn Football Tactics — Football IQ" },
      {
        name: "description",
        content:
          "Browse beginner football lessons on positions, formations, attacking play and defending.",
      },
      { property: "og:title", content: "Learn Football Tactics" },
      {
        property: "og:description",
        content: "Beginner lessons on positions, formations, attacking and defending.",
      },
    ],
  }),
  component: Learn,
});

function Learn() {
  const { state } = useProgress();

  return (
    <Screen title="Learn" subtitle="Pick a topic and work through the lessons.">
      <div className="grid gap-3">
        {categories.map((c) => {
          const list = lessonsByCategory(c.id);
          const done = list.filter((l) =>
            state.completedLessons.includes(l.id),
          ).length;
          return (
            <Link key={c.id} to="/learn/$category" params={{ category: c.id }}>
              <Card className="flex items-center gap-3">
                <span className="text-2xl">{c.icon}</span>
                <span className="flex-1">
                  <span className="block text-sm font-bold">{c.name}</span>
                  <span className="block text-xs text-muted-foreground">{c.blurb}</span>
                </span>
                <span className="text-xs font-bold text-primary">
                  {done}/{list.length}
                </span>
              </Card>
            </Link>
          );
        })}
        <Link to="/glossary">
          <Card className="flex items-center gap-3">
            <span className="text-2xl">📖</span>
            <span className="flex-1">
              <span className="block text-sm font-bold">Football Terms</span>
              <span className="block text-xs text-muted-foreground">
                A glossary of common football words.
              </span>
            </span>
            <span className="text-muted-foreground">›</span>
          </Card>
        </Link>
      </div>
    </Screen>
  );
}
