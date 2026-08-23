"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [m, setM] = useState(false);
  useEffect(() => setM(true), []);
  if (!m) return null;
  const dark = theme === "dark";
  return (
    <button aria-label="Toggle theme" className="rounded-md border border-line bg-surface p-2" onClick={() => setTheme(dark ? "light" : "dark")}>
      {dark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
