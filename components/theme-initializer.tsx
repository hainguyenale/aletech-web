"use client"

import { useTheme } from "next-themes"
import { useEffect } from "react"

export function ThemeInitializer() {
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    // Ensure theme is set on initial load
    if (!theme) {
      setTheme("dark")
    }
  }, [setTheme, theme])

  return null
}

