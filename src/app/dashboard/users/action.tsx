'use client'

import { handleSnackbarOpen } from '@/redux/features/snackbarSlice'
import { handleOpen } from '@/redux/features/usersSlice'
import { useAppDispatch } from '@/redux/hooks'
import React from 'react'

import { CustomButton } from '@/components/Button'

const ActionButton = () => {
  const dispatch = useAppDispatch()
  return (
    <CustomButton
      handleClick={() => dispatch(handleOpen())}
      btnText='Edit'
      variant='contained'
      color='primary'
    />
  )
}

export default ActionButton
