"use client";

export default function LogoutButton() {
  const handleLogout = async () => {
    await fetch("/api/adminlogout", { method: "DELETE" });

    // بعد از حذف کوکی → ریدایرکت به لاگین ادمین
    window.location.href = "/adminlogin";
  };

  return (
    <button
      onClick={handleLogout}
      className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    >
      خروج
    </button>
  );
}
