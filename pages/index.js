import Layout from '../components/Layout'
import CTAButton from '../components/CTAButton'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <section className="hero">
        <h1>Welcome to MikyMunki</h1>
        <p>Professional. Street-smart. Multi-service creative brand.</p>
        <CTAButton text="Check Out Our Picks" link="/picks" />
        <div className="quick-links">
          <Link href="/services">
            <a className="cta-button">Our Services</a>
          </Link>
          <Link href="/blog">
            <a className="cta-button">Read the Blog</a>
          </Link>
          <Link href="/contact">
            <a className="cta-button">Contact Us</a>
          </Link>
        </div>
      </section>
      <style jsx>{`
        .hero {
          text-align: center;
          padding: 4rem 2rem;
          background-color: var(--color-primary-darkblue);
        }
        .hero h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          color: var(--color-highlight-blue);
        }
        .hero p {
          margin-bottom: 2rem;
          color: var(--color-white);
        }
        .quick-links {
          margin-top: 2rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }
      `}</style>
    </Layout>
  )
}
