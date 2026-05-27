import React from 'react'

export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">{title}</h2>
      {subtitle && <p className="text-gray-400 mt-2">{subtitle}</p>}
    </div>
  )
}
