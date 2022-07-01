import React, { useEffect, useRef, useState } from 'react'
import { gql, useMutation, useSubscription } from '@apollo/client'

import './App.css'

const ADD_MESSAGE = gql`
  mutation AddMessage($text: String!) {
    createMessage(text: $text) {
      text
    }
  }
`

const SUB_MESSAGE_ADDED = gql`
  subscription messageAdded {
    messageAdded {
      text
    }
  }
`

export interface Book {
  title: string
  author: string
}

export interface Message {
  text: string
}

export default function App(): JSX.Element {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const inputRef = useRef()
  const subscriptionData = useSubscription(SUB_MESSAGE_ADDED)
  const [mutateFunction] = useMutation(ADD_MESSAGE)

  useEffect(() => {
    if (subscriptionData?.data?.messageAdded?.text) {
      setMessages([subscriptionData.data?.messageAdded as never, ...messages])
    }
  }, [subscriptionData.data])

  function sendMessage() {
    // eslint-disable-next-line
    // @ts-ignore
    inputRef.current.value = ''
    mutateFunction({
      variables: {
        text: input,
      },
    })
  }

  return (
    <div>
      <h1 className='heading'>React Messaging app</h1>
      <ul id='messages'>
        {messages.map((message: Message, idx) => (
          <li key={idx}>{message.text}</li>
        ))}
      </ul>
      <div id='form'>
        <input
          id='input'
          // eslint-disable-next-line
          // @ts-ignore
          ref={inputRef}
          autoComplete='off'
          onChange={(e) => {
            setInput(e.target.value)
          }}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              sendMessage()
            }
          }}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
}
