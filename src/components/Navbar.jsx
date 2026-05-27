import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import MobileSidebar from './MobileSidebar'

export default function Navbar() {
  const loc = useLocation()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // close sidebar on route change
    setOpen(false)
  }, [loc.pathname])

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-[#0f172a]/80 border-b border-white/6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-3 text-lg sm:text-2xl font-extrabold" aria-label="SmartDesk home">
              <span className="inline-block w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent shadow-lg" />
              <span className="sm:inline bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">SmartDesk</span>
            </Link>
          </div>

          <nav className="hidden sm:flex items-center gap-4">
            <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium ${loc.pathname === '/' ? 'bg-gradient-to-r from-primary to-accent text-white' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5'}`}>Home</Link>
            <Link to="/features" className={`px-3 py-2 rounded-md text-sm font-medium ${loc.pathname === '/features' ? 'bg-gradient-to-r from-primary to-accent text-white' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5'}`}>Features</Link>
            <Link to="/about" className={`px-3 py-2 rounded-md text-sm font-medium ${loc.pathname === '/about' ? 'bg-gradient-to-r from-primary to-accent text-white' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5'}`}>About</Link>
            <Link to="/contact" className={`px-3 py-2 rounded-md text-sm font-medium ${loc.pathname === '/contact' ? 'bg-gradient-to-r from-primary to-accent text-white' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5'}`}>Contact</Link>
            <ThemeToggle />
          </nav>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 sm:hidden">
            <ThemeToggle />
            <button
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
              className="relative w-10 h-10 flex items-center justify-center p-2 rounded-lg bg-white/60 dark:bg-white/5 shadow-md"
            >
              <span className={`block w-5 h-0.5 bg-current transform transition duration-300 ${open ? 'rotate-45 translate-y-0.5' : '-translate-y-1.5'}`} />
              <span className={`block w-5 h-0.5 bg-current mt-1 transform transition duration-300 ${open ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block w-5 h-0.5 bg-current mt-1 transform transition duration-300 ${open ? '-rotate-45 -translate-y-1.5' : 'translate-y-1.5'}`} />
            </button>
          </div>
        </div>
      </header>

      <MobileSidebar open={open} onClose={() => setOpen(false)} />
    </>
  )
}
