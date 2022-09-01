import React from 'react'
import Immutable from 'immutable'
import PropTypes from 'prop-types'
// eslint-disable-next-line
// @ts-ignore
import { CellMeasurer, CellMeasurerCache, Grid } from 'react-virtualized'

export default class DynamicHeightGrid extends React.PureComponent<any, any> {
  _cache: any

  static propTypes = {
    getClassName: PropTypes.func.isRequired,
    getContent: PropTypes.func.isRequired,
    list: PropTypes.instanceOf(Immutable.List).isRequired,
    width: PropTypes.number.isRequired,
  }

  constructor(props: any, context: any) {
    super(props, context)

    this._cache = new CellMeasurerCache({
      defaultWidth: 150,
      fixedHeight: true,
    })

    this._cellRenderer = this._cellRenderer.bind(this)
  }

  render(): JSX.Element {
    const { width } = this.props

    return (
      <Grid
        className='BodyGrid'
        columnCount={50}
        columnWidth={150}
        deferredMeasurementCache={this._cache}
        height={400}
        overscanColumnCount={0}
        overscanRowCount={2}
        cellRenderer={this._cellRenderer}
        rowCount={100}
        rowHeight={this._cache.rowHeight}
        width={width}
      />
    )
  }

  _cellRenderer({
    columnIndex,
    key,
    parent,
    rowIndex,
    style,
  }: {
    columnIndex: any
    key: any
    parent: any
    rowIndex: any
    style: any
  }): JSX.Element {
    const { getClassName, getContent, list } = this.props

    const datum = list.get((rowIndex + columnIndex) % list.size)
    const classNames = getClassName({ columnIndex, rowIndex })
    const content = getContent({ index: columnIndex, datum, long: false })

    return (
      <CellMeasurer cache={this._cache} columnIndex={columnIndex} key={key} parent={parent} rowIndex={rowIndex}>
        <div
          className={classNames}
          style={{
            ...style,
            width: 150,
          }}
        >
          {content}
        </div>
      </CellMeasurer>
    )
  }
}
