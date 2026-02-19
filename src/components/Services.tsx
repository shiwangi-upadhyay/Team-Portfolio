"use client";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Scalable, production-ready web applications built with modern architecture, engineered to grow with your business.",
    tags: ["Full-stack Apps", "SaaS & Dashboards", "APIs & Backend", "CMS & Admin"],
  },
  {
    num: "02",
    title: "AI & Machine Learning",
    description:
      "Generative AI capabilities that automate workflows, surface insights, and create real competitive advantage.",
    tags: ["Gen AI Integrations", "AI Agents", "Custom ML", "Automation"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-18 px-6 bg-background overflow-hidden"
    >
      {/* ── Single sky-teal radial bloom — matches Hero accent ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 45% at 50% 50%, rgba(14,165,233,0.07) 0%, transparent 70%)",
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
            Services
          </span>

          <h2
            className="text-[clamp(2rem,5vw,3.2rem)] font-semibold tracking-tight leading-[1.15] mb-4"
            style={{ color: "var(--heading-from)" }}
          >
            What We Build
          </h2>

          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-normal max-w-sm leading-relaxed">
            End-to-end development services tailored to your exact needs.
          </p>
        </motion.div>

        {/* ── Service cards ── */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
              className="group relative bg-card/50 border border-card-border rounded-2xl p-8 backdrop-blur-sm overflow-hidden"
            >
              {/* Hover glow — single sky teal, same as Hero arch */}
              <div
                className="pointer-events-none absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 70%)",
                  filter: "blur(24px)",
                }}
              />

              {/* Ghost number — decorative, barely visible */}
              <span
                className="pointer-events-none select-none absolute top-5 right-6 text-8xl font-bold leading-none"
                style={{ color: "var(--heading-from)", opacity: 0.045 }}
              >
                {s.num}
              </span>

              {/* Small number label */}
              <span className="block text-[10px] font-medium tracking-[0.18em] uppercase text-slate-400 dark:text-slate-500 mb-5">
                {s.num}
              </span>

              {/* Title */}
              <h3
                className="text-2xl font-semibold tracking-tight mb-3"
                style={{ color: "var(--heading-from)" }}
              >
                {s.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-500 dark:text-slate-400 font-normal leading-relaxed mb-8">
                {s.description}
              </p>

              {/* Feature tags — pill chips, no bullet list */}
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full border border-card-border bg-background/60 text-[11px] font-medium text-slate-500 dark:text-slate-400 tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
