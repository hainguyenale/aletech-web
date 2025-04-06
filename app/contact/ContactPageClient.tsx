"use client"

import type React from "react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import { MapPin, Mail, Phone, Clock, Globe, Send, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import FadeIn from "@/components/animations/fade-in"
import StaggerContainer from "@/components/animations/stagger-container"
import StaggerItem from "@/components/animations/stagger-item"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ContactPageClient() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    })

    // Reset submission status after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  const offices = [
    {
      city: "Buon Ma Thuot",
      country: "Vietnam",
      address: "Eco City Premia, Km7, Tan An ward, Buon Ma Thuot city, Dak Lak province, Vietnam",
      phone: "(+84) 947058209",
      email: "ale.contact@aletech.co",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM ICT",
    },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <PageHeader
        title="Contact Us"
        description="Get in touch with our team to discuss how Aletech can help with your technology needs."
      />

      {/* Contact Form Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn direction="right" delay={0.2}>
              <div>
                <div className="inline-block mb-6">
                  <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm">
                    <span className="text-primary font-medium">Get In Touch</span>
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>

                <p className="text-muted-foreground mb-8 max-w-lg">
                  Contact us today to discuss how Aletech can help solve your complex business challenges with our problem-centered approach and innovative technology solutions.
                </p>

                <div className="space-y-6">
                  <motion.div className="flex items-start space-x-4 group" whileHover={{ x: 5 }}>
                    <div className="bg-primary/10 p-3 rounded-full transition-all duration-300 group-hover:bg-primary/20">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                        Email Us
                      </h3>
                      <p className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                        ale.contact@aletech.co
                      </p>
                    </div>
                  </motion.div>

                  <motion.div className="flex items-start space-x-4 group" whileHover={{ x: 5 }}>
                    <div className="bg-primary/10 p-3 rounded-full transition-all duration-300 group-hover:bg-primary/20">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                        Call Us
                      </h3>
                      <p className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                        (+84) 947058209
                      </p>
                    </div>
                  </motion.div>

                  <motion.div className="flex items-start space-x-4 group" whileHover={{ x: 5 }}>
                    <div className="bg-primary/10 p-3 rounded-full transition-all duration-300 group-hover:bg-primary/20">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                        Visit Us
                      </h3>
                      <p className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                        Eco City Premia, Km7, Tan An ward
                      </p>
                      <p className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                        Buon Ma Thuot city, Dak Lak province, Vietnam
                      </p>
                    </div>
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
                <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 md:p-8 transition-all duration-300 hover:border-primary/30">
                  <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>

                  {isSubmitted ? (
                    <motion.div
                      className="flex flex-col items-center justify-center py-12 text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        className="bg-primary/10 p-4 rounded-full mb-4"
                        animate={{
                          y: [0, -10, 0],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "loop",
                        }}
                      >
                        <CheckCircle className="h-12 w-12 text-primary" />
                      </motion.div>
                      <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                      <p className="text-muted-foreground">
                        Thank you for contacting us. We'll get back to you shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-4">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Input
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="bg-card/50 border-border focus:border-primary transition-all duration-300 focus:ring-primary"
                          />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <Input
                            name="email"
                            type="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="bg-card/50 border-border focus:border-primary transition-all duration-300 focus:ring-primary"
                          />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
                          <Input
                            name="phone"
                            placeholder="Your Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="bg-card/50 border-border focus:border-primary transition-all duration-300 focus:ring-primary"
                          />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                        >
                          <Textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="bg-card/50 border-border focus:border-primary transition-all duration-300 focus:ring-primary min-h-[120px]"
                          />
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300"
                        >
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </Button>
                      </motion.div>
                    </form>
                  )}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20 bg-gradient-to-b from-background to-background/95">
        <div className="container px-4 mx-auto">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block mb-4">
                <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm">
                  <span className="text-primary font-medium">Global Presence</span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Offices Around the World</h2>
              <p className="text-muted-foreground text-lg">
                With offices in key technology hubs globally, we're positioned to serve clients wherever they are.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
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
                      className="bg-primary/10 p-3 rounded-full"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(48, 200, 201, 0.2)" }}
                      transition={{ duration: 0.3 }}
                    >
                      <MapPin className="h-6 w-6 text-primary" />
                    </motion.div>

                    <div>
                      <h3 className="text-xl font-bold mb-1">
                        {office.city}, {office.country}
                      </h3>
                      <p className="text-muted-foreground mb-4">{office.address}</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-start gap-2 group">
                          <Phone className="h-4 w-4 text-primary mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                          <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                            {office.phone}
                          </p>
                        </div>
                        <div className="flex items-start gap-2 group">
                          <Mail className="h-4 w-4 text-primary mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                          <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                            {office.email}
                          </p>
                        </div>
                        <div className="flex items-start gap-2 group">
                          <Clock className="h-4 w-4 text-primary mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                          <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                            {office.hours}
                          </p>
                        </div>
                        <div className="flex items-start gap-2 group">
                          <Globe className="h-4 w-4 text-primary mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                          <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                            Local Time Zone
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Footer />
    </main>
  )
}

