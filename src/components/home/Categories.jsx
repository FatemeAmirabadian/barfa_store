export default function Categories() {
    const categories = [
      {
        id: 1,
        title: "کفش",
        image: "/images/categories/shoes.jpg",
        link: "/products/shoes",
      },
      {
        id: 2,
        title: "الکترونیک",
        image: "/images/categories/electronics.jpg",
        link: "/products/electronics",
      },
      {
        id: 3,
        title: "مد و پوشاک",
        image: "/images/categories/fashion.jpg",
        link: "/products/fashion",
      },
      {
        id: 4,
        title: "ورزشی",
        image: "/images/categories/sport.jpg",
        link: "/products/sport",
      },
    ];
  
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            دسته‌بندی محصولات
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {categories.map((category) => (
              <a
                key={category.id}
                href={category.link}
                className="block rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center bg-white">
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }
  