import Link from 'next/link'
import DecryptText from '@/components/ui/DecryptText'

type SocialLinksProps = {
  socials: { label: string; href: string; text: string }[]
  location: string
  className?: string
}

const DECRYPT_DELAY = 900
const DECRYPT_SPEED = 28
const MASK_LENGTH = 32
const ROW_CLASS = 'px-1'

export default function SocialLinks({
  socials,
  location,
  className,
}: SocialLinksProps) {
  return (
    <address
      className={`${className ?? ''} md:text-md mt-8 space-y-2 text-[16px] tracking-[0.22em] text-amber-800 uppercase not-italic dark:text-amber-800`}
    >
      <p aria-label={`Location: ${location}`} className={ROW_CLASS}>
        <DecryptText
          text={location}
          overlay
          delay={DECRYPT_DELAY}
          speed={DECRYPT_SPEED}
          maskPattern="01"
          maskLength={MASK_LENGTH}
        />
      </p>

      {socials.map((social) => (
        <p key={social.href}>
          <Link
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className={`${ROW_CLASS} hover:bg-red-400 hover:text-white dark:hover:bg-red-400`}
          >
            <DecryptText
              text={social.text}
              overlay
              delay={DECRYPT_DELAY}
              speed={DECRYPT_SPEED}
              maskPattern="01"
              maskLength={MASK_LENGTH}
            />
          </Link>
        </p>
      ))}
    </address>
  )
}
