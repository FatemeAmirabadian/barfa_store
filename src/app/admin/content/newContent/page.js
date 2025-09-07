// app/admin/content/new/page.jsx
"use client";
import ContentForm from "@/components/adminPanel/ContentForm";
import { useState } from "react";

export default function NewContentPage() {
  const [contents, setContents] = useState([]);

  const handleAddContent = (newContent) => {
    const id = contents.length ? contents[contents.length - 1].id + 1 : 1;
    setContents([...contents, { id, ...newContent }]);
    alert("محتوای جدید اضافه شد! (در کنسول چک کنید)");
    console.log("محتوای جدید:", { id, ...newContent });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 flex justify-center">افزودن محتوای جدید</h1>
      <ContentForm onSubmit={handleAddContent} />
    </div>
  );
}
