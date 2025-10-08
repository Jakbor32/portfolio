import type { Metadata } from 'next'

const baseUrl = 'https://jakubborowy.com'

export const defaultMetadata: Metadata = {
  title: 'Jakub Borowy – IT Specialist / Cloud & Power Platform Developer',
  description: 'Portfolio of Jakub Borowy – IT Specialist / Cloud & Power Platform Developer. Experienced in Microsoft 365, Azure, Intune, SharePoint, Power Platform, and process automation with PowerShell. Explore projects in PowerApps, Power Automate, React and modern cloud solutions.',
  authors: [{ name: 'Jakub Borowy' }],
  metadataBase: new URL(baseUrl),
    alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: 'website',
    url: baseUrl,
    title: 'Jakub Borowy – IT Specialist / Cloud & Power Platform Developer',
    description: 'Portfolio of Jakub Borowy – IT Specialist / Cloud & Power Platform Developer. Experienced in Microsoft 365, Azure, Intune, SharePoint, Power Platform, and process automation with PowerShell. Explore projects in PowerApps, Power Automate, React and modern cloud solutions.',
    siteName: 'Jakub Borowy Portfolio',
    images: [`${baseUrl}/og-image.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jakub Borowy – IT Specialist / Cloud & Power Platform Developer',
    description: 'Portfolio of Jakub Borowy – IT Specialist / Cloud & Power Platform Developer. Experienced in Microsoft 365, Azure, Intune, SharePoint, Power Platform, and process automation with PowerShell. Explore projects in PowerApps, Power Automate, React and modern cloud solutions.',
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
