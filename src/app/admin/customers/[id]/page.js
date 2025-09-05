// app/admin/customers/[id]/page.jsx
"use client";
import { useParams } from "next/navigation";

const customers = [
  { id: 1, name: "سارا احمدی", email: "sara@example.com", orderCount: 5, status: "فعال" },
  { id: 2, name: "محمد رضایی", email: "mohammad@example.com", orderCount: 2, status: "فعال" },
  { id: 3, name: "لیلا موسوی", email: "lila@example.com", orderCount: 0, status: "غیرفعال" },
];

export default function CustomerDetailPage() {
  const params = useParams();
  const custId = parseInt(params.id);
  const customer = customers.find((c) => c.id === custId);

  if (!customer) return <p className="p-6">مشتری پیدا نشد!</p>;

  return (
    <div className="p-6 max-w-lg">
      <h1 className="text-3xl font-bold mb-4">جزئیات مشتری #{customer.id}</h1>
      <p className="mb-2"><strong>نام:</strong> {customer.name}</p>
      <p className="mb-2"><strong>ایمیل:</strong> {customer.email}</p>
      <p className="mb-2"><strong>تعداد سفارشات:</strong> {customer.orderCount}</p>
      <p className="mb-2"><strong>وضعیت:</strong> {customer.status}</p>
      {/* اینجا می‌توان فرم ویرایش یا حذف اضافه کرد */}
    </div>
  );
}
