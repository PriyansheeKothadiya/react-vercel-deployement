import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

export default function About() {
  return (
    <section className="about">
      <h2>About This Demo</h2>
      <div className="card-grid">
        <Card title="Project" body="react-vercel-demo: Vite + React sample for Vercel." />
        <Card title="Tech" body="React, Vite, React Router, plain CSS." />
        <Card title="Routing" body="SPA routes handled with React Router; Vercel rewrites to index.html." />
      </div>
      <div className="actions">
        <Link to="/" className="btn">Back to Home</Link>
      </div>
    </section>
  )
}
