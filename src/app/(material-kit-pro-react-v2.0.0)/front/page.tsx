/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
'use client'

// Material Kit 2 PRO React components
import MKBox from 'components/ui/custom-material-kit-pro-react-v2.0.0/MKBox'
// import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import DefaultNavbar from 'components/blocks/custom-material-kit-pro-react-v2.0.0/Navbars/DefaultNavbar'
import DefaultFooter from 'components/blocks/custom-material-kit-pro-react-v2.0.0/Footers/DefaultFooter'

// DesktopApp page sections
import Banner from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Apps/DesktopApp/sections/Banner'
import Information from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Apps/DesktopApp/sections/Information'
import Features from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Apps/DesktopApp/sections/Features'
import Testimonials from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Apps/DesktopApp/sections/Testimonials'
import Pricing from 'pages-sections/material-kit-pro-react-v2.0.0/pages/Apps/DesktopApp/sections/Pricing'

// Routes
import routes from 'data/material-kit-pro-react-v2.0.0/rootsystem/routes'
import footerRoutes from 'data/material-kit-pro-react-v2.0.0/rootsystem/footer.routes'

import { FC } from 'react'
import { BasicComponentProps } from 'types/styleTypes/nextjs-material-kit/componentProps'
import DesktopApp from 'pages-sections/custom-material-kit-pro-react-v2.0.0/pages/Apps/DesktopApp/'

const TitlePage: FC<BasicComponentProps> = ({
  children,
}): React.ReactElement => {
  return (
    <>
      <DesktopApp />
    </>
  )
}

export default TitlePage
