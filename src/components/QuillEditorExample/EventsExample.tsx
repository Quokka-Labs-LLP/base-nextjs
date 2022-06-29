import React, { useEffect } from 'react'

import Card from '../Card'
import { useQuill } from '../index'

export default function EventsExample(): JSX.Element {
  const { quill, quillRef } = useQuill({
    placeholder: 'Compose an epic...',
  })

  useEffect(() => {
    if (quill) {
      console.log('ytwteyr')
      // eslint-disable-next-line
      quill.on('text-change', (delta: any, oldDelta: any, source: any) => {
        console.log('Text change!')
        console.log(delta)
        console.log(oldDelta)
        console.log(source)
        console.log(quill.getText()) // Get text only
        console.log(quill.getContents()) // Get delta contents
        console.log(quill.root.innerHTML) // Get innerHTML using quill
        console.log(quillRef.current.firstChild.innerHTML) // Get innerHTML using quillRef
      })
    }
  }, [quill])

  return (
    <Card label='Events Example'>
      <div ref={quillRef} style={{ height: '100px', display: 'inline-block', width: '100%' }} />
    </Card>
  )
}
