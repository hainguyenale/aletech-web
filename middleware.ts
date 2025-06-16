import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Check if the request is for the investors page
  if (request.nextUrl.pathname.startsWith('/investors')) {
    // Get the user's country from the request headers
    const country = request.headers.get('x-vercel-ip-country')

    // If the user is not from Vietnam, redirect to 404
    if (country !== 'VN') {
      return NextResponse.redirect(new URL('/404', request.url))
    }
  }

  return NextResponse.next()
}

// Configure the middleware to run only on the investors page
export const config = {
  matcher: '/investors/:path*',
} 