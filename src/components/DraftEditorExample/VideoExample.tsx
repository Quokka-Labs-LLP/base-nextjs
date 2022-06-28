import React, { Component } from 'react'
import { EditorState, convertFromRaw, RawDraftContentState } from 'draft-js'
import createVideoPlugin from '@draft-js-plugins/video'
import PropTypes from 'prop-types'

import Card from '../Card'
import styles from './VideoStyles.module.css'
import { DraftEditor } from '../index'
import editorStyles from './EditorStyle.module.css'

const videoPlugin = createVideoPlugin()
const { types } = videoPlugin
const plugins = [videoPlugin]

class VideoAdd extends Component {
  // Start the popover closed
  state = {
    url: '',
    open: false,
  }

  // When the popover is open and users click anywhere on the page,
  // the popover should close
  componentDidMount() {
    document.addEventListener('click', this.closePopover)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.closePopover)
  }

  // Note: make sure whenever a click happens within the popover it is not closed
  onPopoverClick = () => {
    // eslint-disable-next-line
    // @ts-ignore
    this.preventNextClose = true
  }

  openPopover = () => {
    if (!this.state.open) {
      // eslint-disable-next-line
      // @ts-ignore
      this.preventNextClose = true
      this.setState({
        open: true,
      })
    }
  }

  closePopover = () => {
    // eslint-disable-next-line
    // @ts-ignore
    if (!this.preventNextClose && this.state.open) {
      this.setState({
        open: false,
      })
    }

    // eslint-disable-next-line
    // @ts-ignore
    this.preventNextClose = false
  }

  addVideo = () => {
    // eslint-disable-next-line
    // @ts-ignore
    const { editorState, onChange } = this.props
    // eslint-disable-next-line
    // @ts-ignore
    onChange(this.props.modifier(editorState, { src: this.state.url }))
  }

  // eslint-disable-next-line
  changeUrl = (evt: any) => {
    this.setState({ url: evt.target.value })
  }

  render() {
    const popoverClassName = this.state.open ? styles.addVideoPopover : styles.addVideoClosedPopover
    const buttonClassName = this.state.open ? styles.addVideoPressedButton : styles.addVideoButton

    return (
      <div className={styles.addVideo}>
        <button className={buttonClassName} onMouseUp={this.openPopover} type='button'>
          +
        </button>
        <div className={popoverClassName} onClick={this.onPopoverClick}>
          <input
            type='text'
            placeholder='Paste the video url …'
            className={styles.addVideoInput}
            onChange={this.changeUrl}
            value={this.state.url}
          />
          <button className={styles.addVideoConfirmButton} type='button' onClick={this.addVideo}>
            Add
          </button>
        </div>
      </div>
    )
  }
}

// eslint-disable-next-line
// @ts-ignore
VideoAdd.propTypes = {
  editorState: PropTypes.any,
  onChange: PropTypes.func,
  modifier: PropTypes.func,
}

/* eslint-disable */
const initialState = {
  entityMap: {
    0: {
      type: types.VIDEOTYPE,
      mutability: 'IMMUTABLE',
      data: {
        src: 'https://www.youtube.com/watch?v=iEPTlhBmwRg',
      },
    },
  },
  blocks: [
    {
      key: '9gm3s',
      text: 'You can have video in your text field. This is a very rudimentary example, but you can enhance the video plugin with resizing, focus or alignment plugins.',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: 'ov7r',
      text: ' ',
      type: 'atomic',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [
        {
          offset: 0,
          length: 1,
          key: 0,
        },
      ],
      data: {},
    },
    {
      key: 'e23a8',
      text: 'See advanced examples further down …',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
  ],
}

/* eslint-enable */
export default class SimpleVideoEditor extends Component {
  state = {
    editorState: EditorState.createWithContent(convertFromRaw(initialState as RawDraftContentState)),
  }

  // eslint-disable-next-line
  onChange = (editorState: any): void => {
    this.setState({
      editorState,
    })
  }

  render(): JSX.Element {
    return (
      <Card label='Video Example'>
        <div className={editorStyles.editor}>
          <DraftEditor
            editorState={this.state.editorState}
            onChange={this.onChange}
            usePluginEditor={true}
            pluginProps={{ plugins }}
          />
          <VideoAdd
            // eslint-disable-next-line
            // @ts-ignore
            editorState={this.state.editorState}
            onChange={this.onChange}
            modifier={videoPlugin.addVideo}
          />
        </div>
      </Card>
    )
  }
}
