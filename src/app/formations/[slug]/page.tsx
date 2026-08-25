import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { createClient } from "@/utils/supabase/server";
import { FileText, Link as LinkIcon, Video, Code, BookOpen, ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";

export default async function FormationPage({ params }: { params: { slug: string } }) {
  const supabase = await createClient();
  
  // 1. Charger la formation depuis Supabase
  const { data: formation } = await supabase
    .from('formations')
    .select('*')
    .eq('slug', params.slug)
    .eq('status', 'published')
    .single();

  if (!formation) {
    notFound();
  }

  // 2. Charger les ressources liées
  const { data: resources } = await supabase
    .from('formation_resources')
    .select('*')
    .eq('formation_id', formation.id)
    .order('display_order', { ascending: true });

  const getIconForType = (type: string) => {
    switch (type) {
      case 'pdf': return <FileText size={18} className="text-red-400" />;
      case 'video': return <Video size={18} className="text-purple-400" />;
      case 'github': return <Code size={18} className="text-gray-400" />;
      case 'article': return <BookOpen size={18} className="text-green-400" />;
      default: return <LinkIcon size={18} className="text-[#7cc4ff]" />;
    }
  };

  const getLabelForType = (type: string) => {
    switch (type) {
      case 'pdf': return "Document PDF";
      case 'video': return "Vidéo";
      case 'github': return "Code / GitHub";
      case 'article': return "Article";
      default: return "Lien externe";
    }
  };

  return (
    <Container className="py-12 md:py-24">
      <div className="max-w-4xl mx-auto">
        
        {/* Navigation Breadcrumb */}
        <Link href="/formations" className="inline-flex items-center gap-2 text-sm text-ink-mute hover:text-[#7cc4ff] transition-colors mb-12">
          <ArrowLeft size={16} /> Retour au catalogue
        </Link>

        {/* Header de la formation */}
        <div className="flex flex-col gap-6 mb-12">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] tracking-widest uppercase px-3 py-1.5 rounded-full border border-[#7cc4ff]/30 bg-[#7cc4ff]/10 text-[#7cc4ff]">
              Study Guide
            </span>
            <span className="text-sm text-ink-mute flex items-center gap-1.5">
              <Calendar size={14} />
              Mis à jour le {new Date(formation.updated_at).toLocaleDateString('fr-FR')}
            </span>
          </div>
          <PageHeader 
            eyebrow="Formation & Expertise" 
            title={formation.title} 
          />
        </div>

        {/* Image de couverture (optionnelle) */}
        {formation.cover_image_url && (
          <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden mb-12 border border-line bg-surface/30 relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={formation.cover_image_url} 
              alt={formation.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent opacity-60"></div>
          </div>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content (Description + Resources) */}
          <div className="lg:col-span-2">
            
            {formation.description && (
              <div className="prose prose-invert mb-16 text-ink-mute leading-relaxed text-[15px]">
                <p>{formation.description}</p>
              </div>
            )}

            <h2 className="text-2xl font-display font-medium text-ink mb-6 flex items-center gap-3">
              <BookOpen size={24} className="text-[#7cc4ff]" />
              Catalogue de Ressources
            </h2>
            
            <p className="text-ink-mute text-sm mb-8">
              Sélection de liens officiels, d'articles et de documentations techniques pour approfondir ou préparer l'examen.
            </p>

            <div className="flex flex-col gap-4">
              {resources && resources.length > 0 ? (
                resources.map((res) => (
                  <a 
                    key={res.id} 
                    href={res.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex flex-col sm:flex-row sm:items-center gap-4 p-5 bg-surface/5 border border-line rounded-2xl hover:border-[#7cc4ff]/50 hover:bg-surface/10 transition-all"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-12 h-12 rounded-xl bg-black/5 dark:bg-white/5 border border-line flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-[#7cc4ff]/30 transition-transform">
                        {getIconForType(res.resource_type)}
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className="font-medium text-ink text-[15px] group-hover:text-[#7cc4ff] transition-colors">{res.title}</h3>
                        {res.description && (
                          <p className="text-sm text-ink-mute line-clamp-1">{res.description}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="hidden sm:flex shrink-0 px-3 py-1 rounded-md bg-black/5 dark:bg-white/5 border border-line">
                      <span className="text-[10px] font-mono uppercase text-ink-mute tracking-widest">{getLabelForType(res.resource_type)}</span>
                    </div>
                  </a>
                ))
              ) : (
                <div className="panel p-8 rounded-2xl border border-dashed border-line bg-surface/10 text-center">
                  <p className="text-ink-mute text-sm">Le catalogue est en cours de construction. Revenez bientôt !</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar (Info & Author) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 panel p-6 rounded-2xl border border-line bg-surface/5 flex flex-col gap-6">
              <h3 className="text-sm font-mono tracking-widest uppercase text-ink-mute mb-2">À propos de ce guide</h3>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-line">
                    <img src="/boris.jpeg" alt="Boris Ohandja" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-medium text-ink text-sm">Boris Ohandja</div>
                    <div className="text-xs text-ink-mute">Architecte Sécurité & Cloud</div>
                  </div>
                </div>
                <p className="text-[13px] text-ink-mute leading-relaxed border-t border-line pt-4">
                  Je rassemble ici les meilleures ressources (officielles et communautaires) que j'utilise au quotidien pour concevoir, auditer et sécuriser des environnements Microsoft.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Container>
  );
}
