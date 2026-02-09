// "use client";
// import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";
// import { Sun, Moon, Code2, Cpu, Menu, X } from "lucide-react";

// export default function Navbar() {
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Avoid hydration mismatch by waiting for mount
//   useEffect(() => setMounted(true), []);

//   return (
//     <nav className="fixed top-0 w-full z-50 border-b border-card-border bg-background/80 backdrop-blur-md transition-colors duration-300">
//       <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
//         {/* Logo Branding - Uses dynamic foreground */}
//         <div className="flex items-center gap-2 font-bold text-xl tracking-tighter cursor-pointer">
//           <div className="flex -space-x-1">
//             <Code2 className="text-blue-600 dark:text-blue-500 w-6 h-6" />
//             <Cpu className="text-purple-600 dark:text-purple-500 w-6 h-6" />
//           </div>
//           <span className="text-foreground uppercase tracking-widest text-sm font-black">
//             CodeCraft
//           </span>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center gap-8">
//           <div className="flex items-center gap-6 text-sm font-medium text-slate-500 dark:text-gray-400">
//             <a href="#services" className="hover:text-blue-600 dark:hover:text-white transition-colors">
//               Services
//             </a>
//             <a href="#stack" className="hover:text-blue-600 dark:hover:text-white transition-colors">
//               Tech Stack
//             </a>
//             <a href="#workflow" className="hover:text-blue-600 dark:hover:text-white transition-colors">
//               Workflow
//             </a>
//             <a href="#contact" className="hover:text-blue-600 dark:hover:text-white transition-colors">
//               Contact
//             </a>
//           </div>

//           <div className="h-4 w-px bg-card-border" />

//           {/* Theme Toggle Button - Uses dynamic card colors */}
//           <button
//             onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//             className="p-2 rounded-xl bg-card border border-card-border text-foreground transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-sm"
//           >
//             {mounted && (theme === "dark" ? <Sun size={18} /> : <Moon size={18} />)}
//           </button>

//           <a
//             href="#contact"
//             className="bg-foreground text-background px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all shadow-md active:scale-95"
//           >
//             Hire Us
//           </a>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden flex items-center gap-4">
//           <button
//             onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//             className="p-2 text-foreground"
//           >
//             {mounted && (theme === "dark" ? <Sun size={18} /> : <Moon size={18} />)}
//           </button>
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="p-2 text-foreground"
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay - Adaptive background */}
//       {isMenuOpen && (
//         <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-card-border p-6 flex flex-col gap-4 text-sm font-bold uppercase tracking-widest shadow-xl">
//           <a href="#services" className="text-foreground" onClick={() => setIsMenuOpen(false)}>
//             Services
//           </a>
//           <a href="#stack" className="text-foreground" onClick={() => setIsMenuOpen(false)}>
//             Tech Stack
//           </a>
//           <a href="#workflow" className="text-foreground" onClick={() => setIsMenuOpen(false)}>
//             Workflow
//           </a>
//           <a href="#contact" className="text-blue-600" onClick={() => setIsMenuOpen(false)}>
//             Contact
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// }


"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock"; // Adjust path based on where shadcn puts it
import {
  IconHome,
  IconTerminal2,
  IconBriefcase,
  IconMessage,
  IconSun,
  IconMoon,
} from "@tabler/icons-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-slate-500 dark:text-gray-300" />
      ),
      href: "/",
    },
    {
      title: "Services",
      icon: (
        <IconBriefcase className="h-full w-full text-slate-500 dark:text-gray-300" />
      ),
      href: "#services",
    },
    {
      title: "Tech Stack",
      icon: (
        <IconTerminal2 className="h-full w-full text-slate-500 dark:text-gray-300" />
      ),
      href: "#stack",
    },
    {
      title: "Contact",
      icon: (
        <IconMessage className="h-full w-full text-slate-500 dark:text-gray-300" />
      ),
      href: "#contact",
    },
    {
      title: "Toggle Theme",
      icon: (
        <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="h-full w-full flex items-center justify-center">
           {theme === "dark" ? (
             <IconSun className="h-full w-full text-yellow-400" />
           ) : (
             <IconMoon className="h-full w-full text-slate-500" />
           )}
        </div>
      ),
      href: "#",
    },
  ];

  return (
    <div className="fixed bottom-10 w-full flex items-center justify-center z-50 pointer-events-none">
      <div className="pointer-events-auto">
        <FloatingDock
          items={links}
          /* Custom styling to match your symmetry */
          desktopClassName="bg-card/80 backdrop-blur-md border border-card-border shadow-2xl"
          mobileClassName="right-6 bottom-6" 
        />
      </div>
    </div>
  );
}