import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Cloud, Stethoscope, Wallet, ShoppingBag, Brain, Database } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function SolutionsSection() {
  const solutions = [
    {
      id: "saas",
      icon: <Cloud className="h-5 w-5" />,
      label: "SaaS",
      title: "SaaS Solutions",
      description:
        "Expertise in building scalable, multi-tenant SaaS platforms with robust architecture and seamless deployment capabilities.",
      features: [
        "Scalable microservices architecture",
        "Multi-region deployment support",
        "Zero-downtime migration strategies",
        "Automated provisioning systems",
        "Regulatory compliance frameworks",
        "Usage-based billing integration",
      ],
      image: "images/saas-solution.png",
    },
    {
      id: "healthcare",
      icon: <Stethoscope className="h-5 w-5" />,
      label: "Healthcare",
      title: "Healthcare Technology",
      description:
        "Advanced healthcare solutions leveraging AI and automation to enhance patient care and streamline medical processes.",
      features: [
        "AI-powered medical systems",
        "HIPAA-compliant architectures",
        "Patient data security",
        "Clinical workflow automation",
        "Medical documentation systems",
        "Healthcare API integrations",
      ],
      image: "images/healthcare-solution.png",
    },
    {
      id: "fintech",
      icon: <Wallet className="h-5 w-5" />,
      label: "Fintech",
      title: "Financial Technology",
      description:
        "Innovative fintech solutions combining blockchain technology, secure payment systems, and advanced financial services.",
      features: [
        "Blockchain implementation",
        "Secure payment processing",
        "Digital wallet systems",
        "Financial data analytics",
        "Regulatory compliance",
        "Cross-border transactions",
      ],
      image: "images/fintech-solution.png",
    },
    {
      id: "ecommerce",
      icon: <ShoppingBag className="h-5 w-5" />,
      label: "E-commerce",
      title: "E-commerce Solutions",
      description:
        "Comprehensive e-commerce solutions with high-volume processing capabilities and intelligent business analytics.",
      features: [
        "High-volume order processing",
        "Inventory management systems",
        "Multi-channel integration",
        "Real-time analytics",
        "Supply chain optimization",
        "Customer behavior analysis",
      ],
      image: "images/ecommerce-solution.png",
    },
    {
      id: "ai",
      icon: <Brain className="h-5 w-5" />,
      label: "AI",
      title: "Artificial Intelligence",
      description:
        "Cutting-edge AI solutions utilizing advanced machine learning, natural language processing, and intelligent automation.",
      features: [
        "Machine Learning models",
        "Natural Language Processing",
        "Computer Vision systems",
        "Predictive analytics",
        "AI-powered automation",
        "Custom AI model training",
      ],
      image: "images/ai-solution.png",
    },
    {
      id: "database",
      icon: <Database className="h-5 w-5" />,
      label: "Database",
      title: "Database Solutions",
      description:
        "Advanced database solutions with intelligent querying, data processing, and enterprise-grade security features.",
      features: [
        "Intelligent query systems",
        "Big Data processing",
        "Data warehousing",
        "Database optimization",
        "Data security & compliance",
        "Real-time data analytics",
      ],
      image: "images/database-solution.png",
    },
  ]

  return (
    <section id="solutions" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Our Solutions</h2>
          <div className="h-1 w-16 sm:w-20 bg-primary mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-muted-foreground">
            Leveraging cutting-edge technology to deliver comprehensive solutions across multiple industries.
          </p>
        </div>

        <Tabs defaultValue="saas" className="w-full">
          <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 bg-card/50 mb-6 sm:mb-8 h-auto">
            {solutions.map((solution) => (
              <TabsTrigger
                key={solution.id}
                value={solution.id}
                className="flex flex-col items-center gap-1.5 py-3 px-2 data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
              >
                <div className="flex flex-col items-center gap-1">
                  {solution.icon}
                  <span className="text-sm truncate">{solution.label}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {solutions.map((solution) => (
            <TabsContent key={solution.id} value={solution.id}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start lg:items-center"
                >
                  <div className="space-y-4 sm:space-y-6">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">{solution.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{solution.description}</p>

                    <div className="grid grid-cols-1 gap-2 sm:gap-3">
                      {solution.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center space-x-2"
                        >
                          <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></div>
                          <span className="text-sm sm:text-base text-muted-foreground">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <Link href={`/solutions/${solution.id}`}>
                      <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white mt-4">
                        Explore Solutions
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="relative mt-6 lg:mt-0"
                  >
                    <div className="absolute -inset-4 bg-primary/10 rounded-xl filter blur-lg opacity-70"></div>
                    <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden">
                      <Image
                        src={solution.image || "/placeholder.svg"}
                        alt={solution.title}
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-background/50 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                        <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs">
                          <span className="text-primary font-medium">{solution.label} Solutions</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

