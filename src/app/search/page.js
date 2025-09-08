
export default function SearchPage() {
  return (
      <main className="p-4 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">جستجو</h1>
        <input
          type="text"
          placeholder="جستجوی محصول..."
          className="border p-2 rounded w-full"
        />
        {/* نتایج جستجو بعدا اضافه می‌شوند */}
      </main>
  );
}
