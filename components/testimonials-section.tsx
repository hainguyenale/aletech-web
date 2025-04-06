"use client"

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-card"

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Aletech's problem-solving expertise and deep diagnostic capabilities helped us transform our legacy parking management system into a scalable microservices architecture.",
      name: "UK Parking Control",
      title: "Parking Management, UK Market",
    },
    {
      quote:
        "Their AI-powered dynamic consent generation platform revolutionized our healthcare documentation process, making it fast and compliant for our patients.",
      name: "Flynotes",
      title: "Healthcare Tech, Digital Consent Platform",
    },
    {
      quote:
        "The POD System's ability to handle 10k-20k orders daily with AI-driven analytics has significantly improved our e-commerce operations and customer satisfaction.",
      name: "POD System",
      title: "E-commerce & Printing, Print on Demand",
    },
    {
      quote:
        "Mina Chatbot's RAG & LLM integration has transformed our knowledge management, making it easier to process and access unstructured documents.",
      name: "Mina Chatbot",
      title: "AI & ERP, Knowledge Management",
    },
    {
      quote:
        "Lina text2SQL's natural language querying capabilities have empowered our non-technical team to access and analyze data without writing complex SQL.",
      name: "Lina text2SQL",
      title: "AI & ERP, Database Querying",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-background/95 to-background overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Our Success Stories</h2>
          <div className="h-1 w-16 sm:w-20 bg-primary mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-muted-foreground">
            Discover how our innovative solutions have helped clients solve complex business challenges.
          </p>
        </div>

        <div className="relative">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
            className="py-4"
          />
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background to-transparent" />
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  )
}

