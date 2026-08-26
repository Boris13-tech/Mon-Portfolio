import { createClient } from "@/utils/supabase/server";
import { PageHeader } from "@/components/layout/PageHeader";
import Link from "next/link";
import { Plus, Pencil, Trash2, ExternalLink } from "lucide-react";
import { deleteProject } from "./actions";

export default async function AdminProjectsPage() {
  const supabase = await createClient();
  const { data: projects } = await supabase.from("projects").select("*").order("created_at", { ascending: false });

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <PageHeader 
          eyebrow="Administration" 
          title="Projets & Missions" 
          sub="Gérez votre portfolio de cas clients et d'architectures."
        />
        <Link 
          href="/admin/projects/new" 
          className="inline-flex items-center gap-2 bg-[#7cc4ff] text-bg px-5 py-2.5 rounded-full font-medium hover:opacity-90 transition-opacity self-start"
        >
          <Plus size={18} />
          Nouveau projet
        </Link>
      </div>

      <div className="panel border border-line rounded-2xl overflow-hidden bg-surface/10">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-surface/30 border-b border-line text-ink-mute font-mono text-[11px] uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4">Projet</th>
              <th className="px-6 py-4">Client / Rôle</th>
              <th className="px-6 py-4">Statut</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {projects?.map((project) => (
              <tr key={project.id} className="hover:bg-surface/5 transition-colors">
                <td className="px-6 py-4">
                  <div className="font-medium text-ink">{project.title}</div>
                  <div className="text-xs text-ink-mute mt-1">/{project.slug}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-ink">{project.client || "Personnel"}</div>
                  <div className="text-xs text-ink-mute mt-1">{project.role || "Architecte"}</div>
                </td>
                <td className="px-6 py-4">
                  <span className={\`inline-flex items-center px-2 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest \${project.status === 'published' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-orange-500/10 text-orange-500 border border-orange-500/20'}\`}>
                    {project.status === 'published' ? 'Publié' : 'Brouillon'}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link href={\`/projects/\${project.slug}\`} target="_blank" className="p-2 text-ink-mute hover:text-[#7cc4ff] transition-colors bg-surface/30 rounded-lg">
                      <ExternalLink size={16} />
                    </Link>
                    <Link href={\`/admin/projects/\${project.slug}\`} className="p-2 text-ink-mute hover:text-[#7cc4ff] transition-colors bg-surface/30 rounded-lg">
                      <Pencil size={16} />
                    </Link>
                    <form action={deleteProject}>
                      <input type="hidden" name="id" value={project.id} />
                      <button type="submit" className="p-2 text-ink-mute hover:text-red-500 transition-colors bg-surface/30 rounded-lg" onClick={(e) => { if(!confirm('Sûr de vouloir supprimer ?')) e.preventDefault() }}>
                        <Trash2 size={16} />
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
            {(!projects || projects.length === 0) && (
              <tr>
                <td colSpan={4} className="px-6 py-12 text-center text-ink-mute">
                  Aucun projet trouvé. Créez votre premier cas client !
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
