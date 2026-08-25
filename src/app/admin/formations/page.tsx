import { createClient } from "@/utils/supabase/server";
import { PageHeader } from "@/components/layout/PageHeader";
import Link from "next/link";
import { Plus, Edit2, Trash2 } from "lucide-react";
import { deleteFormation } from "./actions";

export default async function AdminFormationsPage() {
  const supabase = await createClient();
  const { data: formations } = await supabase.from('formations').select('*').order('created_at', { ascending: false });

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-end">
        <PageHeader eyebrow="Administration" title="Formations & Outils" />
        <Link 
          href="/admin/formations/new"
          className="bg-[#7cc4ff] text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#7cc4ff]/90 transition-colors flex items-center gap-2"
        >
          <Plus size={16} /> Nouvelle
        </Link>
      </div>

      <div className="bg-surface/10 border border-line rounded-2xl overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-black/5 dark:bg-white/5 border-b border-line text-ink-mute">
            <tr>
              <th className="px-6 py-4 font-medium">Titre</th>
              <th className="px-6 py-4 font-medium">Slug</th>
              <th className="px-6 py-4 font-medium">Statut</th>
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {formations?.map((f) => (
              <tr key={f.id} className="group hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                <td className="px-6 py-4">
                  <div className="font-medium text-ink">{f.title}</div>
                </td>
                <td className="px-6 py-4 text-ink-mute font-mono text-xs">{f.slug}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-md text-[10px] font-mono tracking-widest uppercase ${
                    f.status === 'published' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 
                    'bg-orange-500/10 text-orange-500 border border-orange-500/20'
                  }`}>
                    {f.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link href={`/admin/formations/${f.slug}`} className="text-ink-mute hover:text-[#7cc4ff] transition-colors p-1">
                      <Edit2 size={16} />
                    </Link>
                    <form action={deleteFormation}>
                      <input type="hidden" name="id" value={f.id} />
                      <button type="submit" className="text-ink-mute hover:text-red-500 transition-colors p-1">
                        <Trash2 size={16} />
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
            {(!formations || formations.length === 0) && (
              <tr>
                <td colSpan={4} className="px-6 py-12 text-center text-ink-mute">
                  Aucune formation pour le moment.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
