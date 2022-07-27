import React from 'react'

export default function Card({
  children,
  label,
  description,
}: {
  children: JSX.Element[]
  label: string
  description?: string
}): JSX.Element {
  return (
    <div
      style={{
        padding: '30px',
        boxShadow:
          'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
        borderRadius: '8px',
      }}
    >
      <h1 style={{ textAlign: 'center', fontWeight: 400 }}>{label}</h1>
      <p style={{ textAlign: 'center', fontWeight: 400 }}>{description}</p>
      {children}
    </div>
  )
}
