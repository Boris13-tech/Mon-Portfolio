import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
export const metadata = { title: "Resources" };
export default function Page() {
  return (
    <Container className="py-24">
      <PageHeader eyebrow="Communauté" title="Resources" />
      <p className="mt-6 max-w-2xl text-ink-dim">À venir. Seuls les éléments réels seront ajoutés.</p>
    </Container>
  );
}
