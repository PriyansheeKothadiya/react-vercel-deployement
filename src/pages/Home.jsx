import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="home">
      <div className="hero">
        <h1>Welcome to React Vercel Demo</h1>
        <p className="lead">A tiny Vite + React project to learn deployment on Vercel.</p>
        <Link to="/about" className="btn">About this demo</Link>
      </div>
    </section>
  )
}
