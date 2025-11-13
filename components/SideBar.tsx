"use client"

import React from "react"
import {
  Menu,
  Mail,
  Bell,
  Music,
  Thermometer,
  Shield,
  User,
  LogOut,
} from "lucide-react"
import { supabase } from "@/lib/supabaseClient"
import { useRouter } from "next/navigation"

const SideBar: React.FC = () => {
  const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/") // Redirige a la landing page
  }

  return (
    <div className="flex flex-col items-center justify-between w-20 h-full bg-white shadow-xl py-6 fixed left-0 top-0 rounded-r-3xl z-10">
      {/* Upper Icons */}
      <div className="flex flex-col space-y-8">
        <Mail className="w-6 h-6 text-gray-400 cursor-pointer hover:text-green-600" />
        <Menu className="w-6 h-6 text-gray-700 cursor-pointer hover:text-green-600" />
      </div>

      {/* Middle Icons */}
      <div className="flex flex-col space-y-8">
        <Bell className="w-6 h-6 text-gray-700 cursor-pointer hover:text-green-600" />
        <Music className="w-6 h-6 text-gray-700 cursor-pointer hover:text-green-600" />
        <Thermometer className="w-6 h-6 text-gray-700 cursor-pointer hover:text-green-600" />
        <Shield className="w-6 h-6 text-gray-700 cursor-pointer hover:text-green-600" />
      </div>

      {/* User Profile + Logout */}
      <div className="flex flex-col items-center space-y-4">
        <div className="flex flex-col items-center space-y-2">
          <User className="w-6 h-6 text-gray-700 cursor-pointer hover:text-green-600" />
        </div>

        {/* Botón de cerrar sesión */}
        <button
          onClick={handleLogout}
          className="mt-2 p-2 rounded-full hover:bg-red-50 transition"
          title="Cerrar sesión"
        >
          <LogOut className="w-6 h-6 text-red-500 hover:text-red-700" />
        </button>
      </div>
    </div>
  )
}

export default SideBar
