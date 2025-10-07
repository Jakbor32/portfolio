import Link from 'next/link'
import DecryptText from '@/components/ui/DecryptText'

type SocialLinksProps = {
  socials: { label: string; href: string; text: string }[]
  location: string
  className?: string
}

export default function SocialLinks({
  socials,
  location,
  className,
}: SocialLinksProps) {
  return (
    <address
      className={`${className} mt-8 space-y-3 text-sm tracking-widest text-amber-800 uppercase not-italic md:text-base dark:text-amber-800`}
    >
      <p aria-label={`Location: ${location}`}>
        <DecryptText text={location} />
      </p>
      {socials.map((social, idx) => (
        <p key={idx}>
          <Link
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="hover:bg-red-400 hover:text-white dark:hover:bg-red-400"
          >
            <DecryptText text={social.text} />
          </Link>
        </p>
      ))}
    </address>
  )
}
