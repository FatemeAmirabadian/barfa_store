import "./globals.css";

export const metadata = {
  title: "فروشگاه ما",
  description: "...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-gray-100 min-h-screen">{children}</body>
    </html>
  );
}
