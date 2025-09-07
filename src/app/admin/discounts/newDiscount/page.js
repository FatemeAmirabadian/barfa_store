"use client";
import DiscountForm from "@/components/adminPanel/DiscountForm";
import { useState } from "react";

export default function NewDiscountPage() {
  const [discounts, setDiscounts] = useState([]);

  const handleAddDiscount = (newDiscount) => {
    const id = discounts.length ? discounts[discounts.length - 1].id + 1 : 1;
    setDiscounts([...discounts, { id, ...newDiscount }]);
    alert("تخفیف جدید اضافه شد! (در کنسول چک کنید)");
    console.log("تخفیف جدید:", { id, ...newDiscount });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 flex justify-center">
        افزودن تخفیف جدید
      </h1>
      <DiscountForm onSubmit={handleAddDiscount} />
    </div>
  );
}
