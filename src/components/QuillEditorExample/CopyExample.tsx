import React, { useEffect } from 'react'

import Card from '../Card'
import { useQuill } from '../index'

export default function CopyExample(): JSX.Element {
  const { quill, quillRef } = useQuill({
    placeholder: 'Compose an epic...',
  })

  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML('<h1>React Hook for Quill!</h1>')
    }
  }, [quill])

  return (
    <Card label='Copy Example'>
      <div ref={quillRef} style={{ height: '100px', display: 'inline-block', width: '100%' }} />
    </Card>
  )
}
