"use client"

import { useEffect } from "react"
import { Code, Database, Cloud, Shield, LineChart, Smartphone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

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
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs with cutting-edge technologies.",
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Data Analytics",
      description: "Transform your raw data into actionable insights with our advanced analytics solutions.",
    },
    {
      icon: <Cloud className="h-10 w-10 text-primary" />,
      title: "Cloud Services",
      description: "Scalable and secure cloud infrastructure to power your business applications.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Cybersecurity",
      description: "Protect your digital assets with our comprehensive security solutions and services.",
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "AI & Machine Learning",
      description: "Leverage the power of artificial intelligence to automate processes and gain insights.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Mobile Development",
      description: "Create engaging mobile experiences with our expert app development services.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container px-4 mx-auto" ref={ref}>
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg">
            We offer a comprehensive range of technology solutions to help your business thrive in the digital
            landscape.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground text-base">{service.description}</CardDescription>
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

