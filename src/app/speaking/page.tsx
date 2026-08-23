import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { SpeakerCard } from "@/components/speaking/SpeakerCard";
import { InviteCTA } from "@/components/speaking/InviteCTA";

export const metadata: Metadata = { title: "Speaking", description: "Building my speaking journey." };

const topics = ["Azure Security", "Cloud Security", "Zero Trust", "Identity", "DevSecOps", "AI Security", "Cloud Architecture", "Microsoft Security"];
const formats = ["Conference", "Meetup", "Workshop", "Webinar", "Podcast", "Panel"];

export default function SpeakingPage() {
  return (
    <Container className="py-24">
      <PageHeader eyebrow="Speaking" title="Building my speaking journey." />
      <SpeakerCard className="mt-12" />
      <section className="mt-16 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-h3 font-display">Topics</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {topics.map((t) => <li key={t} className="rounded-md border border-line bg-surface px-3 py-1.5 text-sm">{t}</li>)}
          </ul>
        </div>
        <div>
          <h2 className="text-h3 font-display">Formats</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {formats.map((f) => <li key={f} className="rounded-md border border-line bg-surface px-3 py-1.5 text-sm">{f}</li>)}
          </ul>
          <h2 className="mt-8 text-h3 font-display">Langues</h2>
          <p className="mt-4 text-ink-dim">Français · English</p>
        </div>
      </section>
      <InviteCTA className="mt-16" />
    </Container>
  );
}
