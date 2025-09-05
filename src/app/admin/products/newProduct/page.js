"use client";
import ProductForm from "@/components/adminPanel/ProductForm";

export default function AddProductPage() {
  const handleAddProduct = (productData) => {
    console.log("محصول جدید:", productData);
    alert("محصول جدید اضافه شد! (در کنسول چک کنید)");
    // اینجا می‌توانید API یا دیتابیس را صدا بزنید
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 flex justify-center">
        افزودن محصول جدید
      </h1>
      <ProductForm onSubmit={handleAddProduct} />
    </div>
  );
}
