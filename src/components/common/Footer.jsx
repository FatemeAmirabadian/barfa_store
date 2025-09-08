export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300 pt-16 pb-6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* ستون ۱: درباره ما */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">درباره ما</h3>
            <p className="text-sm leading-6">
              فروشگاه ما با هدف ارائه بهترین محصولات از برندهای معتبر دنیا
              راه‌اندازی شده است. کیفیت، سرعت و رضایت مشتری شعار ماست.
            </p>
          </div>
  
          {/* ستون ۲: دسته‌بندی‌ها */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">دسته‌بندی‌ها</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/products/shoes" className="hover:text-white">کفش</a></li>
              <li><a href="/products/electronics" className="hover:text-white">الکترونیک</a></li>
              <li><a href="/products/fashion" className="hover:text-white">مد و پوشاک</a></li>
              <li><a href="/products/sport" className="hover:text-white">ورزشی</a></li>
            </ul>
          </div>
  
          {/* ستون ۳: لینک‌های مفید */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">لینک‌های مفید</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-white">درباره ما</a></li>
              <li><a href="/contact" className="hover:text-white">تماس با ما</a></li>
              <li><a href="/faq" className="hover:text-white">سوالات متداول</a></li>
              <li><a href="/policy" className="hover:text-white">قوانین و مقررات</a></li>
            </ul>
          </div>
  
          {/* ستون ۴: خبرنامه و شبکه‌های اجتماعی */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">خبرنامه</h3>
            <p className="text-sm mb-4">برای دریافت جدیدترین تخفیف‌ها عضو شوید:</p>
            <form className="flex items-center gap-2 mb-4">
              <input
                type="email"
                placeholder="ایمیل شما"
                className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none"
              />
              {/* <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                عضویت
              </button> */}
            </form>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="hover:text-white">📷</a>
              <a href="#" aria-label="Twitter" className="hover:text-white">🐦</a>
              <a href="#" aria-label="Telegram" className="hover:text-white">✈️</a>
            </div>
          </div>
        </div>
  
        {/* خط جداکننده */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} فروشگاه ما. همه حقوق محفوظ است.
        </div>
      </footer>
    );
  }
  