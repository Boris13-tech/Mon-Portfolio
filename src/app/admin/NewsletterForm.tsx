"use client";

import { useState } from "react";
import { sendNewsletter } from "./actions";

export default function NewsletterForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const formData = new FormData(e.currentTarget);
    const result = await sendNewsletter(formData);

    if (result.error) {
      setMessage({ type: "error", text: result.error });
    } else {
      setMessage({ type: "success", text: "Newsletter envoyée avec succès !" });
      (e.target as HTMLFormElement).reset();
    }
    
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {message && (
        <div className={`p-3 rounded-lg text-sm ${message.type === 'success' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}>
          {message.text}
        </div>
      )}
      
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-ink-dim">Sujet de l'email</label>
        <input 
          name="subject" 
          required
          className="bg-black/5 dark:bg-white/5 border border-line rounded-lg px-4 py-2 text-ink outline-none focus:border-[#7cc4ff]/50" 
          placeholder="Ex: Nouveautés sur mon portfolio"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-ink-dim">Contenu de la newsletter</label>
        <textarea 
          name="content"
          required
          rows={5}
          className="bg-black/5 dark:bg-white/5 border border-line rounded-lg px-4 py-3 text-ink outline-none focus:border-[#7cc4ff]/50 resize-none" 
          placeholder="Bonjour à tous, je viens d'ajouter une nouvelle formation sur Azure..."
        />
      </div>
      
      <button 
        type="submit" 
        disabled={loading}
        className="bg-[#7cc4ff] text-bg hover:bg-[#7cc4ff]/90 px-4 py-2 rounded-lg font-medium transition-colors mt-2 disabled:opacity-50"
      >
        {loading ? "Envoi en cours..." : "Publier & Notifier les abonnés"}
      </button>

      <p className="text-[11px] text-ink-mute text-center mt-2">
        * Note: En mode test sans domaine vérifié, l'email sera envoyé uniquement à ton adresse admin.
      </p>
    </form>
  );
}
