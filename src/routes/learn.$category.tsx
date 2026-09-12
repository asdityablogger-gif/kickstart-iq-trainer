import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { BackLink, Card, Screen } from "@/components/ui-kit";
import {
  categories,
  lessonsByCategory,
  type LessonCategory,
} from "@/data/lessons";
import { useProgress } from "@/lib/progress";

export const Route = createFileRoute("/learn/$category")({
  loader: ({ params }) => {
    const category = categories.find((c) => c.id === params.category);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    const name = loaderData?.category.name ?? "Lessons";
    return {
      meta: [
        { title: `${name} — Football IQ Lessons` },
        {
          name: "description",
          content:
            loaderData?.category.blurb ?? "Beginner football lessons and diagrams.",
        },
        { property: "og:title", content: `${name} — Football IQ` },
        {
          property: "og:description",
          content: loaderData?.category.blurb ?? "Beginner football lessons.",
        },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const { state } = useProgress();
  const list = lessonsByCategory(category.id as LessonCategory);

  return (
    <Screen>
      <BackLink to="/learn" label="Learn" />
      <h1 className="text-2xl font-extrabold tracking-tight">
        {category.icon} {category.name}
      </h1>
      <p className="mb-5 mt-1 text-sm text-muted-foreground">{category.blurb}</p>

      <div className="grid gap-3">
        {list.map((l) => {
          const done = state.completedLessons.includes(l.id);
          return (
            <Link key={l.id} to="/lesson/$lessonId" params={{ lessonId: l.id }}>
              <Card className="flex items-center gap-3">
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                    done
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {done ? "✓" : "•"}
                </span>
                <span className="flex-1">
                  <span className="block text-sm font-bold">{l.title}</span>
                  <span className="block text-xs text-muted-foreground">
                    {l.summary}
                  </span>
                </span>
                <span className="text-muted-foreground">›</span>
              </Card>
            </Link>
          );
        })}
      </div>
    </Screen>
  );
}
