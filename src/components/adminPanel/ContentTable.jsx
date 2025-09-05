// app/admin/components/ContentTable.jsx
"use client";
import { useRouter } from "next/navigation";

export default function ContentTable({ contents, onDelete, onToggleStatus }) {
  const router = useRouter();

  const handleEdit = (id) => {
    router.push(`/admin/content/${id}`);
  };

  return (
    <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-3 text-left text-gray-600">شماره</th>
          <th className="p-3 text-left text-gray-600">عنوان</th>
          <th className="p-3 text-left text-gray-600">نوع محتوا</th>
          <th className="p-3 text-left text-gray-600">تاریخ ایجاد</th>
          <th className="p-3 text-left text-gray-600">وضعیت</th>
          <th className="p-3 text-left text-gray-600">عملیات</th>
        </tr>
      </thead>
      <tbody>
        {contents.map((content) => (
          <tr
            key={content.id}
            className="hover:bg-blue-50 transition-colors duration-200"
          >
            <td className="p-3">{content.id}</td>
            <td className="p-3 font-medium">{content.title}</td>
            <td className="p-3">{content.type}</td>
            <td className="p-3">{content.createdAt}</td>
            <td className="p-3">
              <button
                onClick={() => onToggleStatus(content.id)}
                className={`px-2 py-1 rounded text-white ${
                  content.status === "فعال" ? "bg-green-500" : "bg-gray-500"
                } hover:opacity-80`}
              >
                {content.status}
              </button>
            </td>
            <td className="p-3 space-x-2">
              <button
                onClick={() => handleEdit(content.id)}
                className="text-blue-600 font-medium hover:underline"
              >
                ویرایش
              </button>
              <button
                onClick={() => onDelete(content.id)}
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
