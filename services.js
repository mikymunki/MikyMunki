import Head from 'next/head'

export default function Services() {
  return (
    <>
      <Head>
        <title>Services – MikyMunki</title>
        <meta name="description" content="Hire me for photography sessions, editing, or coaching." />
      </Head>
      <section className="bg-background text-textprimary py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-accentgreen">Hire Me. Or Don’t. But You’ll Regret It.</h2>
          <p className="mt-4 text-center text-textsecondary">Professional, a little rebellious. Prices start here:</p>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="border border-darkgreen rounded-lg p-6">
              <h3 className="text-2xl font-bold text-accentblue">Local Photoshoots</h3>
              <p className="mt-2 text-textsecondary">Starting at $150/hr</p>
              <a href="https://www.paypal.me/mikymunki/150" className="mt-4 inline-block px-4 py-2 bg-accentgreen text-white rounded">Pay with PayPal</a>
              <a href="https://buy.stripe.com/test_button_link" className="mt-2 inline-block px-4 py-2 bg-accentblue text-white rounded">Pay with Stripe</a>
            </div>
            <div className="border border-darkgreen rounded-lg p-6">
              <h3 className="text-2xl font-bold text-accentblue">Photo Editing</h3>
              <p className="mt-2 text-textsecondary">$25/image</p>
              <a href="https://www.paypal.me/mikymunki/25" className="mt-4 inline-block px-4 py-2 bg-accentgreen text-white rounded">Pay with PayPal</a>
            </div>
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-accentgreen">Book a Session</h3>
            <form name="booking" method="POST" data-netlify="true" className="max-w-lg mx-auto mt-4 flex flex-col gap-4">
              <input type="text" name="name" required placeholder="Your Name" className="px-4 py-2 rounded bg-background border border-darkgreen text-textprimary" />
              <input type="email" name="email" required placeholder="Your Email" className="px-4 py-2 rounded bg-background border border-darkgreen text-textprimary" />
              <textarea name="message" required placeholder="Your Message" className="px-4 py-2 rounded bg-background border border-darkgreen text-textprimary"></textarea>
              <button type="submit" className="px-4 py-2 bg-accentblue text-white rounded">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
