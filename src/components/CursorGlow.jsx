import React, { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// CursorGlow follows pointer inside given parentRef
export default function CursorGlow({ parentRef, size = 220, colorFrom = 'rgba(139,92,246,0.28)', colorTo = 'rgba(6,182,212,0.12)', blur = 80 }) {
  const x = useMotionValue(-9999)
  const y = useMotionValue(-9999)
  const opacity = useMotionValue(0)

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

  const gradient = `radial-gradient(closest-corner at 50% 50%, ${colorFrom} 0%, ${colorTo} 40%, rgba(2,8,23,0) 70%)`

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
