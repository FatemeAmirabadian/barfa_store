export default function CheckoutPage() {
  return (
    <main className="p-4 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">صفحه پرداخت</h1>

      {/* فرم اطلاعات کاربر */}
      <section className="mb-6">
        <h2 className="font-semibold mb-2">اطلاعات مشتری</h2>
        <form className="space-y-2">
          <input type="text" placeholder="نام و نام خانوادگی" className="border p-2 rounded w-full" />
          <input type="text" placeholder="آدرس" className="border p-2 rounded w-full" />
          <input type="text" placeholder="شماره تماس" className="border p-2 rounded w-full" />
        </form>
      </section>

      {/* خلاصه سبد خرید */}
      <section>
        <h2 className="font-semibold mb-2">خلاصه سفارش</h2>
        <div className="border p-2 rounded">
          <p>کفش ورزشی x1: 120,000 تومان</p>
          <p>هدفون x2: 85,000 تومان</p>
          <p className="font-bold mt-2">جمع کل: 290,000 تومان</p>
        </div>
      </section>

      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        پرداخت
      </button>
    </main>
  );
}
