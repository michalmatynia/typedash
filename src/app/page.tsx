'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RootPage() {
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
}
