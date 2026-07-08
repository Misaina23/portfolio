"use client";

import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { education } from "@/lib/data";
import { EASE } from "@/lib/motion";

export function Education() {
  return (
    <section id="formation" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Formation"
          title="Mon parcours académique"
          subtitle="Les fondations qui structurent ma pratique du développement."
        />

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border bg-muted p-2">
                  <Image
                    src={edu.logo}
                    alt={`Logo ${edu.school}`}
                    width={56}
                    height={56}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{edu.school}</h3>
                  <p className="text-sm font-semibold text-primary">{edu.degree}</p>
                </div>
              </div>

              <p className="mt-4 text-sm font-medium text-foreground">{edu.field}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{edu.description}</p>

              <div className="mt-5 rounded-2xl bg-muted/60 p-4">
                <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <GraduationCap className="h-4 w-4 text-primary" />
                  Compétences acquises
                </h4>
                <ul className="mt-3 space-y-2">
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
