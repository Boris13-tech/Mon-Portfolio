import { Container } from "@/components/layout/Container";
const stats = [
  { k: "3", l: "années d'apprentissage cloud" },
  { k: "3", l: "projets en cours" },
  { k: "7", l: "certifications visées" },
];
export function StatStrip() {
  return (
    <Container className="border-b border-line py-10">
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {stats.map((s) => (
          <li key={s.l}>
            <div className="font-display text-4xl">{s.k}</div>
            <div className="mt-1 text-sm text-ink-mute">{s.l}</div>
          </li>
        ))}
      </ul>
    </Container>
  );
}
