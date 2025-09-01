export default function Features() {
    return (
      <section className="py-16 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            چرا ما را انتخاب کنید؟
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">ارسال سریع</h3>
              <p className="text-gray-600 text-sm">
                محصولات در کمترین زمان ممکن به دست شما می‌رسند.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">تضمین کیفیت</h3>
              <p className="text-gray-600 text-sm">
                بهترین برندها و محصولات باکیفیت تضمین‌شده.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">پشتیبانی ۲۴/۷</h3>
              <p className="text-gray-600 text-sm">
                هر زمان نیاز داشتید، تیم پشتیبانی در خدمت شماست.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  