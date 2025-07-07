import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <style jsx global>{`
        main {
          min-height: 80vh;
          padding-top: 60px;
          background-color: var(--color-black);
        }
      `}</style>
    </>
  )
}
