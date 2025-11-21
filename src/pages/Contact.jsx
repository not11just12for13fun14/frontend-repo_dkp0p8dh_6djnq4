import Navbar from '../components/Navbar'
import Section from '../components/Section'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Thanks! I will get back to you soon.')
    e.currentTarget.reset()
  }

  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white min-h-screen">
      <Navbar />
      <Section title="Contact" subtitle="Let’s build something together.">
        <form onSubmit={onSubmit} className="max-w-xl space-y-4">
          <input required type="text" name="name" placeholder="Name" className="w-full rounded-xl bg-white/60 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/40" />
          <input required type="email" name="email" placeholder="Email" className="w-full rounded-xl bg-white/60 dark:bg-white/5 border border-slate-200/60 dark:border:white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/40" />
          <textarea required name="message" placeholder="Your message" rows="5" className="w-full rounded-xl bg-white/60 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/40" />
          <button type="submit" className="rounded-full px-5 py-3 bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-sm font-medium">Send</button>
          {status && <p className="text-sm text-slate-600 dark:text-slate-300">{status}</p>}
        </form>
      </Section>
      <Footer />
    </div>
  )
}
