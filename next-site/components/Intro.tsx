'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const ease = [0.2, 0.8, 0.2, 1] as const

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, delay, ease } },
})

export default function Intro() {
  return (
    <section id="about" className="py-28 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-16 md:gap-20">

        {/* Image — first in DOM = right side in RTL flex */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="w-full md:w-[45%]"
        >
          <div className="relative aspect-[4/5] rounded-4xl overflow-hidden shadow-2xl group">
            {/* Decorative accent border */}
            <div className="absolute -top-3 -right-3 w-full h-full rounded-4xl border-2 border-accent/20 -z-10" />
            <Image
              src="/images/tal.JPG"
              alt="טל שני"
              fill
              priority
              className="object-cover object-top image-orient transition-transform duration-700 group-hover:scale-[1.03]"
            />
            {/* Bottom gradient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Text — second in DOM = left side in RTL flex */}
        <motion.div
          variants={fadeUp(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="w-full md:w-[55%]"
        >
          <p className="text-accent text-xs font-semibold tracking-[0.22em] uppercase mb-5">
            קצת עליי
          </p>

          <blockquote className="relative font-serif text-2xl md:text-3xl text-primary font-light leading-[1.65] italic pr-6">
            {/* Decorative quote mark */}
            <span
              className="absolute -top-4 -right-2 text-[5.5rem] leading-none text-accent/25 font-serif select-none"
              aria-hidden
            >
              &ldquo;
            </span>
            אחרי שנים של הפקת אירועים לחברות וארגונים, אני מתרגשת לפתוח מקום גם לאירועים הפרטיים שלכם. מקום שבו הניסיון והדיוק המקצועי פוגשים יחס אישי ורגישות.
          </blockquote>

          <div className="mt-10 h-px w-16 bg-accent/40" />
          <p className="mt-4 text-muted font-medium text-base">טל שני</p>
        </motion.div>
      </div>
    </section>
  )
}
