import { Container } from "@/components/layout/Container";

const stats = [
  { k: "3 ans",      l: "d'expérience cloud & sécurité" },
  { k: "7",          l: "certifications Microsoft" },
  { k: "3",          l: "architectures phares publiées" },
  { k: "Zero Trust", l: "approche par défaut" },
];

export function StatStrip() {
  return (
    <Container className="py-6">
      <div
        className="panel"
        style={{
          padding: "28px 32px",
          background: "linear-gradient(160deg,rgba(255,255,255,.04),rgba(255,255,255,.01))",
          border: "1px solid rgba(255,255,255,.08)",
          borderRadius: "16px",
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "32px",
          boxShadow: "0 20px 50px rgba(0,0,0,.3),inset 0 1px 0 rgba(255,255,255,.06)",
        }}
      >
        {stats.map((s) => (
          <div key={s.l}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "36px", fontWeight: 500, letterSpacing: "-.02em", color: s.k === "3 ans" ? "#7cc4ff" : "inherit" }}>
              {s.k}
            </div>
            <div style={{ fontSize: "12px", color: "rgba(230,232,235,.55)", marginTop: "4px" }}>{s.l}</div>
          </div>
        ))}
      </div>
    </Container>
  );
}

