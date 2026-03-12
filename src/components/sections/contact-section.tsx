import { useState } from "react"
import { motion } from "framer-motion"

const CONTACT_URL = "https://functions.poehali.dev/3ee71a20-0fd7-4f29-b544-18add2a2743c"

export function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")
    try {
      const res = await fetch(CONTACT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        setStatus("success")
        setForm({ name: "", phone: "", email: "", message: "" })
      } else {
        setStatus("error")
        setErrorMsg(data.error || "Что-то пошло не так")
      }
    } catch {
      setStatus("error")
      setErrorMsg("Ошибка соединения, попробуйте ещё раз")
    }
  }

  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-bold uppercase tracking-widest text-[hsl(200,80%,45%)] mb-3">
            ✉️ Обратная связь
          </p>
          <h2 className="text-4xl md:text-5xl font-display text-foreground">
            Напишите нам
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-semibold max-w-xl mx-auto">
            Есть вопросы об АДК или адаптации вашего ребёнка? Воспитатели МБДОУ ДС №47 «Успех» готовы помочь
          </p>
        </motion.div>

        <motion.div
          className="rounded-3xl border-2 border-[hsl(200,80%,85%)] bg-[hsl(200,80%,97%)] p-8 md:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {status === "success" ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-display text-[hsl(200,80%,45%)] mb-2">Сообщение отправлено!</h3>
              <p className="text-muted-foreground font-semibold">Мы свяжемся с вами в ближайшее время</p>
              <button
                className="mt-6 px-6 py-3 rounded-full bg-[hsl(200,80%,45%)] text-white font-bold hover:bg-[hsl(200,80%,38%)] transition-colors"
                onClick={() => setStatus("idle")}
              >
                Отправить ещё
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">
                    Ваше имя <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Мария Иванова"
                    className="w-full px-4 py-3 rounded-2xl border-2 border-[hsl(200,80%,80%)] bg-white font-semibold text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[hsl(200,80%,45%)] transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">Телефон</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    placeholder="+7 900 000 00 00"
                    className="w-full px-4 py-3 rounded-2xl border-2 border-[hsl(200,80%,80%)] bg-white font-semibold text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[hsl(200,80%,45%)] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="mama@mail.ru"
                  className="w-full px-4 py-3 rounded-2xl border-2 border-[hsl(200,80%,80%)] bg-white font-semibold text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[hsl(200,80%,45%)] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">
                  Ваш вопрос <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Напишите, чем мы можем помочь..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-[hsl(200,80%,80%)] bg-white font-semibold text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[hsl(200,80%,45%)] transition-colors resize-none"
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
                {status === "loading" ? "⏳ Отправляем..." : "✉️ Отправить сообщение"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
