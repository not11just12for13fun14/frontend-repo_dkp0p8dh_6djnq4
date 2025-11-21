import Navbar from '../components/Navbar'
import Section from '../components/Section'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const projects = [
  { id: 1, title: 'Design System', tags: ['React', 'Tailwind'], github: '#', demo: '#' },
  { id: 2, title: 'Analytics Dashboard', tags: ['Vite', 'D3'], github: '#', demo: '#' },
  { id: 3, title: 'Portfolio', tags: ['Framer Motion'], github: '#', demo: '#' },
  { id: 4, title: 'API Service', tags: ['FastAPI'], github: '#', demo: '#' },
  { id: 5, title: 'E-commerce UI', tags: ['Next.js'], github: '#', demo: '#' },
  { id: 6, title: 'Landing Page', tags: ['A/B'], github: '#', demo: '#' },
]

export default function Projects() {
  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white min-h-screen">
      <Navbar />

      <Section title="Projects" subtitle="A collection of selected work.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.03 }}
              className="group rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/10 bg-white/60 dark:bg-white/5"
            >
              <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900" />
              <div className="p-4">
                <h3 className="font-medium">{p.title}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-1 rounded-full text-xs bg-black/5 dark:bg-white/10 text-slate-600 dark:text-slate-300">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3 text-sm">
                  <a className="hover:underline" href={p.github} target="_blank" rel="noreferrer">GitHub</a>
                  <a className="hover:underline" href={p.demo} target="_blank" rel="noreferrer">Live Demo</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  )
}
