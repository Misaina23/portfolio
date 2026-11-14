"use client";

import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { useLanguage } from "@/lib/i18n";
import { EASE } from "@/lib/motion";

export function Projects() {
  const { locale } = useLanguage();

  const projectsList = [
    {
      title: "Plateforme Association REKOMA",
      client:
        locale === "fr"
          ? "Association REKOMA (Commerce & Communauté)"
          : "REKOMA Association (Community & Store)",
      description:
        locale === "fr"
          ? "Solution intégrée de gestion communautaire comprenant la gestion des membres & adhésions, un site public vitrine, une boutique de vente d'accessoires solidaires et le suivi des projets."
          : "Complete community platform featuring member management, public showcase site, solidarity accessories store, and project impact monitoring.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"],
      demo: "https://rekoma-318.vercel.app",
      github: "https://github.com/Misaina23/rekoma",
      highlight: locale === "fr" ? "Association & Commerce Solidaire" : "Community & Store",
    },
    {
      title: "TalentMatch",
      client:
        locale === "fr"
          ? "Plateforme Intelligente de Recrutement & Carrière"
          : "Intelligent Recruitment & Career Platform",
      description:
        locale === "fr"
          ? "Plateforme intelligente de recrutement et de gestion de carrière capable de générer automatiquement un portfolio à partir d'un CV, ou de concevoir un CV optimisé et beaucoup plus pertinent."
          : "Smart recruitment and career platform capable of automatically generating a portfolio from a resume, or designing a sharper, optimized CV.",
      technologies: ["React", "Node.js", "PostgreSQL"],
      github: "https://github.com/Misaina23",
      highlight: locale === "fr" ? "Recrutement & CV IA" : "CareerTech & AI",
    },
    {
      title: "ImmoSmart",
      client:
        locale === "fr"
          ? "Gestion de Location Immobilière Intelligente"
          : "Smart Property & Rental Management",
      description:
        locale === "fr"
          ? "Application intelligente dédiée à la gestion locative et immobilière, automatisant le suivi des biens, des locataires et des réservations."
          : "Smart real estate and rental management application automating property tracking, tenant administration and reservations.",
      technologies: ["Next.js", "Laravel", "PostgreSQL"],
      github: "https://github.com/Misaina23",
      highlight: locale === "fr" ? "Gestion Locative" : "PropTech",
    },
    {
      title: "MisainaCognition",
      client:
        locale === "fr"
          ? "Le Moteur de Connaissance Souverain dédié aux Grandes Organisations"
          : "Sovereign Knowledge Engine for Enterprise Organizations",
      description:
        locale === "fr"
          ? "Fédérez les silos documentaires de votre groupe dans un pipeline certifié BM25 et vecteurs denses. Bénéficiez d'une traçabilité cryptographique des citations et d'une isolation multi-tenant conforme SecNumCloud et PSSI."
          : "Unify your organization's document silos in a certified BM25 and dense vector pipeline with cryptographic citation traceability and SecNumCloud/PSSI multi-tenant isolation.",
      technologies: ["Next.js"],
      github: "https://github.com/Misaina23",
      highlight: locale === "fr" ? "IA Souveraine · SecNumCloud" : "Sovereign AI · SecNumCloud",
    },
    {
      title: "Gestion de Lycée (Lycée Midongy)",
      client: locale === "fr" ? "Établissement Scolaire Midongy Sud" : "Midongy High School",
      description:
        locale === "fr"
          ? "Portail scolaire complet : inscription des élèves, gestion des classes, attribution des matières, saisie des notes, calcul des moyennes et génération des bulletins."
          : "School management platform: enrollment, class allocation, subject scheduling, grading, and automated report card generation.",
      technologies: ["Next.js", "Django", "PostgreSQL"],
      demo: "https://lycceemidongysud.vercel.app/",
      github: "https://github.com/Misaina23/lycee-midongy",
      highlight: locale === "fr" ? "Plateforme Scolaire" : "EdTech Platform",
    },
    {
      title: "Suivi Programmes Humanitaires (MEAL)",
      client: "WHH Madagascar — Département MEAL (2025)",
      description:
        locale === "fr"
          ? "Solutions de suivi-évaluation des programmes d'aide humanitaire : collecte mobile CommCare, interfaces de gestion et outils de reporting pour le suivi des bénéficiaires."
          : "Monitoring and evaluation solutions for humanitarian aid programs: CommCare mobile collection, management interfaces and beneficiary reporting.",
      technologies: ["CommCare", "Next.js", "Django", "PostgreSQL", "Excel"],
      github: "https://github.com/Misaina23",
      highlight: "MEAL & Humanitaire",
    },
    {
      title: "Bases de Données Biodiversité",
      client: "Conservation International, Fianarantsoa (2023)",
      description:
        locale === "fr"
          ? "Construction, traitement et nettoyage des bases de données de bénéficiaires et conception de systèmes de suivi pour des projets de conservation de la biodiversité."
          : "Design, processing and cleaning of beneficiary databases and monitoring systems for biodiversity conservation projects.",
      technologies: ["SQL", "Python", "Excel", "Power BI"],
      github: "https://github.com/Misaina23",
      highlight: "Data & Conservation",
    },
    {
      title: "Application de Suivi de Dépenses",
      client: locale === "fr" ? "Projet Mobile Personnel (Expense Tracker)" : "Personal Mobile Project",
      description:
        locale === "fr"
          ? "Application mobile développée avec Flutter et Dart permettant le suivi en temps réel des dépenses, la catégorisation budgétaire et le calcul des soldes mensuels."
          : "Mobile expense tracker built with Flutter and Dart for daily financial monitoring and budget categorization.",
      technologies: ["Flutter", "Dart", "SQLite"],
      github: "https://github.com/Misaina23",
      highlight: "Mobile Flutter",
    },
    {
      title: "Enquête Policière Intelligente",
      client: locale === "fr" ? "Projet Académique Expert (IA / Logique)" : "Academic Expert System (AI / Logic)",
      description:
        locale === "fr"
          ? "Système expert basé sur la programmation logique (Prolog) et TypeScript simulant une enquête criminelle : gestion des indices, déduction de faits et scénarios."
          : "Expert system simulation for criminal investigation using logic programming (Prolog rules) and TypeScript interface.",
      technologies: ["Prolog", "TypeScript", "Programmation logique"],
      github: "https://github.com/Misaina23",
      highlight: locale === "fr" ? "Système Expert IA" : "AI Expert System",
    },
  ];

  return (
    <section id="projets" className="bg-muted/20 py-20 md:py-28 border-t border-border/70 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={locale === "fr" ? "Réalisations" : "Portfolio"}
          title={locale === "fr" ? "Mes réalisations" : "My projects"}
          subtitle={
            locale === "fr"
              ? "Sélection de plateformes web, systèmes souverains, applications mobiles et outils de gestion de données."
              : "Selection of web platforms, sovereign systems, mobile apps and data management solutions."
          }
        />

        {/* Uniform Projects Grid — no filters, REKOMA uses the exact same card container */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projectsList.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.06, ease: EASE }}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-xs transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg"
            >
              {/* Header Strip */}
              <div className="flex items-center justify-between border-b border-border bg-muted/40 px-5 py-3.5 font-mono text-xs">
                <span className="font-semibold text-primary uppercase tracking-wider text-[11px] truncate">
                  {project.highlight}
                </span>
                {project.demo && project.demo !== "#" && (
                  <span className="inline-flex items-center gap-1 text-[10px] text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-xs shrink-0 ml-2">
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
        </div>
      </div>
    </section>
  );
}
