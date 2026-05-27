import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import CursorGlow from './CursorGlow'

export default function FeatureCard({ icon, title, children }) {
  const ref = useRef(null)
  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 220, damping: 20 }}
      className="relative overflow-hidden card border border-white/6 p-6 soft-transition hover-glow border-glow"
    >
      <CursorGlow parentRef={ref} />
      <div className="text-primary text-2xl mb-3">{icon}</div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{children}</p>
    </motion.div>
  )
}
