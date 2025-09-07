"use client"
import ProductForm from "@/components/adminPanel/ProductForm";

export default function NewProductPage() {
  const handleSaveProduct = (data) => {
    console.log("محصول جدید:", data);
    // اینجا می‌تونی API برای ذخیره محصول بزنی
  };

  return (
    <div className="p-4 sm:p-8 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">افزودن محصول جدید</h1>
      <ProductForm onSubmit={handleSaveProduct} />
    </div>
  );
}
