"use client";
import { useRouter } from "next/navigation";

export default function CategoryTable({ categories, onDelete, onToggleStatus }) {
  const router = useRouter();

  const handleRowClick = (id) => {
    router.push(`/admin/categories/${id}`);
  };

  return (
    <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-3 text-left text-gray-600">شماره</th>
          <th className="p-3 text-left text-gray-600">نام دسته‌بندی</th>
          <th className="p-3 text-left text-gray-600">تعداد محصولات</th>
          <th className="p-3 text-left text-gray-600">وضعیت</th>
          <th className="p-3 text-left text-gray-600">عملیات</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((cat) => (
          <tr
            key={cat.id}
            className="hover:bg-blue-50 transition-colors duration-200"
          >
            <td className="p-3">{cat.id}</td>
            <td className="p-3 font-medium">{cat.name}</td>
            <td className="p-3">{cat.productCount}</td>
            <td className="p-3">
              <button
                onClick={() => onToggleStatus(cat.id)}
                className={`px-2 py-1 rounded text-white ${
                  cat.status === "فعال" ? "bg-green-500" : "bg-gray-500"
                } hover:opacity-80`}
              >
                {cat.status}
              </button>
            </td>
            <td className="p-3 space-x-2">
              <button
                onClick={() => handleRowClick(cat.id)}
                className="text-blue-600 font-medium hover:underline"
              >
                ویرایش
              </button>
              <button
                onClick={() => onDelete(cat.id)}
                className="text-red-600 font-medium hover:underline"
              >
                حذف
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
