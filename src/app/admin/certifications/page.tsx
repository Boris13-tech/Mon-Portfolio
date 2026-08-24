import { createClient } from "@/utils/supabase/server";
import { Plus, CheckCircle, Clock, Search, Lock, Award } from "lucide-react";
import Link from "next/link";
import { CertStatus } from "@/data/certifications";

export default async function AdminCertificationsPage() {
  const supabase = await createClient();
  
  // Fetch from DB
  const { data: certifications, error } = await supabase
    .from("certifications")
    .select("*")
    .order("display_order", { ascending: true });

  if (error) {
    console.error("Error fetching certifications:", error);
  }

  const certs = certifications || [];

  const getStatusIcon = (status: CertStatus) => {
    switch (status) {
      case "earned": return <CheckCircle size={14} className="text-emerald-500" />;
      case "needs-verification": return <Lock size={14} className="text-amber-500" />;
      default: return <Clock size={14} className="text-ink-mute" />;
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-medium text-ink tracking-tight mb-2">Certifications</h1>
          <p className="text-ink-mute text-sm">Gérez vos certifications, l'ordre d'affichage et les liens de vérification.</p>
        </div>
        <Link 
          href="/admin/certifications/new"
          className="flex items-center gap-2 bg-[#7cc4ff] text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#7cc4ff]/90 transition-colors"
        >
          <Plus size={16} />
          Nouvelle Certification
        </Link>
      </div>

      <div className="panel p-0 rounded-2xl border border-line bg-surface/10 overflow-hidden">
        {certs.length === 0 ? (
          <div className="p-12 text-center flex flex-col items-center">
            <Award className="text-ink-mute/30 mb-4" size={48} />
            <p className="text-ink-mute text-sm">Aucune certification en base de données.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-black/5 dark:bg-white/5 text-ink-mute font-mono text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4 font-medium">Certification</th>
                  <th className="px-6 py-4 font-medium">Domaine / Niveau</th>
                  <th className="px-6 py-4 font-medium">Statut</th>
                  <th className="px-6 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line/50">
                {certs.map((cert) => (
                  <tr key={cert.id} className="hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="font-medium text-ink">{cert.title}</div>
                          <div className="text-xs text-ink-mute font-mono mt-0.5">{cert.code} · {cert.issuer}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-ink-dim">{cert.level}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(cert.status as CertStatus)}
                        <span className="capitalize text-ink-dim">{cert.status.replace("-", " ")}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link 
                        href={`/admin/certifications/${cert.id}`}
                        className="text-[#7cc4ff] hover:underline text-xs font-medium"
                      >
                        Éditer
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
