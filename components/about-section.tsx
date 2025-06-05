"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface AboutData {
  tagline: string
  title: string
  description: string
  features: string[]
  primaryButton?: {
    text: string
    link: string
  }
}

interface AboutSectionProps {
  showLearnMoreButton?: boolean
  data: AboutData
}

export default function AboutSection({ showLearnMoreButton = true, data }: AboutSectionProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const controls = useAnimation()
  const pathname = usePathname()
  const isAboutPage = pathname === "/about"

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  if (!data) return null

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-background/95">
      <div className="container px-4 mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <motion.div
              className="absolute -left-4 -top-4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"
              animate={{
                opacity: [0.5, 0.7, 0.5],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            ></motion.div>
            <motion.div
              className="absolute -right-4 -bottom-4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"
              animate={{
                opacity: [0.7, 0.5, 0.7],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 1,
              }}
            ></motion.div>

            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-lg overflow-hidden h-40"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="h-full w-full bg-gradient-to-br from-primary/20 to-transparent p-6 flex items-center justify-center">
                    <motion.svg
                      viewBox="0 0 100 100"
                      className="w-20 h-20"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <polygon points="50,0 100,50 50,100 0,50" fill="#30C8C9" />
                    </motion.svg>
                  </div>
                </motion.div>
                <motion.div
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-lg overflow-hidden h-56"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="h-full w-full bg-gradient-to-tr from-transparent to-primary/20 p-6 flex flex-col justify-end">
                    <div className="space-y-2">
                      <motion.div
                        className="h-1 w-12 bg-primary"
                        animate={{ width: ["0%", "12%"] }}
                        transition={{ duration: 1, delay: 0.5 }}
                      ></motion.div>
                      <motion.div
                        className="h-1 w-8 bg-primary/60"
                        animate={{ width: ["0%", "8%"] }}
                        transition={{ duration: 1, delay: 0.7 }}
                      ></motion.div>
                      <motion.div
                        className="h-1 w-4 bg-primary/40"
                        animate={{ width: ["0%", "4%"] }}
                        transition={{ duration: 1, delay: 0.9 }}
                      ></motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="space-y-4">
                <motion.div
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-lg overflow-hidden h-56"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="h-full w-full bg-gradient-to-bl from-primary/20 to-transparent p-6 flex items-start justify-end">
                    <motion.div
                      className="w-16 h-16 border-2 border-primary/60 rounded-full flex items-center justify-center"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <div className="w-12 h-12 border-2 border-primary rounded-full"></div>
                    </motion.div>
                  </div>
                </motion.div>
                <motion.div
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-lg overflow-hidden h-40"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="h-full w-full bg-gradient-to-tl from-primary/20 to-transparent p-6 flex items-center justify-center">
                    <motion.div
                      className="w-full h-1 bg-primary"
                      animate={{ width: ["0%", "100%"] }}
                      transition={{ duration: 1.5, delay: 1 }}
                    ></motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div className="space-y-6" variants={containerVariants} initial="hidden" animate={controls}>
            <motion.div variants={itemVariants} className="inline-block">
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm">
                <span className="text-primary font-medium">{data.tagline}</span>
              </div>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold">
              {data.title}
            </motion.h2>

            <motion.p variants={itemVariants} className="text-muted-foreground">
              {data.description}
            </motion.p>

            <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.features.map((feature, index) => (
                <motion.div key={index} variants={itemVariants} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {showLearnMoreButton && (
              <motion.div variants={itemVariants}>
                <Link href={data.primaryButton?.link || '/about'}>
                  <Button className="bg-primary hover:bg-primary/90 text-white">{data.primaryButton?.text}</Button>
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

