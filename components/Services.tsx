"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useServices, useT } from "@/lib/i18n";
import { EASE } from "@/lib/motion";

export function Services() {
  const services = useServices();
  const t = useT();

  return (
    <section id="services" className="bg-background py-20 md:py-28 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.07, ease: EASE }}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-base font-bold uppercase tracking-tight text-foreground font-display">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>

                <ul className="mt-5 space-y-2 border-t border-border pt-4">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-xs font-medium text-foreground">
                      <Check className="h-3.5 w-3.5 flex-shrink-0 text-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
