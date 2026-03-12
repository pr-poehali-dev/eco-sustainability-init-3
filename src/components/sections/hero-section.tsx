import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const images = [
  "/modern-ui-design-portfolio-mockup.jpg",
  "/interior-design-minimalist-living-room-natural-lig.jpg",
  "/personal-branding-digital-marketing.jpg",
]

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, -15])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, 0])
  const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 15])
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const x3 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background px-6 py-24"
    >
      {/* Decorative bubbles */}
      <div className="absolute top-16 left-10 w-16 h-16 rounded-full bg-[hsl(120,60%,85%)] opacity-60 animate-float" />
      <div className="absolute top-32 right-20 w-10 h-10 rounded-full bg-[hsl(30,100%,80%)] opacity-70 animate-float" style={{animationDelay: "1s"}} />
      <div className="absolute bottom-32 left-20 w-12 h-12 rounded-full bg-[hsl(280,70%,85%)] opacity-60 animate-float" style={{animationDelay: "2s"}} />
      <div className="absolute bottom-20 right-16 w-8 h-8 rounded-full bg-[hsl(200,80%,75%)] opacity-70 animate-float" style={{animationDelay: "0.5s"}} />

      {/* Stacked images */}
      <div className="relative flex items-center justify-center">
        <motion.div
          className="absolute w-[220px] md:w-[260px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
          style={{ rotate: rotate1, x: x1, y, zIndex: 1 }}
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        >
          <img src={images[0]} alt="АДК карточка" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          className="relative w-[220px] md:w-[260px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl z-10 border-4 border-white"
          style={{ rotate: rotate2, y }}
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <img src={images[1]} alt="Ребёнок в детском саду" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          className="absolute w-[220px] md:w-[260px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
          style={{ rotate: rotate3, x: x3, y, zIndex: 1 }}
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
        >
          <img src={images[2]} alt="Расписание занятий" className="w-full h-full object-cover" />
        </motion.div>
      </div>

      {/* Text */}
      <div className="absolute bottom-16 left-0 right-0 flex flex-col items-center text-center px-6 z-20">
        <motion.p
          className="text-sm font-bold uppercase tracking-widest text-[hsl(200,80%,45%)] mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          🌈 МБДОУ ДС №47 «Успех» · АДК для каждого ребёнка
        </motion.p>
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-display leading-tight text-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Говорим
          <br />
          <span className="text-[hsl(200,80%,45%)]">на одном</span>
          <br />
          языке
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl text-muted-foreground max-w-xl font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          Альтернативная дополнительная коммуникация помогает вашему ребёнку чувствовать себя уверенно и радостно в детском саду
        </motion.p>
        <motion.div
          className="mt-6 flex gap-4 flex-wrap justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <a
            href="#cards"
            className="px-8 py-3 rounded-full bg-[hsl(200,80%,45%)] text-white font-bold text-base shadow-lg hover:bg-[hsl(200,80%,38%)] transition-colors"
          >
            Карточки АДК
          </a>
          <a
            href="#adaptation"
            className="px-8 py-3 rounded-full border-2 border-[hsl(200,80%,45%)] text-[hsl(200,80%,45%)] font-bold text-base hover:bg-[hsl(200,80%,45%)] hover:text-white transition-colors"
          >
            Адаптация
          </a>
        </motion.div>
      </div>
    </section>
  )
}