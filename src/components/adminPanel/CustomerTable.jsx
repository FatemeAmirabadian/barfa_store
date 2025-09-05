"use client";
import { useRouter } from "next/navigation";

export default function CustomerTable({ customers, onDelete, onToggleStatus }) {
  const router = useRouter();

  const handleRowClick = (id) => {
    router.push(`/admin/customers/${id}`);
  };

  return (
    <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-3 text-left text-gray-600">شماره</th>
          <th className="p-3 text-left text-gray-600">نام مشتری</th>
          <th className="p-3 text-left text-gray-600">ایمیل</th>
          <th className="p-3 text-left text-gray-600">تعداد سفارشات</th>
          <th className="p-3 text-left text-gray-600">وضعیت</th>
          <th className="p-3 text-left text-gray-600">عملیات</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((cust) => (
          <tr
            key={cust.id}
            className="hover:bg-blue-50 transition-colors duration-200"
          >
            <td className="p-3">{cust.id}</td>
            <td className="p-3 font-medium">{cust.name}</td>
            <td className="p-3">{cust.email}</td>
            <td className="p-3">{cust.orderCount}</td>
            <td className="p-3">
              <button
                onClick={() => onToggleStatus(cust.id)}
                className={`px-2 py-1 rounded text-white ${
                  cust.status === "فعال" ? "bg-green-500" : "bg-gray-500"
                } hover:opacity-80`}
              >
                {cust.status}
              </button>
            </td>
            <td className="p-3 space-x-2">
              <button
                onClick={() => handleRowClick(cust.id)}
                className="text-blue-600 font-medium hover:underline"
              >
                ویرایش
              </button>
              <button
                onClick={() => onDelete(cust.id)}
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
