import { Container } from "@/components/layout/Container";
import { formationsData } from "@/data/formations";
import { PageHeader } from "@/components/layout/PageHeader";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { signout } from "@/app/login/actions";

export default async function AdminPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user || user.email !== "boris.ohandja@gmail.com") {
    redirect("/portal");
  }

  return (
    <Container className="py-24">
      <div className="flex justify-between items-end mb-12">
        <PageHeader eyebrow="Tableau de bord" title="Gestion du contenu" />
        <form action={signout}>
          <button className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:bg-white/10 px-4 py-2 rounded-lg text-sm text-ink-mute transition-colors mb-8">
            Se déconnecter
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 flex flex-col gap-3">
          <div className="panel p-5 rounded-xl border border-line bg-surface/30 cursor-pointer border-[#7cc4ff]/50">
            <h3 className="text-gray-900 dark:text-white font-medium mb-1">Formations</h3>
            <p className="text-xs text-ink-mute">Gérer les {formationsData.length} pages de formations</p>
          </div>
          <div className="panel p-5 rounded-xl border border-line bg-transparent hover:bg-surface/30 cursor-pointer transition-colors">
            <h3 className="text-gray-900 dark:text-white font-medium mb-1">Projets</h3>
            <p className="text-xs text-ink-mute">Ajouter un cas client</p>
          </div>
          <div className="panel p-5 rounded-xl border border-line bg-transparent hover:bg-surface/30 cursor-pointer transition-colors">
            <h3 className="text-gray-900 dark:text-white font-medium mb-1">Articles</h3>
            <p className="text-xs text-ink-mute">Rédiger un nouvel article</p>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="panel p-6 rounded-2xl border border-line bg-surface/10">
            <h2 className="text-xl font-display text-gray-900 dark:text-white mb-6">Éditer les formations</h2>
            <div className="flex flex-col gap-2">
              {formationsData.map((f) => (
                <div key={f.slug} className="flex items-center justify-between p-4 border border-black/5 dark:border-white/5 rounded-xl hover:bg-black/5 dark:bg-white/5 transition-colors">
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{f.label}</div>
                    <div className="text-[11px] text-ink-mute font-mono mt-1" style={{ color: f.color }}>{f.category}</div>
                  </div>
                  <button className="text-xs bg-[#7cc4ff]/10 text-[#7cc4ff] px-3 py-1.5 rounded hover:bg-[#7cc4ff]/20 transition-colors">
                    Éditer
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
