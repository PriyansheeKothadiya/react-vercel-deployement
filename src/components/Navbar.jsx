import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const loc = useLocation()
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/6 border-b border-white/6">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">SmartDesk</Link>
        </div>
        <nav className="flex items-center gap-6">
          <Link to="/features" className={`nav-link text-sm ${loc.pathname === '/features' ? 'text-white' : 'text-gray-300'}`}>Features</Link>
          <Link to="/about" className={`nav-link text-sm ${loc.pathname === '/about' ? 'text-white' : 'text-gray-300'}`}>About</Link>
          <Link to="/contact" className={`nav-link text-sm ${loc.pathname === '/contact' ? 'text-white' : 'text-gray-300'}`}>Contact</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
