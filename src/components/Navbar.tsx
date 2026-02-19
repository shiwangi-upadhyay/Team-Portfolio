"use client";
import { FloatingDock } from "@/components/ui/floating-dock";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import {
  IconHome,
  IconTerminal2,
  IconBriefcase,
  IconMessage,
  IconSun,
  IconMoon,
  IconLayoutNavbarCollapse,
} from "@tabler/icons-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-slate-500 dark:text-gray-300" />,
      href: "/",
    },
    {
      title: "Services",
      icon: <IconBriefcase className="h-full w-full text-slate-500 dark:text-gray-300" />,
      href: "#services",
    },
    {
      title: "Workflow",
      icon: <IconTerminal2 className="h-full w-full text-slate-500 dark:text-gray-300" />,
      href: "#workflow",
    },
    {
      title: "Contact",
      icon: <IconMessage className="h-full w-full text-slate-500 dark:text-gray-300" />,
      href: "#contact",
    },
    {
      title: "Toggle Theme",
      icon: (
        <div
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setTheme(theme === "dark" ? "light" : "dark");
          }}
          className="h-full w-full flex items-center justify-center"
        >
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
    <>
      {/* Desktop — centered at bottom */}
      <div className="hidden md:flex fixed bottom-10 left-0 right-0 justify-center z-50 pointer-events-none">
        <div className="pointer-events-auto">
          <FloatingDock
            items={links}
            desktopClassName="bg-card/80 backdrop-blur-md border border-card-border shadow-2xl"
          />
        </div>
      </div>

      {/* Mobile FAB — hard-coded fixed bottom-right via inline style */}
      <div
        className="md:hidden"
        style={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 50 }}
      >
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute right-0 bottom-full mb-2 flex flex-col gap-2 items-end"
            >
              {links.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    transition: { delay: idx * 0.05 },
                  }}
                  transition={{ delay: (links.length - 1 - idx) * 0.05 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-card/80 backdrop-blur-md border border-card-border shadow-sm"
                  >
                    <div className="h-4 w-4">{item.icon}</div>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-card/80 backdrop-blur-md border border-card-border shadow-lg"
        >
          <IconLayoutNavbarCollapse className="h-5 w-5 text-slate-500 dark:text-slate-400" />
        </button>
      </div>
    </>
  );
}
