import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";
export function ProjectsGrid({ projects, className }: { projects: Project[]; className?: string }) {
  return (
    <ul className={cn("grid gap-6 md:grid-cols-2 lg:grid-cols-3", className)}>
      {projects.map((p) => (
        <li key={p.slug}>
          <Link href={`/projects/${p.slug}`} className="flex h-full flex-col rounded-lg border border-line bg-surface p-6 transition hover:border-accent-azure/60">
            <div className="text-xs uppercase tracking-widest text-ink-mute">{p.domain} · {p.status}</div>
            <div className="mt-3 font-display text-h3">{p.title}</div>
            <p className="mt-2 text-sm text-ink-dim">{p.tagline}</p>
            <ul className="mt-6 flex flex-wrap gap-1 text-[11px] text-ink-mute">
              {p.stack.slice(0, 6).map((s) => <li key={s} className="rounded border border-line px-2 py-0.5">{s}</li>)}
            </ul>
          </Link>
        </li>
      ))}
    </ul>
  );
}
