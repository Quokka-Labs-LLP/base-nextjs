import React, {
  Dispatch,
  MutableRefObject,
  RefObject,
  SetStateAction,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from 'react'
import { default as PluginEditor, EditorPlugin } from '@draft-js-plugins/editor'
import {
  Editor,
  EditorState,
  ContentBlock,
  DraftBlockRenderMap,
  DraftStyleMap,
  DraftInlineStyle,
  EditorCommand,
  DraftHandleValue,
  SelectionState,
  DraftDragType,
} from 'draft-js'
import 'draft-js/dist/Draft.css'
import { MentionSuggestionsPubProps } from '@draft-js-plugins/mention/lib/MentionSuggestions/MentionSuggestions'
import { EmojiPlugin } from '@draft-js-plugins/emoji'

type DraftTextAlignment = 'left' | 'center' | 'right'
type DraftTextDirectionality = 'LTR' | 'RTL' | 'NEUTRAL'

/**
 * The two most critical props are `editorState` and `onChange`.
 *
 * The `editorState` prop defines the entire state of the editor, while the
 * `onChange` prop is the method in which all state changes are propagated
 * upward to higher-level components.
 *
 * These props are analagous to `value` and `onChange` in controlled React
 * text inputs.
 */
export interface DraftEditorProps {
  editorState?: EditorState
  onChange?(editorState: EditorState): void

  placeholder?: string | undefined

  /**
   * Specify whether text alignment should be forced in a direction
   * regardless of input characters.
   */
  textAlignment?: DraftTextAlignment | undefined

  /**
   * Specify whether text directionality should be forced in a direction
   * regardless of input characters.
   */
  textDirectionality?: DraftTextDirectionality | undefined

  /**
   * For a given `ContentBlock` object, return an object that specifies
   * a custom block component and/or props. If no object is returned,
   * the default `TextEditorBlock` is used.
   */
  // eslint-disable-next-line
  blockRendererFn?(block: ContentBlock): any

  /**
   * Provide a map of block rendering configurations. Each block type maps to
   * an element tag and an optional react element wrapper. This configuration
   * is used for both rendering and paste processing.
   */
  blockRenderMap?: DraftBlockRenderMap | undefined

  /**
   * Function that allows to define class names to apply to the given block when it is rendered.
   */
  blockStyleFn?(block: ContentBlock): string

  /**
   * Provide a map of inline style names corresponding to CSS style objects
   * that will be rendered for matching ranges.
   */
  customStyleMap?: DraftStyleMap | undefined

  /**
   * Define a function to transform inline styles to CSS objects
   * that are applied to spans of text.
   */
  customStyleFn?: ((style: DraftInlineStyle, block: ContentBlock) => React.CSSProperties) | undefined

  /**
   * A function that accepts a synthetic key event and returns
   * the matching DraftEditorCommand constant, or null if no command should
   * be invoked.
   */
  keyBindingFn?(e: SyntheticEvent): EditorCommand | null

  /**
   * Set whether the `DraftEditor` component should be editable. Useful for
   * temporarily disabling edit behavior or allowing `DraftEditor` rendering
   * to be used for consumption purposes.
   */
  readOnly?: boolean | undefined

  /**
   * Note: spellcheck is always disabled for IE. If enabled in Safari, OSX
   * autocorrect is enabled as well.
   */
  spellCheck?: boolean | undefined

  /**
   * When the Editor loses focus (blurs) text selections are cleared
   * by default to mimic <textarea> behaviour, however in some situations
   * users may wish to preserve native behaviour.
   */
  preserveSelectionOnBlur?: boolean | undefined

  /**
   * Set whether to remove all style information from pasted content. If your
   * use case should not have any block or inline styles, it is recommended
   * that you set this to `true`.
   */
  stripPastedStyles?: boolean | undefined
  formatPastedText?: ((text: string, html?: string) => { text: string; html: string | undefined }) | undefined

  tabIndex?: number | undefined

  // exposed especially to help improve mobile web behaviors
  autoCapitalize?: string | undefined
  autoComplete?: string | undefined
  autoCorrect?: string | undefined

  ariaActiveDescendantID?: string | undefined
  ariaAutoComplete?: string | undefined
  ariaControls?: string | undefined
  ariaDescribedBy?: string | undefined
  ariaExpanded?: boolean | undefined
  ariaLabel?: string | undefined
  ariaLabelledBy?: string | undefined
  ariaMultiline?: boolean | undefined
  ariaOwneeID?: string | undefined

  role?: string | undefined

  webDriverTestID?: string | undefined

  /**
   * If using server-side rendering, this prop is required to be set to
   * avoid client/server mismatches.
   */
  editorKey?: string | undefined

  // Cancelable event handlers, handled from the top level down. A handler
  // that returns `handled` will be the last handler to execute for that event.

  /**
   * Useful for managing special behavior for pressing the `Return` key. E.g.
   * removing the style from an empty list item.
   */
  handleReturn?(e: SyntheticEvent, editorState: EditorState): DraftHandleValue

  /**
   * Map a key command string provided by your key binding function to a
   * specified behavior.
   */
  handleKeyCommand?(command: EditorCommand, editorState: EditorState, eventTimeStamp: number): DraftHandleValue

  /**
   * Handle intended text insertion before the insertion occurs. This may be
   * useful in cases where the user has entered characters that you would like
   * to trigger some special behavior. E.g. immediately converting `:)` to an
   * emoji Unicode character, or replacing ASCII quote characters with smart
   * quotes.
   */
  handleBeforeInput?(chars: string, editorState: EditorState, eventTimeStamp: number): DraftHandleValue

  handlePastedText?(text: string, html: string | undefined, editorState: EditorState): DraftHandleValue

  handlePastedFiles?(files: Array<Blob>): DraftHandleValue

  /** Handle dropped files */
  handleDroppedFiles?(selection: SelectionState, files: Array<Blob>): DraftHandleValue

  /** Handle other drops to prevent default text movement/insertion behaviour */
  handleDrop?(
    selection: SelectionState,
    // eslint-disable-next-line
    dataTransfer: any,
    isInternal: DraftDragType,
  ): DraftHandleValue

  // Non-cancelable event triggers.
  onEscape?(e: SyntheticEvent): void
  onTab?(e: SyntheticEvent): void
  onUpArrow?(e: SyntheticEvent): void
  onDownArrow?(e: SyntheticEvent): void
  onRightArrow?(e: SyntheticEvent): void
  onLeftArrow?(e: SyntheticEvent): void

  onBlur?(e: SyntheticEvent): void
  onFocus?(e: SyntheticEvent): void
  onCopy?(editor: Editor, e: SyntheticEvent): void
  onCut?(editor: Editor, e: SyntheticEvent): void

  // Get the editor state of the Draft Editor.
  getEditorState?: ({
    editorState,
    setEditorState,
  }: {
    editorState?: EditorState
    setEditorState?: Dispatch<SetStateAction<EditorState>>
  }) => void
  // Get the reference of the Draft Editor.
  getEditor?: (editor: MutableRefObject<null>) => void
  usePluginEditor?: boolean
  // eslint-disable-next-line
  pluginProps?: {
    plugins?: (EditorPlugin & {
      MentionSuggestions: React.ComponentType<MentionSuggestionsPubProps>
    })[] | EmojiPlugin[]
    ref?: RefObject<PluginEditor>
    editorKey: string
  }
  // eslint-disable-next-line
  ref?: (element: any) => RefObject<PluginEditor>
  children?: JSX.Element
}

export default function DraftEditor(props: DraftEditorProps | Readonly<DraftEditorProps> | null): JSX.Element {
  const [editorState, setEditorState] = useState(props?.editorState || EditorState.createEmpty())
  const editor = useRef(null)
  const properties: DraftEditorProps | Readonly<DraftEditorProps> | null = { ...props }
  const { usePluginEditor, pluginProps, children } = properties

  // eslint-disable-next-line
  // @ts-ignore
  delete properties.usePluginEditor
  // eslint-disable-next-line
  // @ts-ignore
  delete properties.pluginProps
  // eslint-disable-next-line
  // @ts-ignore
  delete properties.children

  useEffect(() => {
    props?.getEditorState?.({ editorState, setEditorState })
    props?.getEditor?.(editor)
  }, [])

  function onChange(_editorState: EditorState) {
    setEditorState(_editorState)
  }

  return (
    <>
      {usePluginEditor ? (
        // eslint-disable-next-line
        // @ts-ignore
        <PluginEditor editorState={editorState} onChange={props?.onChange || onChange} {...properties} {...pluginProps} />
      ) : (
        // eslint-disable-next-line
        // @ts-ignore
        <Editor editorState={editorState} ref={editor} onChange={props?.onChange || onChange} {...properties} />
      )}
      {children}
    </>
  )
}
