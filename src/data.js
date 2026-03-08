export const SKILLS = [
  { name: 'HTML5',       key: 'HTML5' },
  { name: 'CSS3',        key: 'CSS3' },
  { name: 'JavaScript',  key: 'JS' },
  { name: 'React',       key: 'React' },
  { name: 'Tailwind CSS',key: 'Tailwind' },
  { name: 'Bootstrap',   key: 'Bootstrap' },
  { name: 'Git',         key: 'Git' },
  { name: 'GitHub',      key: 'GitHub' },
  { name: 'Figma',       key: 'Figma' },
  { name: 'VS Code',     key: 'VSCode' },
]

export const PROJECTS = [
  {
    id: 1, abbr: 'RiseUp', num: '01',
    tag: 'EDUCATION · WEB APP',
    name: 'RiseUp Educating Platform',
    desc: 'A modern educational platform empowering learners with structured courses, interactive content, and an intuitive dashboard. Clean, responsive UI for seamless learning.',
    demo: 'https://riseuply.vercel.app/dashboard.html',
    github: 'https://github.com/GoldDeveloperUz',
    grad: 'var(--cyan), var(--green)',
  },
  {
    id: 2, abbr: 'Codify', num: '02',
    tag: 'TECH · EDUCATION',
    name: 'Codify Platform',
    desc: "A coding-focused educational platform for Uzbekistan's developer community. Features structured learning paths and a modern interface built to inspire the next generation of devs.",
    demo: 'https://codify-uzbekistan.vercel.app/',
    github: 'https://github.com/GoldDeveloperUz',
    grad: '#7c3aed, var(--cyan)',
  },
  {
    id: 3, abbr: 'Portfolio', num: '03',
    tag: 'PERSONAL · PORTFOLIO',
    name: 'Portfolio Website',
    desc: 'A dark-themed personal site showcasing skills, projects and experience. Smooth animations, custom cursor, and fully responsive design built with React + Vite.',
    demo: '#',
    github: 'https://github.com/GoldDeveloperUz',
    grad: '#ff6b35, #ffd166',
  },
  {
    id: 4, abbr: 'GitHub', num: '04',
    tag: 'MARKETING · GITHUB',
    name: 'Git Hub Projects',
    desc: 'A high-converting landing page for a client. Conversion-driven design with compelling CTAs, smooth animations, and mobile-first responsiveness.',
    demo: 'https://github.com/GoldDeveloperUz',
    github: 'https://github.com/GoldDeveloperUz',
    grad: 'var(--green), var(--cyan)',
  },
]

export const EDUCATION = [
  {
    date: '2023 — Present',
    title: 'Self-taught Front-End Development',
    org: 'Independent Study · Online Resources',
    desc: 'Continuously learning modern web technologies through freeCodeCamp, Udemy, and official docs. Building real-world projects in HTML, CSS, JavaScript, React, and UI/UX.',
  },
  {
    date: '2022 — 2023',
    title: 'Web Development Foundations',
    org: 'Online Courses & Bootcamps · Uzbekistan',
    desc: 'Completed structured courses covering HTML5, CSS3, JavaScript, responsive design, and version control with Git & GitHub.',
  },
  {
    date: '2021 — 2022',
    title: 'Introduction to Programming',
    org: 'Self-Study · Navoi, Uzbekistan',
    desc: 'Discovered a passion for building things for the web and decided to pursue front-end development seriously.',
  },
]

export const LANGUAGES = [
  { flag: '🇺🇿', name: 'Uzbek',   level: 'Native — C2',        pct: 100 },
  { flag: '🇷🇺', name: 'Russian', level: 'Intermediate — B1',   pct: 60  },
  { flag: '🇬🇧', name: 'English', level: 'Advanced — C1',   pct: 80  },
]
