"use client"

import PageHeader from "@/components/page-header"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { usePathname } from "next/navigation"
import { solutionsData } from "./solutions-data"

export default function SolutionsLayoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const solutionId = pathname.split('/').pop()
  const solution = solutionId ? solutionsData.find((s) => s.id === solutionId) : null

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <PageHeader 
        title={solution ? solution.title : "Our Solutions"}
        description={solution ? solution.description : "Discover our comprehensive range of technology solutions designed to address the unique challenges of modern businesses."}
        showSolutionsDropdown={true}
      />
      {children}
      <Footer />
    </main>
  )
} 