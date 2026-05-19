'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a
          href="#"
          className="font-serif text-xl font-bold text-primary tracking-wide"
        >
          טל שני
        </a>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-foreground/80">
          <a href="#about"   className="hover:text-primary transition-colors">קצת עליי</a>
          <a href="#services" className="hover:text-primary transition-colors">אירועים</a>
          <a href="#promise" className="hover:text-primary transition-colors">ההבטחה שלי</a>
        </nav>

        <a
          href="#contact"
          className={`text-sm font-medium px-5 py-2 rounded-full transition-all duration-300 ${
            scrolled
              ? 'bg-primary text-white hover:bg-primary-dark'
              : 'bg-white/90 text-primary hover:bg-white'
          }`}
        >
          בואו נדבר
        </a>
      </div>
    </motion.header>
  )
}
