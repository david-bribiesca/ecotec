"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo (Izquierda) */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          MyApp
        </Link>

        {/* Enlaces de Navegación (Escritorio - Derecha) */}
        <div className="hidden md:flex space-x-8 items-center"> {/* items-center para asegurar centrado vertical si los enlaces tuvieran diferente altura */}
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/login" className="hover:text-blue-600">Login</Link>
          <Link
            href="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Botón Hamburguesa (Móvil - Derecha) */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Menú Desplegable (Móvil) - con Animación */}
      <div
        className={`md:hidden bg-white shadow-md transition-all ease-in-out duration-300 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">
          About
        </Link>
        <Link href="/login" className="block px-4 py-2 hover:bg-gray-100">
          Login
        </Link>
        <Link href="/login" className="block px-4 py-2 text-blue-600 font-semibold">
          Get Started
        </Link>
      </div>
    </nav>
  )
}