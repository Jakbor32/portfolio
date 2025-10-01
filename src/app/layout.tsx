import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import Script from 'next/script'
import { defaultMetadata, jsonLdPerson } from '@/lib/seo'
import { ThemeProvider } from 'next-themes'
import ThemeToggle from '@/components/ThemeToggle'

export const metadata: Metadata = defaultMetadata

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="bg-white dark:bg-[#191919] text-[#37352f] dark:text-[#ffffffcf] transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="absolute top-4 right-4">
            <ThemeToggle />
          </div>
          <main className="flex-1 flex items-center justify-center min-h-dvh">
            {children}
          </main>
          {/* JSON-LD for SEO */}
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
