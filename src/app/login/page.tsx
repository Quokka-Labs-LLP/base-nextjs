'use client'

import { FieldInput } from '@/components'
import { email, password } from '@/globals'
import { Button, Paper, ThemeProvider, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import React from 'react'

import { AdminLoginInterface } from '.'
import theme from '@/styles/theme'

const defaultValues: AdminLoginInterface = {
  email: '',
  password: '',
}

function Login() {
  const {
    watch,
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminLoginInterface>({ defaultValues })

  const handleFormSubmit = (data: AdminLoginInterface) => {
    console.log(data)
  }

  const loginFormStyle = {
    borderRadius: '12px',
    width: '40%',
    position: 'absolute',
    top: '55%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '3rem 4rem 4rem',
    '* p': {
      margin: 0,
      fontSize: '0.7rem',
    },
    gap: '1rem',
  }

  return (
    <ThemeProvider theme={theme}>
      <Paper
        sx={loginFormStyle}
        elevation={5}
        component='form'
        onSubmit={handleSubmit((data) => handleFormSubmit(data))}
      >
        <Typography
          variant='h1'
          sx={{
            fontSize: '2.3rem',
            marginBottom: '1rem',
          }}
        >
          Admin Login
        </Typography>

        <FieldInput
          type={email}
          fullWidth={true}
          label='Email Address'
          isError={!!errors?.email?.message}
          control={control}
          register={register}
          helperText={errors?.email?.message}
          registerWith={email}
        />

        <FieldInput
          type={password}
          fullWidth={true}
          label='Password'
          watch={watch}
          isError={!!errors?.password?.message}
          control={control}
          register={register}
          helperText={errors?.password?.message}
          registerWith={password}
        />

        <Button fullWidth size='large' type='submit' variant='contained' color='secondary'>
          CONTINUE
        </Button>
      </Paper>
    </ThemeProvider>
  )
}

export default Login