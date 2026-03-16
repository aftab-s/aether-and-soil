import { motion } from 'framer-motion'

const rise = (delay = 0) => ({
  initial:     { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, amount: 0 },
  transition:  { duration: 0.85, ease: [0.16, 1, 0.3, 1], delay },
})

const SPECS = [
  ['ALTITUDE',  '1,900m ASL'],
  ['PROCESS',   'Natural · Sun-Dried'],
  ['VARIETAL',  'Heirloom Ethiopian'],
  ['REGION',    'Guji Zone, Ethiopia'],
  ['NOTES',     'Jasmine · Stone Fruit · Dark Choc'],
  ['ROAST',     'Light — Medium Pivot'],
]

const STATS = [
  { value: '1,900',  unit: 'm',  label: 'Altitude ASL' },
  { value: '100',    unit: '%',  label: 'Natural Process' },
  { value: '72',     unit: 'h',  label: 'Fermentation' },
  { value: '500',    unit: ' bags', label: 'July 2026 Harvest' },
]

export default function BentoGrid() {
  return (
    <section id="bento" className="bg-espresso py-20 sm:py-28 overflow-hidden">

      {/* ─── Header ─────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 mb-14 sm:mb-20">
        <motion.p className="section-label" {...rise(0)}>From Farm to Cup</motion.p>
        <motion.h2 className="section-title max-w-lg" {...rise(0.08)}>
          The Extraction<br />
          <em className="italic text-gold">Anatomy</em>
        </motion.h2>
      </div>

      {/* ─── Row 1: Full-width image + floating specs card ── */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 mb-3 sm:mb-4">
        <motion.div
          className="relative overflow-hidden"
          style={{ height: 'clamp(320px, 50vw, 560px)' }}
          {...rise(0.1)}
        >
          <img
            src="/pour_over_bloom.png"
            alt="Pour-over bloom"
            className="w-full h-full object-cover brightness-75 hover:brightness-90 transition-all duration-700 hover:scale-[1.02]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso/70 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />

          {/* Overlay label — top left */}
          <div className="absolute top-6 left-6 sm:top-8 sm:left-8">
            <p className="font-body text-[0.6rem] sm:text-xs tracking-[0.3em] uppercase text-terracotta mb-1">01 — Aether</p>
            <h3 className="font-serif italic text-cream text-2xl sm:text-3xl font-light">The Bloom of the Pour</h3>
          </div>

          {/* Floating spec card — bottom right */}
          <motion.div
            className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 bg-espresso/85 backdrop-blur-sm border border-gold/15 p-4 sm:p-5 max-w-[220px] sm:max-w-xs"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-body text-[0.6rem] sm:text-xs tracking-[0.2em] uppercase text-gold/60 mb-3">Brew Notes</p>
            <ul className="space-y-0">
              {SPECS.slice(0, 3).map(([k, v]) => (
                <li key={k} className="flex justify-between gap-4 font-body text-[0.7rem] sm:text-xs py-2 border-b border-oat/8 last:border-0">
                  <span className="text-gold/70 tracking-[0.08em]">{k}</span>
                  <span className="text-oat/75 text-right">{v}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* ─── Row 2: Stats band — editorial timeline ──────── */}
      <div className="relative mb-3 sm:mb-4 overflow-hidden bg-espresso">

        {/* Subtle texture gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,#2d1810_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,#3d2214_0%,transparent_55%)]" />

        {/* Top & bottom shimmer edges */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div className="relative max-w-6xl mx-auto px-6 sm:px-10 py-16 sm:py-24">

          {/* Horizontal connecting rule through the middle */}
          <div className="absolute left-6 right-6 sm:left-10 sm:right-10 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

          {/* Stats row */}
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-0">
            {STATS.map(({ value, unit, label }, i) => {
              const isUp = i % 2 === 0   // even items float above the rule
              return (
                <motion.div
                  key={label}
                  className={`relative flex flex-col items-center ${isUp ? 'md:pb-12 md:justify-end' : 'md:pt-12 md:justify-start'} justify-center`}
                  initial={{ opacity: 0, y: isUp ? -20 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
                >
                  {/* Ghost outline number — decorative background */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 flex justify-center select-none pointer-events-none leading-none font-display font-bold"
                    style={{
                      fontSize: 'clamp(5rem, 12vw, 10rem)',
                      color: 'transparent',
                      WebkitTextStroke: '1px rgba(201,164,110,0.07)',
                      top: isUp ? 'auto' : '-0.15em',
                      bottom: isUp ? '-0.15em' : 'auto',
                    }}
                  >
                    {value}
                  </span>

                  {/* Dot on the connecting rule */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-terracotta/60"
                    style={{ top: isUp ? 'calc(100% + 0px - 0.75px)' : '-0.75px', transform: 'translateX(-50%)' }}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Label — shown above number for bottom-aligned items */}
                    {!isUp && (
                      <p className="font-body text-[0.6rem] sm:text-[0.65rem] tracking-[0.25em] uppercase text-gold/40 mb-3">
                        {label}
                      </p>
                    )}

                    {/* Value */}
                    <p
                      className="font-display font-bold leading-none text-gold"
                      style={{ fontSize: 'clamp(2.75rem, 5.5vw, 5rem)' }}
                    >
                      {value}
                      <span
                        className="font-display font-semibold text-terracotta"
                        style={{ fontSize: 'clamp(1rem, 2vw, 1.75rem)' }}
                      >
                        {unit}
                      </span>
                    </p>

                    {/* Decorative accent */}
                    <div className={`w-5 h-px bg-terracotta/40 ${!isUp ? 'mt-3 mb-0' : 'mt-3 mb-3'}`} />

                    {/* Label — shown below number for top-aligned items */}
                    {isUp && (
                      <p className="font-body text-[0.6rem] sm:text-[0.65rem] tracking-[0.25em] uppercase text-gold/40">
                        {label}
                      </p>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>


      {/* ─── Row 3: Split — soil image + remaining specs ── */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-3 sm:gap-4">

          {/* Left: volcanic soil image */}
          <motion.div className="relative overflow-hidden min-h-[280px] sm:min-h-[360px]" {...rise(0.1)}>
            <img
              src="/volcanic_soil_cherries.png"
              alt="Volcanic soil and coffee cherries"
              className="w-full h-full object-cover brightness-[0.65] hover:brightness-[0.8] transition-all duration-700 hover:scale-[1.02]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
              <p className="font-body text-[0.6rem] sm:text-xs tracking-[0.3em] uppercase text-terracotta mb-1">02 — Soil</p>
              <h3 className="font-serif italic text-cream text-xl sm:text-2xl font-light">The Origin</h3>
            </div>
          </motion.div>

          {/* Right: specs + text panel */}
          <motion.div className="bg-deep p-6 sm:p-8 flex flex-col justify-between" {...rise(0.18)}>
            <div>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-terracotta mb-5">03 — Technical Specs</p>
              <ul className="space-y-0 mb-8">
                {SPECS.map(([k, v]) => (
                  <li
                    key={k}
                    className="flex justify-between items-start font-body text-xs sm:text-sm py-3 border-b border-oat/10 last:border-0"
                  >
                    <span className="text-gold/70 tracking-[0.1em] shrink-0 mr-4">{k}</span>
                    <span className="text-oat/80 text-right">{v}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom quote */}
            <blockquote className="border-l-2 border-terracotta pl-4 font-serif italic text-gold/80 text-base sm:text-lg font-light leading-snug">
              "Volcanic basalt. Andosol-rich soil. 1,200mm of rainfall. This is not terroir — it is a love letter from the earth."
            </blockquote>
          </motion.div>

        </div>
      </div>

    </section>
  )
}
