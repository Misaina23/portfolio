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

  // Merge and enrich projects cleanly without duplicate sections
  const allProjectsList = [
    {
      title: "Plateforme Association REKOMA",
      client: "Association REKOMA (Commerce & Communauté)",
      description: locale === "fr"
        ? "Solution intégrée de gestion communautaire comprenant la gestion des membres & adhésions, un site public vitrine, une boutique de vente d'accessoires solidaires, et le suivi des projets sur le terrain."
        : "Complete community platform featuring member management, public showcase site, solidarity accessories store, and project impact monitoring.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"],
      demo: "https://rekoma-318.vercel.app",
      github: "https://github.com/Misaina23/rekoma",
      category: "web",
      featured: true,
      highlight: "Plateforme Phare & Commerce Solidaire",
    },
    {
      title: "Gestion de Pointage Personnel",
      client: "Ministère de l'Enseignement Supérieur",
      description: locale === "fr"
        ? "Système complet de pointage et suivi de présence du personnel avec interface d'administration, horodatage en direct et fiches de pointage automatisées."
        : "Staff attendance tracking system with administrative dashboard, automated reports and daily timesheet monitoring.",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      demo: "https://pointagemisaina.vercel.app",
      github: "https://github.com/Misaina23/pointage",
      category: "web",
      featured: false,
      highlight: "Déploiement Ministère",
    },
    {
      title: "Gestion de Lycée (Lycée Midongy)",
      client: "Établissement Scolaire Midongy",
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
      title: "Plateforme Agricole & Semences",
      client: "Coopérative agricole (Videeko)",
      description: locale === "fr"
        ? "Application de gestion et suivi de la distribution de semences agricoles, inventaire des stocks, traçabilité des parcelles et cartographie statistique."
        : "Agricultural seed distribution tracking system with inventory control, field parcel mapping, and yield statistics.",
      technologies: ["Next.js", "Django", "PostgreSQL"],
      demo: "https://videeko-vanilla.vercel.app",
      github: "https://github.com/Misaina23/videeko",
      category: "data",
      featured: false,
      highlight: "Plateforme Agricole",
    },
    {
      title: "Suivi des Programmes Humanitaires",
      client: "Welthungerhilfe (WHH)",
      description: locale === "fr"
        ? "Outils d'analyse et de reporting pour le suivi des programmes d'aide humanitaire et la gestion des bénéficiaires sur le terrain."
        : "Monitoring and coordination platform for humanitarian aid programs with beneficiary reporting.",
      technologies: ["React", "Next.js", "Laravel", "MySQL"],
      demo: "https://pointagemisaina.vercel.app",
      github: "https://github.com/Misaina23",
      category: "web",
      featured: false,
      highlight: "ONG Humanitaire",
    },
    {
      title: "Enquête Policière Intelligente",
      client: "Projet Académique Expert (IA / Logique)",
      description: locale === "fr"
        ? "Système expert basé sur la programmation logique (Prolog) et TypeScript simulant une enquête criminelle : gestion des indices, déduction de faits et scénarios."
        : "Expert system simulation for criminal investigation using logic programming (Prolog rules) and TypeScript interface.",
      technologies: ["Prolog", "TypeScript", "Programmation logique"],
      demo: "https://rekoma-318.vercel.app",
      github: "https://github.com/Misaina23",
      category: "data",
      featured: false,
      highlight: "Système Expert IA",
    },
    {
      title: "Application de Suivi de Dépenses",
      client: "Projet Mobile Personnel (Expense Tracker)",
      description: locale === "fr"
        ? "Application mobile développée avec Flutter permettant le suivi en temps réel des dépenses, la catégorisation budgétaire et le calcul des soldes mensuels."
        : "Mobile expense tracker built with Flutter for daily financial monitoring and budget categorization.",
      technologies: ["Flutter", "Dart", "SQLite"],
      demo: "https://pointagemisaina.vercel.app",
      github: "https://github.com/Misaina23",
      category: "mobile",
      featured: false,
      highlight: "Mobile Flutter",
    },
    {
      title: "Gestion de Billets d'Avion",
      client: "Application Mobile Voyageurs",
      description: locale === "fr"
        ? "Application mobile React Native de recherche de vols, sélection de sièges, gestion des réservations et émission de billets électroniques."
        : "React Native mobile app for airline ticket booking, flight search, passenger records, and boarding management.",
      technologies: ["React Native", "TypeScript"],
      demo: "https://rekoma-318.vercel.app",
      github: "https://github.com/Misaina23",
      category: "mobile",
      featured: false,
      highlight: "Mobile React Native",
    },
  ];

  const filteredProjects = filter === "all"
    ? allProjectsList
    : allProjectsList.filter((p) => p.category === filter);

  return (
    <section id="projets" className="bg-muted/20 py-20 md:py-28 border-t border-border/70 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={locale === "fr" ? "Réalisations" : "Portfolio"}
          title={locale === "fr" ? "Mon portfolio" : "My portfolio"}
          subtitle={locale === "fr" ? "Sélection de projets web, mobiles et systèmes d'information déployés en production." : "Selection of live deployed web, mobile and software engineering projects."}
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

        {/* Featured Project Showcase: REKOMA Association */}
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
                  {project.demo && project.demo.includes("vercel.app") && (
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
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] font-semibold text-foreground bg-muted/60 px-2 py-0.5 rounded-xs border border-border/70"
                      >
                        {t}
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
                        <span>Code</span>
                      </a>
                    )}
                    {project.demo && (
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
