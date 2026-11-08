import type { Metadata } from 'next'
import Link from 'next/link'
import { Jersey_15 } from 'next/font/google'
import { DrakeSprite } from '@/components/DrakeWalker'

const pixelFont = Jersey_15({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Borka.exe | Coming soon | Jakub Borowy',
  description:
    'Borka.exe: a pixel MMO-style game about my path in IT, from technical school and helpdesk to automation and AI. Coming soon.',
  alternates: {
    canonical: '/game',
  },
  // Kept out of search results until the game launches.
  robots: {
    index: false,
    follow: true,
  },
}

export const dynamic = 'force-static'

export default function GamePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-10 text-center">
      <div className="animate-fadeInBlur flex flex-col items-center gap-5">
        <DrakeSprite scale={5} />

        <h1 className={`${pixelFont.className} text-6xl sm:text-7xl`}>
          Borka<span className="text-[#b00020]">.exe</span>
        </h1>

        <p className="max-w-xl text-lg">
          A pixel MMO-style game about my path in IT: from technical school
          and helpdesk to automation and AI.
        </p>

        <p className={`${pixelFont.className} text-3xl tracking-wide`}>
          Coming soon
        </p>

        <Link
          href="/"
          className="text-accent-light dark:text-accent-dark underline"
        >
          Back to home
        </Link>
      </div>
    </main>
  )
}
