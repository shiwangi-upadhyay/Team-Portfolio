"use client";
import { motion } from "framer-motion";

const steps = [
  { title: "Discovery", label: "Logic Mapping" },
  { title: "Architecture", label: "System Design" },
  { title: "Execution", label: "Development" },
  { title: "Delivery", label: "Production" },
];

export default function WorkFlow() {
  return (
    <section id="workflow" className="py-24 px-6 bg-background2 transition-colors duration-500 min-h-screen h-full ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-foreground transition-colors">
            How We Work
          </h2>
          <p className="text-slate-500 dark:text-gray-400 text-lg max-w-2xl mx-auto transition-colors">
            A structured, engineering-first approach to building digital excellence.
          </p>
        </div>

        <div className="relative">
          {/* Main Connecting Line - Adaptive opacity */}
          <div className="absolute top-[31px] left-0 w-full h-[1px] bg-slate-200 dark:bg-white/10 hidden md:block transition-colors" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                {/* Node - Uses bg-card and foreground variables */}
                <div className="relative mb-8">
                  <div className="w-[62px] h-[62px] rounded-full bg-card border border-card-border flex items-center justify-center transition-all duration-500 group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] shadow-sm">
                    <span className="font-mono text-sm text-slate-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                      0{index + 1}
                    </span>
                  </div>
                  
                  {/* Progress Glow Line */}
                  <div className="absolute top-1/2 left-full w-full h-[1px] bg-gradient-to-r from-blue-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left hidden md:block" />
                </div>

                {/* Content - Responsive text colors */}
                <div className="space-y-1">
                  <h3 className="text-foreground font-bold text-xl tracking-tight uppercase group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 dark:text-gray-500 font-mono text-xs uppercase tracking-tighter transition-colors">
                    {step.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}