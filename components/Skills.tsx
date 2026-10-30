"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { skillCategories } from "@/lib/data";
import { useT } from "@/lib/i18n";
import { EASE } from "@/lib/motion";

export function Skills() {
  const t = useT();

  return (
    <section id="competences" className="bg-muted/30 py-20 md:py-28 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.skills.eyebrow}
          title={t.skills.title}
          subtitle={t.skills.subtitle}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, ci) => {
            const CatIcon = cat.icon;
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: ci * 0.07, ease: EASE }}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
              >
                <div className="flex items-center gap-3 pb-4 border-b border-border">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <CatIcon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold uppercase tracking-wide text-foreground font-display">
                    {cat.name}
                  </h3>
                </div>

                <div className="mt-5 space-y-4">
                  {cat.skills.map((skill, si) => {
                    const Tech = skill.icon;
                    return (
                      <div key={skill.name}>
                        <div className="mb-1.5 flex items-center justify-between">
                          <span className="flex items-center gap-2 text-xs font-semibold text-foreground">
                            <Tech className="h-3.5 w-3.5 text-primary" />
                            {skill.name}
                          </span>
                          <span className="text-xs font-bold text-primary font-display">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-muted border border-border/40">
                          <motion.div
                            className="h-full rounded-full bg-primary"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.8, delay: si * 0.06, ease: EASE }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
