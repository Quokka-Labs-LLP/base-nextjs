import React, { useState } from 'react'

import Card from '../Card'
import { FroalaEditor } from '../index'

export default function GetEditedHtmlExample(): JSX.Element {
  const [__editor, setEditor] = useState()
  const [content, setContent] = useState()

  return (
    <Card label='Get Edited HTML'>
      <>
        <FroalaEditor
        // eslint-disable-next-line
          getEditor={(editor: any) => {
            setEditor(editor)
          }}
        >
          {`
            <p>By default the font family icon is visible in the editor's toolbar. If you want to be able to see the actual font family for the selected text you can use the
              <a href='../docs/options#fontFamilySelection' title='fontFamilySelection' target='_blank'>fontFamilySelection</a> option.
            </p>`}
        </FroalaEditor>
        <button onClick={() => {
          // eslint-disable-next-line
          // @ts-ignore
          __editor && setContent(__editor?.html?.get?.())
        }}>Get HTML Content</button>
        <p>{content}</p>
      </>
    </Card>
  )
}
