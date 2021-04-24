import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/portfolio.module.scss'

const linkedIn = process.env.NEXT_PUBLIC_LINKEDIN_URL
const twitter = process.env.NEXT_PUBLIC_TWITTER_URL
const instagram = process.env.NEXT_PUBLIC_INSTAGRAM_URL

const Portfolio = () => {
  const [greeting, setGreeting] = useState('Hey 👋')
  const [showSecret, setShowSecret] = useState(false)

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
  }, [])

  return (
    <div>
      <Head>
        <title>Ahamed's portfolio</title>
        <meta property='og:url' content={window.location.href} />
        <meta property='og:title' content='Hey 👋 Im Ahamed' />
        <meta property='og:description' content='Im Ahamed! and I work as a Software Engineer at Soho App. Proficient with NextJS - ReactJS, Familiar with other Web Development Techs.' />
        <meta property='og:image' content={`${window.location.href}ahamed-rasheed.png`} />
      </Head>

      <main className={styles.container}>
        <section className={styles.landing}>
          <h1 className={styles.landingGreeting}>{greeting}</h1>
          <p className={styles.landingDesciption}>
            I'am Ahamed! and I work as a Software Engineer at Soho App. Proficient with NextJS - ReactJS, Familiar with other Web Development Techs.
          </p>
          <p className={styles.landingSocial}>
            You can follow me on <a href={linkedIn} target='_blank' rel='noreferrer'>LinkedIn</a>, <a href={twitter} target='_blank' rel='noreferrer'>Twitter</a> and <a href={instagram} target='_blank' rel='noreferrer'>Instagram</a>.
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
