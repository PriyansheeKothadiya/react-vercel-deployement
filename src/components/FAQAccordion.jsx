import React, { useState } from 'react'

export default function FAQAccordion({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="card p-4">
      <button onClick={() => setOpen(!open)} className="w-full text-left flex items-center justify-between">
        <div className="font-medium">{q}</div>
        <div className="text-gray-400">{open ? '−' : '+'}</div>
      </button>
      {open && <div className="mt-3 text-gray-400">{a}</div>}
    </div>
  )
}
