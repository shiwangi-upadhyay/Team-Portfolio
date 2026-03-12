"use client";
import { motion, AnimatePresence } from "framer-motion";
import { TextSplit } from "@/components/ui/split-text";
import { useState } from "react";
import { X } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Scalable, production-ready web applications built with modern architecture, engineered to grow with your business.",
    tags: [
      { id: "01-fullstack", label: "Full-stack Apps" },
      { id: "01-saas", label: "SaaS & Dashboards" },
      { id: "01-api", label: "APIs & Backend" },
      { id: "01-cms", label: "CMS & Admin" },
    ],
  },
  {
    num: "02",
    title: "AI & Machine Learning",
    description:
      "Generative AI capabilities that automate workflows, surface insights, and create real competitive advantage.",
    tags: [
      { id: "02-genai", label: "Gen AI Integrations" },
      { id: "02-agents", label: "AI Agents" },
      { id: "02-ml", label: "Custom ML" },
      { id: "02-auto", label: "Automation" },
    ],
  },
];

type Tag = { id: string; label: string };

function ServiceCard({
  s,
  i,
}: {
  s: (typeof services)[number];
  i: number;
}) {
  const [selected, setSelected] = useState<Tag[]>([]);

  const select = (tag: Tag) => setSelected((prev) => [...prev, tag]);
  const deselect = (id: string) =>
    setSelected((prev) => prev.filter((t) => t.id !== id));

  const unselected = s.tags.filter(
    (t) => !selected.some((s) => s.id === t.id)
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
      className="group relative bg-card/50 border border-card-border rounded-2xl p-8 backdrop-blur-sm overflow-hidden"
    >
      {/* Hover glow */}
      <div
        className="pointer-events-none absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 70%)",
          filter: "blur(24px)",
        }}
      />

      {/* Ghost number */}
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
      <p className="text-sm text-slate-500 dark:text-slate-400 font-normal leading-relaxed mb-6">
        {s.description}
      </p>

      {/* ── Selected tray ── */}
      <AnimatePresence>
        {selected.length > 0 && (
          <motion.div
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="mb-3 overflow-hidden"
          >
            <div className="flex flex-wrap gap-2 p-2.5 rounded-[14px] border border-card-border bg-background/60 no-scrollbar overflow-x-auto">
              {selected.map((tag) => (
                <motion.div
                  key={tag.id}
                  layoutId={`tag-${s.num}-${tag.id}`}
                  className="flex items-center gap-1 pl-3 pr-1 py-1 bg-card border border-card-border shadow-sm shrink-0"
                  style={{ borderRadius: 12 }}
                >
                  <motion.span
                    layoutId={`label-${s.num}-${tag.id}`}
                    className="text-[11px] font-medium text-foreground/80 tracking-wide"
                  >
                    {tag.label}
                  </motion.span>
                  <button
                    onClick={() => deselect(tag.id)}
                    className="p-0.5 rounded-full hover:bg-card-border/40 transition-colors ml-0.5"
                  >
                    <X className="size-3.5 text-slate-400" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Unselected tags ── */}
      <motion.div layout className="flex flex-wrap gap-2">
        {unselected.map((tag) => (
          <motion.button
            key={tag.id}
            layoutId={`tag-${s.num}-${tag.id}`}
            onClick={() => select(tag)}
            whileHover={{ y: -2, scale: 1.04 }}
            className="px-3.5 py-1.5 bg-card border border-card-border shadow-sm text-[11px] font-medium text-foreground/70 tracking-wide cursor-pointer"
            style={{ borderRadius: 12 }}
          >
            <motion.span layoutId={`label-${s.num}-${tag.id}`}>
              {tag.label}
            </motion.span>
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-18 px-6 bg-background overflow-hidden"
    >
      {/* Sky-teal radial bloom */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 45% at 50% 50%, rgba(14,165,233,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section header */}
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

          <TextSplit
            className="text-[clamp(2rem,5vw,3.2rem)] font-semibold tracking-tight leading-[1.15] mb-4"
            topClassName="text-foreground"
            bottomClassName="text-teal-500 dark:text-teal-400"
            maxMove={60}
            falloff={0.18}
          >
            What We Build
          </TextSplit>

          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-normal max-w-sm leading-relaxed">
            End-to-end development services tailored to your exact needs.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.num} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
