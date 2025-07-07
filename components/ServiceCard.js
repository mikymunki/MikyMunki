export default function ServiceCard({ title, description }) {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <style jsx>{`
        .service-card {
          background-color: var(--color-primary-darkgreen);
          padding: 2rem;
          border-radius: 8px;
          max-width: 300px;
          color: var(--color-white);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
          transition: transform 0.3s ease;
          text-align: left;
        }
        .service-card:hover {
          transform: scale(1.03);
        }
        .service-card h3 {
          margin-top: 0;
          color: var(--color-highlight-green);
          font-size: 1.5rem;
        }
        .service-card p {
          margin: 0.5rem 0 0;
          font-size: 1rem;
        }
      `}</style>
    </div>
  )
}
