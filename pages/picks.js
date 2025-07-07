import Layout from '../components/Layout'
import PicksCarousel from '../components/PicksCarousel'

export default function PicksPage() {
  return (
    <Layout>
      <section className="picks-hero">
        <h1>Our Picks</h1>
        <p>Hand-picked affiliate recommendations to inspire you, with links that help support MikyMunki.</p>
      </section>
      <PicksCarousel />
      <style jsx>{`
        .picks-hero {
          text-align: center;
          padding: 4rem 2rem;
          background-color: var(--color-primary-darkgreen);
        }
        .picks-hero h1 {
          font-size: 2.5rem;
          color: var(--color-highlight-green);
          margin-bottom: 1rem;
        }
        .picks-hero p {
          color: var(--color-white);
          max-width: 600px;
          margin: 0 auto;
        }
      `}</style>
    </Layout>
  )
}
