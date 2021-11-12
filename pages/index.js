import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/portfolio.module.scss'

const linkedIn = process.env.NEXT_PUBLIC_LINKEDIN_URL
const twitter = process.env.NEXT_PUBLIC_TWITTER_URL
const instagram = process.env.NEXT_PUBLIC_INSTAGRAM_URL
const github = process.env.NEXT_PUBLIC_GITHUB_URL
const soho = process.env.NEXT_PUBLIC_SOHOAPP_URL
const swivel = process.env.NEXT_PUBLIC_SWIVEL_URL

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

    // Theme switch
    if (window.matchMedia) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // dark mode
        setIsDarkTheme(true)
      }

      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
        setIsDarkTheme(event.matches)
      });
    }

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => { console.log('Removed Event listener!') })
    }
  }, [])

  return (
    <div>
      <Head>
        <title>Hey 👋 Im Ahamed</title>
        <meta name='title' content='Hey 👋 Im Ahamed' />
        <meta name='description' content='Im Ahamed! and I work as a Senior Software Engineer at Swivel Group. Proficient in Web Development.' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={pageUrl} />
        <meta property='og:title' content='Hey 👋 Im Ahamed' />
        <meta property='og:description' content='Im Ahamed! and I work as a Senior Software Engineer at Swivel Group. Proficient in Web Development.' />
        <meta property='og:image' content={`${pageUrl}ahamed-rasheed.png`} />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content={pageUrl} />
        <meta property='twitter:title' content='Hey 👋 Im Ahamed' />
        <meta property='twitter:description' content='Im Ahamed! and I work as a Senior Software Engineer at Swivel Group. Proficient in Web Development.' />
        <meta property='twitter:image' content={`${pageUrl}ahamed-rasheed.png`} />
        <meta name='twitter:site' content='@Ahamed__r' />
      </Head>

      <main className={[styles.container, isDarkTheme ? styles.darkTheme : styles.lightTheme].join(' ')}>
        <label htmlFor='theme' className={styles.containerToggle}>
          <input id='theme' type='checkbox' checked={isDarkTheme} onChange={() => setIsDarkTheme(!isDarkTheme)} />
        </label>
        <section className={styles.landing}>
          <h1 className={styles.landingGreeting}>{greeting}</h1>
          <p className={styles.landingDesciption}>
            I'am Ahamed! and I work as a Senior Software Engineer at <a href={swivel}>Swivel Group</a>. Proficient in Web Development.
          </p>
          <p className={styles.landingSocial}>
            You can follow me on <a href={linkedIn}>LinkedIn</a>, <a href={twitter}>Twitter</a> and <a href={instagram}>Instagram</a> & View my recent projects on <a href={github}>GitHub</a>.
          </p>
          <p className={styles.landingSecret}>
            <button
              className={styles.landingSecretReveal}
              onClick={() => setShowSecret(!showSecret)}
            >
              And a Secret..
              <div>
                <Image
                  alt='Click here'
                  src='/click.gif'
                  width='60'
                  height='50'
                  quality='50'
                />
              </div>
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
