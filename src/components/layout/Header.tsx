"use client";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { MobileSheet } from "@/components/navigation/MobileSheet";
import { SearchWidget } from "@/components/layout/SearchWidget";

export function Header() {
  return (
    <>
    <header className="sticky top-5 z-40 px-5 mb-10 w-full max-w-[1280px] mx-auto hidden md:flex items-center justify-between gap-3 flex-wrap">
      <div className="flex items-center gap-2.5 flex-wrap">
        {/* Logo Capsule */}
        <Link 
          href="/" 
          className="flex items-center gap-3 py-1.5 pr-4 pl-1.5 rounded-full border border-line bg-bg/85 backdrop-blur shadow-xl transition-transform hover:scale-105"
        >
          <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-gray-900 dark:text-white font-mono font-bold text-base shadow-[0_6px_16px_rgba(59,130,246,0.4),inset_0_1px_0_rgba(255,255,255,0.3)]">
            B
          </span>
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-[15px] tracking-tight">boris.azure</span>
            <span className="text-[11px] text-ink-mute font-mono">Par Boris Ohandja</span>
          </div>
        </Link>

        {/* Main Nav Pill */}
        <nav className="relative flex-none flex items-center gap-0.5 p-1.5 rounded-full border border-line bg-bg/85 backdrop-blur shadow-xl text-sm">
          {/* Explorer Mega Menu */}
          <div className="group relative">
            <Link href="/projects" className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-ink-dim border border-transparent hover:bg-surface/50 transition-colors">
              Explorer <span className="text-[9px] opacity-60">▼</span>
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
              <div className="w-[780px] p-6 bg-white/98 dark:bg-white dark:bg-[#0e1116]/98 backdrop-blur-xl border border-line/50 rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)] group-hover:-translate-y-1 transition-transform duration-200 grid grid-cols-3 gap-6">
              
              {/* Azure Cloud */}
              <div>
                <div className="font-mono text-[10px] text-[#7cc4ff] tracking-widest uppercase mb-2.5 px-3">Azure Cloud</div>
                <div className="flex flex-col gap-1">
                  {[{label:"Fondamentaux Azure (AZ-900)", href:"/formations/az-900"}, {label:"Administrateur Azure (AZ-104)", href:"/formations/az-104"}, {label:"Architecte Solutions (AZ-305)", href:"/formations/az-305"}, {label:"DevOps Engineer (AZ-400)", href:"/formations/az-400"}, {label:"Azure Networking (AZ-700)", href:"/formations/az-700"}, {label:"Azure Virtual Desktop (AZ-140)", href:"/formations/az-140"}, {label:"Landing Zones et FinOps", href:"/formations/landing-zones"}].map((link) => (
                    <Link key={link.label} href={link.href} className="px-3 py-2 rounded-lg text-[13px] text-ink-dim hover:bg-black/5 dark:bg-white/5 hover:text-[#7cc4ff] transition-colors block">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Intelligence Artificielle */}
              <div>
                <div className="font-mono text-[10px] text-[#c4a4ff] tracking-widest uppercase mb-2.5 px-3">Intelligence Artificielle</div>
                <div className="flex flex-col gap-1">
                  {[{label:"AI Fundamentals (AI-900)", href:"/formations/ai-900"}, {label:"AI Engineer (AI-103)", href:"/formations/AI-103"}, {label:"Azure OpenAI et GPT", href:"/formations/azure-openai"}, {label:"Copilot Studio", href:"/formations/copilot-studio"}, {label:"Machine Learning (DP-100)", href:"/formations/dp-100"}, {label:"Data Engineer (DP-203)", href:"/formations/dp-203"}, {label:"Sécuriser l'IA générative", href:"/formations/secu-ia"}].map((link) => (
                    <Link key={link.label} href={link.href} className="px-3 py-2 rounded-lg text-[13px] text-ink-dim hover:bg-black/5 dark:bg-white/5 hover:text-[#c4a4ff] transition-colors block">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Microsoft 365 */}
              <div>
                <div className="font-mono text-[10px] text-[#fbb774] tracking-widest uppercase mb-2.5 px-3">Microsoft 365</div>
                <div className="flex flex-col gap-1">
                  {[{label:"M365 Fundamentals (MS-900)", href:"/formations/ms-900"}, {label:"Enterprise Admin (MS-102)", href:"/formations/ms-102"}, {label:"Teams Administrator (MS-700)", href:"/formations/ms-700"}, {label:"Endpoint Admin (MD-102)", href:"/formations/md-102"}, {label:"Copilot pour M365", href:"/formations/copilot-m365"}, {label:"Sécurité (SC-100 / SC-300)", href:"/formations/sc-100-300"}, {label:"Purview et Compliance", href:"/formations/purview"}].map((link) => (
                    <Link key={link.label} href={link.href} className="px-3 py-2 rounded-lg text-[13px] text-ink-dim hover:bg-black/5 dark:bg-white/5 hover:text-[#fbb774] transition-colors block">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Footer Mega Menu */}
              <div className="col-span-3 flex justify-between items-center pt-3.5 border-t border-black/5 dark:border-white/5 mt-0.5">
                <span className="font-mono text-[11px] text-ink-mute">{"// formations métiers & outils pour maîtriser l'écosystème Microsoft"}</span>
                <Link href="/projects" className="font-mono text-[12px] text-[#7cc4ff] px-3 py-1.5 border border-[#7cc4ff]/25 rounded-md hover:bg-[#7cc4ff]/10 transition-colors">
                  Tout explorer →
                </Link>
              </div>
            </div>
            </div>
          </div>

          <Link href="/projects" className="px-3.5 py-2 rounded-full text-ink-dim hover:bg-black/5 dark:bg-white/5 transition-colors text-[13px]">Outils</Link>
          <Link href="/events" className="px-3.5 py-2 rounded-full text-ink-dim hover:bg-black/5 dark:bg-white/5 transition-colors text-[13px]">Événements</Link>
          <Link href="/speaking" className="px-3.5 py-2 rounded-full text-ink-dim hover:bg-black/5 dark:bg-white/5 transition-colors text-[13px]">Speaking</Link>

          {/* Communauté Dropdown */}
          <div className="group relative">
            <Link href="/community" className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-ink-dim hover:bg-black/5 dark:bg-white/5 transition-colors text-[13px]">
              Communauté <span className="text-[9px] opacity-60">▼</span>
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
              <div className="w-[240px] p-3.5 bg-white/98 dark:bg-white dark:bg-[#0e1116]/98 backdrop-blur-xl border border-line/50 rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)] group-hover:-translate-y-1 transition-transform duration-200 flex flex-col gap-0.5">
                <Link href="/community" className="px-4 py-3 rounded-xl font-semibold text-[15px] hover:bg-black/5 dark:bg-white/5 transition-colors">Le hub</Link>
                <Link href="/community" className="px-4 py-3 rounded-xl font-semibold text-[15px] hover:bg-black/5 dark:bg-white/5 transition-colors">Discord</Link>
                <Link href="/community" className="px-4 py-3 rounded-xl font-semibold text-[15px] hover:bg-black/5 dark:bg-white/5 transition-colors">Newsletter</Link>
              </div>
            </div>
          </div>

          {/* À propos Dropdown */}
          <div className="group relative">
            <Link href="/about" className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-ink-dim hover:bg-black/5 dark:bg-white/5 transition-colors text-[13px]">
              À propos <span className="text-[9px] opacity-60">▼</span>
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
              <div className="w-[240px] p-3.5 bg-white/98 dark:bg-white dark:bg-[#0e1116]/98 backdrop-blur-xl border border-line/50 rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)] group-hover:-translate-y-1 transition-transform duration-200 flex flex-col gap-0.5">
                <Link href="/about" className="px-4 py-3 rounded-xl font-semibold text-[15px] hover:bg-black/5 dark:bg-white/5 transition-colors">Le profil</Link>
                <Link href="/certifications" className="px-4 py-3 rounded-xl font-semibold text-[15px] hover:bg-black/5 dark:bg-white/5 transition-colors">Certifications</Link>
                <Link href="/contact" className="px-4 py-3 rounded-xl font-semibold text-[15px] hover:bg-black/5 dark:bg-white/5 transition-colors">Contact</Link>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="flex items-center gap-2.5 flex-wrap">
        <SearchWidget />
        <ThemeToggle />
        <Link href="/login" className="px-4 py-1.5 bg-ink text-bg text-[13px] font-semibold rounded-full hover:opacity-90 transition-opacity ml-1 shadow-sm">
          Connexion
        </Link>
      </div>
    </header>
    
    {/* Mobile Header */}
    <header className="sticky top-0 z-40 px-5 py-4 w-full flex md:hidden items-center justify-between border-b border-line bg-bg/85 backdrop-blur shadow-sm">
      <Link href="/" className="font-bold text-[15px] tracking-tight">boris.azure</Link>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <MobileSheet />
      </div>
    </header>
    </>
  );
}
