"use client"

import React, { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer, { FooterData } from "@/components/footer"
import PageHeader from "@/components/page-header"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { usePageAnimations } from "@/hooks/use-page-animations"
import { useLanguage } from "@/contexts/language-context"
import { client } from "@/sanity/lib/client"
import { singleProjectQuery } from "@/sanity/queries/projects"
import { footerQuery } from "@/sanity/queries/footer"
import LoadingUI from "@/components/loading-ui"

interface ImageDimensions {
  width: number
  height: number
}

interface Image {
  url: string
  dimensions: ImageDimensions
}

interface Metric {
  value: string
  label: string
  description: string
}

interface ArchitectureComponent {
  name: string
  description: string
}

interface Architecture {
  overview: string
  components: ArchitectureComponent[]
}

interface Project {
  title: string
  description: string
  category: string
  longDescription: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  image: Image
  screenshots?: Image[]
  timeline: string
  teamSize: string
  client: string
  keyFeatures?: string[]
  architecture?: Architecture
  challenges?: string[]
  solutions?: string[]
  technologies?: string[]
  results?: string[]
  metrics?: Metric[]
  caseStudy?: string
  sectionTitles: {
    overview: string
    timeline: string
    teamSize: string
    client: string
    keyFeatures: string
    architecture?: string
    challenges: string
    solutions: string
    technologies: string
    results: string
    keyMetrics: string
    screenshots: string
  }
  sectionIcons: {
    github: string
    externalLink: string
    listItem: string
    paragraph: string
  }
}

interface ProjectData {
  project: Project
}

interface ProjectPageClientProps {
  id: string
}

export default function ProjectPageClient({ id }: ProjectPageClientProps) {
  const [data, setData] = useState<ProjectData | null>(null)
  const [footerData, setFooterData] = useState<FooterData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isChangingLanguage, setIsChangingLanguage] = useState(false)
  const [initialLoad, setInitialLoad] = useState(true)
  const { language } = useLanguage()
  const { controls, isClient } = usePageAnimations()

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!initialLoad) {
          setIsChangingLanguage(true)
          await new Promise(resolve => setTimeout(resolve, 400))
        }
        
        const result = await client.fetch(singleProjectQuery, { id, language })
        const footerResult = await client.fetch<FooterData>(footerQuery, { language })
        setData(result)
        setFooterData(footerResult)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setIsLoading(false)
        setIsChangingLanguage(false)
        setInitialLoad(false)
      }
    }

    fetchData()
  }, [id, language, initialLoad]) 

  if (!data) {
    return null
  }

  const { project } = data

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <React.Fragment>
      <LoadingUI isVisible={isChangingLanguage} />
      
      {!isChangingLanguage && <main className="min-h-screen bg-background text-foreground">
        <Navbar />
        <PageHeader title={project.title} description={project.description} />
        
        <section className="py-20 bg-background">
          <div className="container px-4 mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {/* Project Overview */}
              <motion.div variants={itemVariants} className="mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
                        <span className="text-primary font-medium">{project.category}</span>
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold mb-6">{project.sectionTitles.overview}</h2>
                    <p className="text-muted-foreground mb-6">{project.longDescription}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs bg-card/50 border border-border px-3 py-1 rounded-full text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* <div className="flex gap-4">
                      {project.githubUrl && (
                        <Link href={project.githubUrl} target="_blank">
                          <Button variant="outline">
                            <Github className="mr-2 h-4 w-4" />
                            View Code
                          </Button>
                        </Link>
                      )}
                      {project.liveUrl && (
                        <Link href={project.liveUrl} target="_blank">
                          <Button>
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Visit Project
                          </Button>
                        </Link>
                      )}
                    </div> */}
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="relative w-full max-w-md h-[300px] rounded-xl overflow-hidden bg-card/30">
                      <Image
                        src={project.image.url}
                        alt={project.title}
                        width={project.image.dimensions.width}
                        height={project.image.dimensions.height}
                        className="object-contain h-full"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Project Details */}
              <motion.div variants={itemVariants} className="mb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <motion.div
                    whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)" }}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold mb-4">{project.sectionTitles.timeline}</h3>
                    <p className="text-muted-foreground">{project.timeline}</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)" }}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold mb-4">{project.sectionTitles.teamSize}</h3>
                    <p className="text-muted-foreground">{project.teamSize}</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)" }}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold mb-4">{project.sectionTitles.client}</h3>
                    <p className="text-muted-foreground">{project.client}</p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Key Features */}
              {project.keyFeatures && (
                <motion.div variants={itemVariants} className="mb-16">
                  <h2 className="text-2xl font-bold mb-6">{project.sectionTitles.keyFeatures}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {project.keyFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)" }}
                        className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                      >
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                            <span className="text-primary font-bold">{index + 1}</span>
                          </div>
                          <h3 className="text-lg font-medium">{feature}</h3>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Architecture */}
              {/* {project.architecture && (
                <motion.div variants={itemVariants} className="mb-16">
                  <h2 className="text-2xl font-bold mb-6">{project.sectionTitles.architecture}</h2>
                  <motion.div
                    whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)" }}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="prose prose-invert max-w-none">
                      <p className="text-muted-foreground mb-6">{project.architecture.overview}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {project.architecture.components.map((component, index) => (
                          <div key={index} className="bg-card/30 rounded-lg p-4">
                            <h4 className="font-bold mb-2">{component.name}</h4>
                            <p className="text-sm text-muted-foreground">{component.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )} */}

              {/* Challenges & Solutions */}
              <motion.div variants={itemVariants} className="mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <motion.div
                    whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)" }}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                  >
                    <h2 className="text-2xl font-bold mb-6">{project.sectionTitles.challenges}</h2>
                    <ul className="space-y-4">
                      {project.challenges?.map((challenge, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-muted-foreground">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)" }}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                  >
                    <h2 className="text-2xl font-bold mb-6">{project.sectionTitles.solutions}</h2>
                    <ul className="space-y-4">
                      {project.solutions?.map((solution, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-muted-foreground">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>

              {/* Technologies & Results */}
              <motion.div variants={itemVariants} className="mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <motion.div
                    whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)" }}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                  >
                    <h2 className="text-2xl font-bold mb-6">{project.sectionTitles.technologies}</h2>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies?.map((tech, index) => (
                        <span
                          key={index}
                          className="text-sm bg-card/50 border border-border px-3 py-1 rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)" }}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                  >
                    <h2 className="text-2xl font-bold mb-6">{project.sectionTitles.results}</h2>
                    <ul className="space-y-4">
                      {project.results?.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-muted-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>

              {/* Metrics */}
              {project.metrics && (
                <motion.div variants={itemVariants} className="mb-16">
                  <h2 className="text-2xl font-bold mb-6">{project.sectionTitles.keyMetrics}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {project.metrics.map((metric, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)" }}
                        className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                      >
                        <h3 className="text-xl font-bold text-primary mb-2">{metric.value}</h3>
                        <h4 className="text-lg font-medium mb-2">{metric.label}</h4>
                        <p className="text-muted-foreground text-sm">{metric.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Screenshots */}
              {project.screenshots && project.screenshots.length > 0 && (
                <motion.div variants={itemVariants} className="mb-16">
                  <h2 className="text-2xl font-bold mb-6">{project.sectionTitles.screenshots}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {project.screenshots.map((screenshot, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="relative aspect-video rounded-xl overflow-hidden bg-card/30 border border-border hover:border-primary/50 transition-all duration-300"
                      >
                        <Image
                          src={screenshot.url}
                          alt={`${project.title} screenshot ${index + 1}`}
                          width={screenshot.dimensions.width}
                          height={screenshot.dimensions.height}
                          className="object-cover w-full h-full"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

             
            </motion.div>
          </div>
        </section>

        {footerData && <Footer data={footerData} />}
      </main>}
    </React.Fragment>
  )
} 