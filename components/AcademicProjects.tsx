"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link2, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { SectionHeading } from "./SectionHeading";
import { useAcademicProjects, useT } from "@/lib/i18n";
import { techIcon } from "@/lib/data";
import { EASE } from "@/lib/motion";

const filters = [
  { key: "Tous", fr: "Tous", en: "All" },
  { key: "Web", fr: "Web", en: "Web" },
  { key: "Mobile", fr: "Mobile", en: "Mobile" },
  { key: "Full Stack", fr: "Full Stack", en: "Full Stack" },
  { key: "Data Management", fr: "Data", en: "Data" },
] as const;
type Filter = (typeof filters)[number]["key"];

export function AcademicProjects() {
  const [filter, setFilter] = useState<Filter>("Tous");
  const academicProjects = useAcademicProjects();
  const t = useT();

  const featured = academicProjects.find((p) => p.featured);
  const others = academicProjects.filter((p) => !p.featured);
  const list =
    filter === "Tous"
      ? others
      : others.filter((p) => p.categories.includes(filter as never));

  return (
    <section id="academique" className="bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.academicProjects.eyebrow}
          title={t.academicProjects.title}
          subtitle={t.academicProjects.subtitle}
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                filter === f.key
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card text-muted-foreground hover:text-primary"
              }`}
            >
              {t.common.all === "All" ? f.en : f.fr}
            </button>
          ))}
        </div>

        {featured && filter === "Tous" && (
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="group mb-8 grid grid-cols-1 overflow-hidden rounded-3xl border border-primary/30 bg-card shadow-lg transition-all hover:shadow-2xl lg:grid-cols-5"
          >
            <div className="relative flex items-center justify-center bg-gradient-to-br from-primary/25 via-accent to-cyan-400/10 p-8 lg:col-span-2">
              <div className="absolute inset-0 bg-grid opacity-40" />
              <span className="relative grid h-24 w-24 place-items-center rounded-3xl border border-border bg-card/80 text-primary backdrop-blur">
                <featured.icon className="h-12 w-12" />
              </span>
            </div>
            <div className="flex flex-col p-7 lg:col-span-3">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Sparkles className="h-3.5 w-3.5" /> {t.academicProjects.featured}
              </span>
              <h3 className="mt-3 text-2xl font-bold text-foreground">{featured.title}</h3>
              <p className="text-sm font-medium text-primary">{featured.context}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {featured.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {featured.technologies.map((t2) => {
                  const Tech = techIcon[t2] ?? Link2;
                  return (
                    <span
                      key={t2}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-2.5 py-1 text-xs font-medium text-foreground"
                    >
                      <Tech className="h-3.5 w-3.5 text-primary" />
                      {t2}
                    </span>
                  );
                })}
              </div>

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {t.common.features}
                </p>
                <ul className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                  {featured.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-muted px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <FaGithub className="h-4 w-4" /> {t.common.github}
                </a>
                <a
                  href={featured.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <Link2 className="h-4 w-4" /> {t.common.demo}
                </a>
              </div>
            </div>
          </motion.article>
        )}

        <motion.div layout className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((project, i) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-2xl"
              >
                <div className="relative flex h-32 items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-accent to-cyan-400/10">
                  <div className="absolute inset-0 bg-grid opacity-40" />
                  <span className="relative grid h-16 w-16 place-items-center rounded-2xl border border-border bg-card/80 text-primary backdrop-blur transition-transform duration-500 group-hover:scale-110">
                    <project.icon className="h-8 w-8" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-medium uppercase tracking-wide text-primary">
                    {project.context}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-foreground">{project.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((t2) => {
                      const Tech = techIcon[t2] ?? Link2;
                      return (
                        <span
                          key={t2}
                          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-2.5 py-1 text-xs font-medium text-foreground"
                        >
                          <Tech className="h-3.5 w-3.5 text-primary" />
                          {t2}
                        </span>
                      );
                    })}
                  </div>

                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {t.common.features}
                    </p>
                    <ul className="mt-2 space-y-1">
                      {project.features.slice(0, 4).map((feat) => (
                        <li key={feat} className="flex items-start gap-2 text-sm text-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-muted px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      <FaGithub className="h-4 w-4" /> {t.common.github}
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      <Link2 className="h-4 w-4" /> {t.common.demo}
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {list.length === 0 && (
          <p className="mt-10 text-center text-muted-foreground">
            {t.academicProjects.noResults}
          </p>
        )}
      </div>
    </section>
  );
}
