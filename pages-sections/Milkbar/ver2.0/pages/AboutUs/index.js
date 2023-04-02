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

import { useEffect, useRef } from 'react'

// rellax
import Rellax from 'rellax'

// typed-js
import Typed from 'typed.js'

// @mui material components
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'

// Material Kit 2 PRO React components
import MKBox from 'components/ui/custom-material-kit-pro-react-v2.0.0/MKBox'
import MKTypography from 'components/ui/custom-material-kit-pro-react-v2.0.0/MKTypography'
import MKButton from 'components/ui/custom-material-kit-pro-react-v2.0.0/MKButton'
import FacebookIcon from '@mui/icons-material/Facebook'

// About Us page sections
import Information from 'pages-sections/milkbar/ver2.0/pages/SingleArticle/sections/Information'
import Team from 'pages-sections/milkbar/ver2.0/pages/AboutUs/sections/Team'
import Featuring from 'pages-sections/milkbar/ver2.0/pages/AboutUs/sections/Featuring'
import Newsletter from 'pages-sections/milkbar/ver2.0/pages/AboutUs/sections/Newsletter'
import Steps from 'pages-sections/milkbar/ver2.0/pages/SingleArticle/sections/Steps'
import OurEfforts from 'pages-sections/milkbar/ver2.0/pages/SingleArticle/sections/OurEfforts'
// Images
import bgImage from 'public/img/milkbar/ver2.0/parallax/Mosaic_the_process_of_making_architectural.jpg'

function AboutUs() {
  const headerRef = useRef(null)
  const typedJSRef = useRef(null)

  // Setting up rellax
  useEffect(() => {
    if (headerRef.current) {
      const parallax = new Rellax(headerRef.current, {
        speed: -6,
      })

      return () => {
        parallax.destroy()
      }
    }
  }, [])

  // Setting up typedJS
  useEffect(() => {
    if (typedJSRef.current) {
      const typedJS = new Typed(typedJSRef.current, {
        strings: ['3d graphics', 'designers', 'architects'],
        typeSpeed: 90,
        backSpeed: 90,
        backDelay: 200,
        startDelay: 500,
        loop: true,
      })

      return () => typedJS.destroy()
    }
  }, [])

  return (
    <>
      <MKBox
        ref={headerRef}
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({
            functions: { linearGradient, rgba },
            palette: { gradients },
          }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: 'auto', textAlign: 'center' }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down('md')]: {
                  fontSize: size['3xl'],
                },
              })}
            >
              Work with amazing <span ref={typedJSRef} />
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              opacity={0.8}
              mt={1}
              mb={3}
            >
              We&apos;re constantly trying to express ourselves and actualize
              our dreams. If you have the opportunity to play this game
            </MKTypography>

            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="https://www.facebook.com/Milkbardesigners"
                mr={3}
              >
                <FacebookIcon />
                {/* <i className="fab fa-facebook" /> */}
              </MKTypography>
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="#"
                mr={3}
              >
                {/* <i className="fab fa-instagram" /> */}
              </MKTypography>
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="#"
                mr={3}
              >
                {/* <i className="fab fa-twitter" /> */}
              </MKTypography>
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="#"
              >
                {/* <i className="fab fa-google-plus" /> */}
              </MKTypography>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
        <Team />
        <Featuring />
        <Newsletter />
        <Steps />
        <OurEfforts />
        {/* Page 2 */}
        {/* <Features /> */}
        {/* <Support /> */}
      </Card>
    </>
  )
}

export default AboutUs
