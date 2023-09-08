import { IconButton } from '@mui/material'
import Button from '@mui/material/Button'
import * as React from 'react'

interface ButtonWithIconProps {
  btnText: string
  icon: React.ReactNode
  displayPos: 'end' | 'start'
  variant: 'contained' | 'outlined' | 'text'
  color: 'error' | 'info' | 'success' | 'primary' | 'inherit' | 'warning' | 'secondary'
  size?: 'small' | 'large' | 'medium'
  handleClick: () => void
  style?: any
}

export const ButtonWithIcon = ({
  btnText,
  icon,
  displayPos,
  variant,
  color,
  handleClick,
  size,
  style,
}: ButtonWithIconProps) => {
  let endIcon = undefined
  let startIcon = undefined
  if (displayPos === 'end') return (endIcon = icon)
  if (displayPos === 'start') return (startIcon = icon)
  return (
    <Button
      variant={variant}
      color={color}
      endIcon={endIcon}
      startIcon={startIcon}
      style={style}
      size={size}
      onClick={handleClick}
    >
      {btnText}
    </Button>
  )
}

export const CustomButton = ({
  btnText,
  variant,
  color,
  handleClick,
  size,
  style,
}: Omit<ButtonWithIconProps, 'icon' | 'displayPos'>) => {
  return (
    <Button variant={variant} color={color} style={style} size={size} onClick={handleClick}>
      {btnText}
    </Button>
  )
}

export const CustomIconButton = ({
  btnText,
  color,
  icon,
  handleClick,
  size,
  style,
}: Omit<ButtonWithIconProps, 'displayPos' | 'variant'>) => {
  return (
    <IconButton aria-label={btnText} color={color} style={style} size={size} onClick={handleClick}>
      {icon}
    </IconButton>
  )
}
