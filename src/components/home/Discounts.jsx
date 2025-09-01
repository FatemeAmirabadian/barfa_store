export default function Discounts() {
    const discountedProducts = [
      {
        id: 1,
        title: "کفش ورزشی نایک",
        price: 2500000,
        discount: 20,
        image: "/images/products/shoes-nike.jpg",
      },
      {
        id: 2,
        title: "هدفون سونی",
        price: 1500000,
        discount: 15,
        image: "/images/products/sony-headphones.jpg",
      },
      {
        id: 3,
        title: "ساعت هوشمند سامسونگ",
        price: 4800000,
        discount: 10,
        image: "/images/products/samsung-watch.jpg",
      },
    ];
  
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            پیشنهادهای ویژه با تخفیف
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {discountedProducts.map((product) => {
              const finalPrice =
                product.price - (product.price * product.discount) / 100;
  
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-56 object-cover"
                    />
                    <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-3 py-1 rounded-full">
                      %{product.discount} تخفیف
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">
                      {product.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-red-600 font-bold">
                        {finalPrice.toLocaleString()} تومان
                      </span>
                      <span className="line-through text-gray-400 text-sm">
                        {product.price.toLocaleString()}
                      </span>
                    </div>
                    <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                      افزودن به سبد
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
  