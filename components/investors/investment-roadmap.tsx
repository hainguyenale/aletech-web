"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, MapPin, FileText, Download } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import { useLang } from "@/hooks/use-lang"
import type { InvestmentRoadmapData } from "@/lib/types/investors"

interface Props {
  data: InvestmentRoadmapData
}

function fmtDate(dateStr: string, lang: string) {
  return new Date(dateStr).toLocaleDateString(lang === "vi" ? "vi-VN" : "en-US", { day: "numeric", month: "short", year: "numeric" })
}

export default function InvestmentRoadmap({ data }: Props) {
  const language = useLang()
  const [activeIndex, setActiveIndex] = useState(0)
  const active = data.milestones[activeIndex]

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        {/* Header: 2 col - title left, business plan right */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr,auto] gap-8 items-start mb-10">
          <FadeIn direction="left">
            <div>
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm mb-3">
                <span className="text-primary font-medium">{data.tagline}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{data.title}</h2>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">{data.description}</p>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="border border-border rounded-xl p-5 md:w-[260px] bg-card/30 hover:border-primary/20 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">
                    {language === "vi" ? "Bản kế hoạch kinh doanh" : "Business Plan"}
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    {language === "vi" ? "Phiên bản mới nhất" : "Latest version"}
                  </p>
                </div>
              </div>
              <a
                href="#"
                className="flex items-center justify-center gap-2 w-full py-2 text-xs font-medium border border-primary/30 text-primary rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                {language === "vi" ? "Tải xuống PDF" : "Download PDF"}
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Horizontal timeline bar */}
        <FadeIn direction="up" delay={0.2}>
          <div className="relative mb-8 px-5">
            {/* Track line */}
            <div className="absolute top-[19px] left-5 right-5 h-px bg-border" />
            {/* Progress fill */}
            <motion.div
              className="absolute top-[18px] left-5 h-0.5 bg-primary origin-left"
              animate={{ width: `${(activeIndex / (data.milestones.length - 1)) * 100}%` }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              style={{ maxWidth: "calc(100% - 40px)" }}
            />

            {/* Dots row */}
            <div className="relative flex justify-between" style={{ zIndex: 2 }}>
              {data.milestones.map((m, i) => {
                const isActive = i === activeIndex
                const isPast = i <= activeIndex
                const dateObj = new Date(m.date)
                const month = dateObj.toLocaleString(language === "vi" ? "vi" : "en", { month: "short" })
                const year = dateObj.getFullYear()

                return (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className="group flex flex-col items-center"
                  >
                    {/* Dot with solid background to cover line */}
                    <div className="relative">
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-full bg-primary/20"
                          animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                      <motion.div
                        className={`relative w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                          isActive
                            ? "bg-primary border-primary shadow-[0_0_12px_rgba(48,200,201,0.4)]"
                            : isPast
                            ? "bg-[hsl(var(--background))] border-primary/50"
                            : "bg-[hsl(var(--background))] border-border group-hover:border-primary/40"
                        }`}
                        animate={{ scale: isActive ? 1.15 : 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className={`text-xs font-bold ${isActive ? "text-white" : isPast ? "text-primary" : "text-muted-foreground"}`}>
                          {i + 1}
                        </span>
                      </motion.div>
                    </div>

                    {/* Date + title */}
                    <div className="mt-3 text-center">
                      <p className={`text-[10px] font-medium ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                        {month}
                      </p>
                      <p className={`text-xs font-bold ${isActive ? "text-foreground" : "text-muted-foreground/60"}`}>
                        {year}
                      </p>
                    </div>
                    <p className={`hidden md:block text-[10px] mt-1 max-w-[120px] text-center leading-tight ${
                      isActive ? "text-foreground font-medium" : "text-muted-foreground/50"
                    }`}>
                      {m.title}
                    </p>
                  </button>
                )
              })}
            </div>
          </div>
        </FadeIn>

        {/* Active milestone detail card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="border border-border rounded-xl p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Left: title + description */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center rounded-full bg-primary/10 border border-primary/30 px-3 py-1 text-xs font-bold text-primary">
                    {language === "vi" ? `Bước ${activeIndex + 1}` : `Step ${activeIndex + 1}`}
                  </span>
                  <h3 className="text-lg font-bold">{active.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{active.description}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground/60">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {fmtDate(active.date, language)}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {active.location}
                  </span>
                </div>
              </div>

              {/* Right: navigation */}
              <div className="flex md:flex-col gap-2 flex-shrink-0">
                <button
                  onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
                  disabled={activeIndex === 0}
                  className="px-3 py-1.5 text-xs border border-border rounded-lg hover:border-primary/30 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  ← {language === "vi" ? "Trước" : "Prev"}
                </button>
                <button
                  onClick={() => setActiveIndex(Math.min(data.milestones.length - 1, activeIndex + 1))}
                  disabled={activeIndex === data.milestones.length - 1}
                  className="px-3 py-1.5 text-xs border border-border rounded-lg hover:border-primary/30 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  {language === "vi" ? "Tiếp" : "Next"} →
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
