import Layout from '../components/Layout'
import ServiceCard from '../components/ServiceCard'

export default function ServicesPage() {
  return (
    <Layout>
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>From websites and photography to tour and project management — MikyMunki has you covered.</p>
      </section>
      <section className="services-list">
        <ServiceCard
          title="Websites"
          description="Custom, responsive, SEO-optimized websites tailored to your needs."
        />
        <ServiceCard
          title="Photography"
          description="Professional event, band, model, and landscape photography with style."
        />
        <ServiceCard
          title="Tour Management"
          description="Organized, efficient, artist-friendly tour management services."
        />
        <ServiceCard
          title="Project Management"
          description="End-to-end planning and oversight for your creative or business projects."
        />
      </section>
      <style jsx>{`
        .services-hero {
          text-align: center;
          padding: 4rem 2rem;
          background-color: var(--color-primary-darkblue);
        }
        .services-hero h1 {
          font-size: 2.5rem;
          color: var(--color-highlight-blue);
          margin-bottom: 1rem;
        }
        .services-hero p {
          color: var(--color-white);
          max-width: 700px;
          margin: 0 auto;
        }
        .services-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
          padding: 2rem;
          background-color: var(--color-black);
        }
      `}</style>
    </Layout>
  )
}
