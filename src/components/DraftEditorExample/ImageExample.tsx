import React, { Component } from 'react'
import { convertFromRaw, EditorState } from 'draft-js'
import createImagePlugin from '@draft-js-plugins/image'
import PropTypes from 'prop-types'

import Card from '../Card'
import { DraftEditor } from '../index'
import styles from './ImageStyles.module.css'
import '@draft-js-plugins/image/lib/plugin.css'

class ImageAdd extends Component {
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

  addImage = () => {
    // eslint-disable-next-line
    // @ts-ignore
    this.props.onChange(this.props.modifier(this.props.editorState, this.state.url))
  }

  // eslint-disable-next-line
  changeUrl = (evt: any) => {
    this.setState({ url: evt.target.value })
  }

  render() {
    const popoverClassName = this.state.open ? styles.addImagePopover : styles.addImageClosedPopover
    const buttonClassName = this.state.open ? styles.addImagePressedButton : styles.addImageButton

    return (
      <div className={styles.addImage}>
        <button className={buttonClassName} onMouseUp={this.openPopover} type='button'>
          +
        </button>
        <div className={popoverClassName} onClick={this.onPopoverClick}>
          <input
            type='text'
            placeholder='Paste the image url …'
            className={styles.addImageInput}
            onChange={this.changeUrl}
            value={this.state.url}
          />
          <button className={styles.addImageConfirmButton} type='button' onClick={this.addImage}>
            Add
          </button>
        </div>
      </div>
    )
  }
}

// eslint-disable-next-line
// @ts-ignore
ImageAdd.propTypes = {
  editorState: PropTypes.any,
  onChange: PropTypes.func,
  modifier: PropTypes.func,
}

const initialState = {
  entityMap: {
    0: {
      type: 'IMAGE',
      mutability: 'IMMUTABLE',
      data: {
        src: 'https://images.unsplash.com/photo-1589229137277-70d507f80b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNDgzNzgyOQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200',
      },
    },
  },
  blocks: [
    {
      key: '9gm3s',
      text: 'You can have images in your text field. This is a very rudimentary example, but you can enhance the image plugin with resizing, focus or alignment plugins.',
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

const imagePlugin = createImagePlugin()
const plugins = [imagePlugin]

export default class SimpleImageEditor extends Component {
  state = {
    // eslint-disable-next-line
    // @ts-ignore
    editorState: EditorState.createWithContent(convertFromRaw(initialState)),
  }

  // eslint-disable-next-line
  onChange = (editorState: any): void => {
    this.setState({
      editorState,
    })
  }

  focus = (): void => {
    // eslint-disable-next-line
    // @ts-ignore
    this.editor.focus()
  }

  render(): JSX.Element {
    return (
      <Card label='Image Example'>
        <div>
          <div>
            <DraftEditor
              editorState={this.state.editorState}
              onChange={this.onChange}
              usePluginEditor={true}
              pluginProps={{
                plugins,
              }}
            />
            <ImageAdd
              // eslint-disable-next-line
              // @ts-ignore
              editorState={this.state.editorState}
              onChange={this.onChange}
              modifier={imagePlugin.addImage}
            />
          </div>
        </div>
      </Card>
    )
  }
}
