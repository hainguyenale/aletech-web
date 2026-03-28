"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import FadeIn from "@/components/animations/fade-in"
import { useLang } from "@/hooks/use-lang"
import type { ContactIRData } from "@/lib/types/investors"

interface IRContactProps {
  data: ContactIRData
}

const t: Record<string, { subscribe: string; requestKit: string; emailTeam: string }> = {
  en: { subscribe: "Subscribe to IR Updates", requestKit: "Request Investor Kit", emailTeam: "Email IR Team" },
  vi: { subscribe: "Đăng ký Nhận tin IR", requestKit: "Yêu cầu Tài liệu Nhà đầu tư", emailTeam: "Gửi Email cho Đội IR" },
}

export default function IRContact({ data }: IRContactProps) {
  const language = useLang()
  const labels = t[language] || t["en"]

  return (
    <section className="py-24 bg-gradient-to-t from-primary/5 to-background">
      <div className="max-w-[1200px] mx-auto px-4">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-4">Investor Relations</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">{data.title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-10">{data.description}</p>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <Button className="bg-primary hover:bg-primary/90 text-white px-10 h-12 text-sm">{labels.subscribe}</Button>
              <Button variant="ghost" className="text-primary hover:bg-primary/10 px-8 h-12 text-sm">{labels.requestKit}</Button>
            </div>

            <div className="h-px bg-border mb-8" />

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <a href={`mailto:${data.email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" />{data.email}
              </a>
              <a href={`tel:${data.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 text-primary" />{data.phone}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />{data.address.join(", ")}
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
