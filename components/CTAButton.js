import Link from 'next/link'

export default function CTAButton({ text, link }) {
  return (
    <Link href={link}>
      <a className="cta-button">{text}</a>
    </Link>
  )
}
