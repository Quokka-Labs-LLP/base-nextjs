import React from 'react'

import Card from '../Card'
import { useQuill } from '../index'

export default function PluginExample(): JSX.Element {
  const counterRef = React.useRef()
  const { quill, quillRef, Quill } = useQuill({ modules: { counter: true } })

  if (Quill && !quill) {
    // For execute this line only once.
    // eslint-disable-next-line
    Quill.register('modules/counter', function (quill: any) {
      quill.on('text-change', function () {
        const text = quill.getText()
        // There are a couple issues with counting words
        // this way but we'll fix these later
        // eslint-disable-next-line
        // @ts-ignore
        counterRef.current.innerText = text.split(/\s+/).length
      })
    })
  }

  return (
    <Card label='Plugin Example'>
      <>
        <div ref={quillRef} style={{ height: '100px', display: 'inline-block', width: '100%' }} />
        {/* eslint-disable-next-line */}
        {/* @ts-ignore */}
        <div ref={counterRef} />
      </>
    </Card>
  )
}
