"use client";

import { motion } from "framer-motion";
import { Download, Mail, ArrowRight, ExternalLink } from "lucide-react";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa6";
import { profile } from "@/lib/data";
import { useLanguage, useT } from "@/lib/i18n";
import { EASE } from "@/lib/motion";

const deployedApps = [
  { name: "REKOMA Association", url: "https://rekoma-318.vercel.app", stack: "Next.js · PostgreSQL" },
  { name: "Lycée Midongy", url: "https://lycceemidongysud.vercel.app/", stack: "Next.js · Django · PgSQL" },
];

export function Hero() {
  const { locale } = useLanguage();
  const t = useT();
  const cvHref = profile.cv;

  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background pt-24 pb-24"
    >
      {/* Background Video - Sliim index-video signature */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/saina-real.jpg"
          className="h-full w-full object-cover object-center filter grayscale contrast-110 opacity-35 dark:opacity-25"
        >
          <source src="/videos/saina-real-15s.mp4" type="video/mp4" />
        </video>
        {/* Sliim dark scrim overlay */}
        <div className="absolute inset-0 bg-background/85 dark:bg-[#181818]/90" />
      </div>

      {/* Sliim Dotted Pattern Signature */}
      <div className="absolute -top-16 -left-16 h-80 w-80 sliim-dotted-shape pointer-events-none rounded-full" />
      <div className="absolute -bottom-16 -right-16 h-80 w-80 sliim-dotted-shape pointer-events-none rounded-full" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full text-center z-10">
        
        {/* Main Sliim Typography Centerpiece */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-col items-center"
        >
          {/* Sliim Heading with real name */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground font-display leading-[1.1]">
            I’m{" "}
            <span className="text-primary italic font-serif">
              ANDRIANISAINA
            </span>{" "}
            <span className="block sm:inline text-primary italic font-serif">
              Nanga Miaramanana
            </span>
          </h1>

          {/* Sliim Subtitle aligned with CV */}
          <p className="mt-6 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground font-mono">
            {locale === "fr"
              ? "Développeur web & concepteur de bases de données — Licencié en informatique (ENI), actuellement en Master 2. Plus de 4 ans d'expérience en gestion de données et développement web."
              : "Web Developer & Database Designer — B.Sc. in Computer Science (ENI), currently in Master 2. Over 4 years of experience in data management and web application development."}
          </p>

          {/* Sliim Signature Buttons */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="#projets"
              className="sliim-btn inline-flex items-center gap-2 bg-primary px-8 py-3.5 text-xs text-primary-foreground shadow transition-transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span>{locale === "fr" ? "Voir mes projets" : "View portfolio"}</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href={cvHref}
              download
              className="sliim-btn inline-flex items-center gap-2 border border-border bg-card/80 px-7 py-3.5 text-xs text-foreground backdrop-blur-sm transition-all hover:border-primary hover:text-primary hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4 text-primary" />
              <span>{t.common.downloadCv}</span>
            </a>

            <a
              href="#contact"
              className="sliim-btn inline-flex items-center gap-2 border border-primary/60 bg-transparent px-7 py-3.5 text-xs text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              <span>{t.common.contactMe}</span>
            </a>
          </div>

          {/* Live Deployed Demos Shortcut Strip */}
          <div className="mt-12 w-full max-w-xl rounded-xl border border-border/80 bg-card/75 p-4 backdrop-blur-md shadow-sm">
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-border/60 text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground">
              <span>{locale === "fr" ? "Démos en direct" : "Live projects"}</span>
              <span className="text-primary font-mono text-[11px]">2 Vercel Apps</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {deployedApps.map((app) => (
                <a
                  key={app.name}
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-lg border border-border/70 bg-muted/40 p-2.5 text-left transition-all hover:border-primary hover:bg-muted"
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
        </motion.div>

      </div>

      {/* Sliim Floating Bottom-Left Social Bar */}
      <div className="hidden sm:block absolute bottom-6 left-6 lg:left-10 z-20">
        <ul className="flex items-center gap-3 m-0 p-0 list-none font-mono">
          <li>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-sm border border-border/80 bg-card/80 text-foreground backdrop-blur-xs transition-all hover:bg-primary hover:text-primary-foreground hover:-translate-y-1"
            >
              <FaLinkedin className="h-4 w-4" />
            </a>
          </li>
          <li>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-sm border border-border/80 bg-card/80 text-foreground backdrop-blur-xs transition-all hover:bg-primary hover:text-primary-foreground hover:-translate-y-1"
            >
              <FaGithub className="h-4 w-4" />
            </a>
          </li>
          <li>
            <a
              href={profile.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-sm border border-border/80 bg-card/80 text-foreground backdrop-blur-xs transition-all hover:bg-primary hover:text-primary-foreground hover:-translate-y-1"
            >
              <FaFacebook className="h-4 w-4" />
            </a>
          </li>
        </ul>
      </div>

      {/* Sliim Floating Bottom-Right Contact Box */}
      <div className="hidden sm:block absolute bottom-6 right-6 lg:right-10 z-20 text-right font-mono text-xs">
        <p className="text-muted-foreground uppercase tracking-widest text-[11px] mb-1">
          {locale === "fr" ? "Travaillons ensemble" : "Let's work together"}
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="block font-semibold text-foreground hover:text-primary transition-colors"
        >
          {profile.email}
        </a>
        <a
          href={`tel:${profile.phone.replace(/\s/g, "")}`}
          className="block text-muted-foreground hover:text-foreground transition-colors mt-0.5"
        >
          {profile.phone}
        </a>
      </div>

    </section>
  );
}
