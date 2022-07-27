import React from 'react'

import SimpleExample from './components/ReactQueryExample/SimpleExample'
import BasicExample from './components/ReactQueryExample/BasicExample'
import AutoFetching from './components/ReactQueryExample/AutoFetchingExample'
import WindowRefocusFetching from './components/ReactQueryExample/WindowRefocusFetching'
import OptimisticUpdates from './components/ReactQueryExample/OptimisticUpdates'
import PaginationExample from './components/ReactQueryExample/PaginationExample'
import LoadMoreExample from './components/ReactQueryExample/LoadMoreExample'
import PrefetchingExample from './components/ReactQueryExample/PrefetchingExample'

import './App.css'

export default function App(): JSX.Element {
  return (
    <div style={{ maxWidth: '1280px', margin: '10px auto 100px' }}>
      <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Welcome to React v17 with Typescript.</h1>
      <p style={{ textAlign: 'center', margin: 0 }}>React: v17.0.2</p>
      <p style={{ textAlign: 'center', margin: 0 }}>Typescript: v4.3.5</p>
      <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Slate.js</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '45% 45%', gridGap: '60px', marginBottom: '20px' }}>
        <SimpleExample />
        <BasicExample />
        <AutoFetching />
        <WindowRefocusFetching />
        <OptimisticUpdates />
        <PaginationExample />
        <LoadMoreExample />
        <PrefetchingExample />
      </div>
    </div>
  )
}
