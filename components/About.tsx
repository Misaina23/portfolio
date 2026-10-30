"use client";

import { Code2, Database, Rocket, Download, Mail, User } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { profile } from "@/lib/data";
import { useAbout, useT, useLanguage } from "@/lib/i18n";

const icons = {
  code: Code2,
  database: Database,
  rocket: Rocket,
};

export function About() {
  const about = useAbout();
  const t = useT();
  const { locale } = useLanguage();
  const cvHref = locale === "fr" ? "/documents/sainacv.PDF" : "/documents/ResumeSaina.pdf";

  const personalInfo = [
    { label: locale === "fr" ? "Prénom" : "First Name", value: profile.firstName },
    { label: locale === "fr" ? "Nom" : "Last Name", value: profile.lastName },
    { label: locale === "fr" ? "Nationalité" : "Nationality", value: "Malagasy" },
    { label: locale === "fr" ? "Disponibilité" : "Freelance", value: locale === "fr" ? "Disponible" : "Available" },
    { label: locale === "fr" ? "Téléphone" : "Phone", value: profile.phone },
    { label: locale === "fr" ? "Email" : "Email", value: profile.email },
    { label: locale === "fr" ? "Ville" : "Address", value: profile.location },
    { label: locale === "fr" ? "Langues" : "Languages", value: locale === "fr" ? "Français, Anglais, Malagasy" : "French, English, Malagasy" },
  ];

  const stats = [
    { value: "3+", label: locale === "fr" ? "Années d'expérience" : "Years of Experience" },
    { value: "10+", label: locale === "fr" ? "Projets réalisés" : "Completed Projects" },
    { value: "4+", label: locale === "fr" ? "Stages & missions" : "Companies & NGOs" },
    { value: "12+", label: locale === "fr" ? "Technologies" : "Mastered Tools" },
  ];

  return (
    <section id="apropos" className="bg-background py-20 md:py-28 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          subtitle={t.about.subtitle}
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Personal info & Bio */}
          <div className="lg:col-span-7 space-y-8">
            <Reveal>
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 pb-5 border-b border-border">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold uppercase tracking-tight text-foreground font-display">
                      {locale === "fr" ? "Informations Personnelles" : "Personal Information"}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {locale === "fr" ? "Profil & coordonnées directes" : "Profile & direct contact"}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {about.description}
                </p>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {personalInfo.map((info) => (
                    <div key={info.label} className="flex items-center gap-2 border-b border-border/50 pb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground min-w-[90px]">
                        {info.label}:
                      </span>
                      <span className="text-sm font-semibold text-foreground truncate">
                        {info.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-4 pt-4 border-t border-border">
                  <a
                    href={cvHref}
                    download
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow transition-transform hover:-translate-y-0.5 font-display"
                  >
                    <Download className="h-4 w-4" />
                    {t.common.downloadCv}
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-xs font-bold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary font-display"
                  >
                    <Mail className="h-4 w-4" />
                    {t.common.contactMe}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Statistics & Key Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={0.1}>
              {/* Sliim-style Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-transform hover:-translate-y-1 hover:border-primary/50"
                  >
                    <p className="text-3xl sm:text-4xl font-extrabold text-primary font-display">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Core Capabilities */}
            <Reveal delay={0.2} className="space-y-4">
              {(about.highlights as typeof about.highlights).map((h) => {
                const Icon = icons[h.icon as keyof typeof icons] || Code2;
                return (
                  <div
                    key={h.title}
                    className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-transform hover:-translate-y-1 hover:border-primary/40 shadow-sm"
                  >
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wide text-foreground font-display">
                        {h.title}
                      </h4>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {h.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
