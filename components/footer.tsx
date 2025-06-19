"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Linkedin, Mail } from "lucide-react"
import { useState, useEffect } from "react"

export interface FooterData {
  companyInfo: {
    description: string
    socialLinks: Array<{
      platform: 'facebook' | 'linkedin' | 'email'
      url: string
    }>
  }
  solutionsLinks?: Array<{
    title: string
    url: string
  }>
  companyLinks: Array<{
    title: string
    url: string
  }>
  contactInfo: {
    address: string
    email: string
  }
  copyright: string
  tagline: string
}

interface FooterProps {
  data: FooterData
}

export default function Footer({ data }: FooterProps) {
  const currentYear = new Date().getFullYear()
  const [userCountry, setUserCountry] = useState<string | null>(null)

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch('/api/country')
        const data = await response.json()
        setUserCountry(data.country)
      } catch (error) {
        console.error('Error fetching country:', error)
      }
    }
    fetchCountry()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const getSocialIcon = (platform: 'facebook' | 'linkedin' | 'email') => {
    switch (platform) {
      case 'facebook':
        return <Facebook className="h-5 w-5" />
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />
      case 'email':
        return <Mail className="h-5 w-5" />
      default:
        return null
    }
  }

  return (
    <footer className="bg-background border-t border-border">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logos/aletech.svg" alt="Aletech Logo" width={40} height={40} className="h-10 w-auto" />
              <span className="text-xl font-bold text-primary">ALETECH</span>
            </Link>
            <p className="text-muted-foreground">
              {data.companyInfo.description}
            </p>
            <div className="flex space-x-4">
              {data.companyInfo.socialLinks.map((link, index) => (
                <Link 
                  key={index}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {getSocialIcon(link.platform)}
                  <span className="sr-only">{link.platform}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {data.solutionsLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.url} className="text-muted-foreground hover:text-primary transition-colors text-left w-full">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {data.companyLinks
                .filter(link => link.url !== '/investors' || userCountry === 'VN')
                .map((link, index) => (
                <li key={index}>
                  <Link href={link.url} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
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
                  {data.contactInfo.address}
                </p>
              </li>
              <li>
                <a href={`mailto:${data.contactInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {data.contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            {data.copyright.replace('{year}', currentYear.toString())}
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">{data.tagline}</p>
        </div>
      </div>
    </footer>
  )
}

