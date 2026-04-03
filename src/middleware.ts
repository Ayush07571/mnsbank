import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect /admin routes
  if (pathname.startsWith('/admin')) {
    // Exempt the login page and auth API endpoints
    if (pathname === '/admin/login' || pathname.startsWith('/api/auth')) {
      return NextResponse.next();
    }

    const token = request.cookies.get('admin_session')?.value;
    
    // Validate token exists and matches (in a real app, verify JWT signature)
    if (!token) {
      const loginUrl = new URL('/admin/login', request.url);
      loginUrl.searchParams.set('from', pathname);
      return NextResponse.redirect(loginUrl);
    }
    
    // Very simple token verification against env
    // Token structure: Buffer.from(`${username}:${process.env.JWT_SECRET}`).toString('base64');
    try {
      const decoded = atob(token);
      const [, secret] = decoded.split(':');
      
      // We only check if it matches the expected server secret signing key.
      if (secret !== process.env.JWT_SECRET) {
        return NextResponse.redirect(new URL('/admin/login', request.url));
      }
    } catch {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes that don't need UI-level protection)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
