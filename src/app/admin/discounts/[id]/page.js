// app/admin/discounts/[id]/page.jsx
"use client";
import { useParams } from "next/navigation";

const discounts = [
  { id: 1, name: "تخفیف عیدانه", code: "EID10", amount: "10%", start: "1403/12/01", end: "1403/12/15", status: "فعال" },
  { id: 2, name: "تخفیف ویژه مشتریان", code: "VIP20", amount: "20%", start: "1403/11/01", end: "1403/11/30", status: "فعال" },
  { id: 3, name: "تخفیف تابستانه", code: "SUMMER5", amount: "5%", start: "1403/04/01", end: "1403/04/30", status: "غیرفعال" },
];

export default function DiscountDetailPage() {
  const params = useParams();
  const discId = parseInt(params.id);
  const discount = discounts.find((d) => d.id === discId);

  if (!discount) return <p className="p-6">تخفیف پیدا نشد!</p>;

  return (
    <div className="p-6 max-w-lg">
      <h1 className="text-3xl font-bold mb-4">جزئیات تخفیف #{discount.id}</h1>
      <p className="mb-2"><strong>نام تخفیف:</strong> {discount.name}</p>
      <p className="mb-2"><strong>کد تخفیف:</strong> {discount.code}</p>
      <p className="mb-2"><strong>مقدار:</strong> {discount.amount}</p>
      <p className="mb-2"><strong>تاریخ شروع:</strong> {discount.start}</p>
      <p className="mb-2"><strong>تاریخ پایان:</strong> {discount.end}</p>
      <p className="mb-2"><strong>وضعیت:</strong> {discount.status}</p>
      {/* اینجا می‌توان فرم ویرایش یا حذف اضافه کرد */}
    </div>
  );
}
