"use client";

import { Container } from "@/components/layout/Container";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "boris.ohandja@gmail.com") {
      // Connexion administrateur
      router.push("/admin");
    } else if (email) {
      // Connexion abonné/utilisateur normal
      router.push("/portal?email=" + encodeURIComponent(email));
    }
  };

  return (
    <Container className="py-24 flex justify-center items-center">
      <div className="panel p-10 rounded-2xl border border-line bg-surface/30 w-full max-w-md shadow-glass relative overflow-hidden">
        {/* Effet lumineux décoratif */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#7cc4ff]/10 blur-3xl rounded-full pointer-events-none" />
        
        <div className="mb-8">
          <PageHeader eyebrow="Accès Sécurisé" title="Connexion" />
          <p className="text-ink-mute text-sm mt-4">Connectez-vous pour accéder à vos lectures ou à votre tableau de bord.</p>
        </div>
        
        <form onSubmit={handleLogin} className="flex flex-col gap-5 relative z-10">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-ink-dim font-medium">Adresse Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-black/5 dark:bg-white/5 border border-line rounded-lg px-4 py-3 text-ink outline-none focus:border-[#7cc4ff]/50 transition-colors"
              placeholder="ex: boris.ohandja@gmail.com"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label className="text-sm text-ink-dim font-medium">Mot de passe</label>
              <a href="#" className="text-xs text-[#7cc4ff] hover:underline">Oublié ?</a>
            </div>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-black/5 dark:bg-white/5 border border-line rounded-lg px-4 py-3 text-ink outline-none focus:border-[#7cc4ff]/50 transition-colors"
              placeholder="••••••••"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-[#7cc4ff] text-bg hover:bg-[#7cc4ff]/90 px-4 py-3 rounded-lg font-medium transition-colors mt-4 shadow-sm"
          >
            Se connecter
          </button>
        </form>
        
        <div className="mt-6 text-center text-xs text-ink-mute">
          En vous connectant, vous acceptez nos conditions d'utilisation.
        </div>
      </div>
    </Container>
  );
}
