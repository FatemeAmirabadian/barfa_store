import ProductTable from "@/components/adminPanel/ProductTable";
import Link from "next/link";

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

export default function ProductsPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">لیست محصولات</h1>
        <Link
          href="/admin/products/newProduct"
          className="text-lg font-semibold text-white bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition-colors"
        >
          افزودن محصول جدید
        </Link>
      </div>

      <ProductTable products={products} />
    </div>
  );
}
