import React, { useEffect, useMemo } from 'react'
import { BaseRange, createEditor, Descendant, NodeEntry } from 'slate'
import { Editable, ReactEditor, RenderElementProps, RenderLeafProps, RenderPlaceholderProps, Slate, withReact } from 'slate-react'
import { DOMRange } from 'slate-react/dist/utils/dom'

export declare type SlateEditableProps = {
  decorate?: (entry: NodeEntry) => BaseRange[]
  onDOMBeforeInput?: (event: InputEvent) => void
  placeholder?: string
  readOnly?: boolean
  role?: string
  style?: React.CSSProperties
  renderElement?: (props: RenderElementProps) => JSX.Element
  renderLeaf?: (props: RenderLeafProps) => JSX.Element
  renderPlaceholder?: (props: RenderPlaceholderProps) => JSX.Element
  scrollSelectionIntoView?: (editor: ReactEditor, domRange: DOMRange) => void
  as?: React.ElementType
  initialValue?: Descendant[]
  toolbar?: JSX.Element
  getEditor?: (T: ReactEditor) => void
} & React.TextareaHTMLAttributes<HTMLDivElement>

export declare type SlateProps = {
  initialValue?: Descendant[]
}

export default function SlateEditor(props: SlateEditableProps): JSX.Element {
  const editor = useMemo(() => withReact(createEditor() as ReactEditor), [])

  const { initialValue, toolbar } = props
  const editableProps = {...props}
  delete editableProps.initialValue
  delete editableProps.toolbar

  useEffect(() => {
    // eslint-disable-next-line
    // @ts-ignore
    window['editor'] = editor
    props?.getEditor?.(editor)
  }, [])

  return (
    <Slate editor={editor} value={initialValue || [
      {
        // eslint-disable-next-line
        // @ts-ignore
        type: 'paragraph',
        children: [{ text: 'Write a note...' }],
      },
    ]}>
      {toolbar}
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
