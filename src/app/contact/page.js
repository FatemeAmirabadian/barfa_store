import PublicLayout from "../layouts/public-layout";

export default function ContactPage() {
  return (
    <PublicLayout>
      <main className="p-4 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">تماس با ما</h1>
        <form className="space-y-2 max-w-md">
          <input
            type="text"
            placeholder="نام"
            className="border p-2 rounded w-full"
          />
          <input
            type="email"
            placeholder="ایمیل"
            className="border p-2 rounded w-full"
          />
          <textarea
            placeholder="پیام شما"
            className="border p-2 rounded w-full"
          ></textarea>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            ارسال
          </button>
        </form>
      </main>
    </PublicLayout>
  );
}
