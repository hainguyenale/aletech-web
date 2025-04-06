"use client"

import { useEffect, useState } from "react"
import { useAnimation } from "framer-motion"
import { usePathname } from "next/navigation"

export function usePageAnimations() {
  const controls = useAnimation()
  const pathname = usePathname()
  const [hasAnimated, setHasAnimated] = useState(false)

  // Start animations when component mounts
  useEffect(() => {
    // Reset animation state
    controls.set("hidden")

    // Start animations with a small delay to ensure proper rendering
    const timeout = setTimeout(() => {
      controls.start("visible")
      setHasAnimated(true)
    }, 100)

    return () => clearTimeout(timeout)
  }, [controls, pathname])

  // Listen for page change events
  useEffect(() => {
    const handlePageChange = () => {
      // Reset animation state when navigating to a new page
      controls.set("hidden")
      setHasAnimated(false)

      // Restart animations
      setTimeout(() => {
        controls.start("visible")
        setHasAnimated(true)
      }, 100)
    }

    window.addEventListener("page-changed", handlePageChange)
    return () => window.removeEventListener("page-changed", handlePageChange)
  }, [controls])

  return { controls, hasAnimated }
}

