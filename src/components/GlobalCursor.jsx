import React, { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// Global cursor glow that follows the pointer across the whole viewport
export default function GlobalCursor({ size = 420, colorFrom, colorTo, blur = 120 }) {
  // choose colors depending on theme (dark -> light glow, light -> darker subtle glow)
  function themeColors() {
    const isDark = typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
    if (isDark) {
      // subtle cool-lavender wash on dark backgrounds
      return { from: 'rgba(255,255,255,0.18)', to: 'rgba(139,92,246,0.10)' }
    }
    // light mode: stronger lavender/purple wash for visibility (matches attached image)
    return { from: 'rgba(102,51,153,0.30)', to: 'rgba(237,225,255,0.10)' }
  }

  const initial = themeColors()
  const x = useMotionValue(-9999)
  const y = useMotionValue(-9999)
  const opacity = useMotionValue(0)
  const colors = useMotionValue({ from: initial.from, to: initial.to })

  const sx = useSpring(x, { stiffness: 160, damping: 28 })
  const sy = useSpring(y, { stiffness: 160, damping: 28 })
  const sop = useSpring(opacity, { stiffness: 120, damping: 20 })

  useEffect(() => {
    function handleMove(e) {
      x.set(e.clientX - size / 2)
      y.set(e.clientY - size / 2)
      opacity.set(1)
    }
    function handleLeave() {
      opacity.set(0)
    }
    window.addEventListener('pointermove', handleMove)
    window.addEventListener('pointerdown', handleMove)
    window.addEventListener('pointerleave', handleLeave)
    return () => {
      window.removeEventListener('pointermove', handleMove)
      window.removeEventListener('pointerdown', handleMove)
      window.removeEventListener('pointerleave', handleLeave)
    }
  }, [])

  // react to theme changes (toggle of `.dark` on html)
  useEffect(() => {
    const obs = new MutationObserver(() => {
      const c = themeColors()
      colors.set({ from: c.from, to: c.to })
    })
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => obs.disconnect()
  }, [])

  const gradient = `radial-gradient(closest-corner at 50% 50%, ${colors.get().from} 0%, ${colors.get().to} 45%, rgba(0,0,0,0) 80%)`

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-40"
      style={{ width: size, height: size, translateX: sx, translateY: sy, opacity: sop }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          background: gradient,
          mixBlendMode: 'screen',
          filter: `blur(${blur}px)`
        }}
      />
    </motion.div>
  )
}
