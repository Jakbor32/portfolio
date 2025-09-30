import type { Metadata } from 'next'

const baseUrl = 'https://jakubborowy.com'

export const defaultMetadata: Metadata = {
  title: 'Jakub Borowy – IT Specialist',
  description: 'My personal portfolio showcasing projects and skills',
  keywords: ['Jakub Borowy', 'IT Specialist', 'portfolio', 'projects', 'skills'],
  authors: [{ name: 'Jakub Borowy' }],
  metadataBase: new URL(baseUrl),
  openGraph: {
    type: 'website',
    url: baseUrl,
    title: 'Jakub Borowy – IT Specialist',
    description: 'My personal portfolio showcasing projects and skills',
    siteName: 'Jakub Borowy Portfolio',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jakub Borowy – IT Specialist',
    description: 'My personal portfolio showcasing projects and skills',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const jsonLdPerson = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jakub Borowy',
  jobTitle: 'IT Specialist',
  url: baseUrl,
  sameAs: [
    'https://github.com/jakbor32',
    'https://www.linkedin.com/in/jakubborowy/',
  ],
}
