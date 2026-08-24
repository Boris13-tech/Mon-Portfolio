import Link from "next/link";
import { Container } from "@/components/layout/Container";

const cards = [
  { 
    href: "/about", 
    label: "01 · À PROPOS",
    labelColor: "#7cc4ff",
    title: "Qui je suis", 
    desc: "Security Architect chez Legrand-Tech.",
    bg: "linear-gradient(160deg,rgba(59,130,246,.1),rgba(139,92,246,.03))",
    border: "rgba(124,196,255,.18)",
    transform: "rotateY(-4deg) rotateX(2deg)",
    shadow: "0 20px 50px rgba(0,0,0,.35),inset 0 1px 0 rgba(255,255,255,.08)"
  },
  { 
    href: "/certifications", 
    label: "02 · CERTIFICATIONS",
    labelColor: "#fca5a5",
    title: "Certifications", 
    desc: "Progression Azure, Security, AI.",
    bg: "linear-gradient(160deg,rgba(220,38,38,.12),rgba(139,92,246,.03))",
    border: "rgba(220,38,38,.2)",
    transform: "rotateX(2deg)",
    shadow: "0 25px 60px rgba(0,0,0,.4),inset 0 1px 0 rgba(255,255,255,.08)"
  },
  { 
    href: "/projects", 
    label: "03 · PROJETS",
    labelColor: "rgba(230,232,235,.7)",
    title: "Projets", 
    desc: "SecureFlow, ZeroTrust IAM, NexaGuard AI.",
    bg: "linear-gradient(160deg,rgba(255,255,255,.05),rgba(255,255,255,.01))",
    border: "rgba(255,255,255,.1)",
    transform: "rotateY(4deg) rotateX(2deg)",
    shadow: "0 20px 50px rgba(0,0,0,.35),inset 0 1px 0 rgba(255,255,255,.08)"
  },
  { 
    href: "/speaking", 
    label: "04 · SPEAKING",
    labelColor: "#7cc4ff",
    title: "Speaking", 
    desc: "Sujets, formats, langues.",
    bg: "linear-gradient(160deg,rgba(59,130,246,.12),rgba(124,196,255,.03))",
    border: "rgba(124,196,255,.22)",
    transform: "rotateY(-4deg) rotateX(-2deg)",
    shadow: "0 20px 50px rgba(0,0,0,.35),inset 0 1px 0 rgba(255,255,255,.08)"
  },
  { 
    href: "/community", 
    label: "05 · COMMUNAUTÉ",
    labelColor: "#c4a4ff",
    title: "Communauté", 
    desc: "Francophone, autour de Microsoft.",
    bg: "linear-gradient(160deg,rgba(139,92,246,.12),rgba(236,72,153,.03))",
    border: "rgba(139,92,246,.22)",
    transform: "rotateX(-2deg)",
    shadow: "0 25px 60px rgba(0,0,0,.4),inset 0 1px 0 rgba(255,255,255,.08)"
  },
  { 
    href: "/contributions", 
    label: "06 · CONTRIBUTIONS",
    labelColor: "#fca5a5",
    title: "Contributions", 
    desc: "Building toward MVP.",
    bg: "linear-gradient(160deg,rgba(220,38,38,.12),rgba(59,130,246,.08))",
    border: "rgba(220,38,38,.2)",
    transform: "rotateY(-4deg) rotateX(-2deg)",
    shadow: "0 20px 50px rgba(0,0,0,.35),inset 0 1px 0 rgba(255,255,255,.08)"
  },
  { 
    href: "/contact", 
    label: "07 · CONTACT",
    labelColor: "#67e8f9",
    title: "Contact", 
    desc: "On échange ?",
    bg: "linear-gradient(160deg,rgba(6,182,212,.1),rgba(59,130,246,.04))",
    border: "rgba(6,182,212,.2)",
    transform: "rotateX(2deg)",
    shadow: "0 20px 50px rgba(0,0,0,.35),inset 0 1px 0 rgba(255,255,255,.08)"
  },
];

export function HomeGrid() {
  return (
    <>
      <Container className="pt-16 pb-12">
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#7cc4ff", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: "12px" }}>
          {"// naviguer"}
        </div>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "40px", lineHeight: 1.1, letterSpacing: "-.02em", margin: "0 0 32px" }}>
          Faire le tour du hub.
        </h2>
        
        {/* 7 cards grid */}
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ perspective: "1200px" }}>
          {cards.map((c) => (
            <Link 
              key={c.href}
              href={c.href} 
              className="panel flex flex-col justify-between"
              style={{
                padding: "26px",
                minHeight: "200px",
                borderRadius: "16px",
                background: c.bg,
                border: `1px solid ${c.border}`,
                transform: c.transform,
                boxShadow: c.shadow,
                textDecoration: "none",
                color: "inherit"
              }}
            >
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: c.labelColor, marginBottom: "10px" }}>
                  {c.label}
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 500, letterSpacing: "-.01em", marginBottom: "10px" }}>
                  {c.title}
                </div>
                <p style={{ fontSize: "13px", lineHeight: 1.55, color: "rgba(230,232,235,.6)", margin: 0 }}>
                  {c.desc}
                </p>
              </div>
              <div style={{ marginTop: "20px", fontFamily: "var(--font-mono)", fontSize: "12px", color: c.labelColor }}>
                Y aller →
              </div>
            </Link>
          ))}
        </div>
      </Container>

      {/* Building in public strip */}
      <Container className="pb-24 pt-4">
        <div 
          style={{
            padding: "28px 32px",
            borderRadius: "16px",
            background: "linear-gradient(140deg,rgba(249,115,22,.08),rgba(220,38,38,.03) 50%,rgba(255,255,255,.01))",
            border: "1px solid rgba(249,115,22,.2)",
          }}
          className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between"
        >
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#fbb774", letterSpacing: ".1em", marginBottom: "10px" }}>
              {"// BUILDING IN PUBLIC"}
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "26px", fontWeight: 500, letterSpacing: "-.01em", lineHeight: 1.15, marginBottom: "8px", maxWidth: "640px" }}>
              Un parcours construit à voix haute.
            </div>
            <p style={{ fontSize: "14px", lineHeight: 1.6, color: "rgba(230,232,235,.7)", margin: 0, maxWidth: "640px" }}>
              Learn · Build · Share · Teach · Community · Speak · Contribute. Ce journal suit ma progression, étape par étape, sans surjouer.
            </p>
          </div>
          <Link 
            href="/community" 
            style={{ 
              padding: "12px 20px", 
              border: "1px solid rgba(249,115,22,.35)", 
              borderRadius: "10px", 
              fontSize: "13px", 
              color: "#fbb774", 
              fontFamily: "var(--font-mono)", 
              whiteSpace: "nowrap",
              textDecoration: "none"
            }}
            className="hover:bg-orange-500/10 transition-colors"
          >
            Rejoindre le journal →
          </Link>
        </div>
      </Container>
    </>
  );
}
