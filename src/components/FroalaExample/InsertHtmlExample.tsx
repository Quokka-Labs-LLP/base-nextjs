import React from 'react'

import Card from '../Card'
import { FroalaEditor } from '../index'

export default function InsertHtmlExample(): JSX.Element {
  return (
    <Card label='Insert HTML'>
      <>
        <FroalaEditor
          defineIcon={(Editor) => {
            Editor.DefineIcon('insertHTML', {NAME:'plus',SVG_KEY:'add'})
          }}
          registerCommand={(Editor) => {
            Editor.RegisterCommand('insertHTML', {
              title: 'Insert HTML',
              focus: true,
              undo: true,
              refreshAfterCallback: true,
              callback: function () {
                this.html.insert('Some Custom HTML.');
                this.undo.saveStep();
              }
            })
          }}
          config={{
            toolbarButtons: [
              ['bold', 'italic', 'underline', 'paragraphFormat', 'formatOL', 'formatUL'],
              ['insertHTML', 'undo', 'redo', 'html']
            ]
          }}
        />
      </>
    </Card>
  )
}
