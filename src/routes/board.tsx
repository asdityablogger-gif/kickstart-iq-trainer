import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button, Card, Screen } from "@/components/ui-kit";
import { Pitch } from "@/components/Pitch";
import { scenarios } from "@/data/scenarios";
import { formations } from "@/data/formations";

const formationNames: { id: string; label: string }[] = [
  { id: "442", label: "4-4-2" },
  { id: "433", label: "4-3-3" },
  { id: "4231", label: "4-2-3-1" },
  { id: "352", label: "3-5-2" },
  { id: "532", label: "5-3-2" },
];

export const Route = createFileRoute("/board")({
  head: () => ({
    meta: [
      { title: "Tactical Board — Football IQ" },
      {
        name: "description",
        content:
          "Explore football formations on a pitch diagram and solve tactical scenarios about space, pressing and counter attacks.",
      },
      { property: "og:title", content: "Tactical Board — Football IQ" },
      {
        property: "og:description",
        content: "Explore formations and solve tactical scenarios on a pitch diagram.",
      },
    ],
  }),
  component: BoardPage,
});

function BoardPage() {
  const [tab, setTab] = useState<"formations" | "scenarios">("formations");

  return (
    <Screen title="Tactical Board" subtitle="See the shapes and read the game.">
      <div className="mb-5 grid grid-cols-2 gap-2 rounded-2xl bg-muted p-1">
        {(["formations", "scenarios"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`min-h-10 rounded-xl text-sm font-bold capitalize transition ${
              tab === t
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === "formations" ? <FormationView /> : <ScenarioView />}
    </Screen>
  );
}

function FormationView() {
  const [id, setId] = useState("442");

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2">
        {formationNames.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setId(f.id)}
            className={`min-h-10 rounded-xl px-3 text-sm font-bold transition ${
              id === f.id
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-card text-foreground"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
      <Pitch key={id} markers={formations[id] ?? []} />
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Tap a formation to see how the eleven players line up.
      </p>
    </div>
  );
}

function ScenarioView() {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const s = scenarios[index]!;

  const go = (next: number) => {
    setIndex((next + scenarios.length) % scenarios.length);
    setPicked(null);
  };

  return (
    <div>
      <Card className="mb-4">
        <h2 className="text-sm font-bold text-primary">{s.title}</h2>
        <p className="mt-1 text-sm leading-relaxed text-foreground/90">
          {s.situation}
        </p>
      </Card>

      <Pitch key={s.id} markers={s.markers} className="mb-4" />

      <p className="mb-2 text-sm font-bold">{s.question}</p>
      <div className="grid gap-2">
        {s.options.map((o, i) => {
          const isAnswer = i === s.answer;
          const state =
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
              disabled={picked !== null}
              onClick={() => setPicked(i)}
              className={`min-h-12 rounded-2xl px-4 text-left text-sm font-semibold transition ${state}`}
            >
              {o}
            </button>
          );
        })}
      </div>

      {picked !== null && (
        <Card className="mt-4">
          <p className="text-sm leading-relaxed text-foreground/90">
            {s.explanation}
          </p>
        </Card>
      )}

      <div className="mt-5 grid grid-cols-2 gap-3">
        <Button variant="ghost" onClick={() => go(index - 1)}>
          ← Previous
        </Button>
        <Button variant="secondary" onClick={() => go(index + 1)}>
          Next →
        </Button>
      </div>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Scenario {index + 1} of {scenarios.length}
      </p>
    </div>
  );
}
