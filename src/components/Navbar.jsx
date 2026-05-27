import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const loc = useLocation()
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/60 dark:bg-black/10 border-b border-white/6">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-2xl md:text-3xl font-extrabold" aria-label="SmartDesk home">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">SmartDesk</span>
          </Link>
        </div>
        <nav className="flex items-center gap-6">
          <Link to="/features" className={`nav-link text-sm ${loc.pathname === '/features' ? 'text-primary dark:text-primary' : 'text-gray-600 dark:text-gray-300'}`}>Features</Link>
          <Link to="/about" className={`nav-link text-sm ${loc.pathname === '/about' ? 'text-primary dark:text-primary' : 'text-gray-600 dark:text-gray-300'}`}>About</Link>
          <Link to="/contact" className={`nav-link text-sm ${loc.pathname === '/contact' ? 'text-primary dark:text-primary' : 'text-gray-600 dark:text-gray-300'}`}>Contact</Link>
          <ThemeToggle />
          <Link to="/pricing" className="btn-primary ml-2">Get Started</Link>
        </nav>
      </div>
    </header>
  )
}
