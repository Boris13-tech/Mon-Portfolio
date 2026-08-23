"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { primaryNav } from "@/data/nav";
export function MobileSheet() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button aria-label="Open menu" className="rounded-md border border-line bg-surface p-2 md:hidden" onClick={() => setOpen(true)}><Menu size={16} /></button>
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-bg p-6 md:hidden">
          <div className="flex justify-end"><button aria-label="Close menu" onClick={() => setOpen(false)}><X /></button></div>
          <nav className="mt-12 flex flex-col gap-6 text-2xl font-display" aria-label="Primary mobile">
            {primaryNav.map((i) => (
              <Link key={i.href} href={i.href} onClick={() => setOpen(false)}>{i.label}</Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
            
            <div className="h-px bg-line/50 my-2" />
            <Link href="/login" onClick={() => setOpen(false)} className="text-[#7cc4ff]">Connexion</Link>
          </nav>
        </div>
      )}
    </>
  );
}
