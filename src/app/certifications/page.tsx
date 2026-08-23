import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { CertGroup } from "@/components/certifications/CertGroup";
import { certifications } from "@/data/certifications";

export const metadata: Metadata = { title: "Certifications", description: "Sept badges, sept étapes." };

export default function CertificationsPage() {
  const featuredCodes = ["SC-100", "AZ-305", "AZ-400", "AZ-104", "AZ-700", "SC-300", "AI-103"];
  const featuredCerts = featuredCodes
    .map(code => certifications.find(c => c.code === code))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <Container className="py-24 scene">
      <PageHeader eyebrow="Certifications" title="Sept badges, sept étapes." />
      <div className="mt-16">
        <CertGroup items={featuredCerts} />
      </div>
    </Container>
  );
}
