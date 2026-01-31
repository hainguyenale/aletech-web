"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import SolutionsSection from "@/components/solutions-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer, { FooterData } from "@/components/footer"
import type { HomeData } from "@/lib/types"
import type { Locale } from "@/lib/i18n"

interface Props {
  data: HomeData
  footerData: FooterData
  lang: Locale
}

export default function AnimatedHome({ data, footerData }: Props) {
  const servicesControls = useAnimation()
  const aboutControls = useAnimation()
  const solutionsControls = useAnimation()
  const testimonialsControls = useAnimation()
  const contactControls = useAnimation()

  const [servicesRef, servicesInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
  const [aboutRef, aboutInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
  const [solutionsRef, solutionsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
  const [testimonialsRef, testimonialsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
  const [contactRef, contactInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  useEffect(() => {
    if (servicesInView) servicesControls.start("visible")
    if (aboutInView) aboutControls.start("visible")
    if (solutionsInView) solutionsControls.start("visible")
    if (testimonialsInView) testimonialsControls.start("visible")
    if (contactInView) contactControls.start("visible")
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
      <Navbar />

      <HeroSection data={data.hero} />

      <motion.div
        ref={servicesRef}
        initial="hidden"
        animate={servicesControls}
        variants={sectionVariants}
      >
        <ServicesSection data={data.services} />
      </motion.div>

      <motion.div
        ref={aboutRef}
        initial="hidden"
        animate={aboutControls}
        variants={sectionVariants}
      >
        <AboutSection data={data.about} />
      </motion.div>

      <motion.div
        ref={solutionsRef}
        initial="hidden"
        animate={solutionsControls}
        variants={sectionVariants}
      >
        <SolutionsSection
          data={{
            title: data.solutions.title,
            description: data.solutions.subtitle,
            solutions: data.solutions.solutionsList.map((solution) => ({
              ...solution,
              image: solution.image.url,
            })),
          }}
        />
      </motion.div>

      <motion.div
        ref={testimonialsRef}
        initial="hidden"
        animate={testimonialsControls}
        variants={sectionVariants}
      >
        <TestimonialsSection data={data.testimonials} />
      </motion.div>

      <motion.div
        ref={contactRef}
        initial="hidden"
        animate={contactControls}
        variants={sectionVariants}
      >
        <ContactSection data={data.contact} />
      </motion.div>

      <Footer data={footerData} />
    </main>
  )
}
