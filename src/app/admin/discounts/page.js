"use client";
import { useState } from "react";
import DiscountTable from "@/components/adminPanel/DiscountTable";
import Link from "next/link";

export default function DiscountsPage() {
  const [discounts, setDiscounts] = useState([
    {
      id: 1,
      name: "تخفیف عیدانه",
      code: "EID10",
      amount: "10%",
      start: "1403/12/01",
      end: "1403/12/15",
      status: "فعال",
    },
    {
      id: 2,
      name: "تخفیف ویژه مشتریان",
      code: "VIP20",
      amount: "20%",
      start: "1403/11/01",
      end: "1403/11/30",
      status: "فعال",
    },
    {
      id: 3,
      name: "تخفیف تابستانه",
      code: "SUMMER5",
      amount: "5%",
      start: "1403/04/01",
      end: "1403/04/30",
      status: "غیرفعال",
    },
  ]);

  const handleDelete = (id) => {
    if (confirm("آیا از حذف این تخفیف مطمئن هستید؟")) {
      setDiscounts(discounts.filter((disc) => disc.id !== id));
    }
  };

  const handleToggleStatus = (id) => {
    setDiscounts(
      discounts.map((disc) =>
        disc.id === id
          ? { ...disc, status: disc.status === "فعال" ? "غیرفعال" : "فعال" }
          : disc
      )
    );
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">تخفیف‌ها</h1>
        <Link
          href="/admin/discounts/newDiscount"
          className="text-lg font-semibold text-white bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition-colors"
        >
          افزودن تخفیف جدید
        </Link>
      </div>

      <DiscountTable
        discounts={discounts}
        onDelete={handleDelete}
        onToggleStatus={handleToggleStatus}
      />
    </div>
  );
}
