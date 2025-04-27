import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import PageTransition from "@/components/page-transition"
import { cn } from "@/lib/utils"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aletech - Problem-Centered Technology Solutions",
  description: "Aletech is your committed outsourcing partner, delivering tailored end-to-end solutions by deeply understanding your unique challenges and ensuring user-centered outcomes.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </head>
      <body 
        className={cn(
          "min-h-screen bg-background font-sans antialiased overflow-x-hidden relative w-full max-w-[100vw]", 
          inter.className
        )} 
        suppressHydrationWarning
      >
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {/* <PageTransition> */}
              <div className="page-content fixed inset-0 overflow-y-auto">
                {children}
              </div>
            {/* </PageTransition> */}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}