import React from 'react'
import 'quill/dist/quill.snow.css'

import {
  CheckListsExample,
  CodeHighlightingExample,
  ImageExample,
  RichTextExample,
  SearchHighlightingExample,
  SlateEditorExample,
  SimpleDraftEditor,
  SomeControlsEditor,
  SimpleMentionEditor,
  EmojiExample,
  DraftImageExample,
  SimpleVideoEditor,
  SimpleHashtagEditor,
  SimpleExample,
  CopyExample,
  EventsExample,
  UrlExample,
  PluginExample,
  CustomOptionsExample,
  CustomToolbarExample,
  BasicExample,
  DarkThemeExample,
  DocumentReadyExample,
  DragNDropExample,
  EmojisExample,
  FontFamilyExample,
  GetEditedHtmlExample,
  InitOnLinkExample,
  InlineToolbarExample,
  InsertHtmlExample,
  LiveCodePreviewExample,
  ToolbarBottomExample,
  TrackChangesExample,
} from './components'

export default function App(): JSX.Element {
  return (
    <div style={{ maxWidth: '1280px', margin: '10px auto 100px' }}>
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
      <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Draft.js</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '45% 45%', gridGap: '60px', marginBottom: '20px' }}>
        <SimpleDraftEditor />
        <SomeControlsEditor />
        <SimpleMentionEditor />
        <EmojiExample />
        <DraftImageExample />
        <SimpleVideoEditor />
        <SimpleHashtagEditor />
      </div>
      <h1 style={{ textAlign: 'center', fontWeight: 400 }}>React Quill</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '45% 45%', gridGap: '60px', marginBottom: '20px' }}>
        <SimpleExample />
        <CopyExample />
        <EventsExample />
        <UrlExample />
        <PluginExample />
        <CustomOptionsExample />
        <CustomToolbarExample />
      </div>
      <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Froala Editor</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '45% 45%', gridGap: '60px', marginBottom: '20px' }}>
        <BasicExample />
        <DarkThemeExample />
        <DragNDropExample />
        <EmojisExample />
        <FontFamilyExample />
        <GetEditedHtmlExample />
        <InitOnLinkExample />
        <InlineToolbarExample />
        <InsertHtmlExample />
        <LiveCodePreviewExample />
        <ToolbarBottomExample />
        <TrackChangesExample />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '100%', gridGap: '60px', marginBottom: '20px' }}>
        <DocumentReadyExample />
      </div>
    </div>
  )
}
