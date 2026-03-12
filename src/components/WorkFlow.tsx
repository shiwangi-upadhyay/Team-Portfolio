"use client";
import { motion } from "framer-motion";
import { Search, Layers, Code2, Send } from "lucide-react";
import { TextSplit } from "@/components/ui/split-text";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const timelineData = [
  {
    id: 1,
    title: "Discovery",
    date: "Week 1–2",
    content:
      "Map goals, constraints, and user needs into a clear technical direction before writing a line of code.",
    category: "Planning",
    icon: Search,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Architecture",
    date: "Week 3",
    content:
      "Data models, API contracts, and topology defined upfront so nothing needs rethinking mid-build.",
    category: "Design",
    icon: Layers,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 3,
    title: "Execution",
    date: "Week 4–8",
    content:
      "Iterative, test-driven development with weekly demos so you see real progress at every stage.",
    category: "Development",
    icon: Code2,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 60,
  },
  {
    id: 4,
    title: "Delivery",
    date: "Week 9+",
    content:
      "CI/CD pipelines, monitoring, and docs handed off so your team owns the system confidently.",
    category: "Production",
    icon: Send,
    relatedIds: [3],
    status: "pending" as const,
    energy: 20,
  },
];

export default function WorkFlow() {
  return (
    <section
      id="workflow"
      className="relative py-18 px-6 bg-background overflow-hidden"
    >
      {/* Radial bloom */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 45% at 50% 50%, rgba(45,212,191,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-col items-center text-center mb-10"
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
            <br />
            <span className="text-xs text-slate-400 dark:text-slate-500">
              Click any node to explore the step.
            </span>
          </p>
        </motion.div>

        {/* Orbital timeline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
        >
          <RadialOrbitalTimeline timelineData={timelineData} />
        </motion.div>
      </div>
    </section>
  );
}
