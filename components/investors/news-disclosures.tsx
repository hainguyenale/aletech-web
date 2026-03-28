"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import FadeIn from "@/components/animations/fade-in"
import { useLang } from "@/hooks/use-lang"
import type { NewsDisclosuresData } from "@/lib/types/investors"

interface NewsDisclosuresProps {
  data: NewsDisclosuresData
}

type FilterCategory = "all" | "news" | "announcement"

const categoryLabels: Record<string, Record<string, string>> = {
  en: { all: "All", news: "News", announcement: "Announcements" },
  vi: { all: "Tất cả", news: "Tin tức", announcement: "Thông báo" },
}

const categoryDot: Record<string, string> = {
  news: "bg-primary",
  announcement: "bg-blue-400",
}

export default function NewsDisclosures({ data }: NewsDisclosuresProps) {
  const language = useLang()
  const [active, setActive] = useState<FilterCategory>("all")
  const labels = categoryLabels[language] || categoryLabels["en"]

  const allFiltered = active === "all"
    ? data.items
    : data.items.filter((item) => item.category === active)
  const filtered = allFiltered.slice(0, 4)

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        {/* Header: center */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-block mb-4">
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm">
                <span className="text-primary font-medium">{data.tagline}</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.title}</h2>
            <p className="text-muted-foreground text-lg">{data.description}</p>
          </div>
        </FadeIn>

        {/* Tabs: center */}
        <FadeIn direction="up" delay={0.1}>
          <div className="flex items-center justify-center gap-1 border-b border-border mb-8">
            {(["all", "news", "announcement"] as FilterCategory[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`relative px-5 py-2.5 text-sm font-medium transition-colors ${
                  active === cat ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {labels[cat]}
                {active === cat && (
                  <motion.div
                    layoutId="news-tab-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    transition={{ duration: 0.25 }}
                  />
                )}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Grid: news items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {filtered.map((item, index) => {
              const dateObj = new Date(item.date)
              const formattedDate = dateObj.toLocaleDateString(
                language === "vi" ? "vi-VN" : "en-US",
                { day: "2-digit", month: "2-digit", year: "numeric" }
              )

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={`/${language}/news/${item.slug}`}
                    className="group block border border-border rounded-xl p-5 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${categoryDot[item.category] || "bg-muted-foreground"}`} />
                      <span className="text-xs text-muted-foreground">{formattedDate}</span>
                      <span className="text-xs text-muted-foreground/50">·</span>
                      <span className="text-xs text-muted-foreground">{labels[item.category] || item.category}</span>
                    </div>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm group-hover:text-primary transition-colors mb-2">
                          {item.title}
                        </h3>
                        <p className="text-xs text-muted-foreground line-clamp-2">{item.summary}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground/30 group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" />
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="text-sm text-muted-foreground text-center py-8">
            {language === "vi" ? "Chưa có tin trong danh mục này." : "No items in this category."}
          </p>
        )}

        {/* View All button */}
        <FadeIn direction="up" delay={0.3}>
          <div className="text-center mt-8">
            <Link
              href={`/${language}/news`}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              {language === "vi" ? "Xem tất cả tin tức" : "View All News"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
