"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="p-5" />; 

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative p-2 rounded-xl bg-gray-100 dark:bg-[#111] border border-gray-200 dark:border-white/10 transition-all hover:scale-105 active:scale-95"
      aria-label="Toggle Theme"
    >
      <div className="relative w-5 h-5">
        <Sun className="absolute inset-0 transition-all transform dark:rotate-90 dark:scale-0 text-amber-500" />
        <Moon className="absolute inset-0 transition-all transform rotate-90 scale-0 dark:rotate-0 dark:scale-100 text-blue-400" />
      </div>
    </button>
  );
}