import Header from "@/components/common/Header";
import "./globals.css";
import MobileTabBar from "@/components/sections/MobileTabBar";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "فروشگاه ما",
  description: "...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-gray-100 min-h-screen">
        <Header/>
        {children}
        <Footer/>
        <MobileTabBar/>
        </body>
    </html>
  );
}