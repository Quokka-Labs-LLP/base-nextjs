import React, { useState, useCallback, useMemo } from 'react'
import { withReact, ReactEditor } from 'slate-react'
import { Text, Descendant, createEditor } from 'slate'
import { css } from '@emotion/css'
import { withHistory } from 'slate-history'

import { SlateEditor } from './index'
import Icon from './Icon'
import Toolbar from './Toolbar'
import { LeafProp } from './types'

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [
      {
        text: 'This is editable text that you can search. As you search, it looks for matching strings of text, and adds ',
      },
      { text: 'decorations', bold: true },
      { text: ' to them in realtime.' },
    ],
  } as Descendant,
  {
    type: 'paragraph',
    children: [{ text: 'Try it out for yourself by typing in the search box above!' }],
  } as Descendant,
]

function Card({ children, label, description }: { children: JSX.Element; label: string; description?: string }) {
  const commonCSS = css`
    text-align: center;
    font-weight: 400;
  `
  const box = css`
    padding: 30px;
    box-shadow: 0 2px 4px rgb(0 0 0 / 50%);
    border-radius: 8px;
  `

  return (
    <div className={box}>
      <h1 className={commonCSS}>{label}</h1>
      <p className={commonCSS}>{description}</p>
      {children}
    </div>
  )
}

const Leaf = ({
  attributes,
  children,
  leaf,
}: {
  attributes: JSX.ElementAttributesProperty
  children: JSX.Element
  leaf: LeafProp
}) => {
  return (
    <span
      {...attributes}
      {...(leaf.highlight && { 'data-cy': 'search-highlighted' })}
      className={css`
        font-weight: ${leaf.bold && 'bold'};
        background-color: ${leaf.highlight && '#ffeeba'};
      `}
    >
      {children}
    </span>
  )
}

export default function SearchHighlightingExample(): JSX.Element {
  const [search, setSearch] = useState<string | undefined>()
  const editor = useMemo(() => withHistory(withReact(createEditor() as ReactEditor)), [])

  const decorate = useCallback(
    ([node, path]) => {
      // eslint-disable-next-line
      const ranges: any = []

      if (search && Text.isText(node)) {
        const { text } = node
        const parts = text.split(search)
        let offset = 0

        parts.forEach((part, i) => {
          if (i !== 0) {
            ranges.push({
              anchor: { path, offset: offset - search.length },
              focus: { path, offset },
              highlight: true,
            })
          }

          offset = offset + part.length + search.length
        })
      }

      return ranges
    },
    [search],
  )

  return (
    <Card label='Search Highlighting'>
      <SlateEditor
        editor={editor}
        initialValue={initialValue}
        decorate={decorate}
        // eslint-disable-next-line
        // @ts-ignore
        renderLeaf={(props) => <Leaf {...props} />}
        toolbar={
          <Toolbar>
            <div
              className={css`
                position: relative;
              `}
            >
              <Icon
                className={css`
                  position: absolute;
                  top: 0.3em;
                  left: 0.4em;
                  color: #ccc;
                `}
              >
                search
              </Icon>
              <input
                type='search'
                placeholder='Search the text...'
                onChange={(e) => setSearch(e.target.value)}
                className={css`
                  padding-left: 2.5em;
                  width: 100%;
                `}
              />
            </div>
          </Toolbar>
        }
      />
    </Card>
  )
}
