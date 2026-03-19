
// Types
export type SocialLink = {
  label: string
  href: string
  text: string
}

export type Project = {
  slug: string
  title: string
  description: string
  image: string
  imageAlt: string
  technologies: string[]
  github?: string
  link?: string
  private?: boolean
  featured?: boolean
}

// Main content
export const CONTENT = {
  headline: "Turning IT \n into solutions",
  title: "Jakub Borowy — IT Specialist / Cloud & Power Platform Developer",
  description: [
    "I design, automate, and secure IT systems across Microsoft 365, SharePoint, Power Platform, PowerShell automation, cloud infrastructure, and modern web development. [Explore my projects](/projects)",
    "Known for bridging IT operations with development: creating tools that solve business needs while keeping environments secure and reliable. Always exploring cloud, scripting, and modern web tech.",
  ],
  follow: "— Follow my work online",
  location: "Warsaw, Poland",
  socials: [
    {
      label: "Visit Jakub Borowy's GitHub profile",
      href: "https://github.com/Jakbor32",
      text: "github.com/Jakbor32",
    },
    {
      label: "Connect with Jakub Borowy on LinkedIn",
      href: "https://linkedin.com/in/jakubborowy",
      text: "linkedin.com/in/jakubborowy",
    },
    {
      label: "Send an email to Jakub Borowy",
      href: "mailto:borowyjakub32@gmail.com",
      text: "borowyjakub32@gmail.com",
    },
  ] satisfies SocialLink[],
}

// Projects
export const projects: Project[] = [
  {
    slug: 'org-chart-spfx',
    title: 'Org Chart (SPFx)',
    description:
      'A SharePoint Online org chart web part built with SPFx and Microsoft Graph. Visualizes manager-to-employee hierarchy, supports search, department views, fullscreen mode, and export to PDF/PNG.',
    image: '/projects/org-chart-spfx.webp',
    imageAlt: 'Org Chart SPFx web part for SharePoint Online showing organizational hierarchy',
    technologies: ['SPFx', 'TypeScript', 'React', 'SharePoint Online', 'Microsoft Graph'],
    github: 'https://github.com/Jakbor32/org-chart-spfx',
    featured: true,
  },
  {
    slug: 'silent-wipe-script',
    title: 'SilentWipeScript',
    description:
      'PowerShell automation for offboarding inactive accounts across Microsoft 365, SharePoint, and Active Directory. Syncs data, secures access, and maintains compliance logs.',
    image: '/projects/silent-wipe-script.webp',
    imageAlt: 'PowerShell script for automating offboarding in Microsoft 365 and Active Directory',
    technologies: [
      'PowerShell',
      'Microsoft Graph API',
      'SharePoint Online',
      'Active Directory',
      'Azure',
      'NAS',
      'Power Automate',
    ],
    github: 'https://github.com/Jakbor32/silent-wipe-script',
    featured: true,
  },
  {
    slug: 'recruitment-app',
    title: 'Recruitment App',
    description:
      'GDPR-compliant recruitment platform for HR, built with PowerApps, Power Automate, and SharePoint. Automates candidate handling and approvals in Microsoft 365.',
    image: '/projects/recruitment-app.webp',
    imageAlt: 'Recruitment management app for HR teams in Microsoft 365',
    technologies: [
      'Power Apps (Canvas)',
      'Power Automate',
      'SharePoint Online',
      'Microsoft Teams Approvals',
    ],
    github: 'https://github.com/Jakbor32/recruitment-app',
    featured: true,
  },
  {
    slug: 'auto-approval-cleanup-flow',
    title: 'Auto Approval Cleanup Flow',
    description:
      'Power Automate workflow for cleaning up outdated Teams approval notifications in SharePoint processes. Maintains clarity and reduces clutter.',
    image: '/projects/auto-approval-cleanup-flow.webp',
    imageAlt: 'Power Automate flow for Teams approval cleanup in SharePoint',
    technologies: ['Power Automate', 'SharePoint', 'Microsoft Teams Approvals', 'Outlook', 'Graph API'],
    github: 'https://github.com/Jakbor32/auto-approval-cleanup-flow',
    featured: true,
  },
  {
    slug: 'privnote',
    title: 'PrivNote',
    description:
      'End-to-end encrypted note-sharing app with self-destructing messages. AES-256 encryption in the browser for full privacy.',
    image: '/projects/privnote.webp',
    imageAlt: 'PrivNote app for secure, encrypted note sharing',
    technologies: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'Supabase', 'Crypto-js'],
    link: 'https://privnote-app.vercel.app/',
    github: 'https://github.com/Jakbor32/privnote',
  },
  {
    slug: 'portfolio',
    title: 'Portfolio',
    description:
      'Personal portfolio built with Next.js, TypeScript, and Tailwind CSS. Modern, responsive, and accessible.',
    image: '/projects/portfolio.webp',
    imageAlt: 'Portfolio website of Jakub Borowy',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Vercel', 'React'],
    link: 'https://jakubborowy.com',
    github: 'https://github.com/Jakbor32/portfolio',
  },
  {
    slug: 'okey-card-game-clone',
    title: 'Okey Card Game Clone',
    description:
      'Browser-based clone of the Okey minigame from Metin2. Authentic mechanics, scoring, and responsive UI.',
    image: '/projects/okey-card-game.webp',
    imageAlt: 'Okey card game clone web app',
    technologies: ['React', 'Supabase', 'JavaScript', 'CSS Modules'],
    link: 'https://okey-card-game.netlify.app',
    github: 'https://github.com/Jakbor32/Okey-Card-Game-Clone',
  },
  {
    slug: 'fluxboard-app',
    title: 'FluxBoard App',
    description:
      'Personal dashboard for movies, events, notes, and tasks. Real-time sync and PIN-protected access.',
    image: '/projects/fluxboard.webp',
    imageAlt: 'FluxBoard personal dashboard app',
    technologies: ['React', 'TypeScript', 'Firebase Firestore', 'TailwindCSS', 'Framer Motion', 'Vite'],
    private: true,
  },
]
