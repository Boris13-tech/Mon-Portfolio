import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata: Metadata = { title: "À propos", description: "Trois ans à apprendre le cloud à la dure." };

export default function AboutPage() {
  return (
    <Container className="py-24">
      <PageHeader eyebrow="À propos" title="Trois ans à apprendre le cloud à la dure." />
      <div className="prose prose-invert mt-12 max-w-2xl">
        <p>Je suis Boris Ohandja. Cloud & Cybersecurity Architect. J'écris ici ce que j'apprends en concevant, sécurisant et exploitant des architectures Azure — sans filtre marketing.</p>
        <p>Cette page est volontairement courte pour le moment. Elle grandira au rythme des projets, des articles et des rencontres.</p>
      </div>
    </Container>
  );
}
