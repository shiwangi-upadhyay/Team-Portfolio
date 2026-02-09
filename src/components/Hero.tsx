// "use client";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen h-full pt-32 pb-20 px-6 overflow-hidden bg-background">
      
//       {/* GLOW REMOVAL & FIX: We use a very subtle, colored background element instead of white blur */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_center,var(--accent-glow),transparent_70%)] -z-10" />

//       <div className="max-w-4xl mx-auto text-center relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <span className="inline-block px-3 py-1 rounded-full border border-card-border bg-card text-[10px] font-bold text-slate-500 dark:text-gray-400 mb-6 uppercase tracking-[0.2em]">
//             Available for Q1 2026 Projects
//           </span>
          
//           {/* HEADING: Dynamic colors from CSS variables for perfect visibility */}
//           <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[var(--heading-from)] to-[var(--heading-to)] leading-[1.1]">
//             We Build Scalable Web & AI Solutions for Modern Businesses
//           </h1>
          
//           <p className="text-lg text-slate-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
//             A specialized 2-person engineering team focusing on production-ready web apps and custom Generative AI integrations.
//           </p>
          
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//             <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 group shadow-xl shadow-blue-500/20 transition-all cursor-pointer">
//               Start your project
//               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//             </button>
//             <button className="w-full sm:w-auto bg-card hover:bg-slate-200 dark:hover:bg-white/10 border border-card-border text-foreground px-8 py-4 rounded-2xl font-bold transition-all cursor-pointer">
//               View our stack
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      
      {/* THE SPOTLIGHT: Positioned to sweep across from top-left */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block px-3 py-1 rounded-full border border-card-border bg-card/50 backdrop-blur-sm text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-gray-400 mb-8">
            Available for Q1 2026 Projects
          </span>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-[var(--heading-from)] to-[var(--heading-to)] leading-[1] py-2">
            We Build Scalable <br className="hidden md:block" /> Web & AI Solutions
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
            A specialized 2-person engineering team focusing on production-ready web apps and custom Generative AI integrations.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all cursor-pointer active:scale-95 shadow-2xl shadow-blue-500/20">
              Start your project
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto bg-card hover:bg-slate-200 dark:hover:bg-white/10 border border-card-border text-foreground px-10 py-5 rounded-2xl font-bold transition-all cursor-pointer active:scale-95">
              View our stack
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}