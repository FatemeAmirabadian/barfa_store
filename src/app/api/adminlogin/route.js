import { supabase } from "@/lib/supabaseClient";
import { cookies } from "next/headers";

export async function POST(req) {
  const { email, password } = await req.json();

  // تلاش برای لاگین
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error || !data.session) {
    return new Response(JSON.stringify({ error: "ایمیل یا رمز اشتباه است" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  // ست کردن کوکی سمت سرور
  cookies().set({
    name: "admin_token",
    value: "valid", // می‌توانی data.session.access_token استفاده کنی
    path: "/",
    httpOnly: true, // فقط سرور می‌تواند بخواند
    maxAge: 60 * 60, // 1 ساعت
  });

  return new Response(JSON.stringify({ message: "Login successful" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
