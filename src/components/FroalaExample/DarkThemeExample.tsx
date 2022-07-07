import React from 'react'

import Card from '../Card'
import { FroalaEditor } from '../index'

export default function DarkThemeExample(): JSX.Element {
  return (
    <Card label='Dark Theme'>
      <FroalaEditor config={{ theme: 'dark' }} />
    </Card>
  )
}
