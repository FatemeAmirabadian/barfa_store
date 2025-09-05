import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminPanel from "@/components/adminPanel/AdminDashboard";

export default async function AdminDashboard() {
  const token = cookies().get("admin_token");

  if (!token || token.value !== "valid") {
    redirect("/admin/login");
  }

  return <AdminPanel />;
}
