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
            <div className="font-mono text-xs text-[#7cc4ff]">2024 · aujourd'hui</div>
            <div className="text-xs text-ink-mute/60 mt-1.5">1 an et demi</div>
          </div>
          <div>
            <div className="font-display text-[22px] font-medium tracking-tight mb-1">Ingénieur Cloud Azure</div>
            <div className="text-[13px] text-ink-mute mb-3.5 font-mono">Intégrateur · Lyon</div>
            <p className="text-[14px] leading-[1.65] text-ink-dim mb-3">
              Conception de landing zones pour trois clients grands comptes. Migration d'environ 150 VMs, refonte du modèle d'identité Entra ID, mise en place du pipeline GitOps avec GitHub Actions.
            </p>
            <div className="flex gap-1.5 flex-wrap">
              {['Terraform', 'AKS', 'Entra ID', 'GitHub Actions'].map((tag) => (
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
            <div className="font-mono text-xs text-ink-mute">2023 · 2024</div>
            <div className="text-xs text-ink-mute/60 mt-1.5">1 an</div>
          </div>
          <div>
            <div className="font-display text-[22px] font-medium tracking-tight mb-1">Administrateur Cloud (Junior)</div>
            <div className="text-[13px] text-ink-mute mb-3.5 font-mono">ESN · Paris</div>
            <p className="text-[14px] leading-[1.65] text-ink-dim mb-3">
              Run et build d'environnements Azure pour trois clients en régie. J'ai appris ici que documenter n'est pas optionnel, et que les incidents sont les meilleurs profs.
            </p>
            <div className="flex gap-1.5 flex-wrap">
              {['Azure Admin', 'Bicep', 'PowerShell'].map((tag) => (
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
            <div className="font-mono text-xs text-ink-mute/80">2022 · 2023</div>
            <div className="text-xs text-ink-mute/60 mt-1.5">Stage + alternance</div>
          </div>
          <div>
            <div className="font-display text-[22px] font-medium tracking-tight mb-1">Alternant DevOps</div>
            <div className="text-[13px] text-ink-mute mb-3.5 font-mono">Éditeur SaaS · Lyon</div>
            <p className="text-[14px] leading-[1.65] text-ink-dim m-0">
              Ma première rencontre avec Azure. Mission : migrer une appli PHP legacy vers App Service et automatiser les déploiements. Beaucoup d'erreurs, beaucoup d'apprentissage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
