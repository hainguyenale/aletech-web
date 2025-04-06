import { Cloud, Stethoscope, Wallet, ShoppingBag, Brain, Database } from "lucide-react"

export const solutionsData = [
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
    image: "/images/saas-solution.png",
    benefits: [
      "Reduced operational costs",
      "Improved scalability and flexibility",
      "Enhanced security and compliance",
      "Faster time to market",
      "Better resource utilization",
      "Increased customer satisfaction",
    ],
    caseStudies: [
      {
        title: "UK Parking Control",
        description: "Re-architected legacy systems into scalable microservices supporting up to 5 million requests/day.",
        image: "/images/ukpc-project.png",
        link: "/projects/ukpc",
      },
      {
        title: "SaaS Parking Control",
        description: "SaaS-ready infrastructure for cross-border scalability with automated provisioning.",
        image: "/images/saas-parking-control-project.png",
        link: "/projects/saas-parking-control",
      }
    ],
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
    image: "/images/healthcare-solution.png",
    benefits: [
      "Improved patient outcomes",
      "Enhanced operational efficiency",
      "Reduced administrative burden",
      "Better data security and compliance",
      "Streamlined clinical workflows",
      "Increased diagnostic accuracy",
    ],
    caseStudies: [
      {
        title: "Flynotes",
        description: "AI-powered dynamic consent generation platform for healthcare providers.",
        image: "/images/flynotes-project.png",
        link: "/projects/flynotes",
      }
    ],
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
    image: "/images/fintech-solution.png",
    benefits: [
      "Enhanced security and fraud prevention",
      "Reduced transaction costs",
      "Improved financial inclusion",
      "Faster payment processing",
      "Better regulatory compliance",
      "Increased transparency",
    ],
    caseStudies: [
      {
        title: "BeeToken",
        description: "NFT-based voucher system for gifting with blockchain-enabled secure platform.",
        image: "/images/beetoken-project.png",
        link: "/projects/beetoken",
      }
    ],
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
    image: "/images/ecommerce-solution.png",
    benefits: [
      "Increased sales and revenue",
      "Improved inventory management",
      "Enhanced customer experience",
      "Better market reach",
      "Optimized supply chain",
      "Data-driven decision making",
    ],
    caseStudies: [
      {
        title: "POD System",
        description: "Print on Demand system handling 10k-20k orders/day with AI-driven analytics.",
        image: "/images/pod-system-project.png",
        link: "/projects/pod-system",
      }
    ],
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
    image: "/images/ai-solution.png",
    benefits: [
      "Improved decision making",
      "Enhanced operational efficiency",
      "Reduced manual workload",
      "Better customer insights",
      "Increased innovation",
      "Competitive advantage",
    ],
    caseStudies: [
      {
        title: "Mina Chatbot",
        description: "Knowledge management system using RAG & LLM for unstructured document processing.",
        image: "/images/mina-project.png",
        link: "/projects/mina-chatbot",
      }
    ],
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
    image: "/images/database-solution.png",
    benefits: [
      "Improved data accessibility",
      "Enhanced data security",
      "Better performance and scalability",
      "Reduced operational costs",
      "Comprehensive data insights",
      "Regulatory compliance",
    ],
    caseStudies: [
      {
        title: "Lina text2SQL",
        description: "AI-based database querying allowing non-developers to run queries with natural language.",
        image: "/images/lina-project.png",
        link: "/projects/lina-text2sql",
      }
    ],
  },
] 