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
    <section id="academique" className="bg-muted/30 py-20 md:py-28 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.academicProjects.eyebrow}
          title={t.academicProjects.title}
          subtitle={t.academicProjects.subtitle}
        />

        {/* Sliim-style filter buttons */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={`rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all font-display ${
                filter === f.key
                  ? "bg-primary text-primary-foreground shadow"
                  : "border border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {t.common.all === "All" ? f.en : f.fr}
            </button>
          ))}
        </div>

        {featured && filter === "Tous" && (
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="group mb-10 grid grid-cols-1 overflow-hidden rounded-2xl border border-primary/40 bg-card shadow-md transition-all hover:shadow-lg lg:grid-cols-12"
          >
            <div className="flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border bg-muted/60 p-8 lg:col-span-5">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 border border-primary/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary font-display">
                  <Sparkles className="h-3.5 w-3.5" /> {t.academicProjects.featured}
                </span>
                <h3 className="mt-4 text-2xl font-bold uppercase tracking-tight text-foreground font-display">
                  {featured.title}
                </h3>
                <p className="mt-1 text-xs font-semibold text-primary uppercase tracking-wide">
                  {featured.context}
                </p>
              </div>

              <div className="mt-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-card border border-border shadow-xs text-primary">
                <featured.icon className="h-12 w-12" />
              </div>
            </div>

            <div className="flex flex-col p-7 lg:col-span-7 justify-between">
              <div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {featured.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {featured.technologies.map((t2) => {
                    const Tech = techIcon[t2] ?? Link2;
                    return (
                      <span
                        key={t2}
                        className="inline-flex items-center gap-1 rounded-md border border-border bg-muted/60 px-2.5 py-0.5 text-xs font-semibold text-foreground"
                      >
                        <Tech className="h-3 w-3 text-primary" />
                        {t2}
                      </span>
                    );
                  })}
                </div>

                <div className="mt-5 border-t border-border pt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-foreground font-display">
                    {t.common.features}
                  </p>
                  <ul className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {featured.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex gap-3 pt-4 border-t border-border">
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary font-display"
                >
                  <FaGithub className="h-4 w-4" /> {t.common.github}
                </a>
                <a
                  href={featured.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow transition-transform hover:-translate-y-0.5 font-display"
                >
                  <Link2 className="h-4 w-4" /> {t.common.demo}
                </a>
              </div>
            </div>
          </motion.article>
        )}

        <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((project, i) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
              >
                <div className="flex items-center justify-between border-b border-border bg-muted/40 px-5 py-4">
                  <div className="flex items-center gap-2.5">
                    <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary">
                      <project.icon className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-foreground font-display truncate max-w-[180px]">
                      {project.context}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-bold text-foreground font-display">{project.title}</h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.map((t2) => {
                      const Tech = techIcon[t2] ?? Link2;
                      return (
                        <span
                          key={t2}
                          className="inline-flex items-center gap-1 rounded-md border border-border bg-muted/50 px-2 py-0.5 text-[11px] font-semibold text-foreground"
                        >
                          <Tech className="h-3 w-3 text-primary" />
                          {t2}
                        </span>
                      );
                    })}
                  </div>

                  <div className="mt-5 flex gap-2 pt-4 border-t border-border">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border bg-card px-3 py-2 text-xs font-bold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary font-display"
                    >
                      <FaGithub className="h-3.5 w-3.5" /> {t.common.github}
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow transition-transform hover:-translate-y-0.5 font-display"
                    >
                      <Link2 className="h-3.5 w-3.5" /> {t.common.demo}
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {list.length === 0 && (
          <p className="mt-10 text-center text-sm font-semibold text-muted-foreground">
            {t.academicProjects.noResults}
          </p>
        )}
      </div>
    </section>
  );
}
