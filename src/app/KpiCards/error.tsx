'use client'

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div>
      <p>Failed to load KPIs</p>
      <button onClick={reset}>Retry</button>
    </div>
  )
}