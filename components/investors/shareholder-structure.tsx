"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import { formatDate } from "@/lib/utils/format"
import { useLang } from "@/hooks/use-lang"
import type { ShareholderStructureData } from "@/lib/types/investors"

interface ShareholderStructureProps {
  data: ShareholderStructureData
}

const POSITIONS = [
  { cx: 140, cy: 120 },
  { cx: 260, cy: 100 },
  { cx: 150, cy: 220 },
  { cx: 270, cy: 210 },
]

export default function ShareholderStructure({ data }: ShareholderStructureProps) {
  const language = useLang()

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <FadeIn direction="up">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl" />
            <div className="relative backdrop-blur-sm bg-card/30 border border-white/5 rounded-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left: text + legend */}
                <div>
                  <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm mb-3">
                    <span className="text-primary font-medium">{data.tagline}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">{data.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{data.description}</p>

                  <div className="space-y-3">
                    {data.shareholders.map((s, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm">
                        <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: s.color }} />
                        <span className="flex-1">{s.name}</span>
                        <span className="font-bold" style={{ color: s.color }}>{s.percentage}%</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-muted-foreground mt-5 flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {language === "vi" ? "Cập nhật lần cuối" : "Last updated"}: {formatDate(data.lastUpdated, language)}
                  </p>
                </div>

                {/* Right: bubble chart */}
                <div className="flex justify-center items-center">
                  <svg width={420} height={340} viewBox="0 0 420 340">
                    {data.shareholders.map((s, i) => {
                      const r = (s.percentage / 100) * 100 + 25
                      const pos = POSITIONS[i % POSITIONS.length]
                      return (
                        <g key={i}>
                          <motion.circle
                            cx={pos.cx} cy={pos.cy} r={r}
                            fill={s.color} fillOpacity={0.15}
                            stroke={s.color} strokeWidth={2}
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                          />
                          <text x={pos.cx} y={pos.cy - 5} textAnchor="middle" fill={s.color} fontSize="14" fontWeight="700">
                            {s.percentage}%
                          </text>
                          <text x={pos.cx} y={pos.cy + 12} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">
                            {s.name.split("(")[0].trim()}
                          </text>
                        </g>
                      )
                    })}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
