'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const ease = [0.2, 0.8, 0.2, 1] as const

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

const photos = [
  { src: '/images/evant1.jpg',  alt: 'אירוע גן בוטיק עם קיר בלונים' },
  { src: '/images/evant2.JPG',  alt: 'הכנות לאירוע גן עם שולחנות לבנים' },
  { src: '/images/evant3.JPG',  alt: 'אורחים ליד הבר באירוע ערב גן' },
]

export default function Gallery() {
  return (
    <section className="pb-28 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.75, ease }}
        className="font-serif text-4xl md:text-5xl text-primary text-center mb-14"
      >
        הצצה לעבודה שלי
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto"
      >
        {photos.map(({ src, alt }) => (
          <motion.div
            key={src}
            variants={item}
            whileHover={{ y: -8, transition: { duration: 0.3, ease } }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md
                       border border-white hover:shadow-xl transition-shadow duration-500 group"
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center image-orient
                         transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
