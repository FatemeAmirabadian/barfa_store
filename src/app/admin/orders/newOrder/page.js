"use client";
import OrderForm from "@/components/adminPanel/OrderForm";
import { useState } from "react";

export default function NewCustomerPage() {
  const [customers, setCustomers] = useState([]);

  const handleAddCustomer = (newCustomer) => {
    const id = customers.length ? customers[customers.length - 1].id + 1 : 1;
    setCustomers([...customers, { id, ...newCustomer }]);
    alert("سفارش جدید اضافه شد! (در کنسول چک کنید)");
    console.log("سفارش جدید:", { id, ...newCustomer });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 flex justify-center">افزودن سفارش جدید</h1>
      <OrderForm onSubmit={handleAddCustomer} />
    </div>
  );
}
