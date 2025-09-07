/** @type {import('next').NextConfig} */
const nextConfig = {
    matcher: [
      "/admin/:path*",  // همه مسیرهای ادمین
    ],
  };
  module.exports = nextConfig;
  