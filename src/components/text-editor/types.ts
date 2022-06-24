import React from 'react'
import { BaseRange, Descendant, NodeEntry } from 'slate'
import { ReactEditor, RenderElementProps, RenderLeafProps, RenderPlaceholderProps } from 'slate-react'
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
  editor?: ReactEditor
} & React.TextareaHTMLAttributes<HTMLDivElement>

export declare type SlateProps = {
  initialValue?: Descendant[]
}
