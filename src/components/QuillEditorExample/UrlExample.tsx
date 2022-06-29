import React from 'react'
// eslint-disable-next-line
// @ts-ignore
import MagicUrl from 'quill-magic-url'

import Card from '../Card'
import { useQuill } from '../index'

export default function UrlExample(): JSX.Element {
  const { quill, quillRef, Quill } = useQuill({ modules: { magicUrl: true } })

  if (Quill && !quill) {
    // For execute this line only once.
    Quill.register('modules/magicUrl', MagicUrl)
  }

  return (
    <Card label='Url Example'>
      <div ref={quillRef} style={{ height: '100px', display: 'inline-block', width: '100%' }} />
    </Card>
  )
}
