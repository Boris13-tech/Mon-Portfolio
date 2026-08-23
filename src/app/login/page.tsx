import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import Link from "next/link";
import { SubmitButtons } from "./SubmitButtons";

export default function LoginPage({
  searchParams,
}: {
  searchParams?: { message?: string };
}) {
  return (
    <Container className="py-24 flex justify-center items-center">
      <div className="panel p-10 rounded-2xl border border-line bg-surface/30 w-full max-w-md shadow-glass relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#7cc4ff]/10 blur-3xl rounded-full pointer-events-none" />
        
        <div className="mb-8">
          <PageHeader eyebrow="Accès Sécurisé" title="Connexion" />
          <p className="text-ink-mute text-sm mt-4">Connectez-vous pour accéder à vos lectures ou à votre tableau de bord.</p>
        </div>

        {searchParams?.message && (
          <div className="mb-4 p-3 bg-[#7cc4ff]/10 border border-[#7cc4ff]/20 text-[#7cc4ff] rounded-lg text-sm text-center">
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
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label className="text-sm text-ink-dim font-medium" htmlFor="password">Mot de passe</label>
              <Link href="/forgot-password" className="text-xs text-[#7cc4ff] hover:underline">Oublié ?</Link>
            </div>
            <input 
              id="password"
              name="password"
              type="password" 
              className="bg-black/5 dark:bg-white/5 border border-line rounded-lg px-4 py-3 text-ink outline-none focus:border-[#7cc4ff]/50 transition-colors"
              placeholder="••••••••"
              required
              minLength={8}
            />
          </div>
          
          <SubmitButtons />
        </form>
        
        <div className="mt-6 text-center text-xs text-ink-mute">
          En vous connectant, vous acceptez nos conditions d'utilisation.
        </div>
      </div>
    </Container>
  );
}
