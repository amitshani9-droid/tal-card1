'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const ease = [0.2, 0.8, 0.2, 1] as const

export default function Hero() {
  return (
    <section className="sticky top-0 h-screen z-0 flex flex-col items-center justify-center text-center overflow-hidden">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero.jpeg)' }}
      />

      {/* Light overlay — keeps the "daytime luxury" airy feel */}
      <div className="absolute inset-0 bg-[#faf7f5]/72" />

      {/* Soft radial glow behind text */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(221,150,181,0.10),transparent)]" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">

        {/* Eyebrow label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="text-accent text-xs font-semibold tracking-[0.22em] uppercase mb-7"
        >
          הפקת אירועים פרטיים בוטיק
        </motion.p>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1, ease }}
          className="font-serif text-5xl md:text-6xl lg:text-[5rem] text-primary leading-[1.12] mb-7"
        >
          אירועים פרטיים עם לב,
          <br />
          סטייל ומשמעות.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease }}
          className="text-xl md:text-2xl text-muted font-light mb-12 max-w-xl mx-auto leading-relaxed"
        >
          שמחות גדולות. באווירה אינטימית. עם הרבה נשמה.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.3, ease }}
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25, ease }}
            className="inline-flex items-center gap-3 bg-primary text-white px-10 py-4 rounded-full text-lg font-medium shadow-xl hover:bg-primary-dark transition-colors duration-300"
          >
            ספרו לי על האירוע שלכם
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.7 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-[10px] font-medium tracking-[0.25em] text-primary/40 uppercase">
          גלול
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown
            className="text-primary"
            style={{ opacity: 0.35 }}
            size={22}
            strokeWidth={1.5}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
