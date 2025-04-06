"use client"

import { useEffect } from "react"
import { motion, useAnimation, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import SolutionsSection from "@/components/solutions-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  // Animation controls for sections
  const servicesControls = useAnimation()
  const aboutControls = useAnimation()
  const solutionsControls = useAnimation()
  const testimonialsControls = useAnimation()
  const contactControls = useAnimation()

  // Refs for sections
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [aboutRef, aboutInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [solutionsRef, solutionsInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [contactRef, contactInView] = useInView({ threshold: 0.1, triggerOnce: true })

  // Animate sections when they come into view
  useEffect(() => {
    if (servicesInView) {
      servicesControls.start("visible")
    }
    if (aboutInView) {
      aboutControls.start("visible")
    }
    if (solutionsInView) {
      solutionsControls.start("visible")
    }
    if (testimonialsInView) {
      testimonialsControls.start("visible")
    }
    if (contactInView) {
      contactControls.start("visible")
    }
  }, [
    servicesInView,
    servicesControls,
    aboutInView,
    aboutControls,
    solutionsInView,
    solutionsControls,
    testimonialsInView,
    testimonialsControls,
    contactInView,
    contactControls,
  ])

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />

      <Navbar />

      <HeroSection />

      <motion.div ref={servicesRef} initial="hidden" animate={servicesControls} variants={sectionVariants}>
        <ServicesSection />
      </motion.div>

      <motion.div ref={aboutRef} initial="hidden" animate={aboutControls} variants={sectionVariants}>
        <AboutSection />
      </motion.div>

      <motion.div ref={solutionsRef} initial="hidden" animate={solutionsControls} variants={sectionVariants}>
        <SolutionsSection />
      </motion.div>

      <motion.div ref={testimonialsRef} initial="hidden" animate={testimonialsControls} variants={sectionVariants}>
        <TestimonialsSection />
      </motion.div>

      <motion.div ref={contactRef} initial="hidden" animate={contactControls} variants={sectionVariants}>
        <ContactSection />
      </motion.div>

      <Footer />
    </main>
  )
}

