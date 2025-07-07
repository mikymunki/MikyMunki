import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#0a1a2f" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="MikyMunki" />
        <meta name="keywords" content="MikyMunki, creative, professional, services, picks, blog" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
