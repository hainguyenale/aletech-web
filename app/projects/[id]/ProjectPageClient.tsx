"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { usePageAnimations } from "@/hooks/use-page-animations"

// Project data type definition
interface Project {
  id: string
  title: string
  category: string
  client: string
  image: string
  description: string
  tags: string[]
  longDescription?: string
  challenges?: string[]
  solutions?: string[]
  technologies?: string[]
  results?: string[]
  githubUrl?: string
  liveUrl?: string
  timeline?: string
  teamSize?: string
  keyFeatures?: string[]
  architecture?: string
  metrics?: {
    label: string
    value: string
    description: string
  }[]
  caseStudy?: string
}

// Project data
const projectsData: { [key: string]: Project } = {
  "uk-parking-control": {
    id: "uk-parking-control",
    title: "UK Parking Control (UKPC)",
    category: "Parking Management",
    client: "UK Parking Management Company",
    image: "/images/ukpc-project.png",
    description: "Re-architected legacy systems into scalable microservices supporting up to 5 million requests/day with zero-downtime migration and improved performance.",
    tags: ["Microservices", "Scalability", "Legacy Migration", "High Performance"],
    longDescription: "UK Parking Control (UKPC) is a comprehensive parking management system that handles parking enforcement, payment processing, and violation management across the UK. The project involved modernizing legacy systems while ensuring zero downtime and maintaining high performance under heavy load.",
    timeline: "18 months",
    teamSize: "12 team members",
    keyFeatures: [
      "Real-time parking violation detection",
      "Automated payment processing",
      "Mobile enforcement officer app",
      "Advanced analytics dashboard",
      "Multi-channel communication system",
      "Automated dispute resolution"
    ],
    architecture: "The system follows a microservices architecture with event-driven communication between services. Key components include:\n\n- API Gateway for request routing\n- Authentication Service for user management\n- Payment Service for transaction processing\n- Enforcement Service for violation management\n- Analytics Service for data processing\n- Notification Service for multi-channel communication",
    challenges: [
      "Legacy system limitations and technical debt",
      "High system load with 5M+ daily requests",
      "Complex business rules and compliance requirements",
      "Need for zero-downtime migration"
    ],
    solutions: [
      "Microservices architecture for better scalability",
      "Event-driven design for real-time processing",
      "Automated testing and CI/CD pipeline",
      "Gradual migration strategy with feature flags"
    ],
    technologies: [
      "Node.js", "React", "PostgreSQL", "Redis",
      "Docker", "Kubernetes", "AWS", "Terraform"
    ],
    results: [
      "50% reduction in system response time",
      "99.99% system uptime",
      "Successful migration of 1M+ records",
      "Improved scalability and maintainability"
    ],
    metrics: [
      {
        label: "Response Time",
        value: "50% Reduction",
        description: "Average API response time decreased from 800ms to 400ms"
      },
      {
        label: "System Uptime",
        value: "99.99%",
        description: "Achieved through robust architecture and failover systems"
      },
      {
        label: "Processing Capacity",
        value: "5M+ Requests/Day",
        description: "System handles peak loads without performance degradation"
      },
      {
        label: "Migration Success",
        value: "100%",
        description: "All data and functionality successfully migrated with zero downtime"
      }
    ],
    caseStudy: "UK Parking Control faced significant challenges with their legacy system, including performance issues, scalability limitations, and high maintenance costs. Aletech implemented a comprehensive modernization strategy that included:\n\n1. Detailed system analysis and architecture planning\n2. Gradual migration approach with feature flags\n3. Implementation of microservices architecture\n4. Development of automated testing and CI/CD pipelines\n5. Performance optimization and monitoring\n\nThe result was a highly scalable, maintainable system that met all performance requirements while ensuring zero downtime during migration.",
  },
  "saas-parking-control": {
    id: "saas-parking-control",
    title: "SaaS Parking Control",
    category: "Parking Management",
    client: "Multi-Region Parking Provider",
    image: "/images/saas-parking-control-project.png",
    description: "SaaS-ready infrastructure for cross-border scalability with automated provisioning and flexibility for regulatory compliance.",
    tags: ["SaaS", "Multi-Region", "Automation", "Compliance"],
    longDescription: "A cloud-native SaaS platform for parking management that supports multiple regions and regulatory requirements. The system provides automated provisioning, real-time monitoring, and compliance management capabilities.",
    timeline: "24 months",
    teamSize: "15 team members",
    keyFeatures: [
      "Multi-tenant architecture",
      "Region-specific compliance modules",
      "Automated deployment pipelines",
      "Real-time analytics dashboard",
      "Customizable workflow engine",
      "API-first integration approach"
    ],
    architecture: "The SaaS platform follows a multi-tenant architecture with region-specific deployments. Key components include:\n\n- Tenant Management Service\n- Region Configuration Service\n- Compliance Engine\n- Analytics Service\n- Workflow Engine\n- Integration Gateway",
    challenges: [
      "Multi-region deployment complexity",
      "Varying regulatory requirements",
      "Data sovereignty concerns",
      "Scalability across different markets"
    ],
    solutions: [
      "Multi-tenant architecture",
      "Region-specific compliance modules",
      "Automated deployment pipelines",
      "Data localization strategies"
    ],
    technologies: [
      "TypeScript", "Next.js", "GraphQL", "MongoDB",
      "AWS", "Docker", "Kubernetes", "GitLab CI"
    ],
    results: [
      "Successful deployment in 5+ regions",
      "90% reduction in deployment time",
      "100% regulatory compliance",
      "Improved customer satisfaction"
    ],
    metrics: [
      {
        label: "Deployment Time",
        value: "90% Reduction",
        description: "New region deployment time reduced from weeks to days"
      },
      {
        label: "Regulatory Compliance",
        value: "100%",
        description: "All regions meet local regulatory requirements"
      },
      {
        label: "Customer Satisfaction",
        value: "95%",
        description: "Based on post-implementation surveys"
      },
      {
        label: "System Availability",
        value: "99.95%",
        description: "Across all regional deployments"
      }
    ],
    caseStudy: "The Multi-Region Parking Provider needed a scalable solution that could adapt to different regulatory environments while maintaining a consistent user experience. Aletech developed a SaaS platform with:\n\n1. Multi-tenant architecture for efficient resource utilization\n2. Region-specific compliance modules\n3. Automated deployment pipelines for rapid expansion\n4. Data localization strategies to meet sovereignty requirements\n\nThe platform now successfully serves customers across five regions with plans for further expansion.",
  },
  "flynotes": {
    id: "flynotes",
    title: "Flynotes",
    category: "Healthcare Tech",
    client: "Healthcare Provider",
    image: "/images/flynotes-project.png",
    description: "AI-powered dynamic consent generation platform providing fast, compliant, minimal-input process for patients.",
    tags: ["AI", "Healthcare", "Consent Management", "Compliance"],
    longDescription: "Flynotes is an AI-powered healthcare consent management platform that streamlines the process of generating and managing patient consent forms. The system uses natural language processing to create customized consent documents while ensuring compliance with healthcare regulations.",
    timeline: "12 months",
    teamSize: "8 team members",
    keyFeatures: [
      "AI-powered consent generation",
      "Multi-language support",
      "Electronic signature integration",
      "Audit trail and compliance reporting",
      "Patient portal integration",
      "Mobile-responsive design"
    ],
    architecture: "Flynotes follows a modern cloud architecture with AI components. Key elements include:\n\n- AI Consent Generation Engine\n- Document Management Service\n- Authentication Service\n- Compliance Engine\n- Integration Service\n- Analytics Dashboard",
    challenges: [
      "Complex healthcare regulations",
      "Need for accurate consent generation",
      "Integration with existing systems",
      "Patient data security"
    ],
    solutions: [
      "AI-powered consent generation",
      "Secure data handling",
      "API-first architecture",
      "Compliance automation"
    ],
    technologies: [
      "Python", "TensorFlow", "React", "Node.js",
      "PostgreSQL", "AWS", "HIPAA Compliance"
    ],
    results: [
      "80% reduction in consent generation time",
      "99.9% accuracy in consent documents",
      "Successful HIPAA compliance",
      "Improved patient experience"
    ],
    metrics: [
      {
        label: "Time Savings",
        value: "80% Reduction",
        description: "Consent form generation time reduced from 15 minutes to 3 minutes"
      },
      {
        label: "Accuracy",
        value: "99.9%",
        description: "Accuracy rate for generated consent documents"
      },
      {
        label: "Patient Satisfaction",
        value: "92%",
        description: "Based on post-implementation surveys"
      },
      {
        label: "Compliance Rate",
        value: "100%",
        description: "All generated documents meet regulatory requirements"
      }
    ],
    caseStudy: "The healthcare provider faced challenges with manual consent form generation, including errors, delays, and compliance issues. Aletech developed Flynotes with:\n\n1. AI-powered consent generation using natural language processing\n2. Secure data handling with HIPAA compliance\n3. Integration with existing healthcare systems\n4. Automated compliance checking\n\nThe system now handles thousands of consent forms daily with minimal human intervention while maintaining regulatory compliance.",
  },
  "beetoken": {
    id: "beetoken",
    title: "BeeToken",
    category: "Fintech & Blockchain",
    client: "Financial Services Company",
    image: "/images/beetoken-project.png",
    description: "NFT-based voucher system for gifting with blockchain-enabled secure platform and intuitive UI.",
    tags: ["NFT", "Blockchain", "Fintech", "Digital Currency"],
    longDescription: "BeeToken is a blockchain-based platform that enables the creation and management of digital gift vouchers using NFTs. The system provides a secure and user-friendly way to create, transfer, and redeem digital vouchers.",
    timeline: "9 months",
    teamSize: "10 team members",
    keyFeatures: [
      "NFT-based voucher creation",
      "Secure wallet integration",
      "Multi-chain support",
      "User-friendly mobile interface",
      "Analytics dashboard",
      "API for merchant integration"
    ],
    architecture: "BeeToken follows a hybrid architecture combining blockchain and traditional web technologies. Key components include:\n\n- Smart Contract Layer\n- Blockchain Integration Service\n- Wallet Management Service\n- User Interface Layer\n- Analytics Service\n- Merchant Integration API",
    challenges: [
      "Blockchain scalability",
      "User experience complexity",
      "Security requirements",
      "Integration with traditional systems"
    ],
    solutions: [
      "Layer 2 scaling solutions",
      "Intuitive mobile interface",
      "Multi-signature security",
      "Hybrid architecture"
    ],
    technologies: [
      "Solidity", "React Native", "Node.js",
      "Ethereum", "Polygon", "Web3.js"
    ],
    results: [
      "10x faster transaction processing",
      "100% secure voucher transfers",
      "50k+ active users",
      "Successful market adoption"
    ],
    metrics: [
      {
        label: "Transaction Speed",
        value: "10x Faster",
        description: "Compared to traditional blockchain transactions"
      },
      {
        label: "Security",
        value: "100%",
        description: "No security incidents since launch"
      },
      {
        label: "User Adoption",
        value: "50k+",
        description: "Active users within first 6 months"
      },
      {
        label: "Merchant Integration",
        value: "100+",
        description: "Merchants integrated with the platform"
      }
    ],
    caseStudy: "The financial services company needed a modern solution for digital gift vouchers that combined security, transparency, and user-friendliness. Aletech developed BeeToken with:\n\n1. NFT-based voucher system for security and transparency\n2. Layer 2 scaling solutions for performance\n3. Intuitive mobile interface for user adoption\n4. Comprehensive merchant integration API\n\nThe platform now successfully processes thousands of transactions daily with plans for expansion to additional blockchain networks.",
  },
  "pod-system": {
    id: "pod-system",
    title: "POD System",
    category: "E-commerce & Printing",
    client: "Print on Demand Company",
    image: "/images/pod-system-project.png",
    description: "Handles 10k–20k orders/day with AI-driven analytics, integrating e-commerce channels and printing workflows.",
    tags: ["AI", "E-commerce", "Print on Demand", "Analytics"],
    longDescription: "The POD (Print on Demand) System is an integrated platform that manages the entire print-on-demand workflow, from order processing to production and shipping. The system uses AI to optimize production schedules and predict demand.",
    timeline: "15 months",
    teamSize: "12 team members",
    keyFeatures: [
      "AI-powered production optimization",
      "Multi-channel order management",
      "Real-time inventory tracking",
      "Automated workflow management",
      "Analytics dashboard",
      "Integration with major e-commerce platforms"
    ],
    architecture: "The POD System follows a microservices architecture with AI components. Key elements include:\n\n- Order Management Service\n- Production Optimization Engine\n- Inventory Management Service\n- Shipping Integration Service\n- Analytics Service\n- E-commerce Integration Layer",
    challenges: [
      "High order volume",
      "Complex production scheduling",
      "Multiple sales channels",
      "Inventory management"
    ],
    solutions: [
      "AI-powered production optimization",
      "Multi-channel integration",
      "Real-time inventory tracking",
      "Automated workflow management"
    ],
    technologies: [
      "Python", "React", "Node.js", "PostgreSQL",
      "TensorFlow", "Docker", "Kubernetes"
    ],
    results: [
      "30% increase in production efficiency",
      "99.9% order accuracy",
      "50% reduction in processing time",
      "Improved customer satisfaction"
    ],
    metrics: [
      {
        label: "Production Efficiency",
        value: "30% Increase",
        description: "Through AI-powered optimization"
      },
      {
        label: "Order Accuracy",
        value: "99.9%",
        description: "Accuracy rate for processed orders"
      },
      {
        label: "Processing Time",
        value: "50% Reduction",
        description: "From order receipt to shipping"
      },
      {
        label: "Customer Satisfaction",
        value: "95%",
        description: "Based on post-purchase surveys"
      }
    ],
    caseStudy: "The Print on Demand Company faced challenges with manual order processing, production scheduling, and inventory management. Aletech developed the POD System with:\n\n1. AI-powered production optimization\n2. Multi-channel order management\n3. Real-time inventory tracking\n4. Automated workflow management\n\nThe system now successfully processes 10,000-20,000 orders daily with improved efficiency and accuracy.",
  },
  "mina-chatbot": {
    id: "mina-chatbot",
    title: "Mina Chatbot",
    category: "AI & ERP",
    client: "Enterprise Client",
    image: "/images/mina-project.png",
    description: "Knowledge management system using RAG & LLM that understands and processes unstructured documents with chat/voice interface and secure, on-premise deployment.",
    tags: ["RAG", "LLM", "Knowledge Management", "Chatbot"],
    longDescription: "Mina is an enterprise-grade chatbot that uses Retrieval-Augmented Generation (RAG) and Large Language Models (LLM) to provide intelligent responses based on company knowledge bases. The system can process unstructured documents and provide accurate, context-aware responses.",
    timeline: "10 months",
    teamSize: "8 team members",
    keyFeatures: [
      "Advanced RAG implementation",
      "Multi-format document processing",
      "Secure on-premise deployment",
      "Voice interface support",
      "Analytics dashboard",
      "API for system integration"
    ],
    architecture: "Mina follows a modern AI architecture with RAG components. Key elements include:\n\n- Document Processing Engine\n- Embedding Generation Service\n- Vector Database\n- LLM Integration Service\n- Query Processing Engine\n- Analytics Service",
    challenges: [
      "Complex document processing",
      "Response accuracy",
      "Data security",
      "Integration with existing systems"
    ],
    solutions: [
      "Advanced RAG implementation",
      "Secure on-premise deployment",
      "Multi-format document support",
      "API-first architecture"
    ],
    technologies: [
      "Python", "TensorFlow", "React", "Node.js",
      "PostgreSQL", "Docker", "Kubernetes"
    ],
    results: [
      "90% response accuracy",
      "50% reduction in support tickets",
      "Successful enterprise deployment",
      "Improved employee productivity"
    ],
    metrics: [
      {
        label: "Response Accuracy",
        value: "90%",
        description: "Accuracy rate for generated responses"
      },
      {
        label: "Support Ticket Reduction",
        value: "50%",
        description: "Reduction in support tickets after implementation"
      },
      {
        label: "User Adoption",
        value: "85%",
        description: "Of employees using the system regularly"
      },
      {
        label: "Processing Time",
        value: "75% Reduction",
        description: "Time to find information in company documents"
      }
    ],
    caseStudy: "The enterprise client needed a solution to make their vast knowledge base more accessible to employees while maintaining security. Aletech developed Mina with:\n\n1. Advanced RAG implementation for accurate responses\n2. Secure on-premise deployment\n3. Multi-format document support\n4. API-first architecture for integration\n\nThe system now successfully processes thousands of queries daily, reducing support tickets and improving employee productivity.",
  },
  "lina-text2sql": {
    id: "lina-text2sql",
    title: "Lina text2SQL",
    category: "AI & ERP",
    client: "Enterprise Client",
    image: "/images/lina-project.png",
    description: "AI-based database querying system allowing non-developers to run queries with natural language, featuring role-based access, LLM & RAG powered, and enterprise integration.",
    tags: ["AI", "NLP", "Database Querying", "Enterprise Integration"],
    longDescription: "Lina is an AI-powered system that enables non-technical users to query databases using natural language. The system uses advanced NLP and RAG techniques to understand user intent and generate accurate SQL queries while maintaining security and access control.",
    timeline: "12 months",
    teamSize: "10 team members",
    keyFeatures: [
      "Natural language to SQL conversion",
      "Role-based access control",
      "Query validation and optimization",
      "Results visualization",
      "Query history and favorites",
      "Enterprise system integration"
    ],
    architecture: "Lina follows a modern AI architecture with NLP components. Key elements include:\n\n- Natural Language Processing Engine\n- SQL Generation Service\n- Query Validation Service\n- Access Control Service\n- Visualization Engine\n- Integration Service",
    challenges: [
      "Query accuracy",
      "Security and access control",
      "Integration complexity",
      "User experience"
    ],
    solutions: [
      "Advanced NLP models",
      "Role-based access control",
      "Enterprise integration framework",
      "Intuitive interface"
    ],
    technologies: [
      "Python", "TensorFlow", "React", "Node.js",
      "PostgreSQL", "Docker", "Kubernetes"
    ],
    results: [
      "95% query accuracy",
      "100% security compliance",
      "80% reduction in query time",
      "Increased data accessibility"
    ],
    metrics: [
      {
        label: "Query Accuracy",
        value: "95%",
        description: "Accuracy rate for generated SQL queries"
      },
      {
        label: "Security Compliance",
        value: "100%",
        description: "All queries comply with security policies"
      },
      {
        label: "Time Savings",
        value: "80% Reduction",
        description: "Time to generate and execute queries"
      },
      {
        label: "User Adoption",
        value: "75%",
        description: "Of non-technical users regularly using the system"
      }
    ],
    caseStudy: "The enterprise client needed a solution to make their data more accessible to non-technical users while maintaining security and compliance. Aletech developed Lina with:\n\n1. Advanced NLP models for accurate query generation\n2. Role-based access control for security\n3. Enterprise integration framework\n4. Intuitive user interface\n\nThe system now successfully processes thousands of queries daily, enabling data-driven decision making across the organization.",
  }
}

export default function ProjectPageClient({ id }: { id: string }) {
  const { controls, hasAnimated, isClient } = usePageAnimations()
  const [mounted, setMounted] = useState(false)
  const project = projectsData[id]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!project) {
    return (
      <main className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="container px-4 mx-auto py-20">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The requested project could not be found.</p>
          <Link href="/projects">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <PageHeader
        title={project.title}
        description={project.description}
      />

      <section className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          {mounted && (
            <motion.div
              initial="hidden"
              animate={controls}
              variants={containerVariants}
            >
              {/* Project Overview */}
              <motion.div variants={itemVariants} className="mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
                    <p className="text-muted-foreground mb-6">{project.longDescription}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs bg-card/50 border border-border px-3 py-1 rounded-full text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {project.githubUrl && (
                        <Link href={project.githubUrl} target="_blank">
                          <Button variant="outline">
                            <Github className="mr-2 h-4 w-4" />
                            View Code
                          </Button>
                        </Link>
                      )}
                      {project.liveUrl && (
                        <Link href={project.liveUrl} target="_blank">
                          <Button>
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Visit Project
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="relative w-full max-w-md h-[300px] rounded-xl overflow-hidden bg-card/30">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain h-full"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Project Details */}
              <motion.div variants={itemVariants} className="mb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <motion.div 
                    whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)" }}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold mb-4">Timeline</h3>
                    <p className="text-muted-foreground">{project.timeline}</p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)" }}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold mb-4">Team Size</h3>
                    <p className="text-muted-foreground">{project.teamSize}</p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)" }}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold mb-4">Client</h3>
                    <p className="text-muted-foreground">{project.client}</p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Key Features */}
              {project.keyFeatures && (
                <motion.div variants={itemVariants} className="mb-16">
                  <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {project.keyFeatures.map((feature, index) => (
                      <motion.div 
                        key={index} 
                        whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)" }}
                        className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                      >
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                            <span className="text-primary font-bold">{index + 1}</span>
                          </div>
                          <h3 className="text-lg font-medium">{feature}</h3>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Architecture */}
              {project.architecture && (
                <motion.div variants={itemVariants} className="mb-16">
                  <h2 className="text-2xl font-bold mb-6">Architecture</h2>
                  <motion.div 
                    whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)" }}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="prose prose-invert max-w-none">
                      {project.architecture.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="text-muted-foreground mb-4">{paragraph}</p>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {/* Challenges & Solutions */}
              <motion.div variants={itemVariants} className="mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <motion.div 
                    whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)" }}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                  >
                    <h2 className="text-2xl font-bold mb-6">Challenges</h2>
                    <ul className="space-y-4">
                      {project.challenges?.map((challenge, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-muted-foreground">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                  <motion.div 
                    whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)" }}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                  >
                    <h2 className="text-2xl font-bold mb-6">Solutions</h2>
                    <ul className="space-y-4">
                      {project.solutions?.map((solution, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-muted-foreground">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>

              {/* Technologies & Results */}
              <motion.div variants={itemVariants} className="mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <motion.div 
                    whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)" }}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                  >
                    <h2 className="text-2xl font-bold mb-6">Technologies</h2>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies?.map((tech, index) => (
                        <span
                          key={index}
                          className="text-sm bg-card/50 border border-border px-3 py-1 rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)" }}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                  >
                    <h2 className="text-2xl font-bold mb-6">Results</h2>
                    <ul className="space-y-4">
                      {project.results?.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-muted-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>

              {/* Metrics */}
              {project.metrics && (
                <motion.div variants={itemVariants} className="mb-16">
                  <h2 className="text-2xl font-bold mb-6">Key Metrics</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {project.metrics.map((metric, index) => (
                      <motion.div 
                        key={index} 
                        whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)" }}
                        className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                      >
                        <h3 className="text-xl font-bold text-primary mb-2">{metric.value}</h3>
                        <h4 className="text-lg font-medium mb-2">{metric.label}</h4>
                        <p className="text-muted-foreground text-sm">{metric.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Case Study */}
              {project.caseStudy && (
                <motion.div variants={itemVariants} className="mb-16">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6 text-primary"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-primary/90 to-primary bg-clip-text text-transparent">Case Study</h2>
                  </div>
                  <motion.div 
                    whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)" }}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="prose prose-invert max-w-none">
                      {project.caseStudy.split('\n\n').map((paragraph: string, index: number) => {
                        const isListItem = /^\d+\./.test(paragraph);
                        
                        if (isListItem) {
                          const [titleWithNumber, ...items] = paragraph.split('\n');
                          // Remove the number prefix from the title
                          const title = titleWithNumber.replace(/^\d+\.\s*/, '');
                          return (
                            <div key={index} className="mb-10">
                              <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                  <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-5 h-5 text-primary"
                                  >
                                    <path d="M12 2v4" />
                                    <path d="M12 18v4" />
                                    <path d="M4.93 4.93l2.83 2.83" />
                                    <path d="M16.24 16.24l2.83 2.83" />
                                    <path d="M2 12h4" />
                                    <path d="M18 12h4" />
                                    <path d="M4.93 19.07l2.83-2.83" />
                                    <path d="M16.24 7.76l2.83-2.83" />
                                  </svg>
                                </div>
                                <h3 className="text-xl font-semibold bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">{title}</h3>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {items.map((item: string, itemIndex: number) => {
                                  const cleanItem = item.replace(/^\d+\.\s*/, '').trim();
                                  return cleanItem ? (
                                    <motion.div
                                      key={itemIndex}
                                      whileHover={{ scale: 1.02 }}
                                      className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg p-4 hover:border-primary/30 transition-all duration-300"
                                    >
                                      <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                          <span className="text-primary text-sm font-medium">{itemIndex + 1}</span>
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-relaxed pt-1.5">{cleanItem}</p>
                                      </div>
                                    </motion.div>
                                  ) : null;
                                })}
                              </div>
                            </div>
                          );
                        } else {
                          return (
                            <div key={index} className="mb-8">
                              <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mt-1">
                                  <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-4 h-4 text-primary"
                                  >
                                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                    <polyline points="14 2 14 8 20 8" />
                                  </svg>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">{paragraph}</p>
                              </div>
                            </div>
                          );
                        }
                      })}
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {/* CTA Section */}
              <motion.div variants={itemVariants}>
                <motion.div 
                  whileHover={{ y: -10, boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)" }}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4">Have a Similar Project in Mind?</h2>
                      <p className="text-muted-foreground mb-6">
                        Let's discuss how Aletech can help bring your vision to life with our expertise in technology
                        solutions.
                      </p>
                      <Link href="/contact">
                        <Button className="bg-primary hover:bg-primary/90 text-white">
                          Start a Project
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
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
                      <div className="relative aspect-video w-full bg-card/70 rounded-xl overflow-hidden">
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
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
} 