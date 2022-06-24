import React, { useEffect, useMemo } from 'react'
import { createEditor, Descendant } from 'slate'
import { Editable, ReactEditor, Slate, withReact } from 'slate-react'

import { SlateEditableProps } from './types'

export default function SlateEditor(props: SlateEditableProps): JSX.Element {
  const editor = props.editor || useMemo(() => withReact(createEditor() as ReactEditor), [])

  const { initialValue, toolbar } = props
  const editableProps = { ...props }
  delete editableProps.initialValue
  delete editableProps.toolbar

  useEffect(() => {
    props?.getEditor?.(editor)
  }, [])

  return (
    <Slate
      editor={editor}
      value={
        (initialValue || [
          {
            type: 'paragraph',
            children: [{ text: 'Write a note...' }],
          },
        ]) as Descendant[]
      }
    >
      {toolbar}
      {props.children}
      <Editable
        {...editableProps}
        // eslint-disable-next-line
        // @ts-ignore
        onKeyDown={(event: Event) => editableProps?.onKeyDown?.(event, editor)}
        // eslint-disable-next-line
        // @ts-ignore
        onKeyUp={(event: Event) => editableProps?.onKeyUp?.(event, editor)}
      />
    </Slate>
  )
}
