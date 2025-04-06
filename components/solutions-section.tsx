import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, ShoppingBag, Stethoscope, GraduationCap, Landmark, Factory } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SolutionsSection() {
  const industries = [
    {
      id: "enterprise",
      icon: <Building2 className="h-5 w-5" />,
      label: "Enterprise",
      title: "Enterprise Solutions",
      description:
        "Comprehensive technology solutions designed to optimize operations, enhance productivity, and drive growth for large enterprises.",
      features: [
        "Enterprise Resource Planning (ERP)",
        "Customer Relationship Management (CRM)",
        "Business Intelligence & Analytics",
        "Digital Transformation Consulting",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "retail",
      icon: <ShoppingBag className="h-5 w-5" />,
      label: "Retail",
      title: "Retail & E-commerce",
      description:
        "Innovative digital solutions that help retailers create seamless shopping experiences across all channels.",
      features: [
        "E-commerce Platforms",
        "Inventory Management Systems",
        "Point of Sale (POS) Solutions",
        "Customer Loyalty Programs",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "healthcare",
      icon: <Stethoscope className="h-5 w-5" />,
      label: "Healthcare",
      title: "Healthcare Technology",
      description:
        "Secure and compliant technology solutions that improve patient care and streamline healthcare operations.",
      features: [
        "Electronic Health Records (EHR)",
        "Telemedicine Platforms",
        "Healthcare Analytics",
        "Medical Device Integration",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "education",
      icon: <GraduationCap className="h-5 w-5" />,
      label: "Education",
      title: "Education Technology",
      description:
        "Digital learning solutions that enhance educational experiences and outcomes for students and educators.",
      features: [
        "Learning Management Systems",
        "Virtual Classrooms",
        "Educational Content Development",
        "Student Information Systems",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "finance",
      icon: <Landmark className="h-5 w-5" />,
      label: "Finance",
      title: "Financial Services",
      description:
        "Secure and innovative technology solutions for banks, insurance companies, and financial institutions.",
      features: [
        "Digital Banking Platforms",
        "Payment Processing Systems",
        "Fraud Detection & Prevention",
        "Regulatory Compliance Solutions",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "manufacturing",
      icon: <Factory className="h-5 w-5" />,
      label: "Manufacturing",
      title: "Manufacturing Solutions",
      description:
        "Technology solutions that optimize production processes and supply chain management for manufacturers.",
      features: [
        "Industrial IoT Solutions",
        "Supply Chain Management",
        "Production Planning & Scheduling",
        "Quality Control Systems",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section id="solutions" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Solutions</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg">
            We deliver specialized technology solutions tailored to the unique needs of various industries.
          </p>
        </div>

        <Tabs defaultValue="enterprise" className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 bg-card/50 border border-border mb-8">
            {industries.map((industry) => (
              <TabsTrigger
                key={industry.id}
                value={industry.id}
                className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
              >
                <div className="flex flex-col items-center gap-1">
                  {industry.icon}
                  <span>{industry.label}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {industries.map((industry) => (
            <TabsContent key={industry.id} value={industry.id}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold">{industry.title}</h3>
                  <p className="text-muted-foreground">{industry.description}</p>

                  <div className="space-y-3">
                    {industry.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className="relative">
                  <div className="absolute -inset-4 bg-primary/10 rounded-xl filter blur-xl opacity-70"></div>
                  <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden">
                    <Image
                      src={industry.image || "/placeholder.svg"}
                      alt={industry.title}
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-background/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs">
                        <span className="text-primary font-medium">{industry.label} Solution</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

