"use client";

import { Container } from "@/components/layout/Container";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin") {
      router.push("/admin");
    } else {
      alert("Mot de passe incorrect (indice: 'admin')");
    }
  };

  return (
    <Container className="py-32 flex justify-center items-center">
      <div className="panel p-10 rounded-2xl border border-line bg-surface/30 w-full max-w-md">
        <h1 className="font-display text-3xl mb-2 text-gray-900 dark:text-white">Connexion Admin</h1>
        <p className="text-ink-mute text-sm mb-8">Accès réservé pour l'édition du contenu.</p>
        
        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-900 dark:text-white/80">Mot de passe</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white dark:bg-[#0e1116] border border-line rounded-lg px-4 py-3 text-gray-900 dark:text-white outline-none focus:border-[#7cc4ff]/50 transition-colors"
              placeholder="••••••••"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-[#7cc4ff]/10 border border-[#7cc4ff]/20 text-[#7cc4ff] hover:bg-[#7cc4ff]/20 px-4 py-3 rounded-lg font-medium transition-colors mt-2"
          >
            Se connecter
          </button>
        </form>
      </div>
    </Container>
  );
}
