import { email, password, text } from '@/globals';
import { emailRegex, passwordRegex } from '@/utils';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { ButtonBase, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import React, { useState } from 'react'

import type { FieldInputPropsInterface } from './index'

function FieldInput({
  type,
  label,
  watch,
  isError,
  control,
  register,
  fullWidth,
  helperText,
  isRequired,
  registerWith,
}: FieldInputPropsInterface) {
  const passwordText = watch && watch(password)

  const [visible, setVisible] = useState<boolean>(false)
  const [inputType, setInputType] = useState<string>(password)

  const handleToggle = () => {
    setVisible((prev) => !prev)
    setInputType((prev) => (prev === password ? text : password))
  }

  // eslint-disable-next-line consistent-return
  const doValidate = () => {
    if (type === email) {
      return (value: string) => emailRegex.test(value) || '* Please enter a Valid Email'
    }
    if (type === password) {
      return (value: string) =>
        passwordRegex.test(value) || '* Password must have at least 8 letters'
    }
  }

  return (
    <Controller
      name={registerWith}
      control={control}
      render={() => (
        <TextField
          fullWidth={fullWidth || false}
          type={type === password ? inputType : type}
          label={label}
          error={isError || false}
          variant='outlined'
          helperText={helperText}
          {...register(registerWith, {
            required: isRequired ? `* ${label} is required` : false,
            validate: doValidate(),
          })}
          InputProps={{
            endAdornment: passwordText?.length ? (
              <ButtonBase
                sx={{
                  borderRadius: '50%',
                  padding: '5px',
                  marginRight: '10px',
                }}
                onClick={handleToggle}
              >
                {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </ButtonBase>
            ) : null,
          }}
        />
      )}
    />
  )
}

export default FieldInput