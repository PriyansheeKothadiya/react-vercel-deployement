import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="py-12 text-center">
      <h1 className="text-4xl font-bold mb-4">404 — Not Found</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">We couldn't find that page.</p>
      <Link to="/" className="btn-primary">Return Home</Link>
    </section>
  )
}

