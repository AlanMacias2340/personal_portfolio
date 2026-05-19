"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useT } from "../i18n/LanguageProvider";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const t = useT();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();
      toast.success(t("contact", "success"));
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error(t("contact", "error"));
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-black relative">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-zinc-700" />
            <Mail className="text-blue-500" size={28} />
            <div className="h-px w-12 bg-zinc-700" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
            {t("contact", "heading")}
          </h2>
          <p className="mt-4 text-zinc-400">
            {t("contact", "subheading")}
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1, duration: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">
                {t("contact", "name")}
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder={t("contact", "namePlaceholder")}
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
                {t("contact", "email")}
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder={t("contact", "emailPlaceholder")}
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-colors"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">
              {t("contact", "message")}
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder={t("contact", "messagePlaceholder")}
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="w-full rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
          >
            {sending ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                {t("contact", "sending")}
              </>
            ) : (
              <>
                <Send size={18} />
                {t("contact", "send")}
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
