import { PageHeader } from "@/components/layout/PageHeader";
import { updateFormation, createFormationResource, deleteFormationResource } from "../actions";
import Link from "next/link";
import { ArrowLeft, Plus, FileText, Link as LinkIcon, Video, Code, BookOpen, Trash2 } from "lucide-react";
import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";

export default async function EditFormationPage({ params }: { params: { slug: string } }) {
  const supabase = await createClient();
  
  // 1. Charger la formation
  const { data: formation } = await supabase.from('formations').select('*').eq('slug', params.slug).single();
  if (!formation) notFound();

  // 2. Charger les ressources de cette formation
  const { data: resources } = await supabase.from('formation_resources').select('*').eq('formation_id', formation.id).order('display_order', { ascending: true });

  const getIconForType = (type: string) => {
    switch (type) {
      case 'pdf': return <FileText size={16} className="text-red-400" />;
      case 'video': return <Video size={16} className="text-purple-400" />;
      case 'github': return <Code size={16} className="text-gray-400" />;
      case 'article': return <BookOpen size={16} className="text-green-400" />;
      default: return <LinkIcon size={16} className="text-[#7cc4ff]" />;
    }
  };

  return (
    <div className="flex flex-col gap-12 max-w-3xl">
      
      {/* SECTION 1: MODIFIER LA FORMATION */}
      <section className="flex flex-col gap-6">
        <div>
          <Link href="/admin/formations" className="text-ink-mute hover:text-ink text-sm flex items-center gap-2 mb-4 transition-colors">
            <ArrowLeft size={14} /> Retour aux formations
          </Link>
          <PageHeader eyebrow="Administration" title={`Modifier: ${formation.title}`} />
        </div>

        <form action={updateFormation} className="panel p-6 rounded-2xl flex flex-col gap-6 bg-surface/10 border border-line">
          <input type="hidden" name="id" value={formation.id} />
          
          <div className="grid grid-cols-1 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="text-sm font-medium text-ink">Titre de la formation</label>
              <input required type="text" id="title" name="title" defaultValue={formation.title} className="bg-bg border border-line rounded-lg px-4 py-2 text-ink text-sm focus:outline-none focus:border-[#7cc4ff] transition-colors" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="slug" className="text-sm font-medium text-ink">Slug (URL)</label>
              <input required type="text" id="slug" name="slug" defaultValue={formation.slug} className="bg-bg border border-line rounded-lg px-4 py-2 text-ink text-sm focus:outline-none focus:border-[#7cc4ff] transition-colors" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="description" className="text-sm font-medium text-ink">Description</label>
              <textarea id="description" name="description" defaultValue={formation.description} rows={4} className="bg-bg border border-line rounded-lg px-4 py-2 text-ink text-sm focus:outline-none focus:border-[#7cc4ff] transition-colors" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="tags" className="text-sm font-medium text-ink">Tags (séparés par des virgules)</label>
              <input type="text" id="tags" name="tags" defaultValue={(formation.tags || []).join(", ")} className="bg-bg border border-line rounded-lg px-4 py-2 text-ink text-sm focus:outline-none focus:border-[#7cc4ff] transition-colors" placeholder="Azure, Sécurité, Zero Trust" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="prerequisites" className="text-sm font-medium text-ink">Prérequis</label>
                <textarea id="prerequisites" name="prerequisites" defaultValue={formation.prerequisites} rows={3} className="bg-bg border border-line rounded-lg px-4 py-2 text-ink text-sm focus:outline-none focus:border-[#7cc4ff] transition-colors" placeholder="Ce qu'il faut savoir avant..." />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="objectives" className="text-sm font-medium text-ink">Objectifs</label>
                <textarea id="objectives" name="objectives" defaultValue={formation.objectives} rows={3} className="bg-bg border border-line rounded-lg px-4 py-2 text-ink text-sm focus:outline-none focus:border-[#7cc4ff] transition-colors" placeholder="Ce qu'on va apprendre..." />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="cover_image_url" className="text-sm font-medium text-ink">Image de couverture (URL)</label>
              <input type="text" id="cover_image_url" name="cover_image_url" defaultValue={formation.cover_image_url} className="bg-bg border border-line rounded-lg px-4 py-2 text-ink text-sm focus:outline-none focus:border-[#7cc4ff] transition-colors" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="status" className="text-sm font-medium text-ink">Statut</label>
              <select id="status" name="status" defaultValue={formation.status} className="bg-bg border border-line rounded-lg px-4 py-2 text-ink text-sm focus:outline-none focus:border-[#7cc4ff] transition-colors">
                <option value="draft">Brouillon</option>
                <option value="published">Publié</option>
                <option value="archived">Archivé</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-4 pt-4 border-t border-line">
            <button type="submit" className="bg-[#7cc4ff] text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#7cc4ff]/90 transition-colors">
              Mettre à jour
            </button>
          </div>
        </form>
      </section>

      {/* SECTION 2: GESTION DES RESSOURCES */}
      <section className="flex flex-col gap-6">
        <div className="flex justify-between items-end border-b border-line pb-4">
          <div>
            <h2 className="text-xl font-display font-medium text-ink">Catalogue de Ressources</h2>
            <p className="text-sm text-ink-mute mt-1">Gérez les liens, PDF, et articles liés à cette formation.</p>
          </div>
        </div>

        {/* AJOUTER UNE RESSOURCE (ACCORDION) */}
        <details className="group bg-surface/10 border border-line rounded-2xl overflow-hidden mb-4">
          <summary className="flex items-center gap-2 p-4 cursor-pointer font-medium text-ink hover:bg-black/5 dark:hover:bg-white/5 transition-colors list-none">
            <Plus size={16} className="text-[#7cc4ff]" /> Ajouter une nouvelle ressource
          </summary>
          <div className="p-6 border-t border-line bg-surface/5">
            <form action={createFormationResource} className="flex flex-col gap-4">
              <input type="hidden" name="formation_id" value={formation.id} />
              <input type="hidden" name="formation_slug" value={formation.slug} />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="res_title" className="text-sm text-ink">Titre de la ressource</label>
                  <input required type="text" id="res_title" name="title" className="bg-bg border border-line rounded-lg px-3 py-2 text-sm text-ink" placeholder="Ex: Guide AZ-900 Officiel" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="resource_type" className="text-sm text-ink">Type</label>
                  <select id="resource_type" name="resource_type" className="bg-bg border border-line rounded-lg px-3 py-2 text-sm text-ink">
                    <option value="link">Lien / URL</option>
                    <option value="pdf">Document PDF</option>
                    <option value="video">Vidéo</option>
                    <option value="article">Article de blog</option>
                    <option value="github">Dépôt GitHub</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label htmlFor="url" className="text-sm text-ink">URL / Lien vers la ressource</label>
                  <input required type="url" id="url" name="url" className="bg-bg border border-line rounded-lg px-3 py-2 text-sm text-ink" placeholder="https://..." />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label htmlFor="res_desc" className="text-sm text-ink">Description courte (optionnel)</label>
                  <input type="text" id="res_desc" name="description" className="bg-bg border border-line rounded-lg px-3 py-2 text-sm text-ink" placeholder="Informations complémentaires..." />
                </div>
              </div>
              <div className="flex justify-end mt-2">
                <button type="submit" className="bg-ink text-bg px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90">
                  Enregistrer la ressource
                </button>
              </div>
            </form>
          </div>
        </details>

        {/* LISTE DES RESSOURCES */}
        <div className="flex flex-col gap-3">
          {resources && resources.length > 0 ? (
            resources.map((res) => (
              <div key={res.id} className="flex items-center justify-between p-4 bg-surface/5 border border-line rounded-xl hover:border-line/80 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-black/5 dark:bg-white/5 flex items-center justify-center">
                    {getIconForType(res.resource_type)}
                  </div>
                  <div>
                    <h3 className="font-medium text-ink text-sm">{res.title}</h3>
                    <a href={res.url} target="_blank" rel="noopener noreferrer" className="text-xs text-[#7cc4ff] hover:underline truncate max-w-[300px] block">
                      {res.url}
                    </a>
                  </div>
                </div>
                <div className="flex gap-2">
                  <form action={deleteFormationResource}>
                    <input type="hidden" name="id" value={res.id} />
                    <input type="hidden" name="formation_slug" value={formation.slug} />
                    <button type="submit" className="text-xs text-red-500/80 hover:text-red-500 px-3 py-1.5 rounded bg-red-500/10 flex items-center gap-1">
                      <Trash2 size={14} /> Retirer
                    </button>
                  </form>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10 bg-surface/5 border border-line border-dashed rounded-xl text-ink-mute text-sm">
              Aucune ressource pour l'instant. Ajoutez-en une ci-dessus.
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
