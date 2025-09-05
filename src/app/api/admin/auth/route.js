import { NextResponse } from "next/server";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD; 

export async function POST(req) {
  const { password } = await req.json();
  console.log(ADMIN_PASSWORD);
  console.log(ADMIN_PASSWORD===password);
  console.log(password);
  if (password === ADMIN_PASSWORD) {
    const res = NextResponse.json({ success: true });
    res.cookies.set("admin_token", "valid", {
      httpOnly: true,
      secure: false, // localhost
      path: "/",
      maxAge: 60 * 60,
    });
    return res;
  }
  return NextResponse.json({ error: "رمز اشتباه" }, { status: 401 });
}

export async function DELETE() {
  const res = NextResponse.json({ success: true });
  res.cookies.set("admin_token", "", {
    httpOnly: true,
    secure: false,
    path: "/",
    maxAge: 0,
  });
  return res;
}
