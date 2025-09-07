// import { supabase } from "./supabaseClient";

// export const testConnection = async () => {
//   const { data: { session }, error: sessionError } = await supabase.auth.getSession();
//   if (sessionError) {
//     console.error("❌ خطا در دریافت session:", sessionError.message);
//     return false;
//   }
//   if (!session) {
//     console.error("❌ کاربر وارد نشده");
//     return false;
//   }

//   try {
//     const { data, error } = await supabase.from("products").select("*").limit(1);
//     if (error) throw error;
//     console.log("✅ اتصال به دیتابیس برقرار، داده نمونه:", data);
//     return true;
//   } catch (err) {
//     console.error("❌ خطا در اتصال:", err.message);
//     return false;
//   }
// };
