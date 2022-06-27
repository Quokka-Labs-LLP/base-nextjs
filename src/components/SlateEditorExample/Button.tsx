import React, { PropsWithChildren, Ref } from 'react'
import { cx, css } from '@emotion/css'

import { BaseProps } from './types'

const Button = React.forwardRef(
  (
    {
      className,
      active,
      reversed,
      ...props
    }: PropsWithChildren<
      {
        active: boolean
        reversed: boolean
      } & BaseProps
    >,
    ref: Ref<HTMLDivElement> | undefined,
  ) => (
    <span
      {...props}
      ref={ref}
      className={cx(
        className,
        css`
          cursor: pointer;
          color: ${reversed ? (active ? 'white' : '#aaa') : active ? 'black' : '#ccc'};
        `,
      )}
    />
  ),
)
Button.displayName = 'Button'

export default Button
