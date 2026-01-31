import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SUPPORTED_LOCALES, isValidLocale } from '@/lib/i18n'
import { OrganizationJsonLd } from '@/components/json-ld'

interface Props {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  const baseUrl = 'https://aletech.com'

  return {
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        'en': `${baseUrl}/en`,
        'vi': `${baseUrl}/vi`,
        'x-default': `${baseUrl}/en`,
      },
    },
  }
}

export default async function LangLayout({ children, params }: Props) {
  const { lang } = await params

  if (!isValidLocale(lang)) {
    notFound()
  }

  return (
    <>
      <OrganizationJsonLd />
      {children}
    </>
  )
}
