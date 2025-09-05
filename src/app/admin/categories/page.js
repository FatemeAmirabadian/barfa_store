"use client";
import { useState } from "react";
import CategoryTable from "@/components/adminPanel/CategoryTable";
import Link from "next/link";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([
    { id: 1, name: "نوشت افزار", productCount: 12, status: "فعال" },
    { id: 2, name: "هنری", productCount: 5, status: "فعال" },
    { id: 3, name: "لوازم تحریر ویژه", productCount: 0, status: "غیرفعال" },
  ]);

  const handleDelete = (id) => {
    if (confirm("آیا از حذف این دسته‌بندی مطمئن هستید؟")) {
      setCategories(categories.filter((cat) => cat.id !== id));
    }
  };

  const handleToggleStatus = (id) => {
    setCategories(
      categories.map((cat) =>
        cat.id === id
          ? { ...cat, status: cat.status === "فعال" ? "غیرفعال" : "فعال" }
          : cat
      )
    );
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">دسته‌بندی‌ها</h1>
        <Link
          href="/admin/categories/new"
          className="text-lg font-semibold text-white bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition-colors"
        >
          افزودن دسته‌بندی جدید
        </Link>
      </div>

      <CategoryTable
        categories={categories}
        onDelete={handleDelete}
        onToggleStatus={handleToggleStatus}
      />
    </div>
  );
}
