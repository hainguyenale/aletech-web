"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import FadeIn from "@/components/animations/fade-in"
import type { BoardOfDirectorsData } from "@/lib/types/investors"

interface BoardOfDirectorsProps {
  data: BoardOfDirectorsData
}

const EASE = [0.25, 0.1, 0.25, 1] as const
const EXPAND_DURATION = 0.6

export default function BoardOfDirectors({ data }: BoardOfDirectorsProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-b from-background/95 to-background">
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

        {/* Desktop: expandable cards */}
        <div className="hidden md:flex gap-4 mx-auto h-[480px]">
          {data.members.map((member, index) => {
            const isActive = activeIndex === index
            return (
              <motion.div
                key={index}
                className="relative rounded-xl overflow-hidden border border-border cursor-pointer"
                animate={{ flex: isActive ? 3 : 1 }}
                transition={{ duration: EXPAND_DURATION, ease: EASE }}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* Image - slides to 50% on hover */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ width: isActive ? "50%" : "100%" }}
                  transition={{ duration: EXPAND_DURATION, ease: EASE }}
                >
                  <Image
                    src={member.image.url}
                    alt={member.name}
                    width={member.image.metadata.dimensions.width}
                    height={member.image.metadata.dimensions.height}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </motion.div>

                {/* Name overlay - fades out smoothly */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 z-10"
                  animate={{ opacity: isActive ? 0 : 1 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3 className="text-lg font-bold whitespace-nowrap">{member.name}</h3>
                  <p className="text-primary text-sm whitespace-nowrap">{member.position}</p>
                </motion.div>

                {/* Info panel - slides in after card finishes expanding */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      className="absolute inset-y-0 right-0 w-[50%] bg-background/95 backdrop-blur-sm flex flex-col justify-center p-8 border-l border-primary/20 z-20"
                      initial={{ x: "100%", opacity: 0 }}
                      animate={{ x: 0, opacity: 1, transition: { x: { duration: 0.4, delay: 0.25, ease: EASE }, opacity: { duration: 0.3, delay: 0.25 } } }}
                      exit={{ x: "100%", opacity: 0, transition: { duration: 0.08 } }}
                    >
                      <div className="inline-flex items-center rounded-full bg-primary/10 border border-primary/30 px-3 py-1 text-xs text-primary font-medium mb-3 w-fit">
                        {member.position}
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{member.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* Mobile: stacked cards */}
        <div className="md:hidden space-y-6">
          {data.members.map((member, index) => (
            <motion.div
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex gap-4 p-4">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={member.image.url}
                    alt={member.name}
                    width={member.image.metadata.dimensions.width}
                    height={member.image.metadata.dimensions.height}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-primary text-sm mb-2">{member.position}</p>
                  <p className="text-xs text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
