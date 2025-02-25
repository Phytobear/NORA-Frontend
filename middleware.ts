import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // TEMPORARY: Allow all access for testing
  // TODO: Implement proper authentication checks here
  // This should be replaced with real authentication logic:
  // - Check for valid session token
  // - Verify user permissions
  // - Handle role-based access
  return NextResponse.next()

  // Original protection logic - commented out for now
  /*
  const isAuthenticated = false
  const hasCompletedOnboarding = false

  const { pathname } = request.nextUrl

  if (!isAuthenticated && pathname !== "/" && !pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  if (isAuthenticated && !hasCompletedOnboarding && pathname !== "/onboarding") {
    return NextResponse.redirect(new URL("/onboarding", request.url))
  }
  */
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}

