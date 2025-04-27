"use client"

import React, { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, TrendingUp, BarChart3, PieChart, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import FadeIn from "@/components/animations/fade-in"
import StaggerContainer from "@/components/animations/stagger-container"
import StaggerItem from "@/components/animations/stagger-item"
import { useLanguage } from "@/contexts/language-context"
import { client } from "@/sanity/lib/client"
import { investorsPageQuery } from "@/sanity/queries/investors"
import LoadingUI from "@/components/loading-ui"
import { usePageAnimations } from "@/hooks/use-page-animations"

interface SanityImage {
  url: string
  metadata: {
    dimensions: {
      width: number
      height: number
    }
  }
}

interface SanityFile {
  url: string
  size: number
  originalFilename: string
}

interface InvestorsData {
  pageHeader: {
    title: string
    description: string
  }
  financialHighlights: {
    tagline: string
    title: string
    description: string
    metrics: {
      title: string
      value: string
      growth: string
      progressPercentage: number
      icon: string
    }[]
  }
  financialReports: {
    tagline: string
    title: string
    description: string
    reports: {
      title: string
      date: string
      file: SanityFile
      type: string
    }[]
  }
  upcomingEvents: {
    tagline: string
    title: string
    description: string
    events: {
      title: string
      date: string
      time: string
      location: string
    }[]
    presentation: {
      title: string
      description: string
      thumbnailImage: SanityImage
      videoUrl: string
    }
  }
  boardOfDirectors: {
    tagline: string
    title: string
    description: string
    members: {
      name: string
      position: string
      image: SanityImage
    }[]
  }
  contactIR: {
    title: string
    description: string
    email: string
    phone: string
    address: string[]
  }
}

// Helper function to format file size
const formatFileSize = (bytes: number) => {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`
}

// Helper function to format date
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export default function InvestorsPageClient() {
  const [data, setData] = useState<InvestorsData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isChangingLanguage, setIsChangingLanguage] = useState(false)
  const { language } = useLanguage()
  const { controls, isClient } = usePageAnimations()
  const [visibleReports, setVisibleReports] = useState(6)

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!isLoading) {
          setIsChangingLanguage(true)
          // Add artificial delay for smoother transition
          await new Promise(resolve => setTimeout(resolve, 400))
        }
        
        const result = await client.fetch(investorsPageQuery, { language })
        setData(result)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setIsLoading(false)
        setIsChangingLanguage(false)
      }
    }

    fetchData()
  }, [language, isLoading])

  if (!data) {
    return null
  }

  // Function to add event to calendar
  const addToCalendar = (event: { title: string; date: string; time: string; location: string }) => {
    const startDate = new Date(`${event.date} ${event.time}`)
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000) // Add 1 hour

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${startDate.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}\/${endDate.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}&details=${encodeURIComponent(`Location: ${event.location}`)}&location=${encodeURIComponent(event.location)}`

    window.open(googleCalendarUrl, '_blank')
  }

  return (
    <React.Fragment>
      <LoadingUI isVisible={isChangingLanguage} />
      {!isChangingLanguage && <main className="min-h-screen bg-background text-foreground">
        <Navbar />

        <PageHeader
          title={data.pageHeader.title}
          description={data.pageHeader.description}
        />

        {/* Financial Highlights */}
        <section className="py-20 bg-background">
          <div className="container px-4 mx-auto">
            <FadeIn direction="up">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-block mb-4">
                  <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm">
                    <span className="text-primary font-medium">{data.financialHighlights.tagline}</span>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{data.financialHighlights.title}</h2>
                <p className="text-muted-foreground text-lg">
                  {data.financialHighlights.description}
                </p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.financialHighlights.metrics.map((metric, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
                    whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)" }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-medium">{metric.title}</h3>
                      {metric.icon === 'TrendingUp' && <TrendingUp className="h-5 w-5 text-primary" />}
                      {metric.icon === 'BarChart3' && <BarChart3 className="h-5 w-5 text-primary" />}
                      {metric.icon === 'PieChart' && <PieChart className="h-5 w-5 text-primary" />}
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
                    <div className="text-sm text-primary">{metric.growth}</div>
                    <motion.div
                      className="mt-4 h-2 w-full bg-muted rounded-full overflow-hidden"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <motion.div
                        className="h-full bg-primary"
                        style={{ width: `${metric.progressPercentage}%` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${metric.progressPercentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                      ></motion.div>
                    </motion.div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Financial Reports */}
        <section className="py-20 bg-gradient-to-b from-background to-background/95">
          <div className="container px-4 mx-auto">
            <FadeIn direction="up">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-block mb-4">
                  <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm">
                    <span className="text-primary font-medium">{data.financialReports.tagline}</span>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{data.financialReports.title}</h2>
                <p className="text-muted-foreground text-lg">
                  {data.financialReports.description}
                </p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.financialReports.reports.slice(0, visibleReports).map((report, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 flex flex-col"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)",
                    }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold mb-1">{report.title}</h3>
                        <p className="text-sm text-muted-foreground">{formatDate(report.date)}</p>
                      </div>
                      <motion.a
                        href={report.file.url}
                        download
                        className="bg-primary/10 p-2 rounded-full cursor-pointer"
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(48, 200, 201, 0.2)",
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Download className="h-5 w-5 text-primary" />
                      </motion.a>
                    </div>

                    <div className="mt-auto pt-4 flex items-center justify-between text-sm text-muted-foreground">
                      <span>{formatFileSize(report.file.size)}</span>
                      <span>{report.type}</span>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {visibleReports < data.financialReports.reports.length && (
              <div className="text-center mt-12">
                <FadeIn direction="up" delay={0.5}>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      variant="outline" 
                      className="border-primary text-primary hover:bg-primary hover:text-white"
                      onClick={() => setVisibleReports(prev => prev + 6)}
                    >
                      Load More
                    </Button>
                  </motion.div>
                </FadeIn>
              </div>
            )}
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-background">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <FadeIn direction="right" delay={0.2}>
                <div>
                  <div className="inline-block mb-4">
                    <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm">
                      <span className="text-primary font-medium">{data.upcomingEvents.tagline}</span>
                    </div>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold mb-6">{data.upcomingEvents.title}</h2>

                  <p className="text-muted-foreground mb-8">
                    {data.upcomingEvents.description}
                  </p>

                  <StaggerContainer className="space-y-6">
                    {data.upcomingEvents.events.map((event, index) => (
                      <StaggerItem key={index}>
                        <motion.div
                          className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
                          whileHover={{
                            y: -5,
                            boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)",
                          }}
                        >
                          <div className="flex items-start gap-4">
                            <motion.div
                              className="bg-primary/10 p-3 rounded-xl flex flex-col items-center justify-center min-w-[60px]"
                              whileHover={{ scale: 1.05, backgroundColor: "rgba(48, 200, 201, 0.2)" }}
                            >
                              <Calendar className="h-6 w-6 text-primary mb-1" />
                              <div className="text-xs text-primary font-medium">{formatDate(event.date).split(" ")[0]}</div>
                            </motion.div>

                            <div>
                              <h3 className="text-lg font-bold mb-1">{event.title}</h3>
                              <p className="text-sm text-muted-foreground mb-2">
                                {formatDate(event.date)} | {event.time}
                              </p>
                              <p className="text-sm text-muted-foreground">{event.location}</p>
                            </div>
                          </div>
                        </motion.div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>

                  <div className="mt-8">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        className="bg-primary hover:bg-primary/90 text-white"
                        onClick={() => addToCalendar(data.upcomingEvents.events[0])}
                      >
                        Add to Calendar
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.4}>
                <div className="relative">
                  <motion.div
                    className="absolute -inset-4 bg-primary/10 rounded-xl filter blur-xl opacity-50"
                    animate={{
                      opacity: [0.3, 0.5, 0.3],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  ></motion.div>
                  <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden">
                    <div className="aspect-video w-full relative">
                      <Image
                        src={data.upcomingEvents.presentation.thumbnailImage.url}
                        alt={data.upcomingEvents.presentation.title}
                        width={data.upcomingEvents.presentation.thumbnailImage.metadata.dimensions.width}
                        height={data.upcomingEvents.presentation.thumbnailImage.metadata.dimensions.height}
                        className="w-full h-auto"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-background/50 to-transparent"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center cursor-pointer"
                          whileHover={{ scale: 1.1 }}
                          animate={{
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                          }}
                          onClick={() => window.open(data.upcomingEvents.presentation.videoUrl, '_blank')}
                        >
                          <div className="w-16 h-16 rounded-full bg-primary/30 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white">
                                <path d="M8 5v14l11-7z" fill="currentColor" />
                              </svg>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{data.upcomingEvents.presentation.title}</h3>
                      <p className="text-muted-foreground mb-4">
                        {data.upcomingEvents.presentation.description}
                      </p>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="outline"
                          className="border-primary text-primary hover:bg-primary hover:text-white"
                          onClick={() => window.open(data.upcomingEvents.presentation.videoUrl, '_blank')}
                        >
                          Watch Presentation
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Board of Directors */}
        <section className="py-20 bg-gradient-to-b from-background/95 to-background">
          <div className="container px-4 mx-auto">
            <FadeIn direction="up">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-block mb-4">
                  <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm">
                    <span className="text-primary font-medium">{data.boardOfDirectors.tagline}</span>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{data.boardOfDirectors.title}</h2>
                <p className="text-muted-foreground text-lg">
                  {data.boardOfDirectors.description}
                </p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.boardOfDirectors.members.map((member, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)",
                    }}
                  >
                    <div className="relative">
                      <Image
                        src={member.image.url}
                        alt={member.name}
                        width={member.image.metadata.dimensions.width}
                        height={member.image.metadata.dimensions.height}
                        className="w-full h-auto"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-primary text-sm">{member.position}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Contact IR */}
        <section className="py-20 bg-background">
          <div className="container px-4 mx-auto">
            <FadeIn>
              <motion.div
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12"
                whileHover={{
                  boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)",
                  borderColor: "rgba(48, 200, 201, 0.3)",
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{data.contactIR.title}</h2>
                    <p className="text-muted-foreground mb-6">
                      {data.contactIR.description}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">Email:</p>
                        <p className="text-primary">{data.contactIR.email}</p>
                      </div>
                      <div>
                        <p className="font-medium">Phone:</p>
                        <p className="text-muted-foreground">{data.contactIR.phone}</p>
                      </div>
                      <div>
                        <p className="font-medium">Address:</p>
                        {data.contactIR.address.map((line, index) => (
                          <p key={index} className="text-muted-foreground">{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button className="bg-primary hover:bg-primary/90 text-white w-full">
                        Subscribe to IR Updates
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-white w-full"
                      >
                        Request Investor Kit
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-white w-full"
                        onClick={() => window.location.href = `mailto:${data.contactIR.email}`}
                      >
                        Email IR Team
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </section>

        <Footer />
      </main>}
    </React.Fragment>
  )
}

