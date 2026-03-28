"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import type { HeroBannerData } from "@/lib/types/investors"

interface HeroBannerProps {
  data: HeroBannerData
}

export default function HeroBanner({ data }: HeroBannerProps) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const controls = useAnimation()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (inView) controls.start("visible")
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const statItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background z-0">
        <motion.div
          className="absolute inset-0 opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5 }}
        >
          <div className="h-full w-full grid-pattern" />
        </motion.div>
      </div>

      <div className="container relative z-10 px-4 py-32 md:py-40 max-w-6xl mx-auto" ref={ref}>
        <motion.div
          className="text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="inline-block">
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm">
              <span className="text-primary font-medium">{data.tagline}</span>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto"
          >
            {data.title}{" "}
            <span className="text-primary">{data.highlightedText}</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            {data.description}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-8 md:gap-12 pt-8"
          >
            {data.stats.map((stat, index) => (
              <motion.div key={index} variants={statItemVariants} className="text-center">
                <motion.p
                  className="text-3xl md:text-4xl font-bold text-primary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.2, duration: 0.8 }}
                >
                  {stat.number}
                </motion.p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute -right-20 top-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl"
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute -left-20 bottom-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"
        animate={{ opacity: [0.5, 0.3, 0.5], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", delay: 1 }}
      />
    </section>
  )
}
