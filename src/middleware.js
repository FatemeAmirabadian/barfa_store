import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // همه مسیرهای ادمین به جز صفحه لاگین خودش
  if (pathname.startsWith("/admin") && pathname !== "/adminlogin") {
    const token = req.cookies.get("admin_token")?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/adminlogin", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"], // شامل کل زیرشاخه‌های /admin
};
