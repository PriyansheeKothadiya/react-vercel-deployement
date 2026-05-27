import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

export default function MobileSidebar({ open, onClose }) {
  const firstRef = useRef(null)
  const loc = useLocation()

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = open ? 'hidden' : ''
    }
    return () => {
      if (typeof document !== 'undefined') document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose()
    }
    if (open) {
      document.addEventListener('keydown', onKey)
      setTimeout(() => firstRef.current && firstRef.current.focus(), 60)
    }
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.aside
            key="sidebar"
            initial={{ x: -320, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -320, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
            className="fixed top-0 left-0 h-full z-50 w-[280px] max-w-full p-6 bg-white/95 dark:bg-[#0f172a]/80 backdrop-blur-md shadow-2xl rounded-tr-2xl rounded-br-2xl transform-gpu overflow-y-auto"
            aria-hidden={!open}
            role="dialog"
            aria-label="Mobile navigation"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="inline-block w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent shadow-md" />
                <span className="text-lg sm:text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">SmartDesk</span>
              </div>
              <button onClick={onClose} aria-label="Close menu" className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/5 focus:outline-none">
                ✕
              </button>
            </div>

            <nav className="flex flex-col gap-3" aria-label="Primary">
              <Link ref={firstRef} to="/" onClick={onClose} className={`block w-full text-left py-3 px-3 rounded-lg text-base font-medium transition-colors ${loc.pathname === '/' ? 'bg-gradient-to-r from-primary to-accent text-white' : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5'}`}>Home</Link>
              <Link to="/features" onClick={onClose} className={`block w-full text-left py-3 px-3 rounded-lg text-base font-medium transition-colors ${loc.pathname === '/features' ? 'bg-gradient-to-r from-primary to-accent text-white' : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5'}`}>Features</Link>
              <Link to="/about" onClick={onClose} className={`block w-full text-left py-3 px-3 rounded-lg text-base font-medium transition-colors ${loc.pathname === '/about' ? 'bg-gradient-to-r from-primary to-accent text-white' : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5'}`}>About</Link>
              <Link to="/contact" onClick={onClose} className={`block w-full text-left py-3 px-3 rounded-lg text-base font-medium transition-colors ${loc.pathname === '/contact' ? 'bg-gradient-to-r from-primary to-accent text-white' : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5'}`}>Contact</Link>
            </nav>

            <div className="mt-6 pt-4">
              <Link to="/login" onClick={onClose} className="block btn-secondary w-full text-center mb-3">Login</Link>
              <Link to="/pricing" onClick={onClose} className="block btn-primary w-full text-center">Get Started</Link>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}
