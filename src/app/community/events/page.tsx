import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
export const metadata = { title: "Events" };
export default function Page() {
  return (
    <Container className="py-24">
      <PageHeader eyebrow="Communauté" title="Events" />
      <p className="mt-6 max-w-2xl text-ink-dim">À venir. Seuls les éléments réels seront ajoutés.</p>
    </Container>
  );
}
