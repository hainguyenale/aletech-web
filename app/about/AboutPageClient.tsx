"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { usePageAnimations } from "@/hooks/use-page-animations"

export default function AboutPageClient() {
  const { controls, hasAnimated } = usePageAnimations()

  const teamMembers = [
    {
      name: "Sarah Johnson",
      position: "Chief Executive Officer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "With over 15 years of experience in the tech industry, Sarah leads Aletech with a vision for innovation and excellence.",
    },
    {
      name: "Michael Chen",
      position: "Chief Technology Officer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Michael brings deep technical expertise and a passion for cutting-edge solutions to drive Aletech's technology strategy.",
    },
    {
      name: "Emily Rodriguez",
      position: "Chief Operating Officer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Emily ensures operational excellence across all departments, with a focus on efficiency and customer satisfaction.",
    },
    {
      name: "David Wilson",
      position: "Chief Financial Officer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "David oversees Aletech's financial strategy, ensuring sustainable growth and value for our stakeholders.",
    },
  ]

  const values = [
    {
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible in technology.",
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code to customer service.",
    },
    {
      title: "Integrity",
      description: "We operate with transparency and honesty in all our business dealings.",
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnership to achieve great results.",
    },
    {
      title: "Customer Focus",
      description: "We put our clients' needs at the center of our decision-making process.",
    },
    {
      title: "Sustainability",
      description: "We're committed to sustainable practices that benefit our planet and society.",
    },
  ]

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
        title="About Aletech"
        description="Pioneering technology solutions that transform businesses and drive innovation in the digital age."
      />

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                },
              }}
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
                          animate={hasAnimated ? { width: "3rem" } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.5 }}
                        ></motion.div>
                        <motion.div
                          className="h-1 w-8 bg-primary/60"
                          initial={{ width: 0 }}
                          animate={hasAnimated ? { width: "2rem" } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.7 }}
                        ></motion.div>
                        <motion.div
                          className="h-1 w-4 bg-primary/40"
                          initial={{ width: 0 }}
                          animate={hasAnimated ? { width: "1rem" } : { width: 0 }}
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
                        animate={hasAnimated ? { width: "100%" } : { width: 0 }}
                        transition={{ duration: 1.5, delay: 1 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div className="space-y-6" variants={containerVariants} initial="hidden" animate={controls}>
              <motion.div variants={itemVariants} className="inline-block">
                <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm">
                  <span className="text-primary font-medium">About Aletech</span>
                </div>
              </motion.div>

              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold">
                Pioneering Technology Solutions Since 2010
              </motion.h2>

              <motion.p variants={itemVariants} className="text-muted-foreground">
                Aletech is a leading technology company dedicated to helping businesses transform and thrive in the
                digital era. With over a decade of experience, we've successfully delivered innovative solutions to
                clients across various industries.
              </motion.p>

              <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {values.map((feature, index) => (
                  <motion.div key={index} variants={itemVariants} className="flex items-center space-x-2">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={hasAnimated ? { scale: 1 } : { scale: 0 }}
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
                    <span className="text-sm text-muted-foreground">{feature.title}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants}>
                <Button className="bg-primary hover:bg-primary/90 text-white">Learn More About Us</Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-b from-background to-background/95">
        <div className="container px-4 mx-auto">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
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
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={itemVariants} custom={index}>
                <motion.div
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 h-full"
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)" }}
                >
                  <motion.div
                    className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.7 }}
                  >
                    <div className="h-6 w-6 bg-primary rounded-full"></div>
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
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
            <div className="inline-block mb-4">
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm">
                <span className="text-primary font-medium">Our Team</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet the Leadership Team</h2>
            <p className="text-muted-foreground text-lg">
              Our leadership team brings together decades of experience in technology, business, and innovation to guide
              Aletech's vision and strategy.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={itemVariants} custom={index}>
                <motion.div
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300"
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)" }}
                >
                  <div className="relative">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary text-sm mb-3">{member.position}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <motion.div
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 },
                },
              }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-primary hover:bg-primary/90 text-white">Join Our Team</Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-b from-background/95 to-background">
        <div className="container px-4 mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {[
              { value: "10+", label: "Years of Experience" },
              { value: "500+", label: "Projects Completed" },
              { value: "200+", label: "Team Members" },
              { value: "15+", label: "Countries Served" },
            ].map((stat, index) => (
              <motion.div key={index} variants={itemVariants} custom={index}>
                <motion.div
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center"
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)" }}
                >
                  <motion.div
                    className="text-4xl md:text-5xl font-bold text-primary mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

