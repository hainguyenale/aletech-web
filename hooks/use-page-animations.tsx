"use client"

import { useEffect, useState } from "react"
import { useAnimation } from "framer-motion"
import { usePathname } from "next/navigation"

export function usePageAnimations() {
  const controls = useAnimation()
  const pathname = usePathname()
  const [hasAnimated, setHasAnimated] = useState(false)
  const [isClient, setIsClient] = useState(false)

  // Set isClient to true and start initial animation
  useEffect(() => {
    setIsClient(true)
    // Start initial animation
    controls.start("visible")
    setHasAnimated(true)
  }, [])

  // Handle animations on pathname changes
  useEffect(() => {
    if (!isClient) return

    // Only reset and restart animations on pathname changes
    if (hasAnimated) {
      controls.set("hidden")
      controls.start("visible")
    }
  }, [controls, pathname, isClient, hasAnimated])

  return { controls, hasAnimated, isClient }
}

