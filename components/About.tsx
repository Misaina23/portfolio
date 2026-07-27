"use client";

import { Code2, Database, Rocket } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { useAbout, useT } from "@/lib/i18n";

const icons = {
  code: Code2,
  database: Database,
  rocket: Rocket,
};

export function About() {
  const about = useAbout();
  const t = useT();

  return (
    <section id="apropos" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          subtitle={t.about.subtitle}
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
              <p className="text-lg leading-relaxed text-foreground">{about.description}</p>
              <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
                {[
                  { value: "10+", label: "Projets réalisés" },
                  { value: "4+", label: "Stages & missions" },
                  { value: "12+", label: "Technologies" },
                  { value: "2", label: "Certifications" },
                  { value: "100%", label: "Sur mesure" },
                  { value: "24/7", label: "Apprentissage" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-bold text-primary">{stat.value}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="space-y-5">
            {(about.highlights as typeof about.highlights).map((h) => {
              const Icon = icons[h.icon as keyof typeof icons];
              return (
                <div
                  key={h.title}
                  className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">{h.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
                </div>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
