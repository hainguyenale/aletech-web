"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Icon } from "@/components/ui/icon"

interface SolutionData {
  id: string
  icon: string
  label: string
  title: string
  description: string
  features: string[]
  image: string
}

interface SolutionsSectionProps {
  data: {
    title: string
    description: string
    solutions: SolutionData[]
  }
}

export default function SolutionsSection({ data }: SolutionsSectionProps) {
  if (!data) return null

  return (
    <section id="solutions" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">{data.title}</h2>
          <div className="h-1 w-16 sm:w-20 bg-primary mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-muted-foreground">
            {data.description}
          </p>
        </div>

        <Tabs defaultValue={data.solutions[0]?.id} className="w-full">
          <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 bg-card/50 mb-6 sm:mb-8 h-auto">
            {data.solutions.map((solution) => (
              <TabsTrigger
                key={solution.id}
                value={solution.id}
                className="flex flex-col items-center gap-1.5 py-3 px-2 data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
              >
                <div className="flex flex-col items-center gap-1">
                  <Icon name={solution.icon} className="h-5 w-5" />
                  <span className="text-sm truncate">{solution.label}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {data.solutions.map((solution) => (
            <TabsContent key={solution.id} value={solution.id}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start lg:items-center"
                >
                  <div className="space-y-4 sm:space-y-6">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">{solution.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{solution.description}</p>

                    <div className="grid grid-cols-1 gap-2 sm:gap-3">
                      {solution.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center space-x-2"
                        >
                          <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></div>
                          <span className="text-sm sm:text-base text-muted-foreground">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="relative mt-6 lg:mt-0 w-full max-w-[400px] mx-auto"
                  >
                    <div className="absolute -inset-4 bg-primary/10 rounded-xl filter blur-lg opacity-70"></div>
                    <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden p-4 h-[400px]">
                      <Image
                        src={solution.image || "/placeholder.svg"}
                        alt={solution.title}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-background/50 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                        <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs">
                          <span className="text-primary font-medium">{solution.label} Solutions</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

