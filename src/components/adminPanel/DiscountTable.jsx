// app/admin/components/DiscountTable.jsx
"use client";
import { useRouter } from "next/navigation";

export default function DiscountTable({ discounts, onDelete, onToggleStatus }) {
  const router = useRouter();

  const handleEdit = (id) => {
    router.push(`/admin/discounts/${id}`);
  };

  return (
    <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-3 text-left text-gray-600">شماره</th>
          <th className="p-3 text-left text-gray-600">نام تخفیف</th>
          <th className="p-3 text-left text-gray-600">کد تخفیف</th>
          <th className="p-3 text-left text-gray-600">مقدار</th>
          <th className="p-3 text-left text-gray-600">تاریخ شروع</th>
          <th className="p-3 text-left text-gray-600">تاریخ پایان</th>
          <th className="p-3 text-left text-gray-600">وضعیت</th>
          <th className="p-3 text-left text-gray-600">عملیات</th>
        </tr>
      </thead>
      <tbody>
        {discounts.map((disc) => (
          <tr
            key={disc.id}
            className="hover:bg-blue-50 transition-colors duration-200"
          >
            <td className="p-3">{disc.id}</td>
            <td className="p-3 font-medium">{disc.name}</td>
            <td className="p-3">{disc.code}</td>
            <td className="p-3">{disc.amount}</td>
            <td className="p-3">{disc.start}</td>
            <td className="p-3">{disc.end}</td>
            <td className="p-3">
              <button
                onClick={() => onToggleStatus(disc.id)}
                className={`px-2 py-1 rounded text-white ${
                  disc.status === "فعال" ? "bg-green-500" : "bg-gray-500"
                } hover:opacity-80`}
              >
                {disc.status}
              </button>
            </td>
            <td className="p-3 space-x-2">
              <button
                onClick={() => handleEdit(disc.id)}
                className="text-blue-600 font-medium hover:underline"
              >
                ویرایش
              </button>
              <button
                onClick={() => onDelete(disc.id)}
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
