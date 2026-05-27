import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import Button from './Button'
import CursorGlow from './CursorGlow'

export default function PricingCard({ title, price, features = [], popular }) {
  const ref = useRef(null)
  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      className="relative overflow-hidden card p-6 border border-white/6 soft-transition hover-glow border-glow"
    >
      <CursorGlow parentRef={ref} size={260} />
      {popular && <div className="text-xs uppercase text-accent font-bold">Popular</div>}
      <h3 className="text-xl font-bold mt-2">{title}</h3>
      <div className="my-4 text-3xl font-extrabold">{price}</div>
      <ul className="text-sm text-gray-400 mb-4 space-y-2">
        {features.map((f) => (
          <li key={f}>• {f}</li>
        ))}
      </ul>
      <Button className="w-full btn-glow">Start free trial</Button>
    </motion.div>
  )
}
