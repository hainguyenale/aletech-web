import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/language-context'
import { client } from '@/sanity/lib/client'
import { navbarQuery } from '@/sanity/queries/navbar'

interface NavbarData {
  navLinks: { href: string; label: string }[]
  languageSwitcher: { languages: { code: string; name: string }[] }
}

export default function Navbar() {
  const { language, setLanguage } = useLanguage()
  const [navbarData, setNavbarData] = useState<NavbarData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchNavbarData = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const result = await client.fetch<NavbarData>(navbarQuery, { language })
        if (!result) {
          throw new Error(`No navbar data found for language: ${language}`)
        }
        setNavbarData(result)
      } catch (error) {
        setError(error instanceof Error ? error : new Error('Failed to fetch navbar data'))
        setNavbarData(null)
      } finally {
        setIsLoading(false)
      }
    }

    if (language) {
      fetchNavbarData()
    }
  }, [language])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error loading navigation.</div>
  }

  if (!navbarData) {
    return null
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {navbarData.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="ml-3 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {navbarData.languageSwitcher.languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  )
} 