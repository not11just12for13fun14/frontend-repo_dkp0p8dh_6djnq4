import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Section from '../components/Section'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white min-h-screen">
      <Navbar />
      <Hero />

      <Section title="Featured Projects" subtitle="A selection of recent work.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <motion.a
              key={i}
              href="#"
              className="group relative overflow-hidden rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white/50 dark:bg-white/5"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900" />
              <div className="p-4">
                <h3 className="font-medium">Project {i}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">Short description of the project and what it does.</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </div>
      </Section>

      <Section id="about" title="About" subtitle="A little bit about me.">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-900/40 dark:to-purple-900/40" />
          <div className="space-y-4 text-slate-600 dark:text-slate-300">
            <p>
              I’m a coder and designer focused on building polished products with clean code and thoughtful UX.
            </p>
            <p>
              My sweet spot is turning fuzzy ideas into well-crafted interfaces and systems.
            </p>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  )
}
