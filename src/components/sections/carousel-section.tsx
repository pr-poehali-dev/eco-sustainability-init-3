import { motion } from "framer-motion"

const items = [
  "🍽️ Завтрак",
  "🎨 Рисование",
  "🎵 Музыка",
  "🌳 Прогулка",
  "😴 Тихий час",
  "🧼 Умывание",
  "🏃 Физкультура",
  "📖 Чтение",
  "🧩 Игра",
  "🎭 Театр",
  "🌈 Танцы",
  "🍎 Полдник",
  "✂️ Аппликация",
  "🎲 Настольные игры",
  "🧸 Свободная игра",
]

export function CarouselSection() {
  const doubled = [...items, ...items]

  return (
    <section id="adaptation" className="py-20 overflow-hidden bg-[hsl(200,80%,45%)]">
      <div className="mb-8 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-white/70 mb-2">🌟 Режимные моменты</p>
        <h2 className="text-3xl md:text-4xl font-display text-white">
          Весь день по карточкам!
        </h2>
      </div>

      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap gap-4 py-4">
          {doubled.map((item, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 px-6 py-4 rounded-2xl bg-white/20 border border-white/30 text-white font-bold text-lg"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.35)" }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
