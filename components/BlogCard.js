import Link from 'next/link'

export default function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <a className="blog-card">
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <style jsx>{`
          .blog-card {
            background-color: var(--color-primary-darkblue);
            padding: 2rem;
            border-radius: 8px;
            max-width: 300px;
            color: var(--color-white);
            text-decoration: none;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
            transition: transform 0.3s ease;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .blog-card:hover {
            transform: scale(1.03);
          }
          .blog-card h3 {
            margin-top: 0;
            color: var(--color-highlight-blue);
            font-size: 1.5rem;
          }
          .blog-card p {
            margin-top: 0.5rem;
            font-size: 1rem;
            color: var(--color-white);
          }
        `}</style>
      </a>
    </Link>
  )
}
