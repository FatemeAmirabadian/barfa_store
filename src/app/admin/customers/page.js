"use client";
import { useState } from "react";
import CustomerTable from "@/components/adminPanel/CustomerTable";
import Link from "next/link";

export default function CustomersPage() {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "سارا احمدی",
      email: "sara@example.com",
      orderCount: 5,
      status: "فعال",
    },
    {
      id: 2,
      name: "محمد رضایی",
      email: "mohammad@example.com",
      orderCount: 2,
      status: "فعال",
    },
    {
      id: 3,
      name: "لیلا موسوی",
      email: "lila@example.com",
      orderCount: 0,
      status: "غیرفعال",
    },
  ]);

  const handleDelete = (id) => {
    if (confirm("آیا از حذف این مشتری مطمئن هستید؟")) {
      setCustomers(customers.filter((cust) => cust.id !== id));
    }
  };

  const handleToggleStatus = (id) => {
    setCustomers(
      customers.map((cust) =>
        cust.id === id
          ? { ...cust, status: cust.status === "فعال" ? "غیرفعال" : "فعال" }
          : cust
      )
    );
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">کاربرها</h1>
        <Link
          href="/admin/customers/newCustomer"
          className="text-lg font-semibold text-white bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition-colors"
        >
          افزودن کاربر جدید
        </Link>
      </div>

      <CustomerTable
        customers={customers}
        onDelete={handleDelete}
        onToggleStatus={handleToggleStatus}
      />
    </div>
  );
}
