import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = { title: "Contact", description: "On en parle autour d'un café ?" };

export default function ContactPage() {
  return (
    <Container className="max-w-2xl py-24">
      <PageHeader eyebrow="Contact" title="On en parle autour d'un café ?" />
      <ContactForm className="mt-12" />
    </Container>
  );
}
