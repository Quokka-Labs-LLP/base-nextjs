import React from 'react'
import { AutoSizer, List } from 'react-virtualized'

import Card from './Card'
import list from './data'

export default function AutoSizeExample(): JSX.Element {
  function _rowRenderer({ index, key, style }: { index: number; key: any; style: any }) {
    const row = list[index]

    return (
      <div key={key} className='row' style={style}>
        {row.name}
      </div>
    )
  }

  return (
    <Card label='AutoSize Example'>
      <AutoSizer className='AutoSizeWrapper'>
        {({ width, height }: { width: number; height: number }) => (
          <List
            className='list'
            height={height}
            rowCount={100}
            rowHeight={30}
            rowRenderer={_rowRenderer}
            width={width}
          />
        )}
      </AutoSizer>
      {/* </div> */}
    </Card>
  )
}
