import React, { useState } from 'react'
import clsx from 'clsx'
import Immutable from 'immutable'
import { AutoSizer } from 'react-virtualized'

import DynamicWidthGrid from './DynamicWidthGrid'
import DynamicHeightGrid from './DynamicHeightGrid'
import data from './data'
import Card from '../Card'

function getClassName({ columnIndex, rowIndex }: { columnIndex: any; rowIndex: any }) {
  const rowClass = rowIndex % 2 === 0 ? 'evenRow' : 'oddRow'

  return clsx(rowClass, 'cell', {
    centeredCell: columnIndex > 2,
  })
}

function getContent({ index, datum, long = true }: { index: any; datum: any; long: boolean }) {
  switch (index % 3) {
    case 0:
      return datum.color
    case 1:
      return datum.name
    case 2:
      return long ? datum.randomLong : datum.random
    default:
      return
  }
}

const demoComponents = [
  DynamicWidthGrid,
  DynamicHeightGrid,
  // DynamicWidthMultiGrid,
  // DynamicHeightList,
  // DynamicHeightTableColumn,
]

function Tab({ children, currentTab, id, onClick }: { children: any; currentTab: any; id: any; onClick: any }) {
  const classNames = clsx('Tab', {
    ActiveTab: currentTab === id,
  })

  return (
    <button className={classNames} onClick={() => onClick(id)}>
      {children}
    </button>
  )
}

export default function CellMeasurer(): JSX.Element {
  const [state, setState] = useState({
    currentTab: 0,
  })

  const DemoComponent = demoComponents[state.currentTab]
  // if (!DemoComponent) DemoComponent = demoComponents[0]

  const buttonProps = {
    currentTab: state.currentTab,
    onClick: (id: any) => {
      setState({
        currentTab: id,
      })
    },
  }

  return (
    <Card label='Cell Measurer' fullWidth>
      <AutoSizer disableHeight>
        {({ width }: { width: number }) => (
          <div style={{ width }}>
            <div>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <strong>Grid</strong>:
                    </td>
                    <td>
                      <Tab id={0} {...buttonProps}>
                        dynamic width text
                      </Tab>
                      <Tab id={1} {...buttonProps}>
                        dynamic height text
                      </Tab>
                    </td>
                  </tr>
                  {/* <tr>
                    <td>
                      <strong>MultiGrid</strong>:
                    </td>
                    <td>
                      <Tab id={2} {...buttonProps}>
                        dynamic width text
                      </Tab>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>List</strong>:
                    </td>
                    <td>
                      <Tab id={3} {...buttonProps}>
                        dynamic height image
                      </Tab>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Table</strong>:
                    </td>
                    <td>
                      <Tab id={4} {...buttonProps}>
                        mixed fixed and dynamic height text
                      </Tab>
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>

            {!DemoComponent ? (
              <p>Coming Soon...</p>
            ) : (
              <DemoComponent
                getClassName={getClassName}
                getContent={getContent}
                list={Immutable.List(data)}
                width={width}
              />
            )}
          </div>
        )}
      </AutoSizer>
    </Card>
  )
}
