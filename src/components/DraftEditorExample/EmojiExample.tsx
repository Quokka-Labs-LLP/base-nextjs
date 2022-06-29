import React, { useRef, useState } from 'react'
import Editor, { createEditorStateWithText } from '@draft-js-plugins/editor'
import createEmojiPlugin from '@draft-js-plugins/emoji'

import Card from '../Card'
import { DraftEditor } from '../index'
import editorStyles from './EditorStyle.module.css'
import '@draft-js-plugins/emoji/lib/plugin.css'

const emojiPlugin = createEmojiPlugin();
const { EmojiSuggestions, EmojiSelect } = emojiPlugin;
const plugins = [emojiPlugin];
const text = `Cool, we can have all sorts of Emojis here. 🙌
🌿☃️🎉🙈 aaaand maybe a few more here 🐲☀️🗻 Quite fun!`;

export default function EmojiExample(): JSX.Element {
  const [editorState, setEditorState] = useState(createEditorStateWithText(text))
  let editor = useRef<Editor>()

  // eslint-disable-next-line
  function onChange(editorState: any) {
    setEditorState(editorState)
  }

  function focus() {
    // eslint-disable-next-line
    // @ts-ignore
    editor?.current?.focus()
  }

  return (
    <Card label='Emoji Example'>
      <>
        <div className={editorStyles.editor} onClick={focus}>
          <DraftEditor
            editorState={editorState}
            onChange={onChange}
            usePluginEditor={true}
            // eslint-disable-next-line
            // @ts-ignore
            pluginProps={{ ref: (element: Node) => editor = element, plugins }}
          />
          <EmojiSuggestions />
        </div>
        <div className={editorStyles.options}>
          <EmojiSelect />
        </div>
      </>
    </Card>
  )
}
