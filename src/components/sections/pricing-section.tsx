import { motion } from "framer-motion"

const downloadSets = [
  {
    emoji: "🕐",
    title: "Режимные моменты",
    desc: "Карточки для всех режимных событий дня: завтрак, прогулка, сон, умывание и другие",
    items: ["Завтрак / Обед / Полдник / Ужин", "Прогулка на улице", "Тихий час", "Умывание руки", "Туалет", "Одевание / Раздевание"],
    color: "hsl(200,80%,45%)",
    bg: "hsl(200,80%,96%)",
    badge: "12 карточек",
    highlight: false,
  },
  {
    emoji: "📅",
    title: "Расписание занятий",
    desc: "Карточки для всех видов занятий в детском саду — для составления визуального расписания дня",
    items: ["Рисование и аппликация", "Музыка и танцы", "Физкультура", "Развитие речи", "Математика", "Окружающий мир"],
    color: "hsl(30,100%,55%)",
    bg: "hsl(30,100%,96%)",
    badge: "10 карточек",
    highlight: true,
  },
  {
    emoji: "💬",
    title: "Чувства и эмоции",
    desc: "Карточки для выражения базовых эмоций и состояний — помогают ребёнку рассказать о себе",
    items: ["Радость / Грусть", "Страх / Тревога", "Голод / Жажда", "Больно / Нехорошо", "Хочу домой", "Хочу играть"],
    color: "hsl(340,80%,55%)",
    bg: "hsl(340,80%,96%)",
    badge: "8 карточек",
    highlight: false,
  },
]

export function PricingSection() {
  return (
    <section id="download" className="py-24 px-6 bg-[hsl(40,60%,97%)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-bold uppercase tracking-widest text-[hsl(200,80%,45%)] mb-3">
            ⬇️ Скачать карточки
          </p>
          <h2 className="text-4xl md:text-5xl font-display text-foreground">
            Наборы карточек АДК
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto font-semibold">
            Все карточки бесплатны. Распечатайте, заламинируйте и используйте дома и в саду
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {downloadSets.map((set, i) => (
            <motion.div
              key={set.title}
              className="relative flex flex-col rounded-3xl border-2 overflow-hidden"
              style={{
                backgroundColor: set.highlight ? set.color : set.bg,
                borderColor: set.highlight ? set.color : set.color + "44",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {set.highlight && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white text-xs font-bold" style={{ color: set.color }}>
                  ⭐ Популярный
                </div>
              )}

              <div className="p-8 flex-1">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-5 shadow-sm"
                  style={{
                    backgroundColor: set.highlight ? "rgba(255,255,255,0.25)" : set.color + "22",
                    border: `2px solid ${set.highlight ? "rgba(255,255,255,0.4)" : set.color + "44"}`,
                  }}
                >
                  {set.emoji}
                </div>

                <h3
                  className="text-2xl font-display mb-2"
                  style={{ color: set.highlight ? "white" : set.color }}
                >
                  {set.title}
                </h3>
                <span
                  className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4"
                  style={{
                    backgroundColor: set.highlight ? "rgba(255,255,255,0.25)" : set.color + "22",
                    color: set.highlight ? "white" : set.color,
                  }}
                >
                  {set.badge}
                </span>
                <p
                  className="text-sm font-semibold leading-relaxed mb-6"
                  style={{ color: set.highlight ? "rgba(255,255,255,0.9)" : "hsl(220,40%,30%)" }}
                >
                  {set.desc}
                </p>

                <ul className="space-y-2">
                  {set.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm font-semibold"
                      style={{ color: set.highlight ? "rgba(255,255,255,0.85)" : "hsl(220,40%,30%)" }}
                    >
                      <span
                        className="w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center text-xs"
                        style={{ backgroundColor: set.highlight ? "rgba(255,255,255,0.3)" : set.color + "33" }}
                      >
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 pt-0">
                <button
                  className="w-full py-3 rounded-2xl font-bold text-base transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
                  style={{
                    backgroundColor: set.highlight ? "white" : set.color,
                    color: set.highlight ? set.color : "white",
                  }}
                >
                  ⬇️ Скачать бесплатно
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-muted-foreground font-semibold">
            🖨️ Рекомендуем распечатать на плотной бумаге и заламинировать карточки для долгого использования
          </p>
        </motion.div>
      </div>
    </section>
  )
}
