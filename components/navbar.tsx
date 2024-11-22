"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, Menu, X } from 'lucide-react'

const navItems = [
  { name: "Home", href: "/" },
  { name: "Systems", href: "/systems" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Support", href: "#" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col w-full">
      <nav className="bg-[#1d1d1f] border-b border-[#424245]">
        <div className="max-w-[980px] mx-auto h-11 px-4 flex items-center justify-between md:justify-center">
          <div className="flex items-center justify-between md:justify-center w-full gap-8">
            <Link href="/" className="text-white hover:opacity-80 md:hidden">
              <img src="logo.png" alt="Logo" className="h-5 w-5" />
            </Link>
            <Link href="/" className="text-white hover:opacity-80 hidden md:block">
              <img src="logo.png" alt="Logo" className="h-5 w-5" />
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-white text-xs font-medium hidden md:block transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <button
            className="text-white md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#1d1d1f] z-50 overflow-auto">
          <div className="max-w-[980px] mx-auto px-4 py-4">
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white p-2"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <div className="space-y-6">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between py-3 text-white text-xl font-medium hover:opacity-80"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                    <ChevronRight size={20} className="text-[#424245]" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


