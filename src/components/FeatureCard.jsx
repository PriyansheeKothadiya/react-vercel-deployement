import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import CursorGlow from './CursorGlow'

export default function FeatureCard({ icon, title, children }) {
  const ref = useRef(null)
  return (
    <motion.article
      ref={ref}
      whileHover={{ y: -6, scale: 1.02 }}
      whileFocus={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 220, damping: 20 }}
      className="relative overflow-hidden card border border-white/6 p-4 sm:p-6 soft-transition hover-glow border-glow bg-white/30 dark:bg-white/4 backdrop-blur-md"
      tabIndex={0}
      role="button"
      aria-label={title}
    >
      <CursorGlow parentRef={ref} />
      <div className="flex items-center gap-3">
        <div className="text-2xl sm:text-3xl">{icon}</div>
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <p className="text-sm text-gray-400 mt-3">{children}</p>
    </motion.article>
  )
}
