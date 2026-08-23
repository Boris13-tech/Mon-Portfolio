"use client";

import { useFormStatus } from "react-dom";
import { login, signup } from "./actions";

export function SubmitButtons() {
  const { pending } = useFormStatus();

  return (
    <div className="flex gap-3 mt-4">
      <button 
        formAction={login}
        disabled={pending}
        className="flex-1 bg-[#7cc4ff] text-bg hover:bg-[#7cc4ff]/90 px-4 py-3 rounded-lg font-medium transition-colors shadow-sm disabled:opacity-50"
      >
        {pending ? "Connexion..." : "Se connecter"}
      </button>
      <button 
        formAction={signup}
        disabled={pending}
        className="flex-1 bg-black/5 dark:bg-white/5 text-ink hover:bg-black/10 dark:hover:bg-white/10 px-4 py-3 rounded-lg font-medium transition-colors disabled:opacity-50"
      >
        {pending ? "Veuillez patienter..." : "S'inscrire"}
      </button>
    </div>
  );
}
