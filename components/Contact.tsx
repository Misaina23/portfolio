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
      });
      setForm({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch {
      await Swal.fire({
        title: t.contact.error,
        icon: "error",
        confirmButtonText: "OK",
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
    <section id="contact" className="bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
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
              { icon: Mail, label: t.common.email, value: profile.email, href: `mailto:${profile.email}` },
              { icon: Phone, label: t.common.phone, value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
              { icon: MapPin, label: t.common.location, value: profile.location },
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
              <p className="text-sm font-semibold text-foreground">{t.common.followMe}</p>
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
                <label className="mb-2 block text-sm font-medium text-foreground">{t.contact.subject}</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => update("subject", e.target.value)}
                  placeholder={t.contact.subjectPlaceholder}
                  className={`w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30 ${
                    errors.subject ? "border-red-500" : "border-border"
                  }`}
                />
                {errors.subject && <p className="mt-1.5 text-xs text-red-500">{errors.subject}</p>}
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-foreground">{t.contact.message}</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder={t.contact.messagePlaceholder}
                  className={`w-full resize-none rounded-xl border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30 ${
                    errors.message ? "border-red-500" : "border-border"
                  }`}
                />
                {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={sending}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:opacity-90 disabled:opacity-70 sm:w-auto"
              >
                <Send className="h-4 w-4" />
                {sending ? t.common.sending : t.contact.sendMessage}
              </button>

              {sent && !sending && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-600 dark:text-emerald-400"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  {t.contact.success}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
