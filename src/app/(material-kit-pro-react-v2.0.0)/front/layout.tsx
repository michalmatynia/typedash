'use client'
import theme from 'themes/material-kit-pro-react-v2.0.0/index'
import '/styles/scss/nextjs-material-kit.scss?v=1.2.0'
/* MUI Material */
import { ThemeProvider } from '@mui/material'

import { BasicComponentProps } from 'types/styleTypes/nextjs-material-kit/componentProps'
import { FC } from 'react'

const FrontLayout: FC<BasicComponentProps> = ({
  children,
}): React.ReactElement => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default FrontLayout
