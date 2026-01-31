"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import {
  Brain,
  Zap,
  Target,
  RefreshCw,
  Heart,
  Gem,
  Award,
  Users,
  Calendar,
  TrendingUp,
} from "lucide-react"
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion"

export default function AboutUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const services = [
    {
      icon: Brain,
      title: "Desprogramação Neurobiológica",
      description:
        "Elimine crenças limitantes através de áudios vibracionais personalizados que reprogramam sua mente.",
    },
    {
      icon: Zap,
      title: "Limpeza Energética Profunda",
      description:
        "Remova amarrações energéticas e interferências que bloqueiam seu fluxo de prosperidade.",
    },
    {
      icon: Target,
      title: "Diagnóstico por Radiestesia",
      description:
        "Identificação precisa de bloqueios através da técnica ancestral de radiestesia.",
    },
    {
      icon: RefreshCw,
      title: "Harmonização de Chakras",
      description:
        "Restaure o equilíbrio dos seus centros de energia para saúde física e emocional.",
    },
    {
      icon: Heart,
      title: "Reiki de Cura",
      description:
        "Canalização de energia universal para relaxamento profundo e ativação da autocura.",
    },
    {
      icon: Gem,
      title: "Proteção Energética",
      description:
        "Criação de escudos energéticos para manter sua aura limpa e protegida.",
    },
  ]

  const stats = [
    { icon: Award, value: 500, label: "Vidas Transformadas", suffix: "+" },
    { icon: Users, value: 1200, label: "Sessões Realizadas", suffix: "+" },
    { icon: Calendar, value: 10, label: "Anos de Experiência", suffix: "" },
    { icon: TrendingUp, value: 98, label: "Taxa de Satisfação", suffix: "%" },
  ]

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="w-full py-24 lg:py-32 bg-ana-tertiary text-ana-dark overflow-hidden relative"
    >
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-ana-primary/5 blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-ana-secondary/30 blur-3xl"
        style={{ y: y2 }}
      />

      <motion.div
        className="section-container relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="flex flex-col items-center mb-6" variants={itemVariants}>
          <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-semibold text-ana-primary mb-4 text-center">
            Sobre <span className="gradient-text">Ana Felix</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-ana-primary to-ana-accent rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>

        <motion.p 
          className="text-center max-w-2xl mx-auto mb-16 font-montserrat text-lg text-ana-dark/70" 
          variants={itemVariants}
        >
          Sou Ana Felix, terapeuta holística dedicada a guiar pessoas em sua jornada de 
          transformação interior. Com mais de 10 anos de experiência, combino ciência e 
          espiritualidade para promover cura profunda.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              variants={itemVariants}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          ref={statsRef}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              icon={<stat.icon size={24} />}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

interface ServiceItemProps {
  icon: React.ElementType
  title: string
  description: string
  variants: {
    hidden: { opacity: number; y?: number }
    visible: { opacity: number; y?: number; transition: { duration: number; ease: string } }
  }
  delay: number
}

function ServiceItem({ icon: Icon, title, description, variants, delay }: ServiceItemProps) {
  return (
    <motion.div
      className="group bg-white/50 rounded-2xl p-6 hover:bg-white transition-colors duration-300"
      variants={variants}
      transition={{ delay }}
    >
      <div className="w-12 h-12 rounded-xl bg-ana-secondary/30 flex items-center justify-center mb-4 group-hover:bg-ana-primary/10 transition-colors">
        <Icon className="w-6 h-6 text-ana-primary" />
      </div>
      <h3 className="font-cormorant text-xl font-semibold text-ana-primary mb-2">
        {title}
      </h3>
      <p className="font-montserrat text-sm text-ana-dark/70 leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}

interface StatCounterProps {
  icon: React.ReactNode
  value: number
  label: string
  suffix: string
  delay: number
}

function StatCounter({ icon, value, label, suffix, delay }: StatCounterProps) {
  const countRef = useRef(null)
  const isInView = useInView(countRef, { once: true })
  const [hasAnimated, setHasAnimated] = useState(false)

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 10,
  })

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value)
      setHasAnimated(true)
    }
  }, [isInView, value, springValue, hasAnimated])

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest))

  return (
    <motion.div
      className="bg-white/70 p-6 rounded-2xl flex flex-col items-center text-center"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay },
        },
      }}
    >
      <div className="w-12 h-12 rounded-full bg-ana-tertiary flex items-center justify-center mb-3 text-ana-primary">
        {icon}
      </div>
      <motion.div ref={countRef} className="font-cormorant text-3xl font-bold text-ana-primary flex items-center">
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </motion.div>
      <p className="font-montserrat text-ana-dark/60 text-sm mt-1">{label}</p>
    </motion.div>
  )
}
