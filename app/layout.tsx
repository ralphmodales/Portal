import type { Metadata } from "next"
import localFont from "next/font/local"
import { Navbar } from "@/components/navbar"
import "./globals.css"

const appleFont = localFont({
  src: "./fonts/SF-Pro.woff2",
  variable: "--font-sf-pro",
  weight: "100 900",
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Portal",
  description: "Landing Page",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${appleFont.variable} antialiased`}>
        <div className="min-h-screen">
          <Navbar />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
            <footer className="w-full py-6 bg-white border-t border-black">
              <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <p className="text-sm">© 2024 Popeyes Philippines. All rights reserved.</p>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
