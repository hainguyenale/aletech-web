"use client"

import { useState, useRef, useEffect } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Aletech transformed our business operations with their innovative software solutions. Their team's expertise and dedication exceeded our expectations.",
      author: "Sarah Johnson",
      position: "CTO, Global Enterprises",
      company: "Global Enterprises",
    },
    {
      quote:
        "The cloud migration services provided by Aletech were seamless and efficient. They helped us modernize our infrastructure while minimizing downtime.",
      author: "Michael Chen",
      position: "IT Director",
      company: "TechNova Inc.",
    },
    {
      quote:
        "Working with Aletech on our data analytics project was a game-changer. Their insights helped us make data-driven decisions that boosted our revenue.",
      author: "Emily Rodriguez",
      position: "Head of Analytics",
      company: "DataSmart Solutions",
    },
    {
      quote:
        "Aletech's cybersecurity solutions have given us peace of mind. Their proactive approach to security has protected our sensitive data from threats.",
      author: "David Wilson",
      position: "Security Officer",
      company: "SecureBank Financial",
    },
    {
      quote:
        "The mobile app developed by Aletech has received outstanding feedback from our customers. Their attention to detail and user experience is exceptional.",
      author: "Lisa Thompson",
      position: "Product Manager",
      company: "MobileFirst Apps",
    },
  ]

  const [api, setApi] = useState<CarouselApi>()
  const autoplayInterval = useRef<NodeJS.Timeout | null>(null)

  const startAutoplay = () => {
    if (autoplayInterval.current) {
      clearInterval(autoplayInterval.current)
    }

    autoplayInterval.current = setInterval(() => {
      api?.scrollNext()
    }, 5000) // Change slide every 5 seconds
  }

  useEffect(() => {
    if (!api) return

    startAutoplay()

    return () => {
      if (autoplayInterval.current) {
        clearInterval(autoplayInterval.current)
      }
    }
  }, [api])

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-background/95 to-background">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what our clients have to say about working with Aletech.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          setApi={setApi}
          onMouseEnter={() => {
            if (autoplayInterval.current) {
              clearInterval(autoplayInterval.current)
            }
          }}
          onMouseLeave={() => {
            startAutoplay()
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Card className="bg-card/50 border border-border backdrop-blur-sm hover:border-primary/30 transition-all duration-300 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <Quote className="h-8 w-8 text-primary/60 mb-4" />
                    <p className="text-muted-foreground mb-6 flex-grow">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="static bg-card/50 border border-border hover:bg-primary/20 hover:border-primary/30" />
            <CarouselNext className="static bg-card/50 border border-border hover:bg-primary/20 hover:border-primary/30" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}

