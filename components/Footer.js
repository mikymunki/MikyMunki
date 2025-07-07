import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>&copy; {year} MikyMunki. All rights reserved.</p>
        <nav>
          <Link href="/"><a>Home</a></Link>
          <Link href="/picks"><a>Picks</a></Link>
          <Link href="/services"><a>Services</a></Link>
          <Link href="/blog"><a>Blog</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
        </nav>
      </div>
      <style jsx>{`
        .site-footer {
          background-color: var(--color-primary-darkgreen);
          padding: 2rem;
          text-align: center;
          color: var(--color-white);
        }
        .footer-content {
          max-width: 1000px;
          margin: 0 auto;
        }
        .footer-content nav {
          margin-top: 1rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }
        .footer-content a {
          color: var(--color-accent-highlight);
          text-decoration: none;
          font-weight: 500;
        }
        .footer-content a:hover {
          text-decoration: underline;
        }
      `}</style>
    </footer>
  )
}
