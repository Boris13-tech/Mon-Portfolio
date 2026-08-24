export function Timeline() {
  return (
    <section className="scene w-full max-w-[1200px] mx-auto px-7 py-16">
      <div className="font-mono text-[11px] text-[#7cc4ff] tracking-widest uppercase mb-3">
        {"// parcours"}
      </div>
      <h2 className="font-display font-medium text-[40px] leading-[1.1] tracking-tight mb-10">
        Trois années, trois chapitres.
      </h2>

      <div className="flex flex-col gap-5">
        {/* Card 1 */}
        <div 
          className="panel flex flex-col md:grid md:grid-cols-[180px_1fr] gap-8 p-7 md:p-8 rounded-[14px] shadow-[0_15px_40px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]"
          style={{
            background: "linear-gradient(160deg, rgba(59,130,246,0.08), rgba(139,92,246,0.02))",
            border: "1px solid rgba(124,196,255,0.15)",
            transform: "rotateY(2deg)"
          }}
        >
          <div>
            <div className="font-mono text-xs text-[#7cc4ff]">Déc. 2025 à aujourd'hui</div>
            <div className="text-xs text-ink-mute/60 mt-1.5">Legrand-Tech</div>
          </div>
          <div>
            <div className="font-display text-[22px] font-medium tracking-tight mb-1">Security Architect</div>
            <div className="text-[13px] text-ink-mute mb-3.5 font-mono">Architecture Cloud & Cyber</div>
            <p className="text-[14px] leading-[1.65] text-ink-dim mb-3">
              Je dirige la vision architecturale de la cybersécurité et du cloud. Mon focus : concevoir des architectures Azure robustes, implémenter le Zero Trust, sécuriser les identités (Entra ID) et aligner la technique sur la conformité (NIST, ISO 27001).
            </p>
            <div className="flex gap-1.5 flex-wrap">
              {['Azure', 'Zero Trust', 'Entra ID', 'Defender XDR', 'Purview'].map((tag) => (
                <span key={tag} className="font-mono text-[11px] px-2 py-[3px] border border-black/10 dark:border-white/10 rounded-[5px] text-ink-mute/80">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div 
          className="panel flex flex-col md:grid md:grid-cols-[180px_1fr] gap-8 p-7 md:p-8 rounded-[14px] shadow-[0_15px_40px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]"
          style={{
            background: "linear-gradient(160deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
            border: "1px solid rgba(255,255,255,0.08)",
            transform: "rotateY(-2deg)"
          }}
        >
          <div>
            <div className="font-mono text-xs text-ink-mute">Mai 2025 à Déc. 2025</div>
            <div className="text-xs text-ink-mute/60 mt-1.5">Académie Cyber & Réseaux</div>
          </div>
          <div>
            <div className="font-display text-[22px] font-medium tracking-tight mb-1">Head of Audit & Compliance</div>
            <div className="text-[13px] text-ink-mute mb-3.5 font-mono">Responsable Audit</div>
            <p className="text-[14px] leading-[1.65] text-ink-dim mb-3">
              Validation des standards de sécurité, évaluation des risques et accompagnement sur les bonnes pratiques de gouvernance informatique.
            </p>
            <div className="flex gap-1.5 flex-wrap">
              {['Audit', 'Conformité', 'Risk Management'].map((tag) => (
                <span key={tag} className="font-mono text-[11px] px-2 py-[3px] border border-black/10 dark:border-white/10 rounded-[5px] text-ink-mute/80">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div 
          className="panel flex flex-col md:grid md:grid-cols-[180px_1fr] gap-8 p-7 md:p-8 rounded-[14px] shadow-[0_15px_40px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.05)] opacity-95"
          style={{
            background: "linear-gradient(160deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
            border: "1px solid rgba(255,255,255,0.06)",
            transform: "rotateY(2deg)"
          }}
        >
          <div>
            <div className="font-mono text-xs text-ink-mute/80">Depuis Août 2022</div>
            <div className="text-xs text-ink-mute/60 mt-1.5">Eviden / Atos</div>
          </div>
          <div>
            <div className="font-display text-[22px] font-medium tracking-tight mb-1">Senior Support Analyst</div>
            <div className="text-[13px] text-ink-mute mb-3.5 font-mono">Support & Amélioration continue</div>
            <p className="text-[14px] leading-[1.65] text-ink-dim m-0">
              Évolution continue depuis le poste d'Analyste Junior. Administration systèmes, environnements Office 365 et assistance utilisateur complexe. Une excellente école pour apprendre la rigueur, l'autonomie et l'écoute active.
            </p>
            <div className="flex gap-1.5 flex-wrap mt-3">
              {['Office 365', 'Windows Sysadmin', 'Python', 'Support IT'].map((tag) => (
                <span key={tag} className="font-mono text-[11px] px-2 py-[3px] border border-black/10 dark:border-white/10 rounded-[5px] text-ink-mute/80">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
