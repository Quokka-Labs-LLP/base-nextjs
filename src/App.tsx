import React from 'react'

import { Button } from './components'

export default function App(): JSX.Element {
  return (
    <>
      <Button />
      <Button filled />
      <Button elevated />
      <Button filled-toned />
      <Button outline />
    </>
  )
}
