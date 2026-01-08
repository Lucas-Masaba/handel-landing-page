import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware to block specific routes in production
 * 
 * These routes are disabled because they contain template/placeholder content
 * that doesn't represent Handel Advocates' actual services and information.
 * 
 * Blocked routes:
 * - /privacy - Legal privacy page
 * - /terms - Legal terms page
 * - /faqs - FAQ page
 * - /pricing - Pricing page
 * - /services - Services page
 * - /publications/* - All publication routes
 */
export function middleware(request: NextRequest) {
  // Only apply route blocking in production
  if (process.env.NODE_ENV === 'production') {
    const pathname = request.nextUrl.pathname;

    // List of blocked route patterns in production
    const blockedRoutes = [
      '/privacy',
      '/terms',
      '/faqs',
      '/pricing',
      '/services',
      '/publications', // Blocks /publications page
    ];

    // Check if the current path matches any blocked route
    const isBlocked = blockedRoutes.some((route) => {
      // Exact match or starts with (for nested routes like /publications/*)
      return pathname === route || pathname.startsWith(`${route}/`);
    });

    if (isBlocked) {
      // Redirect to homepage instead of showing 404
      // You can change this to NextResponse.rewrite() for a 404 page
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  // Allow the request to continue for:
  // 1. Development environment (all routes work)
  // 2. Production allowed routes (header links: /, /about, /contact, /projects, /team)
  return NextResponse.next();
}

/**
 * Configure which routes this middleware runs on
 * 
 * This matcher ensures middleware only runs on relevant paths,
 * not on static files (_next/static), API routes, or image optimization
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - Public files (images, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|sitemap|robots|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif)$).*)',
  ],
};
