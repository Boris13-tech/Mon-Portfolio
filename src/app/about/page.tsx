import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Stack } from "@/components/about/Stack";
import { Timeline } from "@/components/about/Timeline";

export const metadata: Metadata = { title: "À propos", description: "Trois ans à apprendre le cloud à la dure." };

export default function AboutPage() {
  return (
    <>
      <Container className="py-24 pb-12">
        <PageHeader eyebrow="À propos" title="Trois ans à apprendre le cloud à la dure." />
        <div className="prose prose-invert mt-12 max-w-2xl text-ink-dim">
          <p>Je suis Boris Ohandja. Cloud & Cybersecurity Architect. J'écris ici ce que j'apprends en concevant, sécurisant et exploitant des architectures Azure — sans filtre marketing.</p>
        </div>
      </Container>
      <Stack />
      <Timeline />
    </>
  );
}
