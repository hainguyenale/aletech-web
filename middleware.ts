import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from '@/lib/i18n'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip internal paths, api, studio, and static files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/studio') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next()
  }

  // Check if pathname already has locale
  const pathnameHasLocale = SUPPORTED_LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // Geo-blocking for investors (Vietnam only)
  // Allow access if country header is missing (local dev, non-Vercel hosting)
  if (pathname.includes('/investors')) {
    const country = request.headers.get('x-vercel-ip-country')
    // Only block if we definitively know it's NOT Vietnam
    if (country && country !== 'VN') {
      const locale = pathnameHasLocale
        ? pathname.split('/')[1]
        : DEFAULT_LOCALE
      return NextResponse.redirect(new URL(`/${locale}/404`, request.url))
    }
  }

  // Redirect to default locale if no locale in path
  if (!pathnameHasLocale) {
    const url = request.nextUrl.clone()
    url.pathname = `/${DEFAULT_LOCALE}${pathname}`
    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|api|studio|.*\\..*).*)'],
}
