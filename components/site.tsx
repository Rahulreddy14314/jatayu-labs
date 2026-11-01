'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Menu, X, ShieldCheck } from 'lucide-react'
import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { projects, type Project, type MaturityStage } from '@/lib/projects'
import { KritamEmblem } from '@/components/landing/KritamLogo'

export function Mark() {
  return (
    <span className="mark inline-grid place-items-center text-[#F4F4F0] w-6 h-6 shrink-0" aria-hidden="true">
      <KritamEmblem className="w-5 h-5" />
    </span>
  )
}

export function ProjectStatusBadge({ stage }: { stage: MaturityStage }) {
  const styles: Record<MaturityStage, { border: string; text: string; bg: string; dot: string }> = {
    'Prototype direction': {
      border: 'border-[#668CFF]/40',
      text: 'text-[#668CFF]',
      bg: 'bg-[#668CFF]/10',
      dot: 'bg-[#668CFF]',
    },
    'Product development': {
      border: 'border-emerald-500/40',
      text: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      dot: 'bg-emerald-400',
    },
    'Research phase': {
      border: 'border-amber-500/40',
      text: 'text-amber-300',
      bg: 'bg-amber-500/10',
      dot: 'bg-amber-300',
    },
    'Concept exploration': {
      border: 'border-[#292C33]',
      text: 'text-[#92969F]',
      bg: 'bg-white/[0.03]',
      dot: 'bg-[#92969F]',
    },
  }

  const current = styles[stage] || styles['Concept exploration']

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded-full border ${current.border} ${current.text} ${current.bg}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${current.dot}`} />
      {stage}
    </span>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const links = [
    { label: 'Projects', href: '/projects' },
    { label: 'Research', href: '/research' },
    { label: 'Journal', href: '/journal' },
    { label: 'About', href: '/about' },
    { label: 'Collaborate', href: '/contact' },
  ]

  return (
    <header className="nav-wrap sticky top-0 z-30 bg-[#090A0C]/90 backdrop-blur-md border-b border-[#292C33]/80">
      <nav className="nav max-w-[1240px] h-[72px] px-6 md:px-8 mx-auto flex items-center justify-between" aria-label="Main navigation">
        <Link href="/" className="wordmark flex items-center gap-2.5 text-xs tracking-[0.18em] font-semibold text-[#F4F4F0] hover:text-[#668CFF] transition-colors">
          <Mark />
          <span>KRITAM LABS</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-xs text-[#92969F]">
          {links.map(({ label, href }) => {
            const isActive = pathname === href || (href !== '/' && pathname.startsWith(href))
            return (
              <Link
                key={href}
                href={href}
                className={`transition-colors py-1 ${
                  isActive ? 'text-[#F4F4F0] font-medium border-b border-[#668CFF]' : 'hover:text-[#F4F4F0]'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-[#92969F] hover:text-[#F4F4F0] p-1.5 focus:outline-none"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden border-b border-[#292C33] bg-[#090A0C] px-6 py-4 space-y-3">
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between py-2 text-sm text-[#92969F] hover:text-[#F4F4F0] border-b border-[#292C33]/50 last:border-b-0"
            >
              <span>{label}</span>
              <ArrowUpRight className="w-4 h-4 text-[#668CFF]" />
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

export function SectionLabel({ children, index }: { children: React.ReactNode; index: string }) {
  return (
    <div className="section-label flex items-center gap-4 text-[#92969F] text-[11px] font-mono uppercase tracking-[0.2em] border-t border-[#292C33] pt-4 mb-6">
      <span className="text-[#668CFF] font-semibold">{index}</span>
      <span>{children}</span>
    </div>
  )
}

function Visual({ variant = 'sense' }: { variant?: string }) {
  return (
    <div className={`project-visual visual-${variant} relative h-[220px] bg-[#11141a] border-b border-[#292C33] overflow-hidden`}>
      <span className="visual-grid" />
      <span className="visual-orbit orbit-one" />
      <span className="visual-orbit orbit-two" />
      <span className="visual-core" />
      <span className="visual-caption absolute bottom-3 left-4 text-[9px] font-mono tracking-widest text-[#92969F] px-2 py-0.5 rounded bg-[#090A0C]/80 border border-[#292C33]">
        {variant === 'sense' ? 'HARDWARE PROTOTYPE' : 'CONCEPTUAL VISUAL'}
      </span>
    </div>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Link href={`/projects/${project.slug}`} className="group block focus:outline-none">
      <motion.article
        whileHover={shouldReduceMotion ? {} : { y: -3 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="h-full flex flex-col justify-between rounded-lg border border-[#292C33] bg-[#101217] overflow-hidden hover:border-[#668CFF]/50 transition-colors"
      >
        <Visual variant={project.slug} />

        <div className="p-6 flex flex-col justify-between flex-grow">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#92969F]">
                {project.domain}
              </span>
              <ProjectStatusBadge stage={project.stage} />
            </div>

            <h3 className="text-xl font-normal text-[#F4F4F0] flex items-center justify-between gap-2 m-0 group-hover:text-[#668CFF] transition-colors">
              <span>{project.name}</span>
              <ArrowUpRight className="w-4 h-4 text-[#92969F] group-hover:text-[#668CFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </h3>

            <p className="mt-2.5 text-xs text-[#92969F] leading-relaxed line-clamp-2">
              {project.summary}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-[#292C33]/60 flex items-center justify-between text-[11px] text-[#92969F]">
            <span className="font-mono text-[10px] text-[#668CFF]/90">TRACK // {project.role}</span>
            <span className="underline group-hover:text-[#F4F4F0] transition-colors">Inspect details &rarr;</span>
          </div>
        </div>
      </motion.article>
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="footer max-w-[1240px] mx-auto px-6 md:px-8 pt-20 pb-12 border-t border-[#292C33] text-sm">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16">
        <div className="md:col-span-5 space-y-4">
          <Link href="/" className="wordmark flex items-center gap-2.5 text-xs tracking-[0.18em] font-semibold text-[#F4F4F0]">
            <Mark />
            <span>KRITAM LABS</span>
          </Link>
          <p className="text-[#92969F] text-xs leading-relaxed max-w-sm">
            Building technologies at the edge of human potential across human-computer interaction, biological intelligence, and human capability.
          </p>
          <div className="pt-2 flex items-center gap-2 text-[11px] text-[#92969F] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Independent technology & research lab</span>
          </div>
        </div>

        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs">
          <div>
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#668CFF] mb-3">Portfolio</p>
            <ul className="space-y-2 text-[#92969F]">
              {projects.map((p) => (
                <li key={p.slug}>
                  <Link href={`/projects/${p.slug}`} className="hover:text-[#F4F4F0] transition-colors">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#668CFF] mb-3">Navigation</p>
            <ul className="space-y-2 text-[#92969F]">
              <li><Link href="/projects" className="hover:text-[#F4F4F0] transition-colors">All Projects</Link></li>
              <li><Link href="/research" className="hover:text-[#F4F4F0] transition-colors">Research Map</Link></li>
              <li><Link href="/journal" className="hover:text-[#F4F4F0] transition-colors">Lab Log / Journal</Link></li>
              <li><Link href="/about" className="hover:text-[#F4F4F0] transition-colors">About the Lab</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#668CFF] mb-3">Inquiries</p>
            <ul className="space-y-2 text-[#92969F]">
              <li><Link href="/contact" className="hover:text-[#F4F4F0] transition-colors">Collaborator Intake</Link></li>
              <li><a href="mailto:hello@kritamlabs.com" className="hover:text-[#F4F4F0] transition-colors">hello@kritamlabs.com</a></li>
              <li><Link href="/privacy" className="hover:text-[#F4F4F0] transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#292C33] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-[#92969F] uppercase tracking-wider">
        <span>&copy; {new Date().getFullYear()} Kritam Labs. All rights reserved.</span>
        <span>Zero fabricated social proof &middot; Transparent research milestones</span>
      </div>
    </footer>
  )
}
