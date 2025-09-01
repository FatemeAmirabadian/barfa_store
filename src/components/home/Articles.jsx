export default function Articles() {
    const articles = [
      {
        id: 1,
        title: "۱۰ روش برای خرید هوشمندانه",
        excerpt: "با این نکات ساده می‌توانید خرید آنلاین خود را بهینه کنید و از تخفیف‌ها بهترین استفاده را ببرید.",
        image: "/images/articles/smart-shopping.jpg",
        link: "/articles/smart-shopping",
      },
      {
        id: 2,
        title: "چگونه محصول مناسب انتخاب کنیم",
        excerpt: "راهنمای کامل برای انتخاب محصول مناسب بر اساس نیاز و بودجه شما.",
        image: "/images/articles/product-guide.jpg",
        link: "/articles/product-guide",
      },
      {
        id: 3,
        title: "ترندهای مد سال ۲۰۲۵",
        excerpt: "جدیدترین ترندهای مد و پوشاک را ببینید و استایل خود را به‌روز کنید.",
        image: "/images/articles/fashion-trends.jpg",
        link: "/articles/fashion-trends",
      },
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            محتوای ارزشمند
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <a
                key={article.id}
                href={article.link}
                className="block bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm">{article.excerpt}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }
  