import Layout from '../components/Layout'

export default function ContactPage() {
  return (
    <Layout>
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Got a question, booking request, or project idea? Let's talk!</p>
      </section>
      <section className="contact-form">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>Don’t fill this out: <input name="bot-field" /></label>
          </p>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Message:
            <textarea name="message" required></textarea>
          </label>
          <button type="submit" className="cta-button">Send Message</button>
        </form>
      </section>
      <style jsx>{`
        .contact-hero {
          text-align: center;
          padding: 4rem 2rem;
          background-color: var(--color-primary-darkgreen);
        }
        .contact-hero h1 {
          font-size: 2.5rem;
          color: var(--color-highlight-green);
          margin-bottom: 1rem;
        }
        .contact-hero p {
          color: var(--color-white);
          max-width: 600px;
          margin: 0 auto;
        }
        .contact-form {
          padding: 2rem;
          max-width: 600px;
          margin: 2rem auto;
          background-color: var(--color-black);
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0,0,0,0.5);
        }
        .contact-form form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .contact-form label {
          color: var(--color-white);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .contact-form input,
        .contact-form textarea {
          padding: 0.75rem;
          border: none;
          border-radius: 4px;
        }
        .hidden {
          display: none;
        }
      `}</style>
    </Layout>
  )
}
