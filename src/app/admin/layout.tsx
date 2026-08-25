import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { signout } from "@/app/login/actions";
import Link from "next/link";
import { 
  LayoutDashboard, 
  Award, 
  Briefcase, 
  Mic, 
  Presentation, 
  Video, 
  FolderOpen,
  LogOut,
  Settings,
  BookOpen
} from "lucide-react";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // Protection stricte : Seul l'administrateur peut voir ce layout
  if (!user || user.email !== "legrandborisohandjaedimo@gmail.com") {
    redirect("/");
  }

  const navItems = [
    { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { label: "Certifications", href: "/admin/certifications", icon: Award },
    { label: "Projets", href: "/admin/projects", icon: Briefcase },
    { label: "Podcasts", href: "/admin/podcasts", icon: Mic },
    { label: "Conférences", href: "/admin/speaking", icon: Presentation },
    { label: "Vidéos", href: "/admin/videos", icon: Video },
    { label: "Médias", href: "/admin/media", icon: FolderOpen },
  ];

  return (
    <div className="min-h-screen bg-bg text-ink flex flex-col md:flex-row">
      {/* Sidebar Mobile */}
      <div className="md:hidden border-b border-line p-4 flex items-center justify-between bg-surface/30">
        <div className="font-display font-medium text-lg tracking-tight">Admin CMS</div>
        <form action={signout}>
          <button aria-label="Se déconnecter" className="p-2 bg-black/10 dark:bg-white/10 rounded-md">
            <LogOut size={16} />
          </button>
        </form>
      </div>

      {/* Sidebar Desktop */}
      <aside className="hidden md:flex w-64 border-r border-line bg-surface/10 flex-col justify-between sticky top-0 h-screen">
        <div>
          <div className="p-6 border-b border-line">
            <Link href="/" className="font-display font-medium text-xl tracking-tight hover:text-[#7cc4ff] transition-colors">
              Boris Ohandja
            </Link>
            <div className="text-xs font-mono text-[#7cc4ff] mt-1 tracking-widest uppercase">Espace Admin</div>
          </div>
          
          <nav className="p-4 flex flex-col gap-1">
            <Link href="/admin" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-ink-mute hover:text-ink hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <LayoutDashboard size={18} />
              Dashboard
            </Link>
            <Link href="/admin/formations" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-ink-mute hover:text-ink hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <BookOpen size={18} />
              Formations & Outils
            </Link>
            <Link href="/admin/certifications" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-ink-mute hover:text-ink hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <Award size={18} />
              Certifications
            </Link>
            <Link href="/admin/projects" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-ink-mute hover:text-ink hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <Briefcase size={18} />
              Projets
            </Link>
            <Link href="/admin/podcasts" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-ink-mute hover:text-ink hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <Mic size={18} />
              Podcasts
            </Link>
            <Link href="/admin/speaking" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-ink-mute hover:text-ink hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <Presentation size={18} />
              Conférences
            </Link>
            <Link href="/admin/videos" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-ink-mute hover:text-ink hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <Video size={18} />
              Vidéos
            </Link>
            <Link href="/admin/media" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-ink-mute hover:text-ink hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <FolderOpen size={18} />
              Médias
            </Link>
          </nav>
        </div>

        <div className="p-4 border-t border-line flex flex-col gap-1">
          <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-ink-mute hover:text-ink hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
            <Settings size={18} />
            Paramètres
          </Link>
          <form action={signout}>
            <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-red-500/80 hover:text-red-500 hover:bg-red-500/10 transition-colors">
              <LogOut size={18} />
              Se déconnecter
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden p-6 md:p-10">
        <div className="max-w-[1000px] mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
