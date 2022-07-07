import React from 'react'

import Card from '../Card'
import { FroalaEditor } from '../index'

export default function DragNDropExample(): JSX.Element {
  return (
    <Card label='Drag n Drop'>
      <FroalaEditor
        config={{
          dragInline: false,
          pluginsEnabled: ['image', 'link', 'draggable']
        }}
      >
        {`<h3>Click here to edit the content</h3>
          <p>
            <img id="edit" class="fr-fil fr-dib" src="https://raw.githubusercontent.com/froala/wysiwyg-editor/master/editor.jpg" alt="Old Clock" width="300"/>
          </p>
          <p>The image can be dragged only between blocks and not inside them.</p>
        `}
      </FroalaEditor>
    </Card>
  )
}
