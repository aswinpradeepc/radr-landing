import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// List of exact paths that should not be redirected
const EXACT_PATHS = [
  // Root path
  '/',
  // Static files and assets
  '/favicon.ico',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/apple-touch-icon.png',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png',
  '/safari-pinned-tab.svg',
  '/site.webmanifest',
  '/browserconfig.xml',
  '/mstile-150x150.png',
  '/robots.txt',
  '/sitemap.xml',
  '/sitemap-0.xml',
  '/file.svg',
  '/globe.svg',
  '/grid.svg',
  '/window.svg',
  '/next.svg',
  '/vercel.svg',
]

// List of path prefixes that should not be redirected
const PREFIX_PATHS = [
  '/api/',
  '/_next/',
]

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // First check exact matches
  const isExactMatch = EXACT_PATHS.includes(path)
  
  // Then check prefix matches
  const isPrefixMatch = PREFIX_PATHS.some(prefix => path.startsWith(prefix))
  
  // Preserve if either match is true
  const shouldPreserve = isExactMatch || isPrefixMatch

  if (shouldPreserve) {
    return NextResponse.next()
  }

  return NextResponse.redirect(new URL(path, 'https://link.radr.in'), {
    status: 307,
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    }
  })
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
