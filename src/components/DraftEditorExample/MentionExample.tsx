import React, { ReactElement, useCallback, useMemo, useRef, useState } from 'react'
import Editor from '@draft-js-plugins/editor'
import createMentionPlugin, { defaultSuggestionsFilter } from '@draft-js-plugins/mention'
import { MentionData } from '@draft-js-plugins/mention'

import editorStyles from './EditorStyle.module.css'
import mentionsStyles from './MentionStyle.module.css'
import { DraftEditor } from '../index'
import Card from '../Card'
import '@draft-js-plugins/mention/lib/plugin.css'

const mentions: MentionData[] = [
  {
    name: 'Matthew Russell',
    link: 'https://twitter.com/mrussell247',
    avatar: 'https://pbs.twimg.com/profile_images/517863945/mattsailing_400x400.jpg',
  },
  {
    name: 'Julian Krispel-Samsel',
    link: 'https://twitter.com/juliandoesstuff',
    avatar: 'https://avatars2.githubusercontent.com/u/1188186?v=3&s=400',
  },
  {
    name: 'Jyoti Puri',
    link: 'https://twitter.com/jyopur',
    avatar: 'https://avatars0.githubusercontent.com/u/2182307?v=3&s=400',
  },
  {
    name: 'Max Stoiber',
    link: 'https://twitter.com/mxstbr',
    avatar: 'https://avatars0.githubusercontent.com/u/7525670?s=200&v=4',
  },
  {
    name: 'Nik Graf',
    link: 'https://twitter.com/nikgraf',
    avatar: 'https://avatars0.githubusercontent.com/u/223045?v=3&s=400',
  },
  {
    name: 'Pascal Brandt',
    link: 'https://twitter.com/psbrandt',
    avatar: 'https://pbs.twimg.com/profile_images/688487813025640448/E6O6I011_400x400.png',
  },
]

export default function SimpleMentionEditor(): ReactElement {
  const ref = useRef<Editor>(null)
  const [open, setOpen] = useState(false)
  const [suggestions, setSuggestions] = useState(mentions)

  const { MentionSuggestions, plugins } = useMemo(() => {
    const mentionPlugin = createMentionPlugin({
      entityMutability: 'IMMUTABLE',
      theme: mentionsStyles,
      mentionPrefix: '@',
      supportWhitespace: true,
    })
    // eslint-disable-next-line no-shadow
    const { MentionSuggestions } = mentionPlugin
    // eslint-disable-next-line no-shadow
    const plugins = [mentionPlugin]
    return { plugins, MentionSuggestions }
  }, [])

  const onOpenChange = useCallback((_open: boolean) => {
    setOpen(_open)
  }, [])

  const onSearchChange = useCallback(({ value }: { value: string }) => {
    setSuggestions(defaultSuggestionsFilter(value, mentions))
  }, [])

  return (
    <Card label='Mention Example'>
      <div
        className={editorStyles.editor}
        onClick={() => {
          // eslint-disable-next-line
          ref.current!.focus()
        }}
      >
        <DraftEditor usePluginEditor={true} pluginProps={{ ref, plugins, editorKey: 'editor' }}>
          <MentionSuggestions
            open={open}
            onOpenChange={onOpenChange}
            suggestions={suggestions}
            onSearchChange={onSearchChange}
            onAddMention={() => {
              // get the mention object selected
            }}
          />
        </DraftEditor>
      </div>
    </Card>
  )
}
