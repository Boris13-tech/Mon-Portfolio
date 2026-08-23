import Link from "next/link";
import { Container } from "@/components/layout/Container";
const cards = [
  { href: "/projects",       t: "Projets",        b: "SecureFlow, ZeroTrust IAM, NexaGuard AI." },
  { href: "/certifications", t: "Certifications", b: "Progression Azure, Security, AI." },
  { href: "/speaking",       t: "Speaking",       b: "Sujets, formats, langues." },
  { href: "/community",      t: "Communauté",     b: "Francophone, autour de Microsoft." },
  { href: "/contributions",  t: "Contributions",  b: "Building toward MVP." },
  { href: "/about",          t: "À propos",       b: "Trois ans à apprendre le cloud à la dure." },
];
export function HomeGrid() {
  return (
    <Container className="py-24">
      <h2 className="font-display text-h2">Faire le tour du hub.</h2>
      <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <li key={c.href}>
            <Link href={c.href} className="block h-full rounded-lg border border-line bg-surface p-6 transition hover:border-accent-azure/60">
              <div className="font-display text-h3">{c.t}</div>
              <p className="mt-2 text-sm text-ink-dim">{c.b}</p>
              <div className="mt-6 text-xs uppercase tracking-widest text-ink-mute">Explorer →</div>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
