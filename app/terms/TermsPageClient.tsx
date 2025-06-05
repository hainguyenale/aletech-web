"use client"

import Navbar from "@/components/navbar"
import Footer, { FooterData } from "@/components/footer"
import PageHeader from "@/components/page-header"
import { motion } from "framer-motion"
import { usePageAnimations } from "@/hooks/use-page-animations"
import { FileText, BookOpen, Shield, User, Lock, AlertCircle, Mail, Scale, Briefcase, RefreshCw } from "lucide-react"
import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import { client } from "@/sanity/lib/client"
import { footerQuery } from "@/sanity/queries/footer"

export default function TermsPageClient() {
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
        title="Terms of Service"
        description="Please read these terms carefully before using our services"
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
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">1. Introduction</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Welcome to Aletech. These Terms of Service ("Terms") govern your access to and use of our website, services, and applications (collectively, the "Services").
            </p>
            <p className="text-muted-foreground">
              By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Services.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-card rounded-lg shadow-md p-8 mb-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">2. Definitions</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              For the purposes of these Terms:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>"Company" (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Aletech.</li>
              <li>"Service" refers to the Company's Website, applications, and services.</li>
              <li>"Website" refers to Aletech, accessible from aletech.dev</li>
              <li>"You" means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
            </ul>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-card rounded-lg shadow-md p-8 mb-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">3. Use of Our Services</h2>
            </div>
            <p className="text-muted-foreground">
              You must follow any policies made available to you within the Services. You may use our Services only as permitted by law. We may suspend or stop providing our Services to you if you do not comply with our terms or policies or if we are investigating suspected misconduct.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-card rounded-lg shadow-md p-8 mb-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <User className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">4. Your Aletech Account</h2>
            </div>
            <p className="text-muted-foreground">
              Some of our Services require you to create an account. You are responsible for safeguarding the password that you use to access the Services and for any activities or actions under your password.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-card rounded-lg shadow-md p-8 mb-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <Lock className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">5. Privacy and Copyright Protection</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Our privacy policies explain how we treat your personal data and protect your privacy when you use our Services. By using our Services, you agree that Aletech can use such data in accordance with our privacy policies.
            </p>
            <p className="text-muted-foreground">
              We respond to notices of alleged copyright infringement and terminate accounts of repeat infringers according to the process set out in the U.S. Digital Millennium Copyright Act.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-card rounded-lg shadow-md p-8 mb-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">6. Your Content in our Services</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Some of our Services allow you to upload, submit, store, send or receive content. You retain ownership of any intellectual property rights that you hold in that content.
            </p>
            <p className="text-muted-foreground">
              When you upload, submit, store, send or receive content to or through our Services, you give Aletech (and those we work with) a worldwide license to use, host, store, reproduce, modify, create derivative works, communicate, publish, publicly perform, publicly display, and distribute such content.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-card rounded-lg shadow-md p-8 mb-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <RefreshCw className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">7. Modifying and Terminating our Services</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              We are constantly changing and improving our Services. We may add or remove functionalities or features, and we may suspend or stop a Service altogether.
            </p>
            <p className="text-muted-foreground">
              You can stop using our Services at any time. We may also stop providing Services to you, or add or create new limits to our Services at any time.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-card rounded-lg shadow-md p-8 mb-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">8. Warranties and Disclaimers</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              We provide our Services using a commercially reasonable level of skill and care. But there are certain things that we don't promise about our Services.
            </p>
            <p className="text-muted-foreground">
              Other than as expressly set out in these terms or additional terms, neither Aletech nor its suppliers or distributors make any specific promises about the Services. For example, we don't make any commitments about the content within the Services, the specific functions of the Services, or their reliability, availability, or ability to meet your needs.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-card rounded-lg shadow-md p-8 mb-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">9. Liability for our Services</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              When permitted by law, Aletech, and Aletech's suppliers and distributors, will not be responsible for lost profits, revenues, or data, financial losses or indirect, special, consequential, exemplary, or punitive damages.
            </p>
            <p className="text-muted-foreground">
              To the extent permitted by law, the total liability for any claims under these terms, including for any implied warranties, is limited to the amount you paid us to use the Services.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-card rounded-lg shadow-md p-8 mb-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">10. Business uses of our Services</h2>
            </div>
            <p className="text-muted-foreground">
              If you are using our Services on behalf of a business, that business accepts these terms. It will hold harmless and indemnify Aletech and its affiliates, officers, agents, and employees from any claim, suit or action arising from or related to the use of the Services or violation of these terms, including any liability or expense arising from claims, losses, damages, suits, judgments, litigation costs and attorneys' fees.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-card rounded-lg shadow-md p-8 mb-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">11. About these Terms</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              We may modify these terms or any additional terms that apply to a Service to reflect changes to the law or changes to our Services. We'll post notice of modifications to these terms on this page. Changes will not apply retroactively and will become effective no sooner than fourteen days after they are posted.
            </p>
            <p className="text-muted-foreground">
              If you do not agree to the modified terms for a Service, you should discontinue your use of that Service.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-card rounded-lg shadow-md p-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <Mail className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">12. Contact Information</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              If you have any questions about these Terms, please contact us at:
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