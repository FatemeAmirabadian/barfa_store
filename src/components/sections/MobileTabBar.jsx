"use client";
import { useState } from "react";
import Link from "next/link";

const MobileTabBar = () => {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    {
      id: "home",
      href: "/",
      label: "خانه",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      ),
    },
    {
      id: "categories",
      href: "/categories",
      label: "دسته‌بندی",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h7"
        />
      ),
    },
    {
      id: "search",
      href: "/search",
      label: "جستجو",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      ),
    },
    {
      id: "cart",
      href: "/cart",
      label: "سبد خرید",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 
          2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 
          4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      ),
      badge: 3,
    },
    {
      id: "profile",
      href: "/profile",
      label: "پروفایل",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 
          14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      ),
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-around items-center bg-white border-t border-gray-200 py-2 z-50 shadow-lg md:hidden">
      {tabs.map((tab) => (
        <Link key={tab.id} href={tab.href}>
          <span
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center px-3 py-1 rounded-lg transition-all duration-200 ${
              activeTab === tab.id
                ? "text-blue-600 bg-blue-50"
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {tab.icon}
              </svg>
              {tab.badge && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {tab.badge}
                </span>
              )}
            </div>
            <span className="text-xs mt-1">{tab.label}</span>
          </span>
        </Link>
      ))}
    </div>
  );
};

export default MobileTabBar;
