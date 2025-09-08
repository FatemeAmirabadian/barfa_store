const articles = [
  {
    title: "راهنمای خرید کفش ورزشی",
    summary: "چطور بهترین کفش ورزشی را انتخاب کنیم",
    date: "2025-09-01",
  },
  {
    title: "مراقبت از دستگاه‌های الکترونیکی",
    summary: "نکات ساده برای طول عمر بیشتر گجت‌ها",
    date: "2025-08-28",
  },
];

export default function ArticlesPage() {
  return (
   <main className="p-4 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">مقالات</h1>
      <div className="grid gap-4 md:grid-cols-2">
        ...
      </div>
    </main>
  );
}
