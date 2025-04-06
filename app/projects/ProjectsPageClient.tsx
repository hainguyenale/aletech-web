"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { usePageAnimations } from "@/hooks/use-page-animations"

export default function ProjectsPageClient() {
  const [activeCategory, setActiveCategory] = useState("All")
  const { controls, hasAnimated } = usePageAnimations()

  const projects = [
    {
      id: "fintech-app",
      title: "FinTech Mobile App",
      category: "Mobile Development",
      client: "Global Financial Services",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "A comprehensive mobile banking application with advanced security features and intuitive user experience.",
      tags: ["React Native", "Node.js", "AWS", "Fintech"],
    },
    {
      id: "healthcare-platform",
      title: "Healthcare Management Platform",
      category: "Web Development",
      client: "National Healthcare Provider",
      image: "/placeholder.svg?height=400&width=600",
      description: "An integrated platform for patient management, telemedicine, and healthcare analytics.",
      tags: ["React", "Python", "Machine Learning", "Healthcare"],
    },
    {
      id: "retail-analytics",
      title: "Retail Analytics Dashboard",
      category: "Data Analytics",
      client: "International Retail Chain",
      image: "/placeholder.svg?height=400&width=600",
      description: "Real-time analytics dashboard providing insights into sales, inventory, and customer behavior.",
      tags: ["Data Visualization", "Big Data", "Tableau", "Retail"],
    },
    {
      id: "smart-manufacturing",
      title: "Smart Manufacturing System",
      category: "IoT Solutions",
      client: "Manufacturing Conglomerate",
      image: "/placeholder.svg?height=400&width=600",
      description: "IoT-based system for monitoring and optimizing manufacturing processes in real-time.",
      tags: ["IoT", "Cloud Computing", "Industrial Automation"],
    },
    {
      id: "logistics-platform",
      title: "Logistics Management Platform",
      category: "Enterprise Solutions",
      client: "Global Logistics Company",
      image: "/placeholder.svg?height=400&width=600",
      description: "End-to-end platform for tracking, managing, and optimizing logistics operations.",
      tags: ["Supply Chain", "GPS Tracking", "Optimization Algorithms"],
    },
    {
      id: "edtech-platform",
      title: "Educational Technology Platform",
      category: "Education",
      client: "International University",
      image: "/placeholder.svg?height=400&width=600",
      description: "Comprehensive learning management system with interactive content and analytics.",
      tags: ["E-Learning", "React", "Node.js", "Education"],
    },
  ]

  const categories = [
    "All",
    "Mobile Development",
    "Web Development",
    "Data Analytics",
    "IoT Solutions",
    "Enterprise Solutions",
    "Education",
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

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <PageHeader
        title="Our Projects"
        description="Explore our portfolio of successful technology projects and case studies across various industries."
      />

      {/* Filter Categories */}
      <section className="py-8 bg-background/90 border-b border-border">
        <div className="container px-4 mx-auto overflow-x-auto">
          <motion.div
            className="flex space-x-4 min-w-max"
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
                onClick={() => setActiveCategory(category)}
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
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/95">
        <div className="container px-4 mx-auto">
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
                    <Button className="bg-primary hover:bg-primary/90 text-white">
                      Start a Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
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
        </div>
      </section>

      <Footer />
    </main>
  )
}

