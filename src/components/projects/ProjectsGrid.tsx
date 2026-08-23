import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

/* ── Per-domain visual theme (source: prototype lines 591–756) ─────────── */
const THEME = {
  devops: {
    accent:       "#10b981",
    accentSoft:   "#6ee7b7",
    bg:           "linear-gradient(140deg,rgba(16,185,129,.1),rgba(59,130,246,.04) 60%,rgba(255,255,255,.01))",
    border:       "rgba(16,185,129,.22)",
    iconBg:       "linear-gradient(135deg,#10b981,#0891b2)",
    iconShadow:   "0 8px 20px rgba(16,185,129,.3),inset 0 1px 0 rgba(255,255,255,.3)",
    label:        "CASE STUDY · 01",
    initials:     "SF",
    ctaColor:     "#6ee7b7",
    svgArrow:     "#6ee7b7",
    diagramSide:  "right" as const,
  },
  identity: {
    accent:       "#8b5cf6",
    accentSoft:   "#c4a4ff",
    bg:           "linear-gradient(140deg,rgba(139,92,246,.1),rgba(59,130,246,.04) 60%,rgba(255,255,255,.01))",
    border:       "rgba(139,92,246,.22)",
    iconBg:       "linear-gradient(135deg,#8b5cf6,#3b82f6)",
    iconShadow:   "0 8px 20px rgba(139,92,246,.3),inset 0 1px 0 rgba(255,255,255,.3)",
    label:        "CASE STUDY · 02",
    initials:     "ZT",
    ctaColor:     "#c4a4ff",
    svgArrow:     "#c4a4ff",
    diagramSide:  "left" as const,
  },
  ai: {
    accent:       "#f97316",
    accentSoft:   "#fbb774",
    bg:           "linear-gradient(140deg,rgba(249,115,22,.1),rgba(220,38,38,.04) 60%,rgba(255,255,255,.01))",
    border:       "rgba(249,115,22,.22)",
    iconBg:       "linear-gradient(135deg,#f97316,#dc2626)",
    iconShadow:   "0 8px 20px rgba(249,115,22,.3),inset 0 1px 0 rgba(255,255,255,.3)",
    label:        "CASE STUDY · 03",
    initials:     "NG",
    ctaColor:     "#fbb774",
    svgArrow:     "#fbb774",
    diagramSide:  "right" as const,
  },
};

/* ── Architecture SVG diagrams (source: prototype lines 624–754) ────────── */
function DiagramSecureFlow() {
  return (
    <svg viewBox="0 0 420 320" style={{ width: "100%", height: "auto" }} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrSf" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#6ee7b7" />
        </marker>
      </defs>
      <g fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#e6e8eb">
        <g><rect x="10" y="20" width="90" height="42" rx="8" fill="rgba(16,185,129,.15)" stroke="#10b981" strokeWidth="1"/><text x="55" y="38" textAnchor="middle" fontWeight="600">Dev / Git</text><text x="55" y="52" textAnchor="middle" fill="#94a3b8">commit signed</text></g>
        <g><rect x="130" y="20" width="120" height="42" rx="8" fill="rgba(59,130,246,.15)" stroke="#3b82f6" strokeWidth="1"/><text x="190" y="38" textAnchor="middle" fontWeight="600">GitHub Actions</text><text x="190" y="52" textAnchor="middle" fill="#94a3b8">OIDC → Azure</text></g>
        <g><rect x="280" y="20" width="130" height="42" rx="8" fill="rgba(139,92,246,.15)" stroke="#8b5cf6" strokeWidth="1"/><text x="345" y="38" textAnchor="middle" fontWeight="600">Scan Stage</text><text x="345" y="52" textAnchor="middle" fill="#94a3b8">Snyk · Trivy · Checkov</text></g>
        <g><rect x="130" y="100" width="120" height="42" rx="8" fill="rgba(220,38,38,.15)" stroke="#dc2626" strokeWidth="1"/><text x="190" y="118" textAnchor="middle" fontWeight="600">OPA Policy</text><text x="190" y="132" textAnchor="middle" fill="#94a3b8">block on High CVE</text></g>
        <g><rect x="280" y="100" width="130" height="42" rx="8" fill="rgba(59,130,246,.15)" stroke="#3b82f6" strokeWidth="1"/><text x="345" y="118" textAnchor="middle" fontWeight="600">ACR + Cosign</text><text x="345" y="132" textAnchor="middle" fill="#94a3b8">signed image + SBOM</text></g>
        <g><rect x="130" y="180" width="120" height="42" rx="8" fill="rgba(6,182,212,.15)" stroke="#06b6d4" strokeWidth="1"/><text x="190" y="198" textAnchor="middle" fontWeight="600">AKS</text><text x="190" y="212" textAnchor="middle" fill="#94a3b8">Workload Identity</text></g>
        <g><rect x="280" y="180" width="130" height="42" rx="8" fill="rgba(220,38,38,.15)" stroke="#dc2626" strokeWidth="1"/><text x="345" y="198" textAnchor="middle" fontWeight="600">Defender + Sentinel</text><text x="345" y="212" textAnchor="middle" fill="#94a3b8">runtime + SIEM</text></g>
        <g><rect x="130" y="260" width="280" height="42" rx="8" fill="rgba(255,255,255,.03)" stroke="rgba(255,255,255,.15)" strokeWidth="1" strokeDasharray="4 3"/><text x="270" y="278" textAnchor="middle" fontWeight="600">Terraform · Key Vault · Log Analytics</text><text x="270" y="292" textAnchor="middle" fill="#94a3b8">infra base</text></g>
      </g>
      <g stroke="#6ee7b7" strokeWidth="1.5" fill="none" markerEnd="url(#arrSf)">
        <line x1="100" y1="41" x2="126" y2="41"/>
        <line x1="250" y1="41" x2="276" y2="41"/>
        <line x1="345" y1="62" x2="345" y2="96"/>
        <line x1="345" y1="142" x2="345" y2="176"/>
        <line x1="280" y1="121" x2="254" y2="121"/>
        <line x1="190" y1="62" x2="190" y2="96"/>
        <line x1="190" y1="142" x2="190" y2="176"/>
        <line x1="280" y1="201" x2="254" y2="201"/>
      </g>
    </svg>
  );
}

function DiagramZeroTrust() {
  return (
    <svg viewBox="0 0 420 320" style={{ width: "100%", height: "auto" }} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrZt" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#c4a4ff" />
        </marker>
      </defs>
      <g fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#e6e8eb">
        <g><rect x="10" y="140" width="90" height="42" rx="8" fill="rgba(139,92,246,.15)" stroke="#8b5cf6" strokeWidth="1"/><text x="55" y="158" textAnchor="middle" fontWeight="600">User</text><text x="55" y="172" textAnchor="middle" fill="#94a3b8">device + context</text></g>
        <g><rect x="130" y="80" width="130" height="42" rx="8" fill="rgba(59,130,246,.15)" stroke="#3b82f6" strokeWidth="1"/><text x="195" y="98" textAnchor="middle" fontWeight="600">Conditional Access</text><text x="195" y="112" textAnchor="middle" fill="#94a3b8">risk + compliance</text></g>
        <g><rect x="130" y="200" width="130" height="42" rx="8" fill="rgba(220,38,38,.15)" stroke="#dc2626" strokeWidth="1"/><text x="195" y="218" textAnchor="middle" fontWeight="600">Intune</text><text x="195" y="232" textAnchor="middle" fill="#94a3b8">device compliance</text></g>
        <g><rect x="290" y="20" width="120" height="42" rx="8" fill="rgba(16,185,129,.15)" stroke="#10b981" strokeWidth="1"/><text x="350" y="38" textAnchor="middle" fontWeight="600">PIM</text><text x="350" y="52" textAnchor="middle" fill="#94a3b8">JIT elevation</text></g>
        <g><rect x="290" y="80" width="120" height="42" rx="8" fill="rgba(59,130,246,.15)" stroke="#3b82f6" strokeWidth="1"/><text x="350" y="98" textAnchor="middle" fontWeight="600">Entra ID</text><text x="350" y="112" textAnchor="middle" fill="#94a3b8">roles + apps</text></g>
        <g><rect x="290" y="140" width="120" height="42" rx="8" fill="rgba(6,182,212,.15)" stroke="#06b6d4" strokeWidth="1"/><text x="350" y="158" textAnchor="middle" fontWeight="600">Governance</text><text x="350" y="172" textAnchor="middle" fill="#94a3b8">access reviews</text></g>
        <g><rect x="290" y="200" width="120" height="42" rx="8" fill="rgba(249,115,22,.15)" stroke="#f97316" strokeWidth="1"/><text x="350" y="218" textAnchor="middle" fontWeight="600">Graph API</text><text x="350" y="232" textAnchor="middle" fill="#94a3b8">provisioning</text></g>
        <g><rect x="10" y="260" width="400" height="42" rx="8" fill="rgba(255,255,255,.03)" stroke="rgba(255,255,255,.15)" strokeWidth="1" strokeDasharray="4 3"/><text x="210" y="278" textAnchor="middle" fontWeight="600">Terraform (azuread), tout en code</text></g>
      </g>
      <g stroke="#c4a4ff" strokeWidth="1.5" fill="none" markerEnd="url(#arrZt)">
        <line x1="100" y1="161" x2="126" y2="105"/>
        <line x1="100" y1="161" x2="126" y2="217"/>
        <line x1="260" y1="101" x2="286" y2="101"/>
        <line x1="260" y1="221" x2="286" y2="221"/>
        <line x1="260" y1="90" x2="286" y2="45"/>
        <line x1="260" y1="110" x2="286" y2="155"/>
      </g>
    </svg>
  );
}

function DiagramNexaGuard() {
  return (
    <svg viewBox="0 0 420 320" style={{ width: "100%", height: "auto" }} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrNg" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#fbb774" />
        </marker>
      </defs>
      <g fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#e6e8eb">
        <g><rect x="10" y="140" width="90" height="42" rx="8" fill="rgba(220,38,38,.15)" stroke="#dc2626" strokeWidth="1"/><text x="55" y="158" textAnchor="middle" fontWeight="600">Sentinel</text><text x="55" y="172" textAnchor="middle" fill="#94a3b8">incidents</text></g>
        <g><rect x="130" y="80" width="130" height="42" rx="8" fill="rgba(6,182,212,.15)" stroke="#06b6d4" strokeWidth="1"/><text x="195" y="98" textAnchor="middle" fontWeight="600">Ingest / Chunk</text><text x="195" y="112" textAnchor="middle" fill="#94a3b8">LlamaIndex</text></g>
        <g><rect x="130" y="200" width="130" height="42" rx="8" fill="rgba(139,92,246,.15)" stroke="#8b5cf6" strokeWidth="1"/><text x="195" y="218" textAnchor="middle" fontWeight="600">AI Search</text><text x="195" y="232" textAnchor="middle" fill="#94a3b8">vector index</text></g>
        <g><rect x="290" y="140" width="120" height="42" rx="8" fill="rgba(249,115,22,.15)" stroke="#f97316" strokeWidth="1"/><text x="350" y="158" textAnchor="middle" fontWeight="600">Agent RAG</text><text x="350" y="172" textAnchor="middle" fill="#94a3b8">LangChain + GPT</text></g>
        <g><rect x="290" y="60" width="120" height="42" rx="8" fill="rgba(59,130,246,.15)" stroke="#3b82f6" strokeWidth="1"/><text x="350" y="78" textAnchor="middle" fontWeight="600">Analyst UI</text><text x="350" y="92" textAnchor="middle" fill="#94a3b8">React</text></g>
        <g><rect x="290" y="220" width="120" height="42" rx="8" fill="rgba(220,38,38,.15)" stroke="#dc2626" strokeWidth="1"/><text x="350" y="238" textAnchor="middle" fontWeight="600">Content Safety</text><text x="350" y="252" textAnchor="middle" fill="#94a3b8">guardrails</text></g>
        <g><rect x="10" y="20" width="90" height="42" rx="8" fill="rgba(16,185,129,.15)" stroke="#10b981" strokeWidth="1"/><text x="55" y="38" textAnchor="middle" fontWeight="600">Playbooks</text><text x="55" y="52" textAnchor="middle" fill="#94a3b8">runbooks</text></g>
      </g>
      <g stroke="#fbb774" strokeWidth="1.5" fill="none" markerEnd="url(#arrNg)">
        <line x1="100" y1="161" x2="126" y2="105"/>
        <line x1="100" y1="41" x2="126" y2="97"/>
        <line x1="260" y1="101" x2="286" y2="155"/>
        <line x1="260" y1="221" x2="286" y2="167"/>
        <line x1="195" y1="122" x2="195" y2="196"/>
        <line x1="350" y1="140" x2="350" y2="106"/>
        <line x1="350" y1="182" x2="350" y2="216"/>
      </g>
    </svg>
  );
}

const DIAGRAMS: Record<string, () => React.ReactElement> = {
  secureflow:    DiagramSecureFlow,
  "zerotrust-iam": DiagramZeroTrust,
  "nexaguard-ai":  DiagramNexaGuard,
};

/* ── Main component ─────────────────────────────────────────────────────── */
export function ProjectsGrid({ projects, className }: { projects: Project[]; className?: string }) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {projects.map((p) => {
        const t = THEME[p.domain] ?? THEME.devops;
        const DiagramComponent = DIAGRAMS[p.slug];
        const isLeft = t.diagramSide === "left";

        return (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="panel"
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: "32px",
              padding: "36px 40px",
              borderRadius: "18px",
              background: t.bg,
              border: `1px solid ${t.border}`,
              boxShadow: "0 25px 60px rgba(0,0,0,.35),inset 0 1px 0 rgba(255,255,255,.06)",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            {/* Text column — always rendered, swapped via CSS order for ZeroTrust */}
            <div style={{ order: isLeft ? 2 : 1, minWidth: 0 }}>

              {/* Icon + label row */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{
                  width: "44px", height: "44px", borderRadius: "10px",
                  background: t.iconBg, flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: "14px",
                  boxShadow: t.iconShadow, color: "#fff",
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: t.accentSoft, letterSpacing: ".1em" }}>
                    {t.label}
                  </div>
                  <div style={{ fontSize: "12px", color: "rgba(230,232,235,.5)" }}>{p.tagline}</div>
                </div>
              </div>

              {/* Title */}
              <div style={{ fontFamily: "var(--font-display)", fontSize: "32px", fontWeight: 500, lineHeight: 1.05, letterSpacing: "-.02em", marginBottom: "12px" }}>
                {p.title}
              </div>

              {/* Description */}
              <p style={{ fontSize: "14px", lineHeight: 1.65, color: "rgba(230,232,235,.75)", margin: "0 0 16px", maxWidth: "520px" }}>
                {p.sections.problem}
              </p>

              {/* PROBLÈME / RÉSULTAT grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 24px", marginBottom: "20px" }}>
                <div>
                  <div style={{ fontSize: "11px", color: "rgba(230,232,235,.5)", fontFamily: "var(--font-mono)", marginBottom: "4px" }}>PROBLÈME</div>
                  <div style={{ fontSize: "13px", lineHeight: 1.5, color: "rgba(230,232,235,.85)" }}>{p.sections.problem}</div>
                </div>
                <div>
                  <div style={{ fontSize: "11px", color: "rgba(230,232,235,.5)", fontFamily: "var(--font-mono)", marginBottom: "4px" }}>RÉSULTAT</div>
                  <div style={{ fontSize: "13px", lineHeight: 1.5, color: "rgba(230,232,235,.85)" }}>{p.sections.results}</div>
                </div>
              </div>

              {/* Stack pills */}
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {p.stack.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontFamily: "var(--font-mono)", fontSize: "10px",
                      padding: "4px 8px", border: "1px solid rgba(255,255,255,.12)",
                      borderRadius: "5px", color: "rgba(230,232,235,.75)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div style={{ marginTop: "20px", fontFamily: "var(--font-mono)", fontSize: "12px", color: t.ctaColor }}>
                Lire le case study complet →
              </div>
            </div>

            {/* Diagram column */}
            <div
              style={{
                order: isLeft ? 1 : 2,
                background: "rgba(0,0,0,.3)", border: "1px solid rgba(255,255,255,.06)",
                borderRadius: "14px", padding: "18px",
                display: "flex", alignItems: "center", justifyContent: "center",
                minWidth: 0,
              }}
            >
              {DiagramComponent ? <DiagramComponent /> : null}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

