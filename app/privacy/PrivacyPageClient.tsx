"use client"

import Navbar from "@/components/navbar"
import Footer, { FooterData } from "@/components/footer"
import PageHeader from "@/components/page-header"
import { motion } from "framer-motion"
import { usePageAnimations } from "@/hooks/use-page-animations"
import { Shield, Lock, FileText, UserCheck, AlertCircle, Mail } from "lucide-react"
import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import { client } from "@/sanity/lib/client"
import { footerQuery } from "@/sanity/queries/footer"

export default function PrivacyPageClient() {
  const { controls, hasAnimated } = usePageAnimations()
  const [footerData, setFooterData] = useState<FooterData | null>(null)
  const { language } = useLanguage()

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const footerResult = await client.fetch<FooterData>(footerQuery, { language })
        setFooterData(footerResult)
      } catch (error) {
        console.error('Error fetching footer data:', error)
      }
    }

    fetchFooterData()
  }, [language])

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
        title="Privacy Policy"
        description="How we collect, use, and protect your information"
      />

      <section className="container px-4 py-16 mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            variants={itemVariants}
            className="bg-card rounded-lg shadow-md p-8 mb-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">Introduction</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              At Aletech, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="text-muted-foreground">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-card rounded-lg shadow-md p-8 mb-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">Information We Collect</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              We collect information that you provide directly to us when you:
            </p>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
              <li>Fill out a form on our website</li>
              <li>Contact us via email or phone</li>
              <li>Subscribe to our newsletter</li>
              <li>Request a quote or consultation</li>
              <li>Apply for a job</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              The types of information we may collect include:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Name and contact information</li>
              <li>Company information</li>
              <li>Project requirements and specifications</li>
              <li>Communication preferences</li>
            </ul>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-card rounded-lg shadow-md p-8 mb-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">How We Use Your Information</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Provide and maintain our services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-card rounded-lg shadow-md p-8 mb-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">Information Sharing and Disclosure</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              We do not sell, trade, or otherwise transfer your personally identifiable information to third parties without your consent, except as described in this policy.
            </p>
            <p className="text-muted-foreground mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Service providers who assist in our operations</li>
              <li>Professional advisors</li>
              <li>Law enforcement when required by law</li>
            </ul>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-card rounded-lg shadow-md p-8 mb-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <Lock className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">Data Security</h2>
            </div>
            <p className="text-muted-foreground">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-card rounded-lg shadow-md p-8 mb-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">Your Rights</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to withdraw consent</li>
            </ul>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-card rounded-lg shadow-md p-8 mb-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">Cookies and Tracking Technologies</h2>
            </div>
            <p className="text-muted-foreground">
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-card rounded-lg shadow-md p-8 mb-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">Changes to This Privacy Policy</h2>
            </div>
            <p className="text-muted-foreground">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-card rounded-lg shadow-md p-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <Mail className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">Contact Us</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-muted p-4 rounded-md">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Email:</strong> contact@aletech.dev<br />
                <strong className="text-foreground">Address:</strong> Buon Ma Thuot, Vietnam
              </p>
              <p className="text-muted-foreground mt-2">
                <strong className="text-foreground">Last Updated:</strong> {new Date().toLocaleDateString()}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {footerData && <Footer data={footerData} />}
    </main>
  )
} 