import React from 'react'

import Card from '../Card'
import { FroalaEditor } from '../index'

export default function CodePreviewExample(): JSX.Element {
  return (
    <Card label='Live Code Preview' description='Open you console to see the changes when you type in the editor.'>
      <FroalaEditor
        config={{
          events: {
            contentChanged: function () {
              console.log(this.codeBeautifier.run(this.html.get()))
            }
          }
        }}
      />
    </Card>
  )
}
