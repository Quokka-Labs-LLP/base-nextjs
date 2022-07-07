import React from 'react'

import Card from '../Card'
import { FroalaEditor } from '../index'

export default function InitOnLinkExample(): JSX.Element {
  return (
    <Card label='Init On Link' description='The user can select from this list when inserting or editing a link.'>
      <FroalaEditor>
        {`<p>The rich text editor will be initialized only on this following link:
          <a id="froala-editor" href="https://froala.com/wysiwyg-editor">Froala WYSIWYG HTML editor website</a>
        </p>`}
      </FroalaEditor>
    </Card>
  )
}
