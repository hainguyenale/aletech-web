"use client"

import React, { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import FadeIn from "@/components/animations/fade-in"
import StaggerContainer from "@/components/animations/stagger-container"
import StaggerItem from "@/components/animations/stagger-item"
import { Target, Users, Lightbulb, Globe, Puzzle, HandshakeIcon } from "lucide-react"
import { urlFor } from "@/sanity/lib/image"
import { usePageAnimations } from "@/hooks/use-page-animations"
import LoadingUI from "@/components/loading-ui"
import { useLanguage } from "@/contexts/language-context"
import { client } from "@/sanity/lib/client"
import { aboutPageQuery } from "@/sanity/queries/about"

interface AboutData {
  pageHeader: {
    title: string
    description: string
  }
  about: {
    tagline: string
    title: string
    description: string
    features: string[]
    primaryButton: {
      text: string
      link: string
    }
  }
  values: Array<{
    title: string
    description: string
    icon: string
  }>
  teamMembers: Array<{
    name: string
    position: string
    image: any
    bio: string
  }>
  stats: Array<{
    value: string
    label: string
    description: string
  }>
}

export default function AboutPageClient() {
  const [data, setData] = useState<AboutData | null>(null)
  const [isChangingLanguage, setIsChangingLanguage] = useState(false)
  const [initialLoad, setInitialLoad] = useState(true)
  const { language } = useLanguage()
  const { controls, isClient } = usePageAnimations()

  const iconMap: Record<string, any> = {
    Target,
    Users,
    Lightbulb,
    Globe,
    Puzzle,
    Handshake: HandshakeIcon,
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!initialLoad) {
          setIsChangingLanguage(true)
          // Add artificial delay for smoother transition
          await new Promise(resolve => setTimeout(resolve, 800))
        }
        
        const result = await client.fetch(aboutPageQuery, { language })
        setData(result)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setIsChangingLanguage(false)
        setInitialLoad(false)
      }
    }

    fetchData()
  }, [language, initialLoad])

  if (!data) {
    return null
  }

  return (
    <React.Fragment>
      <LoadingUI isVisible={isChangingLanguage} />
      <main className="min-h-screen bg-background text-foreground">
        <Navbar />
        <PageHeader
          title={data.pageHeader.title}
          description={data.pageHeader.description}
        />

        {/* Our Story */}
        <section className="py-20 bg-background">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeIn direction="left">
                <motion.div
                  className="relative"
                  whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)" }}
                >
                  <motion.div
                    className="absolute -left-4 -top-4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"
                    animate={{
                      opacity: [0.5, 0.7, 0.5],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  ></motion.div>
                  <motion.div
                    className="absolute -right-4 -bottom-4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"
                    animate={{
                      opacity: [0.7, 0.5, 0.7],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      delay: 1,
                    }}
                  ></motion.div>

                  <motion.div
                    className="relative z-10 bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300"
                    whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)" }}
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                  >
                    <div className="relative z-10 grid grid-cols-2 gap-4">
                      <div className="space-y-4">
                        <motion.div
                          className="bg-card/50 backdrop-blur-sm border border-border rounded-lg overflow-hidden h-40"
                          whileHover={{ y: -5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="h-full w-full bg-gradient-to-br from-primary/20 to-transparent p-6 flex items-center justify-center">
                            <motion.svg
                              viewBox="0 0 100 100"
                              className="w-20 h-20"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            >
                              <polygon points="50,0 100,50 50,100 0,50" fill="#30C8C9" />
                            </motion.svg>
                          </div>
                        </motion.div>
                        <motion.div
                          className="bg-card/50 backdrop-blur-sm border border-border rounded-lg overflow-hidden h-56"
                          whileHover={{ y: -5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="h-full w-full bg-gradient-to-tr from-transparent to-primary/20 p-6 flex flex-col justify-end">
                            <div className="space-y-2">
                              <motion.div
                                className="h-1 w-12 bg-primary"
                                initial={{ width: 0 }}
                                animate={controls ? { width: "3rem" } : { width: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                              ></motion.div>
                              <motion.div
                                className="h-1 w-8 bg-primary/60"
                                initial={{ width: 0 }}
                                animate={controls ? { width: "2rem" } : { width: 0 }}
                                transition={{ duration: 1, delay: 0.7 }}
                              ></motion.div>
                              <motion.div
                                className="h-1 w-4 bg-primary/40"
                                initial={{ width: 0 }}
                                animate={controls ? { width: "1rem" } : { width: 0 }}
                                transition={{ duration: 1, delay: 0.9 }}
                              ></motion.div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                      <div className="space-y-4">
                        <motion.div
                          className="bg-card/50 backdrop-blur-sm border border-border rounded-lg overflow-hidden h-56"
                          whileHover={{ y: -5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="h-full w-full bg-gradient-to-bl from-primary/20 to-transparent p-6 flex items-start justify-end">
                            <motion.div
                              className="w-16 h-16 border-2 border-primary/60 rounded-full flex items-center justify-center"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            >
                              <div className="w-12 h-12 border-2 border-primary rounded-full"></div>
                            </motion.div>
                          </div>
                        </motion.div>
                        <motion.div
                          className="bg-card/50 backdrop-blur-sm border border-border rounded-lg overflow-hidden h-40"
                          whileHover={{ y: -5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="h-full w-full bg-gradient-to-tl from-primary/20 to-transparent p-6 flex items-center justify-center">
                            <motion.div
                              className="w-full h-1 bg-primary"
                              initial={{ width: 0 }}
                              animate={controls ? { width: "100%" } : { width: 0 }}
                              transition={{ duration: 1.5, delay: 1 }}
                            ></motion.div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </FadeIn>

              <FadeIn direction="right">
                <div className="space-y-6">
                  <div className="inline-block">
                    <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm">
                      <span className="text-primary font-medium">{data.about.tagline}</span>
                    </div>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold">{data.about.title}</h2>

                  <p className="text-muted-foreground">{data.about.description}</p>

                  <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {(data.about.features || []).map((feature, index) => (
                      <StaggerItem key={index}>
                        <div className="flex items-center space-x-2">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 * index }}
                          >
                            <Button variant="ghost" size="icon" className="h-5 w-5 p-0 text-primary">
                              <span className="sr-only">Check</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-5 w-5"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                              </svg>
                            </Button>
                          </motion.div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>

                  {data.about.primaryButton && (
                    <StaggerItem>
                      <Button className="bg-primary hover:bg-primary/90 text-white">
                        {data.about.primaryButton.text}
                      </Button>
                    </StaggerItem>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gradient-to-b from-background to-background/95">
          <div className="container px-4 mx-auto">
            <FadeIn direction="up">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-block mb-4">
                  <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm">
                    <span className="text-primary font-medium">Our Values</span>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The Principles That Guide Us</h2>
                <p className="text-muted-foreground text-lg">
                  At Aletech, our values are the foundation of everything we do. They shape our culture, guide our
                  decisions, and define how we work with our clients and each other.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(data.values || []).map((value, index) => {
                const Icon = iconMap[value.icon]
                return (
                  <StaggerItem key={index}>
                    <motion.div
                      className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 h-full"
                      whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)" }}
                    >
                      <motion.div
                        className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.7 }}
                      >
                        {Icon && <Icon className="h-6 w-6 text-primary" />}
                      </motion.div>
                      <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
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
                    <span className="text-primary font-medium">Our Team</span>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet the Leadership Team</h2>
                <p className="text-muted-foreground text-lg">
                  Our leadership team brings together decades of experience in technology, business, and innovation to guide
                  Aletech's vision and strategy. Backed by 50+ young, passionate, tech-savvy professionals who drive our success.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(data.teamMembers || []).map((member, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 h-full flex flex-col"
                    whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)" }}
                  >
                    <div className="relative aspect-square">
                      <Image
                        src={member.image ? urlFor(member.image).url() : "/placeholder.svg"}
                        alt={member.name}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-primary text-sm mb-3">{member.position}</p>
                      <p className="text-muted-foreground text-sm flex-grow">{member.bio}</p>
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
                    whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)" }}
                  >
                    <motion.div
                      className="text-4xl md:text-5xl font-bold text-primary mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={controls ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                    >
                      {stat.value}
                    </motion.div>
                    <p className="text-muted-foreground font-medium mb-1">{stat.label}</p>
                    <p className="text-sm text-muted-foreground/80">{stat.description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <Footer />
      </main>
    </React.Fragment>
  )
}

