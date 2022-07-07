import React from 'react'

import Card from '../Card'
import { FroalaEditor } from '../index'

export default function EmojiExample(): JSX.Element {
  return (
    <Card label='Emoji'>
      <FroalaEditor
        config={{
          placeholderText: 'YAY!',
          toolbarButtons: ['bold', 'italics', 'emoticons']
        }}
      />
    </Card>
  )
}
