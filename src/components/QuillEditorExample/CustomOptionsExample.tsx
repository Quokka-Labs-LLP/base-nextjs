import React from 'react'

import Card from '../Card'
import { useQuill } from '../index'

export default function CustomOptionsExample(): JSX.Element {
  const theme = 'snow'
  // const theme = 'bubble';

  const modules = {
    toolbar: [['bold', 'italic', 'underline', 'strike']],
  }

  const placeholder = 'Compose an epic...'
  const formats = ['bold', 'italic', 'underline', 'strike']
  const { quillRef } = useQuill({ theme, modules, formats, placeholder })

  return (
    <Card label='Custom Options Example'>
      <div ref={quillRef} style={{ height: '100px', display: 'inline-block', width: '100%' }} />
    </Card>
  )
}
