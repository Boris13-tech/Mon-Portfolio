import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Stack } from "@/components/about/Stack";
import { Timeline } from "@/components/about/Timeline";

export const metadata: Metadata = { title: "À propos", description: "Trois années, trois chapitres." };

export default function AboutPage() {
  return (
    <>
      <Container className="py-24 pb-12">
        <PageHeader eyebrow="À propos" title="Trois années, trois chapitres." />
        <div className="prose prose-invert mt-12 max-w-2xl text-ink-dim">
          <p>Je suis Boris Ohandja. Security Architect chez Legrand-Tech. J'écris ici ce que j'apprends en concevant des architectures Azure robustes, en implémentant des stratégies Zero Trust et en alignant la technique sur les exigences de conformité.</p>
        </div>
      </Container>
      <Stack />
      <Timeline />
    </>
  );
}
