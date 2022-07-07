import React from 'react'

import Card from '../Card'
import { FroalaEditor } from '../index'

export default function BasicExample(): JSX.Element {
  return (
      <Card label='Baisc Example'>
        <FroalaEditor
          tag='textarea'
          config={{
            placeholderText: 'Edit Your Content Here!',
            charCounterCount: true,
            toolbarButtons: {
              'moreText': {
                'buttons': [
                  'bold', 'italic', 'underline', 'strikeThrough', 'subscript',
                  'superscript', 'fontFamily', 'fontSize', 'textColor',
                  'backgroundColor', 'inlineClass', 'inlineStyle',
                  'clearFormatting'
                ]
              },
              'moreParagraph': {
                'buttons': [
                  'alignLeft', 'alignCenter', 'formatOLSimple', 'alignRight',
                  'alignJustify', 'formatOL', 'formatUL', 'paragraphFormat',
                  'paragraphStyle', 'lineHeight', 'outdent', 'indent', 'quote'
                ]
              },
              'moreRich': {
                'buttons': [
                  'insertLink', 'insertImage', 'insertVideo', 'insertTable',
                  'emoticons', 'fontAwesome', 'specialCharacters', 'embedly',
                  'insertFile', 'insertHR'
                ]
              },
              'moreMisc': {
                'buttons': [
                  'undo', 'redo', 'fullscreen', 'print', 'getPDF',
                  'spellChecker', 'selectAll', 'html', 'help'
                ],
                'align': 'right',
                'buttonsVisible': 2
              },
            }
          }}
        />
      </Card>
  )
}
