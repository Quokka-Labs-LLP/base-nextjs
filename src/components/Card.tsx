import React from 'react'

export default function Card({ children, label, description }: { children: JSX.Element; label: string; description?: string }): JSX.Element {
  return (
    <div style={{ padding: '30px', boxShadow: '0 2px 4px rgb(0 0 0 / 50%)', borderRadius: '8px' }}>
      <h1 style={{ textAlign: 'center', fontWeight: 400 }}>{label}</h1>
      <p style={{ textAlign: 'center', fontWeight: 400 }}>{description}</p>
      {children}
    </div>
  )
}
