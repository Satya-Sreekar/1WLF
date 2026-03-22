export interface TerminalCommand {
  text: string
  type: 'cmd' | 'out' | 'blank'
}

export const terminalCommands: TerminalCommand[] = [
  { text: 'user@1wlf:~$ whoami', type: 'cmd' },
  { text: '> Satya Sreekar Pattaswami', type: 'out' },
  { text: '> Co-Founder @ ThinkOMega IT Solutions', type: 'out' },
  { text: '> AI Engineer · Builder · Researcher', type: 'out' },
  { text: '', type: 'blank' },
  { text: 'user@1wlf:~$ cat ./stack', type: 'cmd' },
  { text: '  [+] AI — LLMs · Vision · Speech · Multimodal', type: 'out' },
  { text: '  [+] Backend — FastAPI · Flask · Node.js · AWS', type: 'out' },
  { text: '  [+] Frontend — React · Flutter · TypeScript', type: 'out' },
  { text: '  [+] Infra — Docker · Nginx · CI/CD · Linux', type: 'out' },
  { text: '', type: 'blank' },
  { text: 'user@1wlf:~$ echo $STATUS', type: 'cmd' },
  { text: '> From paper to pipeline — every layer.', type: 'out' },
]

export const quotes = [
  "I don't just dream ideas, I build systems.",
  'Deep focus, over shallow noise.',
  'Dreaming of AGI. Building for Reality.',
  'No bureaucracy. No fluff. Just impact.',
]

export interface FocusArea {
  icon: 'brain' | 'activity' | 'grid' | 'cloud'
  title: string
  description: string
}

export const focusAreas: FocusArea[] = [
  {
    icon: 'brain',
    title: 'Artificial Intelligence',
    description: 'LLMs, computer vision, speech processing, and multimodal AI. Dreaming of AGI, building for reality.',
  },
  {
    icon: 'activity',
    title: 'Healthcare Systems',
    description: 'Clinical automation, patient management, and medical data pipelines. Tech that directly saves lives.',
  },
  {
    icon: 'grid',
    title: 'Full-Stack Engineering',
    description: 'React, Flutter, FastAPI, Node.js — end-to-end product development from database to deployment.',
  },
  {
    icon: 'cloud',
    title: 'Cloud & Infrastructure',
    description: 'AWS, Docker, Nginx, CI/CD, Linux. Scalable, secure, production-ready systems with cost optimization.',
  },
]

export const projectInfo = {
  badge: 'Full-Stack Platform',
  title: '1WLF TMS',
  description: 'Multi-tenant task management with Kanban boards, real-time sync via SSE, automatic time tracking, QA workflows, and granular role-based access control.',
  href: '/tms',
  tech: ['FastAPI', 'React 19', 'MySQL', 'Docker', 'Tailwind', 'TypeScript'],
  screenshots: [
    { src: '/tms/screenshots-dark/01-kanban.png', alt: 'TMS Kanban Board' },
    { src: '/tms/screenshots-dark/04-task-detail.png', alt: 'TMS Task Detail' },
  ],
}

export const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Satya-Sreekar',
    icon: 'github' as const,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/satya-sreekar-pattaswami-093a2220a/',
    icon: 'linkedin' as const,
  },
]

export const contactEmail = 'contact1wlf@gmail.com'
