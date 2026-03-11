"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { TextSplit } from "@/components/ui/split-text";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-18 pb-28 px-6 bg-background overflow-hidden"
    >
      {/* ── Radial bloom ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 45% at 50% 50%, rgba(148,163,184,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-card-border bg-card/50 backdrop-blur-sm text-[10px] font-medium text-slate-500 dark:text-slate-400 tracking-[0.15em] uppercase mb-6">
            Contact
          </span>

          <TextSplit
            className="text-[clamp(2rem,5vw,3.2rem)] font-semibold tracking-tight leading-[1.15] mb-4"
            topClassName="text-foreground"
            bottomClassName="text-teal-500 dark:text-teal-400"
            maxMove={60}
            falloff={0.18}
          >
            Let's Build Together
          </TextSplit>

          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-normal max-w-sm leading-relaxed">
            Tell us about your project and we'll get back within 24 hours.
          </p>
        </motion.div>

        {/* ── Form card ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="max-w-2xl mx-auto bg-card/50 border border-card-border rounded-2xl p-8 md:p-10 backdrop-blur-sm"
        >
          {status === "success" ? (
            <div className="flex flex-col items-center text-center gap-3 py-8">
              <CheckCircle2 className="w-10 h-10 text-emerald-500" />
              <h3
                className="text-lg font-semibold"
                style={{ color: "var(--heading-from)" }}
              >
                Message sent!
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                We'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-2 text-sm text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name + Email row */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--heading-from)" }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-slate-400 dark:focus:border-white/25 transition-colors"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--heading-from)" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-slate-400 dark:focus:border-white/25 transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--heading-from)" }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Briefly describe your project goals..."
                  className="w-full bg-background border border-card-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-slate-400 dark:focus:border-white/25 transition-colors resize-none"
                />
              </div>

              {/* Error message */}
              {status === "error" && (
                <p className="text-sm text-red-500">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}

              {/* Footer row */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  We typically respond within 24 hours.
                </p>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group w-full sm:w-auto bg-foreground text-background px-7 py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:opacity-85 active:scale-95 transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      Sending
                      <Loader2 className="w-4 h-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </motion.div>

        {/* ── Direct email ── */}
        <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
          Or email us directly at{" "}
          <a
            href="mailto:hello@codecraft.dev"
            className="text-foreground font-medium underline underline-offset-4 hover:opacity-70 transition-opacity"
          >
            hello@codecraft.dev
          </a>
        </p>

      </div>
    </section>
  );
}
