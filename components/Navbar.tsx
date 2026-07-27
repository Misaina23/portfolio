"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "@/lib/data";
import { useLanguage, useT } from "@/lib/i18n";

const links = [
  { href: "#accueil", key: "home" },
  { href: "#apropos", key: "about" },
  { href: "#competences", key: "skills" },
  { href: "#experience", key: "experience" },
  { href: "#formation", key: "education" },
  { href: "#projets", key: "projects" },
  { href: "#academique", key: "academic" },
  { href: "#services", key: "services" },
  { href: "#contact", key: "contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { locale, setLocale } = useLanguage();
  const t = useT();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchTo = (next: "fr" | "en") => {
    if (next !== locale) setLocale(next);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#accueil" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
            {profile.firstName[0]}
            {profile.lastName[0]}
          </span>
          <span className="text-lg font-bold tracking-tight text-foreground">
            Dev<span className="text-primary">Misaina</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {t.nav[link.key as keyof typeof t.nav]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 rounded-full border border-border bg-card p-1 sm:flex">
            <button
              type="button"
              onClick={() => switchTo("fr")}
              className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
                locale === "fr" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label="Français"
            >
              🇫🇷 FR
            </button>
            <button
              type="button"
              onClick={() => switchTo("en")}
              className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
                locale === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label="English"
            >
              🇬🇧 EN
            </button>
          </div>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Ouvrir le menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-t border-border bg-background/95 backdrop-blur-lg transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <div className="space-y-1 px-4 py-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
            >
              {t.nav[link.key as keyof typeof t.nav]}
            </a>
          ))}
          <div className="flex items-center gap-2 pt-2">
            <button
              type="button"
              onClick={() => switchTo("fr")}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                locale === "fr" ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground"
              }`}
            >
              🇫🇷 FR
            </button>
            <button
              type="button"
              onClick={() => switchTo("en")}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                locale === "en" ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground"
              }`}
            >
              🇬🇧 EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
