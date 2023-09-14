/* eslint-disable no-underscore-dangle */
import { Box, MenuItem, TextField } from '@mui/material'
import { useEffect, useState } from 'react'

import type { SelectInputInterface } from './selectInputInterface'

function SelectInput({
  label,
  array,
  open,
  value,
  error,
  register,
  isRequired,
  registerWith,
}: SelectInputInterface) {
  const [valueName, setValueName] = useState<string>(value || '')
  const isValueString = typeof array[0] === 'string'
  useEffect(() => {
    if (!open) setValueName('')
  }, [open])

  return (
    <Box
      sx={{
        minWidth: 120,
        '& .css-ih3dyp-MuiInputBase-root-MuiOutlinedInput-root': {
          borderRadius: '12px',
        },
      }}
    >
      <TextField
        select
        fullWidth
        label={label}
        error={!!error || false}
        helperText={error || ''}
        value={valueName}
        onChange={(e) => setValueName(e.target.value)}
        inputProps={register(registerWith, {
          required: isRequired ? `* ${label} is required` : false,
        })}
        sx={{
          borderRadius: '12px !important',
          // fontStyle: valueName === "None" ? "italic" : "",
          textTransform: 'capitalize',
        }}
      >
        {array.map((option) => {
          if (isValueString) {
            return (
              <MenuItem
                key={option}
                value={option}
                sx={{
                  fontFamily: 'var(--admin-font) !important',
                  // fontStyle: option === "None" ? "italic" : "",
                  textTransform: 'capitalize',
                }}
              >
                {option}
              </MenuItem>
            )
          }
          return (
            <MenuItem
              key={option._id}
              value={option.name || option.title}
              sx={{
                fontFamily: 'var(--admin-font) !important',
              }}
            >
              {option.name || option.title}
            </MenuItem>
          )
        })}
      </TextField>
    </Box>
  )
}

export default SelectInput
