import React from 'react'

export default function ValueCard({ icon, title, desc }) {
  return (
    <div className="card p-4 flex flex-col gap-3 hover-glow soft-transition bg-white/6 dark:bg-white/4 backdrop-blur-md">
      <div className="text-2xl">{icon}</div>
      <div className="font-semibold">{title}</div>
      <div className="text-sm text-gray-400">{desc}</div>
    </div>
  )
}
