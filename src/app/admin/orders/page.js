// app/admin/orders/page.jsx
import OrderTable from "@/components/adminPanel/OrderTable";
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
      <h1 className="text-3xl font-bold mb-6">لیست سفارشات</h1>
      <OrderTable orders={orders} />
    </div>
  );
}
