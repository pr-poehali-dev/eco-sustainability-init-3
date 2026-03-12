import { useState } from "react"
import { motion } from "framer-motion"

const SURVEY_URL = "https://functions.poehali.dev/7e708653-b7a2-4801-847c-03c1a35b5df4"

const groups = ["Группа Солнышко", "Группа Радуга", "Группа Звёздочка", "Группа Ромашка", "Другая группа"]

export function SurveySection() {
  const [form, setForm] = useState({
    child_name: "",
    parent_name: "",
    group_name: "",
    strengths: "",
    barriers: "",
    interests: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")
    try {
      const res = await fetch(SURVEY_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        setStatus("success")
        setForm({ child_name: "", parent_name: "", group_name: "", strengths: "", barriers: "", interests: "" })
      } else {
        setStatus("error")
        setErrorMsg(data.error || "Что-то пошло не так")
      }
    } catch {
      setStatus("error")
      setErrorMsg("Ошибка соединения, попробуйте ещё раз")
    }
  }

  const cardStyle = (color: string, bg: string) => ({
    borderColor: color + "44",
    backgroundColor: bg,
  })

  return (
    <section id="survey" className="py-24 px-6 bg-[hsl(40,60%,97%)]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-bold uppercase tracking-widest text-[hsl(200,80%,45%)] mb-3">
            📋 Анкета
          </p>
          <h2 className="text-4xl md:text-5xl font-display text-foreground">
            Карта ресурсов семьи
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-semibold max-w-2xl mx-auto">
            Помогите педагогу лучше узнать вашего ребёнка! Эта анкета поможет нам создать 
            по-настоящему комфортные условия для обучения и развития
          </p>
        </motion.div>

        {/* Пояснительные карточки */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="rounded-2xl border-2 p-5 text-center" style={cardStyle("hsl(120,50%,40%)", "hsl(120,50%,95%)")}>
            <div className="text-3xl mb-2">💪</div>
            <h4 className="font-display text-lg mb-1" style={{ color: "hsl(120,50%,35%)" }}>Плюсы — Сильные стороны</h4>
            <p className="text-xs text-foreground/70 font-semibold leading-relaxed">
              Какие сильные стороны семьи можно использовать для интеграции ребёнка
            </p>
          </div>
          <div className="rounded-2xl border-2 p-5 text-center" style={cardStyle("hsl(340,80%,55%)", "hsl(340,80%,96%)")}>
            <div className="text-3xl mb-2">🚧</div>
            <h4 className="font-display text-lg mb-1" style={{ color: "hsl(340,80%,45%)" }}>Минусы — Барьеры</h4>
            <p className="text-xs text-foreground/70 font-semibold leading-relaxed">
              Какие барьеры могут возникнуть при адаптации ребёнка
            </p>
          </div>
          <div className="rounded-2xl border-2 p-5 text-center" style={cardStyle("hsl(30,100%,55%)", "hsl(30,100%,96%)")}>
            <div className="text-3xl mb-2">🌟</div>
            <h4 className="font-display text-lg mb-1" style={{ color: "hsl(30,100%,40%)" }}>Интерес — О ребёнке</h4>
            <p className="text-xs text-foreground/70 font-semibold leading-relaxed">
              Что педагог может узнать у семьи, чтобы сделать обучение комфортнее
            </p>
          </div>
        </motion.div>

        <motion.div
          className="rounded-3xl border-2 border-[hsl(200,80%,85%)] bg-white p-8 md:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {status === "success" ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🌈</div>
              <h3 className="text-2xl font-display text-[hsl(200,80%,45%)] mb-2">Спасибо за анкету!</h3>
              <p className="text-muted-foreground font-semibold">
                Педагог изучит информацию и свяжется с вами. Вместе мы сделаем пребывание ребёнка в саду радостным!
              </p>
              <button
                className="mt-6 px-6 py-3 rounded-full bg-[hsl(200,80%,45%)] text-white font-bold hover:bg-[hsl(200,80%,38%)] transition-colors"
                onClick={() => setStatus("idle")}
              >
                Заполнить ещё раз
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Основная информация */}
              <div>
                <h3 className="text-xl font-display text-[hsl(200,80%,45%)] mb-4">👶 О ребёнке и семье</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">
                      Имя ребёнка <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.child_name}
                      onChange={e => setForm({ ...form, child_name: e.target.value })}
                      placeholder="Иван"
                      className="w-full px-4 py-3 rounded-2xl border-2 border-[hsl(200,80%,80%)] font-semibold text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[hsl(200,80%,45%)] transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">
                      Имя родителя <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.parent_name}
                      onChange={e => setForm({ ...form, parent_name: e.target.value })}
                      placeholder="Мария Иванова"
                      className="w-full px-4 py-3 rounded-2xl border-2 border-[hsl(200,80%,80%)] font-semibold text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[hsl(200,80%,45%)] transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">Группа</label>
                    <select
                      value={form.group_name}
                      onChange={e => setForm({ ...form, group_name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border-2 border-[hsl(200,80%,80%)] font-semibold text-foreground focus:outline-none focus:border-[hsl(200,80%,45%)] transition-colors bg-white"
                    >
                      <option value="">Выберите группу</option>
                      {groups.map(g => <option key={g} value={g}>{g}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              {/* Плюсы */}
              <div className="rounded-2xl border-2 p-6" style={{ borderColor: "hsl(120,50%,70%)", backgroundColor: "hsl(120,50%,97%)" }}>
                <label className="block mb-2">
                  <span className="text-2xl mr-2">💪</span>
                  <span className="font-display text-lg" style={{ color: "hsl(120,50%,35%)" }}>Плюсы — Сильные стороны семьи</span>
                </label>
                <p className="text-xs text-muted-foreground font-semibold mb-3">
                  Какие сильные стороны семьи можно использовать для интеграции ребёнка? (языки, умения, хобби, поддержка родственников)
                </p>
                <textarea
                  value={form.strengths}
                  onChange={e => setForm({ ...form, strengths: e.target.value })}
                  placeholder="Например: ребёнок хорошо понимает картинки, в семье есть старшие дети которые помогают, папа знает русский язык..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[hsl(120,50%,70%)] bg-white font-semibold text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[hsl(120,50%,40%)] transition-colors resize-none"
                  required
                />
              </div>

              {/* Минусы */}
              <div className="rounded-2xl border-2 p-6" style={{ borderColor: "hsl(340,80%,80%)", backgroundColor: "hsl(340,80%,97%)" }}>
                <label className="block mb-2">
                  <span className="text-2xl mr-2">🚧</span>
                  <span className="font-display text-lg" style={{ color: "hsl(340,80%,45%)" }}>Минусы — Возможные барьеры</span>
                </label>
                <p className="text-xs text-muted-foreground font-semibold mb-3">
                  Какие трудности могут возникнуть? (языковой барьер, застенчивость, непривычный распорядок, особенности поведения)
                </p>
                <textarea
                  value={form.barriers}
                  onChange={e => setForm({ ...form, barriers: e.target.value })}
                  placeholder="Например: ребёнок ещё не говорит по-русски, очень привязан к маме, пугается громких звуков..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[hsl(340,80%,80%)] bg-white font-semibold text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[hsl(340,80%,55%)] transition-colors resize-none"
                  required
                />
              </div>

              {/* Интерес */}
              <div className="rounded-2xl border-2 p-6" style={{ borderColor: "hsl(30,100%,70%)", backgroundColor: "hsl(30,100%,97%)" }}>
                <label className="block mb-2">
                  <span className="text-2xl mr-2">🌟</span>
                  <span className="font-display text-lg" style={{ color: "hsl(30,100%,40%)" }}>Интерес — Что важно знать педагогу</span>
                </label>
                <p className="text-xs text-muted-foreground font-semibold mb-3">
                  Что педагог может узнать у семьи, чтобы сделать обучение ребёнка комфортнее? (любимые игры, еда, привычки, страхи)
                </p>
                <textarea
                  value={form.interests}
                  onChange={e => setForm({ ...form, interests: e.target.value })}
                  placeholder="Например: ребёнок любит машинки и динозавров, засыпает только с игрушкой, не ест молочное..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[hsl(30,100%,70%)] bg-white font-semibold text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[hsl(30,100%,55%)] transition-colors resize-none"
                  required
                />
              </div>

              {status === "error" && (
                <p className="text-red-500 text-sm font-bold bg-red-50 px-4 py-3 rounded-2xl">
                  ⚠️ {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 rounded-2xl bg-[hsl(200,80%,45%)] text-white font-bold text-base shadow-lg hover:bg-[hsl(200,80%,38%)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "⏳ Отправляем..." : "📋 Отправить анкету"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
