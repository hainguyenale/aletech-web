"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
import type { ReactNode } from "react"

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()

  // Force a reflow of animations when route changes
  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo(0, 0)

    // Force animation reset by adding a small delay
    const timeout = setTimeout(() => {
      // Dispatch a custom event that page components can listen for
      window.dispatchEvent(new CustomEvent("page-changed", { detail: { path: pathname } }))
    }, 50)

    return () => clearTimeout(timeout)
  }, [pathname])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="page-content"
        data-pathname={pathname}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

