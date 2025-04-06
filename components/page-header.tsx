"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { usePathname } from "next/navigation"

interface PageHeaderProps {
  title: string
  description?: string
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const pathname = usePathname()

  useEffect(() => {
    // Reset and start animations when component mounts or path changes
    controls.set("hidden")

    const timeout = setTimeout(() => {
      controls.start("visible")
    }, 100)

    return () => clearTimeout(timeout)
  }, [controls, pathname])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "5rem",
      transition: { duration: 0.8, delay: 0.6 },
    },
  }

  return (
    <section className="pt-32 pb-16 bg-background relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-0">
        <div className="absolute inset-0 opacity-20">
          {/* Grid pattern overlay with animation */}
          <motion.div
            className="h-full w-full grid-pattern"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          ></motion.div>
        </div>
      </div>

      <motion.div
        className="container relative z-10 px-4 mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" variants={itemVariants}>
          {title}
        </motion.h1>

        {description && (
          <motion.p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto" variants={itemVariants}>
            {description}
          </motion.p>
        )}

        <motion.div className="h-1 w-20 bg-primary mx-auto mt-8" variants={lineVariants} />
      </motion.div>
    </section>
  )
}

