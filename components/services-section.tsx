"use client"

import { Icon } from "@/components/ui/icon"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

interface ServicesData {
  title: string
  description: string
  services: Array<{
    icon: string
    title: string
    description: string
  }>
}

interface ServicesSectionProps {
  data: ServicesData
}

export default function ServicesSection({ data }: ServicesSectionProps) {
  if (!data) return null

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">{data.title}</h2>
          <div className="h-1 w-16 sm:w-20 bg-primary mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-muted-foreground px-4 sm:px-0">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {data.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)" }}
                className="h-full"
              >
                <Card className="bg-card/50 border border-border backdrop-blur-sm hover:border-primary/50 transition-all duration-300 h-full">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="mb-3 sm:mb-4">
                      <Icon name={service.icon} className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                    <CardDescription className="text-sm sm:text-base text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

