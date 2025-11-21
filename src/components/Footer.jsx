export default function Footer() {
  return (
    <footer className="border-t border-slate-200/60 dark:border-white/10 py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="mailto:you@example.com" className="hover:text-slate-700 dark:hover:text-slate-200">you@example.com</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-700 dark:hover:text-slate-200">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-slate-700 dark:hover:text-slate-200">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
