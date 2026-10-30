"use client";

import { motion } from "framer-motion";
import { Download, Mail, ArrowRight, ExternalLink, Code2, Database, Smartphone } from "lucide-react";
import { profile } from "@/lib/data";
import { useLanguage, useT } from "@/lib/i18n";
import { EASE } from "@/lib/motion";

const deployedApps = [
  { name: "REKOMA Association", url: "https://rekoma-318.vercel.app", stack: "Next.js · PostgreSQL" },
  { name: "Pointage Personnel", url: "https://pointagemisaina.vercel.app", stack: "Vue.js · Laravel" },
  { name: "Lycée Midongy", url: "https://lyccemidongy.vercel.app", stack: "Vue.js · Symfony" },
  { name: "Plateforme Agricole", url: "https://videeko-vanilla.vercel.app", stack: "Next.js · Django" },
];

export function Hero() {
  const { locale } = useLanguage();
  const t = useT();
  const cvHref = locale === "fr" ? "/documents/sainacv.PDF" : "/documents/ResumeSaina.pdf";

  return (
    <section
      id="accueil"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-background pt-24 pb-16 border-b border-border/60"
    >
      {/* Subtle background ambient mesh */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-25">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/2 -right-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Authentic Executive Developer Typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-center lg:text-left lg:col-span-7"
          >
            {/* Professional status kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-widest font-display">
              <span className="text-primary font-bold">ANDRIANISAINA</span>
              <span>·</span>
              <span>Nanga Miaramanana</span>
              <span>·</span>
              <span className="text-foreground">{profile.location}</span>
            </div>

            {/* Impactful headline */}
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-display leading-[1.08] text-balance">
              Développeur Full Stack <br />
              <span className="text-primary">Web & Mobile</span>
            </h1>

            {/* Concise professional pitch */}
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
              {locale === "fr"
                ? "Diplômé de l'École Nationale d'Informatique (ENI) en Génie Logiciel & Bases de Données. Je conçois des plateformes web performantes, des backends modulaires et des applications mobiles axées sur les résultats terrain."
                : "Graduate of the National School of Computer Science (ENI) in Software Engineering & Databases. I design high-performance web platforms, modular backends, and field-ready mobile apps."}
            </p>

            {/* Core Pillars */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 text-foreground">
                <Code2 className="h-4 w-4 text-primary" />
                Next.js · React · Vue · TypeScript
              </span>
              <span aria-hidden="true" className="text-border">·</span>
              <span className="inline-flex items-center gap-1.5 text-foreground">
                <Database className="h-4 w-4 text-primary" />
                Laravel · Django · PostgreSQL · MySQL
              </span>
              <span aria-hidden="true" className="text-border">·</span>
              <span className="inline-flex items-center gap-1.5 text-foreground">
                <Smartphone className="h-4 w-4 text-primary" />
                React Native · Flutter
              </span>
            </div>

            {/* Direct Action Buttons */}
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-4 lg:justify-start">
              <a
                href="#projets"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow transition-all hover:-translate-y-0.5 hover:shadow-md sm:w-auto font-display"
              >
                <span>{locale === "fr" ? "Voir les projets" : "View projects"}</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={cvHref}
                download
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-foreground transition-all hover:border-primary hover:text-primary hover:-translate-y-0.5 sm:w-auto font-display"
              >
                <Download className="h-4 w-4 text-primary" />
                {t.common.downloadCv}
              </a>

              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-muted/30 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-muted-foreground transition-all hover:text-foreground sm:w-auto font-display"
              >
                <Mail className="h-4 w-4" />
                {t.common.contactMe}
              </a>
            </div>
          </motion.div>

          {/* Right Column: 15-second looping developer video with zero controls */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Dark terminal / IDE container */}
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
                {/* IDE Window Header */}
                <div className="flex items-center justify-between border-b border-border bg-muted/60 px-4 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                    <span className="ml-2 font-mono text-[11px] text-muted-foreground">
                      saina@dev: ~/portfolio
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-primary font-semibold">
                    <span>15s loop</span>
                    <span>·</span>
                    <span className="text-muted-foreground">production</span>
                  </div>
                </div>

                {/* 15-second continuous coding video with NO pause/play/mute buttons */}
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/images/ai-developer-coding.jpg"
                    className="h-full w-full object-cover object-center"
                  >
                    <source src="/videos/coding-ai-15s.mp4" type="video/mp4" />
                  </video>

                  {/* Subtle code overlay scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                  {/* Active code typing subtitle badge in bottom overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white pointer-events-none">
                    <div className="font-mono text-xs">
                      <span className="text-emerald-400 font-bold">✓ live code</span>
                      <span className="text-white/60 ml-2">Next.js • Laravel • PostgreSQL</span>
                    </div>
                    <span className="font-mono text-[11px] text-primary bg-primary/20 border border-primary/30 px-2 py-0.5 rounded">
                      ready
                    </span>
                  </div>
                </div>

                {/* Live Deployed Applications Quick Access Strip */}
                <div className="p-4 bg-card border-t border-border">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-border/50 text-xs font-bold uppercase tracking-wider text-muted-foreground font-display">
                    <span>{locale === "fr" ? "Démos en ligne directes" : "Live deployed demos"}</span>
                    <span className="text-primary font-mono text-[11px]">4 live</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {deployedApps.map((app) => (
                      <a
                        key={app.name}
                        href={app.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col rounded-lg border border-border/80 bg-muted/40 p-2.5 transition-all hover:border-primary/60 hover:bg-muted"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors truncate">
                            {app.name}
                          </span>
                          <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary flex-shrink-0 ml-1" />
                        </div>
                        <span className="text-[10px] text-muted-foreground font-mono mt-0.5 truncate">
                          {app.stack}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
