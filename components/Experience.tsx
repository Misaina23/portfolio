"use client";

import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { experiences, techIcon } from "@/lib/data";
import { EASE } from "@/lib/motion";

export function Experience() {
  return (
    <section id="experience" className="bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Parcours"
          title="Expérience professionnelle"
          subtitle="Mes stages et prestations, du secteur public à l'humanitaire."
        />

        <div className="relative mx-auto max-w-3xl">
          <span className="absolute left-4 top-2 h-[calc(100%-1rem)] w-px bg-border md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const Icon = techIcon[exp.technologies[0]] ?? Briefcase;
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: EASE }}
                  className={`relative pl-12 md:pl-0 ${left ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"}`}
                >
                  <span
                    className="absolute left-0 top-2 grid h-8 w-8 place-items-center rounded-full border-2 text-white shadow-lg md:left-1/2 md:-translate-x-1/2"
                    style={{ backgroundColor: exp.accent, borderColor: exp.accent }}
                  >
                    <Briefcase className="h-4 w-4" />
                  </span>

                  <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-lg font-bold text-foreground">{exp.company}</h3>
                      <span
                        className="w-fit rounded-full px-3 py-1 text-xs font-semibold text-white"
                        style={{ backgroundColor: exp.accent }}
                      >
                        {exp.period}
                      </span>
                    </div>
                    <p className="mt-1 font-medium text-primary">{exp.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => {
                        const Tech = techIcon[tech] ?? Icon;
                        return (
                          <span
                            key={tech}
                            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-foreground"
                          >
                            <Tech className="h-3.5 w-3.5 text-primary" />
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
