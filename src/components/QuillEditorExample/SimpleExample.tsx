import React from 'react'

import Card from '../Card'
import { useQuill } from '../index'

export default function SimpleExample(): JSX.Element {
  const { quillRef } = useQuill({
    placeholder: 'Compose an epic...',
  })

  return (
    <Card label='Simple Editor Example'>
      <div ref={quillRef} style={{ height: '100px', display: 'inline-block', width: '100%' }} />
    </Card>
  )
}
