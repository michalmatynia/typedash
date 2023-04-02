import { BasicComponentProps } from 'types/styleTypes/nextjs-material-kit/componentProps'
import { roboto, roboto_slab } from './fonts'
import { FC } from 'react'
import StyledComponentsRegistry from '@lib/styled-components/registry'
// import Head from 'next/head'
// import Script from 'next/script'

export const metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
  icons: {
    icon: '/favicon.ico',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  //   metadataBase: new URL('https://localhost:3000'), // This is the default change in production
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  category: 'technology',
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['mmatynia@gmail.com'],
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const RootLayout: FC<BasicComponentProps> = ({
  children,
}): React.ReactElement => {
  return (
    <html lang="en" className={`${roboto.className} ${roboto_slab.className}`}>
      {/* <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons&display=optional"
        />
        <link
          href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp&display=optional"
          rel="stylesheet"
        />
      </Head> */}
      {/* <Script src="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp&display=optional" /> */}
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout
