"use client";

import Image from "next/image";
import { Award } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { useEducation, useT } from "@/lib/i18n";
import { EASE } from "@/lib/motion";

export function Education() {
  const education = useEducation();
  const t = useT();

  return (
    <section id="formation" className="bg-muted/30 py-20 md:py-28 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.education.eyebrow}
          title={t.education.title}
          subtitle={t.education.subtitle}
        />

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
            >
              <div className="flex items-center gap-3 pb-4 border-b border-border">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-white dark:bg-muted p-1.5 shadow-xs">
                  <Image
                    src={edu.logo}
                    alt={`Logo ${edu.school}`}
                    width={40}
                    height={40}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground font-display leading-tight">{edu.school}</h3>
                  <span className="inline-block mt-0.5 text-xs font-semibold text-primary">
                    {edu.degree}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex-1">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{edu.field}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{edu.description}</p>
              </div>

              <div className="mt-5 rounded-xl border border-border/60 bg-muted/40 p-4">
                <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-foreground font-display">
                  <Award className="h-3.5 w-3.5 text-primary" />
                  {t.education.skillsAcquired}
                </h4>
                <ul className="mt-2.5 space-y-1.5">
                  {edu.skills.map((skill) => (
                    <li key={skill} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
