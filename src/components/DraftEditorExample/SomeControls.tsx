import React from 'react'
import { DraftEditorCommand, EditorState, RichUtils } from 'draft-js'

import { DraftEditor } from '../index'
import Card from '../Card'

export default class SomeControlsEditor extends React.Component {
  constructor(props: JSX.IntrinsicAttributes) {
    super(props)
    this.state = {
      editorState: EditorState.createEmpty(),
    }
  }

  onChange = (editorState: EditorState): void => {
    this.setState({
      editorState,
    })
  }

  handleKeyCommand = (command: DraftEditorCommand): string => {
    const newState = RichUtils.handleKeyCommand(
      // eslint-disable-next-line
      // @ts-ignore
      this.state.editorState,
      command,
    )
    if (newState) {
      this.onChange(newState)
      return 'handled'
    }
    return 'not-handled'
  }

  onUnderlineClick = (): void => {
    this.onChange(
      // eslint-disable-next-line
      // @ts-ignore
      RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'),
    )
  }

  onBoldClick = (): void => {
    // eslint-disable-next-line
    // @ts-ignore
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'))
  }

  onItalicClick = (): void => {
    this.onChange(
      // eslint-disable-next-line
      // @ts-ignore
      RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'),
    )
  }

  render(): JSX.Element {
    return (
      <Card label='Simple Draft Editor'>
      <div className='editorContainer'>
        <button onClick={this.onUnderlineClick}>U</button>
        <button onClick={this.onBoldClick}>
          <b>B</b>
        </button>
        <button onClick={this.onItalicClick}>
          <em>I</em>
        </button>
        <div className='editors'>
          <DraftEditor
            // eslint-disable-next-line
            // @ts-ignore
            editorState={this.state.editorState}
            // eslint-disable-next-line
            // @ts-ignore
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            placeholder='Write here...'
          />
        </div>
      </div>
      </Card>
    )
  }
}
