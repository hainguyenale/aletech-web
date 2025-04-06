"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import type { ReactNode } from "react"
import { useInView } from "react-intersection-observer"

interface StaggerContainerProps {
  children: ReactNode
  delay?: number
  className?: string
  staggerChildren?: number
}

export default function StaggerContainer({
  children,
  delay = 0,
  className = "",
  staggerChildren = 0.1,
}: StaggerContainerProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
      },
    },
  }

  useEffect(() => {
    // Reset animation when component mounts
    controls.set("hidden")

    if (inView) {
      controls.start("show")
    }

    // Listen for page change events
    const handlePageChange = () => {
      // Reset animation state when navigating to a new page
      controls.set("hidden")

      // Restart animations with a small delay
      setTimeout(() => {
        if (inView) {
          controls.start("show")
        }
      }, 100)
    }

    window.addEventListener("page-changed", handlePageChange)
    return () => window.removeEventListener("page-changed", handlePageChange)
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

