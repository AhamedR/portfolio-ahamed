import { useEffect } from 'react'
import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
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
