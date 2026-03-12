import { motion } from "framer-motion"

const cards = [
  { emoji: "🍽️", title: "Завтрак", desc: "Время кушать вкусную кашу", color: "hsl(30,100%,55%)" },
  { emoji: "🎨", title: "Рисование", desc: "Занятие изобразительным искусством", color: "hsl(340,80%,55%)" },
  { emoji: "🎵", title: "Музыка", desc: "Музыкальное занятие или пение", color: "hsl(280,60%,50%)" },
  { emoji: "🌳", title: "Прогулка", desc: "Выход на улицу и игры во дворе", color: "hsl(120,50%,40%)" },
  { emoji: "😴", title: "Тихий час", desc: "Время отдыха и сна", color: "hsl(200,80%,45%)" },
  { emoji: "🧼", title: "Умывание", desc: "Мыть руки перед едой и после улицы", color: "hsl(200,70%,60%)" },
  { emoji: "🏃", title: "Физкультура", desc: "Занятие физической культурой", color: "hsl(45,100%,45%)" },
  { emoji: "📖", title: "Чтение", desc: "Воспитатель читает книгу вслух", color: "hsl(15,90%,55%)" },
]

export function ShowcaseSection() {
  return (
    <section id="cards" className="py-24 px-6 bg-[hsl(40,60%,97%)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-bold uppercase tracking-widest text-[hsl(200,80%,45%)] mb-3">
            🃏 Карточки АДК
          </p>
          <h2 className="text-4xl md:text-5xl font-display text-foreground">
            Что означает каждая карточка?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto font-semibold">
            Каждая карточка — это картинка и слово. Ребёнок узнаёт ситуацию по рисунку, а взрослый объясняет значение
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="group flex flex-col items-center p-6 rounded-3xl bg-white border-2 hover:shadow-xl transition-all duration-300 cursor-pointer"
              style={{ borderColor: card.color + "44" }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.03 }}
            >
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-4 shadow-sm"
                style={{ backgroundColor: card.color + "18", border: `2px solid ${card.color}33` }}
              >
                {card.emoji}
              </div>
              <h3 className="text-lg font-display text-foreground text-center" style={{ color: card.color }}>
                {card.title}
              </h3>
              <p className="mt-2 text-xs text-muted-foreground text-center leading-relaxed font-semibold">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#download"
            className="inline-block px-10 py-4 rounded-full bg-[hsl(200,80%,45%)] text-white font-bold text-base shadow-lg hover:bg-[hsl(200,80%,38%)] transition-colors"
          >
            ⬇️ Скачать все карточки
          </a>
        </motion.div>
      </div>
    </section>
  )
}
