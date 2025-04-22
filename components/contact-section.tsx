"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

interface ContactData {
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

interface ContactSectionProps {
  data: ContactData
}

export default function ContactSection({ data }: ContactSectionProps) {
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

  if (!data) return null

  const iconMap = {
    email: Mail,
    phone: Phone,
    address: MapPin,
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="inline-block mb-6">
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm">
                <span className="text-primary font-medium">{data.tagline}</span>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">{data.title}</h2>

            <p className="text-muted-foreground mb-8 max-w-lg">
              {data.description}
            </p>

            <div className="space-y-6">
              {data.contactInfo.map((info, index) => {
                const Icon = iconMap[info.type as keyof typeof iconMap]
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                      <p className="text-muted-foreground">{info.value}</p>
                      {info.additionalInfo?.map((line, i) => (
                        <p key={i} className="text-muted-foreground">{line}</p>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-xl filter blur-xl opacity-50"></div>
            <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <CheckCircle className="h-12 w-12 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground">Thank you for contacting us. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-card/50 border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-card/50 border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <Input
                        name="phone"
                        placeholder="Your Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-card/50 border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="bg-card/50 border-border focus:border-primary min-h-[120px]"
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

