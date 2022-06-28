import React, { Component } from 'react'
import { createEditorStateWithText } from '@draft-js-plugins/editor'
import createHashtagPlugin from '@draft-js-plugins/hashtag'

import Card from '../Card'
import { DraftEditor } from '../index'
import editorStyles from './EditorStyle.module.css'
import hashtagStyles from './HashtagStyle.module.css'
import '@draft-js-plugins/hashtag/lib/plugin.css'

const hashtagPlugin = createHashtagPlugin({ theme: hashtagStyles })
const plugins = [hashtagPlugin]
const text = `#TIL: This editor can have all sorts of #hashtags. Pretty #cool :)
Try it yourself by starting a word with a # (hash character) …
`

export default class SimpleHashtagEditor extends Component {
  state = {
    editorState: createEditorStateWithText(text),
  }

  // eslint-disable-next-line
  onChange = (editorState: any): void => {
    this.setState({
      editorState,
    })
  }

  render(): JSX.Element {
    return (
      <Card label='Hashtag Example'>
        <div className={editorStyles.editor}>
          <DraftEditor
            editorState={this.state.editorState}
            onChange={this.onChange}
            usePluginEditor={true}
            pluginProps={{
              plugins,
            }}
          />
        </div>
      </Card>
    )
  }
}
