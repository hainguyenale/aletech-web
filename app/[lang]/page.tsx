"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useParams } from "next/navigation"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import SolutionsSection from "@/components/solutions-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer, { FooterData } from "@/components/footer"
import LoadingUI from "@/components/loading-ui"
import { client } from "@/sanity/lib/client"
import { homeQuery } from "@/sanity/queries/home"
import { footerQuery } from "@/sanity/queries/footer"
import type { Locale } from "@/lib/i18n"

interface SanityImage {
  asset: {
    _ref: string
    _type: string
  }
  _type: string
}

interface HomeData {
  hero: {
    tagline: string
    heading: {
      text: string
      highlightedText: string
    }
    thumbnailImage: SanityImage
    videoUrl: string
    description: string
    primaryButton: {
      text: string
      link: string
    }
    secondaryButton: {
      text: string
      link: string
    }
    stats: Array<{
      number: string
      label: string
    }>
  }
  services: {
    title: string
    description: string
    services: Array<{
      icon: string
      title: string
      description: string
    }>
  }
  about: {
    tagline: string
    title: string
    description: string
    features: string[]
    primaryButton: {
      text: string
      link: string
    }
  }
  solutions: {
    title: string
    subtitle: string
    solutionsList: Array<{
      id: string
      icon: string
      label: string
      title: string
      description: string
      features: string[]
      image: {
        url: string
      }
      link: string
    }>
  }
  testimonials: {
    title: string
    description: string
    testimonials: Array<{
      quote: string
      name: string
      title: string
    }>
  }
  contact: {
    tagline: string
    title: string
    description: string
    contactInfo: Array<{
      type: string
      title: string
      value: string
      additionalInfo?: string[]
    }>
  }
}

export default function HomePage() {
  const params = useParams()
  const lang = (params.lang as Locale) || "en"

  const [data, setData] = useState<HomeData | null>(null)
  const [footerData, setFooterData] = useState<FooterData | null>(null)
  const [isChangingLanguage, setIsChangingLanguage] = useState(false)
  const [initialLoad, setInitialLoad] = useState(true)

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
    const fetchData = async () => {
      try {
        if (!initialLoad) {
          setIsChangingLanguage(true)
          await new Promise((resolve) => setTimeout(resolve, 400))
        }

        const result = await client.fetch<HomeData>(homeQuery, { language: lang })
        const footerResult = await client.fetch<FooterData>(footerQuery, {
          language: lang,
        })

        setData(result)
        setFooterData(footerResult)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setIsChangingLanguage(false)
        setInitialLoad(false)
      }
    }

    fetchData()
  }, [lang, initialLoad])

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

  if (!data) {
    return null
  }

  return (
    <>
      <LoadingUI isVisible={isChangingLanguage} />

      {!isChangingLanguage && (
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

          {footerData && <Footer data={footerData} />}
        </main>
      )}
    </>
  )
}
