import React from 'react'

export default function StatsCard({ value, label }) {
  return (
    <div className="card p-4 text-center">
      <div className="text-2xl font-extrabold">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  )
}
