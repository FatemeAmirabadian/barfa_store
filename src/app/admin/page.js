import Link from "next/link";
import LogoutButton from "@/components/adminPanel/LogoutButton";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminDashboard from "@/components/adminPanel/AdminDashboard";

export default async function Admin() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;

  if (token !== "valid") {
    redirect("/adminlogin");
  }

  return (
    <div className="p-8 min-h-screen bg-gray-100">
      <LogoutButton />
      <AdminDashboard />
    </div>
  );
}
