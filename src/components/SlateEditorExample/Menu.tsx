import React, { PropsWithChildren, Ref } from 'react'
import { cx, css } from '@emotion/css'

import { BaseProps } from './types'

const Menu = React.forwardRef(
  ({ className, ...props }: PropsWithChildren<BaseProps>, ref: Ref<HTMLDivElement> | undefined) => (
    <div
      {...props}
      ref={ref}
      className={cx(
        className,
        css`
          & > * {
            display: inline-block;
          }
          & > * + * {
            margin-left: 15px;
          }
        `,
      )}
    />
  ),
)
Menu.displayName = 'Menu'

export default Menu
