import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import Link from "next/link";
import { BookOpen, Clock, ChevronRight } from "lucide-react";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { signout } from "@/app/login/actions";

async function PortalContent() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const email = user.email || "Abonné(e)";

  const recentReads = [
    { title: "Landing Zones et FinOps", category: "Azure Cloud", date: "Il y a 2 jours", url: "/formations/landing-zones" },
    { title: "AI Fundamentals (AI-900)", category: "Intelligence Artificielle", date: "La semaine dernière", url: "/formations/ai-900" },
    { title: "Sécurité (SC-100 / SC-300)", category: "Microsoft 365", date: "Il y a 2 semaines", url: "/formations/sc-100-300" }
  ];

  return (
    <Container className="py-24">
      <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
        <PageHeader eyebrow="Espace Membre" title={`Bonjour, ${email.split('@')[0]}`} />
        <form action={signout}>
          <button className="bg-black/5 dark:bg-white/5 border border-line hover:bg-black/10 dark:hover:bg-white/10 px-4 py-2 rounded-lg text-sm text-ink-mute transition-colors">
            Se déconnecter
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sidebar / Profil */}
        <div className="md:col-span-1 flex flex-col gap-4">
          <div className="panel p-6 rounded-2xl border border-line bg-surface/30">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#7cc4ff] to-[#c4a4ff] flex items-center justify-center text-white font-bold text-xl mb-4">
              {email.charAt(0).toUpperCase()}
            </div>
            <h3 className="text-ink font-medium truncate">{email}</h3>
            <p className="text-xs text-ink-mute mt-1">Membre authentifié</p>
            
            <div className="mt-6 pt-6 border-t border-line">
              <div className="flex items-center gap-3 text-sm text-ink-dim hover:text-[#7cc4ff] cursor-pointer transition-colors mb-3">
                <BookOpen size={16} /> Mon historique
              </div>
              <div className="flex items-center gap-3 text-sm text-ink-mute hover:text-ink transition-colors">
                Gérer mon abonnement
              </div>
            </div>
          </div>
        </div>

        {/* Dernières Lectures */}
        <div className="md:col-span-2">
          <div className="panel p-6 rounded-2xl border border-line bg-surface/10">
            <h2 className="text-xl font-display text-ink mb-6 flex items-center gap-2">
              <Clock size={20} className="text-[#7cc4ff]" /> Vos dernières lectures
            </h2>
            
            <div className="flex flex-col gap-3">
              {recentReads.map((read, index) => (
                <Link 
                  key={index} 
                  href={read.url}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-line rounded-xl hover:border-[#7cc4ff]/50 bg-black/5 dark:bg-white/5 transition-all"
                >
                  <div>
                    <div className="text-[11px] font-mono text-[#7cc4ff] mb-1 uppercase tracking-wider">{read.category}</div>
                    <div className="font-medium text-ink group-hover:text-[#7cc4ff] transition-colors">{read.title}</div>
                  </div>
                  <div className="flex items-center gap-4 mt-3 sm:mt-0">
                    <span className="text-xs text-ink-mute">{read.date}</span>
                    <ChevronRight size={16} className="text-ink-mute group-hover:text-[#7cc4ff] transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <button className="text-sm text-[#7cc4ff] hover:underline">Voir tout l'historique</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default function PortalPage() {
  return <PortalContent />;
}
