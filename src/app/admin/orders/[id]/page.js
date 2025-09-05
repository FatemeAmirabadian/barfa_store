// app/admin/orders/[id]/page.jsx
"use client";

import { useParams } from "next/navigation";
import OrderDetail from "@/components/adminPanel/OrderDetail";

const orders = [
  { id: 1, customer: "Ali", total: 120000, items: ["کاغذ A4", "خودکار"] },
  { id: 2, customer: "Sara", total: 250000, items: ["دفترچه", "مداد رنگی"] },
  { id: 3, customer: "Reza", total: 90000, items: ["پاک‌کن", "خط‌کش"] },
];

export default function OrderDetailPage() {
  const params = useParams();
  const orderId = parseInt(params.id);
  const order = orders.find((o) => o.id === orderId);

  if (!order) return <p className="p-6">سفارش پیدا نشد!</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">جزئیات سفارش #{order.id}</h1>
      <OrderDetail order={order} />
      <button
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={() => alert("تغییرات ذخیره شد!")}
      >
        ذخیره تغییرات
      </button>
    </div>
  );
}
