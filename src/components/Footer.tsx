export default function Footer() {
  return (
    <footer className="border-t border-card-border bg-background">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Logo */}
        <span
          className="text-sm font-semibold tracking-tight"
          style={{ color: "var(--heading-from)" }}
        >
          CodeCraft
        </span>

        {/* Nav links */}
        <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#stack" className="hover:text-foreground transition-colors">Tech Stack</a>
          <a href="#workflow" className="hover:text-foreground transition-colors">Workflow</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-slate-400 dark:text-slate-600">
          © 2026 CodeCraft. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
