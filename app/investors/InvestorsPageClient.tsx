"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, TrendingUp, BarChart3, PieChart, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import FadeIn from "@/components/animations/fade-in"
import StaggerContainer from "@/components/animations/stagger-container"
import StaggerItem from "@/components/animations/stagger-item"

export default function InvestorsPageClient() {
  const financialReports = [
    {
      title: "Annual Report 2024",
      date: "March 15, 2025",
      fileSize: "5.2 MB",
      type: "PDF",
    },
    {
      title: "Q4 2024 Financial Results",
      date: "February 10, 2025",
      fileSize: "3.8 MB",
      type: "PDF",
    },
    {
      title: "Q3 2024 Financial Results",
      date: "November 12, 2024",
      fileSize: "3.5 MB",
      type: "PDF",
    },
    {
      title: "Q2 2024 Financial Results",
      date: "August 15, 2024",
      fileSize: "3.7 MB",
      type: "PDF",
    },
    {
      title: "Q1 2024 Financial Results",
      date: "May 10, 2024",
      fileSize: "3.4 MB",
      type: "PDF",
    },
    {
      title: "Annual Report 2023",
      date: "March 20, 2024",
      fileSize: "5.0 MB",
      type: "PDF",
    },
  ]

  const upcomingEvents = [
    {
      title: "Q1 2025 Earnings Call",
      date: "May 15, 2025",
      time: "2:00 PM EST",
      location: "Virtual Event",
    },
    {
      title: "Annual Shareholder Meeting",
      date: "June 10, 2025",
      time: "10:00 AM EST",
      location: "Aletech Headquarters, San Francisco",
    },
    {
      title: "Investor Day 2025",
      date: "September 22, 2025",
      time: "9:00 AM - 4:00 PM EST",
      location: "New York City",
    },
  ]

  const boardMembers = [
    {
      name: "Dr. James Wilson",
      position: "Chairman of the Board",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Johnson",
      position: "Chief Executive Officer",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Chen",
      position: "Chief Technology Officer",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Emily Rodriguez",
      position: "Chief Operating Officer",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <PageHeader
        title="Investor Relations"
        description="Information for investors about Aletech's financial performance, governance, and growth strategy."
      />

      {/* Financial Highlights */}
      <section className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block mb-4">
                <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm">
                  <span className="text-primary font-medium">Financial Highlights</span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Strong Performance and Growth</h2>
              <p className="text-muted-foreground text-lg">
                Aletech continues to deliver strong financial results, driven by innovation, operational excellence, and
                strategic expansion.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StaggerItem>
              <motion.div
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
                whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Annual Revenue</h3>
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <motion.div
                  className="text-3xl font-bold mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  $245.8M
                </motion.div>
                <div className="text-sm text-primary">+18.5% YoY</div>
                <motion.div
                  className="mt-4 h-2 w-full bg-muted rounded-full overflow-hidden"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.div
                    className="h-full bg-primary"
                    style={{ width: "75%" }}
                    initial={{ width: 0 }}
                    whileInView={{ width: "75%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  ></motion.div>
                </motion.div>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
                whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">EBITDA</h3>
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <motion.div
                  className="text-3xl font-bold mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  $67.2M
                </motion.div>
                <div className="text-sm text-primary">+22.3% YoY</div>
                <motion.div
                  className="mt-4 h-2 w-full bg-muted rounded-full overflow-hidden"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.div
                    className="h-full bg-primary"
                    style={{ width: "65%" }}
                    initial={{ width: 0 }}
                    whileInView={{ width: "65%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  ></motion.div>
                </motion.div>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
                whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Operating Margin</h3>
                  <PieChart className="h-5 w-5 text-primary" />
                </div>
                <motion.div
                  className="text-3xl font-bold mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  27.3%
                </motion.div>
                <div className="text-sm text-primary">+2.5% YoY</div>
                <motion.div
                  className="mt-4 h-2 w-full bg-muted rounded-full overflow-hidden"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.div
                    className="h-full bg-primary"
                    style={{ width: "85%" }}
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  ></motion.div>
                </motion.div>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
                whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">R&D Investment</h3>
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <motion.div
                  className="text-3xl font-bold mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  $42.3M
                </motion.div>
                <div className="text-sm text-primary">+15.7% YoY</div>
                <motion.div
                  className="mt-4 h-2 w-full bg-muted rounded-full overflow-hidden"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.div
                    className="h-full bg-primary"
                    style={{ width: "70%" }}
                    initial={{ width: 0 }}
                    whileInView={{ width: "70%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  ></motion.div>
                </motion.div>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Financial Reports */}
      <section className="py-20 bg-gradient-to-b from-background to-background/95">
        <div className="container px-4 mx-auto">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block mb-4">
                <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm">
                  <span className="text-primary font-medium">Financial Reports</span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Annual and Quarterly Reports</h2>
              <p className="text-muted-foreground text-lg">
                Access our latest financial reports and presentations for detailed information on our performance and
                outlook.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {financialReports.map((report, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 flex flex-col"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)",
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold mb-1">{report.title}</h3>
                      <p className="text-sm text-muted-foreground">{report.date}</p>
                    </div>
                    <motion.div
                      className="bg-primary/10 p-2 rounded-full"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(48, 200, 201, 0.2)",
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Download className="h-5 w-5 text-primary" />
                    </motion.div>
                  </div>

                  <div className="mt-auto pt-4 flex items-center justify-between text-sm text-muted-foreground">
                    <span>{report.fileSize}</span>
                    <span>{report.type}</span>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="text-center mt-12">
            <FadeIn direction="up" delay={0.5}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  View All Reports
                </Button>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn direction="right" delay={0.2}>
              <div>
                <div className="inline-block mb-4">
                  <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm">
                    <span className="text-primary font-medium">Upcoming Events</span>
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6">Investor Events Calendar</h2>

                <p className="text-muted-foreground mb-8">
                  Join us for upcoming earnings calls, shareholder meetings, and investor conferences to stay informed
                  about Aletech's performance and strategy.
                </p>

                <StaggerContainer className="space-y-6">
                  {upcomingEvents.map((event, index) => (
                    <StaggerItem key={index}>
                      <motion.div
                        className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
                        whileHover={{
                          y: -5,
                          boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)",
                        }}
                      >
                        <div className="flex items-start gap-4">
                          <motion.div
                            className="bg-primary/10 p-3 rounded-xl flex flex-col items-center justify-center min-w-[60px]"
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(48, 200, 201, 0.2)" }}
                          >
                            <Calendar className="h-6 w-6 text-primary mb-1" />
                            <div className="text-xs text-primary font-medium">{event.date.split(" ")[0]}</div>
                          </motion.div>

                          <div>
                            <h3 className="text-lg font-bold mb-1">{event.title}</h3>
                            <p className="text-sm text-muted-foreground mb-2">
                              {event.date} | {event.time}
                            </p>
                            <p className="text-sm text-muted-foreground">{event.location}</p>
                          </div>
                        </div>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                <div className="mt-8">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="bg-primary hover:bg-primary/90 text-white">Add to Calendar</Button>
                  </motion.div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.4}>
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
                <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden">
                  <div className="aspect-video w-full relative">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Investor presentation"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-background/50 to-transparent"></div>
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
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Latest Investor Presentation</h3>
                    <p className="text-muted-foreground mb-4">
                      Watch our CEO's presentation from the Q4 2024 earnings call discussing our financial results and
                      future outlook.
                    </p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-white"
                      >
                        Watch Presentation
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-20 bg-gradient-to-b from-background/95 to-background">
        <div className="container px-4 mx-auto">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block mb-4">
                <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm">
                  <span className="text-primary font-medium">Leadership</span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Board of Directors</h2>
              <p className="text-muted-foreground text-lg">
                Meet the experienced leaders guiding Aletech's strategic direction and governance.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardMembers.map((member, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)",
                  }}
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
                    <p className="text-primary text-sm">{member.position}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="text-center mt-12">
            <FadeIn direction="up" delay={0.5}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-primary hover:bg-primary/90 text-white">View Full Leadership Team</Button>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact IR */}
      <section className="py-20 bg-background">
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
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Investor Relations Contact</h2>
                  <p className="text-muted-foreground mb-6">
                    For investor-related inquiries, please contact our Investor Relations team.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">Email:</p>
                      <p className="text-primary">investors@aletech.com</p>
                    </div>
                    <div>
                      <p className="font-medium">Phone:</p>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                    <div>
                      <p className="font-medium">Address:</p>
                      <p className="text-muted-foreground">123 Tech Avenue, San Francisco, CA 94105</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="bg-primary hover:bg-primary/90 text-white w-full">
                      Subscribe to IR Updates
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-white w-full"
                    >
                      Request Investor Kit
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-white w-full"
                    >
                      Email IR Team
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}

