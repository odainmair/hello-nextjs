"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

// Static credentials - change these to your desired values
const STATIC_EMAIL = "admin@example.com"
const STATIC_PASSWORD = "password123"

export async function login(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  // Validate against static credentials
  if (email !== STATIC_EMAIL || password !== STATIC_PASSWORD) {
    return { success: false, error: "Invalid email or password" }
  }

  // Set session cookie
  const cookieStore = await cookies()
  cookieStore.set("session", "authenticated", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 1 week
  })

  redirect("/")
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete("session")
  redirect("/login")
}

export async function getSession() {
  const cookieStore = await cookies()
  return cookieStore.get("session")?.value === "authenticated"
}
