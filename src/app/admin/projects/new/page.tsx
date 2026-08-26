import { PageHeader } from "@/components/layout/PageHeader";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";
import { createProject } from "../actions";

export default function NewProjectPage() {
  return (
    <div>
      <div className="mb-8">
        <Link href="/admin/projects" className="inline-flex items-center gap-2 text-sm font-medium text-ink-mute hover:text-ink transition-colors mb-4">
          <ArrowLeft size={16} />
          Retour aux projets
        </Link>
        <PageHeader 
          eyebrow="Administration" 
          title="Nouveau Projet" 
          sub="Ajoutez une mission, un cas client ou un projet d'architecture."
        />
      </div>

      <div className="panel border border-line rounded-2xl bg-surface/10 p-6 md:p-8">
        <form action={createProject} className="flex flex-col gap-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="text-sm font-medium text-ink">Titre du projet *</label>
              <input type="text" id="title" name="title" required className="bg-bg border border-line rounded-lg px-4 py-2 text-ink text-sm focus:outline-none focus:border-[#7cc4ff] transition-colors" placeholder="Migration Azure Landing Zone" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="slug" className="text-sm font-medium text-ink">Slug (URL) *</label>
              <input type="text" id="slug" name="slug" required className="bg-bg border border-line rounded-lg px-4 py-2 text-ink text-sm focus:outline-none focus:border-[#7cc4ff] transition-colors" placeholder="migration-azure-landing-zone" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="client" className="text-sm font-medium text-ink">Client / Entreprise</label>
              <input type="text" id="client" name="client" className="bg-bg border border-line rounded-lg px-4 py-2 text-ink text-sm focus:outline-none focus:border-[#7cc4ff] transition-colors" placeholder="Banque Populaire" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="role" className="text-sm font-medium text-ink">Votre rôle</label>
              <input type="text" id="role" name="role" className="bg-bg border border-line rounded-lg px-4 py-2 text-ink text-sm focus:outline-none focus:border-[#7cc4ff] transition-colors" placeholder="Lead Architect" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="date" className="text-sm font-medium text-ink">Période / Date</label>
              <input type="text" id="date" name="date" className="bg-bg border border-line rounded-lg px-4 py-2 text-ink text-sm focus:outline-none focus:border-[#7cc4ff] transition-colors" placeholder="2023 - 2024" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="text-sm font-medium text-ink">Description courte (Résumé)</label>
            <textarea id="description" name="description" rows={3} className="bg-bg border border-line rounded-lg px-4 py-2 text-ink text-sm focus:outline-none focus:border-[#7cc4ff] transition-colors" placeholder="Déploiement d'une architecture sécurisée Zero Trust pour 5000 collaborateurs." />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="content" className="text-sm font-medium text-ink">Contenu détaillé (Markdown accepté)</label>
            <textarea id="content" name="content" rows={10} className="bg-bg border border-line rounded-lg px-4 py-2 text-ink text-sm focus:outline-none focus:border-[#7cc4ff] transition-colors font-mono" placeholder="## Le défi&#10;...&#10;## La solution&#10;..." />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="tags" className="text-sm font-medium text-ink">Tags techniques (séparés par des virgules)</label>
            <input type="text" id="tags" name="tags" className="bg-bg border border-line rounded-lg px-4 py-2 text-ink text-sm focus:outline-none focus:border-[#7cc4ff] transition-colors" placeholder="Azure, Terraform, Zero Trust, Entra ID" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="link_url" className="text-sm font-medium text-ink">Lien externe (Site web, PDF...)</label>
              <input type="text" id="link_url" name="link_url" className="bg-bg border border-line rounded-lg px-4 py-2 text-ink text-sm focus:outline-none focus:border-[#7cc4ff] transition-colors" placeholder="https://..." />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="github_url" className="text-sm font-medium text-ink">Lien GitHub (Code IaC...)</label>
              <input type="text" id="github_url" name="github_url" className="bg-bg border border-line rounded-lg px-4 py-2 text-ink text-sm focus:outline-none focus:border-[#7cc4ff] transition-colors" placeholder="https://github.com/..." />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="cover_image_url" className="text-sm font-medium text-ink">Image de couverture (URL)</label>
            <input type="text" id="cover_image_url" name="cover_image_url" className="bg-bg border border-line rounded-lg px-4 py-2 text-ink text-sm focus:outline-none focus:border-[#7cc4ff] transition-colors" placeholder="https://images.unsplash.com/..." />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="status" className="text-sm font-medium text-ink">Statut de publication</label>
            <select id="status" name="status" className="bg-bg border border-line rounded-lg px-4 py-2 text-ink text-sm focus:outline-none focus:border-[#7cc4ff] transition-colors">
              <option value="draft">Brouillon (Non visible)</option>
              <option value="published">Publié (Visible publiquement)</option>
            </select>
          </div>

          <div className="pt-4 flex justify-end">
            <button type="submit" className="bg-[#7cc4ff] text-bg px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
              <Save size={18} />
              Créer le projet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
