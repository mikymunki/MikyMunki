export default function NewsletterForm() {
  return (
    <form
      action="https://YOUR_MAILCHIMP_URL"
      method="post"
      target="_blank"
      className="max-w-lg mx-auto flex flex-col md:flex-row items-center gap-4"
    >
      <label htmlFor="email" className="sr-only">Email Address</label>
      <input
        type="email"
        name="EMAIL"
        id="email"
        required
        placeholder="Your email address"
        className="flex-1 px-4 py-2 rounded bg-background border border-darkgreen text-textprimary"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-accentblue text-white rounded"
      >
        Subscribe
      </button>
    </form>
  )
}
