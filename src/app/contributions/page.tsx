import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { contributions } from "@/data/contributions";

export const metadata: Metadata = { title: "Contributions", description: "Ce que j'apporte à l'écosystème." };

export default function ContributionsPage() {
  return (
    <Container className="py-24">
      <PageHeader eyebrow="Contributions" title="Ce que j'apporte à l'écosystème." />
      <p className="mt-6 max-w-2xl text-ink-dim">Building toward Microsoft community leadership. Cette page grandira à mesure que les contributions s'accumulent — rien n'est ajouté sans preuve.</p>
      {contributions.length === 0 ? (
        <p className="mt-16 text-ink-mute">Aucune contribution publique documentée pour le moment.</p>
      ) : (
        <ul className="mt-16 space-y-6">
          {contributions.map((c) => (
            <li key={c.slug} className="rounded-lg border border-line bg-surface p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="font-display text-h3">{c.title}</div>
                <div className="text-xs uppercase tracking-wider text-ink-mute">{c.kind} · {c.date}</div>
              </div>
              {c.description && <p className="mt-2 text-sm text-ink-dim">{c.description}</p>}
              {c.url && <a href={c.url} className="mt-3 inline-block text-sm text-accent-azure hover:underline" target="_blank" rel="noreferrer">Voir la source →</a>}
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}
