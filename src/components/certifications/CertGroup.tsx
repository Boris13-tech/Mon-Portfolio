import type { CertDomain, Certification } from "@/data/certifications";
const statusLabel: Record<Certification["status"], string> = {
  earned: "Obtenue", "in-progress": "En cours", planned: "Planifiée", "needs-verification": "À vérifier",
};
export function CertGroup({ domain, items }: { domain: CertDomain; items: Certification[] }) {
  if (items.length === 0) return null;
  return (
    <section>
      <h2 className="font-display text-h2">{domain.label}</h2>
      <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((c) => (
          <li key={c.code} className="rounded-lg border border-line bg-surface p-5">
            <div className="flex items-baseline justify-between gap-2">
              <div className="font-mono text-sm text-ink-mute">{c.code}</div>
              <div className="text-[11px] uppercase tracking-widest text-ink-mute">{statusLabel[c.status]}</div>
            </div>
            <div className="mt-2 font-display text-h3">{c.name}</div>
            {c.credentialUrl && <a href={c.credentialUrl} target="_blank" rel="noreferrer" className="mt-3 inline-block text-xs">Preuve →</a>}
          </li>
        ))}
      </ul>
    </section>
  );
}
