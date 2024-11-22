"use client"

import Link from "next/link"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Systems", href: "/systems" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Support", href: "#" },
]

export function Navbar() {
  return (
    <div className="flex flex-col w-full">
      <nav className="bg-[#1d1d1f] border-b border-[#424245]">
        <div className="max-w-[980px] mx-auto h-11 px-4 flex items-center justify-between">
          <div className="flex items-center justify-center w-full gap-8">
            <Link href="/" className="text-white hover:opacity-80">
              <img src="logo.png" className="h-5 w-5" />
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
        </div>
      </nav>
    </div>
  )
}


