import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import Script from 'next/script'
import { defaultMetadata, jsonLdPerson } from '@/lib/seo'

export const metadata: Metadata = defaultMetadata

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="h-screen bg-gray-100 text-gray-900 antialiased flex flex-col">
        <main className="flex-1 flex items-center justify-center">
          {children}
        </main>

        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
      </body>
    </html>
  )
}
