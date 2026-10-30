'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Filter, Compass } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import Navbar from '@/components/landing/navbar'
import Footer from '@/components/landing/footer'
import { SectionLabel } from '@/components/site'
import { projects, type Project, type MaturityStage } from '@/lib/projects'
import { cn } from '@/lib/utils'

function ProjectCardItem({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#668CFF] rounded-2xl"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        whileHover={shouldReduceMotion ? {} : { y: -3 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        style={{ ['--card-aura' as string]: project.auraColor }}
        className="h-full flex flex-col justify-between metallic-border ambient-beam cryo-glass rounded-2xl overflow-hidden shadow-lg transition-all duration-300"
      >
        <div className={`project-visual visual-${project.slug} relative h-[210px] w-full bg-[#11141a] border-b border-[#292C33] overflow-hidden`}>
          <span className="visual-grid" />
          <span className="visual-orbit orbit-one" />
          <span className="visual-orbit orbit-two" />
          <span className="visual-core" />
          <span className="visual-caption absolute bottom-3 left-4 text-[9px] font-mono tracking-widest text-[#92969F] px-2.5 py-1 rounded bg-[#090A0C]/80 border border-[#292C33]">
            {project.slug === 'sense' ? 'HARDWARE PROTOTYPE' : 'CONCEPTUAL VISUAL'}
          </span>
          <span
            className="absolute top-3 right-4 w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: project.auraColor, boxShadow: `0 0 12px ${project.auraColor}` }}
          />
        </div>

        <div className="p-7 flex flex-col justify-between flex-grow space-y-6">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#92969F]">
                {project.domain}
              </span>
              <span
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded-full border border-[#292C33] bg-[#090A0C]"
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: project.auraColor }} />
                {project.stage}
              </span>
            </div>

            <h3 className="text-2xl font-normal text-[#F4F4F0] flex items-center justify-between gap-2 m-0 group-hover:text-white transition-colors">
              <span>{project.name}</span>
              <ArrowUpRight
                className="w-4 h-4 text-[#92969F] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ color: project.auraColor }}
              />
            </h3>

            <p className="mt-3 text-xs sm:text-sm text-[#92969F] leading-relaxed line-clamp-2 m-0">
              {project.summary}
            </p>
          </div>

          <div className="pt-4 border-t border-[#292C33]/60 flex items-center justify-between text-xs text-[#92969F]">
            <span className="font-mono text-[10px] text-[#92969F]">ROLE // {project.role}</span>
            <span
              className="text-xs font-mono transition-colors group-hover:underline flex items-center gap-1"
              style={{ color: project.auraColor }}
            >
              <span>Inspect specification</span>
              <span>&rarr;</span>
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default function ProjectsPage() {
  const [selectedStage, setSelectedStage] = useState<string>('all')

  const stages: { label: string; value: string }[] = [
    { label: 'All Initiatives (4)', value: 'all' },
    { label: 'Prototype Direction', value: 'Prototype direction' },
    { label: 'Product Development', value: 'Product development' },
    { label: 'Research Phase', value: 'Research phase' },
    { label: 'Concept Exploration', value: 'Concept exploration' },
  ]

  const filteredProjects =
    selectedStage === 'all'
      ? projects
      : projects.filter((p) => p.stage === selectedStage)

  return (
    <>
      <Navbar />
      <main className="shell max-w-[1240px] mx-auto px-6 md:px-8 py-16">
        <section className="page-hero border-b border-[#292C33] pb-12 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#292C33] bg-[#101217] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#668CFF]" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#92969F]">
              PORTFOLIO MATRIX
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal text-[#F4F4F0] tracking-tight leading-[1] mb-6">
            Things we are<br />
            <em className="text-[#92969F] font-normal italic font-serif">making sense of.</em>
          </h1>

          <p className="text-base sm:text-xl text-[#92969F] max-w-3xl leading-relaxed">
            Four distinct technical vectors exploring human-computer interaction, biological computing, cognitive technology, and human employability.
          </p>
        </section>

        {/* Filter Navigation */}
        <section className="py-6 border-b border-[#292C33] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-[#92969F]">
            <Filter className="w-3.5 h-3.5 text-[#668CFF]" />
            <span>FILTER BY MATURITY STAGE:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {stages.map((st) => (
              <button
                key={st.value}
                onClick={() => setSelectedStage(st.value)}
                className={cn(
                  "px-3 py-1.5 rounded-lg transition-colors border",
                  selectedStage === st.value
                    ? "border-[#668CFF] text-[#668CFF] bg-[#668CFF]/10 font-semibold"
                    : "border-[#292C33] text-[#92969F] hover:text-[#F4F4F0] hover:border-[#668CFF]/40"
                )}
              >
                {st.label}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCardItem key={project.slug} project={project} />
            ))}
          </div>
        </section>

        {/* Bottom Callout to Research Map */}
        <section className="metallic-border ambient-beam cryo-glass p-8 sm:p-10 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 my-12">
          <div>
            <h3 className="text-xl font-normal text-[#F4F4F0] m-0">How these initiatives connect</h3>
            <p className="text-xs sm:text-sm text-[#92969F] mt-1.5 m-0">
              Inspect our interactive node-and-edge research map showing the convergence between hardware, biology, and cognitive AI.
            </p>
          </div>
          <Link
            href="/research"
            className="btn-primary group px-6 py-3 rounded-lg text-xs font-semibold shrink-0"
          >
            <span className="text-[#090A0C]">Open Research Map</span>
            <ArrowUpRight className="w-4 h-4 text-[#090A0C] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
