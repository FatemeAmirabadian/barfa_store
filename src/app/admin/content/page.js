"use client";
import { useState } from "react";
import ContentTable from "@/components/adminPanel/ContentTable";
import Link from "next/link";

export default function ContentPage() {
  const [contents, setContents] = useState([
    {
      id: 1,
      title: "درباره ما",
      type: "صفحه ثابت",
      status: "فعال",
      createdAt: "1403/01/01",
    },
    {
      id: 2,
      title: "راهنمای خرید",
      type: "مقاله",
      status: "فعال",
      createdAt: "1403/02/15",
    },
    {
      id: 3,
      title: "بنر تابستانه",
      type: "بنر",
      status: "غیرفعال",
      createdAt: "1403/04/10",
    },
  ]);

  const handleDelete = (id) => {
    if (confirm("آیا از حذف این محتوا مطمئن هستید؟")) {
      setContents(contents.filter((c) => c.id !== id));
    }
  };

  const handleToggleStatus = (id) => {
    setContents(
      contents.map((c) =>
        c.id === id
          ? { ...c, status: c.status === "فعال" ? "غیرفعال" : "فعال" }
          : c
      )
    );
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">مدیریت محتوا</h1>
        <Link
          href="/admin/content/newContent"
          className="text-lg font-semibold text-white bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition-colors"
        >
          افزودن محتوا جدید
        </Link>
      </div>

      <ContentTable
        contents={contents}
        onDelete={handleDelete}
        onToggleStatus={handleToggleStatus}
      />
    </div>
  );
}
