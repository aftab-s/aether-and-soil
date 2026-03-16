const STRIP_ITEMS = [
  'Jasmine', '◈', 'Stone Fruit', '◈', 'Dark Chocolate', '◈',
  'Altitude: 1,900m', '◈', 'Natural Process', '◈', 'Ethiopia Guji',
  '◈', 'Volcanic Soil', '◈', 'Ritual Pour-Over', '◈',
]
const doubled = [...STRIP_ITEMS, ...STRIP_ITEMS]

export default function FlavourStrip() {
  return (
    <div className="bg-terracotta py-3 sm:py-4 overflow-hidden">
      <div className="flex gap-6 sm:gap-8 whitespace-nowrap animate-marquee will-change-transform">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`font-body text-xs sm:text-sm tracking-[0.18em] uppercase ${
              item === '◈' ? 'text-cream/40' : 'text-cream'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
