import React, { PropsWithChildren, Ref } from 'react'
import { cx, css } from '@emotion/css'

import { BaseProps } from './types'

const Icon = React.forwardRef(
  ({ className, ...props }: PropsWithChildren<BaseProps>, ref: Ref<HTMLDivElement> | undefined) => (
    <span
      {...props}
      ref={ref}
      className={cx(
        'material-icons',
        className,
        css`
          font-size: 18px;
          vertical-align: text-bottom;
        `,
      )}
    />
  ),
)
Icon.displayName = 'Icon'

export default Icon
