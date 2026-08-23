import type { Project } from "@/data/projects";
const order: (keyof Project["sections"])[] = ["problem", "context", "architecture", "security", "implementation", "technologies", "decisions", "challenges", "results", "lessonsLearned"];
const labels: Record<keyof Project["sections"], string> = {
  problem: "Problem", context: "Context", architecture: "Architecture", security: "Security",
  implementation: "Implementation", technologies: "Technologies", decisions: "Decisions",
  challenges: "Challenges", results: "Results", lessonsLearned: "Lessons Learned",
};
export function CaseStudyLayout({ project: p }: { project: Project }) {
  return (
    <article>
      <div className="text-xs uppercase tracking-[0.24em] text-ink-mute">{p.domain} · {p.year} · {p.status}</div>
      <h1 className="mt-3 font-display text-display-2">{p.title}</h1>
      <p className="mt-4 text-lead text-ink-dim">{p.tagline}</p>
      <ul className="mt-8 flex flex-wrap gap-1 text-xs">
        {p.stack.map((s) => <li key={s} className="rounded border border-line bg-surface px-2 py-1 text-ink-dim">{s}</li>)}
      </ul>
      <div className="mt-16 space-y-12">
        {order.map((k) => (
          <section key={k}>
            <h2 className="font-display text-h2">{labels[k]}</h2>
            <p className="mt-4 max-w-3xl text-ink-dim">{p.sections[k]}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
