"use server"
import { signOut, signIn } from "@/auth"

export async function logout() {
    await signOut({ redirectTo: "/" })
}

export async function login() {
    await signIn("google", { redirectTo: "/" })
}