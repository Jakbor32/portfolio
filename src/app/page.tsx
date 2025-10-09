'use client'

export const dynamic = 'force-static'

import { CONTENT } from '@/constants/content'
import { headlineFont, socialFont, followFont } from '@/styles/fonts'

import Headline from '@/components/Headline'
import Title from '@/components/Title'
import Paragraph from '@/components/ui/Paragraph'
import Follow from '@/components/Follow'
import Signature from '@/components/Signature'
import SocialLinks from '@/components/SocialLinks'

export default function HomePage() {
  const { headline, title, description, follow, socials, location } = CONTENT

  return (
    <section className="flex min-h-screen flex-col items-start justify-start px-4 py-10">
      <div className="animate-fadeInBlur container mx-auto text-left">
        <header className="flex flex-col">
          <Title
            title={title}
            font={socialFont.className}
            className="order-2"
          />
          <Headline
            headline={headline}
            font={headlineFont.className}
            className="order-1"
          />
        </header>
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
      </div>
    </section>
  )
}
