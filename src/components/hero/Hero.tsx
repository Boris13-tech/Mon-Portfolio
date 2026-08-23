import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">

      {/* 2-column hero grid — collapses to 1 col on mobile via .hero-grid CSS */}
      <div className="hero-grid">

        {/* ── Left column ── */}
        <div style={{ minWidth: 0 }}>

          {/* Status pill */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            padding: "6px 12px", borderRadius: "100px",
            background: "rgba(124,196,255,.08)", border: "1px solid rgba(124,196,255,.2)",
            fontFamily: "var(--font-mono)", fontSize: "11px", color: "#7cc4ff",
            marginBottom: "24px",
          }}>
            <span
              className="status-dot"
              style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px #22c55e", display: "inline-block" }}
              aria-hidden
            />
            <span>Boris Ohandja · Basé en Europe · Disponible pour missions</span>
          </div>

          {/* Overline label */}
          <div style={{
            fontFamily: "var(--font-mono)", fontSize: "12px",
            color: "rgba(230,232,235,.55)", letterSpacing: ".15em",
            textTransform: "uppercase", marginBottom: "18px",
          }}>
            Cloud &amp; Cybersecurity et IA Architect
          </div>

          {/* H1 — exact text from prototype */}
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 500,
            fontSize: "clamp(2.25rem, 4vw, 3.5rem)", lineHeight: 1.02,
            letterSpacing: "-.025em", margin: "0 0 22px", maxWidth: "600px",
          }}>
            Je dessine des architectures cloud{" "}
            <span style={{ color: "#7cc4ff" }}>solides</span>, résilientes, et pensées pour durer.
          </h1>

          {/* Description — exact text from prototype */}
          <p style={{
            fontSize: "17px", lineHeight: 1.6,
            color: "rgba(230,232,235,.7)", maxWidth: "520px", margin: "0 0 32px",
          }}>
            Sur Azure, en cybersécurité et en IA. De la landing zone Zero Trust au pipeline DevSecOps,
            jusqu&apos;aux plateformes AI Security. Sept certifications Microsoft et une approche architecte,
            du cadrage à la mise en production.
          </p>

          {/* CTA buttons — from prototype */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center" }}>
            <Link
              href="/projects"
              style={{
                padding: "13px 22px",
                background: "linear-gradient(180deg,#f4f6f8,#c9cfd6)",
                color: "#0a0c10", borderRadius: "10px",
                fontSize: "14px", fontWeight: 600,
                boxShadow: "0 12px 30px rgba(255,255,255,.08),inset 0 1px 0 rgba(255,255,255,.6),inset 0 -2px 0 rgba(0,0,0,.15)",
                textDecoration: "none", display: "inline-block",
              }}
            >
              Voir mes projets
            </Link>
            <Link
              href="/projects"
              style={{
                padding: "13px 22px",
                border: "1px solid rgba(124,196,255,.3)", borderRadius: "10px",
                fontSize: "14px", fontWeight: 500,
                background: "rgba(124,196,255,.05)", color: "#e6e8eb",
                textDecoration: "none", display: "inline-block",
              }}
            >
              Regarder une archi
            </Link>
            <Link
              href="/contact"
              style={{
                padding: "13px 22px",
                border: "1px solid rgba(255,255,255,.12)", borderRadius: "10px",
                fontSize: "14px", fontWeight: 500,
                color: "rgba(230,232,235,.85)",
                textDecoration: "none", display: "inline-block",
              }}
            >
              Discuter avec moi →
            </Link>
          </div>
        </div>

        {/* ✨ Right column – 3D floating certification badges ✨ */}
        <div
          className="hero-3d-col mt-12 lg:mt-0 relative w-[450px] left-1/2 -translate-x-1/2 lg:w-auto lg:left-auto lg:translate-x-0 scale-[0.70] sm:scale-90 lg:scale-100 origin-top lg:origin-right"
          style={{ height: "460px", perspective: "1400px", perspectiveOrigin: "50% 50%" }}
          aria-hidden
        >
          {/* Portrait Background */}
          <div className="absolute top-[-40px] right-[-20px] md:right-0 w-[500px] h-[600px] pointer-events-none z-0" style={{ maskImage: "radial-gradient(ellipse 80% 80% at 50% 40%, black 30%, transparent 80%)", WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 40%, black 30%, transparent 80%)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/boris.jpg" alt="Boris Ohandja" className="w-full h-full object-cover opacity-90" />
          </div>
          {/* Card 1 — SC-100 (foreground, drift) */}
          <div
            className="panel drift"
            style={{
              position: "absolute", top: "20px", right: 0, width: "280px",
              padding: "22px", borderRadius: "16px",
              background: "linear-gradient(145deg,rgba(59,130,246,.2),rgba(139,92,246,.1))",
              border: "1px solid rgba(124,196,255,.3)",
              transform: "rotateY(-16deg) rotateX(6deg) translateZ(40px)",
              boxShadow: "-30px 40px 80px rgba(0,0,0,.5),inset 0 1px 0 rgba(255,255,255,.15)",
              zIndex: 3,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <div style={{
                width: "36px", height: "36px", borderRadius: "8px",
                background: "linear-gradient(135deg,#3b82f6,#0ea5e9)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: "11px",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,.3)", color: "#fff",
              }}>SC</div>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#7cc4ff" }}>SC-100</div>
                <div style={{ fontSize: "11px", color: "rgba(230,232,235,.5)" }}>Expert · 2025</div>
              </div>
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "17px", lineHeight: 1.2, letterSpacing: "-.01em" }}>
              Cybersecurity Architect Expert
            </div>
          </div>

          {/* Card 2 — AZ-305 (mid, drift-2) */}
          <div
            className="panel drift-2"
            style={{
              position: "absolute", top: "180px", right: "70px", width: "280px",
              padding: "20px", borderRadius: "16px",
              background: "linear-gradient(145deg,rgba(255,255,255,.08),rgba(255,255,255,.02))",
              border: "1px solid rgba(255,255,255,.14)",
              transform: "rotateY(-10deg) rotateX(3deg) translateZ(0px)",
              boxShadow: "-20px 30px 60px rgba(0,0,0,.45),inset 0 1px 0 rgba(255,255,255,.1)",
              zIndex: 2,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <div style={{
                width: "36px", height: "36px", borderRadius: "8px",
                background: "linear-gradient(135deg,#8b5cf6,#ec4899)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: "11px",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,.3)", color: "#fff",
              }}>AZ</div>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "rgba(230,232,235,.7)" }}>AZ-305</div>
                <div style={{ fontSize: "11px", color: "rgba(230,232,235,.5)" }}>Expert · 2024</div>
              </div>
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "16px", lineHeight: 1.25, letterSpacing: "-.01em" }}>
              Azure Solutions Architect Expert
            </div>
          </div>

          {/* Card 3 — AI-103 (background, drift-3) */}
          <div
            className="panel drift-3"
            style={{
              position: "absolute", top: "330px", right: "140px", width: "270px",
              padding: "18px", borderRadius: "16px",
              background: "linear-gradient(145deg,rgba(255,255,255,.05),rgba(255,255,255,.01))",
              border: "1px solid rgba(255,255,255,.1)",
              transform: "rotateY(-5deg) rotateX(2deg) translateZ(-40px)",
              boxShadow: "-15px 25px 50px rgba(0,0,0,.35),inset 0 1px 0 rgba(255,255,255,.06)",
              opacity: 0.9, zIndex: 1,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{
                width: "32px", height: "32px", borderRadius: "8px",
                background: "linear-gradient(135deg,#06b6d4,#3b82f6)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: "10px",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,.3)", color: "#fff",
              }}>AI</div>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "rgba(230,232,235,.7)" }}>AI-103</div>
                <div style={{ fontSize: "11px", color: "rgba(230,232,235,.5)" }}>Associate · 2024</div>
              </div>
              <div style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: "10px", color: "rgba(230,232,235,.4)" }}>
                +4 autres
              </div>
            </div>
          </div>

          {/* Card 4 — AZ-400 (left side, drift) */}
          <div
            className="panel drift-2"
            style={{
              position: "absolute", top: "260px", left: "-20px", width: "260px",
              padding: "18px", borderRadius: "16px",
              background: "linear-gradient(145deg,rgba(255,255,255,.05),rgba(255,255,255,.01))",
              border: "1px solid rgba(255,255,255,.1)",
              transform: "rotateY(10deg) rotateX(5deg) translateZ(10px)",
              boxShadow: "-10px 20px 40px rgba(0,0,0,.4),inset 0 1px 0 rgba(255,255,255,.06)",
              zIndex: 2,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
              <div style={{
                width: "32px", height: "32px", borderRadius: "8px",
                background: "linear-gradient(135deg,#f97316,#fbb774)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: "10px",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,.3)", color: "#fff",
              }}>AZ</div>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "rgba(230,232,235,.7)" }}>AZ-400</div>
                <div style={{ fontSize: "11px", color: "rgba(230,232,235,.5)" }}>Expert 2024</div>
              </div>
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "15px", lineHeight: 1.25, letterSpacing: "-.01em" }}>
              DevOps Engineer Expert
            </div>
          </div>

          {/* Glow blob */}
          <div
            aria-hidden
            style={{
              position: "absolute", top: "100px", right: "80px",
              width: "280px", height: "280px",
              background: "radial-gradient(circle,rgba(59,130,246,.25),transparent 70%)",
              filter: "blur(40px)", zIndex: 0, pointerEvents: "none",
            }}
          />
        </div>
      </div>
    </section>
  );
}
