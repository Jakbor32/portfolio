import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Jakub Borowy',
  description: 'My personal portfolio showcasing projects and skills',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="h-screen bg-gray-100 text-gray-900 antialiased flex flex-col">
        <main className="flex-1 flex items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  )
}
