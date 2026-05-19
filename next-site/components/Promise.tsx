'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const ease = [0.2, 0.8, 0.2, 1] as const

const list = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
}
const item = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

const promises = ['חם ומרגש', 'נעים ויפה', 'מדויק ובלתי נשכח']

export default function Promise() {
  return (
    <section id="promise" className="py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">

        {/* Lead sentence */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease }}
          className="font-serif text-2xl md:text-3xl text-primary mb-16 leading-relaxed"
        >
          מהרגע הראשון ועד הפרט האחרון, אני דואגת שהאירוע ירגיש בדיוק כמוכם:
        </motion.p>

        {/* Staggered bullet list */}
        <motion.ul
          variants={list}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-14 mb-16"
        >
          {promises.map((p) => (
            <motion.li
              key={p}
              variants={item}
              className="flex items-center justify-center gap-2.5 text-primary text-xl font-medium"
            >
              <CheckCircle className="text-accent shrink-0" size={26} strokeWidth={1.5} />
              {p}
            </motion.li>
          ))}
        </motion.ul>

        {/* Promise box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3, ease } }}
          className="bg-gradient-to-br from-surface to-[var(--color-primary-light)]
                     border border-accent/20 rounded-4xl p-12 shadow-md"
        >
          <p className="font-serif text-xl md:text-2xl text-primary font-light leading-relaxed">
            אני כאן כדי לדאוג לחיבורים הנכונים, לספקים המעולים, ולשקט הנפשי שלכם.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
