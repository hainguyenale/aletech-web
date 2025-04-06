import SolutionsLayoutClient from "./solutions-layout-client"

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <SolutionsLayoutClient>{children}</SolutionsLayoutClient>
} 