import { Color } from '@mui/material'

export interface MKBoxProps {
  variant?: 'contained' | 'gradient'
  bgColor: Color | 'transparent'
  color?: Color | 'dark'
  opacity?: number
  borderRadius?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'section'
  //   borderRadius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  coloredShadow?:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'light'
    | 'dark'
    | 'none'
}
