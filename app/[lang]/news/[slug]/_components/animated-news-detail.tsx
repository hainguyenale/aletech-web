"use client"

import Navbar from "@/components/navbar"
import Footer, { FooterData } from "@/components/footer"
import PageHeader from "@/components/page-header"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Calendar, Tag } from "lucide-react"
import { motion } from "framer-motion"
import FadeIn from "@/components/animations/fade-in"
import { useLang } from "@/hooks/use-lang"

interface NewsItem {
  title: string
  slug: string
  date: string
  category: "news" | "disclosure" | "announcement"
  summary: string
  body: string
}

interface AnimatedNewsDetailProps {
  article: NewsItem
  allArticles: NewsItem[]
  footerData: FooterData
}

const categoryLabels: Record<string, Record<string, string>> = {
  en: { news: "News", announcement: "Announcement" },
  vi: { news: "Tin tức", announcement: "Thông báo" },
}

export default function AnimatedNewsDetail({ article, allArticles, footerData }: AnimatedNewsDetailProps) {
  const language = useLang()
  const labels = categoryLabels[language] || categoryLabels["en"]

  const currentIndex = allArticles.findIndex((a) => a.slug === article.slug)
  const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null
  const nextArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null

  const dateObj = new Date(article.date)
  const formattedDate = dateObj.toLocaleDateString(
    language === "vi" ? "vi-VN" : "en-US",
    { day: "numeric", month: "long", year: "numeric" }
  )

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <PageHeader title={article.title} />

      <article className="py-12">
        <div className="max-w-[800px] mx-auto px-4">
          {/* Meta info */}
          <FadeIn direction="up">
            <div className="flex items-center gap-4 mb-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{formattedDate}</span>
              </div>
              <span className="text-muted-foreground/30">|</span>
              <div className="flex items-center gap-1.5">
                <Tag className="w-4 h-4" />
                <span>{labels[article.category] || article.category}</span>
              </div>
            </div>
          </FadeIn>

          {/* Summary */}
          <FadeIn direction="up" delay={0.1}>
            <div className="bg-card/50 border border-border rounded-xl p-6 mb-10">
              <p className="text-muted-foreground leading-relaxed italic">{article.summary}</p>
            </div>
          </FadeIn>

          {/* Body */}
          <FadeIn direction="up" delay={0.2}>
            <div className="prose prose-invert prose-sm max-w-none">
              {article.body.split("\n\n").map((paragraph, i) => {
                if (paragraph.startsWith("- ")) {
                  const items = paragraph.split("\n").filter((l) => l.startsWith("- "))
                  return (
                    <ul key={i} className="space-y-2 my-4 ml-4">
                      {items.map((item, j) => (
                        <li key={j} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                          <span>{item.replace("- ", "")}</span>
                        </li>
                      ))}
                    </ul>
                  )
                }
                if (paragraph.startsWith("  - ")) {
                  const items = paragraph.split("\n").filter((l) => l.trim().startsWith("- "))
                  return (
                    <ul key={i} className="space-y-1.5 my-3 ml-8">
                      {items.map((item, j) => (
                        <li key={j} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-muted-foreground/50 flex-shrink-0 mt-2" />
                          <span>{item.trim().replace("- ", "")}</span>
                        </li>
                      ))}
                    </ul>
                  )
                }
                return (
                  <p key={i} className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {paragraph}
                  </p>
                )
              })}
            </div>
          </FadeIn>

          {/* Navigation */}
          <FadeIn direction="up" delay={0.3}>
            <div className="border-t border-border mt-12 pt-8">
              <div className="flex items-center justify-between">
                {prevArticle ? (
                  <Link
                    href={`/${language}/news/${prevArticle.slug}`}
                    className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <div>
                      <p className="text-xs text-muted-foreground/60">{language === "vi" ? "Bài trước" : "Previous"}</p>
                      <p className="font-medium line-clamp-1 max-w-[200px] group-hover:text-primary transition-colors">{prevArticle.title}</p>
                    </div>
                  </Link>
                ) : <div />}

                <Link
                  href={`/${language}/news`}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {language === "vi" ? "Tất cả tin tức" : "All News"}
                </Link>

                {nextArticle ? (
                  <Link
                    href={`/${language}/news/${nextArticle.slug}`}
                    className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors text-right"
                  >
                    <div>
                      <p className="text-xs text-muted-foreground/60">{language === "vi" ? "Bài tiếp" : "Next"}</p>
                      <p className="font-medium line-clamp-1 max-w-[200px] group-hover:text-primary transition-colors">{nextArticle.title}</p>
                    </div>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : <div />}
              </div>
            </div>
          </FadeIn>

          {/* Back to news */}
          <FadeIn direction="up" delay={0.4}>
            <div className="text-center mt-10">
              <Link
                href={`/${language}/investors`}
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {language === "vi" ? "Quay lại Quan hệ Cổ đông" : "Back to Investor Relations"}
              </Link>
            </div>
          </FadeIn>
        </div>
      </article>

      <Footer data={footerData} />
    </main>
  )
}
