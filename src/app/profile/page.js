export default function ProfilePage() {
    const user = {
      name: "فاطمه امیرآبادی",
      email: "fateme@example.com",
    };
  
    return (
      <main className="p-4 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">حساب کاربری</h1>
        <div className="border p-4 rounded shadow max-w-md">
          <p><strong>نام:</strong> {user.name}</p>
          <p><strong>ایمیل:</strong> {user.email}</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            ویرایش حساب
          </button>
        </div>
      </main>
    );
  }
  