import Layout from '../../components/Layout'
import BlogCard from '../../components/BlogCard'

export default function BlogIndex() {
  const posts = [
    {
      title: 'Welcome to MunkiWire',
      excerpt: 'This is the official MikyMunki blog — get updates, picks, and stories straight from the source.',
      slug: 'welcome-to-munkiwire'
    },
    {
      title: 'Building the MikyMunki Site',
      excerpt: 'A behind-the-scenes look at how we built this site, from planning to deployment.',
      slug: 'building-the-mikymunki-site'
    }
  ]

  return (
    <Layout>
      <section className="blog-hero">
        <h1>MunkiWire Blog</h1>
        <p>Insights, news, and updates from the world of MikyMunki.</p>
      </section>
      <section className="blog-list">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </section>
      <style jsx>{`
        .blog-hero {
          text-align: center;
          padding: 4rem 2rem;
          background-color: var(--color-primary-darkblue);
        }
        .blog-hero h1 {
          font-size: 2.5rem;
          color: var(--color-highlight-blue);
          margin-bottom: 1rem;
        }
        .blog-hero p {
          color: var(--color-white);
          max-width: 600px;
          margin: 0 auto;
        }
        .blog-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
          padding: 2rem;
          background-color: var(--color-black);
        }
      `}</style>
    </Layout>
  )
}
