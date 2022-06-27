import React, { useMemo, useCallback } from 'react'
import { withReact, useSlateStatic, useReadOnly, ReactEditor } from 'slate-react'
import { Editor, Transforms, Range, Point, createEditor, Descendant, Element as SlateElement } from 'slate'
import { css } from '@emotion/css'
import { withHistory } from 'slate-history'

import Card from '../Card'
import { SlateEditor } from '../index'

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [
      {
        text: 'With Slate you can build complex block types that have their own embedded content and behaviors, like rendering checkboxes inside check list items!',
      },
    ],
  },
  {
    type: 'check-list-item',
    checked: true,
    children: [{ text: 'Slide to the left.' }],
  } as Descendant,
  {
    type: 'check-list-item',
    checked: true,
    children: [{ text: 'Slide to the right.' }],
  },
  {
    type: 'check-list-item',
    checked: false,
    children: [{ text: 'Criss-cross.' }],
  },
  {
    type: 'check-list-item',
    checked: true,
    children: [{ text: 'Criss-cross!' }],
  },
  {
    type: 'check-list-item',
    checked: false,
    children: [{ text: 'Cha cha real smooth…' }],
  },
  {
    type: 'check-list-item',
    checked: false,
    children: [{ text: "Let's go to work!" }],
  },
  {
    type: 'paragraph',
    children: [{ text: 'Try it out for yourself!' }],
  },
] as Descendant[]

export default function CheckListsExample(): JSX.Element {
  const renderElement = useCallback((props) => <Element {...props} />, [])
  const editor = useMemo(() => withChecklists(withHistory(withReact(createEditor() as ReactEditor))), [])

  return (
    <Card label='Checkboxes Example'>
      <SlateEditor
        editor={editor}
        renderElement={renderElement}
        placeholder='Get to work…'
        spellCheck
        autoFocus
        initialValue={initialValue}
      />
    </Card>
  )
}

const withChecklists = (editor: ReactEditor) => {
  const { deleteBackward } = editor

  editor.deleteBackward = (...args) => {
    const { selection } = editor

    if (selection && Range.isCollapsed(selection)) {
      const [match] = Editor.nodes(editor, {
        match: (n) =>
          !Editor.isEditor(n) &&
          SlateElement.isElement(n) &&
          // eslint-disable-next-line
          (n as any).type === 'check-list-item',
      })

      if (match) {
        const [, path] = match
        const start = Editor.start(editor, path)

        if (Point.equals(selection.anchor, start)) {
          const newProperties: Partial<SlateElement> = {
            type: 'paragraph',
          } as Partial<SlateElement>
          Transforms.setNodes(editor, newProperties, {
            match: (n) =>
              !Editor.isEditor(n) &&
              SlateElement.isElement(n) &&
              // eslint-disable-next-line
              (n as any).type === 'check-list-item',
          })
          return
        }
      }
    }

    deleteBackward(...args)
  }

  return editor
}

// eslint-disable-next-line
const Element = (props: any) => {
  const { attributes, children, element } = props

  switch (element.type) {
    case 'check-list-item':
      return <CheckListItemElement {...props} />
    default:
      return <p {...attributes}>{children}</p>
  }
}

const CheckListItemElement = ({
  attributes,
  children,
  element,
}: {
  attributes: JSX.ElementAttributesProperty
  children: JSX.Element
  element: HTMLInputElement
}) => {
  const editor = useSlateStatic() as ReactEditor
  const readOnly = useReadOnly()
  const { checked } = element
  return (
    <div
      {...attributes}
      className={css`
        display: flex;
        flex-direction: row;
        align-items: center;
        & + & {
          margin-top: 0;
        }
      `}
    >
      <span
        contentEditable={false}
        className={css`
          margin-right: 0.75em;
        `}
      >
        <input
          type='checkbox'
          checked={checked}
          onChange={(event) => {
            // eslint-disable-next-line
            // @ts-ignore
            const path = ReactEditor.findPath(editor, element)
            const newProperties: Partial<SlateElement> = {
              checked: event.target.checked,
            } as Partial<SlateElement>
            Transforms.setNodes(editor, newProperties, { at: path })
          }}
        />
      </span>
      <span
        contentEditable={!readOnly}
        suppressContentEditableWarning
        className={css`
          flex: 1;
          opacity: ${checked ? 0.666 : 1};
          text-decoration: ${!checked ? 'none' : 'line-through'};
          &:focus {
            outline: none;
          }
        `}
      >
        {children}
      </span>
    </div>
  )
}
