import { motion } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Our Story',   href: '#story' },
  { label: 'Process',     href: '#bento' },
  { label: 'Lookbook',    href: '#lookbook' },
  { label: 'Origin Maps', href: '#subscribe' },
  { label: 'Brew Guides', href: '#subscribe' },
]

const SOCIALS = [
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'Substack',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
      </svg>
    ),
  },
]

const MANIFESTO_WORDS = ['DIRECT', 'TRADE', '·', 'RARE', 'ORIGINS', '·', 'RITUAL', 'CRAFT']

const rise = (delay = 0) => ({
  initial:     { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, amount: 0 },
  transition:  { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
})

export default function Footer() {
  return (
    <footer className="relative bg-espresso overflow-hidden">

      {/* ── Top shimmer separator ── */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* ── Ambient glow ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]
                      bg-[radial-gradient(ellipse,#b05c3a12_0%,transparent_70%)] pointer-events-none" />

      {/* ══════════════════════════════════════
          MANIFESTO MARQUEE BAR
      ══════════════════════════════════════ */}
      <div className="relative py-5 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
        <div className="flex gap-10 whitespace-nowrap animate-marquee will-change-transform">
          {[...MANIFESTO_WORDS, ...MANIFESTO_WORDS, ...MANIFESTO_WORDS, ...MANIFESTO_WORDS].map((w, i) => (
            <span
              key={i}
              className={`font-display font-semibold text-xs tracking-[0.4em] uppercase select-none ${
                w === '·' ? 'text-terracotta' : 'text-gold/20'
              }`}
            >
              {w}
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════
          MAIN FOOTER BODY
      ══════════════════════════════════════ */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 sm:pt-24 pb-10 sm:pb-14">
        <div className="grid md:grid-cols-[1fr_auto_auto] gap-12 sm:gap-16 items-start">

          {/* ── Col 1: Brand identity ── */}
          <motion.div {...rise(0)}>
            {/* Brand name */}
            <p className="font-brand font-semibold tracking-[0.12em] uppercase text-oat mb-1"
               style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
              Aether <span className="text-terracotta">&</span> Soil
            </p>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-gold/40 mb-8">
              Ritual meets Origin — Est. 2026
            </p>

            {/* Editorial micro-copy */}
            <p className="font-serif italic text-oat/55 leading-relaxed max-w-[28ch]"
               style={{ fontSize: 'clamp(0.85rem, 1.1vw, 1rem)' }}>
              "A single-origin expression of altitude, time, and the quiet labour
              of hands that know the land."
            </p>

            {/* Socials */}
            <div className="flex items-center gap-4 mt-8">
              {SOCIALS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-oat/35 hover:text-terracotta transition-colors duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── Col 2: Navigation ── */}
          <motion.div {...rise(0.08)}>
            <p className="font-body text-[0.6rem] tracking-[0.3em] uppercase text-gold/35 mb-5">Navigate</p>
            <nav>
              <ul className="flex flex-col gap-3">
                {NAV_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="group flex items-center gap-2 font-body text-sm tracking-[0.08em] text-oat/50
                                 hover:text-cream transition-colors duration-200"
                    >
                      <span className="block w-4 h-px bg-terracotta/0 group-hover:bg-terracotta/70
                                       transition-all duration-300 group-hover:w-5" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* ── Col 3: Origin details ── */}
          <motion.div {...rise(0.16)}>
            <p className="font-body text-[0.6rem] tracking-[0.3em] uppercase text-gold/35 mb-5">Origin</p>
            <ul className="flex flex-col gap-3">
              {[
                ['Region',   'Guji Zone, Ethiopia'],
                ['Altitude', '1,900m ASL'],
                ['Process',  'Natural · Sun-dried'],
                ['Harvest',  'July 2026'],
                ['Bags',     'Limited to 500'],
              ].map(([k, v]) => (
                <li key={k} className="flex flex-col gap-0.5">
                  <span className="font-body text-[0.6rem] tracking-[0.2em] uppercase text-gold/30">{k}</span>
                  <span className="font-serif italic text-oat/70 text-sm">{v}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>

      {/* ══════════════════════════════════════
          BOTTOM BAR
      ══════════════════════════════════════ */}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-[0.65rem] tracking-[0.15em] uppercase text-oat/25">
            © 2026 Aether &amp; Soil · All rights reserved
          </p>
          <div className="flex items-center gap-8">
            {['Privacy Policy', 'Terms', 'Contact'].map((item) => (
              <a
                key={item}
                href="#subscribe"
                className="font-body text-[0.65rem] tracking-[0.12em] uppercase text-oat/25
                           hover:text-terracotta/70 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
            <span className="font-serif italic text-[0.7rem] text-oat/20 select-none pointer-events-none">
              Aftab
            </span>
          </div>
        </div>
      </div>

    </footer>
  )
}
