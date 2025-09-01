"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { title: "خانه", href: "/" },
    { title: "محصولات", href: "/products" },
    { title: "درباره ما", href: "/about" },
    { title: "تماس با ما", href: "/contact" },
    { title: "جستجو", href: "/search" },
  ];

  return (
    <nav className="relative">
      {/* دکمه موبایل */}
      <button
        className="md:hidden p-2 bg-gray-800 text-white rounded"
        onClick={() => setOpen(!open)}
      >
        منو
      </button>

      {/* منو اصلی */}
      <ul
        className={`flex flex-col md:flex-row md:space-x-4 rtl:flex-row-reverse absolute md:static bg-gray-800 md:bg-transparent text-white md:text-gray-800 p-4 md:p-0 rounded md:rounded-none transition-all ${
          open ? "top-full right-0" : "top-[-500px]"
        }`}
      >
        {menuItems.map((item) => (
          <li key={item.href} className="mb-2 md:mb-0">
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
