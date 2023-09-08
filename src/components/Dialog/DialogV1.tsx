'use client'

import { handleClose } from '@/redux/features/usersSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import CloseIcon from '@mui/icons-material/Close'
import { Stack } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import * as React from 'react'

import { CustomButton } from '../Button'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}))

export default function DialogV1({ children }: { children: React.ReactNode }) {
  const { open } = useAppSelector((state) => state.userSlice)

  const dispatch = useAppDispatch()
  return (
    <div>
      <BootstrapDialog
        onClose={() => dispatch(handleClose())}
        aria-labelledby='customized-dialog-title'
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id='customized-dialog-title'>
          Modal title
        </DialogTitle>
        <IconButton
          aria-label='close'
          onClick={() => dispatch(handleClose())}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>{children}</DialogContent>
        <DialogActions>
          <Stack direction='row' spacing={2}>
            <CustomButton
              variant='contained'
              btnText='Save Changes'
              color='primary'
              handleClick={() => dispatch(handleClose())}
            />
            <CustomButton
              variant='outlined'
              btnText='Cancel'
              color='primary'
              handleClick={() => dispatch(handleClose())}
            />
          </Stack>
        </DialogActions>
      </BootstrapDialog>
    </div>
  )
}
