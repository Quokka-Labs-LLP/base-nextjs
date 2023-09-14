import { FormControl, FormHelperText, FormLabel, RadioGroup } from '@mui/material'
import { Controller } from 'react-hook-form'
import React from 'react'

import { RadioButtonsInterface } from '.'

function RadioButtons({
  label,
  error,
  control,
  children,
  isRequired,
  registerWith,
}: RadioButtonsInterface) {
  return (
    <FormControl sx={{ width: '100%' }}>
      <FormLabel
        id={`${label}-radio-buttons-group`}
        sx={{
          textTransform: 'capitalize',
          color: !!error ? '#d32f2f' : '',
        }}
      >
        {label}
      </FormLabel>

      <Controller
        name={registerWith}
        rules={{
          required: isRequired ? `* ${label} is required` : false,
        }}
        control={control}
        render={({ field }) => {
          return (
            <RadioGroup
              {...field}
              aria-labelledby={`${label}-radio-group`}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                gap: '1rem',
                paddingLeft: '9px',

                '& > *': {
                  '& > span:first-of-type': {
                    padding: '0 3px 0 0',
                  },

                  '& .MuiSvgIcon-root': {
                    width: '16px',
                  },
                },

                '& span': {
                  fontSize: '0.9rem',
                },
              }}
            >
              {children}
            </RadioGroup>
          )
        }}
      />

      {!!error && (
        <FormHelperText sx={{ margin: '-7px 0 0 0' }} error={!!error}>
          {error}
        </FormHelperText>
      )}
    </FormControl>
  )
}

export default RadioButtons
