export function Stack() {
  return (
    <section className="scene w-full max-w-[1200px] mx-auto px-7 py-16 pb-10">
      <div className="panel p-9 sm:p-10 rounded-[18px] shadow-[0_20px_50px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)] border border-line" style={{ background: "linear-gradient(160deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))" }}>
        <div className="font-mono text-[11px] text-[#7cc4ff] tracking-widest uppercase mb-5">
          {"// stack quotidienne"}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-xs text-ink-mute/70 mb-2.5 font-semibold">Cloud</div>
            <div className="flex flex-col gap-1.5 text-[13px] text-ink-dim font-mono">
              <div>Azure · AKS · APIM</div>
              <div>Function Apps</div>
              <div>Log Analytics</div>
            </div>
          </div>
          <div>
            <div className="text-xs text-ink-mute/70 mb-2.5 font-semibold">IaC & CI/CD</div>
            <div className="flex flex-col gap-1.5 text-[13px] text-ink-dim font-mono">
              <div>Terraform · Bicep</div>
              <div>GitHub Actions</div>
              <div>Azure DevOps</div>
            </div>
          </div>
          <div>
            <div className="text-xs text-ink-mute/70 mb-2.5 font-semibold">Sécurité</div>
            <div className="flex flex-col gap-1.5 text-[13px] text-ink-dim font-mono">
              <div>Entra ID · Defender</div>
              <div>Key Vault · PIM</div>
              <div>Zero Trust</div>
            </div>
          </div>
          <div>
            <div className="text-xs text-ink-mute/70 mb-2.5 font-semibold">Langages</div>
            <div className="flex flex-col gap-1.5 text-[13px] text-ink-dim font-mono">
              <div>PowerShell · Bash</div>
              <div>Python · Go</div>
              <div>KQL</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
