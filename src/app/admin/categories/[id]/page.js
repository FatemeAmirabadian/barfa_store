// app/admin/categories/[id]/page.jsx
"use client";
import { useParams } from "next/navigation";

const categories = [
  { id: 1, name: "نوشت افزار", productCount: 12, status: "فعال" },
  { id: 2, name: "هنری", productCount: 5, status: "فعال" },
  { id: 3, name: "لوازم تحریر ویژه", productCount: 0, status: "غیرفعال" },
];

export default function CategoryDetailPage() {
  const params = useParams();
  const catId = parseInt(params.id);
  const category = categories.find((c) => c.id === catId);

  if (!category) return <p className="p-6">دسته‌بندی پیدا نشد!</p>;

  return (
    <div className="p-6 max-w-lg">
      <h1 className="text-3xl font-bold mb-4">جزئیات دسته‌بندی #{category.id}</h1>
      <p className="mb-2"><strong>نام دسته‌بندی:</strong> {category.name}</p>
      <p className="mb-2"><strong>تعداد محصولات:</strong> {category.productCount}</p>
      <p className="mb-2"><strong>وضعیت:</strong> {category.status}</p>
      {/* اینجا می‌توان فرم ویرایش یا حذف اضافه کرد */}
    </div>
  );
}
