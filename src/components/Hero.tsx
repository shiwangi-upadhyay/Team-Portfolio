"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden bg-background">

      {/* ── Background atmosphere ── */}

      {/* Top-center radial bloom */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -5%, rgba(56,189,248,0.13) 0%, rgba(99,102,241,0.06) 50%, transparent 70%)",
        }}
      />

      {/* Bottom portal bloom */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 -z-10"
        style={{
          height: "55vh",
          background:
            "radial-gradient(ellipse 65% 80% at 50% 100%, rgba(14,165,233,0.14) 0%, rgba(56,189,248,0.06) 45%, transparent 70%)",
        }}
      />

      {/* Subtle mesh grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.055] dark:opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl mx-auto w-full  py-6">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="mb-7"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-card-border bg-card/50 backdrop-blur-sm text-[10px] font-medium text-slate-500 dark:text-slate-400 tracking-[0.15em] uppercase">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            Available for Q1 2026 Projects
          </span>
        </motion.div>

        {/* Heading — two clean lines, proportional size */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: EASE }}
          className="text-[clamp(2.2rem,5.5vw,4rem)] font-semibold tracking-tight leading-[1.15] mb-5"
          style={{ color: "var(--heading-from)" }}
        >
          We Build Scalable<br />Web &amp; AI Solutions
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          className="text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-sm font-normal leading-relaxed mb-9"
        >
          A specialized 2-person engineering team delivering production-ready
          web apps and custom Generative AI integrations.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22, ease: EASE }}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          <button className="group bg-foreground text-background px-7 py-3 rounded-xl font-medium text-sm flex items-center gap-2 cursor-pointer active:scale-95 hover:opacity-85 transition-all">
            Start your project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
          </button>
          <button className="border border-card-border text-foreground hover:bg-slate-100 dark:hover:bg-white/5 px-7 py-3 rounded-xl font-medium text-sm transition-colors cursor-pointer active:scale-95">
            View our stack
          </button>
        </motion.div>
      </div>

      {/* ── Arch portal — large, fills the lower viewport ── */}
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, delay: 0.38, ease: EASE }}
        className="relative z-10 mt-auto flex justify-center w-full"
      >
        {/* Wide ambient glow pool beneath the arch */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: "560px",
            height: "260px",
            background:
              "radial-gradient(ellipse at 50% 100%, rgba(14,165,233,0.22) 0%, rgba(56,189,248,0.08) 50%, transparent 70%)",
            filter: "blur(8px)",
          }}
        />

        {/* The arch itself */}
        <div
          className="relative overflow-hidden rounded-t-full"
          style={{ width: 240, height: 330 }}
        >
          {/* Interior gradient fill */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(7,89,133,0.75) 0%, rgba(12,74,110,0.55) 40%, rgba(7,40,70,0.4) 100%)",
            }}
          />

          {/* Top inner glow (the "light source" through the door) */}
          <div
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              top: -10,
              width: 160,
              height: 160,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(125,211,252,0.45) 0%, rgba(56,189,248,0.15) 50%, transparent 70%)",
              filter: "blur(22px)",
            }}
          />

          {/* Concentric arch rings */}
          <div className="absolute inset-0 rounded-t-full border border-sky-400/25" />
          <div
            className="absolute rounded-t-full border border-sky-400/14"
            style={{ inset: 14 }}
          />
          <div
            className="absolute rounded-t-full border border-sky-300/08"
            style={{ inset: 28 }}
          />

          {/* Bottom dark fill to blend with fade */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: "45%",
              background:
                "linear-gradient(to top, rgba(5,8,18,0.95) 0%, transparent 100%)",
            }}
          />
        </div>
      </motion.div>

      {/* Bottom edge fade — blends arch into bg */}
      <div
        className="absolute bottom-0 left-0 right-0 h-52 pointer-events-none z-20"
        style={{
          background:
            "linear-gradient(to top, var(--background) 0%, var(--background) 15%, transparent 100%)",
        }}
      />
    </section>
  );
}
