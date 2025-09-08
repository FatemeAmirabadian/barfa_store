import React from "react";
import Link from "next/link";
import SectionCard from "./SectionCard";

export default function Categories() {
  const categories = [
    {
      id: 1,
      title: "کفش",
      image: "/images/logo/logo-icon.svg",
      link: "/products/shoes",
    },
    {
      id: 2,
      title: "الکترونیک",
      image: "/images/logo/logo-icon.svg",
      link: "/products/electronics",
    },
    {
      id: 3,
      title: "مد و پوشاک",
      image: "/images/logo/logo-icon.svg",
      link: "/products/fashion",
    },
    {
      id: 4,
      title: "ورزشی",
      image: "/images/logo/logo-icon.svg",
      link: "/products/sport",
    },
    {
      id: 5,
      title: "کتاب",
      image: "/images/logo/logo-icon.svg",
      link: "/products/books",
    },
    {
      id: 6,
      title: "زیبایی",
      image: "/images/logo/logo-icon.svg",
      link: "/products/beauty",
    },
    {
      id: 7,
      title: "خوراکی",
      image: "/images/logo/logo-icon.svg",
      link: "/products/food",
    },
    {
      id: 8,
      title: "خانه و آشپزخانه",
      image: "/images/logo/logo-icon.svg",
      link: "/products/home",
    },
    {
      id: 9,
      title: "لوازم تحریر",
      image: "/images/logo/logo-icon.svg",
      link: "/products/stationery",
    },
    {
      id: 10,
      title: "اسباب‌بازی",
      image: "/images/logo/logo-icon.svg",
      link: "/products/toys",
    },
    {
      id: 11,
      title: "ابزارآلات",
      image: "/images/logo/logo-icon.svg",
      link: "/products/tools",
    },
    {
      id: 12,
      title: "ماشین و خودرو",
      image: "/images/logo/logo-icon.svg",
      link: "/products/cars",
    },
    {
      id: 13,
      title: "ساعت و جواهرات",
      image: "/images/logo/logo-icon.svg",
      link: "/products/jewelry",
    },
    {
      id: 14,
      title: "صوتی و تصویری",
      image: "/images/logo/logo-icon.svg",
      link: "/products/audio",
    },
    {
      id: 15,
      title: "کامپیوتر و لپ‌تاپ",
      image: "/images/logo/logo-icon.svg",
      link: "/products/computers",
    },
    {
      id: 16,
      title: "موبایل و تبلت",
      image: "/images/logo/logo-icon.svg",
      link: "/products/mobile",
    },
    {
      id: 17,
      title: "ورزش و سلامت",
      image: "/images/logo/logo-icon.svg",
      link: "/products/health",
    },
    {
      id: 18,
      title: "سرگرمی و بازی",
      image: "/images/logo/logo-icon.svg",
      link: "/products/entertainment",
    },
    {
      id: 19,
      title: "مد و زیورآلات",
      image: "/images/logo/logo-icon.svg",
      link: "/products/accessories",
    },
    {
      id: 20,
      title: "کودک و نوزاد",
      image: "/images/logo/logo-icon.svg",
      link: "/products/kids",
    },
  ];

  return (
    <SectionCard>
      <div
        className="grid grid-flow-col gap-4 overflow-x-auto px-2 py-5
    [&::-webkit-scrollbar]:h-2
    [&::-webkit-scrollbar-track]:bg-blue-100 
    [&::-webkit-scrollbar-track]:rounded-full
    [&::-webkit-scrollbar-thumb]:bg-blue-500 
    [&::-webkit-scrollbar-thumb]:rounded-full
    [&::-webkit-scrollbar-thumb:hover]:bg-blue-600"
      >
        {categories.map((category) => (
          <Link
            key={category.id}
            href={category.link}
            className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover"
            />
            <h1>{category.title}</h1>
          </Link>
        ))}
      </div>
    </SectionCard>
  );
}
