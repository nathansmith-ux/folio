"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import MobileModal from "./MobileModal"

export default function MobileNavBar() {

  const [isMenuOpen, setMenuOpen] = useState(false)

  const handleMenuOpen = () => {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <div>
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <Image 
                src="/whitewalls.webp" 
                className="rounded-xl"
                height="60"
                width="60" 
                alt="White Walls Media Logo" 
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">White Walls Media</span>
          </Link>
          <button 
            data-collapse-toggle="navbar-default" 
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" 
            aria-expanded="false"
            onClick={handleMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
          {isMenuOpen && (
            <MobileModal 
              onClose={handleMenuOpen}
            />
          )}
        </div>
      </nav>
    </div>
  )
}