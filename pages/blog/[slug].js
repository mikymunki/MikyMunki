import Layout from '../../components/Layout'
import { useRouter } from 'next/router'

export default function BlogPost() {
  const router = useRouter()
  const { slug } = router.query

  return (
    <Layout>
      <section className="blog-post">
        <h1>{slug ? slug.replace(/-/g, ' ') : 'Loading...'}</h1>
        <article>
          <p>
            This is a placeholder for your dynamic blog content. Connect it to your CMS to load posts
            based on the slug!
          </p>
          <p>
            Once you connect NetlifyCMS or your chosen headless CMS, this page will render your post
            content dynamically with markdown or MDX.
          </p>
        </article>
      </section>
      <style jsx>{`
        .blog-post {
          max-width: 800px;
          margin: 4rem auto;
          padding: 2rem;
          background-color: var(--color-black);
          border-radius: 8px;
          color: var(--color-white);
        }
        .blog-post h1 {
          font-size: 2.5rem;
          color: var(--color-highlight-blue);
          margin-bottom: 1rem;
          text-transform: capitalize;
        }
        .blog-post p {
          margin-bottom: 1rem;
        }
      `}</style>
    </Layout>
  )
}
