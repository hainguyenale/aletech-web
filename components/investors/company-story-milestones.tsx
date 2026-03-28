"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, FileText, ExternalLink } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import { useLang } from "@/hooks/use-lang"
import { formatDate } from "@/lib/utils/format"
import type { CompanyStoryData } from "@/lib/types/investors"

const YEAR_EVENTS: Record<string, Record<string, { label: string; events: { time: string; event: string }[] }>> = {
  en: {
    "2021": {
      label: "Foundation Year",
      events: [
        { time: "Jun 2021", event: "Official establishment of Aletech JSC on June 30, 2021" },
        { time: "H2 2021", event: "Assembled founding team of experienced technology leaders" },
        { time: "H2 2021", event: "Secured first UK enterprise client - UKPC parking infrastructure" },
        { time: "Q4 2021", event: "Began developing core software development capabilities" },
      ],
    },
    "2022": {
      label: "National Expansion",
      events: [
        { time: "H1 2022", event: "Established business hub in Hanoi for northern Vietnam operations" },
        { time: "H1 2022", event: "Established business hub in Ho Chi Minh City for southern operations" },
        { time: "H2 2022", event: "Optimized global client service delivery model across 3 locations" },
        { time: "Q4 2022", event: "Expanded engineering team and built core AI/Data capabilities" },
      ],
    },
    "2024": {
      label: "Capital Stabilization",
      events: [
        { time: "H1 2024", event: "Charter capital increased to 5,000,000,000 VND" },
        { time: "Mid 2024", event: "Began strategic advisory engagement with Beeful (POD sector)" },
        { time: "H2 2024", event: "Deepened POD operations optimization partnership with Beeful" },
        { time: "Q4 2024", event: "Reinforced operations for large-scale international projects" },
      ],
    },
    "2025": {
      label: "Exponential Growth",
      events: [
        { time: "H1 2025", event: "Established dedicated AI division for VHT defense project" },
        { time: "Sep 2025", event: "Converted to Joint Stock Company (JSC) with 3-member Board of Directors" },
        { time: "Nov 2025", event: "Strategic AI partnership with VHT System Integration for defense sector" },
        { time: "Dec 2025", event: "Charter capital reached 30,600,000,000 VND - 4x team growth in 2 years" },
      ],
    },
  },
  vi: {
    "2021": {
      label: "Năm Khởi đầu",
      events: [
        { time: "T6/2021", event: "Chính thức thành lập Công ty CP Giải pháp Công nghệ Aletech ngày 30/06/2021" },
        { time: "H2/2021", event: "Tập hợp đội ngũ sáng lập giàu kinh nghiệm công nghệ" },
        { time: "H2/2021", event: "Ký hợp đồng khách hàng doanh nghiệp đầu tiên tại Anh - UKPC hạ tầng đỗ xe" },
        { time: "Q4/2021", event: "Bắt đầu xây dựng năng lực phát triển phần mềm cốt lõi" },
      ],
    },
    "2022": {
      label: "Mở rộng Toàn quốc",
      events: [
        { time: "H1/2022", event: "Thiết lập địa điểm kinh doanh tại Hà Nội phục vụ khu vực phía Bắc" },
        { time: "H1/2022", event: "Thiết lập địa điểm kinh doanh tại TP.HCM phục vụ khu vực phía Nam" },
        { time: "H2/2022", event: "Tối ưu hóa mô hình cung cấp dịch vụ khách hàng toàn cầu từ 3 địa điểm" },
        { time: "Q4/2022", event: "Mở rộng đội ngũ kỹ sư và xây dựng năng lực AI/Dữ liệu cốt lõi" },
      ],
    },
    "2024": {
      label: "Ổn định Vốn",
      events: [
        { time: "H1/2024", event: "Tăng vốn điều lệ lên 5.000.000.000 VNĐ" },
        { time: "Giữa 2024", event: "Bắt đầu cố vấn chiến lược cho đối tác lớn trong lĩnh vực POD (Beeful)" },
        { time: "H2/2024", event: "Hợp tác sâu hơn với Beeful tối ưu chuỗi vận hành POD" },
        { time: "Q4/2024", event: "Củng cố nền tảng vận hành cho các dự án quốc tế quy mô lớn" },
      ],
    },
    "2025": {
      label: "Bứt phá Tăng trưởng",
      events: [
        { time: "H1/2025", event: "Thành lập bộ phận AI chuyên biệt cho dự án VHT quốc phòng" },
        { time: "T9/2025", event: "Chuyển đổi thành Công ty Cổ phần với HĐQT 3 thành viên" },
        { time: "T11/2025", event: "Hợp tác chiến lược AI cùng CTCP Tích hợp Hệ thống VHT cho lĩnh vực quốc phòng" },
        { time: "T12/2025", event: "Vốn điều lệ đạt 30.600.000.000 VNĐ - tăng trưởng nhân sự gấp 4 lần trong 2 năm" },
      ],
    },
  },
}

interface CompanyStoryProps {
  data: CompanyStoryData
}

export default function CompanyStoryMilestones({ data }: CompanyStoryProps) {
  const language = useLang()
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [hovered, setHovered] = useState<number | null>(null)
  const rotations = [-3, 2, -1.5, 3.5, -2.5, 1]
  const selectedMilestone = selectedIndex !== null ? data.milestones[selectedIndex] : null

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: title + narrative */}
          <FadeIn direction="left">
            <div className="md:sticky md:top-32">
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm mb-3">
                <span className="text-primary font-medium">{data.tagline}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{data.title}</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">{data.narrative}</p>
            </div>
          </FadeIn>

          {/* Right: polaroid cards */}
          <FadeIn direction="right">
            <div className="grid grid-cols-3 gap-3">
              {data.milestones.map((m, i) => (
                <motion.div
                  key={i}
                  onHoverStart={() => setHovered(i)}
                  onHoverEnd={() => setHovered(null)}
                  onClick={() => setSelectedIndex(i)}
                  animate={{
                    rotate: hovered === i ? 0 : rotations[i],
                    scale: hovered === i ? 1.05 : 1,
                    zIndex: hovered === i ? 10 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="bg-card border border-border rounded-lg cursor-pointer relative p-2 pb-7 hover:border-primary/30"
                >
                  <div className="w-full h-16 rounded-md mb-1 flex items-center justify-center bg-primary/10 border border-primary/20">
                    <span className="text-2xl font-black text-primary">{m.year}</span>
                  </div>
                  <p className="text-xs font-medium text-foreground text-center leading-tight line-clamp-2 mt-1">{m.title}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground/40 text-center mt-3">
              {language === "vi" ? "Nhấn để xem chi tiết" : "Click to view details"}
            </p>
          </FadeIn>
        </div>

        {/* Company profile document */}
        <FadeIn direction="up" delay={0.3}>
          <div className="mt-6">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">
                    {formatDate(new Date().toISOString().split("T")[0], language)}
                  </p>
                  <p className="text-sm font-medium">
                    {language === "vi" ? "Tài liệu giới thiệu doanh nghiệp" : "Company Profile Document"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <a href="#" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                  <FileText className="w-3.5 h-3.5" />
                  <span>PDF</span>
                </a>
                <a href="#" className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 transition-colors">
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{language === "vi" ? "Xem" : "View"}</span>
                </a>
              </div>
            </div>
            <div className="border-b border-border" />
          </div>
        </FadeIn>
      </div>

      {/* Drawer overlay */}
      <AnimatePresence>
        {selectedMilestone && selectedIndex !== null && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndex(null)}
            />

            {/* Drawer from right */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-background border-l border-border z-50 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-primary/10 border border-primary/30 px-3 py-1 text-sm font-bold text-primary">
                    {selectedMilestone.year}
                  </span>
                  <h3 className="text-lg font-bold">{selectedMilestone.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="w-8 h-8 rounded-full bg-muted/50 hover:bg-muted flex items-center justify-center transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Timeline content */}
              <div className="flex-1 overflow-y-auto p-6">
                {/* Main description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                  {selectedMilestone.description}
                </p>

                {/* Year timeline */}
                <div className="relative pl-6">
                  <div className="absolute left-2 top-0 bottom-0 w-px bg-primary/20" />

                  {(YEAR_EVENTS[language]?.[selectedMilestone.year]?.events || YEAR_EVENTS["en"]?.[selectedMilestone.year]?.events || []).map((item, i) => (
                    <motion.div
                      key={i}
                      className="relative mb-6 last:mb-0"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                    >
                      <div className="absolute -left-[18px] top-1 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                      <div className="bg-card/50 border border-border rounded-lg p-4 hover:border-primary/20 transition-colors">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-primary">{item.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.event}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-10 pt-6 border-t border-border">
                  <button
                    onClick={() => setSelectedIndex(Math.max(0, selectedIndex - 1))}
                    disabled={selectedIndex === 0}
                    className="text-sm text-muted-foreground hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    ← {selectedIndex > 0 ? data.milestones[selectedIndex - 1].year : ""}
                  </button>
                  <span className="text-xs text-muted-foreground">
                    {selectedIndex + 1} / {data.milestones.length}
                  </span>
                  <button
                    onClick={() => setSelectedIndex(Math.min(data.milestones.length - 1, selectedIndex + 1))}
                    disabled={selectedIndex === data.milestones.length - 1}
                    className="text-sm text-muted-foreground hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    {selectedIndex < data.milestones.length - 1 ? data.milestones[selectedIndex + 1].year : ""} →
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
