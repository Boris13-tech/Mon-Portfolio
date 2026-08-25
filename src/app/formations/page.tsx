import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export default async function FormationsIndexPage() {
  const supabase = await createClient();
  const { data: formations } = await supabase
    .from('formations')
    .select('*')
    .eq('status', 'published')
    .order('created_at', { ascending: false });

  return (
    <Container className="py-24">
      <PageHeader 
        eyebrow="Apprentissage" 
        title="Formations & Study Guides" 
        sub="Mes guides d'étude complets et catalogues de ressources pour maîtriser l'écosystème Microsoft Cloud, Azure et la Sécurité Zero Trust."
      />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {formations && formations.length > 0 ? (
          formations.map((f) => (
            <Link 
              key={f.id} 
              href={`/formations/${f.slug}`}
              className="group panel flex flex-col h-full rounded-2xl border border-line bg-surface/5 hover:bg-surface/20 hover:border-[#7cc4ff]/30 transition-all overflow-hidden"
            >
              {f.cover_image_url ? (
                <div className="w-full aspect-[2/1] overflow-hidden border-b border-line">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={f.cover_image_url} alt={f.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              ) : (
                <div className="w-full aspect-[2/1] bg-black/5 dark:bg-white/5 border-b border-line flex items-center justify-center">
                  <BookOpen size={32} className="text-ink-mute opacity-50" />
                </div>
              )}
              
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-xl font-display font-medium text-ink mb-2 group-hover:text-[#7cc4ff] transition-colors">{f.title}</h2>
                {f.description && (
                  <p className="text-sm text-ink-mute line-clamp-2 mb-6 flex-1">
                    {f.description}
                  </p>
                )}
                
                <div className="mt-auto flex items-center justify-between text-[#7cc4ff]">
                  <span className="text-xs font-mono uppercase tracking-widest">Explorer le guide</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full py-20 text-center text-ink-mute border border-dashed border-line rounded-2xl">
            Les premiers guides d'étude arrivent très bientôt.
          </div>
        )}
      </div>
    </Container>
  );
}
