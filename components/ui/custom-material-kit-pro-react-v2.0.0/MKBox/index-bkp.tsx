import { forwardRef } from 'react'

// Custom styles for MKBox
import MKBoxRoot from 'components/ui/custom-material-kit-pro-react-v2.0.0/MKBox/MKBoxRoot'
import { BasicComponentProps } from 'types/styleTypes/nextjs-material-kit/componentProps'
import { BoxProps } from '@mui/material/Box'

interface OwnerProps {
  ownerState?: LocalProps
}
interface LocalProps {
  variant?: 'contained' | 'gradient'
  bgColor?: string
  color?: string
  opacity?: number
  borderRadius?: string
  shadow?: string
  // ownerState?: {
  //   variant?: 'contained' | 'gradient'
  //   bgColor?: string
  //   color?: string
  //   opacity?: number
  //   borderRadius?: string
  //   shadow?: string
  //   coloredShadow?:
  //     | 'primary'
  //     | 'secondary'
  //     | 'info'
  //     | 'success'
  //     | 'warning'
  //     | 'error'
  //     | 'light'
  //     | 'dark'
  //     | 'none'
  // }
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

type Props = LocalProps & BasicComponentProps & BoxProps & OwnerProps
// type Props = LocalProps &
//   BasicComponentProps &
//   BoxProps & { ownerState?: LocalProps['ownerState'] }

const MKBox = forwardRef<HTMLDivElement, Props>(function MKBox(
  {
    variant = 'contained',
    bgColor = 'transparent',
    color = 'dark',
    opacity = 1,
    borderRadius = 'none',
    shadow = 'none',
    coloredShadow = 'none',
    ...rest
  },
  ref
) {
  return (
    <MKBoxRoot
      {...rest}
      ref={ref}
      ownerState={{
        variant,
        bgColor,
        color,
        opacity,
        borderRadius,
        shadow,
        coloredShadow,
      }}
    />
  )
})

export default MKBox
