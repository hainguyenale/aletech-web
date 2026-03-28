"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import FadeIn from "@/components/animations/fade-in"
import { useLang } from "@/hooks/use-lang"
import type { ContactIRData } from "@/lib/types/investors"

interface IRContactProps {
  data: ContactIRData
}

const t = {
  en: {
    email: "Email:",
    phone: "Phone:",
    address: "Address:",
    subscribe: "Subscribe to IR Updates",
    requestKit: "Request Investor Kit",
    emailTeam: "Email IR Team",
  },
  vi: {
    email: "Email:",
    phone: "Điện thoại:",
    address: "Địa chỉ:",
    subscribe: "Đăng ký Nhận tin IR",
    requestKit: "Yêu cầu Tài liệu Nhà đầu tư",
    emailTeam: "Gửi Email cho Đội IR",
  },
}

export default function IRContact({ data }: IRContactProps) {
  const language = useLang()
  const labels = t[language] || t["en"]

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <FadeIn>
          <motion.div
            className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12"
            whileHover={{
              boxShadow: "0 10px 30px -15px rgba(48, 200, 201, 0.2)",
              borderColor: "rgba(48, 200, 201, 0.3)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{data.title}</h2>
                <p className="text-muted-foreground mb-6">{data.description}</p>

                <div className="space-y-4">
                  <div>
                    <p className="font-medium">{labels.email}</p>
                    <p className="text-primary">{data.email}</p>
                  </div>
                  <div>
                    <p className="font-medium">{labels.phone}</p>
                    <p className="text-muted-foreground">{data.phone}</p>
                  </div>
                  <div>
                    <p className="font-medium">{labels.address}</p>
                    {data.address.map((line, index) => (
                      <p key={index} className="text-muted-foreground">{line}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-primary hover:bg-primary/90 text-white w-full">
                    {labels.subscribe}
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white w-full"
                  >
                    {labels.requestKit}
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white w-full"
                    onClick={() => (window.location.href = `mailto:${data.email}`)}
                  >
                    {labels.emailTeam}
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  )
}
