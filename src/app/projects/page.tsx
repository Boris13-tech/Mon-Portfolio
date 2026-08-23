import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Projets", description: "Trois plateformes, une même approche." };

export default function ProjectsPage() {
  return (
    <Container className="py-24">
      <PageHeader eyebrow="Projets" title="Trois plateformes, une même approche." />
      <ProjectsGrid projects={projects} className="mt-16" />
    </Container>
  );
}
