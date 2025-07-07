import Image from 'next/image'

export default function PicksCarousel() {
  const picks = [
    {
      name: 'Awesome Product 1',
      description: 'This is an affiliate product that fits the MikyMunki vibe.',
      image: '/images/sample1.jpg',
      link: 'https://www.amazon.com/dp/example1?tag=mikymunki-20'
    },
    {
      name: 'Essential Tool 2',
      description: 'Recommended affiliate pick with your Amazon ID.',
      image: '/images/sample2.jpg',
      link: 'https://www.amazon.com/dp/example2?tag=mikymunki-20'
    }
  ]

  return (
    <div className="picks-carousel">
      {picks.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="pick-card"
        >
          <Image
            src={item.image}
            alt={item.name}
            width={300}
            height={200}
            className="pick-image"
          />
          <div className="pick-info">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        </a>
      ))}
      <style jsx>{`
        .picks-carousel {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          justify-content: center;
          padding: 2rem;
          background-color: var(--color-black);
        }
        .pick-card {
          background-color: var(--color-primary-darkblue);
          border-radius: 8px;
          overflow: hidden;
          text-decoration: none;
          color: var(--color-white);
          max-width: 300px;
          transition: transform 0.3s ease;
        }
        .pick-card:hover {
          transform: scale(1.03);
        }
        .pick-info {
          padding: 1rem;
        }
        .pick-info h3 {
          margin: 0 0 0.5rem;
          color: var(--color-highlight-blue);
        }
        .pick-info p {
          margin: 0;
          color: var(--color-white);
          font-size: 0.95rem;
        }
      `}</style>
    </div>
  )
}
