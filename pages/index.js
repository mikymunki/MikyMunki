import Layout from '../components/Layout'
import CTAButton from '../components/CTAButton'

export default function Home() {
  return (
    <Layout>
      <section className="hero">
        <h1>Welcome to MikyMunki</h1>
        <p>Professional, street-smart, multi-service creative brand.</p>
        <CTAButton text="Explore Our Picks" link="/picks" />
      </section>
      <style jsx>{`
        .hero {
          text-align: center;
          padding: 6rem 2rem;
          background-color: var(--color-primary-darkblue);
          color: var(--color-white);
        }
        .hero h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          color: var(--color-highlight-blue);
        }
        .hero p {
          font-size: 1.25rem;
          margin-bottom: 2rem;
        }
      `}</style>
    </Layout>
  )
}
