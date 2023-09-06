import React from 'react'

import { FieldInputPropsInterface } from '.'

function fieldInput({ label, type, id }: FieldInputPropsInterface) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} />
    </div>
  )
}

export default fieldInput
