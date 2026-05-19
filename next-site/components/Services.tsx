'use client'

import { motion } from 'framer-motion'
import { Gift, Sparkles, Heart, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const ease = [0.2, 0.8, 0.2, 1] as const

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
}

const card = {
  hidden:  { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
}

interface Service {
  icon: LucideIcon
  title: string
  subtitle?: string
}

const services: Service[] = [
  { icon: Gift,     title: 'ימי הולדת עגולים' },
  { icon: Sparkles, title: 'בר / בת מצווה' },
  { icon: Heart,    title: 'חתונות בוטיק' },
  {
    icon: Users,
    title: 'חגיגות משפחתיות',
    subtitle: 'וכל רגע שבא לכם לעצור ולציין כמו שצריך.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 bg-surface-muted">
      <div className="max-w-6xl mx-auto">

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.75, ease }}
          className="font-serif text-4xl md:text-5xl text-primary text-center mb-16"
        >
          איזה אירועים אני מפיקה?
        </motion.h2>

        {/* Cards grid — staggered reveal */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14"
        >
          {services.map(({ icon: Icon, title, subtitle }) => (
            <motion.div
              key={title}
              variants={card}
              whileHover={{ y: -10, transition: { duration: 0.3, ease } }}
              className="group bg-surface rounded-2xl p-8 flex flex-col items-center text-center gap-5
                         shadow-sm border border-white hover:shadow-xl hover:border-accent/20
                         transition-shadow duration-500"
            >
              {/* Icon circle */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center
                           bg-[var(--color-primary-light)] text-primary
                           group-hover:bg-primary group-hover:text-white
                           transition-colors duration-400"
              >
                <Icon size={28} strokeWidth={1.5} />
              </div>

              <h3 className="font-serif text-xl text-primary">{title}</h3>

              {subtitle && (
                <p className="text-muted text-sm leading-relaxed">{subtitle}</p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease }}
          className="text-center text-muted font-medium text-lg max-w-2xl mx-auto"
        >
          בבית, בלוקיישן נבחר, בחיק הטבע או בכל מקום שיש לו משמעות עבורכם.
        </motion.p>
      </div>
    </section>
  )
}
