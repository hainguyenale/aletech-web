"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeInitializer() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // After mounting, we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    // Ensure theme is set on initial load
    if (mounted && !theme) {
      setTheme("dark")
    }
  }, [setTheme, theme, mounted])

  return null
}

