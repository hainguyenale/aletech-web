"use client"

import { motion } from "framer-motion"
import { TrendingUp, BarChart3, PieChart } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import StaggerContainer from "@/components/animations/stagger-container"
import StaggerItem from "@/components/animations/stagger-item"
import type { FinancialHighlightsData } from "@/lib/types/investors"

interface FinancialHighlightsProps {
  data: FinancialHighlightsData
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp,
  BarChart3,
  PieChart,
}

export default function FinancialHighlights({ data }: FinancialHighlightsProps) {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-4">
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm">
                <span className="text-primary font-medium">{data.tagline}</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{data.title}</h2>
            <p className="text-muted-foreground text-lg">{data.description}</p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.metrics.map((metric, index) => {
            const Icon = iconMap[metric.icon]
            return (
              <StaggerItem key={index}>
                <motion.div
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)",
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium">{metric.title}</h3>
                    {Icon && <Icon className="h-5 w-5 text-primary" />}
                  </div>
                  <motion.div
                    className="text-3xl font-bold mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    {metric.value}
                  </motion.div>
                  {metric.growth && (
                    <p className="text-sm text-primary font-medium">{metric.growth}</p>
                  )}
                </motion.div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
