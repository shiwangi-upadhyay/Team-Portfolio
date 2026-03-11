"use client";
import { motion } from "framer-motion";
import { Search, Layers, Code2, Send } from "lucide-react";
import { TextSplit } from "@/components/ui/split-text";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const steps = [
  {
    title: "Discovery",
    label: "Scope & Requirements",
    description:
      "Map goals, constraints, and user needs into a clear technical direction before writing a line of code.",
    Icon: Search,
  },
  {
    title: "Architecture",
    label: "System Design",
    description:
      "Data models, API contracts, and topology defined upfront so nothing needs rethinking mid-build.",
    Icon: Layers,
  },
  {
    title: "Execution",
    label: "Development",
    description:
      "Iterative, test-driven development with weekly demos so you see real progress.",
    Icon: Code2,
  },
  {
    title: "Delivery",
    label: "Production",
    description:
      "CI/CD pipelines, monitoring, and docs handed off so your team owns the system confidently.",
    Icon: Send,
  },
];

export default function WorkFlow() {
  return (
    <section
      id="workflow"
      className="relative py-18 px-6 bg-background overflow-hidden"
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
          className="flex flex-col items-center text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-card-border bg-card/50 backdrop-blur-sm text-[10px] font-medium text-slate-500 dark:text-slate-400 tracking-[0.15em] uppercase mb-6">
            Process
          </span>

          <TextSplit
            className="text-[clamp(2rem,5vw,3.2rem)] font-semibold tracking-tight leading-[1.15] mb-4"
            topClassName="text-foreground"
            bottomClassName="text-teal-500 dark:text-teal-400"
            maxMove={60}
            falloff={0.18}
          >
            How We Work
          </TextSplit>

          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-normal max-w-sm leading-relaxed">
            A structured, engineering-first approach to every project.
          </p>
        </motion.div>

        {/* ── Desktop: horizontal diagram ── */}
        <div className="hidden md:block">

          {/* Circles row with animated dashed connector */}
          <div className="relative grid grid-cols-4 mb-10">

            {/* Dashed line — spans circle-center to circle-center */}
            <div className="absolute top-10 left-[12.5%] right-[12.5%] h-0.5 z-0">
              <svg
                className="w-full h-full overflow-visible"
                preserveAspectRatio="none"
              >
                <motion.line
                  x1="0"
                  y1="1"
                  x2="100%"
                  y2="1"
                  stroke="rgba(100,116,139,0.45)"
                  strokeWidth="1.5"
                  strokeDasharray="7 5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.3, delay: 0.3, ease: EASE }}
                />
              </svg>
            </div>

            {/* Circles */}
            {steps.map((s, i) => (
              <div key={s.title} className="flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.15, ease: EASE }}
                  className="relative z-10 w-20 h-20 rounded-full border border-slate-200 dark:border-white/10 bg-card/70 backdrop-blur-sm flex items-center justify-center group cursor-default"
                >
                  {/* Pulse ring on hover */}
                  <div className="absolute inset-0 rounded-full border border-slate-400/30 dark:border-white/15 scale-100 opacity-0 group-hover:scale-125 group-hover:opacity-100 transition-all duration-500" />
                  <s.Icon className="w-7 h-7 text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300" />
                </motion.div>
              </div>
            ))}
          </div>

          {/* Text row */}
          <div className="grid grid-cols-4 gap-6 mt-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 + i * 0.12, ease: EASE }}
                className="text-center px-2"
              >
                <h3
                  className="text-base font-semibold tracking-tight mb-2"
                  style={{ color: "var(--heading-from)" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-normal leading-relaxed">
                  {s.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Mobile: vertical stacked steps ── */}
        <div className="md:hidden space-y-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              className="flex items-start gap-4"
            >
              {/* Small circle */}
              <div className="shrink-0 w-14 h-14 rounded-full border border-slate-200 dark:border-white/10 bg-card/70 backdrop-blur-sm flex items-center justify-center">
                <s.Icon className="w-5 h-5 text-slate-500 dark:text-slate-400" />
              </div>

              {/* Text */}
              <div className="pt-2">
                <h3
                  className="text-base font-semibold tracking-tight mb-1"
                  style={{ color: "var(--heading-from)" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-normal leading-relaxed">
                  {s.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
