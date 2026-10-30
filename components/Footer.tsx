"use client";

import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { profile } from "@/lib/data";
import { useT, useLanguage } from "@/lib/i18n";

const links = [
  { href: "#accueil", key: "home" },
  { href: "#apropos", key: "about" },
  { href: "#competences", key: "skills" },
  { href: "#experience", key: "experience" },
  { href: "#projets", key: "projects" },
  { href: "#contact", key: "contact" },
];

export function Footer() {
  const t = useT();
  const { locale } = useLanguage();

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Brand & bio with real photo */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3.5 mb-3">
              <Image
                src="/images/saina-real.jpg"
                alt="Saina Miaramanana"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover object-top border-2 border-primary shadow-sm"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="text-base font-bold text-foreground font-display block leading-tight">
                  ANDRIANISAINA <span className="text-primary italic font-serif">Nanga Miaramanana</span>
                </span>
                <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider block">
                  Développeur Full Stack · Madagascar
                </span>
              </div>
            </div>
            <p className="mt-3 max-w-md text-xs sm:text-sm leading-relaxed text-muted-foreground font-mono">
              {t.footer.description}
            </p>
            <div className="mt-5 flex gap-2">
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-muted/30 text-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5"
              >
                <FaLinkedin className="h-4 w-4" />
              </a>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-muted/30 text-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5"
              >
                <FaGithub className="h-4 w-4" />
              </a>
              <a
                href={profile.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-muted/30 text-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5"
              >
                <FaXTwitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground font-display pb-2 border-b border-border">
              {t.common.quickLinks}
            </h4>
            <ul className="mt-4 space-y-2 text-xs font-semibold uppercase tracking-wider">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-muted-foreground transition-colors hover:text-primary">
                    {t.nav[l.key as keyof typeof t.nav]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact coordinates */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground font-display pb-2 border-b border-border">
              {t.common.contact}
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                <a href={`mailto:${profile.email}`} className="hover:text-foreground transition-colors">
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:text-foreground transition-colors">
                  {profile.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                <span>{profile.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.fullName}. {t.common.rights}</p>
          <p className="font-medium text-foreground">
            {locale === "fr" ? "Inspiré du template Sliim par Slim Hamdi" : "Inspired by Sliim template by Slim Hamdi"}
          </p>
        </div>
      </div>
    </footer>
  );
}
