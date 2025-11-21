import { motion } from 'framer-motion'

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_45%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_45%)]" />
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          {title && (
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-2 text-slate-600 dark:text-slate-300">{subtitle}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  )
}
