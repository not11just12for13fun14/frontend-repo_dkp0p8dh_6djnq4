import Navbar from '../components/Navbar'
import Section from '../components/Section'
import Footer from '../components/Footer'

const skills = {
  Languages: ['JavaScript', 'TypeScript', 'Python', 'SQL'],
  Frameworks: ['React', 'Next.js', 'FastAPI', 'Node'],
  Design: ['Figma', 'Framer', 'Notion', 'Linear']
}

export default function Skills() {
  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white min-h-screen">
      <Navbar />
      <Section title="Skills" subtitle="What I use to build and design.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="rounded-2xl border border-slate-200/60 dark:border-white/10 p-5 bg-white/60 dark:bg-white/5">
              <h3 className="font-medium mb-3">{group}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="px-3 py-1.5 rounded-full text-sm bg-black/5 dark:bg-white/10 text-slate-700 dark:text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Footer />
    </div>
  )
}
