// app/admin/products/[id]/page.jsx
"use client";
import { useParams } from "next/navigation";
import ProductDetail from "@/components/adminPanel/ProductDetail";

const products = [
  {
    id: 1,
    name: "دفترچه طرح گل",
    category: "نوشت افزار",
    price: 12000,
    stock: 50,
  },
  {
    id: 2,
    name: "خودکار رنگی",
    category: "نوشت افزار",
    price: 8000,
    stock: 100,
  },
  {
    id: 3,
    name: "مداد رنگی 12 تایی",
    category: "هنری",
    price: 45000,
    stock: 30,
  },
];

export default function ProductDetailPage() {
  const params = useParams();
  const productId = parseInt(params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) return <p className="p-6">محصول پیدا نشد!</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">جزئیات محصول #{product.id}</h1>
      <ProductDetail product={product} />
    </div>
  );
}
