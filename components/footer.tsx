import Link from "next/link"
import Image from "next/image"
import { Facebook, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-background border-t border-border">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logos/aletech.svg" alt="Aletech Logo" width={40} height={40} className="h-10 w-auto" />
              <span className="text-xl font-bold text-primary">ALETECH</span>
            </Link>
            <p className="text-muted-foreground">
              Your committed outsourcing partner, delivering tailored end-to-end solutions by deeply understanding your unique challenges.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="https://www.facebook.com/aletechvn" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link 
                href="https://www.linkedin.com/company/aletech-vn" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link 
                href="mailto:contact@aletech.dev" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions/saas" className="text-muted-foreground hover:text-primary transition-colors text-left w-full">
                  SaaS Solutions
                </Link>
              </li>
              <li>
                <Link href="/solutions/healthcare" className="text-muted-foreground hover:text-primary transition-colors text-left w-full">
                  Healthcare Technology
                </Link>
              </li>
              <li>
                <Link href="/solutions/fintech" className="text-muted-foreground hover:text-primary transition-colors text-left w-full">
                  Financial Technology
                </Link>
              </li>
              <li>
                <Link href="/solutions/ecommerce" className="text-muted-foreground hover:text-primary transition-colors text-left w-full">
                  E-commerce Solutions
                </Link>
              </li>
              <li>
                <Link href="/solutions/ai" className="text-muted-foreground hover:text-primary transition-colors text-left w-full">
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/solutions/database" className="text-muted-foreground hover:text-primary transition-colors text-left w-full">
                  Database Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/investors" className="text-muted-foreground hover:text-primary transition-colors">
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Get in Touch
                </Link>
              </li>
              <li>
                <p className="text-muted-foreground">
                  Buon Ma Thuot, Vietnam
                </p>
              </li>
              <li>
                <a href="mailto:contact@aletech.dev" className="text-muted-foreground hover:text-primary transition-colors">
                  contact@aletech.dev
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© {currentYear} Aletech. All rights reserved.</p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">Problem-Centered Technology Solutions</p>
        </div>
      </div>
    </footer>
  )
}

