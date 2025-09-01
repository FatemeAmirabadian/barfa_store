export default function ForgotPasswordPage() {
    return (
      <main className="p-4 min-h-screen flex items-center justify-center">
        <div className="border p-6 rounded shadow w-full max-w-sm">
          <h1 className="text-2xl font-bold mb-4 text-center">فراموشی رمز عبور</h1>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="ایمیل"
              className="border p-2 rounded w-full"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-white px-4 py-2 rounded w-full"
            >
              ارسال لینک بازیابی
            </button>
          </form>
        </div>
      </main>
    );
  }
  