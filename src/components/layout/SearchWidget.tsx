"use client";

import { useState, useEffect, useRef } from "react";
import { Search, BookOpen, Award, Briefcase, Command } from "lucide-react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

export function SearchWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<{ type: string; title: string; href: string; description?: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const supabase = createClient();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
        inputRef.current?.blur();
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
        .or(`title.ilike.%${searchTerms}%,description.ilike.%${searchTerms}%`);

      // Rechercher dans les certifications
      const { data: certs } = await supabase
        .from("certifications")
        .select("title, issuer, url")
        .ilike("title", `%${searchTerms}%`);

      // Rechercher dans les projets
      const { data: projects } = await supabase
        .from("projects")
        .select("title, slug, description, tags, client")
        .or(`title.ilike.%${searchTerms}%,description.ilike.%${searchTerms}%`);

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

      if (projects) {
        formattedResults.push(
          ...projects.map((p) => ({
            type: "Projet",
            title: p.title,
            description: p.client || p.description,
            href: `/projects/${p.slug}`,
          }))
        );
      }

      setResults(formattedResults);
      setIsLoading(false);
    };

    const debounce = setTimeout(() => {
      fetchResults();
    }, 300);

    return () => clearTimeout(debounce);
  }, [query, supabase]);

  return (
    <div className="relative">
      <div 
        className="flex items-center gap-2.5 px-4 py-2 bg-white/85 dark:bg-[#12161c]/85 border border-line rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06)] w-[200px] focus-within:border-[#7cc4ff]/50 transition-colors cursor-text"
        onClick={() => {
          setIsOpen(true);
          inputRef.current?.focus();
        }}
      >
        <Search className="w-[15px] h-[15px] text-ink-mute opacity-70" />
        <input 
          ref={inputRef}
          type="text" 
          placeholder="Recherche" 
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="flex-1 min-w-0 bg-transparent border-0 outline-none text-ink text-sm placeholder:text-ink-mute"
        />
        <kbd className="font-mono text-[11px] px-[7px] py-[3px] bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-[5px] text-ink-mute">Cmd+K</kbd>
      </div>

      {isOpen && query && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute top-[calc(100%+8px)] right-0 w-[400px] bg-white/98 dark:bg-white dark:bg-[#0e1116]/98 backdrop-blur-xl border border-line/50 rounded-xl shadow-2xl z-50 overflow-hidden flex flex-col max-h-[400px]">
            <div className="p-2 overflow-y-auto flex-1">
              
              {isLoading && (
                 <div className="px-3 py-6 text-center text-[13px] text-ink-mute">Recherche en cours...</div>
              )}

              {!isLoading && results.length > 0 ? (
                results.map((r, idx) => (
                  <Link 
                    key={idx} 
                    href={r.href}
                    onClick={() => {
                      setIsOpen(false);
                      setQuery("");
                    }}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-black/5 dark:bg-white/5 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-md bg-black/5 dark:bg-white/5 border border-line flex items-center justify-center shrink-0">
                      {r.type === "Formation" && <BookOpen size={14} className="text-[#7cc4ff]" />}
                      {r.type === "Certification" && <Award size={14} className="text-purple-400" />}
                      {r.type === "Projet" && <Briefcase size={14} className="text-green-400" />}
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[13px] text-ink font-medium group-hover:text-[#7cc4ff] transition-colors">{r.title}</span>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-ink-mute">{r.type}</span>
                    </div>
                  </Link>
                ))
              ) : !isLoading ? (
                <div className="px-3 py-6 text-center flex flex-col items-center gap-2 text-ink-mute">
                  <Command size={20} className="opacity-50" />
                  <span className="text-[13px]">Aucun résultat pour &quot;{query}&quot;</span>
                </div>
              ) : null}
            </div>
            
            {results.length > 0 && (
              <div className="bg-black/5 dark:bg-white/5 px-4 py-2 border-t border-black/5 dark:border-white/5 text-[11px] text-ink-mute flex items-center justify-between">
                <span className="flex items-center gap-1"><Command size={10}/> Naviguer</span>
                <span className="flex items-center gap-1"><span className="font-mono bg-surface/50 border border-line px-1 rounded">↵</span> Ouvrir</span>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
