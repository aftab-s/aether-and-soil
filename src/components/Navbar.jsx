import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { scrollToSection } from './SmoothScroll'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    scrollToSection(id)
  }

  return (
    <>
      {/* ═══════════════════════════════════════════
          DESKTOP NAV — full-width bar (md+)
      ═══════════════════════════════════════════ */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 hidden md:block ${
          scrolled
            ? 'py-3 bg-espresso/80 backdrop-blur-xl border-b border-gold/10 shadow-lg shadow-espresso/40'
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-8 md:px-12">
          <button
            onClick={() => scrollTo('hero')}
            className="font-brand font-semibold tracking-[0.1em] uppercase text-oat text-sm sm:text-base"
          >
            AETHER <span className="text-terracotta">&</span> SOIL
          </button>

          <ul className="flex gap-6 lg:gap-8">
            {[['story', 'Story'], ['bento', 'Process'], ['lookbook', 'Lookbook']].map(([id, label]) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className="font-body text-xs tracking-[0.12em] uppercase text-oat/70 hover:text-oat transition-colors duration-200 relative group"
                >
                  {label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-terracotta group-hover:w-full transition-all duration-300" />
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollTo('subscribe')}
            className="font-body text-xs tracking-[0.12em] uppercase bg-terracotta text-cream px-5 py-2.5 hover:bg-terra_lt transition-colors duration-200"
          >
            Secure My Bag
          </button>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════
          MOBILE NAV — floating pill (< md)
      ═══════════════════════════════════════════ */}
      <nav className="fixed top-0 inset-x-0 z-[60] md:hidden pointer-events-none">
        <div className="flex justify-center px-4 pt-3">
          <motion.div
            className={`pointer-events-auto flex items-center justify-between w-full max-w-[360px]
                        rounded-full px-5 py-2.5
                        transition-all duration-500 ease-out
                        ${scrolled
                          ? 'bg-espresso/60 shadow-xl shadow-espresso/50'
                          : 'bg-espresso/30'
                        }
                        border border-gold/10`}
            style={{
              backdropFilter: 'blur(24px) saturate(1.5)',
              WebkitBackdropFilter: 'blur(24px) saturate(1.5)',
            }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Logo */}
            <button
              onClick={() => scrollTo('hero')}
              className="font-brand font-semibold tracking-[0.1em] uppercase text-oat text-xs"
            >
              AETHER <span className="text-terracotta">&</span> SOIL
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col items-center justify-center w-9 h-9 relative z-[60] touch-manipulation"
              aria-label="Menu"
            >
              <span className={`absolute h-[1.5px] w-5 bg-oat rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45' : '-translate-y-[5px]'}`} />
              <span className={`absolute h-[1.5px] w-5 bg-oat rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 scale-0' : ''}`} />
              <span className={`absolute h-[1.5px] w-5 bg-oat rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45' : 'translate-y-[5px]'}`} />
            </button>
          </motion.div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════
          MOBILE FULLSCREEN OVERLAY
      ═══════════════════════════════════════════ */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[55] flex flex-col p-8 sm:p-12 md:hidden pt-20"
            style={{
              backgroundColor: 'rgba(26, 15, 10, 0.75)',
              backdropFilter: 'blur(32px) saturate(1.4)',
              WebkitBackdropFilter: 'blur(32px) saturate(1.4)',
            }}
          >
            {/* Background elements */}
            <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[40%] bg-terracotta/10 blur-[100px] rounded-full" />
            <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[30%] bg-moss/10 blur-[80px] rounded-full" />

            <div className="flex flex-col h-full relative z-10 pt-16">
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="font-body text-[0.6rem] tracking-[0.3em] uppercase text-gold/50 mb-12"
              >
                Menu — Navigator
              </motion.p>

              <div className="flex flex-col gap-6">
                {[
                  ['story', 'Our Story'],
                  ['bento', 'The Process'],
                  ['lookbook', 'Lookbook'],
                ].map(([id, label], i) => (
                  <motion.button
                    key={id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => scrollTo(id)}
                    className="group flex items-baseline gap-4 text-left"
                  >
                    <span className="font-serif italic text-gold/30 text-lg group-hover:text-gold transition-colors">0{i + 1}</span>
                    <span className="font-serif text-4xl sm:text-5xl text-cream group-hover:text-terracotta transition-colors">
                      {label}
                    </span>
                  </motion.button>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-12 pt-12 border-t border-gold/10"
              >
                <button
                  onClick={() => scrollTo('subscribe')}
                  className="w-full font-body text-xs sm:text-sm tracking-[0.15em] uppercase bg-terracotta text-cream px-8 py-5 hover:bg-terra_lt transition-colors duration-300 rounded-full"
                >
                  Secure My Bag
                </button>
              </motion.div>

              <div className="mt-auto">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-col gap-1 border-l border-gold/20 pl-4"
                >
                  <p className="font-brand text-lg text-oat">Aether & Soil</p>
                  <p className="font-body text-[0.65rem] tracking-widest uppercase text-oat/60">
                    Ethiopia Guji · Est. 2026
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
