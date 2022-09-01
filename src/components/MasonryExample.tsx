import React from 'react'
import { AutoSizer, CellMeasurer, CellMeasurerCache, Masonry } from 'react-virtualized'

import Card from './Card'
import list from './CellMeasurer/data'
// eslint-disable-next-line
// @ts-ignore
import createCellPositioner from './createCellPositioner'

export default class MasonryExample extends React.PureComponent {
  _columnCount: any
  _cache: any
  _width: any
  _cellPositioner: any
  _masonry: any
  _height: any
  _scrollTop: any

  constructor(props: any, context: any) {
    super(props, context)

    this._columnCount = 0

    this._cache = new CellMeasurerCache({
      defaultHeight: 250,
      defaultWidth: 200,
      fixedWidth: true,
    })

    this.state = {
      columnWidth: 100,
      height: 300,
      gutterSize: 10,
      overscanByPixels: 0,
      windowScrollerEnabled: false,
    }

    this._cellRenderer = this._cellRenderer.bind(this)
    this._onResize = this._onResize.bind(this)
    this._renderAutoSizer = this._renderAutoSizer.bind(this)
    this._renderMasonry = this._renderMasonry.bind(this)
    this._setMasonryRef = this._setMasonryRef.bind(this)
  }

  render(): JSX.Element {
    // eslint-disable-next-line
    // @ts-ignore
    const { height } = this.state

    return <Card label='Masonry Example'>{this._renderAutoSizer({ height })}</Card>
  }

  _calculateColumnCount(): void {
    // eslint-disable-next-line
    // @ts-ignore
    const { columnWidth, gutterSize } = this.state

    this._columnCount = Math.floor(this._width / (columnWidth + gutterSize))
  }

  _cellRenderer({ index, key, parent, style }: { index: any; key: any; parent: any; style: any }): JSX.Element {
    // eslint-disable-next-line
    // @ts-ignore
    const { columnWidth } = this.state

    const datum = list.slice(0, 100)[index % list.length]

    return (
      <CellMeasurer cache={this._cache} index={index} key={key} parent={parent}>
        <div
          className='Cell_masonry'
          style={{
            ...style,
            width: columnWidth,
          }}
        >
          <div
            style={{
              backgroundColor: datum.color,
              borderRadius: '0.5rem',
              height: datum.size * 3,
              marginBottom: '0.5rem',
              width: '100%',
              fontSize: 20,
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {index}
          </div>
          {datum.random}
        </div>
      </CellMeasurer>
    )
  }

  _initCellPositioner(): void {
    if (typeof this._cellPositioner === 'undefined') {
      // eslint-disable-next-line
      // @ts-ignore
      const { columnWidth, gutterSize } = this.state

      this._cellPositioner = createCellPositioner({
        cellMeasurerCache: this._cache,
        columnCount: this._columnCount,
        columnWidth,
        spacer: gutterSize,
      })
    }
  }

  _onResize({ width }: { width: any }): void {
    this._width = width

    this._calculateColumnCount()
    this._resetCellPositioner()
    this._masonry.recomputeCellPositions()
  }

  _renderAutoSizer({ height, scrollTop }: { height: any; scrollTop?: any }): JSX.Element {
    this._height = height
    this._scrollTop = scrollTop

    // eslint-disable-next-line
    // @ts-ignore
    const { overscanByPixels } = this.state

    return (
      <AutoSizer
        disableHeight
        height={height}
        onResize={this._onResize}
        overscanByPixels={overscanByPixels}
        scrollTop={this._scrollTop}
      >
        {this._renderMasonry}
      </AutoSizer>
    )
  }

  _renderMasonry({ width }: { width: any }): JSX.Element {
    this._width = width

    this._calculateColumnCount()
    this._initCellPositioner()

    // eslint-disable-next-line
    // @ts-ignore
    const { height, overscanByPixels, windowScrollerEnabled } = this.state

    return (
      <Masonry
        autoHeight={windowScrollerEnabled}
        cellCount={1000}
        cellMeasurerCache={this._cache}
        cellPositioner={this._cellPositioner}
        cellRenderer={this._cellRenderer}
        height={windowScrollerEnabled ? this._height : height}
        overscanByPixels={overscanByPixels}
        ref={this._setMasonryRef}
        scrollTop={this._scrollTop}
        width={width}
      />
    )
  }

  // This is a bit of a hack to simulate newly loaded cells
  _resetList = (): void => {
    const ROW_HEIGHTS = [25, 50, 75, 100]

    // const { list } = this.context
    list.forEach(datum => {
      datum.size = ROW_HEIGHTS[Math.floor(Math.random() * ROW_HEIGHTS.length)]
    })

    this._cache.clearAll()
    this._resetCellPositioner()
    this._masonry.clearCellPositions()
  }

  _resetCellPositioner(): void {
    // eslint-disable-next-line
    // @ts-ignore
    const { columnWidth, gutterSize } = this.state

    this._cellPositioner.reset({
      columnCount: this._columnCount,
      columnWidth,
      spacer: gutterSize,
    })
  }

  _setMasonryRef(ref: any): void {
    this._masonry = ref
  }
}
