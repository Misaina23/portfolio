"use client";

import { Mail, Phone } from "lucide-react";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { profile } from "@/lib/data";
import { useT } from "@/lib/i18n";

const links = [
  { href: "#accueil", key: "home" },
  { href: "#apropos", key: "about" },
  { href: "#competences", key: "skills" },
  { href: "#projets", key: "projects" },
  { href: "#contact", key: "contact" },
];

export function Footer() {
  const t = useT();
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <span className="text-xl font-bold tracking-tight text-foreground">
              Dev<span className="text-primary">Misaina</span>
            </span>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {t.footer.description}
            </p>
            <div className="mt-5 flex gap-3">
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                <FaLinkedin className="h-4 w-4" />
              </a>
              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-10 w-10 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                <FaGithub className="h-4 w-4" />
              </a>
              <a href={profile.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="grid h-10 w-10 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                <FaXTwitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">{t.common.quickLinks}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-primary">{t.nav[l.key as keyof typeof t.nav]}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">{t.common.contact}</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" /> {profile.email}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" /> {profile.phone}
              </li>
              <li>{profile.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.fullName}. {t.common.rights}</p>
          <p>{t.common.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
