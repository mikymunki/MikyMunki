import Head from 'next/head'
import ProductCard from '../components/ProductCard'

export default function Shop() {
  return (
    <>
      <Head>
        <title>Shop – MikyMunki</title>
        <meta name="description" content="Curated Amazon affiliate gear recommendations. Buy them. Fund my sarcasm." />
      </Head>
      <section className="bg-background text-textprimary py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-accentgreen">Shop My Gear</h2>
          <p className="mt-4 text-textsecondary">These are my curated Amazon affiliate picks. Buy them, I get paid. Capitalism, baby.</p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <ProductCard
              title="Canon EOS R6"
              link="https://www.amazon.com/dp/B08N5WRWNW?tag=mikymunki-20"
              image="/images/r6.jpg"
              description="Low-light monster. I actually use it."
            />
            {/* Add more ProductCards as needed */}
          </div>
        </div>
      </section>
    </>
  )
}
