"use client";
import Link from "next/link";
import { primaryNav } from "@/data/nav";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { MobileSheet } from "@/components/navigation/MobileSheet";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/70 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-6 md:px-8">
        <Link href="/" className="font-display text-lg tracking-tight">Boris Ohandja</Link>
        <nav className="hidden gap-8 md:flex" aria-label="Primary">
          {primaryNav.map((i) => (
            <Link key={i.href} href={i.href} className="text-sm text-ink-dim transition hover:text-ink">{i.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden rounded-md border border-line bg-surface px-3 py-1.5 text-sm md:inline-block">Contact</Link>
          <ThemeToggle />
          <MobileSheet />
        </div>
      </div>
    </header>
  );
}
