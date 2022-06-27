import React, { PropsWithChildren, Ref } from 'react'
import { cx, css } from '@emotion/css'

import { BaseProps } from './types'
import Menu from './Menu'

const Toolbar = React.forwardRef(
  ({ className, ...props }: PropsWithChildren<BaseProps>, ref: Ref<HTMLDivElement> | undefined) => (
    <Menu
      {...props}
      ref={ref}
      className={cx(
        className,
        css`
          position: relative;
          padding: 1px 18px 17px;
          margin: 0 -20px;
          border-bottom: 2px solid #eee;
          margin-bottom: 20px;
        `,
      )}
    />
  ),
)
Toolbar.displayName = 'Toolbar'

export default Toolbar
