import React, { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// CursorGlow follows pointer inside given parentRef
export default function CursorGlow({ parentRef, size = 220, colorFrom, colorTo, blur = 80 }) {
  function themeColors() {
    const isDark = typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
    if (isDark) {
      // subtle cool-lavender wash on dark mode
      return { from: 'rgba(255,255,255,0.20)', to: 'rgba(139,92,246,0.12)' }
    }
    // light mode: stronger, darker lavender/purple wash (matches attached image)
    return { from: 'rgba(102,51,153,0.36)', to: 'rgba(237,225,255,0.14)' }
  }

  const initial = themeColors()
  const x = useMotionValue(-9999)
  const y = useMotionValue(-9999)
  const opacity = useMotionValue(0)
  const colors = useMotionValue({ from: initial.from, to: initial.to })

  const sx = useSpring(x, { stiffness: 200, damping: 30 })
  const sy = useSpring(y, { stiffness: 200, damping: 30 })
  const sop = useSpring(opacity, { stiffness: 120, damping: 20 })

  useEffect(() => {
    const el = parentRef && parentRef.current
    if (!el) return

    function handleMove(e) {
      const rect = el.getBoundingClientRect()
      const px = e.clientX - rect.left
      const py = e.clientY - rect.top
      x.set(px - size / 2)
      y.set(py - size / 2)
      opacity.set(1)
    }
    function handleLeave() {
      opacity.set(0)
    }

    el.addEventListener('pointermove', handleMove)
    el.addEventListener('pointerleave', handleLeave)
    el.addEventListener('pointercancel', handleLeave)
    return () => {
      el.removeEventListener('pointermove', handleMove)
      el.removeEventListener('pointerleave', handleLeave)
      el.removeEventListener('pointercancel', handleLeave)
    }
  }, [parentRef])

  useEffect(() => {
    const obs = new MutationObserver(() => {
      const c = themeColors()
      colors.set({ from: c.from, to: c.to })
    })
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => obs.disconnect()
  }, [])

  const g = colors.get()
  const gradient = `radial-gradient(closest-corner at 50% 50%, ${g.from} 0%, ${g.to} 40%, rgba(2,8,23,0) 70%)`

  return (
    <motion.div
      className="pointer-events-none absolute rounded-full blur-3xl"
      style={{
        width: size,
        height: size,
        translateX: sx,
        translateY: sy,
        opacity: sop,
        background: gradient,
        mixBlendMode: 'screen',
        filter: `blur(${blur}px)`
      }}
    />
  )
}
