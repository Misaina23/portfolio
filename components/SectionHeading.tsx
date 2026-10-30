"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, ease: EASE }}
      className={`max-w-3xl ${isCenter ? "text-center mx-auto" : "text-left"} mb-12 md:mb-16`}
    >
      {eyebrow && (
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-2 font-display">
          {"//"} {eyebrow}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-foreground font-display">
        {title}
      </h2>
      <div className={`mt-3 flex items-center gap-2 ${isCenter ? "justify-center" : "justify-start"}`}>
        <span className="h-1 w-12 rounded-full bg-primary" />
        <span className="h-1 w-3 rounded-full bg-primary/40" />
      </div>
      {subtitle && (
        <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
