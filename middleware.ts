import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";

export async function middleware(request: any) {
  let response = NextResponse.next();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },

        setAll(cookies) {
          cookies.forEach(({ name, value }) => response.cookies.set(name, value));
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const protectedRoutes = [
    "/workspace",
    "/dashboard",
    "/settings",
    "/ai-quotes",
    "/quote-history",
  ];

  const isProtected = protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route));

  if (isProtected && !user) {
    return NextResponse.redirect(new URL("/signup", request.url));
  }

  return response;
}

export const config = {
  matcher: [
    "/workspace/:path*",
    "/dashboard/:path*",
    "/settings/:path*",
    "/ai-quotes/:path*",
    "/quote-history/:path*",
  ],
};