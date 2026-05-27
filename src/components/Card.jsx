import React from 'react'

export default function Card({ title, body }) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  )
}
