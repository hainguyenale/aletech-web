"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

interface PageHeaderProps {
  title: string
  description?: string
  showSolutionsDropdown?: boolean
}

export default function PageHeader({ title, description, showSolutionsDropdown = false }: PageHeaderProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const pathname = usePathname()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  useEffect(() => {
    // Reset and start animations when component mounts or path changes
    controls.set("hidden")

    const timeout = setTimeout(() => {
      controls.start("visible")
    }, 100)

    return () => clearTimeout(timeout)
  }, [controls, pathname])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "5rem",
      transition: { duration: 0.8, delay: 0.6 },
    },
  }

  const solutions = [
    { id: "saas", label: "SaaS Solutions", path: "/solutions/saas" },
    { id: "healthcare", label: "Healthcare Technology", path: "/solutions/healthcare" },
    { id: "fintech", label: "Financial Technology", path: "/solutions/fintech" },
    { id: "ecommerce", label: "E-commerce Solutions", path: "/solutions/ecommerce" },
    { id: "ai", label: "Artificial Intelligence", path: "/solutions/ai" },
    { id: "database", label: "Database Solutions", path: "/solutions/database" },
  ]

  return (
    <section className="pt-32 pb-16 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background">
        <div className="absolute inset-0 opacity-20">
          {/* Grid pattern overlay with animation */}
          <motion.div
            className="h-full w-full grid-pattern"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ maxWidth: '100%' }}
          ></motion.div>
        </div>
      </div>

      <motion.div
        className="container relative z-10 mx-auto text-center px-4 sm:px-6 max-w-[100vw]"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 break-words" 
          variants={itemVariants}
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto break-words" 
            variants={itemVariants}
          >
            {description}
          </motion.p>
        )}

        {/* {showSolutionsDropdown && (
          <motion.div 
            className="mt-8 relative inline-block"
            variants={itemVariants}
          >
            <button
              className="flex items-center space-x-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-md text-primary font-medium transition-colors"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>Our Solutions</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-card border border-border rounded-md shadow-lg z-10">
                <div className="py-2">
                  {solutions.map((solution) => (
                    <Link 
                      key={solution.id} 
                      href={solution.path}
                      className="block px-4 py-2 text-sm hover:bg-primary/10 transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {solution.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )} */}

        <motion.div 
          className="h-1 w-20 bg-primary mx-auto mt-8" 
          variants={lineVariants} 
        />
      </motion.div>
    </section>
  )
}

