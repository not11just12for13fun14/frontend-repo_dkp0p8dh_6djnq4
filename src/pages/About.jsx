import Navbar from '../components/Navbar'
import Section from '../components/Section'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white min-h-screen">
      <Navbar />
      <Section title="About Me" subtitle="Coder • Designer • Systems thinker">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-900/40 dark:to-purple-900/40" />
          <div className="space-y-6 text-slate-600 dark:text-slate-300">
            <p>
              I build aesthetic, performant experiences. My work blends systems thinking, design craft, and engineering discipline.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200/60 dark:border-white/10 p-4">
                <h3 className="font-medium text-slate-900 dark:text-white mb-2">Skills</h3>
                <ul className="text-sm space-y-1">
                  <li>React, TypeScript</li>
                  <li>Node, FastAPI</li>
                  <li>Tailwind, Framer Motion</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200/60 dark:border-white/10 p-4">
                <h3 className="font-medium text-slate-900 dark:text-white mb-2">Tools</h3>
                <ul className="text-sm space-y-1">
                  <li>VS Code, Figma</li>
                  <li>GitHub, Linear</li>
                  <li>Notion, Arc</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  )
}
