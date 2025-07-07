import '../styles/globals.css'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import ThemeContext from '../components/ThemeContext'

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) setTheme(savedTheme)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <>
      <Head>
        <title>MikyMunki</title>
        <meta name="description" content="Professional, street-smart, multi-service creative brand" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeContext.Provider>
    </>
  )
}
