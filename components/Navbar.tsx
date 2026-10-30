"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "@/lib/data";
import { useLanguage, useT } from "@/lib/i18n";

const desktopLinks = [
  { href: "#accueil", key: "home" },
  { href: "#competences", key: "skills" },
  { href: "#projets", key: "projects" },
  { href: "#experience", key: "experience" },
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
          ? "border-b border-border bg-background/95 backdrop-blur-md shadow-xs py-2.5"
          : "border-b border-transparent bg-transparent py-4"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 gap-8">
        {/* Brand Logo: Clean 1-line text */}
        <a href="#accueil" className="flex items-center gap-2.5 whitespace-nowrap shrink-0">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-xs font-black uppercase text-primary-foreground font-display">
            {profile.firstName[0]}
            {profile.lastName[0]}
          </span>
          <span className="text-lg font-extrabold uppercase tracking-tight text-foreground font-display">
            Dev<span className="text-primary">Misaina</span>
          </span>
        </a>

        {/* Center Nav Links: 5 clean items */}
        <div className="hidden md:flex items-center gap-7">
          {desktopLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary font-mono whitespace-nowrap"
            >
              {t.nav[link.key as keyof typeof t.nav]}
            </a>
          ))}
        </div>

        {/* Right Nav Utilities */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="hidden items-center gap-1 border border-border bg-card p-1 sm:flex font-mono text-xs">
            <button
              type="button"
              onClick={() => switchTo("fr")}
              className={`px-2 py-0.5 text-xs font-bold tracking-wider transition-colors ${
                locale === "fr" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => switchTo("en")}
              className={`px-2 py-0.5 text-xs font-bold tracking-wider transition-colors ${
                locale === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              EN
            </button>
          </div>

          <ThemeToggle />

          <a
            href="#contact"
            className="sliim-btn hidden sm:inline-flex items-center gap-1.5 bg-primary px-5 py-2 text-xs text-primary-foreground shadow-xs"
          >
            {t.common.contactMe}
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="inline-flex h-9 w-9 items-center justify-center border border-border bg-card text-foreground lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`overflow-hidden border-t border-border bg-background/95 backdrop-blur-md transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <div className="space-y-1 px-4 py-3">
          {desktopLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-wider text-muted-foreground transition-colors hover:bg-muted hover:text-primary font-display"
            >
              {t.nav[link.key as keyof typeof t.nav]}
            </a>
          ))}
          <div className="flex items-center gap-2 pt-2 border-t border-border">
            <button
              type="button"
              onClick={() => switchTo("fr")}
              className={`rounded-md px-3 py-1 text-xs font-bold font-display uppercase tracking-wider ${
                locale === "fr" ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground"
              }`}
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => switchTo("en")}
              className={`rounded-md px-3 py-1 text-xs font-bold font-display uppercase tracking-wider ${
                locale === "en" ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
