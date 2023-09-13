'use client'

import SearchIcon from '@mui/icons-material/Search'
import { TextFieldProps } from '@mui/material'
import TextField from '@mui/material/TextField'
import React, { useId } from 'react'

import { CustomIconButton } from '../Button'

export type SearchWithButtonProps = TextFieldProps & {
  label: string
  value: string
  handleInputChange: (params: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchWithButton = (props: SearchWithButtonProps) => {
  const id = useId()
  const { label, size, value, handleInputChange, ...rest } = props
  return (
    <div>
      <TextField
        {...rest}
        label={label}
        type='text'
        id={id}
        size={size}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
        InputProps={{
          endAdornment: (
            <CustomIconButton
              size={size}
              handleClick={() => {
                console.log('Searched')
              }}
              icon={<SearchIcon />}
              color='secondary'
              variant='contained'
            />
          ),
        }}
      />
    </div>
  )
}

export default SearchWithButton
