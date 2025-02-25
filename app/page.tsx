import { redirect } from "next/navigation"
import { AuthCard } from "@/components/auth/auth-card"

export default function Home() {
  // TODO: Check if user is authenticated
  const isAuthenticated = false

  if (isAuthenticated) {
    redirect("/dashboard")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/50">
      <AuthCard />
    </div>
  )
}

