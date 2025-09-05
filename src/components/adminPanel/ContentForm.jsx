// app/admin/components/ContentForm.jsx
"use client";
import { useState } from "react";

export default function ContentForm({ onSubmit, initialData = {} }) {
  const [title, setTitle] = useState(initialData.title || "");
  const [type, setType] = useState(initialData.type || "صفحه ثابت");
  const [status, setStatus] = useState(initialData.status || "فعال");
  const [body, setBody] = useState(initialData.body || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, type, status, body });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-4 border border-gray-200 rounded-lg shadow-sm"
    >
      <div className="mb-4">
        <label className="block mb-1 font-medium">عنوان محتوا:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="عنوان محتوا را وارد کنید"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">نوع محتوا:</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="صفحه ثابت">صفحه ثابت</option>
          <option value="مقاله">مقاله</option>
          <option value="بنر">بنر</option>
        </select>
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

      <div className="mb-4">
        <label className="block mb-1 font-medium">متن محتوا:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="متن محتوا را وارد کنید"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows={6}
          required
        />
      </div>

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        افزودن محتوا
      </button>
    </form>
  );
}
