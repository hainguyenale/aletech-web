"use client"

import React from "react"
import Navbar from "@/components/navbar"
import Footer, { FooterData } from "@/components/footer"
import PageHeader from "@/components/page-header"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import type { SingleProjectData } from "@/lib/types"

interface AnimatedProjectProps {
  data: SingleProjectData
  footerData: FooterData
}

export default function AnimatedProject({ data, footerData }: AnimatedProjectProps) {
  const controls = useAnimation()
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
    <main className="min-h-screen bg-background text-foreground">
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

      <Footer data={footerData} />
    </main>
  )
}
