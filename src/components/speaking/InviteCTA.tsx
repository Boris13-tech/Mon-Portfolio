import Link from "next/link";
import { cn } from "@/lib/utils";
export function InviteCTA({ className }: { className?: string }) {
  return (
    <section className={cn("rounded-lg border border-accent-speaking/40 bg-surface p-8", className)}>
      <div className="font-display text-h2">Invite me to speak</div>
      <p className="mt-3 max-w-2xl text-ink-dim">Meetup, conférence, workshop, webinar, podcast ou panel — en français ou en anglais.</p>
      <Link href="/contact" className="mt-6 inline-block rounded-md bg-ink px-4 py-2 text-sm text-ink-inverse">Envoyer une invitation</Link>
    </section>
  );
}
