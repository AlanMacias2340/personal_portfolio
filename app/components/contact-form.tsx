"use client";

import { useState, useRef, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { useT } from "../i18n/LanguageProvider";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);
  const t = useT();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!turnstileToken) {
      toast.error(t("contact", "turnstileRequired"));
      return;
    }

    setSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, turnstileToken }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send");
      }

      toast.success(t("contact", "success"));
      setForm({ name: "", email: "", message: "" });
      setTurnstileToken(null);
      turnstileRef.current?.reset();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : t("contact", "error"));
      turnstileRef.current?.reset();
      setTurnstileToken(null);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 bg-black relative">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
            <div className="h-px w-8 sm:w-12 bg-zinc-700" />
            <Mail className="text-blue-500" size={24} />
            <div className="h-px w-8 sm:w-12 bg-zinc-700" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
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

          <div className="flex justify-center">
            <Turnstile
              ref={turnstileRef}
              siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
              onSuccess={setTurnstileToken}
              onError={() => {
                setTurnstileToken(null);
                toast.error(t("contact", "turnstileError"));
              }}
              onExpire={() => setTurnstileToken(null)}
              options={{ theme: "dark" }}
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
