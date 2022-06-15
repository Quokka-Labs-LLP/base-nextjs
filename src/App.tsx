import React from 'react'

import { FavoriteIcon } from './assets'
import { Button, Card } from './components'
import { MoreVertIcon } from './assets'

export default function App(): JSX.Element {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Welcome to React v18 with Typescript.</h1>
      <p style={{ textAlign: 'center', margin: 0 }}>React: v18.1.0</p>
      <p style={{ textAlign: 'center', margin: 0 }}>Typescript: v4.7.3</p>

      <div style={{ display: 'flex' }}>
        <Button>Enabled</Button>
        <Button outline>Enabled</Button>
        <Button filled>Enabled</Button>
        <Button filled-toned>Enabled</Button>
        <Button elevated>Enabled</Button>
      </div>
      <div style={{ display: 'flex' }}>
        <Button extended-fab elevated filled-toned>
          <img src={FavoriteIcon} alt='favorite' width='16px' />
        </Button>
        <Button extended-fab elevated filled-toned>
          <img src={FavoriteIcon} alt='favorite' width='16px' />
          Favorite
        </Button>
      </div>

      <div style={{ display: 'flex', padding: '16px', justifyContent: 'space-between' }}>
        <Card elevated>
          <div style={{ float: 'right' }}>
            <img src={MoreVertIcon} alt='options' width='16px' />
          </div>
          Elevated
        </Card>
        <Card filled>
          <div style={{ float: 'right' }}>
            <img src={MoreVertIcon} alt='options' width='16px' />
          </div>
          Filled
        </Card>
        <Card outline>
          <div style={{ float: 'right' }}>
            <img src={MoreVertIcon} alt='options' width='16px' />
          </div>
          Outline
        </Card>
      </div>
    </>
  )
}
