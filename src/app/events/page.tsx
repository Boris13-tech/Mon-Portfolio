import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import Link from "next/link";

export const metadata = {
  title: "Événements | Boris Ohandja",
  description: "Des rendez-vous cloud, en direct. Conférences en ligne sur Azure, l'IA et Microsoft 365.",
};

export default function EventsPage() {
  return (
    <Container className="py-24">
      {/* Header */}
      <div className="mb-16">
        <h1 className="font-display font-medium text-[44px] leading-[1.1] tracking-tight mb-4 text-gray-900 dark:text-white">
          Des rendez-vous cloud, en direct.
        </h1>
        <p className="text-ink-dim max-w-2xl text-[17px] leading-relaxed">
          J'organise des conférences en ligne autour d'Azure, de l'IA et de Microsoft 365. Gratuit, en français, une session par mois.
        </p>
      </div>

      {/* Hero Event (Next Live) */}
      <div className="w-full relative overflow-hidden rounded-3xl border border-line bg-[#161822] p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center mb-12 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[100px] pointer-events-none rounded-full" />
        
        {/* Left Date Box */}
        <div className="w-full md:w-auto shrink-0 bg-black/40 rounded-2xl p-6 flex flex-col items-center justify-center border border-white/5 relative z-10">
          <div className="text-red-400 font-mono text-[11px] font-bold tracking-widest uppercase mb-3">PROCHAIN LIVE</div>
          <div className="font-display font-medium text-6xl text-white mb-1">28</div>
          <div className="font-mono text-[11px] text-white/60 tracking-widest uppercase mb-4">SEPT. 2026</div>
          <div className="text-white/40 font-mono text-[11px]">19h00 CET</div>
        </div>

        {/* Middle Content */}
        <div className="flex-1 relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-red-500/10 text-red-400 border border-red-500/20 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" /> LIVE
            </span>
            <span className="bg-white/5 border border-white/10 text-white/70 text-[11px] px-2.5 py-1 rounded-md">Azure AI</span>
            <span className="bg-white/5 border border-white/10 text-white/70 text-[11px] px-2.5 py-1 rounded-md">Copilot</span>
          </div>
          
          <h2 className="text-3xl md:text-[32px] font-display text-white mb-4 leading-[1.2]">
            Construire son propre Copilot avec Azure AI Foundry
          </h2>
          
          <p className="text-white/60 text-[15px] leading-relaxed max-w-2xl">
            Une session de 60 minutes pour comprendre l'architecture d'un agent RAG en production, avec Azure AI Search et OpenAI Service. Démo live incluse.
          </p>
        </div>

        {/* Right CTA */}
        <div className="w-full md:w-auto shrink-0 flex flex-col items-center md:items-end gap-3 relative z-10">
          <button className="w-full md:w-auto bg-white hover:bg-gray-100 text-black px-6 py-3.5 rounded-xl font-semibold transition-colors shadow-[0_0_20px_rgba(255,255,255,0.15)]">
            Réserver ma place
          </button>
          <div className="text-white/40 text-[11px] font-mono">
            247 inscrits · Gratuit
          </div>
        </div>
      </div>

      {/* Grid of Upcoming Events */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {/* Card 1 */}
        <div className="bg-[#12141c] border border-white/5 rounded-2xl p-6 hover:bg-[#161822] transition-colors group cursor-pointer flex flex-col h-full">
          <div className="flex justify-between items-center mb-4">
            <div className="text-[#7cc4ff] font-mono text-[11px] tracking-wider">15 OCT. 2026 · 19h</div>
            <div className="text-white/30 font-mono text-[11px]">#02</div>
          </div>
          <h3 className="text-xl font-display text-white mb-3 leading-snug group-hover:text-[#7cc4ff] transition-colors">
            Landing zones Azure : les 5 erreurs qui coûtent cher
          </h3>
          <p className="text-white/50 text-[13px] leading-relaxed mb-6 flex-1">
            Retour d'expérience sur trois déploiements grands comptes.
          </p>
          <div className="flex gap-2 mt-auto">
            <span className="bg-white/5 border border-white/10 text-white/50 text-[10px] px-2.5 py-1 rounded-md">Azure</span>
            <span className="bg-white/5 border border-white/10 text-white/50 text-[10px] px-2.5 py-1 rounded-md">Gouvernance</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#12141c] border border-white/5 rounded-2xl p-6 hover:bg-[#161822] transition-colors group cursor-pointer flex flex-col h-full">
          <div className="flex justify-between items-center mb-4">
            <div className="text-[#7cc4ff] font-mono text-[11px] tracking-wider">12 NOV. 2026 · 19h</div>
            <div className="text-white/30 font-mono text-[11px]">#03</div>
          </div>
          <h3 className="text-xl font-display text-white mb-3 leading-snug group-hover:text-[#7cc4ff] transition-colors">
            Microsoft 365 & Zero Trust : par où commencer ?
          </h3>
          <p className="text-white/50 text-[13px] leading-relaxed mb-6 flex-1">
            Conditional Access, Entra ID, Defender for M365. Un plan d'action réaliste, sans jargon.
          </p>
          <div className="flex gap-2 mt-auto">
            <span className="bg-white/5 border border-white/10 text-white/50 text-[10px] px-2.5 py-1 rounded-md">M365</span>
            <span className="bg-white/5 border border-white/10 text-white/50 text-[10px] px-2.5 py-1 rounded-md">Sécurité</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#12141c] border border-white/5 rounded-2xl p-6 hover:bg-[#161822] transition-colors group cursor-pointer flex flex-col h-full">
          <div className="flex justify-between items-center mb-4">
            <div className="text-[#7cc4ff] font-mono text-[11px] tracking-wider">10 DÉC. 2026 · 19h</div>
            <div className="text-white/30 font-mono text-[11px]">#04</div>
          </div>
          <h3 className="text-xl font-display text-white mb-3 leading-snug group-hover:text-[#7cc4ff] transition-colors">
            Terraform sur Azure en 2027 : ce qui change
          </h3>
          <p className="text-white/50 text-[13px] leading-relaxed mb-6 flex-1">
            AzAPI, Stacks, providers officiels. Le point à un mois de fin d'année.
          </p>
          <div className="flex gap-2 mt-auto">
            <span className="bg-white/5 border border-white/10 text-white/50 text-[10px] px-2.5 py-1 rounded-md">IaC</span>
            <span className="bg-white/5 border border-white/10 text-white/50 text-[10px] px-2.5 py-1 rounded-md">DevOps</span>
          </div>
        </div>
      </div>

      {/* Past Sessions */}
      <div className="border-t border-line/50 pt-8 flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="font-mono text-[11px] tracking-widest text-ink-mute uppercase mr-4">Sessions passées</div>
          <Link href="/events/01" className="bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-line text-ink-dim text-[12px] px-3 py-1.5 rounded-lg transition-colors font-mono">
            #01 · AKS Networking déchiffré
          </Link>
          <Link href="/events/00" className="bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-line text-ink-dim text-[12px] px-3 py-1.5 rounded-lg transition-colors font-mono">
            #00 · Kick-off · Retour d'expérience
          </Link>
        </div>
        <Link href="/speaking" className="text-[13px] text-[#7cc4ff] hover:underline whitespace-nowrap">
          Voir les replays →
        </Link>
      </div>

    </Container>
  );
}
