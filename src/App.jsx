import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Award, BadgeCheck, Briefcase, CheckCircle2,
  Cloud, Code2, Database, Download, ExternalLink, FileText, Gamepad2, GraduationCap,
  Layers, Mail, MapPin, Menu, Server, ShieldCheck, Smartphone, X, Zap,
} from 'lucide-react'

/* ---------- Links ---------- */
const EMAIL = 'idreeskayani420@gmail.com'
const GITHUB_URL = 'https://github.com/idreeskayani'
const LINKEDIN_URL = 'https://www.linkedin.com/in/muhammad-idrees-kayani-5b4050301'
const RESUME_PDF = '/M_Idrees_Kayani_Resume.pdf' // put the PDF in /public
const RESUME_ONLINE = 'https://claude.ai/artifact/2scHTgyw9zgFSw2YZYyhKz'

/* ---------- Brand icons ---------- */
const GithubIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
)
const LinkedinIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
)

/* ---------- Data ---------- */
const NAV = [
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Experience', 'experience'],
  ['Projects', 'projects'],
  ['Contact', 'contact'],
]
const SECTION_IDS = ['home', ...NAV.map(([, id]) => id)]

const roles = ['Full Stack Developer', 'React Native Engineer', 'React.js Developer', 'Node.js & NestJS Builder']

const stats = [
  { value: '6', label: 'Projects built' },
  { value: '6 mo', label: 'Professional internship' },
  { value: 'iOS + Android', label: 'Cross-platform delivery' },
  { value: 'Azure', label: 'Certified Administrator' },
]

const focusAreas = [
  { icon: Smartphone, title: 'Mobile applications', text: 'Cross-platform iOS and Android apps in React Native and TypeScript, with clean navigation, state management and polished UX.' },
  { icon: Server, title: 'Backend & APIs', text: 'REST APIs with Node.js and NestJS, JWT authentication, role-based access control and Swagger-validated integrations.' },
  { icon: Zap, title: 'Real-time systems', text: 'Live GPS tracking, WebSocket and Socket.IO messaging, and proximity logic built on Haversine distance checks.' },
  { icon: Layers, title: 'Payments & integrations', text: 'Stripe payments, MapLibre and maps/geolocation APIs, Firebase services and third-party library integration.' },
]

const skillGroups = [
  { icon: Code2, title: 'Languages', items: ['JavaScript (ES6+)', 'TypeScript', 'C#', 'C / C++', 'HTML5', 'CSS3'] },
  { icon: Smartphone, title: 'Frontend & Mobile', items: ['React Native', 'React.js', 'Expo', 'Redux Toolkit', 'React Navigation', 'Responsive UI'] },
  { icon: Server, title: 'Backend & APIs', items: ['Node.js', 'NestJS', 'Express.js', 'REST APIs', 'Swagger (OpenAPI)', 'WebSocket', 'Socket.IO', 'JWT Auth', 'RBAC'] },
  { icon: Database, title: 'Databases', items: ['PostgreSQL', 'Prisma ORM', 'MongoDB', 'Firebase Auth', 'Firestore', 'Realtime Database'] },
  { icon: Layers, title: 'Integrations', items: ['Stripe', 'MapLibre', 'Maps & Geolocation APIs', 'Third-party libraries'] },
  { icon: Cloud, title: 'Tools & Practices', items: ['Git & GitHub', 'GitHub Releases', 'Microsoft Azure', 'Agile / Scrum', 'Unity (2D)'] },
]

const experience = {
  period: 'Nov 2025 – May 2026',
  role: 'Mobile Application Developer Intern',
  company: 'UExel Solutions Pvt Ltd',
  location: 'Islamabad',
  points: [
    'Delivered cross-platform mobile applications with consistent iOS and Android feature parity using React Native and TypeScript.',
    'Reduced integration errors by validating REST API integrations against Swagger documentation.',
    'Improved navigation flow, splash-screen logic and error handling with React Navigation.',
  ],
  work: [
    {
      title: 'DTS App',
      subtitle: 'Permit verification & document management',
      text: 'Secure document upload with in-app image/PDF preview, protected with FLAG_SECURE screen security and role-based access control.',
      repo: 'https://github.com/uExel/dts_mobile',
    },
    {
      title: 'Kalash Kitchen',
      subtitle: 'Restaurant POS & order tracking',
      text: 'Menu browsing, real-time order tracking and Stripe payments on a PostgreSQL-backed REST API, with Redux Toolkit state management.',
      repo: 'https://github.com/uExel/kalash-app',
    },
  ],
  tags: ['React Native', 'TypeScript', 'REST APIs', 'Swagger', 'Stripe', 'PostgreSQL', 'Redux Toolkit'],
}

const projects = [
  {
    title: 'RideX',
    kind: 'Full-stack ride-hailing app',
    category: 'Mobile',
    featured: true,
    icon: Smartphone,
    description:
      'An Uber-style platform covering the complete rider and driver ride lifecycle: live GPS tracking, in-app chat, Stripe payments and an admin analytics dashboard.',
    highlights: [
      'Real-time driver-location broadcasting over WebSocket',
      'Automatic ride-status transitions using Haversine proximity checks',
      'JWT refresh-token authentication with role-based access control',
      'Admin dashboard with ride and revenue analytics',
    ],
    stack: ['React Native', 'NestJS', 'PostgreSQL', 'Prisma', 'Socket.IO', 'Stripe', 'MapLibre'],
    links: [{ label: 'Source code', href: 'https://github.com/idreeskayani/RideX' }],
  },
  {
    title: 'ParkSense',
    kind: 'Smart parking management',
    category: 'Mobile',
    icon: ShieldCheck,
    description:
      'Report wrongly parked vehicles by scanning a QR code, then talk to the owner privately without exposing personal contact details.',
    highlights: ['QR-code vehicle identification', 'Anonymous in-app chat and masked calling', 'Live parking-slot booking'],
    stack: ['React Native (Expo)', 'Node.js', 'Express.js', 'Firebase'],
    links: [{ label: 'Source code', href: 'https://github.com/idreeskayani/Pksense' }],
  },
  {
    title: 'DTS App',
    kind: 'Professional · UExel Solutions',
    category: 'Mobile',
    icon: FileText,
    description:
      'A role-based mobile app for permit verification and document management, built during my internship.',
    highlights: ['Secure upload with image/PDF preview', 'FLAG_SECURE screen protection', 'Role-based access control'],
    stack: ['React Native', 'TypeScript', 'REST APIs'],
    links: [{ label: 'Source code', href: 'https://github.com/uExel/dts_mobile' }],
  },
  {
    title: 'Kalash Kitchen',
    kind: 'Professional · UExel Solutions',
    category: 'Mobile',
    icon: Briefcase,
    description:
      'A restaurant POS and ordering app with menu browsing, live order tracking and online payments.',
    highlights: ['Real-time order tracking', 'Stripe payment integration', 'PostgreSQL-backed REST API'],
    stack: ['React Native', 'Redux Toolkit', 'PostgreSQL', 'Stripe'],
    links: [{ label: 'Source code', href: 'https://github.com/uExel/kalash-app' }],
  },
  {
    title: 'Jarogi',
    kind: 'Full-stack e-commerce platform',
    category: 'Web',
    icon: Layers,
    description:
      'A MERN-stack store with secure authentication, an admin panel and customer features like wishlists and order emails.',
    highlights: ['JWT-based authentication', 'Admin panel with product CRUD', 'Wishlist and email order confirmations'],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    links: [],
  },
  {
    title: 'Coin Rush',
    kind: '2D platformer game',
    category: 'Game',
    icon: Gamepad2,
    description:
      'A complete 2D platformer built in Unity 6 with a full game loop, tight character controls, enemy AI and a published Windows build.',
    highlights: [
      'Coyote time, jump buffering and variable jump height',
      'Patrolling enemy AI with stomp mechanic',
      'Modular GameManager / UIManager architecture',
    ],
    stack: ['Unity 6', 'C#'],
    links: [
      { label: 'Source code', href: 'https://github.com/idreeskayani/coin-rush-unity' },
      { label: 'Play (Windows build)', href: 'https://github.com/idreeskayani/coin-rush-unity/releases' },
    ],
  },
]

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

/* ---------- Helpers ---------- */
function useActiveSection(ids) {
  const [active, setActive] = useState('home')
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])
  return active
}

function SectionHeading({ label, title, description }) {
  return (
    <motion.div className="section-heading" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      <span className="section-kicker">{label}</span>
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </motion.div>
  )
}

/* ---------- Resume modal ---------- */
function ResumeModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-label="Resume"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-bar">
              <strong><FileText size={16} /> Muhammad Idrees Kayani — Resume</strong>
              <div className="modal-actions">
                <a className="btn btn-primary btn-sm" href={RESUME_PDF} download>Download <Download size={15} /></a>
               <a className="btn btn-secondary btn-sm" href={RESUME_PDF} target="_blank" rel="noreferrer">Open in new tab <ExternalLink size={15} /></a>
                <button className="icon-btn" onClick={onClose} aria-label="Close resume"><X size={18} /></button>
              </div>
            </div>
            <iframe className="resume-frame" src={`${RESUME_PDF}#view=FitH`} title="Resume PDF" />
            <p className="modal-fallback">
              Resume not showing on your device? <a href={RESUME_PDF} target="_blank" rel="noreferrer">Open the PDF directly</a>.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ---------- Layout ---------- */
function Header({ active, onResume }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Main navigation">
        <a href="#home" className="logo" onClick={() => setMenuOpen(false)}>idrees<span>.</span></a>
        <button className="mobile-menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((o) => !o)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
          {NAV.map(([label, id]) => (
            <a key={id} href={`#${id}`} className={active === id ? 'is-active' : ''} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <button className="nav-resume-mobile" onClick={() => { setMenuOpen(false); onResume() }}>View resume</button>
        </div>
        <div className="nav-cta">
          <button className="nav-contact" onClick={onResume}><FileText size={15} /> Resume</button>
          <a className="nav-contact nav-contact-solid" href="#contact">Let's talk <ArrowUpRight size={15} /></a>
        </div>
      </nav>
    </header>
  )
}

function Hero({ onResume }) {
  const [roleIndex, setRoleIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="container hero" id="home">
      <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES · ISLAMABAD, PAKISTAN</div>
        <h1>
          Hi, I'm Idrees.<br />
          I build <span className="gradient-text">digital</span><br />
          experiences.
        </h1>
        <div className="role-line">
          <span>Currently:</span>
          <AnimatePresence mode="wait">
            <motion.strong key={roles[roleIndex]} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
              {roles[roleIndex]}
            </motion.strong>
          </AnimatePresence>
        </div>
        <p className="hero-description">
          Computer Science graduate specializing in React Native and React.js. I build production-ready mobile and
          web apps with real-time tracking, secure authentication and Stripe payments — backed by Node.js, NestJS and PostgreSQL.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">Explore my work <ArrowRight size={17} /></a>
          <button className="btn btn-secondary" onClick={onResume}><FileText size={16} /> View resume</button>
          <a href={RESUME_PDF} download className="btn btn-ghost">Download <Download size={16} /></a>
        </div>
        <div className="social-links">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon /></a>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
          <a href={`mailto:${EMAIL}`} aria-label="Email"><Mail size={20} /></a>
        </div>
      </motion.div>

      <motion.div className="hero-portrait-layout" initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
        <div className="portrait-backdrop" />
        <motion.div className="profile-bubble" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', stiffness: 130, damping: 18, delay: 0.3 }}>
          <span className="profile-ring" />
          <span className="profile-avatar"><img src="/PP.png" alt="Muhammad Idrees Kayani, full stack developer" /></span>
          <span className="profile-caption">Muhammad Idrees Kayani <small>Full Stack Developer · Mobile & Web</small></span>
        </motion.div>
        <span className="floating-chip chip-one"><Smartphone size={14} /> React Native</span>
        <span className="floating-chip chip-two"><BadgeCheck size={14} /> Azure Certified</span>
      </motion.div>

      <div className="stats-bar">
        {stats.map((s) => (
          <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeading
          label="ABOUT ME"
          title="Turning real problems into working software."
          description="I'm a Computer Science graduate from International Islamic University, Islamabad. I work across the whole stack, but mobile is where I do my best work: shipping apps that feel fast, behave reliably and handle real-world complexity like payments, live location and secure access."
        />
        <div className="about-grid">
          {focusAreas.map(({ icon: Icon, title, text }, i) => (
            <motion.article key={title} className="card" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -6 }}>
              <div className="icon-box"><Icon size={22} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </div>
        <div className="info-strip">
          <div><MapPin size={16} /><span>Islamabad, Pakistan</span></div>
          <div><GraduationCap size={16} /><span>BS Computer Science · 2021–2025</span></div>
          <div><Award size={16} /><span>Microsoft Certified: Azure Administrator Associate</span></div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const [active, setActive] = useState('All')
  const titles = ['All', ...skillGroups.map((g) => g.title)]
  const visible = useMemo(() => (active === 'All' ? skillGroups : skillGroups.filter((g) => g.title === active)), [active])
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeading label="TECH STACK" title="Tools I use, grouped by what they do." description="From the UI layer to the database and deployment, this is the toolkit behind the projects below." />
        <div className="chip-row" aria-label="Filter skills">
          {titles.map((t) => <button key={t} className={`filter-chip ${active === t ? 'active' : ''}`} onClick={() => setActive(t)}>{t}</button>)}
        </div>
        <motion.div className="skill-groups" layout>
          <AnimatePresence mode="popLayout">
            {visible.map(({ icon: Icon, title, items }) => (
              <motion.article key={title} layout className="card skill-card" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }}>
                <div className="skill-card-head"><div className="icon-box sm"><Icon size={18} /></div><h3>{title}</h3></div>
                <div className="tags">{items.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeading label="EXPERIENCE & EDUCATION" title="Where I've worked and learned." description="Hands-on professional experience, formal education and certification." />
        <div className="timeline">
          <motion.article className="timeline-item" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
            <div className="timeline-marker"><Briefcase size={17} /></div>
            <div className="timeline-card">
              <div className="timeline-meta"><span>{experience.period}</span><span>{experience.company} · {experience.location}</span></div>
              <h3>{experience.role}</h3>
              <ul className="check-list">
                {experience.points.map((p) => <li key={p}><CheckCircle2 size={15} />{p}</li>)}
              </ul>
              <div className="work-grid">
                {experience.work.map((w) => (
                  <div className="work-card" key={w.title}>
                    <strong>{w.title}</strong>
                    <em>{w.subtitle}</em>
                    <p>{w.text}</p>
                    <a className="text-link" href={w.repo} target="_blank" rel="noreferrer"><GithubIcon size={14} /> View repo <ArrowUpRight size={13} /></a>
                  </div>
                ))}
              </div>
              <div className="tags">{experience.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
            </div>
          </motion.article>

          <motion.article className="timeline-item" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="timeline-marker"><Award size={17} /></div>
            <div className="timeline-card">
              <div className="timeline-meta"><span>Earned Sep 2026</span><span>Microsoft</span></div>
              <h3>Azure Administrator Associate</h3>
              <p>Validated skills in Azure identity and access (RBAC), governance, storage, compute (VMs, containers), virtual networking, and monitoring/backup — applied to deploying and maintaining production backend services.</p>
            </div>
          </motion.article>

          <motion.article className="timeline-item" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="timeline-marker"><GraduationCap size={17} /></div>
            <div className="timeline-card">
              <div className="timeline-meta"><span>2021 – 2025</span><span>International Islamic University, Islamabad</span></div>
              <h3>Bachelor of Computer Science</h3>
              <p>Foundation in software engineering, data structures, databases and project-based development.</p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const [filter, setFilter] = useState('All')
  const filters = ['All', 'Mobile', 'Web', 'Game']
  const visible = projects.filter((p) => filter === 'All' || p.category === filter)
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeading label="SELECTED WORK" title="Projects I've built." description="Production-style apps with real-time features, payments and secure access. Source code is linked on each card." />
        <div className="project-toolbar">
          <div className="chip-row">
            {filters.map((f) => <button key={f} className={`filter-chip ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>{f}</button>)}
          </div>
          <a className="text-link" href={GITHUB_URL} target="_blank" rel="noreferrer"><GithubIcon size={15} /> All repositories <ArrowUpRight size={15} /></a>
        </div>
        <motion.div className="projects-grid" layout>
          <AnimatePresence mode="popLayout">
            {visible.map((p, index) => {
              const Icon = p.icon
              return (
                <motion.article key={p.title} layout className={`card project-card ${p.featured ? 'featured' : ''}`} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 18 }} whileHover={{ y: -5 }}>
                  <div className="project-top">
                    <div className="icon-box"><Icon size={22} /></div>
                    <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <span className="project-kind">{p.kind}</span>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <ul className="check-list small">
                    {p.highlights.map((h) => <li key={h}><CheckCircle2 size={14} />{h}</li>)}
                  </ul>
                  <div className="tags">{p.stack.map((s) => <span className="tag" key={s}>{s}</span>)}</div>
                  {p.links.length > 0 && (
                    <div className="project-links">
                      {p.links.map((l) => (
                        <a key={l.label} className="project-link" href={l.href} target="_blank" rel="noreferrer">{l.label} <ArrowUpRight size={14} /></a>
                      ))}
                    </div>
                  )}
                </motion.article>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

function Contact({ onResume }) {
  const cards = [
    { icon: <Mail size={20} />, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: <LinkedinIcon size={20} />, label: 'LinkedIn', value: 'Muhammad Idrees Kayani', href: LINKEDIN_URL, external: true },
    { icon: <GithubIcon size={20} />, label: 'GitHub', value: 'github.com/idreeskayani', href: GITHUB_URL, external: true },
  ]
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-panel">
          <div className="contact-copy">
            <span className="section-kicker">LET'S CONNECT</span>
            <h2 className="section-title">Have a role or project in mind?</h2>
            <p>I'm looking for full stack and mobile development opportunities where I can ship real products and keep growing. If that sounds like your team, I'd love to hear from you.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={`mailto:${EMAIL}`}>Send an email <ArrowUpRight size={17} /></a>
              <button className="btn btn-secondary" onClick={onResume}><FileText size={16} /> View resume</button>
              <a className="btn btn-ghost" href={RESUME_PDF} download>Download PDF <Download size={16} /></a>
            </div>
          </div>
          <div className="contact-cards">
            {cards.map((c) => (
              <a key={c.label} className="contact-card" href={c.href} {...(c.external ? { target: '_blank', rel: 'noreferrer' } : {})}>
                <span className="icon-box sm">{c.icon}</span>
                <span><small>{c.label}</small><strong>{c.value}</strong></span>
                <ArrowUpRight size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Muhammad Idrees Kayani. Built with React.</span>
        <a href="#home" className="text-link">Back to top <ArrowDown size={14} style={{ transform: 'rotate(180deg)' }} /></a>
      </div>
    </footer>
  )
}

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 })
  const openResume = () => setResumeOpen(true)
  const closeResume = () => setResumeOpen(false)

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <Header active={active} onResume={openResume} />
      <main>
        <Hero onResume={openResume} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact onResume={openResume} />
      </main>
      <Footer />
      <ResumeModal open={resumeOpen} onClose={closeResume} />
    </>
  )
}
