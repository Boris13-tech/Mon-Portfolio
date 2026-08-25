import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Users, ShieldCheck, Award, Zap, ExternalLink, MessageSquareText } from "lucide-react";

export const metadata: Metadata = { 
  title: "Communauté boris.azure", 
  description: "Rejoignez la communauté boris.azure sur Discord. Entraide, veille cybersécurité, Microsoft Azure et préparation aux certifications." 
};

export default function CommunityPage() {
  return (
    <Container className="py-24">
      <PageHeader 
        eyebrow="Communauté" 
        title="boris.azure" 
        sub="L'espace d'échange francophone dédié à l'architecture Cloud Microsoft, la cybersécurité et l'écosystème Zero Trust." 
      />
      
      <div className="mt-16 max-w-4xl mx-auto">
        
        {/* Discord Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface/30 p-8 md:p-12 text-center flex flex-col items-center gap-6">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#5865F2]/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10 w-20 h-20 bg-[#5865F2] rounded-2xl flex items-center justify-center shadow-lg shadow-[#5865F2]/25 mb-2">
            <svg viewBox="0 0 127.14 96.36" fill="white" className="w-12 h-12">
              <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.1,46,96,53,91,65.69,84.69,65.69Z"/>
            </svg>
          </div>
          
          <h2 className="relative z-10 text-3xl md:text-4xl font-display font-medium text-ink">Rejoignez le serveur Discord</h2>
          <p className="relative z-10 max-w-xl text-ink-mute text-[15px] leading-relaxed">
            Un espace privé dédié aux passionnés et professionnels du Cloud Microsoft. Discutons d'architecture, partageons nos bonnes pratiques de sécurité, et préparons nos certifications ensemble.
          </p>

          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative z-10 mt-4 flex items-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 py-3.5 rounded-xl font-medium transition-all shadow-lg shadow-[#5865F2]/25 hover:scale-105"
          >
            <MessageSquareText size={18} />
            Rejoindre boris.azure
            <ExternalLink size={16} className="ml-2 opacity-70" />
          </a>
          <p className="relative z-10 text-xs text-ink-mute mt-[-10px] italic">Le lien d'invitation arrive très bientôt !</p>
        </div>

        {/* Feature Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="panel p-6 rounded-2xl border border-line bg-surface/5 flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#7cc4ff]/10 flex items-center justify-center border border-[#7cc4ff]/20">
              <ShieldCheck size={20} className="text-[#7cc4ff]" />
            </div>
            <h3 className="text-lg font-medium font-display text-ink">Veille Cybersécurité</h3>
            <p className="text-sm text-ink-mute leading-relaxed">
              Discussions autour du modèle Zero Trust, Microsoft Defender, Sentinel et Entra ID. Restez à jour sur les dernières menaces et solutions.
            </p>
          </div>

          <div className="panel p-6 rounded-2xl border border-line bg-surface/5 flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
              <Award size={20} className="text-purple-400" />
            </div>
            <h3 className="text-lg font-medium font-display text-ink">Entraide Certifications</h3>
            <p className="text-sm text-ink-mute leading-relaxed">
              Des salons dédiés (AZ-900, AZ-104, SC-200...) pour poser vos questions, partager des fiches de révision et célébrer vos réussites.
            </p>
          </div>

          <div className="panel p-6 rounded-2xl border border-line bg-surface/5 flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center border border-green-500/20">
              <Zap size={20} className="text-green-400" />
            </div>
            <h3 className="text-lg font-medium font-display text-ink">Projets & Outils (IaC)</h3>
            <p className="text-sm text-ink-mute leading-relaxed">
              Échangez sur vos déploiements Terraform, Bicep, et vos pipelines CI/CD. Partagez des bouts de code et optimisez vos architectures.
            </p>
          </div>

          <div className="panel p-6 rounded-2xl border border-line bg-surface/5 flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
              <Users size={20} className="text-orange-400" />
            </div>
            <h3 className="text-lg font-medium font-display text-ink">Networking Premium</h3>
            <p className="text-sm text-ink-mute leading-relaxed">
              Connectez-vous avec d'autres administrateurs système, ingénieurs cloud et architectes pour développer votre réseau professionnel.
            </p>
          </div>
        </div>

      </div>
    </Container>
  );
}
