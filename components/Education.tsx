"use client";

import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { useEducation, useT } from "@/lib/i18n";
import { EASE } from "@/lib/motion";

export function Education() {
  const education = useEducation();
  const t = useT();

  return (
    <section id="formation" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.education.eyebrow}
          title={t.education.title}
          subtitle={t.education.subtitle}
        />

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-muted p-1.5">
                  <Image
                    src={edu.logo}
                    alt={`Logo ${edu.school}`}
                    width={40}
                    height={40}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground leading-tight">{edu.school}</h3>
                  <p className="text-xs font-semibold text-primary">{edu.degree}</p>
                </div>
              </div>

              <p className="mt-3 text-sm font-medium text-foreground">{edu.field}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{edu.description}</p>

              <div className="mt-4 rounded-xl bg-muted/60 p-3">
                <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <GraduationCap className="h-4 w-4 text-primary" />
                  {t.education.skillsAcquired}
                </h4>
                <ul className="mt-2 space-y-1.5">
                  {edu.skills.map((skill) => (
                    <li key={skill} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
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
