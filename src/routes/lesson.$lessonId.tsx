import { createFileRoute, notFound } from "@tanstack/react-router";
import { BackLink, Button, Card, Screen } from "@/components/ui-kit";
import { Pitch } from "@/components/Pitch";
import { lessonById } from "@/data/lessons";
import { formations } from "@/data/formations";
import { useProgress } from "@/lib/progress";

export const Route = createFileRoute("/lesson/$lessonId")({
  loader: ({ params }) => {
    const lesson = lessonById(params.lessonId);
    if (!lesson) throw notFound();
    return { lesson };
  },
  head: ({ loaderData }) => {
    const title = loaderData?.lesson.title ?? "Lesson";
    const desc = loaderData?.lesson.summary ?? "A beginner football lesson.";
    return {
      meta: [
        { title: `${title} — Football IQ Lesson` },
        { name: "description", content: desc },
        { property: "og:title", content: `${title} — Football IQ` },
        { property: "og:description", content: desc },
      ],
    };
  },
  component: LessonPage,
});

function LessonPage() {
  const { lesson } = Route.useLoaderData();
  const { state, completeLesson, uncompleteLesson } = useProgress();
  const done = state.completedLessons.includes(lesson.id);
  const markers = lesson.formationId ? formations[lesson.formationId] : undefined;

  return (
    <Screen>
      <BackLink to={`/learn/${lesson.category}`} label="Back" />
      <h1 className="text-2xl font-extrabold tracking-tight">{lesson.title}</h1>
      <p className="mb-5 mt-1 text-sm text-muted-foreground">{lesson.summary}</p>

      {markers && (
        <div className="mb-5">
          <Pitch markers={markers} />
        </div>
      )}

      <div className="grid gap-3">
        {lesson.points.map((p, i) => (
          <Card key={i}>
            <h2 className="text-xs font-bold uppercase tracking-wide text-primary">
              {p.label}
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-foreground/90">
              {p.text}
            </p>
          </Card>
        ))}
      </div>

      <div className="mt-6">
        {done ? (
          <Button variant="ghost" onClick={() => uncompleteLesson(lesson.id)}>
            ✓ Completed — mark as unread
          </Button>
        ) : (
          <Button onClick={() => completeLesson(lesson.id)}>
            Mark lesson complete
          </Button>
        )}
      </div>
    </Screen>
  );
}
