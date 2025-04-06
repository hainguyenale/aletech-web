"use client"

import { useEffect } from "react"
import { Code, Database, Cloud, Shield, LineChart, Smartphone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import React from "react"

export default function ServicesSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

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

  const services = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Web Development",
      description: "Scalable and responsive platforms built for outstanding user experience.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Mobile Development",
      description: "Cross-platform mobile apps for both iOS and Android with smooth user interaction.",
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Data Solutions",
      description: "Includes BI, data science, and machine learning for analytics and insights.",
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Artificial Intelligence",
      description: "AI-powered automation, decision-making, and data intelligence solutions.",
    },
    {
      icon: <Cloud className="h-10 w-10 text-primary" />,
      title: "Cloud Infrastructure",
      description: "Secure, scalable cloud solutions for enterprise-grade applications.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Enterprise Solutions",
      description: "Custom enterprise software with focus on security and compliance.",
    },
  ]

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container px-4 sm:px-6 mx-auto" ref={ref}>
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Technology Solutions</h2>
          <div className="h-1 w-16 sm:w-20 bg-primary mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-muted-foreground px-4 sm:px-0">
            We deliver secure, high-performance, and adaptive technology solutions tailored to your business needs.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)" }}
                className="h-full"
              >
                <Card className="bg-card/50 border border-border backdrop-blur-sm hover:border-primary/50 transition-all duration-300 h-full">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="mb-3 sm:mb-4">
                      {React.cloneElement(service.icon as React.ReactElement, {
                        className: 'h-8 w-8 sm:h-10 sm:w-10 text-primary'
                      })}
                    </div>
                    <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                    <CardDescription className="text-sm sm:text-base text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

