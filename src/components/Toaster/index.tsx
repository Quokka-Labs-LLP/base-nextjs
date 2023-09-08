'use client'

import { handleCloseSnackbar } from '@/redux/features/snackbarSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import Stack from '@mui/material/Stack'
import * as React from 'react'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})

export default function CustomizedSnackbars() {
  const { openSnackbar, message, severity } = useAppSelector((state) => state.snackbarSlice)
  const dispatch = useAppDispatch()

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    dispatch(handleCloseSnackbar())
  }

  return (
    <Snackbar
      open={openSnackbar}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  )
}
