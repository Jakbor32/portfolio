import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import Script from 'next/script'
import { defaultMetadata, jsonLdPerson } from '@/lib/seo'
import { ThemeProvider } from 'next-themes'
import ThemeToggle from '@/components/ThemeToggle'
import { Squares } from '@/components/ui/SquaresBackground'

export const metadata: Metadata = defaultMetadata

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark transition-colors duration-300">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
        >
          <div className="absolute top-4 right-4 z-20">
            <ThemeToggle />
          </div>
          <div className="fixed inset-0 -z-10 pointer-events-none">
            <Squares squareSize={40} borderColor="#888" />
          </div>

          <main className="flex-1 flex items-center justify-center min-h-dvh relative z-10">
            {children}
          </main>

          <Script
            id="json-ld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
