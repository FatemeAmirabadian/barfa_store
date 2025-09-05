// app/admin/components/DiscountForm.jsx
"use client";
import { useState } from "react";

export default function DiscountForm({ onSubmit, initialData = {} }) {
  const [name, setName] = useState(initialData.name || "");
  const [code, setCode] = useState(initialData.code || "");
  const [amount, setAmount] = useState(initialData.amount || "");
  const [start, setStart] = useState(initialData.start || "");
  const [end, setEnd] = useState(initialData.end || "");
  const [status, setStatus] = useState(initialData.status || "فعال");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, code, amount, start, end, status });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 border border-gray-200 rounded-lg shadow-sm"
    >
      <div className="mb-4">
        <label className="block mb-1 font-medium">نام تخفیف:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="نام تخفیف را وارد کنید"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">کد تخفیف:</label>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="کد تخفیف"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">مقدار تخفیف:</label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="مثال: 10% یا 5000"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">تاریخ شروع:</label>
          <input
            type="date"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">تاریخ پایان:</label>
          <input
            type="date"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">وضعیت:</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="فعال">فعال</option>
          <option value="غیرفعال">غیرفعال</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        ایجاد تخفیف
      </button>
    </form>
  );
}
