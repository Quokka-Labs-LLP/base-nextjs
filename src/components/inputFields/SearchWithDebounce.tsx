'use client'

import { FormControlProps } from '@mui/material'
import TextField   from '@mui/material/TextField'
import React, { useId } from 'react'

export interface SearchWithDebounceProps extends FormControlProps {
  label: string
  value: string
  handleInputChange: (params: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchWithDebounce = (props: SearchWithDebounceProps) => {
  const id = useId()
  const { label, size, value, handleInputChange } = props
  return (
    <div>
      <TextField
        label={label}
        type='text'
        id={id}
        size={size}
        value={value}
        variant='outlined'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
      />
    </div>
  )
}

export default SearchWithDebounce
