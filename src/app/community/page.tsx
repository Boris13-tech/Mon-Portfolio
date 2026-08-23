import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata: Metadata = { title: "Communauté", description: "Microsoft technologies, explained and shared in French." };

const links = [
  { href: "/community/events",    label: "Événements",  blurb: "Meetups, workshops, webinars." },
  { href: "/community/resources", label: "Ressources",   blurb: "Playbooks, templates, notes de labs." },
  { href: "/community/partners",  label: "Partenaires",  blurb: "Entités qui portent l'initiative." },
];

export default function CommunityPage() {
  return (
    <Container className="py-24">
      <PageHeader eyebrow="Communauté" title="Une communauté francophone, autour du cloud, de la sécurité et de l'IA." />
      <p className="mt-6 max-w-2xl text-ink-dim">Microsoft technologies, expliquées et partagées en français. Rien de simulé ici : la page ne montre que ce qui existe vraiment.</p>
      <ul className="mt-16 grid gap-6 md:grid-cols-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="block rounded-lg border border-line bg-surface p-6 transition hover:border-accent-community/60">
              <div className="text-h3 font-display">{l.label}</div>
              <p className="mt-2 text-sm text-ink-dim">{l.blurb}</p>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
