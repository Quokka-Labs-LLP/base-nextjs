import React from 'react'

import Card from '../Card'
import { FroalaEditor } from '../index'

export default function FontFamilyExample(): JSX.Element {
  return (
    <Card label='Font Family' description='Include google fonts into index.html'>
      <FroalaEditor
        config={{
          fontFamily: {
            "Roboto,sans-serif": 'Roboto',
            "Oswald,sans-serif": 'Oswald',
            "Montserrat,sans-serif": 'Montserrat',
            "'Open Sans Condensed',sans-serif": 'Open Sans Condensed'
          },
          fontFamilySelection: true
        }}
      >
        {`
          <p>By default the font family icon is visible in the editor's toolbar. If you want to be able to see the actual font family for the selected text you can use the
            <a href='../docs/options#fontFamilySelection' title='fontFamilySelection' target='_blank'>fontFamilySelection</a> option.
          </p>`}
      </FroalaEditor>
    </Card>
  )
}
