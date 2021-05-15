import { useEffect } from 'react'
import { useRouter } from 'next/router'

import '../styles/globals.css'
import * as gtag from '../lib/gtag'

function MyApp ({ Component, pageProps }) {
  const router = useRouter()

  /**
   * Enabling Google Assistant
   */
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  useEffect(() => {
    /**
     * Enable and poit to Service worker file
     */
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
      })
    }
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
