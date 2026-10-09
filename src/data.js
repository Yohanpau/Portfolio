// all the site text is in here
// TODO: fill in everything in [brackets] (or delete the line) before sending the link to anyone

export const profile = {
  name: 'Yohan Paulo Caballero',
  handle: 'CABALLERO',
  intro:
    'IT student at ICCT College. I build web apps, and I care most about what happens after the code is written: deploying it, automating the pipeline, and keeping it running.',
  status: [
    ['status', 'open to work: cloud, devops, IT support, junior dev'],
    ['based', 'Marikina City, Metro Manila (onsite / hybrid / remote)'],
    ['grad', 'BSIT, expected December 2027'],
  ],
  email: 'yohancaballeroo@gmail.com',
  phone: '+63 962 719 0617',
  links: [
    { label: 'GitHub', href: 'https://github.com/Yohanpau' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yohan-paulo-caballero' },
  ],
  // TODO: export resume to PDF and drop it in public/resume.pdf
  resume: 'resume.pdf',
}

export const work = [
  {
    role: 'Web Developer Intern (OJT)',
    org: '[Company name]',
    when: '[Mon] – [Mon] 2026',
    points: [
      'Built the company website from scratch with [React / Next.js] and Tailwind CSS, from layout to production release.',
      'Deployed and maintain it on [host, e.g. Vercel / Netlify / cPanel] at [domain].',
      '[One more concrete thing: contact form, CMS, SEO, page speed, number of pages]',
    ],
    stack: ['react', 'tailwind', '[host]'],
    link: { label: '[domain]', href: '#' },
  },
  {
    role: 'Developer, paid client project',
    org: 'Math learning game for a student research study',
    when: '[Mon Year]',
    points: [
      'Built a math game used by [N] students as the intervention tool in a research study; delivered for payment with a team of [N].',
      '[What you built: levels, scoring, saving progress to a database, the platform it ran on]',
    ],
    stack: ['[stack]'],
  },
]

export const projects = [
  {
    name: 'YUKO',
    event: 'Google Chrome Built-in AI Challenge',
    year: '[year]',
    role: 'Developer / Cloud Engineer',
    summary:
      'Set up Firebase Cloud Functions and the deployment pipeline, and built AI features on top of Chrome’s built-in AI APIs.',
    stack: ['firebase', 'cloud functions', 'javascript'],
    links: [{ label: 'source', href: '[github link]' }],
  },
  {
    name: 'DueMinder',
    event: 'World Computer Hacker League, Regional Qualifier',
    year: '2025',
    role: 'Developer / Cloud Engineer',
    summary:
      'Deployed the frontend to Netlify and the API to Render, and built the AI-generated deadline suggestions.',
    stack: ['netlify', 'render', '[react]', '[node]'],
    links: [{ label: 'source', href: '[github link]' }],
  },
  {
    name: 'NEON',
    event: 'RoboTHINKS',
    year: '2024',
    placement: '2nd place',
    role: 'Presenter / Programmer',
    summary: 'Presented the robot to the judges and programmed its Arduino-based movement.',
    stack: ['arduino', 'c++'],
  },
  {
    name: 'LUNA',
    event: 'AppCon',
    year: '2024',
    role: 'Developer',
    summary: 'Built the landing page and download flow, and helped with the chatbot.',
    stack: ['[stack]'],
  },
]

export const stack = [
  ['cloud / deploy', 'Firebase (Hosting, Functions, Firestore), Netlify, Render, GitHub Actions'],
  ['languages', 'JavaScript, Python, Java, SQL, HTML/CSS'],
  ['frameworks', 'React, Next.js, Node.js, Flask, Tailwind CSS, Nx'],
  ['databases', 'MySQL, MongoDB, Firestore'],
  ['tools', 'Git, GitHub, VS Code, Jira, Figma'],
  ['learning now', '[Docker, Linux, AWS: only list what you are actually doing]'],
]

export const education = {
  school: 'ICCT College, Cainta Campus',
  degree: 'BS Information Technology',
  when: '2023 – Dec 2027 (expected)',
  training: [
    ['2025', 'Software Development Life Cycle training, Solverous Technology'],
    ['2024', 'K8SUG Philippines #4 Meetup at AWS'],
    ['2024', 'Next-Gen Development with Java and Generative AI, Maya Philippines'],
  ],
}
