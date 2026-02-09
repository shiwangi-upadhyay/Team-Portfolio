"use client";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-background transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-foreground transition-colors">
            Let's build together.
          </h2>
          <p className="text-slate-500 dark:text-gray-400 text-lg transition-colors">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-card border border-card-border rounded-3xl p-8 md:p-12 shadow-2xl transition-colors duration-500"
        >
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Name Field */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground/70 ml-1">Your Name</label>
                <input 
                  type="text" 
                  placeholder="Full Name"
                  className="w-full bg-background border border-card-border rounded-2xl p-4 text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all placeholder:text-slate-400 dark:placeholder:text-gray-700"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground/70 ml-1">Work Email</label>
                <input 
                  type="email" 
                  placeholder="name@company.com"
                  className="w-full bg-background border border-card-border rounded-2xl p-4 text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all placeholder:text-slate-400 dark:placeholder:text-gray-700"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground/70 ml-1">Message</label>
              <textarea 
                rows={6}
                placeholder="Briefly describe your project goals..."
                className="w-full bg-background border border-card-border rounded-2xl p-4 text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all placeholder:text-slate-400 dark:placeholder:text-gray-700 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
              <div className="flex items-center gap-2 text-slate-500 dark:text-gray-500 text-sm font-medium">
                <CheckCircle2 size={16} className="text-blue-500" />
                <span>Average response time: 2-4 hours</span>
              </div>
              
              <button className="w-full md:w-auto px-10 py-4 bg-foreground text-background hover:bg-blue-600 hover:text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-3 group shadow-lg shadow-blue-500/10">
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </form>
        </motion.div>

        {/* Alternative Contact */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 dark:text-gray-500 text-sm">
            Prefer direct email? <a href="mailto:hello@codecraft.agency" className="text-blue-500 font-bold hover:underline">hello@codecraft.agency</a>
          </p>
        </div>
      </div>
    </section>
  );
}