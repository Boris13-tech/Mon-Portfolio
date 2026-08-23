import { site } from "@/data/site";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-[120px] mb-10 mx-auto w-full max-w-[1200px] px-7 py-10 border-t border-line flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] text-ink-mute/70 font-mono">
      <div className="flex gap-6">
        {site.socials.linkedin && (
          <a href={site.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#7cc4ff] transition-colors">
            LinkedIn
          </a>
        )}
        {site.socials.github && (
          <a href={site.socials.github} target="_blank" rel="noreferrer" className="hover:text-[#7cc4ff] transition-colors">
            GitHub
          </a>
        )}
        <a href="https://www.credly.com" target="_blank" rel="noreferrer" className="hover:text-[#7cc4ff] transition-colors">
          Credly
        </a>
      </div>
      <div className="flex items-center gap-4">
        <span>Écrit depuis Lyon, entre deux cafés.</span>
        <Link href="/login" className="text-[10px] uppercase tracking-wider text-ink-mute/40 hover:text-ink-mute transition-colors">Admin</Link>
      </div>
    </footer>
  );
}
