import Prism from 'prismjs'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-php'
import 'prismjs/components/prism-sql'
import 'prismjs/components/prism-java'
import React, { useState, useCallback, useMemo } from 'react'
import { withReact, ReactEditor } from 'slate-react'
import { Text, createEditor, Descendant } from 'slate'
import { withHistory } from 'slate-history'
import { css } from '@emotion/css'

import { SlateEditor } from './index'
import { LeafProp } from './types'

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

export default function CodeHighlightingExample(): JSX.Element {
  const [language, setLanguage] = useState('js')
  const renderLeaf = useCallback((props) => <Leaf {...props} />, [])
  const editor = useMemo(() => withHistory(withReact(createEditor() as ReactEditor)), [])

  // decorate function depends on the language selected
  const decorate = useCallback(
    ([node, path]) => {
      // eslint-disable-next-line
      const ranges: any[] = []
      if (!Text.isText(node)) {
        return ranges
      }
      const tokens = Prism.tokenize(node.text, Prism.languages[language])
      let start = 0

      for (const token of tokens) {
        const length = getLength(token)
        const end = start + length

        if (typeof token !== 'string') {
          ranges.push({
            [token.type]: true,
            anchor: { path, offset: start },
            focus: { path, offset: end },
          })
        }

        start = end
      }

      return ranges
    },
    [language],
  )

  return (
    <Card label='Code Highlighting'>
      <SlateEditor
        editor={editor}
        initialValue={initialValue}
        decorate={decorate}
        renderLeaf={renderLeaf}
        placeholder='Write some code...'
      >
        <div contentEditable={false} style={{ position: 'relative', top: '5px', right: '5px' }}>
          <h3>
            Select a language
            <select value={language} style={{ float: 'right' }} onChange={(e) => setLanguage(e.target.value)}>
              <option value='js'>JavaScript</option>
              <option value='css'>CSS</option>
              <option value='html'>HTML</option>
              <option value='python'>Python</option>
              <option value='sql'>SQL</option>
              <option value='java'>Java</option>
              <option value='php'>PHP</option>
            </select>
          </h3>
        </div>
      </SlateEditor>
    </Card>
  )
}

// eslint-disable-next-line
const getLength = (token: any) => {
  return typeof token === 'string'
    ? token.length
    : typeof token.content === 'string'
      ? token.content.length
      : // eslint-disable-next-line
      token.content.reduce((l: any, t: any) => l + getLength(t), 0)
}

// different token types, styles found on Prismjs website
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
      className={css`
        font-family: monospace;
        background: hsla(0, 0%, 100%, 0.5);
        ${leaf.comment &&
        css`
          color: slategray;
        `}
        ${(leaf.operator || leaf.url) &&
        css`
          color: #9a6e3a;
        `}
        ${leaf.keyword &&
        css`
          color: #07a;
        `}
        ${(leaf.variable || leaf.regex) &&
        css`
          color: #e90;
        `}
        ${(leaf.number ||
          leaf.boolean ||
          leaf.tag ||
          leaf.constant ||
          leaf.symbol ||
          leaf['attr-name'] ||
          leaf.selector) &&
        css`
          color: #905;
        `}
        ${leaf.punctuation &&
        css`
          color: #999;
        `}
        ${(leaf.string || leaf.char) &&
        css`
          color: #690;
        `}
        ${(leaf.function || leaf['class-name']) &&
        css`
          color: #dd4a68;
        `}
      `}
    >
      {children}
    </span>
  )
}

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [
      {
        text: `function getToken() {
  let token = '';
  return token;
}`,
      },
    ],
  } as Descendant,
]

// modifications and additions to prism library

Prism.languages.python = Prism.languages.extend('python', {})
Prism.languages.insertBefore('python', 'prolog', {
  comment: { pattern: /##[^\n]*/, alias: 'comment' },
})
Prism.languages.javascript = Prism.languages.extend('javascript', {})
Prism.languages.insertBefore('javascript', 'prolog', {
  comment: { pattern: /\/\/[^\n]*/, alias: 'comment' },
})
Prism.languages.html = Prism.languages.extend('html', {})
Prism.languages.insertBefore('html', 'prolog', {
  comment: { pattern: /<!--[^\n]*-->/, alias: 'comment' },
})
Prism.languages.markdown = Prism.languages.extend('markup', {})
Prism.languages.insertBefore('markdown', 'prolog', {
  blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: 'punctuation' },
  code: [
    { pattern: /^(?: {4}|\t).+/m, alias: 'keyword' },
    { pattern: /``.+?``|`[^`\n]+`/, alias: 'keyword' },
  ],
  title: [
    {
      pattern: /\w+.*(?:\r?\n|\r)(?:==+|--+)/,
      alias: 'important',
      inside: { punctuation: /==+$|--+$/ },
    },
    {
      pattern: /(^\s*)#+.+/m,
      lookbehind: !0,
      alias: 'important',
      inside: { punctuation: /^#+|#+$/ },
    },
  ],
  hr: {
    pattern: /(^\s*)([*-])([\t ]*\2){2,}(?=\s*$)/m,
    lookbehind: !0,
    alias: 'punctuation',
  },
  list: {
    pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
    lookbehind: !0,
    alias: 'punctuation',
  },
  'url-reference': {
    pattern:
      /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
    inside: {
      variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
      string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
      punctuation: /^[\[\]!:]|[<>]/,
    },
    alias: 'url',
  },
  bold: {
    pattern: /(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
    lookbehind: !0,
    inside: { punctuation: /^\*\*|^__|\*\*$|__$/ },
  },
  italic: {
    pattern: /(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
    lookbehind: !0,
    inside: { punctuation: /^[*_]|[*_]$/ },
  },
  url: {
    pattern: /!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,
    inside: {
      variable: { pattern: /(!?\[)[^\]]+(?=\]$)/, lookbehind: !0 },
      string: { pattern: /"(?:\\.|[^"\\])*"(?=\)$)/ },
    },
  },
})

// eslint-disable-next-line
// @ts-ignore
Prism.languages.markdown.bold.inside.url = Prism.util.clone(Prism.languages.markdown.url)
// eslint-disable-next-line
// @ts-ignore
Prism.languages.markdown.italic.inside.url = Prism.util.clone(Prism.languages.markdown.url)
// eslint-disable-next-line
// @ts-ignore
Prism.languages.markdown.bold.inside.italic = Prism.util.clone(Prism.languages.markdown.italic)
// eslint-disable-next-line
// @ts-ignore
Prism.languages.markdown.italic.inside.bold = Prism.util.clone(Prism.languages.markdown.bold)
