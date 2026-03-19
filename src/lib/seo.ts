import type { Metadata } from 'next'

const baseUrl = 'https://jakubborowy.com'

export const defaultMetadata: Metadata = {
  title: 'Jakub Borowy | IT Specialist, Cloud & Power Platform Developer',
  description: 'Portfolio of Jakub Borowy — IT Specialist focused on Microsoft 365, SharePoint, Power Platform, PowerShell automation, cloud infrastructure, and modern web development.',
  authors: [{ name: 'Jakub Borowy' }],
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: 'website',
    url: baseUrl,
    title: 'Jakub Borowy | IT Specialist, Cloud & Power Platform Developer',
    description: 'Portfolio of Jakub Borowy — IT Specialist focused on Microsoft 365, SharePoint, Power Platform, PowerShell automation, cloud infrastructure, and modern web development.',
    siteName: 'Jakub Borowy Portfolio',
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Jakub Borowy Portfolio Open Graph Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jakub Borowy | IT Specialist, Cloud & Power Platform Developer',
    description: 'Portfolio of Jakub Borowy — IT Specialist focused on Microsoft 365, SharePoint, Power Platform, PowerShell automation, cloud infrastructure, and modern web development.',
    images: [`${baseUrl}/og-image.png`],
  },
  icons: {
    icon: `${baseUrl}/favicon.ico`,
    apple: `${baseUrl}/apple-touch-icon.png`,
  },
  manifest: '/site.webmanifest',
}

export const jsonLdPerson = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jakub Borowy',
  jobTitle: 'IT Specialist / Cloud & Power Platform Developer',
  url: baseUrl,
  sameAs: [
    'https://github.com/jakbor32',
    'https://www.linkedin.com/in/jakubborowy/',
  ],
  knowsAbout: [
    "Microsoft 365",
    "Azure",
    "Power Platform",
    "PowerShell",
    "Intune",
    "SharePoint",
    "React",
    "FortiGate",
    "Cloud Computing",
    "Process Automation",
    "Low-Code Development",
    "Web Development",
  ],
}
