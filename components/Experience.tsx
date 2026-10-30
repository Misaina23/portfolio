"use client";

import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { useExperiences, useT } from "@/lib/i18n";
import { techIcon } from "@/lib/data";
import { EASE } from "@/lib/motion";

export function Experience() {
  const experiences = useExperiences();
  const t = useT();

  return (
    <section id="experience" className="bg-background py-20 md:py-28 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.experience.eyebrow}
          title={t.experience.title}
          subtitle={t.experience.subtitle}
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical timeline spine */}
          <span className="absolute left-4 top-2 h-[calc(100%-1rem)] w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const Icon = techIcon[exp.technologies[0]] ?? Briefcase;
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={exp.company + exp.period}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className={`relative pl-12 md:pl-0 ${left ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"}`}
                >
                  {/* Timeline node */}
                  <span className="absolute left-1 top-2 grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground font-bold shadow md:left-1/2 md:-translate-x-1/2">
                    <Briefcase className="h-3.5 w-3.5" />
                  </span>

                  <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 border border-primary/30 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-primary font-display">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </span>
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        {exp.company}
                      </span>
                    </div>

                    <h3 className="mt-3 text-base font-bold text-foreground font-display">
                      {exp.role}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => {
                        const Tech = techIcon[tech] ?? Icon;
                        return (
                          <span
                            key={tech}
                            className="inline-flex items-center gap-1 rounded-md border border-border bg-muted/60 px-2.5 py-0.5 text-[11px] font-semibold text-foreground"
                          >
                            <Tech className="h-3 w-3 text-primary" />
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
