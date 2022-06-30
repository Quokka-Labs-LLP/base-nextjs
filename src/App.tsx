import React from 'react'
import styled from 'styled-components'

import './App.css'
import { Button, Comp, FadeInButton, GlobalStyle, Input, Input1 } from './components'

// Input's attrs will be applied first, and then this attrs obj
const PasswordInput = styled(Input1).attrs({
  type: 'password',
})`
  // similarly, border will override Input's border
  border: 2px solid aqua;
`

export default function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <FadeInButton>Fade in Button</FadeInButton>
      <Comp />
      <Button>Normal</Button>
      {/* eslint-disable-next-line */}
      {/* @ts-ignore */}
      <Button primary>Primary</Button>

      <Input defaultValue='@probablyup' type='text' />
      {/* eslint-disable-next-line */}
      {/* @ts-ignore */}
      <Input defaultValue='@geelen' type='text' inputColor='rebeccapurple' />

      <Input1 placeholder='A bigger text input' size='2em' />
      <br />
      {/* Notice we can still use the size attr from Input */}
      <PasswordInput placeholder='A bigger password input' size='2em' />
    </>
  )
}
