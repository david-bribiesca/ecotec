"use client"

import { useAuth } from "@/hooks/useAuth"

export default function DashboardPage() {
  const { user, loading } = useAuth(true)

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600">Loading...</p>
      </div>
    )

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-3xl font-bold text-blue-600 mb-2">Hola Mundo 👋</h1>
      <p className="text-gray-600">Bienvenido, {user?.email}</p>
    </div>
  )
}
