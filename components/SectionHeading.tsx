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

  // Format Sliim-style title: highlight the last word with primary color in Playfair Display
  const words = title.trim().split(" ");
  const firstPart = words.slice(0, -1).join(" ");
  const lastWord = words.length > 1 ? words[words.length - 1] : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: EASE }}
      className={`max-w-3xl ${isCenter ? "text-center mx-auto" : "text-left"} mb-14 md:mb-18`}
    >
      {eyebrow && (
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-2 font-mono">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground font-display capitalize">
        {words.length > 1 ? (
          <>
            {firstPart}{" "}
            <span className="text-primary italic font-serif">{lastWord}</span>
          </>
        ) : (
          title
        )}
      </h2>

      {/* Sliim-style Title Underline Accent */}
      <div className={`mt-4 flex items-center gap-2 ${isCenter ? "justify-center" : "justify-start"}`}>
        <span className="h-0.5 w-12 bg-primary" />
        <span className="h-0.5 w-3 bg-primary/40" />
      </div>

      {subtitle && (
        <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground font-mono">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
