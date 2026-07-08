"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { EASE } from "@/lib/motion";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center overflow-hidden bg-grid pt-16"
    >
      <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl animate-blob [animation-delay:6s]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <motion.div variants={container} initial="hidden" animate="show" className="text-center lg:text-left">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Disponible pour de nouveaux projets
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            {profile.firstName}
            <br />
            <span className="gradient-text">{profile.lastName}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-lg font-semibold text-primary sm:text-xl"
          >
            {profile.title}
          </motion.p>

          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            <a
              href={profile.cv}
              download
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:opacity-90 sm:w-auto"
            >
              <Download className="h-4 w-4" />
              Télécharger CV PDF
            </a>
            <a
              href="#projets"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary sm:w-auto"
            >
              Voir mes projets
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary sm:w-auto"
            >
              <Mail className="h-4 w-4" />
              Me contacter
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none"
        >
          <div className="relative mx-auto aspect-square w-64 sm:w-80 lg:w-[400px]">
            <div className="absolute inset-0 rotate-6 rounded-[2rem] bg-gradient-to-tr from-primary to-cyan-400 opacity-20 blur-2xl" />
            <div className="absolute -inset-3 rounded-[2rem] border border-border" />
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl">
              <Image
                src={profile.photo}
                alt={profile.fullName}
                fill
                priority
                sizes="(max-width: 1024px) 320px, 400px"
                className="object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-border bg-card px-5 py-3 shadow-xl">
              <p className="text-xs text-muted-foreground">Localisation</p>
              <p className="text-sm font-semibold text-foreground">{profile.location}</p>
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#apropos"
        aria-label="Défiler vers le bas"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-border p-1">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-1 rounded-full bg-primary"
          />
        </span>
      </a>
    </section>
  );
}
