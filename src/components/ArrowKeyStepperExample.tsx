import React, { useState } from 'react'
import { ArrowKeyStepper, AutoSizer, Grid } from 'react-virtualized'
import clsx from 'clsx'

import Card from './Card'

export default function ArrowKeyStepperExample(): JSX.Element {
  const [state, setState] = useState({
    mode: 'cells',
    isClickable: true,
    scrollToColumn: 0,
    scrollToRow: 0,
  })

  function _selectCell({ scrollToColumn, scrollToRow }: any) {
    setState({ ...state, scrollToColumn, scrollToRow })
  }

  function _getColumnWidth({ index }: { index: number }) {
    return (1 + (index % 3)) * 60
  }

  function _getRowHeight({ index }: { index: number }) {
    return (1 + (index % 3)) * 30
  }

  function _cellRenderer({
    columnIndex,
    key,
    rowIndex,
    scrollToColumn,
    scrollToRow,
    style,
  }: {
    columnIndex: number
    key: string
    rowIndex: number
    scrollToColumn: number
    scrollToRow: number
    style: any
  }) {
    const className = clsx('Cell', {
      FocusedCell: columnIndex === scrollToColumn && rowIndex === scrollToRow,
    })

    return (
      <span
        role='none'
        className={className}
        key={key}
        onClick={
          state.isClickable
            ? () =>
                _selectCell({
                  scrollToColumn: columnIndex,
                  scrollToRow: rowIndex,
                })
            : _ => _
        }
        style={style}
      >
        {`r:${rowIndex}, c:${columnIndex}`}
      </span>
    )
  }

  return (
    <Card label='Arrow Key Stepper'>
      <ArrowKeyStepper
        columnCount={100}
        isControlled={state.isClickable}
        onScrollToChange={state.isClickable ? _selectCell : undefined}
        mode={state.mode}
        rowCount={100}
        scrollToColumn={state.scrollToColumn}
        scrollToRow={state.scrollToRow}
      >
        {({
          onSectionRendered,
          scrollToColumn,
          scrollToRow,
        }: {
          onSectionRendered: any
          scrollToColumn: any
          scrollToRow: any
        }) => (
          <div>
            <AutoSizer disableHeight>
              {({ width }: { width: number }) => (
                <Grid
                  className='Grid'
                  columnWidth={_getColumnWidth}
                  columnCount={100}
                  height={200}
                  onSectionRendered={onSectionRendered}
                  cellRenderer={({
                    columnIndex,
                    key,
                    rowIndex,
                    style,
                  }: {
                    columnIndex: any
                    key: any
                    rowIndex: any
                    style: any
                  }) =>
                    _cellRenderer({
                      columnIndex,
                      key,
                      rowIndex,
                      scrollToColumn,
                      scrollToRow,
                      style,
                    })
                  }
                  rowHeight={_getRowHeight}
                  rowCount={100}
                  scrollToColumn={scrollToColumn}
                  scrollToRow={scrollToRow}
                  width={width}
                />
              )}
            </AutoSizer>
          </div>
        )}
      </ArrowKeyStepper>
    </Card>
  )
}
