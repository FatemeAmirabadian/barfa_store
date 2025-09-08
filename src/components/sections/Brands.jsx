export default function Brands() {
    const brands = [
      { id: 1, name: "Nike", logo: "/images/brands/nike.png" },
      { id: 2, name: "Adidas", logo: "/images/brands/adidas.png" },
      { id: 3, name: "Apple", logo: "/images/brands/apple.png" },
      { id: 4, name: "Samsung", logo: "/images/brands/samsung.png" },
      { id: 5, name: "Sony", logo: "/images/brands/sony.png" },
      { id: 6, name: "Puma", logo: "/images/brands/puma.png" },
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">برندهای محبوب</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="flex items-center justify-center grayscale hover:grayscale-0 transition"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  