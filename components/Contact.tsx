"use client";

import { useState, useEffect } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { SectionHeading } from "./SectionHeading";
import { profile } from "@/lib/data";
import { useT } from "@/lib/i18n";
import { EASE } from "@/lib/motion";

type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const t = useT();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (sent) {
      const timer = setTimeout(() => setSent(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [sent]);

  const update = (key: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = t.contact.validationError;
    if (!form.email.trim()) next.email = t.contact.validationError;
    else if (!emailRe.test(form.email)) next.email = t.contact.validationError;
    if (!form.subject.trim()) next.subject = t.contact.validationError;
    if (!form.message.trim()) next.message = t.contact.validationError;
    else if (form.message.trim().length < 10) next.message = t.contact.validationError;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error");
      await Swal.fire({
        title: t.contact.success,
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#ffb400",
      });
      setForm({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch {
      await Swal.fire({
        title: t.contact.error,
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#ffb400",
      });
    } finally {
      setSending(false);
      setSent(true);
    }
  };

  const fields: { key: keyof typeof form; label: string; type: string; placeholder: string }[] = [
    { key: "name", label: t.contact.name, type: "text", placeholder: t.contact.namePlaceholder },
    { key: "email", label: t.contact.email, type: "email", placeholder: t.contact.emailPlaceholder },
    { key: "subject", label: t.contact.subject, type: "text", placeholder: t.contact.subjectPlaceholder },
  ];

  return (
    <section id="contact" className="bg-muted/30 py-20 md:py-28 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left Column: Direct info cards */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="rounded-sm border border-border bg-card p-6 shadow-xs">
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground font-display pb-3 border-b border-border/80 flex items-center justify-between">
                <span>{t.contact.infoTitle}</span>
                <span className="font-mono text-xs text-primary">{"// CONTACT"}</span>
              </h3>
              
              <div className="mt-5 space-y-3.5">
                {[
                  { icon: Mail, label: t.common.email, value: profile.email, href: `mailto:${profile.email}` },
                  { icon: Phone, label: t.common.phone, value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
                  { icon: MapPin, label: t.common.location, value: profile.location },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="flex items-center gap-3.5 rounded-sm border border-border/70 bg-muted/30 p-3.5 transition-all hover:border-primary hover:bg-muted font-mono"
                  >
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xs bg-primary/10 text-primary border border-primary/20 shadow-xs">
                      <c.icon className="h-4 w-4" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{c.label}</p>
                      <p className="text-xs font-semibold text-foreground truncate mt-0.5">{c.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-border/80 font-mono">
                <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">{t.common.followMe}</p>
                <div className="flex gap-2.5">
                  <a
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="grid h-9 w-9 place-items-center rounded-xs border border-border bg-muted/40 text-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5"
                  >
                    <FaLinkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="grid h-9 w-9 place-items-center rounded-xs border border-border bg-muted/40 text-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5"
                  >
                    <FaGithub className="h-4 w-4" />
                  </a>
                  <a
                    href={profile.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="grid h-9 w-9 place-items-center rounded-xs border border-border bg-muted/40 text-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5"
                  >
                    <FaXTwitter className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="lg:col-span-7"
          >
            <form onSubmit={onSubmit} noValidate className="rounded-sm border border-border bg-card p-6 sm:p-8 shadow-xs">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {fields.slice(0, 2).map((f) => (
                  <div key={f.key}>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground font-mono">
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      value={form[f.key]}
                      onChange={(e) => update(f.key, e.target.value)}
                      placeholder={f.placeholder}
                      className={`w-full rounded-sm border bg-background px-3.5 py-3 text-xs sm:text-sm text-foreground font-mono outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary ${
                        errors[f.key] ? "border-red-500" : "border-border"
                      }`}
                    />
                    {errors[f.key] && <p className="mt-1 text-xs text-red-500 font-mono">{errors[f.key]}</p>}
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground font-mono">
                  {t.contact.subject}
                </label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => update("subject", e.target.value)}
                  placeholder={t.contact.subjectPlaceholder}
                  className={`w-full rounded-sm border bg-background px-3.5 py-3 text-xs sm:text-sm text-foreground font-mono outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary ${
                    errors.subject ? "border-red-500" : "border-border"
                  }`}
                />
                {errors.subject && <p className="mt-1 text-xs text-red-500 font-mono">{errors.subject}</p>}
              </div>

              <div className="mt-4">
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground font-mono">
                  {t.contact.message}
                </label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder={t.contact.messagePlaceholder}
                  className={`w-full resize-none rounded-sm border bg-background px-3.5 py-3 text-xs sm:text-sm text-foreground font-mono outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary ${
                    errors.message ? "border-red-500" : "border-border"
                  }`}
                />
                {errors.message && <p className="mt-1 text-xs text-red-500 font-mono">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={sending}
                className="sliim-btn mt-6 inline-flex w-full items-center justify-center gap-2 bg-primary px-8 py-3.5 text-xs text-primary-foreground shadow transition-transform hover:-translate-y-0.5 disabled:opacity-70 sm:w-auto"
              >
                <Send className="h-4 w-4" />
                <span>{sending ? t.common.sending : t.contact.sendMessage}</span>
              </button>

              {sent && !sending && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 inline-flex items-center gap-2 rounded-sm bg-emerald-500/10 px-4 py-2.5 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  <span>{t.contact.success}</span>
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
