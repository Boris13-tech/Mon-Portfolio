import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { CertGroup } from "@/components/certifications/CertGroup";
import { createClient } from "@/utils/supabase/server";

export const metadata: Metadata = { title: "Certifications", description: "Mes certifications Microsoft officielles." };

export default async function CertificationsPage() {
  const supabase = await createClient();
  const { data: certs } = await supabase
    .from("certifications")
    .select("*")
    .order("display_order", { ascending: true });

  const activeCerts = certs || [];

  return (
    <Container className="py-24 scene">
      <PageHeader eyebrow="Certifications" title="Validation continue." />
      <div className="mt-16">
        <CertGroup items={activeCerts} />
      </div>
    </Container>
  );
}
