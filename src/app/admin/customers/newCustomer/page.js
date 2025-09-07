"use client";
import CustomerForm from "@/components/adminPanel/CustomerForm";
import { useState } from "react";

export default function NewCustomerPage() {
  const [customers, setCustomers] = useState([]);

  const handleAddCustomer = (newCustomer) => {
    const id = customers.length ? customers[customers.length - 1].id + 1 : 1;
    setCustomers([...customers, { id, ...newCustomer }]);
    alert("مشتری جدید اضافه شد! (در کنسول چک کنید)");
    console.log("مشتری جدید:", { id, ...newCustomer });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 flex justify-center">افزودن مشتری جدید</h1>
      <CustomerForm onSubmit={handleAddCustomer} />
    </div>
  );
}
