import React from 'react'

import { DraftEditor } from '../index'
import Card from '../Card'

export default function SimpleDraftEditor(): JSX.Element {
  return (
    <Card label='Simple Draft Editor'>
      <div className='editors'>
        <DraftEditor placeholder='Write here...' />
      </div>
    </Card>
  )
}
