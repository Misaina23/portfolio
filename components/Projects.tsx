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
    <section id="projets" className="bg-background py-20 md:py-28">
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: EASE }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-2xl"
            >
              <div className="relative h-40 overflow-hidden bg-gradient-to-br from-primary/20 via-accent to-cyan-400/10">
                <div className="absolute inset-0 bg-grid opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-black tracking-tighter text-primary/30 transition-transform duration-500 group-hover:scale-110">
                    {project.title
                      .split(" ")
                      .slice(0, 2)
                      .map((w) => w[0])
                      .join("")}
                  </span>
                </div>
                <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-xl border border-border bg-card/80 text-primary backdrop-blur">
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-medium uppercase tracking-wide text-primary">
                  {project.client}
                </p>
                <h3 className="mt-1 text-lg font-bold text-foreground">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => {
                    const Tech = techIcon[tech] ?? Link2;
                    return (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-2.5 py-1 text-xs font-medium text-foreground"
                      >
                        <Tech className="h-3.5 w-3.5 text-primary" />
                        {tech}
                      </span>
                    );
                  })}
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-muted px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <FaGithub className="h-4 w-4" />
                    {t.common.github}
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    <Link2 className="h-4 w-4" />
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
