import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BackLink, Card, EmptyState, Screen } from "@/components/ui-kit";
import { glossary } from "@/data/lessons";

export const Route = createFileRoute("/glossary")({
  head: () => ({
    meta: [
      { title: "Football Terms Glossary — Football IQ" },
      {
        name: "description",
        content:
          "Plain-English definitions of common football terms: pressing, offside, overlap, low block and more.",
      },
      { property: "og:title", content: "Football Terms Glossary" },
      {
        property: "og:description",
        content: "Plain-English definitions of common football terms.",
      },
    ],
  }),
  component: GlossaryPage,
});

function GlossaryPage() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const list = q
    ? glossary.filter(
        (g) =>
          g.term.toLowerCase().includes(q) || g.definition.toLowerCase().includes(q),
      )
    : glossary;

  return (
    <Screen>
      <BackLink to="/learn" label="Learn" />
      <h1 className="text-2xl font-extrabold tracking-tight">Football Terms</h1>
      <p className="mb-4 mt-1 text-sm text-muted-foreground">
        {glossary.length} words explained simply.
      </p>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search a term…"
        className="mb-4 min-h-12 w-full rounded-2xl border border-border bg-card px-4 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
      />

      {list.length === 0 ? (
        <EmptyState icon="🔍" text="No term matches that search." />
      ) : (
        <div className="grid gap-3">
          {list.map((g) => (
            <Card key={g.term}>
              <h2 className="text-sm font-bold text-primary">{g.term}</h2>
              <p className="mt-1 text-sm leading-relaxed text-foreground/90">
                {g.definition}
              </p>
            </Card>
          ))}
        </div>
      )}
    </Screen>
  );
}
