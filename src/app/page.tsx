'use client'

import { FC, useEffect } from 'react'
import HomePage from './home-page'
import { useRouter } from 'next/navigation'

// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.
export default function RootPage(props: FC) {
  const router = useRouter()

  useEffect(() => {
    function reRoute() {
      router.push('/front')
    }

    try {
      reRoute()
    } catch (error) {
      console.error(error)
    }
  }, [router])

  //   return <HomePage recentPosts={{ name: 'cdscs' }} />
}
