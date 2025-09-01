export default function ProductDetail({ params }) {
    const { id } = params;
  
    const product = { id, name: "کفش ورزشی", price: 120000, description: "کفش راحت و سبک" };
  
    return (
      <main className="p-4 min-h-screen">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p>قیمت: {product.price.toLocaleString()} تومان</p>
        <p>{product.description}</p>
      </main>
    );
  }
  