// app/admin/content/[id]/page.jsx
"use client";
import { useParams } from "next/navigation";

const contents = [
  { id: 1, title: "درباره ما", type: "صفحه ثابت", status: "فعال", createdAt: "1403/01/01", body: "این متن درباره ماست..." },
  { id: 2, title: "راهنمای خرید", type: "مقاله", status: "فعال", createdAt: "1403/02/15", body: "این متن راهنمای خرید است..." },
  { id: 3, title: "بنر تابستانه", type: "بنر", status: "غیرفعال", createdAt: "1403/04/10", body: "متن بنر تابستانه..." },
];

export default function ContentDetailPage() {
  const params = useParams();
  const contentId = parseInt(params.id);
  const content = contents.find((c) => c.id === contentId);

  if (!content) return <p className="p-6">محتوا پیدا نشد!</p>;

  return (
    <div className="p-6 max-w-2xl">
      <h1 className="text-3xl font-bold mb-4">جزئیات محتوا #{content.id}</h1>
      <p className="mb-2"><strong>عنوان:</strong> {content.title}</p>
      <p className="mb-2"><strong>نوع محتوا:</strong> {content.type}</p>
      <p className="mb-2"><strong>تاریخ ایجاد:</strong> {content.createdAt}</p>
      <p className="mb-2"><strong>وضعیت:</strong> {content.status}</p>
      <div className="mt-4 p-4 border border-gray-300 rounded">
        <strong>متن محتوا:</strong>
        <p className="mt-2">{content.body}</p>
      </div>
      {/* اینجا می‌توان فرم ویرایش یا حذف اضافه کرد */}
    </div>
  );
}
