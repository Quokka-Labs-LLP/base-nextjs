import { DOMAttributes } from 'react'

export interface ButtonProps extends DOMAttributes<Event> {
  icon?: JSX.Element | null
  label?: null | string
  elevated?: boolean
  outline?: boolean
  filled?: boolean
  'filled-toned'?: boolean
  'extended-fab'?: boolean
}
