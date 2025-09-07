"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/adminlogin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const result = await res.json();

      if (!res.ok) {
        setError(result.error || "خطایی رخ داده است");
        setLoading(false);
        return;
      }

      // لاگین موفق → ریدایرکت به /admin
      router.push("/admin");
    } catch (err) {
      setError("خطای شبکه، دوباره تلاش کنید");
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="max-w-md mx-auto mt-20 space-y-4 p-4 border rounded"
    >
      <h2 className="text-xl font-bold">Admin Login</h2>
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />
      <button
        type="submit"
        className={`w-full p-2 rounded text-white ${loading ? "bg-gray-400" : "bg-blue-600"}`}
        disabled={loading}
      >
        {loading ? "در حال ورود..." : "Login"}
      </button>
    </form>
  );
}
