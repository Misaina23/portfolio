"use client";

import { ArrowUpRight, Link2 } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { useProjects, useT } from "@/lib/i18n";
import { techIcon } from "@/lib/data";
import { EASE } from "@/lib/motion";

export function Projects() {
  const projects = useProjects();
  const t = useT();

  return (
    <section id="projets" className="bg-background py-20 md:py-28 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: EASE }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
            >
              {/* Clean Sliim Project Header Banner */}
              <div className="relative h-36 overflow-hidden bg-muted flex items-center justify-between px-6 border-b border-border">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary font-display block">
                    {project.client}
                  </span>
                  <p className="mt-1 text-base font-bold text-foreground font-display">
                    {project.title}
                  </p>
                </div>
                <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg border border-border bg-card text-foreground transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="flex-1 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => {
                    const Tech = techIcon[tech] ?? Link2;
                    return (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1 rounded-md border border-border bg-muted/50 px-2.5 py-0.5 text-[11px] font-semibold text-foreground"
                      >
                        <Tech className="h-3 w-3 text-primary" />
                        {tech}
                      </span>
                    );
                  })}
                </div>

                <div className="mt-6 flex gap-2 pt-4 border-t border-border">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border bg-card px-3 py-2 text-xs font-bold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary font-display"
                  >
                    <FaGithub className="h-3.5 w-3.5" />
                    {t.common.github}
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow transition-transform hover:-translate-y-0.5 font-display"
                  >
                    <Link2 className="h-3.5 w-3.5" />
                    {t.common.demo}
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
