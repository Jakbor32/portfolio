import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import Script from 'next/script'
import { defaultMetadata, jsonLdPerson } from '@/lib/seo'
import { ThemeProvider } from 'next-themes'
import ThemeToggle from '@/components/ThemeToggle'
import { Squares } from '@/components/ui/SquaresBackground'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = defaultMetadata

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark min-h-screen transition-colors duration-300">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
        >
          <div className="absolute top-4 right-4 z-20">
            <ThemeToggle />
          </div>

          <div className="pointer-events-none fixed inset-0 -z-10 select-none">
            <Squares squareSize={40} borderColor="#888" />
          </div>

          <main className="flex min-h-screen flex-1 items-center justify-center">
            {children}
          </main>

          <Script
            id="json-ld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(jsonLdPerson, null, 2),
            }}
          />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
