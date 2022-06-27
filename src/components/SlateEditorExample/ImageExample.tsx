import React, { useMemo } from 'react'
import imageExtensions from 'image-extensions'
import isUrl from 'is-url'
import { Transforms, createEditor, Descendant, Node } from 'slate'
import { useSlateStatic, useSelected, useFocused, withReact, ReactEditor } from 'slate-react'
import { withHistory } from 'slate-history'
import { css } from '@emotion/css'

import Card from '../Card'
import { SlateEditor } from '../index'
import Button from './Button'
import Icon from './Icon'
import Toolbar from './Toolbar'

export type EmptyText = {
  text: string
}

export type ImageElement = {
  type: 'image'
  url: string
  children: EmptyText[]
}

export default function ImagesExample(): JSX.Element {
  const editor = useMemo(() => withImages(withHistory(withReact(createEditor() as ReactEditor))), [])

  return (
    <Card label='Images'>
      <SlateEditor
        editor={editor}
        initialValue={initialValue}
        renderElement={(props) => <Element {...props} />}
        placeholder='Enter some text...'
        toolbar={
          <Toolbar>
            <InsertImageButton />
          </Toolbar>
        }
      />
    </Card>
  )
}

const withImages = (editor: ReactEditor) => {
  const { insertData, isVoid } = editor

  // eslint-disable-next-line
  editor.isVoid = (element: any) => {
    return element.type === 'image' ? true : isVoid(element)
  }

  editor.insertData = (data) => {
    const text = data.getData('text/plain')
    const { files } = data

    if (files && files.length > 0) {
      for (const file of files) {
        const reader = new FileReader()
        const [mime] = file.type.split('/')

        if (mime === 'image') {
          reader.addEventListener('load', () => {
            const url = reader.result as string
            insertImage(editor, url)
          })

          reader.readAsDataURL(file)
        }
      }
    } else if (isImageUrl(text)) {
      insertImage(editor, text)
    } else {
      insertData(data)
    }
  }

  return editor
}

const insertImage = (editor: ReactEditor, url: string) => {
  const text = { text: '' }
  const image: ImageElement = { type: 'image', url, children: [text] }
  Transforms.insertNodes(editor, image)
}

// eslint-disable-next-line
const Element = (props: any) => {
  const { attributes, children, element } = props

  switch (element.type) {
    case 'image':
      return <Image {...props} />
    default:
      return <p {...attributes}>{children}</p>
  }
}

// eslint-disable-next-line
const Image = ({
  attributes,
  children,
  element,
}: {
  attributes: JSX.ElementAttributesProperty
  children: JSX.Element
  element: Node
}) => {
  const editor = useSlateStatic()
  const path = ReactEditor.findPath(editor as ReactEditor, element)

  const selected = useSelected()
  const focused = useFocused()
  return (
    <div {...attributes}>
      {children}
      <div
        contentEditable={false}
        className={css`
          position: relative;
        `}
      >
        <img
          // eslint-disable-next-line
          // @ts-ignore
          src={element.url}
          className={css`
            display: block;
            max-width: 100%;
            max-height: 20em;
            box-shadow: ${selected && focused ? '0 0 0 3px #B4D5FF' : 'none'};
          `}
        />
        <Button
          active
          onClick={() => Transforms.removeNodes(editor, { at: path })}
          className={css`
            display: ${selected && focused ? 'inline' : 'none'};
            position: absolute;
            top: 0.5em;
            left: 0.5em;
            background-color: white;
          `}
        >
          <Icon>delete</Icon>
        </Button>
      </div>
    </div>
  )
}

const InsertImageButton = () => {
  const editor = useSlateStatic()
  return (
    <Button
      onMouseDown={(event: Event) => {
        event.preventDefault()
        const url = window.prompt('Enter the URL of the image:')
        insertImage(editor as ReactEditor, url as string)
      }}
    >
      <Icon>image</Icon>
    </Button>
  )
}

const isImageUrl = (url: string) => {
  if (!url) return false
  if (!isUrl(url)) return false
  const ext = new URL(url).pathname.split('.').pop()
  return imageExtensions.includes(ext as string)
}

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [
      {
        text: 'In addition to nodes that contain editable text, you can also create other types of nodes, like images or videos.',
      },
    ],
  } as Descendant,
  {
    type: 'image',
    url: 'https://source.unsplash.com/kFrdX5IeQzI',
    children: [{ text: '' }],
  } as Descendant,
  {
    type: 'paragraph',
    children: [
      {
        text: 'This example shows images in action. It features two ways to add images. You can either add an image via the toolbar icon above, or if you want in on a little secret, copy an image URL to your clipboard and paste it anywhere in the editor!',
      },
    ],
  } as Descendant,
  {
    type: 'paragraph',
    children: [
      {
        text: 'You can delete images with the cross in the top left. Try deleting this sheep:',
      },
    ],
  } as Descendant,
  {
    type: 'image',
    url: 'https://source.unsplash.com/zOwZKwZOZq8',
    children: [{ text: '' }],
  } as Descendant,
]
