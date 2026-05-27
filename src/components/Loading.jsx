import React from 'react'

export default function Loading() {
  return (
    <div className="loading" role="status" aria-live="polite">
      <div className="spinner" />
      <span className="sr-only">Loading...</span>
    </div>
  )
}
