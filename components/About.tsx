"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Download, 
  Mail, 
  Briefcase, 
  GraduationCap, 
  CheckCircle2 
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { profile, experiences, education } from "@/lib/data";
import { useLanguage, useT } from "@/lib/i18n";
import { EASE } from "@/lib/motion";

export function About() {
  const { locale } = useLanguage();
  const t = useT();
  const [activeTab, setActiveTab] = useState<"all" | "experience" | "education">("all");
  const cvHref = locale === "fr" ? "/documents/sainacv.PDF" : "/documents/ResumeSaina.pdf";

  const personalInfo = [
    { label: locale === "fr" ? "Prénom" : "First Name", value: profile.firstName },
    { label: locale === "fr" ? "Nom" : "Last Name", value: profile.lastName },
    { label: locale === "fr" ? "Nationalité" : "Nationality", value: "Malagasy" },
    { label: locale === "fr" ? "Diplôme" : "Degree", value: "BAC+3 Génie Logiciel (ENI)" },
    { label: locale === "fr" ? "Téléphone" : "Phone", value: profile.phone },
    { label: locale === "fr" ? "Email" : "Email", value: profile.email },
    { label: locale === "fr" ? "Localisation" : "Location", value: profile.location },
    { label: locale === "fr" ? "Langues" : "Languages", value: locale === "fr" ? "Français, Anglais, Malagasy" : "French, English, Malagasy" },
  ];

  return (
    <section id="apropos" className="bg-background py-20 md:py-28 border-t border-border/70 relative overflow-hidden">
      {/* Sliim subtle dotted background decor */}
      <div className="absolute top-10 right-0 h-72 w-72 sliim-dotted-shape pointer-events-none rounded-full" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow={locale === "fr" ? "À propos" : "About"}
          title={locale === "fr" ? "À propos de moi" : "About me"}
          subtitle={locale === "fr" ? "Découvrez mon parcours, mes compétences et mes motivations professionnelles." : "Learn more about my background, skills and professional journey."}
        />

        {/* Sliim Personal Infos Row: Real Photo on Left, Details on Right */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10 items-center">
          
          {/* Left Column: Saina's Real Photo with Sliim Frame */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Sliim accent corner marks */}
              <div className="absolute -top-3 -left-3 h-12 w-12 border-t-2 border-l-2 border-primary pointer-events-none z-10" />
              <div className="absolute -bottom-3 -right-3 h-12 w-12 border-b-2 border-r-2 border-primary pointer-events-none z-10" />

              <div className="overflow-hidden rounded-lg border border-border bg-card shadow-xl group">
                <Image
                  src="/images/saina-real.jpg"
                  alt={profile.fullName}
                  width={520}
                  height={520}
                  className="w-full h-[420px] object-cover object-top transition-transform duration-500 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                  priority
                />
                <div className="p-4 bg-muted/60 border-t border-border flex items-center justify-between font-mono text-xs">
                  <div>
                    <p className="font-bold text-foreground">{profile.fullName}</p>
                    <p className="text-[11px] text-primary">{profile.title}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-emerald-500 font-semibold text-[11px]">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Disponible
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Personal Details in IBM Plex Mono */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground font-display">
              {locale === "fr" ? "Développeur Full Stack Web & Mobile" : "Full Stack Web & Mobile Developer"}
            </h3>

            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground font-mono">
              {locale === "fr"
                ? "Diplômé de l'École Nationale d'Informatique (ENI) de Fianarantsoa en Génie Logiciel et Base de Données, je conçois des plateformes web scalables et des applications mobiles adaptées aux exigences réelles du terrain. Spécialisé dans React, Next.js, Vue.js, Laravel et Django, j'associe rigueur algorithmique et ergonomie soignée."
                : "Graduate of the National School of Computer Science (ENI) in Software Engineering & Databases. I build scalable web platforms and robust mobile applications tailored to real-world demands using modern full-stack architectures."}
            </p>

            {/* 2-Column Personal Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 font-mono text-xs">
              {personalInfo.map((info) => (
                <div key={info.label} className="flex items-center border-b border-border/70 pb-2">
                  <span className="text-muted-foreground font-semibold min-w-[105px] uppercase tracking-wider text-[11px]">
                    {info.label}:
                  </span>
                  <span className="text-foreground font-bold truncate">
                    {info.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Sliim Buttons */}
            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href={cvHref}
                download
                className="sliim-btn inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-xs text-primary-foreground shadow transition-transform hover:-translate-y-0.5"
              >
                <Download className="h-4 w-4" />
                <span>{t.common.downloadCv}</span>
              </a>

              <a
                href="#contact"
                className="sliim-btn inline-flex items-center gap-2 border border-border bg-card px-7 py-3.5 text-xs text-foreground transition-all hover:border-primary hover:text-primary hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" />
                <span>{t.common.contactMe}</span>
              </a>
            </div>
          </motion.div>

        </div>

        {/* Sliim Resume Section: Experience & Education */}
        <div id="experience" className="mt-24 pt-16 border-t border-border/70">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display capitalize">
              {locale === "fr" ? (
                <>
                  Mon <span className="text-primary italic font-serif">Parcours</span>
                </>
              ) : (
                <>
                  My <span className="text-primary italic font-serif">Resume</span>
                </>
              )}
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-muted-foreground font-mono">
              {locale === "fr"
                ? "Expériences professionnelles en entreprise, ONG et institutions, complétées par une formation académique certifiée."
                : "Professional experience in companies, NGOs and institutions, paired with certified academic training."}
            </p>

            {/* Resume Filter Tabs */}
            <div className="mt-6 inline-flex p-1 rounded-sm border border-border bg-card font-mono text-xs">
              <button
                type="button"
                onClick={() => setActiveTab("all")}
                className={`px-4 py-1.5 transition-colors uppercase font-semibold ${
                  activeTab === "all" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {locale === "fr" ? "Tout afficher" : "All"}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("experience")}
                className={`px-4 py-1.5 transition-colors uppercase font-semibold ${
                  activeTab === "experience" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {locale === "fr" ? "Expérience" : "Experience"}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("education")}
                className={`px-4 py-1.5 transition-colors uppercase font-semibold ${
                  activeTab === "education" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {locale === "fr" ? "Formation" : "Education"}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Experience Column */}
            {(activeTab === "all" || activeTab === "experience") && (
              <div className="space-y-6">
                <div className="flex items-center gap-2.5 pb-3 border-b border-border text-foreground font-mono font-bold text-sm uppercase tracking-wider">
                  <Briefcase className="h-4 w-4 text-primary" />
                  <span>{locale === "fr" ? "Expériences Professionnelles" : "Professional Experience"}</span>
                </div>

                <div className="space-y-5">
                  {experiences.map((exp, i) => (
                    <motion.div
                      key={exp.company + exp.period}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
                      className="rounded-lg border border-border bg-card p-5 shadow-xs transition-all hover:border-primary/60"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-xs font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-sm">
                          {exp.period}
                        </span>
                        <span className="font-mono text-[11px] text-muted-foreground font-semibold uppercase truncate">
                          {exp.company}
                        </span>
                      </div>

                      <h4 className="mt-3 text-base font-bold text-foreground font-display">
                        {exp.role}
                      </h4>

                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground font-mono">
                        {exp.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-border/60">
                        {exp.technologies.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[10px] font-semibold text-foreground bg-muted/60 px-2 py-0.5 rounded-xs border border-border/80"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Education Column */}
            {(activeTab === "all" || activeTab === "education") && (
              <div className="space-y-6">
                <div className="flex items-center gap-2.5 pb-3 border-b border-border text-foreground font-mono font-bold text-sm uppercase tracking-wider">
                  <GraduationCap className="h-4 w-4 text-primary" />
                  <span>{locale === "fr" ? "Formation & Certifications" : "Education & Certifications"}</span>
                </div>

                <div className="space-y-5">
                  {education.map((edu, i) => (
                    <motion.div
                      key={edu.school + edu.degree}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
                      className="rounded-lg border border-border bg-card p-5 shadow-xs transition-all hover:border-primary/60"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-xs font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-sm">
                          {edu.degree}
                        </span>
                        <span className="font-mono text-[11px] text-muted-foreground font-semibold uppercase truncate">
                          {edu.school}
                        </span>
                      </div>

                      <h4 className="mt-3 text-base font-bold text-foreground font-display">
                        {edu.field}
                      </h4>

                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground font-mono">
                        {edu.description}
                      </p>

                      <ul className="mt-3.5 space-y-1.5 pt-3 border-t border-border/60">
                        {edu.skills.slice(0, 3).map((s) => (
                          <li key={s} className="flex items-center gap-2 text-[11px] text-muted-foreground font-mono">
                            <CheckCircle2 className="h-3 w-3 text-primary flex-shrink-0" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
