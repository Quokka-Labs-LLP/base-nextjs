import React from 'react'

import { CardProps } from './types'
import clsx from '../../utils/clsx'
import styles from './index.module.scss'

export default function Card(props: CardProps): JSX.Element {
  return (
    <div
      className={clsx(
        styles.card,
        props['outline'] && styles['card-outline'],
        props['filled'] && styles['card-filled'],
        props['elevated'] && styles['card-elevated'],
      )}
    >
      {props.children}
    </div>
  )
}
