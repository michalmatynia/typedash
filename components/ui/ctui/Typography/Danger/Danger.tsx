import React, { CSSProperties, FC } from 'react'
import stylesUntyped from '../../../../../styles/jss/nextjs-material-kit/components/typographyStyle.js'
import { Box } from '@mui/material'

import { BasicComponentProps } from 'types/styleTypes/nextjs-material-kit/componentProps.js'

const CT_Danger: FC<BasicComponentProps> = (props): React.ReactElement => {
  const styles = stylesUntyped as { [key: string]: CSSProperties }
  const { children } = props

  return (
    <Box sx={{ ...styles.defaultFontStyle, ...styles.dangerText }}>
      {children}
    </Box>
  )
}
export default CT_Danger
