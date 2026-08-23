import Link from "next/link";
import { Container } from "@/components/layout/Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="floor-grid absolute inset-0 -z-10 opacity-70" aria-hidden />
      <Container className="py-24 md:py-32">
        <div className="text-xs uppercase tracking-[0.24em] text-ink-mute">Boris Ohandja</div>
        <h1 className="mt-4 font-display text-display-2 md:text-display-1">
          Cloud & Cybersecurity <span className="text-accent-azure">Architect</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lead text-ink-dim">
          J'écris ce que j'apprends en concevant, sécurisant et exploitant des architectures Azure. Sans filtre marketing.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/projects"      className="rounded-md bg-ink px-4 py-2 text-sm text-ink-inverse">Explorer les projets</Link>
          <Link href="/certifications" className="rounded-md border border-line bg-surface px-4 py-2 text-sm">Voir les certifications</Link>
          <Link href="/speaking"       className="rounded-md border border-line bg-surface px-4 py-2 text-sm">M'inviter à parler</Link>
        </div>
      </Container>
    </section>
  );
}
