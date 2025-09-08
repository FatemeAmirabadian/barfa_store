export default function Hero() {
    return (
      <section className="bg-blue-50 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          بهترین خرید آنلاین را با ما تجربه کنید 🎉
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          انواع محصولات با بهترین قیمت و کیفیت در دسترس شماست.
        </p>
        <a
          href="/products"
          className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          مشاهده محصولات
        </a>
      </section>
    );
  }
  