import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="not-found">
      <h2>404 — Page Not Found</h2>
      <p>Sorry, we couldn't find the page you're looking for.</p>
      <Link to="/" className="btn">Return Home</Link>
    </section>
  )
}
