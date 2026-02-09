export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-background border-t border-card-border transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2 font-black text-xl tracking-tighter text-foreground">
          <span>CODECRAFT</span>
        </div>
        
        <div className="flex gap-8 text-sm font-medium text-slate-500 dark:text-gray-500">
          <a href="#services" className="hover:text-blue-600 dark:hover:text-white transition-colors">Services</a>
          <a href="#stack" className="hover:text-blue-600 dark:hover:text-white transition-colors">Tech Stack</a>
          <a href="#workflow" className="hover:text-blue-600 dark:hover:text-white transition-colors">Workflow</a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-white transition-colors">Contact</a>
        </div>

        <p className="text-[10px] text-slate-400 dark:text-gray-600 font-mono tracking-widest uppercase">
          © 2026 CODECRAFT_AGENCY. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}