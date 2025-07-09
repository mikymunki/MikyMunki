<form name="contact" method="POST" data-netlify="true" className="flex flex-col gap-4 max-w-lg mx-auto">
  <input type="text" name="name" required placeholder="Your Name" className="px-4 py-2 rounded bg-background border border-darkgreen text-textprimary" />
  <input type="email" name="email" required placeholder="Your Email" className="px-4 py-2 rounded bg-background border border-darkgreen text-textprimary" />
  <textarea name="message" required placeholder="Your Message" className="px-4 py-2 rounded bg-background border border-darkgreen text-textprimary"></textarea>
  <button type="submit" className="px-4 py-2 bg-accentgreen text-white rounded">Send It</button>
</form>
