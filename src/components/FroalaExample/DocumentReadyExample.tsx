import React from 'react'

import Card from '../Card'
import { FroalaEditor } from '../index'

export default function DocumentReadyExample(): JSX.Element {
  return (
    <Card label='Document Ready'>
      <FroalaEditor config={{ documentReady: true }} />
    </Card>
  )
}
