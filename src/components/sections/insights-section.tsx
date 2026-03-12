import { motion } from "framer-motion"

const steps = [
  {
    step: "01",
    emoji: "🏠",
    title: "Начните дома",
    desc: "Распечатайте карточки режимных моментов и повесьте их дома. Пусть ребёнок привыкнет к картинкам в знакомой обстановке.",
    color: "hsl(200,80%,45%)",
    bg: "hsl(200,80%,96%)",
  },
  {
    step: "02",
    emoji: "🗣️",
    title: "Называйте вместе",
    desc: "Показывайте карточку и называйте момент — «Сейчас завтрак», «Сейчас прогулка». Ребёнок запомнит связь между картинкой и событием.",
    color: "hsl(30,100%,55%)",
    bg: "hsl(30,100%,96%)",
  },
  {
    step: "03",
    emoji: "🌱",
    title: "Первые дни в саду",
    desc: "В саду воспитатели используют те же карточки. Ребёнок узнаёт знакомые символы — и чувствует себя уверенно в новом месте.",
    color: "hsl(120,50%,40%)",
    bg: "hsl(120,50%,95%)",
  },
  {
    step: "04",
    emoji: "🤝",
    title: "Общайтесь с воспитателем",
    desc: "Расскажите воспитателю, какие карточки ребёнок знает и как реагирует. Вместе вы создадите комфортную среду для малыша.",
    color: "hsl(280,60%,50%)",
    bg: "hsl(280,60%,96%)",
  },
]

const tips = [
  { emoji: "🌟", text: "Хвалите ребёнка, когда он правильно показывает карточку" },
  { emoji: "⏰", text: "Показывайте карточку заранее — за 5-10 минут до события" },
  { emoji: "🎉", text: "Превратите изучение карточек в весёлую игру" },
  { emoji: "💪", text: "Будьте терпеливы — адаптация занимает 2-6 недель" },
  { emoji: "📞", text: "Держите связь с воспитателем каждый день" },
  { emoji: "❤️", text: "Отмечайте маленькие победы вместе с ребёнком" },
]

export function InsightsSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Адаптация */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-bold uppercase tracking-widest text-[hsl(200,80%,45%)] mb-3">
            🌱 Адаптация
          </p>
          <h2 className="text-4xl md:text-5xl font-display text-foreground">
            Как помочь ребёнку адаптироваться?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto font-semibold">
            Пошаговый план для родителей: от первого знакомства с карточками до уверенного старта в детском саду
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              className="flex gap-5 p-7 rounded-3xl border-2"
              style={{ backgroundColor: step.bg, borderColor: step.color + "33" }}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div
                className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm"
                style={{ backgroundColor: step.color + "22", border: `2px solid ${step.color}44` }}
              >
                {step.emoji}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold" style={{ color: step.color }}>{step.step}</span>
                  <h3 className="text-xl font-display" style={{ color: step.color }}>{step.title}</h3>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed font-semibold">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Советы */}
        <motion.div
          className="rounded-3xl p-10 text-center"
          style={{ background: "linear-gradient(135deg, hsl(200,80%,95%) 0%, hsl(280,60%,95%) 100%)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-display text-[hsl(200,80%,35%)] mb-8">
            💡 Полезные советы для родителей
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tips.map((tip, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3 bg-white rounded-2xl p-4 text-left shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <span className="text-2xl flex-shrink-0">{tip.emoji}</span>
                <p className="text-sm text-foreground font-semibold leading-relaxed">{tip.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
