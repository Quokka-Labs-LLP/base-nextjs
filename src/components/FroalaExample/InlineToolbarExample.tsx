import React from 'react'

import Card from '../Card'
import { FroalaEditor } from '../index'

export default function DocumentReadyExample(): JSX.Element {
  return (
    <Card label='Inline Toolbar'>
      <FroalaEditor
        config={{
          toolbarInline: true,
          charCounterCount: false,
          toolbarVisibleWithoutSelection: true
        }}
      />
    </Card>
  )
}
