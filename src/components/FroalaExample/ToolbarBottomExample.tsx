import React from 'react'

import Card from '../Card'
import { FroalaEditor } from '../index'

export default function ToolbarBottomExample(): JSX.Element {
  return (
    <Card label='Toolbar Bottom'>
      <FroalaEditor
        config={{
          toolbarBottom: true
        }}
      />
    </Card>
  )
}
