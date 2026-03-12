"use client";
import { motion } from "framer-motion";
import { TextSplit } from "@/components/ui/split-text";

const techStack = {
  web: [
    "Next.js", "React", "Node.js", "TypeScript", 
    "Tailwind CSS", "HTML/CSS", "MongoDB", "PostgreSQL"
  ],
  ai: [
    "Python", "TensorFlow", "PyTorch", "OpenAI API", 
    "LangChain", "Hugging Face", "scikit-learn", "Pandas"
  ],
};

export default function TechStack() {
  return (
    <section id="stack" className="min-h-screen h-full py-24 px-6 bg-background transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <TextSplit
            className="text-4xl md:text-5xl font-bold mb-4"
            topClassName="text-foreground"
            bottomClassName="text-teal-500 dark:text-teal-400"
            maxMove={60}
            falloff={0.18}
          >
            Our Tech Stack
          </TextSplit>
          <p className="text-slate-500 dark:text-gray-400 text-lg transition-colors">
            Modern, battle-tested technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-26" >
          {/* Web Technologies Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-card border border-card-border rounded-4xl p-8 md:p-12 shadow-xl transition-colors duration-500"
          >
            <h3 className="text-2xl font-bold text-foreground mb-8 transition-colors">
              Web Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {techStack.web.map((tech, index) => (
                <motion.span 
                  key={tech} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-background dark:bg-white/5 border border-card-border rounded-xl text-foreground/80 text-sm font-medium hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 cursor-default shadow-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* AI & Machine Learning Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-card border border-card-border rounded-4xl p-8 md:p-12 shadow-xl transition-colors duration-500"
          >
            <h3 className="text-2xl font-bold text-foreground mb-8 transition-colors">
              AI & Machine Learning
            </h3>
            <div className="flex flex-wrap gap-3">
              {techStack.ai.map((tech, index) => (
                <motion.span 
                  key={tech} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-background dark:bg-white/5 border border-card-border rounded-xl text-foreground/80 text-sm font-medium hover:border-purple-500/50 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 cursor-default shadow-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}