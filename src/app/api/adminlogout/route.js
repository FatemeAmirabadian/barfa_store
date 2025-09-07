import { cookies } from "next/headers";

export async function DELETE() {
  const cookieStore = cookies();

  // پاک کردن کوکی
  cookieStore.set({
    name: "admin_token",
    value: "",
    path: "/",               // کل سایت رو پوشش بده
    httpOnly: true,
    secure: true,
    expires: new Date(0),    // تاریخ گذشته = حذف
  });

  return new Response(JSON.stringify({ message: "Logged out" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
