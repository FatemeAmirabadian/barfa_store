// app/admin/components/OrderTable.jsx
"use client";
import { useRouter } from "next/navigation";

export default function OrderTable({ orders }) {
  const router = useRouter();

  const handleRowClick = (id) => {
    router.push(`/admin/orders/${id}`);
  };

  return (
    <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-3 text-left text-gray-600">شماره</th>
          <th className="p-3 text-left text-gray-600">تاریخ</th>
          <th className="p-3 text-left text-gray-600">نام مشتری</th>
          <th className="p-3 text-left text-gray-600">مبلغ</th>
          <th className="p-3 text-left text-gray-600">وضعیت</th>
          <th className="p-3 text-left text-gray-600">جزییات</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr
            key={order.id}
            className="cursor-pointer hover:bg-blue-50 transition-colors duration-200"
            onClick={() => handleRowClick(order.id)}
          >
            <td className="p-3">{order.id}</td>
            <td className="p-3">{order.date}</td>
            <td className="p-3 font-medium">{order.customer}</td>
            <td className="p-3 text-green-600">{order.total.toLocaleString()} تومان</td>
            <td className="p-3">
              <span className={`px-2 py-1 rounded text-white ${
                order.status === "تکمیل شده" ? "bg-green-500" :
                order.status === "در انتظار" ? "bg-yellow-500" : "bg-gray-500"
              }`}>
                {order.status}
              </span>
            </td>
            <td className="p-3 text-blue-600 font-medium">مشاهده</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
