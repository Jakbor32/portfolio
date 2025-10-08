'use client'

import { useState } from 'react'
import { FuzzyText } from '@/components/ui/FuzzyText'
import Link from 'next/link'

export default function NotFound() {
  const [enableHover] = useState(true)
  const [hoverIntensity] = useState(0.5)

  return (
    <main className="flex-col items-center justify-center space-y-6 text-center">
      <FuzzyText
        fontSize="6rem"
        fontWeight={900}
        baseIntensity={0.2}
        hoverIntensity={hoverIntensity}
        enableHover={enableHover}
        className="h-auto w-auto"
      >
        404
      </FuzzyText>

      <div>
        <p className="mb-4">Page not found</p>
        <Link
          href="/"
          className="text-accent-light dark:text-accent-dark underline"
        >
          Go back home
        </Link>
      </div>
    </main>
  )
}
