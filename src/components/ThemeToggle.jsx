import React, { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [mode, setMode] = useState('dark')

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefers = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = stored || (prefers ? 'dark' : 'light')
    setMode(initial)
    apply(initial)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function apply(value) {
    const root = document.documentElement
    if (value === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
  }

  function toggle() {
    const next = mode === 'dark' ? 'light' : 'dark'
    setMode(next)
    localStorage.setItem('theme', next)
    apply(next)
  }

  return (
    <button onClick={toggle} aria-label="Toggle theme" className="ml-2 text-sm">
      {mode === 'dark' ? '🌙' : '☀️'}
    </button>
  )
}
