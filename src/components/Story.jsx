import { motion } from 'framer-motion'

const rise = (delay = 0) => ({
  initial:     { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, amount: 0 },
  transition:  { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay },
})

export default function Story() {
  return (
    <section id="story" className="bg-velvet py-20 sm:py-28 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Image */}
        <motion.div className="relative" {...rise(0)}>
          <div className="relative overflow-hidden">
            <img
              src="/volcanic_soil_cherries.png"
              alt="Volcanic soil with coffee cherries"
              className="w-full aspect-[3/4] object-cover brightness-75 hover:brightness-85 transition-all duration-700"
              loading="lazy"
            />
          </div>
          <div className="absolute top-[-12px] left-[-12px] right-[12px] bottom-[12px] border border-gold/20 pointer-events-none hidden sm:block" />
        </motion.div>

        {/* Text */}
        <motion.div {...rise(0.12)}>
          <p className="section-label">Our Philosophy</p>
          <h2 className="section-title mb-6">
            Ritual Meets<br /><em className="italic text-gold">Origin</em>
          </h2>
          <p className="section-body mb-6">
            Every bag of Aether &amp; Soil begins 1,900 metres above sea level,
            in soils forged by ancient volcanoes. The same terroir that sculpts
            mountains coaxes jasmine and stone-fruit from a humble coffee cherry.
          </p>
          <blockquote className="border-l-2 border-terracotta pl-5 my-8 font-serif italic text-gold font-light leading-relaxed text-lg sm:text-xl md:text-2xl">
            "We don't source coffee. We curate a landscape in a cup."
          </blockquote>
          <p className="section-body mb-6">
            Our process is unhurried — a natural, sun-dried method that lets each bean
            express the wildness of its land before it ever meets a roaster's drum.
          </p>
          <p className="font-body text-xs sm:text-sm tracking-[0.1em] text-moss_lt flex items-center gap-2">
            <span>⬡</span> Ethiopia Guji Zone · Natural Heirloom Varietals
          </p>
        </motion.div>
      </div>
    </section>
  )
}
