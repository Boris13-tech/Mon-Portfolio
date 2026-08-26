import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";
import { createClient } from "@/utils/supabase/server";

export const metadata: Metadata = { 
  title: "Projets & Missions", 
  description: "Cas clients, déploiements d'architectures Azure et implémentations Zero Trust." 
};

export default async function ProjectsPage() {
  const supabase = await createClient();
  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .eq("status", "published")
    .order("created_at", { ascending: false });

  return (
    <Container className="py-24">
      <PageHeader 
        eyebrow="Portfolio" 
        title="Projets & Missions" 
        sub="Une sélection de mes cas clients, déploiements d'architectures Cloud Azure et implémentations de stratégies Zero Trust."
      />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects?.map((p) => (
          <Link key={p.id} href={\`/projects/\${p.slug}\`} className="group">
            <div className="h-full panel border border-line rounded-2xl overflow-hidden bg-surface/10 hover:bg-surface/30 transition-colors flex flex-col">
              
              {/* Cover Image */}
              {p.cover_image_url ? (
                <div className="w-full aspect-video overflow-hidden border-b border-line">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={p.cover_image_url} 
                    alt={p.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="w-full aspect-video bg-surface/30 border-b border-line flex items-center justify-center">
                  <Briefcase size={40} className="text-ink-mute/30" />
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[#7cc4ff]">
                    {p.client || "Personnel"}
                  </span>
                  <span className="text-xs text-ink-mute">
                    {p.date}
                  </span>
                </div>

                <h2 className="text-xl font-display font-medium text-ink mb-2 group-hover:text-[#7cc4ff] transition-colors">
                  {p.title}
                </h2>
                
                {p.tags && p.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tags.slice(0, 3).map((tag: string) => (
                      <span key={tag} className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-md bg-surface/30 border border-line text-ink-mute">
                        {tag}
                      </span>
                    ))}
                    {p.tags.length > 3 && (
                      <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-md bg-surface/30 border border-line text-ink-mute">
                        +{p.tags.length - 3}
                      </span>
                    )}
                  </div>
                )}

                {p.description && (
                  <p className="text-sm text-ink-mute line-clamp-3 mb-6 flex-1 leading-relaxed">
                    {p.description}
                  </p>
                )}
                
                <div className="mt-auto flex items-center justify-between text-[#7cc4ff] pt-4 border-t border-line">
                  <span className="text-xs font-mono uppercase tracking-widest">Lire l'étude de cas</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        ))}

        {(!projects || projects.length === 0) && (
          <div className="col-span-full panel p-12 border border-dashed border-line rounded-2xl bg-surface/5 text-center flex flex-col items-center justify-center">
            <Briefcase size={32} className="text-ink-mute mb-4 opacity-50" />
            <h3 className="text-lg font-display text-ink mb-2">Les projets arrivent bientôt</h3>
            <p className="text-sm text-ink-mute">
              Le portfolio est en cours de mise à jour. Revenez bientôt pour découvrir de nouvelles études de cas.
            </p>
          </div>
        )}
      </div>
    </Container>
  );
}
