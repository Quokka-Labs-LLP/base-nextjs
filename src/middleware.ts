import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  let token: string | undefined
  if (req.cookies.has('access_token')) {
    token = req.cookies.get('access_token')?.value
  } else if (req.headers.get('Authorization')?.startsWith('Bearer ')) {
    token = req.headers.get('Authorization')?.substring(7)
  }

  if (req.nextUrl.pathname.startsWith('/login') && !token) return

  const response = NextResponse.next()

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
  if ((req.url.includes('/login') && token) || (req.nextUrl.pathname === '/' && token)) {
    return NextResponse.redirect(new URL('/dashboard/posts', req.url))
  }
  return response
}

export const config = {
  matcher: ['/', '/login', '/dashboard/:path*'],
}
