import React from 'react'

import { Treemap } from './charts'

export default function TreemapExample(): JSX.Element {
  return (
    <div style={{ padding: '10px' }}>
      <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Treemap</h1>
      <Treemap />
    </div>
  )
}
