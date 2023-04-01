/**
=========================================================
* Material Dashboard 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 PRO React base styles
import typography from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/base/typography'
import borders from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/base/borders'
import colors from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/base/colors'

// Material Dashboard 2 PRO React helper functions
import pxToRem from 'themes/material-dashboard-2-pro-react-v2.1.0/theme/functions/pxToRem'

const { size } = typography
const { text } = colors
const { borderWidth, borderColor } = borders

const dialogContent = {
  styleOverrides: {
    root: {
      padding: pxToRem(16),
      fontSize: size.md,
      color: text.main,
    },

    dividers: {
      borderTop: `${borderWidth[1]} solid ${borderColor}`,
      borderBottom: `${borderWidth[1]} solid ${borderColor}`,
    },
  },
}

export default dialogContent
