import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function ManifestoSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50])

  const words = [
    "Каждый", "ребёнок", "заслуживает", "быть", "услышанным",
    "—", "независимо", "от", "языка,", "который", "он", "знает."
  ]

  return (
    <section ref={containerRef} className="relative py-32 px-6 overflow-hidden bg-[hsl(200,80%,45%)]">
      {/* Decorative circles */}
      <motion.div
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white opacity-10"
        style={{ y }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-white opacity-10"
        style={{ y }}
      />

      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          className="text-sm font-bold uppercase tracking-widest text-white/70 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          🌟 Наша миссия
        </motion.p>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display text-white leading-tight">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <motion.p
          className="mt-10 text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-semibold leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          АДК — это набор карточек, символов и картинок, которые помогают детям понимать распорядок дня, 
          участвовать в занятиях и общаться с воспитателями и сверстниками. 
          Это мостик между домом и детским садом.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          {["🏠 Режимные моменты", "📅 Расписание занятий", "🤝 Адаптация", "🃏 Карточки АДК"].map((tag) => (
            <span
              key={tag}
              className="px-5 py-2 rounded-full bg-white/20 text-white font-bold text-sm border border-white/30"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
