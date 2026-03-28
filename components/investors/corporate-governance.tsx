"use client"

import { FileText, Shield, Download } from "lucide-react"
import { motion } from "framer-motion"
import FadeIn from "@/components/animations/fade-in"
import { useLang } from "@/hooks/use-lang"
import type { CorporateGovernanceData } from "@/lib/types/investors"

interface CorporateGovernanceProps {
  data: CorporateGovernanceData
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText,
  Shield,
}

export default function CorporateGovernance({ data }: CorporateGovernanceProps) {
  const language = useLang()
  const isAvailable = (url: string) => url && url !== "#"

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr,1.5fr] gap-10 items-start">
          {/* Left: title + description */}
          <FadeIn direction="left">
            <div className="md:sticky md:top-32">
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm mb-3">
                <span className="text-primary font-medium">{data.tagline}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{data.title}</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">{data.description}</p>
            </div>
          </FadeIn>

          {/* Right: document list */}
          <FadeIn direction="right">
            <div className="space-y-3">
              {data.documents.map((doc, index) => {
                const Icon = iconMap[doc.icon] || FileText
                const available = isAvailable(doc.url)

                return (
                  <motion.div
                    key={index}
                    className={`flex items-center gap-4 p-4 border border-border rounded-xl transition-colors ${
                      available ? "hover:border-primary/30 cursor-pointer" : "opacity-60"
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={available ? { x: 3 } : undefined}
                    onClick={() => {
                      if (!available) return
                      const link = document.createElement("a")
                      link.href = doc.url
                      link.download = `${doc.title}.pdf`
                      link.target = "_blank"
                      link.click()
                    }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className={`font-semibold text-sm ${available ? "group-hover:text-primary" : ""} transition-colors`}>{doc.title}</h3>
                        <span className="text-[10px] text-muted-foreground/50 border border-border rounded px-1.5 py-0.5 uppercase">PDF</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">{doc.description}</p>
                    </div>
                    {available ? (
                      <Download className="h-4 w-4 text-muted-foreground/30 hover:text-primary transition-colors flex-shrink-0" />
                    ) : (
                      <span className="text-[10px] text-muted-foreground flex-shrink-0">
                        {language === "vi" ? "Sẽ cập nhật" : "Coming soon"}
                      </span>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
