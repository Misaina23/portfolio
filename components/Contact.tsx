"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { profile } from "@/lib/data";
import { EASE } from "@/lib/motion";

type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const update = (key: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Veuillez indiquer votre nom.";
    if (!form.email.trim()) next.email = "Veuillez indiquer votre email.";
    else if (!emailRe.test(form.email)) next.email = "Email invalide.";
    if (!form.subject.trim()) next.subject = "Veuillez indiquer un sujet.";
    if (!form.message.trim()) next.message = "Veuillez écrire un message.";
    else if (form.message.trim().length < 10) next.message = "Message trop court (10 caractères min).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  const fields: { key: keyof typeof form; label: string; type: string; placeholder: string }[] = [
    { key: "name", label: "Nom complet", type: "text", placeholder: "Votre nom" },
    { key: "email", label: "Email", type: "email", placeholder: "vous@exemple.com" },
    { key: "subject", label: "Sujet", type: "text", placeholder: "Sujet de votre message" },
  ];

  return (
    <section id="contact" className="bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Travaillons ensemble"
          subtitle="Une idée, un projet ou une question ? Écrivez-moi, je réponds rapidement."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="lg:col-span-2 space-y-5"
          >
            {[
              { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
              { icon: Phone, label: "Téléphone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
              { icon: MapPin, label: "Localisation", value: profile.location },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-transform group-hover:scale-105">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{c.label}</p>
                  <p className="font-semibold text-foreground">{c.value}</p>
                </div>
              </a>
            ))}

            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="text-sm font-semibold text-foreground">Réseaux sociaux</p>
              <div className="mt-3 flex gap-3">
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="grid h-11 w-11 place-items-center rounded-xl bg-[#0a66c2] text-white transition-transform hover:-translate-y-1"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="grid h-11 w-11 place-items-center rounded-xl bg-foreground text-background transition-transform hover:-translate-y-1"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
                <a
                  href={profile.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="grid h-11 w-11 place-items-center rounded-xl bg-[#1d9bf0] text-white transition-transform hover:-translate-y-1"
                >
                  <FaXTwitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="lg:col-span-3"
          >
            <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-border bg-card p-7 shadow-sm sm:p-9">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {fields.slice(0, 2).map((f) => (
                  <div key={f.key}>
                    <label className="mb-2 block text-sm font-medium text-foreground">{f.label}</label>
                    <input
                      type={f.type}
                      value={form[f.key]}
                      onChange={(e) => update(f.key, e.target.value)}
                      placeholder={f.placeholder}
                      className={`w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30 ${
                        errors[f.key] ? "border-red-500" : "border-border"
                      }`}
                    />
                    {errors[f.key] && <p className="mt-1.5 text-xs text-red-500">{errors[f.key]}</p>}
                  </div>
                ))}
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-foreground">Sujet</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => update("subject", e.target.value)}
                  placeholder="Sujet de votre message"
                  className={`w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30 ${
                    errors.subject ? "border-red-500" : "border-border"
                  }`}
                />
                {errors.subject && <p className="mt-1.5 text-xs text-red-500">{errors.subject}</p>}
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-foreground">Message</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Décrivez votre projet ou votre demande..."
                  className={`w-full resize-none rounded-xl border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30 ${
                    errors.message ? "border-red-500" : "border-border"
                  }`}
                />
                {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:opacity-90 sm:w-auto"
              >
                <Send className="h-4 w-4" />
                Envoyer le message
              </button>

              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-600 dark:text-emerald-400"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Merci ! Votre message a bien été envoyé.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
