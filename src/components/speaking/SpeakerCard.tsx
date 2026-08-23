import { cn } from "@/lib/utils";
export function SpeakerCard({ className }: { className?: string }) {
  return (
    <section className={cn("rounded-lg border border-line bg-surface p-8", className)}>
      <div className="text-xs uppercase tracking-[0.24em] text-ink-mute">Boris Ohandja</div>
      <div className="mt-2 font-display text-h2">Cloud & Cybersecurity Architect</div>
      <p className="mt-4 max-w-2xl text-ink-dim">Je construis ma trajectoire de speaker autour d'Azure, de la sécurité et de l'IA. Cette page grandira avec les sessions à venir — sans rien inventer.</p>
    </section>
  );
}
