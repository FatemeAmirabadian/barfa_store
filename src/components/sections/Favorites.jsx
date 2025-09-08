export default function Favorites() {
  const favoriteProducts = [
    {
      id: 1,
      title: "کفش اسپرت مردانه",
      price: 1200000,
      image: "/images/products/favorite-shoes.jpg",
    },
    {
      id: 2,
      title: "هدفون بی‌سیم",
      price: 950000,
      image: "/images/products/favorite-headphones.jpg",
    },
    {
      id: 3,
      title: "کیف دستی زنانه",
      price: 450000,
      image: "/images/products/favorite-bag.jpg",
    },
    {
      id: 4,
      title: "ساعت هوشمند",
      price: 2500000,
      image: "/images/products/favorite-watch.jpg",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          محصولات مورد علاقه
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {favoriteProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
                <span className="text-blue-600 font-bold">
                  {product.price.toLocaleString()} تومان
                </span>
                <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  افزودن به سبد
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
