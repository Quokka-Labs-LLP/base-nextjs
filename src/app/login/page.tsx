'use client'

import { FieldInput } from '@/components'
import { email, password } from '@/globals'
import { apiLoginUser } from '@/lib/api-request'
import { setUserAuth } from '@/redux/features/auth'
import { useAppDispatch } from '@/redux/hooks'
import { Button, Paper, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import React from 'react'
import { useRouter } from 'next/navigation'

import type { AdminLoginInterface } from './index'

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

  const dispatch = useAppDispatch()
  const router = useRouter()
  const handleFormSubmit = async (data: AdminLoginInterface) => {
    const r = await apiLoginUser(JSON.stringify(data))
    dispatch(setUserAuth(r))
    router.push('/dashboard/posts')
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
        fullWidth
        label='Email Address'
        isError={!!errors?.email?.message}
        control={control}
        register={register}
        helperText={errors?.email?.message}
        registerWith={email}
      />
      <FieldInput
        type={password}
        fullWidth
        label='Password'
        watch={watch}
        isError={!!errors?.password?.message}
        control={control}
        register={register}
        helperText={errors?.password?.message}
        registerWith={password}
      />
      <Button fullWidth size='large' type='submit' variant='contained' color='primary'>
        CONTINUE
      </Button>
    </Paper>
  )
}

export default Login
