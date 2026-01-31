"use client"

import React from "react"
import Navbar from "@/components/navbar"
import Footer, { FooterData } from "@/components/footer"
import PageHeader from "@/components/page-header"
import Image from "next/image"
import {
  Users,
  Target,
  Globe,
  HandshakeIcon,
  Lightbulb,
  Puzzle,
} from "lucide-react"
import { motion } from "framer-motion"
import FadeIn from "@/components/animations/fade-in"
import StaggerContainer from "@/components/animations/stagger-container"
import StaggerItem from "@/components/animations/stagger-item"
import { usePageAnimations } from "@/hooks/use-page-animations"
import AboutSection from "@/components/about-section"
import { urlFor } from "@/sanity/lib/image"
import type { AboutData } from "@/lib/types"

interface AnimatedAboutProps {
  data: AboutData
  footerData: FooterData
}

export default function AnimatedAbout({ data, footerData }: AnimatedAboutProps) {
  const { controls } = usePageAnimations()

  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Target,
    Users,
    Lightbulb,
    Globe,
    Puzzle,
    Handshake: HandshakeIcon,
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <PageHeader
        title={data.pageHeader.title}
        description={data.pageHeader.description}
      />

      {/* Our Story */}
      <AboutSection data={data.about} />

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-b from-background to-background/95">
        <div className="container px-4 mx-auto">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block mb-4">
                <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm">
                  <span className="text-primary font-medium">
                    {data.values.tagline}
                  </span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {data.values.title}
              </h2>
              <p className="text-muted-foreground text-lg">
                {data.values.description}
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(data.values.values || []).map((value, index) => {
              const Icon = iconMap[value.icon]
              return (
                <StaggerItem key={index}>
                  <motion.div
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 h-full"
                    whileHover={{
                      y: -5,
                      boxShadow:
                        "0 10px 30px -15px rgba(48, 200, 201, 0.2)",
                    }}
                  >
                    <motion.div
                      className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.7 }}
                    >
                      {Icon && <Icon className="h-6 w-6 text-primary" />}
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block mb-4">
                <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm">
                  <span className="text-primary font-medium">
                    {data.members.tagline}
                  </span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {data.members.title}
              </h2>
              <p className="text-muted-foreground text-lg">
                {data.members.description}
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(data.members.teamMembers || []).map((member, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 h-full flex flex-col"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)",
                  }}
                >
                  <div className="relative aspect-square">
                    <Image
                      src={
                        member.image
                          ? urlFor(member.image).url()
                          : "/placeholder.svg"
                      }
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary text-sm mb-3">
                      {member.position}
                    </p>
                    <p className="text-muted-foreground text-sm flex-grow">
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-b from-background/95 to-background">
        <div className="container px-4 mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(data.stats || []).map((stat, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)",
                  }}
                >
                  <motion.div
                    className="text-4xl md:text-5xl font-bold text-primary mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      controls
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-muted-foreground font-medium mb-1">
                    {stat.label}
                  </p>
                  <p className="text-sm text-muted-foreground/80">
                    {stat.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Footer data={footerData} />
    </main>
  )
}
