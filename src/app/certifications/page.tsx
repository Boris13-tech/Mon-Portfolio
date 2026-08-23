import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { CertGroup } from "@/components/certifications/CertGroup";
import { certifications, certDomains } from "@/data/certifications";

export const metadata: Metadata = { title: "Certifications", description: "Sept badges, sept étapes." };

export default function CertificationsPage() {
  return (
    <Container className="py-24">
      <PageHeader eyebrow="Certifications" title="Sept badges, sept étapes." />
      <p className="mt-6 max-w-2xl text-ink-dim">Statuts affichés tels quels. Aucune certification n'est marquée <code>earned</code> tant qu'elle n'est pas vérifiée par Boris.</p>
      <div className="mt-16 space-y-16">
        {certDomains.map((d) => (
          <CertGroup key={d.id} domain={d} items={certifications.filter((c) => c.domain === d.id)} />
        ))}
      </div>
    </Container>
  );
}
