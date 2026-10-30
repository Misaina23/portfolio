"use client";

import { useSyncExternalStore, useState } from "react";
import { Moon, Sun } from "lucide-react";

const subscribe = () => () => {};
const getSnapshot = () => (typeof document !== "undefined" ? document.documentElement.classList.contains("dark") : true);
const getServerSnapshot = () => true;

export function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [, force] = useState(0);

  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* ignore */
    }
    force((n) => n + 1);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Basculer le thème clair / sombre"
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary"
    >
      {isDark ? <Sun className="h-4 w-4 text-primary" /> : <Moon className="h-4 w-4 text-foreground" />}
    </button>
  );
}
