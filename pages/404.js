import Link from 'next/link'
import Layout from '../components/Layout'

export default function Custom404() {
  return (
    <Layout>
      <div className="error-page">
        <h1>404 — Page Not Found</h1>
        <p>Sorry, the page you’re looking for doesn’t exist or has been moved.</p>
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
          color: var(--color-highlight-blue);
        }
        .error-page p {
          margin-bottom: 2rem;
          color: var(--color-white);
        }
      `}</style>
    </Layout>
  )
}
