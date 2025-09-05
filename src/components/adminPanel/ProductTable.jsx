// app/admin/components/ProductTable.jsx
"use client";
import { useRouter } from "next/navigation";

export default function ProductTable({ products }) {
  const router = useRouter();

  const handleRowClick = (id) => {
    router.push(`/admin/products/${id}`);
  };

  return (
    <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-3 text-left text-gray-600">شماره</th>
          <th className="p-3 text-left text-gray-600">نام محصول</th>
          <th className="p-3 text-left text-gray-600">دسته‌بندی</th>
          <th className="p-3 text-left text-gray-600">قیمت</th>
          <th className="p-3 text-left text-gray-600">موجودی</th>
          <th className="p-3 text-left text-gray-600">جزییات محصول</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr
            key={product.id}
            className="cursor-pointer hover:bg-green-50 transition-colors duration-200"
            onClick={() => handleRowClick(product.id)}
          >
            <td className="p-3">{product.id}</td>
            <td className="p-3 font-medium">{product.name}</td>
            <td className="p-3">{product.category}</td>
            <td className="p-3 text-blue-600">{product.price.toLocaleString()} تومان</td>
            <td className="p-3">{product.stock}</td>
            <td className="p-3 text-green-600 font-medium">مشاهده</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
