"use client";

import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import { formationsData } from "@/data/formations";
import { useRouter } from "next/navigation";

export function SearchWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  
  const inputRef = useRef<HTMLInputElement>(null);

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

  const results = query
    ? formationsData.filter((f) => f.label.toLowerCase().includes(query.toLowerCase()) || f.category.toLowerCase().includes(query.toLowerCase()))
    : [];

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
        <kbd className="font-mono text-[11px] px-[7px] py-[3px] bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-[5px] text-ink-mute">⌘K</kbd>
      </div>

      {isOpen && query && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute top-[calc(100%+8px)] right-0 w-[300px] bg-white/98 dark:bg-white dark:bg-[#0e1116]/98 backdrop-blur-xl border border-line/50 rounded-xl shadow-2xl z-50 overflow-hidden flex flex-col max-h-[300px]">
            <div className="p-2 overflow-y-auto flex-1">
              {results.length > 0 ? (
                results.map((r) => (
                  <Link 
                    key={r.slug} 
                    href={`/formations/${r.slug}`}
                    onClick={() => {
                      setIsOpen(false);
                      setQuery("");
                    }}
                    className="flex flex-col gap-1 px-3 py-2.5 rounded-lg hover:bg-black/5 dark:bg-white/5 transition-colors"
                  >
                    <span className="text-[13px] text-ink">{r.label}</span>
                    <span className="text-[10px] font-mono" style={{ color: r.color }}>{r.category}</span>
                  </Link>
                ))
              ) : (
                <div className="px-3 py-4 text-center text-[13px] text-ink-mute">
                  Aucun résultat pour &quot;{query}&quot;
                </div>
              )}
            </div>
            {results.length > 0 && (
              <div className="bg-black/5 dark:bg-white/5 px-4 py-2 border-t border-black/5 dark:border-white/5 text-[11px] text-ink-mute font-mono text-center">
                Appuyez sur Entrée pour naviguer
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
