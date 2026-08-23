import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { resetPassword } from "./actions";
import Link from "next/link";

export default function ForgotPasswordPage({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return (
    <Container className="py-24 flex justify-center items-center">
      <div className="panel p-10 rounded-2xl border border-line bg-surface/30 w-full max-w-md shadow-glass relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#7cc4ff]/10 blur-3xl rounded-full pointer-events-none" />
        
        <div className="mb-8">
          <PageHeader eyebrow="Sécurité" title="Mot de passe oublié" />
          <p className="text-ink-mute text-sm mt-4">Entrez votre adresse email et nous vous enverrons un lien pour réinitialiser votre mot de passe.</p>
        </div>

        {searchParams?.message && (
          <div className="mb-4 p-3 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-lg text-sm text-center">
            {searchParams.message}
          </div>
        )}
        
        <form className="flex flex-col gap-5 relative z-10">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-ink-dim font-medium" htmlFor="email">Adresse Email</label>
            <input 
              id="email"
              name="email"
              type="email" 
              className="bg-black/5 dark:bg-white/5 border border-line rounded-lg px-4 py-3 text-ink outline-none focus:border-[#7cc4ff]/50 transition-colors"
              placeholder="votre.adresse@email.com"
              required
            />
          </div>
          <button 
            formAction={resetPassword}
            className="w-full bg-[#7cc4ff] text-bg hover:bg-[#7cc4ff]/90 px-4 py-3 rounded-lg font-medium transition-colors mt-2 shadow-sm"
          >
            Envoyer le lien de réinitialisation
          </button>
        </form>
        
        <div className="mt-6 text-center text-sm">
          <Link href="/login" className="text-ink-mute hover:text-[#7cc4ff] transition-colors">
            ← Retour à la connexion
          </Link>
        </div>
      </div>
    </Container>
  );
}
