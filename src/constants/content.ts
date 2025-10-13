// Main content
export const CONTENT = {
  headline: "Turning IT \n into solutions",
  title: "Jakub Borowy — IT Specialist / Cloud & Power Platform Developer",
  description: [
    "I manage IT systems — from Windows servers and Microsoft 365 to FortiGate security and global infrastructure. I also build low-code apps in Power Platform to automate workflows and cut manual work. [Explore my projects](/projects)",
    "Known for bridging IT operations with development: creating tools that solve business needs while keeping environments secure and reliable. Always exploring cloud, scripting, and modern web tech.",
  ],
  follow: "— Follow my work online",
  location: "Warsaw - Poland",
  socials: [
    {
      label: "Visit Jakub Borowy's GitHub profile",
      href: "https://github.com/jakbor32",
      text: "github.com/jakbor32",
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
  ],
}

// Projects
export const projects = [

{
  title: 'PrivNote',
  description:
'End-to-end encrypted note-sharing app that lets users create self-destructing messages. Encryption and decryption happen entirely in the browser using AES-256, ensuring full privacy with zero data exposure to the server.',
  image:
    '',
  technologies: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'Supabase', 'Crypto-js'],
  link: 'https://privnote-app.vercel.app/',
  github: 'https://github.com/jakbor32/privnote',
},
{
  title: 'Okey Card Game Clone',
  description:
    'A browser-based recreation of the classic Okey minigame from Metin2, featuring authentic mechanics, scoring, and responsive UI built with React and Supabase integration.',
  image:
    '',
  technologies: ['React', 'Supabase', 'JavaScript', 'CSS Modules'],
  link: 'https://okey-card-game.netlify.app',
  github: 'https://github.com/jakbor32/okey-card-game',
},
{
  title: 'SilentWipeScript',
  description:
    'A PowerShell automation script that detects and manages inactive employee accounts across Microsoft 365, SharePoint, and Active Directory. It streamlines HR and IT offboarding by syncing data, securing access, and maintaining logs for compliance.',
  image:
    '',
  technologies: [
    'PowerShell',
    'Microsoft Graph',
    'SharePoint',
    'Active Directory',
    'Azure',
    'NAS',
    'Power Automate',
  ],
  github: 'https://github.com/jakbor32/SilentWipeScript',
},
{
  title: 'Recruitment App',
  description:
    'A secure, end-to-end recruitment management platform for HR teams built with PowerApps, Power Automate, and SharePoint. It streamlines candidate handling, automates approvals, and ensures GDPR-compliant data management within Microsoft 365.',
  image:
    '',
  technologies: [
    'PowerApps - Canvas',
    'Power Automate',
    'SharePoint',
    'Microsoft Teams Approvals',
 
  ],
  github: 'https://github.com/jakbor32/recruitment-app',
},
{
  title: 'Auto Approval Cleanup Flow',
  description:
  'A Power Automate workflow designed to maintain system hygiene by automatically managing and cleaning up outdated Teams approval notifications connected to SharePoint processes. Built with premium connector. It enhances clarity, reduces clutter.',
  image:
    '',
  technologies: ['Power Automate', 'SharePoint', 'Microsoft Teams Approvals', 'Outlook', 'Graph API'],
  github: 'https://github.com/jakbor32/auto-approval-cleanup-flow',
},
{
  title: 'Portfolio',
  description:
    'Personal portfolio built with Next.js, TypeScript, and Tailwind CSS. Showcases professional projects, responsive, and modern design optimized for performance and accessibility.',
  image:
    '',
  technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Vercel', 'React'],
  link: 'https://jakubborowy.com',
  github: 'https://github.com/jakbor32/portfolio',
},
{
  title: 'FluxBoard App',
  description:
    'All-in-one personal dashboard for movies, events, notes, and tasks. Combines elegant design, real-time sync, and secure PIN-protected access — built with React, TypeScript, and Firebase.',
  image:
    '',
  technologies: [
    'React',
    'TypeScript',
    'Firebase Firestore',
    'TailwindCSS',
    'Framer Motion',
    'Vite',
  ],
  link: '', 
  github: '',
}
]
