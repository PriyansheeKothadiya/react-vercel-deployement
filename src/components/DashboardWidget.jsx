import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import CursorGlow from './CursorGlow'

export default function DashboardWidget({ title, children }) {
  const ref = useRef(null)
  return (
    <motion.div ref={ref} whileHover={{ y: -6, scale: 1.01 }} className="relative overflow-hidden card p-4 soft-transition hover-glow border-glow">
      <CursorGlow parentRef={ref} size={220} />
      <div className="font-semibold mb-2">{title}</div>
      <div>{children}</div>
    </motion.div>
  )
}
