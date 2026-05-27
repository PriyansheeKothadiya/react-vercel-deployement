import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import CursorGlow from './CursorGlow'

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'inline-flex items-center gap-2 rounded-2xl font-semibold px-4 py-2 soft-transition'
  const variants = {
    primary: 'bg-gradient-to-r from-primary to-accent text-white shadow-md btn-glow',
    ghost: 'bg-transparent text-primary border border-white/10 hover:bg-white/5'
  }
  const ref = useRef(null)
  return (
    <div ref={ref} className="relative inline-block">
      <CursorGlow parentRef={ref} size={160} colorFrom={'rgba(139,92,246,0.18)'} colorTo={'rgba(6,182,212,0.06)'} blur={40} />
      <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }} className={`${base} ${variants[variant] || variants.primary} ${className}`} {...props}>
        {children}
      </motion.button>
    </div>
  )
}
