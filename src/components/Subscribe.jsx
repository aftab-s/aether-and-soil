import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Subscribe() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [filling, setFilling] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setFilling(true)
    setTimeout(() => {
      setSubmitted(true)
      setFilling(false)
    }, 600)
  }

  return (
    <section
      id="subscribe"
      className="relative py-24 sm:py-32 px-5 sm:px-8 text-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 60% 50%, #3d2214 0%, #1a0f0a 70%)' }}
    >
      <motion.div
        className="relative z-10 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="section-label justify-center flex">Early Access</p>
        <h2 className="font-serif font-light text-cream mb-4 leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
          Join the<br /><em className="italic text-gold">Harvest</em>
        </h2>
        <p className="section-body mx-auto mb-8 max-w-md">
          Our July 2026 single-origin batch is limited to 500 bags.
          Be among the first to experience the soil beneath the aether.
        </p>

        {/* Launch badge */}
        <div className="inline-flex items-center gap-2.5 font-body text-xs sm:text-sm tracking-[0.12em] uppercase
                        text-terracotta bg-terracotta/10 border border-terracotta/30 px-4 py-2.5 mb-10">
          <span className="animate-ping-slow inline-block">●</span>
          July 2026 · Limited to 500 Bags
        </div>

        {/* Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 shadow-2xl mb-5">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 font-body text-sm bg-oat/5 border border-oat/15
                         text-cream placeholder-oat/40 px-5 sm:px-6 py-4 outline-none focus:bg-oat/8
                         focus:border-gold/50 transition-all duration-200 sm:border-r-0"
            />
            <button
              type="submit"
              className="relative overflow-hidden font-body text-xs sm:text-sm tracking-[0.12em] uppercase
                          px-6 sm:px-8 py-4 bg-terracotta border border-terracotta text-cream whitespace-nowrap
                          transition-colors duration-300 hover:bg-terra_lt"
            >
              <span
                className="absolute inset-0 bg-moss_lt transition-transform duration-500 ease-out"
                style={{ transform: filling ? 'translateY(0)' : 'translateY(100%)' }}
              />
              <span className="relative z-10">Secure My Bag</span>
            </button>
          </form>
        ) : (
          <motion.div
            className="flex items-center justify-center gap-3 font-body text-sm tracking-[0.12em]
                        uppercase text-moss_lt border border-moss/30 px-6 py-4 mb-5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <span>✓</span> You're on the list — we'll be in touch
          </motion.div>
        )}

        <p className="font-body text-xs sm:text-sm text-oat/45">
          No spam. No middlemen. Just exceptional coffee from the source.
        </p>
      </motion.div>
    </section>
  )
}
