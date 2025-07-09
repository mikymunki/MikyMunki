export default function ProductCard({ title, link, image, description }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-background text-textprimary rounded-lg border border-darkgreen hover:border-accentgreen p-4 transition"
      aria-label={`Affiliate link to buy ${title}`}
    >
      <img src={image} alt={title} className="rounded mb-4 w-full h-48 object-cover" />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-textsecondary">{description}</p>
      <button className="mt-4 px-3 py-1 bg-accentgreen text-white rounded">Buy on Amazon</button>
    </a>
  )
}
