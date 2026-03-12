import { motion } from "framer-motion"

const links = [
  {
    label: "О системе АДК",
    href: "#",
  },
  {
    label: "Карточки АДК",
    href: "#cards",
  },
  {
    label: "Адаптация",
    href: "#adaptation",
  },
  {
    label: "Скачать",
    href: "#download",
  },
]

export function FooterSection() {
  return (
    <footer className="bg-foreground text-background py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-5xl mb-4">🌈</div>
          <h2 className="text-3xl md:text-4xl font-display mb-4">
            МБДОУ ДС №47 «Успех»
          </h2>
          <p className="text-background/70 font-semibold max-w-xl mx-auto leading-relaxed">
            Вместе мы создаём пространство, где каждый ребёнок чувствует себя понятым, 
            нужным и радостным — каждый день.
          </p>
        </motion.div>

        {/* Nav links */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-background/70 hover:text-background font-bold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="#download"
            className="px-10 py-4 rounded-full font-bold text-base bg-[hsl(200,80%,45%)] text-white shadow-lg hover:bg-[hsl(200,80%,38%)] transition-colors"
          >
            ⬇️ Скачать карточки бесплатно
          </a>
        </motion.div>

        {/* Bubbles decoration */}
        <motion.div
          className="flex justify-center gap-4 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {["🍽️", "🎨", "🎵", "🌳", "😴", "🏃", "📖", "🧩"].map((emoji, i) => (
            <span key={i} className="text-2xl opacity-60">{emoji}</span>
          ))}
        </motion.div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/50 text-sm font-semibold">
            © 2024 · Детский сад · Система альтернативной дополнительной коммуникации
          </p>
          <p className="text-background/30 text-xs mt-2">
            Все карточки предоставляются бесплатно для использования в образовательных целях
          </p>
        </div>
      </div>
    </footer>
  )
}