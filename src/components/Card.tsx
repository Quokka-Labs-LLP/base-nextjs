import React from 'react'

export default function Card({
  children,
  label,
  description,
}: {
  children: JSX.Element
  label: string
  description?: string
}): JSX.Element {
  return (
    <div className='card'>
      <h1 style={{ textAlign: 'center', fontWeight: 400 }}>{label}</h1>
      <p style={{ textAlign: 'center', fontWeight: 400 }}>{description}</p>
      {children}
    </div>
  )
}
