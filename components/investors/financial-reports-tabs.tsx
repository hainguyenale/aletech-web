"use client"

import { useState, useMemo } from "react"
import { Download, Clock, BarChart3, Shield, Loader2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import FadeIn from "@/components/animations/fade-in"
import { formatFileSize, formatDate } from "@/lib/utils/format"
import { useLang } from "@/hooks/use-lang"
import type { FinancialReportsData } from "@/lib/types/investors"

interface FinancialReportsTabsProps {
  data: FinancialReportsData
}

const CATEGORIES: Record<string, { value: string; label: string; icon: React.ReactNode; description: string }[]> = {
  en: [
    { value: "annual", label: "Annual Reports", icon: <BarChart3 className="h-4 w-4" />, description: "Audited annual financial statements and reports" },
    { value: "quarterly", label: "Quarterly", icon: <Clock className="h-4 w-4" />, description: "Quarterly financial performance reports" },
    { value: "governance", label: "Governance", icon: <Shield className="h-4 w-4" />, description: "Corporate governance reports and filings" },
  ],
  vi: [
    { value: "annual", label: "Thường niên", icon: <BarChart3 className="h-4 w-4" />, description: "Báo cáo tài chính năm đã kiểm toán" },
    { value: "quarterly", label: "Hàng quý", icon: <Clock className="h-4 w-4" />, description: "Báo cáo kết quả kinh doanh theo quý" },
    { value: "governance", label: "Quản trị", icon: <Shield className="h-4 w-4" />, description: "Báo cáo quản trị doanh nghiệp" },
  ],
}

const STATUS_LABELS: Record<string, { available: string; pending: string }> = {
  en: { available: "Download", pending: "Coming soon" },
  vi: { available: "Tải xuống", pending: "Sẽ cập nhật" },
}

export default function FinancialReportsTabs({ data }: FinancialReportsTabsProps) {
  const language = useLang()
  const [activeCategory, setActiveCategory] = useState("annual")

  const categories = CATEGORIES[language] || CATEGORIES["en"]
  const statusLabels = STATUS_LABELS[language] || STATUS_LABELS["en"]

  const reportCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const r of data.reports) {
      counts[r.category] = (counts[r.category] || 0) + 1
    }
    return counts
  }, [data.reports])

  const [downloadingIndex, setDownloadingIndex] = useState<number | null>(null)

  const filtered = useMemo(() => {
    return data.reports
      .filter((r) => r.category === activeCategory)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }, [data.reports, activeCategory])

  const isAvailable = (url: string) => url && url !== "#"

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block mb-4">
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm">
                <span className="text-primary font-medium">{data.tagline}</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{data.title}</h2>
            <p className="text-muted-foreground text-lg">{data.description}</p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="flex flex-col md:flex-row gap-6 md:h-[420px] border border-border rounded-2xl p-4 md:p-6 bg-card/30">
            {/* Sidebar menu */}
            <div className="md:w-[240px] flex-shrink-0">
              <nav className="flex md:flex-col gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setActiveCategory(cat.value)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-medium transition-all w-full ${
                      activeCategory === cat.value
                        ? "bg-primary/10 text-primary border border-primary/30"
                        : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                    }`}
                  >
                    {cat.icon}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span>{cat.label}</span>
                        <span className={`text-xs ml-2 ${activeCategory === cat.value ? "text-primary" : "text-muted-foreground/60"}`}>
                          {reportCounts[cat.value] || 0}
                        </span>
                      </div>
                      <p className={`text-xs mt-0.5 hidden md:block ${activeCategory === cat.value ? "text-primary/70" : "text-muted-foreground/50"}`}>
                        {cat.description}
                      </p>
                    </div>
                  </button>
                ))}
              </nav>
            </div>

            {/* Report list */}
            <div className="flex-1 min-w-0 md:border-l md:border-border md:pl-6 overflow-y-auto overflow-x-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-2"
                >
                  {filtered.map((report, index) => {
                    const available = isAvailable(report.file.url)
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${
                          available
                            ? "bg-card/50 border-border hover:border-primary/30 hover:bg-card/80"
                            : "bg-card/20 border-border/50 opacity-60"
                        }`}
                      >
                        {/* Date badge */}
                        <div className="flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-primary/10 flex-shrink-0">
                          <span className="text-[10px] text-primary font-medium uppercase">
                            {new Date(report.date).toLocaleString(language === "vi" ? "vi" : "en", { month: "short" })}
                          </span>
                          <span className="text-sm font-bold text-primary leading-none">
                            {new Date(report.date).getFullYear()}
                          </span>
                        </div>

                        {/* Report info - click to preview */}
                        <div
                          className="flex-1 min-w-0 cursor-pointer"
                          onClick={() => available && window.open(report.file.url, "_blank")}
                        >
                          <div className="flex items-center gap-2">
                            <h3 className={`font-semibold text-sm ${available ? "hover:text-primary transition-colors" : ""}`}>
                              {report.title}
                            </h3>
                            <span className="text-[10px] text-muted-foreground/50 border border-border rounded px-1.5 py-0.5 uppercase">PDF</span>
                          </div>
                          <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                            <span>{formatDate(report.date, language)}</span>
                            {available && (
                              <>
                                <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                                <span>{formatFileSize(report.file.size)}</span>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Download button - triggers save dialog */}
                        {available ? (
                          <button
                            disabled={downloadingIndex === index}
                            onClick={async (e) => {
                              e.stopPropagation()
                              setDownloadingIndex(index)
                              try {
                                const res = await fetch(report.file.url)
                                const blob = await res.blob()
                                const blobUrl = URL.createObjectURL(blob)
                                const link = document.createElement("a")
                                link.href = blobUrl
                                link.download = report.file.originalFilename || `${report.title}.pdf`
                                document.body.appendChild(link)
                                link.click()
                                document.body.removeChild(link)
                                URL.revokeObjectURL(blobUrl)
                              } catch {
                                window.open(report.file.url, "_blank")
                              } finally {
                                setDownloadingIndex(null)
                              }
                            }}
                            className="flex items-center gap-2 text-primary opacity-60 hover:opacity-100 transition-opacity flex-shrink-0 cursor-pointer disabled:opacity-40 disabled:cursor-wait"
                          >
                            <span className="text-xs font-medium hidden sm:block">
                              {downloadingIndex === index
                                ? (language === "vi" ? "Đang tải..." : "Loading...")
                                : statusLabels.available}
                            </span>
                            {downloadingIndex === index
                              ? <Loader2 className="h-4 w-4 animate-spin" />
                              : <Download className="h-4 w-4" />}
                          </button>
                        ) : (
                          <div className="flex items-center gap-2 text-muted-foreground flex-shrink-0">
                            <span className="text-xs">{statusLabels.pending}</span>
                            <Clock className="h-4 w-4" />
                          </div>
                        )}
                      </motion.div>
                    )
                  })}

                  {filtered.length === 0 && (
                    <div className="text-center text-muted-foreground py-12 text-sm">
                      {language === "vi" ? "Chưa có báo cáo trong danh mục này." : "No reports in this category yet."}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
