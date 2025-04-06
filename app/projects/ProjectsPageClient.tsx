"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { usePageAnimations } from "@/hooks/use-page-animations"

export default function ProjectsPageClient() {
  const [activeCategory, setActiveCategory] = useState("All")
  const { controls, hasAnimated, isClient } = usePageAnimations()
  const [mounted, setMounted] = useState(false)

  // Set mounted to true after initial render
  useEffect(() => {
    setMounted(true)
  }, [])

  const projects = [
    {
      id: "uk-parking-control",
      title: "UK Parking Control (UKPC)",
      category: "Parking Management",
      client: "UK Parking Management Company",
      image: "images/ukpc-project.png",
      description:
        "Re-architected legacy systems into scalable microservices supporting up to 5 million requests/day with zero-downtime migration and improved performance.",
      tags: ["Microservices", "Scalability", "Legacy Migration", "High Performance"],
    },
    {
      id: "saas-parking-control",
      title: "SaaS Parking Control",
      category: "Parking Management",
      client: "Multi-Region Parking Provider",
      image: "images/saas-parking-control-project.png",
      description: "SaaS-ready infrastructure for cross-border scalability with automated provisioning and flexibility for regulatory compliance.",
      tags: ["SaaS", "Multi-Region", "Automation", "Compliance"],
    },
    {
      id: "flynotes",
      title: "Flynotes",
      category: "Healthcare Tech",
      client: "Healthcare Provider",
      image: "images/flynotes-project.png",
      description: "AI-powered dynamic consent generation platform providing fast, compliant, minimal-input process for patients.",
      tags: ["AI", "Healthcare", "Consent Management", "Compliance"],
    },
    {
      id: "beetoken",
      title: "BeeToken",
      category: "Fintech & Blockchain",
      client: "Financial Services Company",
      image: "images/beetoken-project.png",
      description: "NFT-based voucher system for gifting with blockchain-enabled secure platform and intuitive UI.",
      tags: ["NFT", "Blockchain", "Fintech", "Digital Currency"],
    },
    {
      id: "pod-system",
      title: "POD System",
      category: "E-commerce & Printing",
      client: "Print on Demand Company",
      image: "images/pod-system-project.png",
      description: "Handles 10k–20k orders/day with AI-driven analytics, integrating e-commerce channels and printing workflows.",
      tags: ["AI", "E-commerce", "Print on Demand", "Analytics"],
    },
    {
      id: "mina-chatbot",
      title: "Mina Chatbot",
      category: "AI & ERP",
      client: "Enterprise Client",
      image: "images/mina-project.png",
      description: "Knowledge management system using RAG & LLM that understands and processes unstructured documents with chat/voice interface and secure, on-premise deployment.",
      tags: ["RAG", "LLM", "Knowledge Management", "Chatbot"],
    },
    {
      id: "lina-text2sql",
      title: "Lina text2SQL",
      category: "AI & ERP",
      client: "Enterprise Client",
      image: "images/lina-project.png",
      description: "AI-based database querying system allowing non-developers to run queries with natural language, featuring role-based access, LLM & RAG powered, and enterprise integration.",
      tags: ["AI", "NLP", "Database Querying", "Enterprise Integration"],
    },
  ]

  const categories = [
    "All",
    "Parking Management",
    "Healthcare Tech",
    "Fintech & Blockchain",
    "E-commerce & Printing",
    "AI & ERP",
  ]

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

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
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <PageHeader
        title="Our Projects"
        description="Explore our portfolio of problem-centered technology solutions across various industries, from parking management to healthcare and blockchain applications."
      />

      {/* Filter Categories */}
      <section className="py-8 bg-background/90 border-b border-border">
        <div className="container px-4 mx-auto overflow-x-auto">
          {mounted && (
            <motion.div
              className="flex space-x-4 py-2 min-w-max"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                },
              }}
            >
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === activeCategory
                      ? "bg-primary text-white"
                      : "bg-card/50 border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => handleCategoryChange(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          {mounted && (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
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
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="w-full h-auto"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                          <motion.div
                            className="absolute top-4 left-4"
                            initial={{ opacity: 0, x: -20 }}
                            animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
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
            </AnimatePresence>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/95">
        <div className="container px-4 mx-auto">
          {mounted && (
            <motion.div
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
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Have a Project in Mind?</h2>
                    <p className="text-muted-foreground mb-6">
                      Let's discuss how Aletech can help bring your vision to life with our expertise in technology
                      solutions.
                    </p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link href="/contact">
                        <Button className="bg-primary hover:bg-primary/90 text-white">
                          Start a Project
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
                    <div className="relative aspect-video w-full bg-card/70 rounded-xl overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                          animate={{
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                          }}
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
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}

