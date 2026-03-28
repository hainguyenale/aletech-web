"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import FadeIn from "@/components/animations/fade-in"
import StaggerContainer from "@/components/animations/stagger-container"
import StaggerItem from "@/components/animations/stagger-item"
import { formatDate } from "@/lib/utils/format"
import { useLang } from "@/hooks/use-lang"
import type { UpcomingEventsData } from "@/lib/types/investors"

interface UpcomingEventsTimelineProps {
  data: UpcomingEventsData
}

const eventTypeColors: Record<string, string> = {
  meeting: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  earnings: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  conference: "bg-purple-500/10 text-purple-400 border-purple-500/30",
}

export default function UpcomingEventsTimeline({ data }: UpcomingEventsTimelineProps) {
  const language = useLang()

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeIn direction="right" delay={0.2}>
            <div>
              <div className="inline-block mb-4">
                <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm">
                  <span className="text-primary font-medium">{data.tagline}</span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{data.title}</h2>
              <p className="text-muted-foreground mb-8">{data.description}</p>

              {/* Vertical timeline */}
              <div className="relative pl-8">
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-primary/20" />
                <StaggerContainer className="space-y-6">
                  {data.events.map((event, index) => (
                    <StaggerItem key={index}>
                      <div className="relative">
                        <div
                          className={`absolute -left-[21px] top-2 w-3 h-3 rounded-full bg-primary border-2 border-background ${
                            index === 0 ? "animate-pulse" : ""
                          }`}
                        />
                        <motion.div
                          className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5 hover:border-primary/30 transition-all duration-300"
                          whileHover={{
                            y: -3,
                            boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)",
                          }}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-lg font-bold">{event.title}</h3>
                            <Badge
                              variant="outline"
                              className={`text-xs capitalize ${eventTypeColors[event.type] || ""}`}
                            >
                              {event.type}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">
                            {formatDate(event.date, language)} | {event.time}
                          </p>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="h-3.5 w-3.5" />
                            <span>{event.location}</span>
                          </div>
                        </motion.div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.4}>
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-primary/10 rounded-xl filter blur-xl opacity-50"
                animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }}
                transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
              />
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden">
                <div className="aspect-video w-full relative">
                  <Image
                    src={data.presentation.thumbnailImage.url}
                    alt={data.presentation.title}
                    width={data.presentation.thumbnailImage.metadata.dimensions.width}
                    height={data.presentation.thumbnailImage.metadata.dimensions.height}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-background/50 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                      onClick={() => {
                        if (data.presentation.file?.url) {
                          window.open(data.presentation.file.url, "_blank")
                        }
                      }}
                    >
                      <div className="w-16 h-16 rounded-full bg-primary/30 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white">
                            <path
                              d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{data.presentation.title}</h3>
                  <p className="text-muted-foreground">{data.presentation.description}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
