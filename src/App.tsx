import React from 'react'

import {
  CheckListsExample,
  CodeHighlightingExample,
  ImageExample,
  RichTextExample,
  SearchHighlightingExample,
  SlateEditorExample,
} from './components'

export default function App(): JSX.Element {
  return (
    <div style={{ maxWidth: '1280px', margin: '10px auto' }}>
      <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Welcome to React v17 with Typescript.</h1>
      <p style={{ textAlign: 'center', margin: 0 }}>React: v17.0.2</p>
      <p style={{ textAlign: 'center', margin: 0 }}>Typescript: v4.3.5</p>

      <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Slate.js</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '45% 45%', gridGap: '60px', marginBottom: '20px' }}>
        <SlateEditorExample />
        <RichTextExample />
        <CheckListsExample />
        <SearchHighlightingExample />
        <CodeHighlightingExample />
        <ImageExample />
      </div>
    </div>
  )
}
