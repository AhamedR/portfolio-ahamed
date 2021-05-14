import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/portfolio.module.scss'

const linkedIn = process.env.NEXT_PUBLIC_LINKEDIN_URL
const twitter = process.env.NEXT_PUBLIC_TWITTER_URL
const instagram = process.env.NEXT_PUBLIC_INSTAGRAM_URL
const github = process.env.NEXT_PUBLIC_GITHUB_URL
const soho = process.env.NEXT_PUBLIC_SOHOAPP_URL

const Portfolio = () => {
  const [greeting, setGreeting] = useState('Hey 👋')
  const [showSecret, setShowSecret] = useState(false)
  const [pageUrl, setPageUrl] = useState('')
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  useEffect(() => {
    const today = new Date()
    const currentHour = today.getHours()

    if (currentHour < 12) {
      setGreeting('Good Morning 🌅')
    } else if (currentHour < 18) {
      setGreeting('Good Afternoon 🌇')
    } else {
      setGreeting('Good Evening 🌃')
    }

    setPageUrl(window.location.href)
  }, [])

  return (
    <div>
      <Head>
        <title>Hey 👋 Im Ahamed</title>

        <link rel='apple-touch-icon' sizes='57x57' href='/favicon/apple-icon-57x57.png' />
        <link rel='apple-touch-icon' sizes='60x60' href='/favicon/apple-icon-60x60.png' />
        <link rel='apple-touch-icon' sizes='72x72' href='/favicon/apple-icon-72x72.png' />
        <link rel='apple-touch-icon' sizes='76x76' href='/favicon/apple-icon-76x76.png' />
        <link rel='apple-touch-icon' sizes='114x114' href='/favicon/apple-icon-114x114.png' />
        <link rel='apple-touch-icon' sizes='120x120' href='/favicon/apple-icon-120x120.png' />
        <link rel='apple-touch-icon' sizes='144x144' href='/favicon/apple-icon-144x144.png' />
        <link rel='apple-touch-icon' sizes='152x152' href='/favicon/apple-icon-152x152.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-icon-180x180.png' />
        <link rel='icon' type='image/png' sizes='192x192' href='/favicon/android-icon-192x192.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='96x96' href='/favicon/favicon-96x96.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-TileImage' content='/favicon/ms-icon-144x144.png' />
        <meta name='theme-color' content='#ffffff' />

        <meta name='title' content='Hey 👋 Im Ahamed' />
        <meta name='description' content='Im Ahamed! and I work as a Software Engineer at Soho App. Proficient in Web Development.' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={pageUrl} />
        <meta property='og:title' content='Hey 👋 Im Ahamed' />
        <meta property='og:description' content='Im Ahamed! and I work as a Software Engineer at Soho App. Proficient in Web Development.' />
        <meta property='og:image' content={`${pageUrl}ahamed-rasheed.png`} />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content={pageUrl} />
        <meta property='twitter:title' content='Hey 👋 Im Ahamed' />
        <meta property='twitter:description' content='Im Ahamed! and I work as a Software Engineer at Soho App. Proficient in Web Development.' />
        <meta property='twitter:image' content={`${pageUrl}ahamed-rasheed.png`} />
        <meta name='twitter:site' content='@Ahamed__r' />

        <link rel='manifest' href='/manifest.json' />
      </Head>

      <main className={[styles.container, isDarkTheme ? styles.darkTheme : styles.lightTheme].join(' ')}>
        <label className={styles.containerToggle}>
          <input type='checkbox' onClick={() => setIsDarkTheme(!isDarkTheme)} />
        </label>
        <section className={styles.landing}>
          <h1 className={styles.landingGreeting}>{greeting}</h1>
          <p className={styles.landingDesciption}>
            I'am Ahamed! and I work as a Software Engineer at <a href={soho} target='_blank' rel='noreferrer'>Soho App</a>. Proficient in Web Development.
          </p>
          <p className={styles.landingSocial}>
            You can follow me on <a href={linkedIn} target='_blank' rel='noreferrer'>LinkedIn</a>, <a href={twitter} target='_blank' rel='noreferrer'>Twitter</a> and <a href={instagram} target='_blank' rel='noreferrer'>Instagram</a> & View my recent projects on <a href={github} target='_blank' rel='noreferrer'>GitHub</a>.
          </p>
          <p className={styles.landingSecret}>
            <button
              className={styles.landingSecretReveal}
              onClick={() => setShowSecret(!showSecret)}
            >
              And a Secret..
            </button>
            <span reveal={showSecret.toString()} className={styles.landingSecretMessage}>
              On my spare time, I Work as a Stunt double for Spider Man 🙈
            </span>
          </p>
        </section>
      </main>
    </div>
  )
}

export default Portfolio
