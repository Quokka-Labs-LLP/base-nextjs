import { DOMAttributes } from 'react'

export interface CardProps extends DOMAttributes<Event> {
  elevated?: boolean
  outline?: boolean
  filled?: boolean
}
