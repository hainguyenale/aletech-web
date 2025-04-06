"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import type { ReactNode } from "react"

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Scroll to top on route change
  useEffect(() => {
    if (!isClient) return
    window.scrollTo(0, 0)
  }, [pathname, isClient])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: {
              duration: 0.2,
              ease: "easeOut",
              when: "beforeChildren",
              staggerChildren: 0.1
            }
          }
        }}
        className="page-content"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

