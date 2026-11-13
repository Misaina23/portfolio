"use client";

import { useState } from "react";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { useLanguage } from "@/lib/i18n";
import { EASE } from "@/lib/motion";

type CategoryFilter = "all" | "web" | "mobile" | "data";

export function Projects() {
  const { locale } = useLanguage();
  const [filter, setFilter] = useState<CategoryFilter>("all");

  const allProjectsList = [
    {
      title: "Videeko Vanilla — Coopérative Vintsy",
      client: locale === "fr" ? "Coopérative Vintsy (mars – sept. 2026)" : "Vintsy Cooperative (Mar – Sep 2026)",
      description: locale === "fr"
        ? "Plateforme agricole intelligente de collecte, de gestion et de suivi des données de production, des producteurs et des parcelles pour la coopérative Vintsy."
        : "Intelligent agricultural platform for collecting, managing and monitoring producer, harvest and parcel data for the Vintsy cooperative.",
      technologies: ["Next.js", "React Native", "Django", "PostgreSQL", "Excel"],
      demo: "https://videeko-vanilla.vercel.app",
      github: "https://github.com/Misaina23/videeko",
      category: "data",
      featured: false,
      highlight: locale === "fr" ? "Plateforme Agricole · 2026" : "AgriTech Platform · 2026",
    },
    {
      title: "Plateforme Association REKOMA",
      client: locale === "fr" ? "Association REKOMA (Commerce & Communauté)" : "REKOMA Association (Community & Store)",
      description: locale === "fr"
        ? "Solution intégrée de gestion communautaire comprenant la gestion des membres & adhésions, un site public vitrine, une boutique de vente d'accessoires solidaires et le suivi des projets."
        : "Complete community platform featuring member management, public showcase site, solidarity accessories store, and project impact monitoring.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"],
      demo: "https://rekoma-318.vercel.app",
      github: "https://github.com/Misaina23/rekoma",
      category: "web",
      featured: true,
      highlight: locale === "fr" ? "Plateforme Phare" : "Featured Platform",
    },
    {
      title: "Gestion de Pointage Personnel",
      client: "MESUPRES — Département DSI (2024)",
      description: locale === "fr"
        ? "Système complet de suivi des présences du personnel avec tableau de bord administratif, horodatage en direct et génération de rapports automatisés."
        : "Staff attendance tracking system with administrative dashboard, automated reports and daily timesheet monitoring.",
      technologies: ["React", "Next.js", "Laravel", "PostgreSQL"],
      demo: "https://pointagemisaina.vercel.app",
      github: "https://github.com/Misaina23/pointage",
      category: "web",
      featured: false,
      highlight: "Déploiement MESUPRES",
    },
    {
      title: "Gestion de Lycée (Lycée Midongy)",
      client: "Établissement Scolaire Midongy Sud",
      description: locale === "fr"
        ? "Portail scolaire complet : inscription des élèves, gestion des classes, attribution des matières, saisie des notes, calcul des moyennes et génération des bulletins."
        : "School management platform: enrollment, class allocation, subject scheduling, grading, and automated report card generation.",
      technologies: ["Vue.js", "Symfony", "MySQL"],
      demo: "https://lycceemidongysud.vercel.app/",
      github: "https://github.com/Misaina23/lycee-midongy",
      category: "web",
      featured: false,
      highlight: "Plateforme Scolaire",
    },
    {
      title: "Suivi Programmes Humanitaires (MEAL)",
      client: "WHH Madagascar — Département MEAL (2025)",
      description: locale === "fr"
        ? "Solutions de suivi-évaluation des programmes d'aide humanitaire : collecte mobile CommCare, interfaces de gestion et outils de reporting pour le suivi des bénéficiaires."
        : "Monitoring and evaluation solutions for humanitarian aid programs: CommCare mobile collection, management interfaces and beneficiary reporting.",
      technologies: ["CommCare", "Next.js", "Django", "PostgreSQL", "Excel"],
      github: "https://github.com/Misaina23",
      category: "data",
      featured: false,
      highlight: "MEAL & Humanitaire",
    },
    {
      title: "Distribution de Kits Scolaires",
      client: "CISCO Midongy Atsimo (2023)",
      description: locale === "fr"
        ? "Application de gestion de la distribution de kits scolaires avec système complet de suivi logistique, traçabilité des dotations et pilotage."
        : "School kit distribution management application with complete logistics tracking and reporting.",
      technologies: ["React", "Django", "MySQL"],
      github: "https://github.com/Misaina23",
      category: "web",
      featured: false,
      highlight: "Application Éducative",
    },
    {
      title: "Bases de Données Biodiversité",
      client: "Conservation International, Fianarantsoa (2023)",
      description: locale === "fr"
        ? "Construction, traitement et nettoyage des bases de données de bénéficiaires et conception de systèmes de suivi pour des projets de conservation de la biodiversité."
        : "Design, processing and cleaning of beneficiary databases and monitoring systems for biodiversity conservation projects.",
      technologies: ["SQL", "Python", "Excel", "Power BI"],
      github: "https://github.com/Misaina23",
      category: "data",
      featured: false,
      highlight: "Data & Conservation",
    },
    {
      title: "Application de Suivi de Dépenses",
      client: "Projet Mobile Personnel (Expense Tracker)",
      description: locale === "fr"
        ? "Application mobile développée avec Flutter et Dart permettant le suivi en temps réel des dépenses, la catégorisation budgétaire et le calcul des soldes mensuels."
        : "Mobile expense tracker built with Flutter and Dart for daily financial monitoring and budget categorization.",
      technologies: ["Flutter", "Dart", "SQLite"],
      github: "https://github.com/Misaina23",
      category: "mobile",
      featured: false,
      highlight: "Mobile Flutter",
    },
    {
      title: "Enquête Policière Intelligente",
      client: "Projet Académique Expert (IA / Logique)",
      description: locale === "fr"
        ? "Système expert basé sur la programmation logique (Prolog) et TypeScript simulant une enquête criminelle : gestion des indices, déduction de faits et scénarios."
        : "Expert system simulation for criminal investigation using logic programming (Prolog rules) and TypeScript interface.",
      technologies: ["Prolog", "TypeScript", "Programmation logique"],
      github: "https://github.com/Misaina23",
      category: "data",
      featured: false,
      highlight: "Système Expert IA",
    },
  ];

  // Never repeat the featured REKOMA showcase inside the "all" grid; show it only when filtering by "web"
  const filteredProjects = filter === "all"
    ? allProjectsList.filter((p) => !p.featured)
    : allProjectsList.filter((p) => p.category === filter);

  return (
    <section id="projets" className="bg-muted/20 py-20 md:py-28 border-t border-border/70 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={locale === "fr" ? "Réalisations" : "Portfolio"}
          title={locale === "fr" ? "Mon portfolio" : "My portfolio"}
          subtitle={
            locale === "fr"
              ? "Sélection de projets web, mobiles et systèmes d'information déployés en production."
              : "Selection of live deployed web, mobile and software engineering projects."
          }
        />

        {/* Sliim Filter Buttons */}
        <div className="mb-12 flex flex-wrap justify-center gap-2 font-mono text-xs">
          {[
            { key: "all", fr: "Tous les projets", en: "All Projects" },
            { key: "web", fr: "Plateformes Web", en: "Web Platforms" },
            { key: "mobile", fr: "Applications Mobile", en: "Mobile Apps" },
            { key: "data", fr: "Systèmes & Données", en: "Data & Systems" },
          ].map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setFilter(cat.key as CategoryFilter)}
              className={`sliim-btn px-5 py-2.5 transition-all text-xs uppercase font-semibold ${
                filter === cat.key
                  ? "bg-primary text-primary-foreground shadow"
                  : "border border-border bg-card text-muted-foreground hover:border-primary hover:text-foreground"
              }`}
            >
              {locale === "fr" ? cat.fr : cat.en}
            </button>
          ))}
        </div>

        {/* Featured Project Showcase: REKOMA Association (shown exclusively in "all" view, omitted from grid below) */}
        {filter === "all" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mb-12 overflow-hidden rounded-xl border-2 border-primary/40 bg-card shadow-lg"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="p-6 sm:p-8 lg:col-span-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/30 px-3 py-1 rounded-sm">
                      <Sparkles className="h-3 w-3" />
                      Projet Phare · REKOMA
                    </span>
                    <span className="font-mono text-xs font-bold text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-sm">
                      ● Démo en Ligne Active
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground font-display">
                    Plateforme Association REKOMA
                  </h3>

                  <p className="mt-1 text-xs font-mono font-semibold text-primary uppercase tracking-wide">
                    Portail Associatif, Membres & Commerce Solidaire
                  </p>

                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground font-mono">
                    {locale === "fr"
                      ? "Plateforme complète développée pour l'association REKOMA assurant la visibilité des initiatives, la gestion centralisée des membres et adhésions, une boutique e-commerce pour financer les actions par la vente d'accessoires solidaires, et un outil de pilotage des projets sur le terrain."
                      : "Complete platform for REKOMA Association: public showcase site, centralized member management, charity e-commerce store for solidarity accessories, and field project tracking."}
                  </p>

                  {/* Feature bullet list */}
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-primary rounded-full" />
                      <span>Gestion des membres & cotisations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-primary rounded-full" />
                      <span>Boutique d&apos;accessoires REKOMA</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-primary rounded-full" />
                      <span>Site vitrine & actualités officielles</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-primary rounded-full" />
                      <span>Pilotage et suivi d&apos;impact des projets</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3 pt-5 border-t border-border">
                  <a
                    href="https://rekoma-318.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sliim-btn inline-flex items-center gap-2 bg-primary px-6 py-3 text-xs text-primary-foreground shadow transition-transform hover:-translate-y-0.5"
                  >
                    <span>Ouvrir la Démo (rekoma-318)</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href="https://github.com/Misaina23/rekoma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sliim-btn inline-flex items-center gap-2 border border-border bg-card px-5 py-3 text-xs text-foreground transition-all hover:border-primary hover:text-primary"
                  >
                    <FaGithub className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* Right column tech stack & deployment info */}
              <div className="p-6 sm:p-8 lg:col-span-4 bg-muted/40 border-t lg:border-t-0 lg:border-l border-border flex flex-col justify-between font-mono">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-4">
                    Stack Technologique
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"].map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-semibold text-foreground bg-card border border-border px-2.5 py-1 rounded-sm shadow-2xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 space-y-2 text-xs text-muted-foreground border-t border-border/60 pt-4">
                    <p><strong className="text-foreground">Déploiement:</strong> Vercel Production</p>
                    <p><strong className="text-foreground">Domaine:</strong> rekoma-318.vercel.app</p>
                    <p><strong className="text-foreground">Statut:</strong> En ligne</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60">
                  <span className="text-[11px] text-primary font-bold">
                    ✓ Conçu & développé par DevMisaina
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Unified Projects Grid */}
        <motion.div layout className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-xs transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg"
              >
                {/* Header Strip */}
                <div className="flex items-center justify-between border-b border-border bg-muted/40 px-5 py-3.5 font-mono text-xs">
                  <span className="font-semibold text-primary uppercase tracking-wider text-[11px]">
                    {project.highlight}
                  </span>
                  {project.demo && project.demo !== "#" && (
                    <span className="inline-flex items-center gap-1 text-[10px] text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-xs">
                      ● Live
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h4 className="text-lg font-bold text-foreground font-display group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="mt-1 text-xs text-muted-foreground font-mono font-medium">
                    {project.client}
                  </p>

                  <p className="mt-3.5 flex-1 text-xs leading-relaxed text-muted-foreground font-mono">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5 pt-3 border-t border-border/60">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] font-semibold text-foreground bg-muted/60 px-2 py-0.5 rounded-xs border border-border/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-2 pt-4 border-t border-border">
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sliim-btn inline-flex flex-1 items-center justify-center gap-1.5 border border-border bg-card px-3 py-2.5 text-xs text-foreground transition-all hover:border-primary hover:text-primary"
                      >
                        <FaGithub className="h-3.5 w-3.5" />
                        <span>GitHub</span>
                      </a>
                    )}
                    {project.demo && project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sliim-btn inline-flex flex-1 items-center justify-center gap-1.5 bg-primary px-3 py-2.5 text-xs text-primary-foreground shadow transition-transform hover:-translate-y-0.5"
                      >
                        <span>Voir Démo</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
