import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Moon, Sun, Github, Linkedin } from 'lucide-react'

function DarkModeToggle() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    // Initialize from system or previous preference
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldDark = stored ? stored === 'dark' : prefersDark
    setEnabled(shouldDark)
    document.documentElement.classList.toggle('dark', shouldDark)
  }, [])

  const toggle = () => {
    const next = !enabled
    setEnabled(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="inline-flex items-center gap-2 rounded-full bg-black/5 dark:bg-white/10 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
    >
      {enabled ? <Moon size={16} /> : <Sun size={16} />}
      <span className="hidden sm:inline">{enabled ? 'Dark' : 'Light'}</span>
    </button>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const linkBase =
    'px-3 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-200 hover:bg-black/5 dark:hover:bg-white/10 transition-colors'

  const active =
    'bg-black/10 dark:bg-white/15 text-slate-900 dark:text-white'

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/60 dark:bg-slate-950/60 border-b border-slate-200/60 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500"></div>
            <span className="font-semibold text-slate-900 dark:text-white tracking-tight">Your Name</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {[
              {to: '/', label: 'Home'},
              {to: '/about', label: 'About'},
              {to: '/projects', label: 'Projects'},
              {to: '/skills', label: 'Skills'},
              {to: '/contact', label: 'Contact'},
              {to: '/blog', label: 'Blog'},
            ].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({isActive}) => `${linkBase} ${isActive ? active : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200"><Github size={18} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200"><Linkedin size={18} /></a>
            <DarkModeToggle />
          </div>

          <button className="md:hidden p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10" onClick={() => setOpen(v=>!v)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200/60 dark:border-white/10 bg-white/80 dark:bg-slate-950/70 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
            {[
              {to: '/', label: 'Home'},
              {to: '/about', label: 'About'},
              {to: '/projects', label: 'Projects'},
              {to: '/skills', label: 'Skills'},
              {to: '/contact', label: 'Contact'},
              {to: '/blog', label: 'Blog'},
            ].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({isActive}) => `${linkBase} ${isActive ? active : ''}`}
              >
                {item.label}
              </NavLink>
            ))}

            <div className="flex items-center gap-3 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200"><Github size={18} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200"><Linkedin size={18} /></a>
              <DarkModeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
