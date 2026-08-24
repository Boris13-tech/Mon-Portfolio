import { PageHeader } from "@/components/layout/PageHeader";
import { updateCertification } from "../actions";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";

export default async function EditCertificationPage({ params }: { params: { id: string } }) {
  const supabase = await createClient();
  const { data: cert } = await supabase.from('certifications').select('*').eq('id', params.id).single();

  if (!cert) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-8 max-w-2xl">
      <div>
        <Link href="/admin/certifications" className="text-ink-mute hover:text-ink text-sm flex items-center gap-2 mb-4 transition-colors">
          <ArrowLeft size={14} /> Retour aux certifications
        </Link>
        <PageHeader eyebrow="Administration" title={`Modifier ${cert.code}`} />
      </div>

      <form action={updateCertification} className="panel p-6 rounded-2xl flex flex-col gap-6 bg-surface/10 border border-line">
        <input type="hidden" name="id" value={cert.id} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="code" className="text-sm font-medium text-ink">Code (ex: AZ-900)</label>
            <input required type="text" id="code" name="code" defaultValue={cert.code} className="bg-bg border border-line rounded-lg px-4 py-2 text-ink text-sm focus:outline-none focus:border-[#7cc4ff] transition-colors" placeholder="AZ-900" />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="text-sm font-medium text-ink">Titre</label>
            <input required type="text" id="title" name="title" defaultValue={cert.title} className="bg-bg border border-line rounded-lg px-4 py-2 text-ink text-sm focus:outline-none focus:border-[#7cc4ff] transition-colors" placeholder="Azure Fundamentals" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="issuer" className="text-sm font-medium text-ink">Éditeur</label>
            <input required type="text" id="issuer" name="issuer" defaultValue={cert.issuer} className="bg-bg border border-line rounded-lg px-4 py-2 text-ink text-sm focus:outline-none focus:border-[#7cc4ff] transition-colors" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="level" className="text-sm font-medium text-ink">Niveau</label>
            <input required type="text" id="level" name="level" defaultValue={cert.level} placeholder="Fundamentals, Associate, Expert..." className="bg-bg border border-line rounded-lg px-4 py-2 text-ink text-sm focus:outline-none focus:border-[#7cc4ff] transition-colors" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="status" className="text-sm font-medium text-ink">Statut</label>
            <select id="status" name="status" defaultValue={cert.status} className="bg-bg border border-line rounded-lg px-4 py-2 text-ink text-sm focus:outline-none focus:border-[#7cc4ff] transition-colors">
              <option value="needs-verification">Besoin de vérification</option>
              <option value="earned">Obtenue (Earned)</option>
              <option value="in-progress">En cours</option>
              <option value="planned">Prévue</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="issued_at" className="text-sm font-medium text-ink">Date d'obtention (optionnel)</label>
            <input type="date" id="issued_at" name="issued_at" defaultValue={cert.issued_at ? new Date(cert.issued_at).toISOString().split('T')[0] : ""} className="bg-bg border border-line rounded-lg px-4 py-2 text-ink text-sm focus:outline-none focus:border-[#7cc4ff] transition-colors" />
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="verification_url" className="text-sm font-medium text-ink">Lien de vérification (Credly, MS Learn)</label>
            <input type="url" id="verification_url" name="verification_url" defaultValue={cert.verification_url || ""} placeholder="https://..." className="bg-bg border border-line rounded-lg px-4 py-2 text-ink text-sm focus:outline-none focus:border-[#7cc4ff] transition-colors" />
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="badge_image_url" className="text-sm font-medium text-ink">Image du Badge (URL ou chemin)</label>
            <input type="text" id="badge_image_url" name="badge_image_url" defaultValue={cert.badge_image_url || ""} placeholder="/badges/expert.png" className="bg-bg border border-line rounded-lg px-4 py-2 text-ink text-sm focus:outline-none focus:border-[#7cc4ff] transition-colors" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="credential_id" className="text-sm font-medium text-ink">Credential ID (optionnel)</label>
            <input type="text" id="credential_id" name="credential_id" defaultValue={cert.credential_id || ""} className="bg-bg border border-line rounded-lg px-4 py-2 text-ink text-sm focus:outline-none focus:border-[#7cc4ff] transition-colors" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="display_order" className="text-sm font-medium text-ink">Ordre d'affichage</label>
            <input type="number" id="display_order" name="display_order" defaultValue={cert.display_order || 10} className="bg-bg border border-line rounded-lg px-4 py-2 text-ink text-sm focus:outline-none focus:border-[#7cc4ff] transition-colors" />
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-4 pt-4 border-t border-line">
          <Link href="/admin/certifications" className="px-4 py-2 rounded-lg text-sm text-ink hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
            Annuler
          </Link>
          <button type="submit" className="bg-[#7cc4ff] text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#7cc4ff]/90 transition-colors">
            Mettre à jour
          </button>
        </div>
      </form>
    </div>
  );
}
