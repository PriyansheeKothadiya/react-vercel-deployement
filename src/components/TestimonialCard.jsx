import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import CursorGlow from './CursorGlow'

export default function TestimonialCard({ avatar, name, role, quote }) {
  const ref = useRef(null)
  return (
    <motion.div ref={ref} whileHover={{ y: -6, scale: 1.01 }} className="relative overflow-hidden card p-6 soft-transition hover-glow border-glow">
      <CursorGlow parentRef={ref} size={200} />
      <div className="flex items-center gap-3 mb-4">
        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white">{avatar}</div>
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-gray-400">{role}</div>
        </div>
      </div>
      <blockquote className="text-gray-300">“{quote}”</blockquote>
    </motion.div>
  )
}
