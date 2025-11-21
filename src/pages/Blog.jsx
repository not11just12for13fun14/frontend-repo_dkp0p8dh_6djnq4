import Navbar from '../components/Navbar'
import Section from '../components/Section'
import Footer from '../components/Footer'

const posts = [
  { id: 1, title: 'Building a Notion-style editor', date: '2024-06-10' },
  { id: 2, title: 'Motion primitives with Framer', date: '2024-03-22' },
]

export default function Blog() {
  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white min-h-screen">
      <Navbar />
      <Section title="Blog" subtitle="Notes on building and design.">
        <div className="space-y-4">
          {posts.map((p) => (
            <a key={p.id} href="#" className="block rounded-2xl border border-slate-200/60 dark:border-white/10 p-5 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <div className="text-sm text-slate-500">{p.date}</div>
              <div className="font-medium mt-1">{p.title}</div>
            </a>
          ))}
        </div>
      </Section>
      <Footer />
    </div>
  )
}
