import React, { useCallback } from 'react'
import isHotkey from 'is-hotkey'
import { ReactEditor, useSlate } from 'slate-react'
import { Editor, Transforms, Descendant, Element as SlateElement } from 'slate'

import { SlateEditor } from './index'
import Button from './Button'
import Icon from './Icon'
import Toolbar from './Toolbar'

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
}

const LIST_TYPES = ['numbered-list', 'bulleted-list']
const TEXT_ALIGN_TYPES = ['left', 'center', 'right', 'justify']

function Card({ children, label, description }: { children: JSX.Element; label: string; description?: string }) {
  return (
    <div style={{ padding: '30px', boxShadow: '0 2px 4px rgb(0 0 0 / 50%)', borderRadius: '8px' }}>
      <h1 style={{ textAlign: 'center', fontWeight: 400 }}>{label}</h1>
      <p style={{ textAlign: 'center', fontWeight: 400 }}>{description}</p>
      {children}
    </div>
  )
}

export default function RichTextExample(): JSX.Element {
  const [editor, setEditor] = React.useState()
  const renderElement = useCallback((props) => <Element {...props} />, [])
  const renderLeaf = useCallback((props) => <Leaf {...props} />, [])
  // const editor = useMemo(() => withHistory(withReact(createEditor() as ReactEditor)), [])

  return (
    <Card label='Plain Editor'>
      <SlateEditor
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder='Enter some rich text…'
        spellCheck
        autoFocus
        initialValue={initialValue}
        // eslint-disable-next-line
        getEditor={(e: any) => setEditor(e)}
        onKeyDown={(event) => {
          for (const hotkey in HOTKEYS) {
            if (isHotkey(hotkey, event as React.KeyboardEvent<HTMLDivElement>)) {
              event.preventDefault()
              // eslint-disable-next-line
              // @ts-ignore
              const mark = HOTKEYS[hotkey]
              // eslint-disable-next-line
              // @ts-ignore
              toggleMark(editor, mark)
            }
          }
        }}
        toolbar={
          <Toolbar>
            <MarkButton format='bold' icon='format_bold' />
            <MarkButton format='italic' icon='format_italic' />
            <MarkButton format='underline' icon='format_underlined' />
            <MarkButton format='code' icon='code' />
            <BlockButton format='heading-one' icon='looks_one' />
            <BlockButton format='heading-two' icon='looks_two' />
            <BlockButton format='block-quote' icon='format_quote' />
            <BlockButton format='numbered-list' icon='format_list_numbered' />
            <BlockButton format='bulleted-list' icon='format_list_bulleted' />
            <BlockButton format='left' icon='format_align_left' />
            <BlockButton format='center' icon='format_align_center' />
            <BlockButton format='right' icon='format_align_right' />
            <BlockButton format='justify' icon='format_align_justify' />
          </Toolbar>
        }
      />
    </Card>
  )
}

const toggleBlock = (editor: ReactEditor, format: string) => {
  const isActive = isBlockActive(editor, format, TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type')
  const isList = LIST_TYPES.includes(format)

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      // eslint-disable-next-line
      LIST_TYPES.includes((n as any).type) &&
      !TEXT_ALIGN_TYPES.includes(format),
    split: true,
  })
  let newProperties: Partial<SlateElement>
  if (TEXT_ALIGN_TYPES.includes(format)) {
    newProperties = {
      // eslint-disable-next-line
      // @ts-ignore
      align: isActive ? undefined : format,
    }
  } else {
    newProperties = {
      // eslint-disable-next-line
      // @ts-ignore
      type: isActive ? 'paragraph' : isList ? 'list-item' : format,
    }
  }
  Transforms.setNodes<SlateElement>(editor, newProperties)

  if (!isActive && isList) {
    const block = { type: format, children: [] }
    Transforms.wrapNodes(editor, block)
  }
}

const toggleMark = (editor: ReactEditor, format: string) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}

const isBlockActive = (editor: ReactEditor, format: string, blockType = 'type') => {
  const { selection } = editor
  if (!selection) return false

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        // eslint-disable-next-line
        // @ts-ignore
        n[blockType] === format,
    }),
  )

  return !!match
}

const isMarkActive = (editor: ReactEditor, format: string) => {
  const marks = Editor.marks(editor)
  // eslint-disable-next-line
  // @ts-ignore
  return marks ? marks[format] === true : false
}

const Element = ({
  attributes,
  children,
  element,
}: {
  attributes: JSX.ElementAttributesProperty
  children: JSX.Element
  // eslint-disable-next-line
  element: any
}) => {
  const style = { textAlign: element.align }
  switch (element.type) {
    case 'block-quote':
      return (
        <blockquote style={style} {...attributes}>
          {children}
        </blockquote>
      )
    case 'bulleted-list':
      return (
        <ul style={style} {...attributes}>
          {children}
        </ul>
      )
    case 'heading-one':
      return (
        <h1 style={style} {...attributes}>
          {children}
        </h1>
      )
    case 'heading-two':
      return (
        <h2 style={style} {...attributes}>
          {children}
        </h2>
      )
    case 'list-item':
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      )
    case 'numbered-list':
      return (
        <ol style={style} {...attributes}>
          {children}
        </ol>
      )
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      )
  }
}

export interface Leaf {
  bold?: boolean
  code?: boolean
  italic?: boolean
  underline?: boolean
  text?: string
}

const Leaf = ({
  attributes,
  children,
  leaf,
}: {
  attributes: JSX.ElementAttributesProperty
  children: JSX.Element
  leaf: Leaf
}) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.code) {
    children = <code>{children}</code>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }

  return <span {...attributes}>{children}</span>
}

const BlockButton = ({ format, icon }: { format: string; icon: string }) => {
  const editor = useSlate() as ReactEditor
  return (
    <Button
      active={isBlockActive(editor, format, TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type')}
      onMouseDown={(event: Event) => {
        event.preventDefault()
        toggleBlock(editor, format)
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  )
}

const MarkButton = ({ format, icon }: { format: string; icon: string }) => {
  const editor = useSlate() as ReactEditor
  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={(event: Event) => {
        event.preventDefault()
        toggleMark(editor, format)
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  )
}

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [
      { text: 'This is editable ' },
      // eslint-disable-next-line
      // @ts-ignore
      { text: 'rich', bold: true },
      { text: ' text, ' },
      // eslint-disable-next-line
      // @ts-ignore
      { text: 'much', italic: true },
      { text: ' better than a ' },
      // eslint-disable-next-line
      // @ts-ignore
      { text: '<textarea>', code: true },
      { text: '!' },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: "Since it's rich text, you can do things like turn a selection of text ",
      },
      // eslint-disable-next-line
      // @ts-ignore
      { text: 'bold', bold: true },
      {
        text: ', or add a semantically rendered block quote in the middle of the page, like this:',
      },
    ],
  },
  {
    // eslint-disable-next-line
    // @ts-ignore
    type: 'block-quote',
    children: [{ text: 'A wise quote.' }],
  },
  {
    // eslint-disable-next-line
    // @ts-ignore
    type: 'paragraph',
    align: 'center',
    children: [{ text: 'Try it out for yourself!' }],
  },
]
