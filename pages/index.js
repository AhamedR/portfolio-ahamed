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

      </Head>

      <main className={styles.container}>
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
