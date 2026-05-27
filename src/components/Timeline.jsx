import React from 'react'

export default function Timeline({ events = [] }) {
  return (
    <div className="relative">
      <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent opacity-30 hidden sm:block" />
      <div className="space-y-6">
        {events.map((e, i) => (
          <div key={e.title} className="flex sm:items-start items-center gap-4">
            <div className="relative flex-shrink-0">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-md">{i+1}</div>
            </div>
            <div className="flex-1">
              <div className="bg-white/6 dark:bg-white/4 backdrop-blur-md p-4 rounded-xl border border-white/6">
                <div className="text-sm text-gray-400">{e.date}</div>
                <div className="font-semibold mt-1">{e.title}</div>
                <div className="text-sm text-gray-400 mt-2">{e.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
