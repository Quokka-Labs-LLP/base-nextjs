import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  let token: string | undefined
  if (request.cookies.has('access_token')) {
    token = request.cookies.get('access_token')?.value
  }

  token = (request.headers.get('Authorization') as string)?.replace(bearerRegex, 'Bearer')
  if (request.nextUrl.pathname.startsWith('/login') && !token) return
  const response = NextResponse.next()
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  if ((request.url.includes('/login') && token) || (request.nextUrl.pathname === '/' && token)) {
    return NextResponse.redirect(new URL('/admin/', request.url))
  }
  return response
}

export const config = {
  matcher: ['/', '/login', '/dashboard/:path*'],
}
