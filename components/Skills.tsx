"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { skillCategories } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import { EASE } from "@/lib/motion";

export function Skills() {
  const { locale } = useLanguage();

  return (
    <section id="competences" className="bg-background py-20 md:py-28 border-t border-border/70 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={locale === "fr" ? "Expertise" : "Expertise"}
          title={locale === "fr" ? "Mes compétences" : "My skills"}
          subtitle={locale === "fr" ? "Maîtrise technique full stack, frameworks modernes et modélisation de données." : "Full stack technical mastery, modern frameworks and database modeling."}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, ci) => {
            const CatIcon = cat.icon;
            const categoryIndex = String(ci + 1).padStart(2, "0");
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: ci * 0.06, ease: EASE }}
                className="group relative rounded-sm border border-border bg-card p-6 shadow-xs transition-all hover:border-primary/70 hover:shadow-md"
              >
                {/* Sliim Corner Bracket on hover */}
                <div className="absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-transparent group-hover:border-primary transition-colors pointer-events-none" />

                <div className="flex items-center justify-between pb-4 mb-4 border-b border-border/80">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xs bg-primary/10 text-primary border border-primary/20">
                      <CatIcon className="h-4 w-4" />
                    </div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-foreground font-display">
                      {cat.name}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground/80 font-bold">
                    {"// "}{categoryIndex}
                  </span>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill, si) => {
                    const Tech = skill.icon;
                    return (
                      <div key={skill.name} className="group/skill">
                        <div className="mb-1.5 flex items-center justify-between font-mono text-xs">
                          <span className="flex items-center gap-2 font-medium text-foreground group-hover/skill:text-primary transition-colors">
                            <Tech className="h-3.5 w-3.5 text-muted-foreground group-hover/skill:text-primary flex-shrink-0 transition-colors" />
                            <span>{skill.name}</span>
                          </span>
                          <span className="font-bold text-primary text-[11px]">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-1 w-full overflow-hidden bg-muted rounded-none border border-border/40">
                          <motion.div
                            className="h-full bg-primary"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.8, delay: si * 0.04, ease: EASE }}
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
