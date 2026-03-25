"use client"

import { useParams } from "next/navigation"
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n"

export function useLang(): Locale {
  const params = useParams()
  return (params?.lang as Locale) || DEFAULT_LOCALE
}
