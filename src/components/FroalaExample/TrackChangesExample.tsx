import React from 'react'

import Card from '../Card'
import { FroalaEditor } from '../index'

export default function TrackChangesExample(): JSX.Element {
  return (
    <Card label='Track Changes'>
      <FroalaEditor
        config={{
          toolbarButtons: ['bold', 'italic', 'underline', 'fontFamily', 'paragraphStyle', 'trackChanges']
        }}
      >
        {`
          <h3>Track Changes makes WYSIWYG HTML editing awesome.</h3>
          <p>Track changes is a Froala Editor Plugin where we can track the new text, deleted text as well as various styling and format changes.</p>
        `}
      </FroalaEditor>
    </Card>
  )
}
