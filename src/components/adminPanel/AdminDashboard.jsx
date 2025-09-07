import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function AdminDashboard() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token");

  if (!token ) {
    redirect("/adminlogin"); // بدون کوکی معتبر → ریدایرکت
  }

  return (
    <div className="p-8 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">داشبورد ادمین</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Link href="/admin">
          <Card title="مجموع فروش" value="۲۵,۴۳۰ $" icon="💰" />
        </Link>
        <Link href="/admin/orders">
          <Card title="تعداد سفارش‌ها" value="۱,۲۴۵" icon="🛒" />
        </Link>
        <Link href="/admin/customers">
          <Card title="کاربران" value="۵,۳۲۰" icon="👤" />
        </Link>
        <Link href="/admin/products">
          <Card title="محصولات" value="۲۳۰" icon="📦" />
        </Link>
      </div>

      <section className="bg-white p-6 rounded-2xl shadow mb-6">
        <h2 className="text-xl font-bold mb-4">سفارش‌های اخیر</h2>
        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="border-b bg-gray-50">
              <th className="p-3">کد سفارش</th>
              <th className="p-3">مشتری</th>
              <th className="p-3">وضعیت</th>
              <th className="p-3">مبلغ</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3">#۱۰۲۳</td>
              <td className="p-3">سارا Johnson</td>
              <td className="p-3 text-green-600">تکمیل شده</td>
              <td className="p-3">۱۲۰ $</td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3">#۱۰۲۴</td>
              <td className="p-3">مارک Lee</td>
              <td className="p-3 text-yellow-600">در انتظار</td>
              <td className="p-3">۸۰ $</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3">#۱۰۲۵</td>
              <td className="p-3">امیلی Davis</td>
              <td className="p-3 text-red-600">لغو شده</td>
              <td className="p-3">۴۵ $</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

function Card({ title, value, icon }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-4">
      <div className="text-2xl">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-xl font-bold">{value}</h3>
      </div>
    </div>
  );
}
