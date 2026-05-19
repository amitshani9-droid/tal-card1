'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Instagram } from 'lucide-react'

const ease = [0.2, 0.8, 0.2, 1] as const

const WA_NUMBER = '972544866372'
const WA_MESSAGE = encodeURIComponent(
  'היי טל! ✨\nהגעתי מהאתר ואשמח לתכנן איתך את האירוע שלי!'
)

export default function FooterCTA() {
  return (
    <footer id="contact" className="bg-primary text-white">
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">

        {/* Main CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease }}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
            מוכנים להתחיל לתכנן?
          </h2>

          <p className="text-white/60 text-lg mb-12 tracking-wide">
            טל שני&nbsp;&nbsp;·&nbsp;&nbsp;054-4866372
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25, ease }}
              className="inline-flex items-center gap-3 bg-white text-primary
                         px-10 py-4 rounded-full text-lg font-medium shadow-lg
                         hover:bg-[var(--color-primary-light)] transition-colors duration-300"
            >
              <MessageCircle size={22} strokeWidth={1.5} />
              שלחו לי הודעה
            </motion.a>

            <motion.a
              href="https://www.instagram.com/tal.shani.il/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25, ease }}
              className="inline-flex items-center gap-3 bg-white/10 text-white
                         border border-white/25 px-10 py-4 rounded-full text-lg font-medium
                         hover:bg-white/20 transition-colors duration-300"
            >
              <Instagram size={22} strokeWidth={1.5} />
              @tal.shani.il
            </motion.a>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 pt-8 border-t border-white/15"
        >
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} טל שני · כל הזכויות שמורות
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
