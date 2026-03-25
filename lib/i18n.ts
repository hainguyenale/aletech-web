export const SUPPORTED_LOCALES = ['en', 'vi'] as const
export const DEFAULT_LOCALE = 'en'

export type Locale = (typeof SUPPORTED_LOCALES)[number]

export function isValidLocale(locale: string): locale is Locale {
  return SUPPORTED_LOCALES.includes(locale as Locale)
}
