import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { scrollToSection } from './SmoothScroll'

const SLIDES = [
  {
    num: '01 / 02',
    scene: 'THE STUDIO',
    title: 'The Minimalist Morning',
    body: 'Early light filters through linen as the gooseneck kettle reaches 94°C. The kitchen becomes a laboratory, the pour-over dripper a kind of altar. Silence, steam, and intention.',
    specs: 'METHOD: Pour-Over V60 · GRIND: Medium-Fine · RATIO: 1:16 · TEMP: 94°C',
    img: '/lookbook_home_office.png',
    alt: 'Minimalist home office coffee ritual',
  },
  {
    num: '02 / 02',
    scene: 'THE SUMMIT',
    title: 'The Mountain Brew',
    body: 'At 3,200m the air is thin but the coffee hits differently. Coals glow under a titanium moka pot. The volcanic peaks that grew your beans are silent witnesses.',
    specs: 'METHOD: Moka Pot · GRIND: Fine · RATIO: 1:8 · FIRE: Hardwood Coals',
    img: '/lookbook_mountain_campfire.png',
    alt: 'Mountain campfire coffee brew',
  },
]

export default function Lookbook() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % SLIDES.length), 7000)
    return () => clearInterval(timer)
  }, [])

  const go = (idx) => setCurrent((idx + SLIDES.length) % SLIDES.length)
  const slide = SLIDES[current]

  return (
    <section id="lookbook" className="bg-velvet py-20 sm:py-28 px-5 sm:px-8">
      {/* Header */}
      <motion.div
        className="max-w-5xl mx-auto mb-10 sm:mb-14"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="section-label">The Daily Ritual</p>
        <h2 className="section-title">
          Two Worlds,<br /><em className="italic text-gold">One Cup</em>
        </h2>
      </motion.div>

      {/* Carousel */}
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">

          {/* Image */}
          <div className="overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={`img-${current}`}
                src={slide.img}
                alt={slide.alt}
                className="w-full aspect-[4/3] object-cover brightness-[0.8]"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                loading="lazy"
              />
            </AnimatePresence>
          </div>

          {/* Text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-body text-xs sm:text-sm tracking-[0.22em] uppercase text-terracotta mb-4">
                {slide.num} — {slide.scene}
              </p>
              <h3
                className="font-serif font-light text-cream leading-tight mb-4"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.4rem)' }}
              >
                {slide.title.split(' ').slice(0, -1).join(' ')}<br />
                <em className="italic text-gold">{slide.title.split(' ').slice(-1)}</em>
              </h3>
              <p className="section-body mb-6">{slide.body}</p>
              <p className="font-body text-xs sm:text-sm text-moss_lt border-t border-moss/20 pt-3 leading-relaxed">
                {slide.specs}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 mt-8 sm:mt-10">
          <button
            onClick={() => go(current - 1)}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gold/30 text-gold flex items-center justify-center
                       hover:bg-terracotta hover:border-terracotta hover:text-cream transition-all duration-200 text-lg"
            aria-label="Previous"
          >←</button>
          <div className="flex gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className={`h-1 rounded-full transition-all duration-400 ${
                  i === current ? 'w-10 bg-gold' : 'w-4 bg-gold/25'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => go(current + 1)}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gold/30 text-gold flex items-center justify-center
                       hover:bg-terracotta hover:border-terracotta hover:text-cream transition-all duration-200 text-lg"
            aria-label="Next"
          >→</button>
        </div>
      </motion.div>
    </section>
  )
}
