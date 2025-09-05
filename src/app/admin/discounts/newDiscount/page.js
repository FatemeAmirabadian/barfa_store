// app/admin/categories/new/page.jsx
"use client";
import DiscountForm from "@/components/adminPanel/DiscountForm";
import { useState } from "react";

export default function NewCategoryPage() {
  const [categories, setCategories] = useState([]);

  const handleAddCategory = (newCategory) => {
    const id = categories.length ? categories[categories.length - 1].id + 1 : 1;
    setCategories([...categories, { id, ...newCategory }]);
    alert("دسته‌بندی جدید اضافه شد! (در کنسول چک کنید)");
    console.log("دسته‌بندی جدید:", { id, ...newCategory });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 flex justify-center">
        افزودن دسته‌بندی جدید
      </h1>
      <DiscountForm onSubmit={handleAddCategory} />
    </div>
  );
}
