import { Box, Checkbox, FormControlLabel, FormHelperText } from '@mui/material'
import { Controller } from 'react-hook-form'
import React from 'react'

import { InputCheckboxProps } from '.'

function InputCheckbox({ registerWith, isRequired, control, label, error }: InputCheckboxProps) {
  return (
    <Box sx={{ width: '100%' }}>
      <FormControlLabel
        sx={{ margin: 0 }}
        label={label}
        control={
          <Controller
            name={registerWith}
            rules={{
              required: isRequired ? `* This field is required` : false,
            }}
            control={control}
            render={({ field: props }) => (
              <Checkbox
                {...props}
                checked={props.value}
                onChange={(e) => props.onChange(e.target.checked)}
              />
            )}
          />
        }
      />

      {!!error && (
        <FormHelperText sx={{ marginTop: '-0.5rem !important' }} error={!!error}>
          {error}
        </FormHelperText>
      )}
    </Box>
  )
}

export default InputCheckbox
