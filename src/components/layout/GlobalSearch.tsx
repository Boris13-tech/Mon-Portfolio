"use client";

import { useState, useEffect } from "react";
import { Search, Command, BookOpen, Briefcase, Award, ArrowRight } from "lucide-react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

export function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<{ type: string; title: string; href: string; description?: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const fetchResults = async () => {
      if (query.trim().length < 2) {
        setResults([]);
        return;
      }

      setIsLoading(true);
      const searchTerms = query.toLowerCase();

      // Rechercher dans les formations
      const { data: formations } = await supabase
        .from("formations")
        .select("title, slug, description, tags")
        .eq("status", "published")
        .or(`title.ilike.%${searchTerms}%,description.ilike.%${searchTerms}%`);

      // Rechercher dans les certifications
      const { data: certs } = await supabase
        .from("certifications")
        .select("title, issuer, url")
        .eq("status", "published")
        .ilike("title", `%${searchTerms}%`);

      const formattedResults = [];

      if (formations) {
        formattedResults.push(
          ...formations.map((f) => ({
            type: "Formation",
            title: f.title,
            description: f.description,
            href: `/formations/${f.slug}`,
          }))
        );
      }

      if (certs) {
        formattedResults.push(
          ...certs.map((c) => ({
            type: "Certification",
            title: c.title,
            description: c.issuer,
            href: `/certifications`,
          }))
        );
      }

      // Projets (mock pour l'instant)
      // Quand la table sera prête on l'ajoutera ici

      setResults(formattedResults);
      setIsLoading(false);
    };

    const debounce = setTimeout(() => {
      fetchResults();
    }, 300);

    return () => clearTimeout(debounce);
  }, [query, supabase]);

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={() => setIsOpen(false)}
      />
      <div className="fixed inset-x-4 top-[10%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-[600px] z-50 bg-[#0a0a0b] border border-line rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Input Area */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-line bg-surface/30">
          <Search size={20} className="text-ink-mute shrink-0" />
          <input 
            type="text" 
            autoFocus 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher une formation, un outil, une certif..." 
            className="flex-1 bg-transparent border-none outline-none text-ink placeholder:text-ink-mute/50 text-[15px]"
          />
          <div className="flex items-center gap-1 text-xs text-ink-mute font-mono bg-surface/50 px-2 py-1 rounded border border-line">
            ESC
          </div>
        </div>

        {/* Results Area */}
        <div className="flex-1 overflow-y-auto p-2">
          {query.trim().length < 2 && (
            <div className="p-8 text-center text-ink-mute text-sm flex flex-col items-center gap-3">
              <Command size={24} className="opacity-50" />
              Que cherchez-vous aujourd'hui ?
            </div>
          )}

          {isLoading && query.trim().length >= 2 && (
            <div className="p-8 text-center text-ink-mute text-sm">
              Recherche en cours...
            </div>
          )}

          {!isLoading && query.trim().length >= 2 && results.length === 0 && (
            <div className="p-8 text-center text-ink-mute text-sm">
              Aucun résultat pour "{query}"
            </div>
          )}

          {!isLoading && results.length > 0 && (
            <div className="flex flex-col gap-1">
              {results.map((result, idx) => (
                <Link 
                  key={idx} 
                  href={result.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#7cc4ff]/10 hover:border-[#7cc4ff]/20 border border-transparent transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-surface/30 border border-line flex items-center justify-center shrink-0">
                    {result.type === "Formation" && <BookOpen size={18} className="text-[#7cc4ff]" />}
                    {result.type === "Certification" && <Award size={18} className="text-purple-400" />}
                    {result.type === "Projet" && <Briefcase size={18} className="text-green-400" />}
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-ink-mute mb-0.5">{result.type}</span>
                    <span className="font-medium text-ink text-sm group-hover:text-[#7cc4ff] transition-colors truncate">{result.title}</span>
                  </div>
                  <ArrowRight size={16} className="text-ink-mute opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-3 bg-surface/10 border-t border-line text-[11px] text-ink-mute flex items-center gap-4">
          <span className="flex items-center gap-1.5"><Command size={12}/> ou FLÈCHES pour naviguer</span>
          <span className="flex items-center gap-1.5"><span className="font-mono bg-surface/50 border border-line px-1 rounded">↵</span> pour sélectionner</span>
        </div>
      </div>
    </>
  );
}
