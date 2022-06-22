import React from 'react'
import {
  Editor,
  Transforms,
  Text,
} from 'slate'

import { SlateEditor } from './index'

function Card({children, label,description}: {children:JSX.Element, label:string, description?:string}) {
  return (
    <div style={{ padding: '30px', boxShadow: '0 2px 4px rgb(0 0 0 / 50%)', borderRadius: '8px' }}>
      <h1 style={{ textAlign: 'center', fontWeight: 400 }}>{label}</h1>
      <p style={{ textAlign: 'center', fontWeight: 400 }}>{description}</p>
      {children}
    </div>
  )
}

const CodeElement = (props: any) => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  )
}

const DefaultElement = (props: any) => {
  return <p {...props.attributes}>{props.children}</p>
}

const Leaf = (props: any) => {
  return (
    <span
      {...props.attributes}
      style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal' }}
    >
      {props.children}
    </span>
  )
}

export default function SlateEditorExample(): JSX.Element {
  const [editor, setEditor] = React.useState()
  const renderElement = React.useCallback((props: any) => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />
      default:
        return <DefaultElement {...props} />
    }
  }, [])

  // Define a leaf rendering function that is memoized with `useCallback`.
  const renderLeaf = React.useCallback(props => {
    return <Leaf {...props} />
  }, [])

  const CustomEditor = {
    isBoldMarkActive(editor: any) {
      const [match] = Editor.nodes(editor, {
        // eslint-disable-next-line
            // @ts-ignore
        match: n => n.bold === true,
        universal: true,
      })
  
      return !!match
    },
  
    isCodeBlockActive(editor: any) {
      const [match] = Editor.nodes(editor, {
        // eslint-disable-next-line
            // @ts-ignore
        match: n => n.type === 'code',
      })
  
      return !!match
    },
  
    toggleBoldMark(editor: any) {
      const isActive = CustomEditor.isBoldMarkActive(editor)
      Transforms.setNodes(
        editor,
        // eslint-disable-next-line
            // @ts-ignore
        { bold: isActive ? null : true },
        { match: n => Text.isText(n), split: true }
      )
    },
  
    toggleCodeBlock(editor: any) {
      const isActive = CustomEditor.isCodeBlockActive(editor)
      Transforms.setNodes(
        editor,
        // eslint-disable-next-line
            // @ts-ignore
        { type: isActive ? null : 'code' },
        { match: n => Editor.isBlock(editor, n) }
      )
    },
  }

  return (
    <>
      <Card label='Plain Editor'>
        <SlateEditor />
      </Card>
      <Card label='Editor with initial value'>
        <SlateEditor
          initialValue={[
            {
              // eslint-disable-next-line
              // @ts-ignore
              type: 'paragraph',
              children: [{ text: 'A line of text in a paragraph.' }],
            },
          ]}
        />
      </Card>
      <Card label='Adding event listener' description='Type & and see the magic'>
        <SlateEditor
          // eslint-disable-next-line
          // @ts-ignore
          onKeyDown={(event: Event, editor: any) => {
            // eslint-disable-next-line
            // @ts-ignore
            if (event.key === '&') {
              // Prevent the ampersand character from being inserted.
              event.preventDefault()
              // Execute the `insertText` method when the event occurs.
              // editor.insertText('and')
              console.log(editor)
            }
          }}
        />
      </Card>
      <Card label='Define Custom Elements' description='Type ctrl + ` to convert the text into code.'>
        <SlateEditor
          renderElement={renderElement}
          // eslint-disable-next-line
          // @ts-ignore
          onKeyDown={(event: Event, editor: any) => {
            // eslint-disable-next-line
            // @ts-ignore
            if (event.key === '`' && event.ctrlKey) {
              event.preventDefault()
              const [match] = Editor.nodes(editor, {
                // eslint-disable-next-line
                // @ts-ignore
                match: n => n.type === 'code',
              })
              Transforms.setNodes(
                editor,
                // eslint-disable-next-line
                // @ts-ignore
                { type: match ? 'paragraph' : 'code' },
                { match: n => Editor.isBlock(editor, n) }
              )
            }
          }}
        />
      </Card>
      <Card label='Applying Custom Formatting' description='Select a word and Type B to make it bold.'>
        <SlateEditor
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          // eslint-disable-next-line
          // @ts-ignore
          onKeyDown={(event: Event, editor: any) => {
            // eslint-disable-next-line
            // @ts-ignore
            switch(event.key) {
              case '`': {
                event.preventDefault()
                const [match] = Editor.nodes(editor, {
                  // eslint-disable-next-line
                  // @ts-ignore
                  match: n => n.type === 'code',
                })
                Transforms.setNodes(
                  editor,
                  // eslint-disable-next-line
                  // @ts-ignore
                  { type: match ? 'paragraph' : 'code' },
                  { match: n => Editor.isBlock(editor, n) }
                )
                break
              }

              case 'b': {
                event.preventDefault()
                Transforms.setNodes(
                  editor,
                  // eslint-disable-next-line
                  // @ts-ignore
                  { bold: true },
                  // Apply it to text nodes, and split the text node up if the
                  // selection is overlapping only part of it.
                  // eslint-disable-next-line
                  // @ts-ignore
                  { match: n => Text.isText(n), split: true }
                )
                break
              }
            }
          }}
        />
      </Card>
      <Card label='Executing Commands'>
        <>
          <button
            onMouseDown={event => {
              event.preventDefault()
              CustomEditor.toggleBoldMark(editor)
            }}
          >
            Bold
          </button>
          <button
            onMouseDown={event => {
              event.preventDefault()
              CustomEditor.toggleCodeBlock(editor)
            }}
          >
            Code Block
          </button>
          <SlateEditor
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            getEditor={(e: any) => setEditor(e)}
            // eslint-disable-next-line
            // @ts-ignore
            onKeyDown={(event: Event, editor: any) => {
              // eslint-disable-next-line
              // @ts-ignore
              switch(event.key) {
                case '`': {
                  event.preventDefault()
                  const [match] = Editor.nodes(editor, {
                    // eslint-disable-next-line
                    // @ts-ignore
                    match: n => n.type === 'code',
                  })
                  Transforms.setNodes(
                    editor,
                    // eslint-disable-next-line
                    // @ts-ignore
                    { type: match ? 'paragraph' : 'code' },
                    { match: n => Editor.isBlock(editor, n) }
                  )
                  break
                }

                case 'b': {
                  event.preventDefault()
                  Transforms.setNodes(
                    editor,
                    // eslint-disable-next-line
                    // @ts-ignore
                    { bold: true },
                    // Apply it to text nodes, and split the text node up if the
                    // selection is overlapping only part of it.
                    // eslint-disable-next-line
                    // @ts-ignore
                    { match: n => Text.isText(n), split: true }
                  )
                  break
                }
              }
            }}
          />
        </>
      </Card>
    </>
  )
}
