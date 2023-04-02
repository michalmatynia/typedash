/*
=========================================================
* Material Kit 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Kit 2 PRO React components
import MKBox from 'components/ui/material-kit-pro-react-v2.0.0/MKBox'

// Sections components
import BaseLayout from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/components/BaseLayout'
import View from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/components/View'

// Stats page components
import FooterOne from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/page-sections/footers/components/FooterOne'
import FooterTwo from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/page-sections/footers/components/FooterTwo'
import FooterThree from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/page-sections/footers/components/FooterThree'

// Stats page components code
import footerOneCode from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/page-sections/footers/components/FooterOne/code'
import footerTwoCode from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/page-sections/footers/components/FooterTwo/code'
import footerThreeCode from 'pages-sections/material-kit-pro-react-v2.0.0/layouts/sections/page-sections/footers/components/FooterThree/code'

function Footers() {
  return (
    <BaseLayout
      title="Footers"
      breadcrumb={[
        { label: 'Page Sections', route: '/sections/page-sections/footers' },
        { label: 'Footers' },
      ]}
    >
      <View title="Footer 1" code={footerOneCode}>
        <MKBox bgColor="white" pt={3} pl={{ xs: 3, lg: 0 }}>
          <FooterOne />
        </MKBox>
      </View>
      <View title="Footer 2" code={footerTwoCode}>
        <MKBox pt={3}>
          <FooterTwo />
        </MKBox>
      </View>
      <View title="Footer 3" code={footerThreeCode}>
        <FooterThree />
      </View>
    </BaseLayout>
  )
}

export default Footers
