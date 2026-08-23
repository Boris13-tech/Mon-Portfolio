import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-line">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col justify-between gap-6 px-6 py-12 md:flex-row md:px-8">
        <div>
          <div className="font-display">{site.name}</div>
          <div className="text-sm text-ink-mute">{site.role}</div>
        </div>
        <div className="flex flex-wrap gap-6 text-sm">
          {site.socials.github   && <a href={site.socials.github}   target="_blank" rel="noreferrer">GitHub</a>}
          {site.socials.linkedin && <a href={site.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
