import { motion } from "framer-motion"

const features = [
  {
    emoji: "🕐",
    title: "Режимные моменты",
    description:
      "Карточки АДК помогают детям понимать, что происходит прямо сейчас: завтрак, прогулка, тихий час, умывание. Ребёнок знает, чего ожидать — и это снижает тревогу.",
    color: "hsl(200, 80%, 45%)",
    bg: "hsl(200, 80%, 95%)",
  },
  {
    emoji: "📚",
    title: "Расписание занятий",
    description:
      "Визуальное расписание на день помогает ребёнку ориентироваться в структуре дня. Он видит: сначала рисование, потом музыка, потом прогулка.",
    color: "hsl(30, 100%, 55%)",
    bg: "hsl(30, 100%, 95%)",
  },
  {
    emoji: "🌱",
    title: "Адаптация без стресса",
    description:
      "Знакомые символы из дома помогают ребёнку чувствовать себя в безопасности. Когда слова непонятны — картинки всегда на помощь.",
    color: "hsl(120, 50%, 40%)",
    bg: "hsl(120, 50%, 94%)",
  },
  {
    emoji: "🤝",
    title: "Мост между домом и садом",
    description:
      "Воспитатели и родители используют одинаковые карточки. Это создаёт единое пространство понимания для ребёнка дома и в саду.",
    color: "hsl(280, 60%, 50%)",
    bg: "hsl(280, 60%, 95%)",
  },
  {
    emoji: "💬",
    title: "Общение без барьеров",
    description:
      "Карточки помогают ребёнку выразить желание, просьбу, чувство — даже если он ещё не говорит уверенно на русском языке.",
    color: "hsl(340, 80%, 55%)",
    bg: "hsl(340, 80%, 96%)",
  },
  {
    emoji: "⭐",
    title: "Уверенность и радость",
    description:
      "Когда ребёнок понимает и его понимают — он счастлив. АДК помогает детям активно участвовать в жизни группы и заводить друзей.",
    color: "hsl(45, 100%, 45%)",
    bg: "hsl(45, 100%, 95%)",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-bold uppercase tracking-widest text-[hsl(200,80%,45%)] mb-3">
            🎯 Как это работает
          </p>
          <h2 className="text-4xl md:text-5xl font-display text-foreground">
            АДК в детском саду
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto font-semibold">
            Шесть ключевых направлений, которые делают пребывание ребёнка в саду комфортным и радостным
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="group relative p-7 rounded-3xl border-2 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
              style={{ backgroundColor: feature.bg, borderColor: feature.color + "33" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-sm"
                style={{ backgroundColor: feature.color + "22", border: `2px solid ${feature.color}44` }}
              >
                {feature.emoji}
              </div>
              <h3
                className="text-xl font-display mb-3"
                style={{ color: feature.color }}
              >
                {feature.title}
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed font-semibold">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
