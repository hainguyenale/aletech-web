"use client"

import React, { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { usePageAnimations } from "@/hooks/use-page-animations"
import LoadingUI from "@/components/loading-ui"
import { useLanguage } from "@/contexts/language-context"
import { client } from "@/sanity/lib/client"
import { projectPageQuery } from "@/sanity/queries/projects"
import { useInView } from "react-intersection-observer"

interface Project {
  id: string
  title: string
  category: string
  client: string
  image: {
    url: string
    dimensions: {
      width: number
      height: number
    }
  }
  description: string
  tags: string[]
}

interface ProjectsData {
  pageHeader: {
    title: string
    description: string
  }
  projects: Project[]
  categories: string[]
  cta: {
    title: string
    description: string
    video: {
      url: string
    }
    videoThumbnail?: {
      url: string
    }
    primaryButton: {
      text: string
      link: string
    }
  }
}

export default function ProjectsPageClient() {
  const [data, setData] = useState<ProjectsData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isChangingLanguage, setIsChangingLanguage] = useState(false)
  const [initialLoad, setInitialLoad] = useState(true)
  const { language } = useLanguage()
  const [activeCategory, setActiveCategory] = useState("All")
  const [allCategories, setAllCategories] = useState<string[]>(["All"])
  const { controls, isClient } = usePageAnimations()
  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!initialLoad) {
          setIsChangingLanguage(true)
          await new Promise(resolve => setTimeout(resolve, 800))
        }
        
        const result = await client.fetch(projectPageQuery, { language })
        setData(result)
        setAllCategories(["All", ...result.categories])
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setIsLoading(false)
        setIsChangingLanguage(false)
        setInitialLoad(false)
      }
    }

    fetchData()
  }, [language, initialLoad])

  useEffect(() => {
    if (ctaInView) {
      controls.start("visible")
    }
  }, [controls, ctaInView])

  if (!data) {
    return null
  }

  const filteredProjects =
    activeCategory === "All" ? data.projects : data.projects.filter((project) => project.category === activeCategory)

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

  // Function to handle category change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    // Reset animation state when changing categories
    controls.set("hidden")
    setTimeout(() => {
      controls.start("visible")
    }, 100)
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

        {/* Filter Categories */}
        <section className="py-8 bg-background/90 border-b border-border">
          <div className="container px-4 mx-auto overflow-x-auto">
            <motion.div
              className="flex space-x-4 py-2 min-w-max"
              initial="visible"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                },
              }}
            >
              {allCategories.map((category: string, index: number) => (
                <motion.button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === activeCategory
                      ? "bg-primary text-white"
                      : "bg-card/50 border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => handleCategoryChange(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-background">
          <div className="container px-4 mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredProjects.map((project, index) => (
                <motion.div key={project.id} variants={itemVariants} custom={index}>
                  <Link href={`/projects/${project.id}`} className="group block h-full">
                    <motion.div
                      className="bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 h-full flex flex-col"
                      whileHover={{
                        y: -10,
                        boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.3)",
                      }}
                    >
                      <div className="relative">
                        <Image
                          src={project.image.url}
                          alt={project.title}
                          width={project.image.dimensions.width}
                          height={project.image.dimensions.height}
                          className="w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                        <motion.div
                          className="absolute top-4 left-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs">
                            <span className="text-primary font-medium">{project.category}</span>
                          </div>
                        </motion.div>
                      </div>

                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-2">Client: {project.client}</p>
                        <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, index) => (
                            <motion.span
                              key={index}
                              className="text-xs bg-card/50 border border-border px-2 py-1 rounded-full text-muted-foreground"
                              whileHover={{
                                backgroundColor: "rgba(48, 200, 201, 0.1)",
                                borderColor: "rgba(48, 200, 201, 0.3)",
                              }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>

                        <motion.div className="flex items-center text-primary text-sm font-medium" whileHover={{ x: 5 }}>
                          View Case Study
                          <motion.div
                            className="ml-2"
                            animate={{ x: [0, 5, 0] }}
                            transition={{
                              duration: 1.5,
                              repeat: Number.POSITIVE_INFINITY,
                              repeatType: "loop",
                              ease: "easeInOut",
                            }}
                          >
                            <ArrowRight className="h-4 w-4" />
                          </motion.div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-background to-background/95">
          <div className="container px-4 mx-auto">
            <motion.div
              ref={ctaRef}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{data.cta.title}</h2>
                    <p className="text-muted-foreground mb-6">
                      {data.cta.description}
                    </p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link href={data.cta.primaryButton.link}>
                        <Button className="bg-primary hover:bg-primary/90 text-white">
                          {data.cta.primaryButton.text}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </motion.div>
                  </div>

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
                    <div className="relative aspect-video w-full bg-card/70 rounded-xl overflow-hidden flex items-center justify-center">
                      <video
                        className="h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        {...(data.cta.videoThumbnail?.url && {
                          poster: data.cta.videoThumbnail.url
                        })}
                      >
                        <source src={data.cta.video?.url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>}
    </React.Fragment>
  )
}

