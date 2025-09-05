// app/admin/components/OrderDetail.jsx
"use client";
import { useState } from "react";

export default function OrderDetail({ order }) {
  const [note, setNote] = useState(order.note || "");

  return (
    <div>
      <p className="mb-2">
        <strong>شماره سفارش:</strong> {order.id}
      </p>
      <p className="mb-2">
        <strong>تاریخ:</strong> {order.date}
      </p>
      <p className="mb-2">
        <strong>نام مشتری:</strong> {order.customer}
      </p>
      <p className="mb-2">
        <strong>مبلغ:</strong> {order.total.toLocaleString()} تومان
      </p>
      <p className="mb-2">
        <strong>وضعیت:</strong> {order.status}
      </p>
      <p className="mb-2">
        <strong>موارد سفارش:</strong>
      </p>
      <ul className="list-disc ml-6 mb-4">
        {order.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className="mb-4">
        <label className="block mb-1 font-medium">توضیحات اضافه:</label>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="توضیحات خود را وارد کنید"
        />
      </div>
    </div>
  );
}
