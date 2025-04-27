"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Globe } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import ThemeToggle from "@/components/theme-toggle"
import { useLanguage } from "@/contexts/language-context"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false)
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const solutionsDropdownRef = useRef<HTMLDivElement>(null)
  const languageDropdownRef = useRef<HTMLDivElement>(null)
  const { language, setLanguage } = useLanguage()

  console.log('Navbar current language:', language)

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'vi', name: 'Tiếng Việt' },
  ]

  const handleLanguageChange = (langCode: 'en' | 'vi') => {
    console.log('Navbar language change requested:', langCode)
    setIsLanguageDropdownOpen(false)
    setLanguage(langCode)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  const solutions = [
    { href: "/solutions/saas", label: "SaaS Solutions" },
    { href: "/solutions/healthcare", label: "Healthcare Technology" },
    { href: "/solutions/fintech", label: "Financial Technology" },
    { href: "/solutions/ecommerce", label: "E-commerce Solutions" },
    { href: "/solutions/ai", label: "Artificial Intelligence" },
    { href: "/solutions/database", label: "Database Solutions" },
  ]

  const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/projects", label: "Projects" },
    { href: "/news", label: "News" },
    { href: "/investors", label: "Investor Relations" },
    { href: "/contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (solutionsDropdownRef.current && !solutionsDropdownRef.current.contains(event.target as Node)) {
        setIsSolutionsDropdownOpen(false)
      }
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
        setIsLanguageDropdownOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <motion.header
      className={`fixed w-full backdrop-blur-md z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 shadow-lg" : "bg-background/70 dark:bg-background/50"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <motion.div whileHover={{ rotate: 10 }} transition={{ duration: 0.3 }}>
            <Image src="/logos/aletech.svg" alt="Aletech Logo" width={40} height={40} className="h-10 w-auto" />
          </motion.div>
          <motion.span
            className="text-xl font-bold text-primary"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            ALETECH
          </motion.span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
            >
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors relative ${
                  isActive(link.href) ? "text-primary" : "hover:text-primary"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    layoutId="navbar-underline"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
          
          {/* Solutions Dropdown */}
          <motion.div
            ref={solutionsDropdownRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="relative"
          >
            <div className="flex items-center">
              <Link
                href="/solutions"
                className={`text-sm font-medium transition-colors relative ${
                  pathname === "/solutions" ? "text-primary" : "hover:text-primary"
                }`}
              >
                Solutions
                {pathname === "/solutions" && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    layoutId="navbar-underline"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
              <button
                className="ml-1 text-sm font-medium transition-colors relative flex items-center hover:text-primary"
                onClick={() => setIsSolutionsDropdownOpen(!isSolutionsDropdownOpen)}
              >
                <ChevronDown className={`h-4 w-4 transition-transform ${isSolutionsDropdownOpen ? "rotate-180" : ""}`} />
              </button>
            </div>
            
            <AnimatePresence>
              {isSolutionsDropdownOpen && (
                <motion.div
                  className="absolute top-full left-0 mt-1 w-64 bg-card border border-border rounded-md shadow-lg z-10"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="py-2">
                    {solutions.map((solution) => (
                      <Link
                        key={solution.href}
                        href={solution.href}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          isActive(solution.href) ? "text-primary bg-primary/10" : "hover:bg-primary/10"
                        }`}
                        onClick={() => setIsSolutionsDropdownOpen(false)}
                      >
                        {solution.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <motion.div
            ref={languageDropdownRef}
            className="relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.7 }}
          >
            <button
              className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            >
              <Globe className="h-4 w-4" />
              <span>{languages.find(lang => lang.code === language)?.name}</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${isLanguageDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {isLanguageDropdownOpen && (
                <motion.div
                  className="absolute top-full right-0 mt-1 w-40 bg-card border border-border rounded-md shadow-lg z-10"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="py-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                          language === lang.code ? "text-primary bg-primary/10" : "hover:bg-primary/10"
                        }`}
                        onClick={() => handleLanguageChange(lang.code as 'en' | 'vi')}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <button
              className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            >
              <Globe className="h-4 w-4" />
              <ChevronDown className={`h-4 w-4 transition-transform ${isLanguageDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {isLanguageDropdownOpen && (
                <motion.div
                  className="absolute top-full right-0 mt-1 w-40 bg-card border border-border rounded-md shadow-lg z-10"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="py-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                          language === lang.code ? "text-primary bg-primary/10" : "hover:bg-primary/10"
                        }`}
                        onClick={() => handleLanguageChange(lang.code as 'en' | 'vi')}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <ThemeToggle />

          <motion.button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {isMenuOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-background/95 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container py-4 space-y-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                  >
                    <Link
                      href={link.href}
                      className={`text-sm font-medium transition-colors ${
                        isActive(link.href) ? "text-primary" : "hover:text-primary"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile Solutions Dropdown */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <div className="flex items-center">
                    <Link
                      href="/solutions"
                      className={`text-sm font-medium transition-colors ${
                        pathname === "/solutions" ? "text-primary" : "hover:text-primary"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Solutions
                    </Link>
                    <button
                      className="ml-1 text-sm font-medium transition-colors flex items-center hover:text-primary"
                      onClick={() => setIsSolutionsDropdownOpen(!isSolutionsDropdownOpen)}
                    >
                      <ChevronDown className={`h-4 w-4 transition-transform ${isSolutionsDropdownOpen ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                  
                  <AnimatePresence>
                    {isSolutionsDropdownOpen && (
                      <motion.div
                        className="pl-4 mt-2 space-y-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {solutions.map((solution) => (
                          <Link
                            key={solution.href}
                            href={solution.href}
                            className={`block text-sm transition-colors ${
                              isActive(solution.href) ? "text-primary" : "hover:text-primary"
                            }`}
                            onClick={() => {
                              setIsSolutionsDropdownOpen(false)
                              setIsMenuOpen(false)
                            }}
                          >
                            {solution.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

