export default function ProductsPage() {
    const products = [
      { id: 1, name: "کفش ورزشی", price: 120000 },
      { id: 2, name: "هدفون", price: 85000 },
      { id: 3, name: "تی‌شرت", price: 45000 },
    ];
  
    return (
      <main className="p-4 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">محصولات</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map(product => (
            <div key={product.id} className="border p-2 rounded shadow">
              <h2 className="font-bold">{product.name}</h2>
              <p>قیمت: {product.price.toLocaleString()} تومان</p>
            </div>
          ))}
        </div>
      </main>
    );
  }
  