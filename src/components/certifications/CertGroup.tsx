import type { Certification } from "@/data/certifications";
import { certVisuals } from "./certVisuals";

export function CertGroup({ items }: { items: Certification[] }) {
  if (items.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((c) => {
        const visual = certVisuals[c.code];
        if (!visual) return null;

        const badgeSrc = c.badge_image_url ? c.badge_image_url : visual.src;

        const CardContent = (
          <div
            className={`panel drift p-6 rounded-2xl flex flex-col items-center text-center shadow-lg transition-transform hover:z-10 ${c.verification_url ? 'cursor-pointer hover:scale-[1.02]' : 'cursor-default'}`}
            style={{
              background: `linear-gradient(160deg, ${visual.color}14, rgba(255,255,255,0.01))`,
              border: `1px solid ${visual.color}59`,
              transform: visual.transform,
              boxShadow: "0 20px 45px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            <div
              className="w-[120px] h-[120px] mb-3 flex items-center justify-center transition-all"
              style={{ filter: `drop-shadow(0 10px 20px ${visual.color}59)` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={badgeSrc} alt={`${c.code} badge`} className="w-full h-full object-contain" />
            </div>

            <div
              className="px-2.5 py-1 rounded-md text-[10px] font-bold tracking-widest font-mono mb-2.5"
              style={{ background: `${visual.color}14`, border: `1px solid ${visual.color}59`, color: visual.color }}
            >
              {visual.level}
            </div>

            <div className="font-mono text-xs mb-1" style={{ color: visual.color }}>
              {c.code}
            </div>

            <div className="font-display text-[17px] leading-tight tracking-tight mb-2">
              {c.title}
            </div>

            <div className="text-xs text-ink-mute flex items-center gap-1.5 justify-center">
              {c.issued_at ? `Obtenue en ${c.issued_at.substring(0, 4)}` : "Obtenue"}
              {c.verification_url ? (
                <span className="text-[#7cc4ff] opacity-70" title="Preuve vérifiable disponible">✓</span>
              ) : (
                <span className="opacity-40" title="Preuve en attente d'ajout">⏳</span>
              )}
            </div>
          </div>
        );

        return c.verification_url ? (
          <a key={c.code} href={c.verification_url} target="_blank" rel="noreferrer" className="block outline-none focus-visible:ring-2 focus-visible:ring-[#7cc4ff] rounded-2xl">
            {CardContent}
          </a>
        ) : (
          <div key={c.code}>
            {CardContent}
          </div>
        );
      })}

      {/* 8th Card: AZ-500 En préparation */}
      <div
        className="panel drift p-6 rounded-2xl flex flex-col justify-center items-center text-center gap-2.5 min-h-[280px]"
        style={{
          background: "linear-gradient(160deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
          border: "1px dashed rgba(255,255,255,0.18)",
        }}
      >
        <div className="w-16 h-16 rounded-full flex items-center justify-center font-display text-[28px]"
          style={{
            background: "rgba(124, 196, 255, 0.08)",
            border: "1px dashed rgba(124, 196, 255, 0.3)",
            color: "rgba(124, 196, 235, 0.5)",
          }}
        >
          +
        </div>
        <div className="font-mono text-[11px] text-ink-mute tracking-widest">
          EN PRÉPARATION
        </div>
        <div className="font-display text-[17px] text-ink-dim leading-snug">
          AZ-500<br />
          <span className="text-[13px] text-ink-mute/70">Azure Security Engineer</span>
        </div>
      </div>
    </div>
  );
}
