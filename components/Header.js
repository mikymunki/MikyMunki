import Link from 'next/link'
import { useContext } from 'react'
import ThemeContext from './ThemeContext'

export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <header className="site-header">
      <nav>
        <Link href="/"><a className="logo">MikyMunki</a></Link>
        <div className="nav-links">
          <Link href="/picks"><a>Picks</a></Link>
          <Link href="/services"><a>Services</a></Link>
          <Link href="/blog"><a>Blog</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
          <button onClick={toggleTheme}>
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </nav>
      <style jsx>{`
        .site-header {
          position: fixed;
          top: 0;
          width: 100%;
          background-color: var(--color-primary-darkblue);
          padding: 1rem 2rem;
          display: flex;
          justify-content: center;
          z-index: 1000;
          box-shadow: 0 2px 5px rgba(0,0,0,0.5);
        }
        nav {
          max-width: 1200px;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.5rem;
          color: var(--color-highlight-blue);
          text-transform: uppercase;
          font-weight: bold;
          letter-spacing: 0.05em;
        }
        .nav-links {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        .nav-links a {
          color: var(--color-white);
          text-decoration: none;
          font-weight: 500;
        }
        .nav-links button {
          background-color: transparent;
          color: var(--color-accent-highlight);
          border: 1px solid var(--color-accent-highlight);
          padding: 0.5rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .nav-links button:hover {
          background-color: var(--color-accent-highlight);
          color: var(--color-black);
        }
      `}</style>
    </header>
  )
}
