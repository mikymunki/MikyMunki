import Link from 'next/link'
import Layout from '../components/Layout'

export default function Custom500() {
  return (
    <Layout>
      <div className="error-page">
        <h1>500 — Server Error</h1>
        <p>Oops! Something went wrong on our end. Please try again later.</p>
        <Link href="/">
          <a className="cta-button">Return Home</a>
        </Link>
      </div>
      <style jsx>{`
        .error-page {
          text-align: center;
          padding: 4rem 2rem;
        }
        .error-page h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          color: var(--color-highlight-green);
        }
        .error-page p {
          margin-bottom: 2rem;
          color: var(--color-white);
        }
      `}</style>
    </Layout>
  )
}
