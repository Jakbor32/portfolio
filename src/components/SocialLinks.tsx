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
      className={`${className} uppercase tracking-widest mt-8 space-y-3 text-xs text-amber-800 dark:text-amber-800 not-italic`}
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
            className="hover:text-white hover:bg-red-400 dark:hover:bg-red-400"
          >
            <DecryptText text={social.text} />
          </Link>
        </p>
      ))}
    </address>
  )
}
