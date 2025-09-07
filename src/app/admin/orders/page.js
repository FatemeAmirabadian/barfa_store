// app/admin/orders/page.jsx
import OrderTable from "@/components/adminPanel/OrderTable";
import Link from "next/link";
const orders = [
  {
    id: 1,
    date: "1404/06/15",
    customer: "Ali",
    total: 120000,
    status: "تکمیل شده",
  },
  {
    id: 2,
    date: "1404/06/16",
    customer: "Sara",
    total: 250000,
    status: "در انتظار",
  },
  {
    id: 3,
    date: "1404/06/17",
    customer: "Reza",
    total: 90000,
    status: "کنسل شده",
  },
];

export default function OrdersPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold mb-6">لیست سفارشات</h1>
        <Link
          href="/admin/orders/newOrder"
          className="text-lg font-semibold text-white bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition-colors"
        >
          افزودن سفارش جدید
        </Link>
      </div>
      <OrderTable orders={orders} />
    </div>
  );
}
