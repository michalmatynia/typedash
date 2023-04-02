'use client'
import theme from 'themes/material-kit-pro-react-v2.0.0/index'
import '/styles/scss/nextjs-material-kit.scss?v=1.2.0'
/* MUI Material */
import { ThemeProvider } from '@mui/material'

import { BasicComponentProps } from 'types/styleTypes/nextjs-material-kit/componentProps'
import { FC } from 'react'

import DefaultNavbar from 'components/blocks/custom-material-kit-pro-react-v2.0.0/Navbars/DefaultNavbar'
import DefaultFooter from 'components/blocks/custom-material-kit-pro-react-v2.0.0/Footers/DefaultFooter'

// Routes
import routes from 'data/milkbar/ver2.0/rootsystem/routes'
import footerRoutes from 'data/material-kit-pro-react-v2.0.0/rootsystem/footer.routes'
import MKBox from 'components/ui/custom-material-kit-pro-react-v2.0.0/MKBox'

const FrontLayout: FC<BasicComponentProps> = ({
  children,
}): React.ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <DefaultNavbar routes={routes} brand="Milkbar Designers" sticky />
      {children}
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </ThemeProvider>
  )
}

export default FrontLayout
