"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { skillCategories } from "@/lib/data";
import { useT } from "@/lib/i18n";
import { EASE } from "@/lib/motion";

export function Skills() {
  const t = useT();
  return (
    <section id="competences" className="bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.skills.eyebrow}
          title={t.skills.title}
          subtitle={t.skills.subtitle}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {skillCategories.map((cat, ci) => {
            const CatIcon = cat.icon;
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: ci * 0.08, ease: EASE }}
                className="rounded-3xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <CatIcon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{cat.name}</h3>
                </div>

                <div className="mt-6 space-y-5">
                  {cat.skills.map((skill, si) => {
                    const Tech = skill.icon;
                    return (
                      <div key={skill.name}>
                        <div className="mb-1.5 flex items-center justify-between">
                          <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                            <Tech className="h-4 w-4 text-primary" />
                            {skill.name}
                          </span>
                          <span className="text-xs font-semibold text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-primary to-cyan-400"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 1, delay: si * 0.1, ease: EASE }}
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
