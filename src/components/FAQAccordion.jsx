import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FAQAccordion({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="card p-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-center justify-between gap-4"
        aria-expanded={open}
        aria-controls={`faq-${q}`}
      >
        <div className="font-medium">{q}</div>
        <div className="text-gray-400" aria-hidden>{open ? '−' : '+'}</div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id={`faq-${q}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="mt-3 text-gray-400 overflow-hidden"
          >
            {a}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
