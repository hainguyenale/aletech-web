"use client"

import Navbar from "@/components/navbar"
import Footer, { FooterData } from "@/components/footer"
import PageHeader from "@/components/page-header"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, User } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import FadeIn from "@/components/animations/fade-in"
import StaggerContainer from "@/components/animations/stagger-container"
import StaggerItem from "@/components/animations/stagger-item"
import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import { client } from "@/sanity/lib/client"
import { footerQuery } from "@/sanity/queries/footer"

export default function NewsPageClient() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [footerData, setFooterData] = useState<FooterData | null>(null)
  const { language } = useLanguage()

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const footerResult = await client.fetch<FooterData>(footerQuery, { language })
        setFooterData(footerResult)
      } catch (error) {
        console.error('Error fetching footer data:', error)
      }
    }

    fetchFooterData()
  }, [language])

  const featuredNews = {
    id: "ai-partnership",
    title: "Aletech Announces Strategic Partnership with Leading AI Research Institute",
    date: "April 1, 2025",
    author: "Sarah Johnson",
    category: "Company News",
    image: "/placeholder.svg?height=600&width=1200",
    excerpt:
      "Aletech is proud to announce a groundbreaking partnership with the Global AI Research Institute to develop next-generation artificial intelligence solutions for enterprise applications.",
  }

  const newsItems = [
    {
      id: "new-office",
      title: "Aletech Opens New Office in Singapore to Expand APAC Presence",
      date: "March 15, 2025",
      author: "Michael Chen",
      category: "Company News",
      image: "/placeholder.svg?height=400&width=600",
      excerpt:
        "As part of our global expansion strategy, Aletech has opened a new office in Singapore to better serve clients in the Asia-Pacific region.",
    },
    {
      id: "tech-award",
      title: "Aletech Wins Technology Innovation Award for Healthcare Platform",
      date: "February 28, 2025",
      author: "Emily Rodriguez",
      category: "Awards",
      image: "/placeholder.svg?height=400&width=600",
      excerpt:
        "Our healthcare management platform has been recognized with the prestigious Technology Innovation Award at the Global Health Tech Summit.",
    },
    {
      id: "blockchain",
      title: "Aletech Launches New Blockchain Solution for Supply Chain Transparency",
      date: "February 10, 2025",
      author: "David Wilson",
      category: "Product Launch",
      image: "/placeholder.svg?height=400&width=600",
      excerpt:
        "Our new blockchain-based solution provides end-to-end visibility and traceability for complex global supply chains.",
    },
    {
      id: "sustainability",
      title: "Aletech Commits to Carbon Neutrality by 2027",
      date: "January 22, 2025",
      author: "Lisa Thompson",
      category: "Sustainability",
      image: "/placeholder.svg?height=400&width=600",
      excerpt:
        "As part of our commitment to environmental sustainability, Aletech has announced plans to achieve carbon neutrality across all operations by 2027.",
    },
    {
      id: "webinar",
      title: "Upcoming Webinar: The Future of Edge Computing in Enterprise Applications",
      date: "January 15, 2025",
      author: "Robert Garcia",
      category: "Events",
      image: "/placeholder.svg?height=400&width=600",
      excerpt:
        "Join our CTO and industry experts for an insightful discussion on how edge computing is transforming enterprise applications.",
    },
    {
      id: "talent",
      title: "Aletech Named Among Top 10 Tech Companies to Work For",
      date: "December 12, 2024",
      author: "Jennifer Lee",
      category: "Recognition",
      image: "/placeholder.svg?height=400&width=600",
      excerpt:
        "We're proud to be recognized as one of the top employers in the technology sector, highlighting our commitment to fostering talent and innovation.",
    },
  ]

  const categories = ["All", "Company News", "Product Launch", "Awards", "Events", "Sustainability", "Recognition"]

  const filteredNews =
    activeCategory === "All" ? newsItems : newsItems.filter((item) => item.category === activeCategory)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <PageHeader
        title="News & Insights"
        description="Stay updated with the latest news, announcements, and insights from Aletech."
      />

      {/* Filter Categories */}
      <section className="py-8 bg-background/90 border-b border-border">
        <div className="container px-4 mx-auto overflow-x-auto">
          <motion.div
            className="flex space-x-4 min-w-max"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-12 bg-background">
        <div className="container px-4 mx-auto">
          <FadeIn>
            <Link href={`/news/${featuredNews.id}`} className="group">
              <motion.div
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.3)",
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="relative">
                    <Image
                      src={featuredNews.image || "/placeholder.svg"}
                      alt={featuredNews.title}
                      width={1200}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                    <motion.div
                      className="absolute top-4 left-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs">
                        <span className="text-primary font-medium">{featuredNews.category}</span>
                      </div>
                    </motion.div>
                  </div>

                  <div className="p-8 flex flex-col justify-center">
                    <motion.h2
                      className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {featuredNews.title}
                    </motion.h2>

                    <motion.div
                      className="flex items-center space-x-4 text-sm text-muted-foreground mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {featuredNews.date}
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {featuredNews.author}
                      </div>
                    </motion.div>

                    <motion.p
                      className="text-muted-foreground mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      {featuredNews.excerpt}
                    </motion.p>

                    <motion.div className="flex items-center text-primary text-sm font-medium" whileHover={{ x: 5 }}>
                      Read More
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
                </div>
              </motion.div>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((news) => (
              <StaggerItem key={news.id}>
                <Link href={`/news/${news.id}`} className="group block h-full">
                  <motion.div
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 h-full flex flex-col"
                    whileHover={{
                      y: -10,
                      boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.3)",
                    }}
                  >
                    <div className="relative">
                      <Image
                        src={news.image || "/placeholder.svg"}
                        alt={news.title}
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                      <motion.div
                        className="absolute top-4 left-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs">
                          <span className="text-primary font-medium">{news.category}</span>
                        </div>
                      </motion.div>
                    </div>

                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {news.title}
                      </h3>

                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {news.date}
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {news.author}
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 flex-grow">{news.excerpt}</p>

                      <motion.div className="flex items-center text-primary text-sm font-medium" whileHover={{ x: 5 }}>
                        Read More
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
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="flex justify-center mt-12">
            <FadeIn direction="up" delay={0.5}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Load More News
                </Button>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-b from-background to-background/95">
        <div className="container px-4 mx-auto">
          <FadeIn>
            <motion.div
              className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12"
              whileHover={{
                boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)",
                borderColor: "rgba(48, 200, 201, 0.3)",
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                  <p className="text-muted-foreground mb-6">
                    Stay updated with the latest news, insights, and announcements from Aletech delivered directly to
                    your inbox.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.input
                    type="email"
                    placeholder="Enter your email"
                    className="flex h-10 w-full rounded-md border border-border bg-card/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    whileFocus={{ borderColor: "rgba(48, 200, 201, 0.5)" }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Button className="bg-primary hover:bg-primary/90 text-white whitespace-nowrap">Subscribe</Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {footerData && <Footer data={footerData} />}
    </main>
  )
}

