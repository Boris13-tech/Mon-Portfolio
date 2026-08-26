import { PageHeader } from "@/components/layout/PageHeader";
import { createFormation } from "../actions";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NewFormationPage() {
  return (
    <div className="flex flex-col gap-8 max-w-2xl">
      <div>
        <Link href="/admin/formations" className="text-ink-mute hover:text-ink text-sm flex items-center gap-2 mb-4 transition-colors">
          <ArrowLeft size={14} /> Retour aux formations
        </Link>
        <PageHeader eyebrow="Administration" title="Nouvelle Formation" />
      </div>

      <form action={createFormation} className="panel p-6 rounded-2xl flex flex-col gap-6 bg-surface/10 border border-line">
        <div className="grid grid-cols-1 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="text-sm font-medium text-ink">Titre de la formation</label>
            <input required type="text" id="title" name="title" className="bg-bg border border-line rounded-lg px-4 py-2 text-ink text-sm focus:outline-none focus:border-[#7cc4ff] transition-colors" placeholder="Formation AZ-900: Microsoft Azure Fundamentals" />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="slug" className="text-sm font-medium text-ink">Slug (URL)</label>
            <input required type="text" id="slug" name="slug" className="bg-bg border border-line rounded-lg px-4 py-2 text-ink text-sm focus:outline-none focus:border-[#7cc4ff] transition-colors" placeholder="az-900" />
            <p className="text-xs text-ink-mute">Sera utilisé dans l'URL : /formations/az-900</p>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="text-sm font-medium text-ink">Description</label>
            <textarea id="description" name="description" rows={4} className="bg-bg border border-line rounded-lg px-4 py-2 text-ink text-sm focus:outline-none focus:border-[#7cc4ff] transition-colors" placeholder="Résumé de la formation..." />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="tags" className="text-sm font-medium text-ink">Tags (séparés par des virgules)</label>
            <input type="text" id="tags" name="tags" className="bg-bg border border-line rounded-lg px-4 py-2 text-ink text-sm focus:outline-none focus:border-[#7cc4ff] transition-colors" placeholder="Azure, Sécurité, Zero Trust" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="prerequisites" className="text-sm font-medium text-ink">Prérequis</label>
              <textarea id="prerequisites" name="prerequisites" rows={3} className="bg-bg border border-line rounded-lg px-4 py-2 text-ink text-sm focus:outline-none focus:border-[#7cc4ff] transition-colors" placeholder="Ce qu'il faut savoir avant..." />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="objectives" className="text-sm font-medium text-ink">Objectifs</label>
              <textarea id="objectives" name="objectives" rows={3} className="bg-bg border border-line rounded-lg px-4 py-2 text-ink text-sm focus:outline-none focus:border-[#7cc4ff] transition-colors" placeholder="Ce qu'on va apprendre..." />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="cover_image_url" className="text-sm font-medium text-ink">Image de couverture (URL)</label>
            <input type="text" id="cover_image_url" name="cover_image_url" className="bg-bg border border-line rounded-lg px-4 py-2 text-ink text-sm focus:outline-none focus:border-[#7cc4ff] transition-colors" placeholder="/images/az-900-cover.jpg" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="status" className="text-sm font-medium text-ink">Statut</label>
            <select id="status" name="status" className="bg-bg border border-line rounded-lg px-4 py-2 text-ink text-sm focus:outline-none focus:border-[#7cc4ff] transition-colors">
              <option value="draft">Brouillon</option>
              <option value="published">Publié</option>
              <option value="archived">Archivé</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-4 pt-4 border-t border-line">
          <Link href="/admin/formations" className="px-4 py-2 rounded-lg text-sm text-ink hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
            Annuler
          </Link>
          <button type="submit" className="bg-[#7cc4ff] text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#7cc4ff]/90 transition-colors">
            Créer
          </button>
        </div>
      </form>
    </div>
  );
}
