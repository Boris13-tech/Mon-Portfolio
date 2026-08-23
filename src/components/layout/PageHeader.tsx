export function PageHeader({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <header>
      {eyebrow && <div className="text-xs uppercase tracking-[0.2em] text-ink-mute">{eyebrow}</div>}
      <h1 className="mt-3 font-display text-h1 md:text-display-2">{title}</h1>
      {sub && <p className="mt-4 max-w-2xl text-lead text-ink-dim">{sub}</p>}
    </header>
  );
}
