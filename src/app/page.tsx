'use client'

import { CONTENT } from '@/constants/content'
import { headlineFont, socialFont, followFont } from '@/styles/fonts'

import Headline from '@/components/Headline'
import Paragraph from '@/components/ui/Paragraph'
import Follow from '@/components/Follow'
import Signature from '@/components/Signature'
import SocialLinks from '@/components/SocialLinks'

export default function HomePage() {
  const { headline, title, description, follow, socials, location } = CONTENT

  return (
    <main className="flex min-h-screen flex-col items-start justify-start px-4 py-10">
      <section className="container mx-auto text-left animate-fadeInBlur">
        <Headline headline={headline} font={headlineFont.className} />
        <h2
          className={`${socialFont.className} mb-4 text-lg font-semibold text-gray-700 dark:text-gray-300`}
        >
          {title}
        </h2>
        {description.map((para, idx) => (
          <Paragraph key={idx}>{para}</Paragraph>
        ))}

        <Follow follow={follow} font={followFont.className} />

        <Signature />

        <SocialLinks
          socials={socials}
          location={location}
          className={socialFont.className}
        />
      </section>
    </main>
  )
}
