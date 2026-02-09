"use client";
import { motion } from "framer-motion";
import { Code2, Sparkles, CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Build scalable, production-ready web applications that grow with your business.",
    icon: <Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    borderColor: "hover:border-blue-500/50",
    glowColor: "hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20",
    features: [
      "Full-stack web applications",
      "SaaS platforms & dashboards",
      "Admin panels & CMS",
      "RESTful APIs & backend systems",
      "Database design & optimization",
    ],
  },
  {
    title: "AI & Machine Learning",
    description: "Integrate cutting-edge AI capabilities to automate and enhance your business.",
    icon: <Sparkles className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
    borderColor: "hover:border-purple-500/50",
    glowColor: "hover:shadow-purple-500/10 dark:hover:shadow-purple-500/20",
    features: [
      "Generative AI integrations",
      "AI-powered features & chatbots",
      "Custom ML solutions",
      "Intelligent automation",
      "Data analysis & insights",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-background2 transition-colors duration-500 min-h-screen h-full ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          {/* Using text-foreground ensures the color flips with the theme toggle */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground transition-colors">
            What We Do
          </h2>
          <p className="text-slate-500 dark:text-gray-400 text-lg transition-colors max-w-2xl mx-auto">
            End-to-end development services tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              /* bg-card and border-card-border handle the container theme swap */
              className="group relative bg-card border border-card-border rounded-2xl p-8 md:p-12 transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              {/* Icon Container */}
              <div className="bg-white dark:bg-white/5 border border-card-border w-fit p-4 rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                {service.icon}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-600 dark:text-gray-400 text-lg mb-10 leading-relaxed transition-colors">
                {service.description}
              </p>

              <div className="space-y-4 w-full">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-500 shrink-0" />
                    {/* text-foreground handles the feature list theme swap */}
                    <span className="text-foreground/90 font-medium transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}