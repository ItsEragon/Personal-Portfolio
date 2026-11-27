/**
 * Central portfolio data — Amritpal Singh.
 * Facts come from the resume (supplied 2026-11-27) and the existing site.
 * Nothing here should be invented: update this file and the whole site follows.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Amritpal Singh',
  displayName: 'Amritpal Singh',
  firstName: 'AMRITPAL',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'AN AMRITPAL ORIGINAL',
  role: 'Full Stack Developer',
  tagline: ['Full Stack Developer', 'Svelte · React', 'Node.js · AWS'],
  intro:
    'Hi, I am Amritpal Singh — a Full Stack Developer specialising in React, Svelte, Tailwind, JavaScript, MongoDB, Node.js and Express.js. I build scalable, performant web applications that users love.',
  location: 'Siliguri, West Bengal, India',
  email: 'amritps2001@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/itseragon',
    github: 'https://github.com/ItsEragon',
  },
  resumePdf: '/Amritpal-resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w',
    alt: 'Portrait of Amritpal Singh',
  },
  interests: ['Cloud & AWS', 'E-commerce (Shopify Hydrogen)', 'Full-Stack Engineering'],
};

export const education = [
  {
    school: 'University of North Bengal',
    place: 'Siliguri, West Bengal, India',
    degree: 'Bachelor of Science in Computer Science',
    period: 'Sep 2022 – Aug 2025',
    score: 'CGPA 7.78/10',
  },
];

export const experience = [
  {
    company: 'Zapify Australia',
    role: 'Full Stack Developer',
    place: 'Remote',
    period: 'May 2026 – Present',
    points: [
      'Contributed to 10+ client web projects, building and redesigning responsive websites and landing pages primarily using Svelte.',
      'Developed and customized 3 Payload CMS websites, enabling clients to manage content such as menus, events, images and property listings.',
      'Integrated Payload CMS with Rex CRM to synchronize property listings, and developed a Shopify Hydrogen storefront with Shopify Payments setup and checkout testing.',
      'Deployed client projects to AWS using SST and supported infrastructure and production troubleshooting with Terraform, Route 53, CloudFormation and CloudWatch.',
      'Worked with clients and the internal team to clarify requirements, communicate progress, test deliverables and coordinate project handovers.',
    ],
  },
  {
    company: 'Zapify Australia',
    role: 'Frontend Developer Intern',
    place: 'Remote',
    period: 'Feb 2026 – Apr 2026',
    points: [
      'Built responsive website interfaces and reusable UI components using Svelte and Tailwind CSS.',
      'Translated design references into polished page layouts and refined responsive behaviour across client websites.',
    ],
  },
  {
    company: 'Athlyn',
    role: 'Frontend Developer Intern',
    place: 'Remote',
    period: 'Jul 2025 – Oct 2025',
    points: [
      'Built responsive multi-step authentication flows and User and Athlete Profile dashboards using React.js and Tailwind CSS.',
      'Translated Figma designs into reusable React components and resolved interface and responsive-layout issues.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year?: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  /** Live deployment, when one exists. */
  link?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'godown-management-system',
    title: 'Godown Management System',
    year: '2026',
    genre: 'MERN · Inventory · Billing',
    logline:
      'A live MERN application for warehouse operations, covering truck gate entry, multi-godown inventory, quality monitoring and billing.',
    stack: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    build: [
      'Independently developed and deployed a live MERN application for warehouse operations, covering truck gate entry, configurable multi-godown inventory, quality monitoring and billing.',
      'Built an operational dashboard with stock and capacity metrics, godown and stack-level visualizations, and Excel exports across five reporting periods.',
      'Implemented role-based access, configurable business settings and audit logs recording user actions, roles, timestamps and IP addresses.',
    ],
    features: [],
    metrics: [{ value: '5', label: 'reporting periods' }],
    link: 'https://shribalajee.in',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'tumor-tracer',
    title: 'Tumor Tracer',
    genre: 'AI · Medical Imaging · FastAPI',
    logline:
      'A responsive web app that detects brain tumors from MRI images with a FastAPI backend for image processing and real-time prediction.',
    stack: ['React', 'Tailwind CSS', 'FastAPI', 'Machine Learning'],
    build: [
      'Built a responsive web app using React and Tailwind CSS to detect brain tumors from MRI images. Integrated a FastAPI backend for image processing and real-time prediction.',
    ],
    features: [],
    metrics: [],
    link: 'https://tumortracerr.netlify.app/',
    github: 'https://github.com/ItsEragon/TumorTracer',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'aignite-2025',
    title: '16th of 130+ Teams',
    org: 'AIGNITE 2025',
    detail: "Ranked 16th out of 130+ teams at East India's Largest AI Hackathon.",
    laurel: 'Hackathon',
  },
];

export type Certification = { issuer: string; name: string; link: string };

/** No certifications on the resume yet — the certifications rail hides itself while this is empty. */
export const certifications: Certification[] = [];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'The foundations',
    skills: [
      { name: 'JavaScript', mono: 'Js', note: 'ES6+' },
      { name: 'HTML5', mono: 'H5' },
      { name: 'CSS3', mono: 'C3' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces & the web platform',
    skills: [
      { name: 'Svelte', mono: 'Sv' },
      { name: 'React.js', mono: 'Re' },
      { name: 'Next.js', mono: 'Nx' },
      { name: 'Tailwind CSS', mono: 'Tw' },
      { name: 'Responsive Web Design', mono: 'Rw' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & CMS',
    subtitle: 'Server-side logic & content',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'Payload CMS', mono: 'Pl' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'MongoDB', mono: 'Mg' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & Infra',
    subtitle: 'Shipping & production',
    skills: [
      { name: 'AWS', mono: 'Aw' },
      { name: 'SST', mono: 'Ss' },
      { name: 'Terraform', mono: 'Tf' },
      { name: 'CloudFormation', mono: 'Cf' },
      { name: 'CloudWatch', mono: 'Cw' },
      { name: 'Route 53', mono: 'R5' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & E-commerce',
    subtitle: 'Day-to-day toolkit',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'Postman', mono: 'Pm' },
      { name: 'Figma', mono: 'Fg' },
      { name: 'Netlify', mono: 'Nf' },
      { name: 'Vercel', mono: 'Vc' },
      { name: 'Shopify Hydrogen', mono: 'Sh' },
    ],
  },
];

/** Where each skill shows up across the resume — shown on hover/tap. */
export const skillEvidence: Record<string, string[]> = {
  JavaScript: ['Zapify client projects', 'Athlyn dashboards', 'Godown Management System'],
  HTML5: ['Zapify client websites'],
  CSS3: ['Zapify client websites'],
  Svelte: ['10+ client projects', '3 Payload CMS websites'],
  'React.js': ['Athlyn dashboards', 'Godown Management System', 'Tumor Tracer'],
  'Tailwind CSS': ['Athlyn', 'Godown Management System', 'Tumor Tracer'],
  'Responsive Web Design': ['Zapify client projects', 'Athlyn'],
  'Node.js': ['Godown Management System'],
  'Express.js': ['Godown Management System'],
  'Payload CMS': ['3 Payload CMS websites'],
  'REST APIs': ['Godown Management System', 'Tumor Tracer'],
  MongoDB: ['Godown Management System'],
  AWS: ['Zapify deployments'],
  SST: ['Zapify deployments'],
  Terraform: ['Zapify production support'],
  CloudFormation: ['Zapify production support'],
  CloudWatch: ['Zapify production support'],
  'Route 53': ['Zapify production support'],
  Git: ['Every project'],
  GitHub: ['Tumor Tracer', 'This portfolio'],
  Docker: ['Technical skills'],
  Postman: ['Technical skills'],
  Figma: ['Athlyn design handoff'],
  Netlify: ['Tumor Tracer deploy'],
  Vercel: ['This portfolio'],
  'Shopify Hydrogen': ['Zapify storefront'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2022 – 2025',
    synopsis: 'Computer Science at the University of North Bengal, Siliguri.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Graduate',
        description: 'Bachelor of Science in Computer Science at the University of North Bengal — CGPA 7.78/10.',
        tags: ['B.Sc. CS', 'CGPA 7.78'],
        runtime: 'Sep 2022 – Aug 2025',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'First Builds',
    period: '2025',
    synopsis: 'First professional frontend work — authentication flows, athlete dashboards and Figma handoff.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Auth Flows',
        description: 'Built responsive multi-step authentication flows and User and Athlete Profile dashboards using React.js and Tailwind CSS.',
        tags: ['React.js', 'Tailwind CSS', 'Auth'],
        runtime: 'Jul 2025 – Oct 2025',
        palette: amber,
      },
      {
        code: 'S02 E02',
        title: 'The Figma Handoff',
        description: 'Translated Figma designs into reusable React components and resolved interface and responsive-layout issues.',
        tags: ['Figma', 'React.js', 'Responsive'],
        runtime: 'Athlyn',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'The Studio',
    period: '2026',
    synopsis: 'Responsive client websites and reusable UI with Svelte and Tailwind at Zapify Australia.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Components',
        description: 'Built responsive website interfaces and reusable UI components using Svelte and Tailwind CSS.',
        tags: ['Svelte', 'Tailwind CSS', 'UI'],
        runtime: 'Feb 2026 – Apr 2026',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The Translator',
        description: 'Translated design references into polished page layouts and refined responsive behaviour across client websites.',
        tags: ['Svelte', 'Responsive', 'Client work'],
        runtime: 'Zapify Australia',
        palette: violet,
      },
    ],
  },
  {
    number: 4,
    title: 'Full Stack',
    period: '2026 – Present',
    synopsis: 'Client delivery across Svelte, Payload CMS, Shopify Hydrogen and AWS.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Builder',
        description: 'Contributed to 10+ client web projects, building and redesigning responsive websites and landing pages primarily using Svelte.',
        tags: ['Svelte', '10+ projects', 'Client work'],
        runtime: 'May 2026 – Present',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'The CMS Engineer',
        description: 'Developed and customized 3 Payload CMS websites, integrated Rex CRM to sync property listings, and shipped a Shopify Hydrogen storefront with Payments.',
        tags: ['Payload CMS', 'Rex CRM', 'Shopify Hydrogen'],
        runtime: 'Zapify Australia',
        palette: amber,
      },
      {
        code: 'S04 E03',
        title: 'The Deployer',
        description: 'Deployed client projects to AWS using SST and supported infrastructure and production troubleshooting with Terraform, Route 53, CloudFormation and CloudWatch.',
        tags: ['AWS', 'SST', 'Terraform', 'Route 53'],
        runtime: 'Production',
        palette: ocean,
      },
      {
        code: 'S04 E04',
        title: 'The Partner',
        description: 'Worked with clients and the internal team to clarify requirements, communicate progress, test deliverables and coordinate project handovers.',
        tags: ['Client collaboration', 'Testing', 'Handover'],
        runtime: 'Zapify Australia',
        palette: jade,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Role', title: 'Full Stack Developer', detail: 'Svelte, React & the MERN stack', palette: crimson },
  { label: 'Launch', title: 'Godown Management System', detail: 'Live MERN warehouse platform', palette: amber },
  { label: 'Hackathon', title: 'AIGNITE 2025', detail: '16th of 130+ teams', palette: jade },
  { label: 'Client work', title: '10+ Projects', detail: 'Delivered at Zapify Australia', palette: ocean },
  { label: 'CMS', title: '3 Payload CMS Sites', detail: 'Menus, events, property listings', palette: violet },
  { label: 'Commerce', title: 'Shopify Hydrogen', detail: 'Storefront, Payments, checkout testing', palette: amber },
  { label: 'Cloud', title: 'AWS · SST · Terraform', detail: 'Deployments & production support', palette: ocean },
  { label: 'Frontend', title: 'Svelte · React · Next.js', detail: 'Responsive, reusable UI', palette: crimson },
  { label: 'Backend', title: 'Node · Express · MongoDB', detail: 'REST APIs & integrations', palette: jade },
  { label: 'Education', title: 'B.Sc. Computer Science', detail: 'University of North Bengal · CGPA 7.78', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Sc. Computer Science',
    lines: ['University of North Bengal, Siliguri', 'Sep 2022 – Aug 2025'],
    chips: ['CGPA 7.78'],
  },
  {
    kicker: 'Skills',
    title: 'JavaScript first.',
    lines: ['Svelte, React, Next.js, Tailwind CSS', 'Node.js, Express.js, MongoDB, REST APIs', 'AWS, SST, Terraform, Docker'],
    chips: ['Svelte', 'React', 'Node.js', 'AWS', 'MongoDB'],
  },
  {
    kicker: 'Experience',
    title: 'Three roles.',
    lines: ['Athlyn — Frontend Intern, Jul–Oct 2025', 'Zapify Australia — Frontend Intern, Feb–Apr 2026', 'Zapify Australia — Full Stack Developer, May 2026–Present'],
  },
  {
    kicker: 'Projects',
    title: 'Two Originals',
    lines: ['Godown Management System — live MERN warehouse platform', 'Tumor Tracer — AI brain tumor detection with FastAPI'],
  },
  {
    kicker: 'Achievements',
    title: 'Top Moment',
    lines: ["AIGNITE 2025 — 16th of 130+ teams", "East India's Largest AI Hackathon"],
  },
  {
    kicker: 'Cloud',
    title: 'Shipped to AWS',
    lines: ['SST deployments for client projects', 'Terraform · Route 53 · CloudFormation · CloudWatch'],
  },
  {
    kicker: 'Current mission',
    title: 'Now streaming',
    lines: ['Building client sites at Zapify Australia', 'Available for work · Siliguri, West Bengal'],
  },
];

export type ProfileId = 'amritpal' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'amritpal',
    name: 'Amritpal',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & experience', palette: violet },
  journey: {
    nav: 'Journey',
    card: 'My Journey',
    meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`,
    palette: amber,
  },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} ${achievements.length === 1 ? 'Moment' : 'Moments'}`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
