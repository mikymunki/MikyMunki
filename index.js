import Head from 'next/head'
import Link from 'next/link'
import ProductCard from '../components/ProductCard'
import NewsletterForm from '../components/NewsletterForm'

export default function Home() {
  return (
    <>
      <Head>
        <title>MikyMunki – Dark Mode Photography & Gear Shop</title>
        <meta name="description" content="Affiliate gear picks, services, and sarcastic rants. Fully ADA compliant." />
      </Head>
      <section className="bg-background text-textprimary py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-accentgreen">Monetize Your Curiosity. Photography. Gear. Sarcasm.</h1>
          <p className="mt-4 text-textsecondary">Shop curated Amazon picks. Honest reviews. No apologies.</p>
          <Link href="/shop">
            <a className="inline-block mt-6 px-4 py-2 bg-accentblue text-white rounded">Shop My Picks</a>
          </Link>
        </div>
      </section>
      <section className="bg-darkblue py-12">
        <h2 className="text-3xl font-bold text-center text-accentgreen">Featured Products</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mt-8">
          <ProductCard
            title="Canon EOS R6"
            link="https://www.amazon.com/dp/B08N5WRWNW?tag=mikymunki-20"
            image="/images/r6.jpg"
            description="Low-light monster. I actually use it."
          />
          <ProductCard
            title="Godox AD200Pro"
            link="https://www.amazon.com/dp/B07Z7MVR4F?tag=mikymunki-20"
            image="/images/ad200.jpg"
            description="Portable strobe. Fight the sun with style."
          />
          <ProductCard
            title="Peak Design Slide Strap"
            link="https://www.amazon.com/dp/B08J4F9R85?tag=mikymunki-20"
            image="/images/strap.jpg"
            description="Carry your camera like a smug professional."
          />
        </div>
      </section>
      <section className="bg-background py-12">
        <h2 className="text-3xl font-bold text-center text-accentgreen">Join the Newsletter</h2>
        <p className="text-center text-textsecondary mb-4">Get Deals, Rants & Tips. No Spam. Ever.</p>
        <NewsletterForm />
      </section>
    </>
  )
}
