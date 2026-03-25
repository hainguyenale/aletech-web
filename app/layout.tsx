import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://aletech.com'),
  title: "Aletech - Problem-Centered Technology Solutions",
  description:
    "Aletech is your committed outsourcing partner, delivering tailored end-to-end solutions by deeply understanding your unique challenges and ensuring user-centered outcomes.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning className="overflow-x-hidden">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased overflow-x-hidden relative w-full max-w-[100vw]",
          inter.className
        )}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="page-content fixed inset-0 overflow-y-auto">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
