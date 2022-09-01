import React from 'react'
import { AutoSizer, InfiniteLoader, List } from 'react-virtualized'

import Card from './Card'
import list from './CellMeasurer/data'

const STATUS_LOADING = 1
const STATUS_LOADED = 2

export default class InfiniteLoaderExample extends React.PureComponent {
  _timeoutIdMap = {}

  constructor(props: unknown) {
    super(props as any)

    this.state = {
      loadedRowCount: 0,
      loadedRowsMap: {},
      loadingRowCount: 0,
    }

    this._timeoutIdMap = {}

    this._clearData = this._clearData.bind(this)
    this._isRowLoaded = this._isRowLoaded.bind(this)
    this._loadMoreRows = this._loadMoreRows.bind(this)
    this._rowRenderer = this._rowRenderer.bind(this)
  }

  componentWillUnmount(): void {
    Object.keys(this._timeoutIdMap).forEach(timeoutId => {
      clearTimeout(timeoutId)
    })
  }

  render(): JSX.Element {
    return (
      <Card label='Infinite Loader Example'>
        <InfiniteLoader isRowLoaded={this._isRowLoaded} loadMoreRows={this._loadMoreRows} rowCount={500}>
          {({ onRowsRendered, registerChild }: { onRowsRendered: any; registerChild: any }) => (
            <AutoSizer disableHeight>
              {({ width }: { width: number }) => (
                <List
                  ref={registerChild}
                  className='List'
                  height={200}
                  onRowsRendered={onRowsRendered}
                  rowCount={500}
                  rowHeight={30}
                  rowRenderer={this._rowRenderer}
                  width={width}
                />
              )}
            </AutoSizer>
          )}
        </InfiniteLoader>
      </Card>
    )
  }

  _clearData(): void {
    this.setState({
      loadedRowCount: 0,
      loadedRowsMap: {},
      loadingRowCount: 0,
    })
  }

  _isRowLoaded({ index }: { index: number }): any {
    // eslint-disable-next-line
    // @ts-ignore
    const { loadedRowsMap } = this.state
    return !!loadedRowsMap[index] // STATUS_LOADING or STATUS_LOADED
  }

  _loadMoreRows({ startIndex, stopIndex }: { startIndex: any; stopIndex: any }): Promise<any> {
    // eslint-disable-next-line
    // @ts-ignore
    const { loadedRowsMap } = this.state

    for (let i = startIndex; i <= stopIndex; i++) {
      loadedRowsMap[i] = STATUS_LOADING
    }

    const timeoutId = setTimeout(() => {
      // eslint-disable-next-line
      // @ts-ignore
      delete this._timeoutIdMap[timeoutId]

      for (let i = startIndex; i <= stopIndex; i++) {
        loadedRowsMap[i] = STATUS_LOADED
      }

      promiseResolver()
    }, 1000 + Math.round(Math.random() * 2000))

    // eslint-disable-next-line
    // @ts-ignore
    this._timeoutIdMap[timeoutId] = true

    let promiseResolver: any

    return new Promise(resolve => {
      promiseResolver = resolve
    })
  }

  _rowRenderer({ index, key, style }: { index: any; key: any; style: any }): JSX.Element {
    // eslint-disable-next-line
    // @ts-ignore
    const { loadedRowsMap } = this.state

    const row = list[index]
    let content

    if (loadedRowsMap[index] === STATUS_LOADED) {
      content = row.name
    } else {
      content = <div className='placeholder' style={{ width: row.size }} />
    }

    return (
      <div className='row' key={key} style={style}>
        {content}
      </div>
    )
  }
}
