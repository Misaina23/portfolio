"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Download, Mail, Play, Pause, Volume2, VolumeX, Maximize2, X, MapPin, CheckCircle, Code } from "lucide-react";
import { profile } from "@/lib/data";
import { useLanguage, useT } from "@/lib/i18n";
import { EASE } from "@/lib/motion";

export function Hero() {
  const { locale } = useLanguage();
  const t = useT();
  const cvHref = locale === "fr" ? "/documents/sainacv.PDF" : "/documents/ResumeSaina.pdf";

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center overflow-hidden bg-background pt-20 pb-16"
    >
      {/* Background ambient video loop - Sliim index-video signature */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20 dark:opacity-15">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/Saina.png"
          className="h-full w-full object-cover object-center filter grayscale contrast-125"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/90" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Authentic Sliim Typography & Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-center lg:text-left lg:col-span-7"
          >
            {/* Small uppercase eyebrow badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              {locale === "fr" ? "Disponible pour nouveaux projets" : "Available for freelance & full-time"}
            </div>

            {/* Main Bold Name */}
            <h1 className="mt-6 text-3xl font-extrabold uppercase tracking-tight text-foreground sm:text-5xl lg:text-6xl font-display leading-[1.08]">
              {profile.firstName}{" "}
              <span className="text-primary">{profile.lastName}</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground mt-2 normal-case tracking-normal">
                Miaramanana
              </span>
            </h1>

            {/* Subtitle / Role with clean Sliim styling */}
            <div className="mt-4 flex items-center justify-center lg:justify-start gap-2">
              <span className="h-0.5 w-8 bg-primary rounded-full hidden sm:inline-block" />
              <p className="text-lg sm:text-xl font-bold uppercase tracking-wider text-primary font-display">
                {t.hero.title}
              </p>
            </div>

            {/* Concise Bio */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
              {t.hero.subtitle}
            </p>

            {/* Quick Specs / Pills */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 shadow-sm">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                {profile.location}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 shadow-sm">
                <Code className="h-3.5 w-3.5 text-primary" />
                React • Next.js • Vue • Laravel • Django
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 shadow-sm">
                <CheckCircle className="h-3.5 w-3.5 text-primary" />
                BAC+3 Génie Logiciel (ENI)
              </span>
            </div>

            {/* Sliim-style CTA Buttons */}
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-4 lg:justify-start">
              <a
                href={cvHref}
                download
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg sm:w-auto font-display"
              >
                <Download className="h-4 w-4" />
                {t.common.downloadCv}
              </a>

              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary/50 bg-primary/5 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5 sm:w-auto font-display"
              >
                <Play className="h-4 w-4 text-primary fill-primary" />
                {locale === "fr" ? "Voir la vidéo" : "Watch Video"}
              </button>

              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-foreground transition-all hover:border-primary hover:text-primary hover:-translate-y-0.5 sm:w-auto font-display"
              >
                <Mail className="h-4 w-4" />
                {t.common.contactMe}
              </a>
            </div>
          </motion.div>

          {/* Right Column: Sliim Video Hero Card generated from his photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Subtle accent border corner decoration */}
              <div className="absolute -top-3 -right-3 h-20 w-20 border-t-2 border-r-2 border-primary rounded-tr-2xl pointer-events-none z-10" />
              <div className="absolute -bottom-3 -left-3 h-20 w-20 border-b-2 border-l-2 border-primary rounded-bl-2xl pointer-events-none z-10" />

              {/* Main Card Container */}
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
                {/* Video Container */}
                <div className="relative aspect-square w-full overflow-hidden bg-black">
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    poster="/images/Saina.png"
                    className="h-full w-full object-cover object-top"
                  >
                    <source src="/videos/saina-presentation.mp4" type="video/mp4" />
                  </video>

                  {/* Dark subtle gradient overlay at bottom for controls */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

                  {/* Floating Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-black/70 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur border border-white/10 uppercase tracking-wider">
                      <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                      {locale === "fr" ? "Vidéo Présentation" : "Video Presentation"}
                    </span>
                  </div>

                  {/* Top Right Expand Button */}
                  <button
                    type="button"
                    onClick={() => setShowModal(true)}
                    aria-label="Plein écran"
                    className="absolute top-3 right-3 z-10 grid h-8 w-8 place-items-center rounded-md bg-black/70 text-white backdrop-blur border border-white/10 transition-colors hover:bg-primary hover:text-black"
                  >
                    <Maximize2 className="h-4 w-4" />
                  </button>

                  {/* Bottom Video Controls */}
                  <div className="absolute inset-x-0 bottom-3 px-4 z-10 flex items-center justify-between text-white">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={togglePlay}
                        aria-label={isPlaying ? "Mettre en pause" : "Lire"}
                        className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-black transition-transform hover:scale-105 font-bold"
                      >
                        {isPlaying ? <Pause className="h-4 w-4 fill-black" /> : <Play className="h-4 w-4 fill-black ml-0.5" />}
                      </button>

                      <button
                        type="button"
                        onClick={toggleMute}
                        aria-label={isMuted ? "Activer le son" : "Couper le son"}
                        className="grid h-8 w-8 place-items-center rounded-md bg-black/60 text-white backdrop-blur border border-white/10 transition-colors hover:bg-white/20"
                      >
                        {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="text-xs font-bold text-white tracking-wide">
                        {profile.fullName}
                      </p>
                      <p className="text-[11px] text-primary font-medium">
                        {profile.title}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Footer Info */}
                <div className="p-4 border-t border-border bg-card">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                        {locale === "fr" ? "Statut" : "Status"}
                      </p>
                      <p className="text-sm font-bold text-foreground">
                        {locale === "fr" ? "Prêt pour de nouveaux défis" : "Ready for new challenges"}
                      </p>
                    </div>
                    <a
                      href="#apropos"
                      className="text-xs font-bold uppercase tracking-wider text-primary hover:underline"
                    >
                      {locale === "fr" ? "En savoir +" : "Learn more →"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Presentation Video Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-card shadow-2xl">
            <div className="flex items-center justify-between border-b border-border px-5 py-3">
              <div>
                <h3 className="text-base font-bold text-foreground font-display">
                  {profile.fullName} — {profile.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {locale === "fr" ? "Présentation vidéo du profil" : "Profile video presentation"}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                aria-label="Fermer"
                className="grid h-8 w-8 place-items-center rounded-lg border border-border text-foreground transition-colors hover:bg-muted"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="relative aspect-video w-full bg-black">
              <video
                autoPlay
                loop
                controls
                playsInline
                className="h-full w-full object-contain"
              >
                <source src="/videos/saina-presentation.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="flex items-center justify-between p-4 bg-muted/40">
              <div className="text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">{profile.location}</span> • {profile.email}
              </div>
              <a
                href="#contact"
                onClick={() => setShowModal(false)}
                className="rounded-lg bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground"
              >
                {t.common.contactMe}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
