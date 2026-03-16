import { scrollToSection } from './SmoothScroll'

export default function Hero() {
  const scrollTo = (id) => scrollToSection(id)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
      style={{ background: '#1a0f0a' }}
    >
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/pour_over_bloom.png')",
          filter: 'brightness(0.28) saturate(1.2)',
        }}
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(26,15,10,0.4) 0%, rgba(26,15,10,0.65) 50%, rgba(26,15,10,0.92) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">

        {/* Origin line — Space Grotesk */}
        <p className="font-body text-xs sm:text-sm tracking-[0.28em] uppercase text-terracotta mb-8 opacity-0 animate-[fade-up_0.8s_0.3s_ease_forwards]">
          Specialty Coffee · Est. 2026
        </p>

        {/* Brand name — Syne display for the wordmark, Instrument Serif for the & */}
        <h1
          className="font-brand leading-[0.95] mb-6 opacity-0 animate-[fade-up_1s_0.5s_ease_forwards]"
          style={{ fontSize: 'clamp(3.2rem, 11vw, 9.5rem)' }}
        >
          <span className="font-bold text-cream tracking-tight">Aether</span>
          {' '}
          <span className="italic text-gold">&amp;</span>
          {' '}
          <span className="font-bold text-cream tracking-tight">Soil</span>
        </h1>

        {/* Tagline — Instrument Serif */}
        <p className="font-serif italic text-oat text-lg sm:text-xl md:text-2xl opacity-70 mb-10 opacity-0 animate-[fade-up_0.9s_0.8s_ease_forwards]">
          The Ritual of the Morning. The Soul of the Earth.
        </p>

        {/* Divider */}
        <div className="w-16 h-px bg-gold/40 mx-auto mb-10 opacity-0 animate-[fade-up_0.8s_1s_ease_forwards]" />

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center mb-14 opacity-0 animate-[fade-up_0.8s_1.1s_ease_forwards]">
          <button onClick={() => scrollTo('subscribe')} className="btn-primary">
            Secure My Bag
          </button>
          <button onClick={() => scrollTo('story')} className="btn-ghost">
            Discover Origin
          </button>
        </div>

        {/* Data strip */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-14 opacity-0 animate-[fade-up_0.8s_1.4s_ease_forwards]">
          {[
            ['Altitude','1,900m'],
            ['Process','Natural'],
            ['Notes','Jasmine · Stone Fruit'],
            ['Launch','July 2026'],
          ].map(([k, v]) => (
            <div key={k} className="text-center">
              <p className="font-body text-[0.65rem] sm:text-xs tracking-[0.22em] uppercase text-gold/55 mb-1">{k}</p>
              <p className="font-body text-xs sm:text-sm text-oat/65">{v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-[fade-up_0.8s_2s_ease_forwards]">
        <span className="font-body text-[0.6rem] sm:text-xs tracking-[0.28em] text-gold/45 uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold/40 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
