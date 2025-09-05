// app/admin/components/ProductDetail.jsx
"use client";
import { useState } from "react";

export default function ProductDetail({ product }) {
  const [note, setNote] = useState(product.note || "");

  return (
    <div>
      <p className="mb-2"><strong>شماره محصول:</strong> {product.id}</p>
      <p className="mb-2"><strong>نام محصول:</strong> {product.name}</p>
      <p className="mb-2"><strong>دسته‌بندی:</strong> {product.category}</p>
      <p className="mb-2"><strong>قیمت:</strong> {product.price.toLocaleString()} تومان</p>
      <p className="mb-2"><strong>موجودی:</strong> {product.stock}</p>

      <div className="mb-4">
        <label className="block mb-1 font-medium">یادداشت داخلی:</label>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="یادداشت برای این محصول"
        />
      </div>

      <button
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        onClick={() => alert("یادداشت ذخیره شد!")}
      >
        ذخیره تغییرات
      </button>
    </div>
  );
}
