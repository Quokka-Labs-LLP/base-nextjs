import React from 'react'

import { ButtonProps } from './types'
import clsx from '../../utils/clsx'
import styles from './Button.module.scss'

export default function Button(props: ButtonProps): JSX.Element {
  return (
    <button
      className={clsx(
        props.filled && styles['button-filled'],
        props.elevated && styles['button-elevated'],
        props['filled-toned'] && styles['button-filled-toned'],
        props['outline'] && styles['button-outline'],
        props['extended-fab'] && [styles['button-extended-fab']],
        styles['button'],
      )}
    >
      {props.children}
    </button>
  )
}
