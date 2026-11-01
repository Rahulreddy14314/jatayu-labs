import Link from 'next/link'
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Calendar,
  AlertCircle,
  Cpu,
  Radio,
  Shield,
  Layers,
  Zap,
  Activity,
  Compass,
  Sparkles
} from 'lucide-react'
import { notFound } from 'next/navigation'
import Navbar from '@/components/landing/navbar'
import Footer from '@/components/landing/footer'
import { ProjectStatusBadge, SectionLabel } from '@/components/site'
import { OiSignalChain } from '@/components/oi-signal-chain'
import { CollabForm } from '@/components/collab-form'
import { Project3DScrollStage } from '@/components/visuals/Project3DScrollStage'
import { projects } from '@/lib/projects'

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }))
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)
  if (!project) notFound()

  return (
    <>
      <Navbar />

      <main
        style={{ ['--card-aura' as string]: project.auraColor }}
        className="project-detail shell max-w-[1360px] mx-auto px-6 md:px-8 pt-32 pb-24 relative"
      >
        {/* Dynamic Project Ambient Glow */}
        <div
          className="absolute top-16 right-1/4 w-[600px] h-[400px] blur-[160px] pointer-events-none opacity-20 rounded-full"
          style={{ backgroundColor: project.auraColor }}
        />

        {/* Breadcrumb Back Link */}
        <div className="mb-8 relative z-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#92969F] hover:text-[#F4F4F0] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to all projects
          </Link>
        </div>

        {/* 1. PROJECT IDENTITY HEADER */}
        <header className="border-b border-[#292C33] pb-10 mb-12 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <span
              className="text-[11px] font-mono uppercase tracking-[0.2em] font-semibold"
              style={{ color: project.auraColor }}
            >
              {project.domain} // {project.role}
            </span>
            <ProjectStatusBadge stage={project.stage} />
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal text-[#F4F4F0] tracking-tight leading-[1] mb-5">
            {project.name}
          </h1>

          <p className="text-lg sm:text-xl text-[#F4F4F0] max-w-4xl leading-relaxed font-light mb-3">
            {project.summary}
          </p>

          <p className="text-sm text-[#92969F] max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </header>

        {/* MOBILE / TABLET 3D PRODUCT RIG (< lg) */}
        <div className="lg:hidden mb-12 relative z-10">
          <Project3DScrollStage slug={project.slug} />
        </div>

        {/* SYNCHRONIZED SPLIT-SCREEN 3D SCROLL ARCHITECTURE (lg:grid-cols-12) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
          {/* LEFT COLUMN: SCROLLABLE DOSSIER SECTIONS */}
          <div className="lg:col-span-7 space-y-16 lg:space-y-20">
            {/* 01 // PROBLEM STATEMENT & RESEARCH HYPOTHESIS */}
            <section id="problem" className="scroll-mt-32 border-b border-[#292C33] pb-14">
              <SectionLabel index="01">Problem Statement &amp; Research Question</SectionLabel>

              <div className="mt-6 space-y-5">
                <h2 className="text-2xl sm:text-3xl font-normal text-[#F4F4F0] leading-snug m-0">
                  The core challenge being investigated.
                </h2>

                <div className="space-y-4">
                  <div className="optical-glass p-6 sm:p-7 rounded-2xl">
                    <p
                      className="text-xs font-mono uppercase tracking-wider mb-2 font-semibold"
                      style={{ color: project.auraColor }}
                    >
                      PROBLEM FRAME
                    </p>
                    <p className="text-sm text-[#F4F4F0] leading-relaxed m-0">
                      {project.problemStatement}
                    </p>
                  </div>

                  <div className="optical-glass p-6 sm:p-7 rounded-2xl">
                    <p className="text-xs font-mono uppercase tracking-wider text-[#92969F] mb-2 font-semibold">
                      WORKING HYPOTHESIS
                    </p>
                    <p className="text-sm text-[#92969F] leading-relaxed m-0">
                      {project.hypothesis}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 02 // SYSTEM ARCHITECTURE ("How the proposed system operates.") */}
            <section id="architecture" className="scroll-mt-32 border-b border-[#292C33] pb-14">
              <SectionLabel index="02">System Architecture</SectionLabel>

              <div className="mt-6 space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-normal text-[#F4F4F0] mb-3">
                    How the proposed system operates.
                  </h2>
                  <p className="text-sm text-[#92969F] leading-relaxed">
                    {project.systemArchitecture}
                  </p>
                </div>

                {/* Special Interactive Architecture Component for Bio-Bus */}
                {project.slug === 'bio-bus' ? (
                  <div className="mt-6">
                    <OiSignalChain />
                  </div>
                ) : (
                  /* Custom 3-Stage Architecture Schematic for other projects */
                  <div className="optical-glass p-6 sm:p-8 rounded-2xl mt-6">
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#292C33]">
                      <span
                        className="text-[10px] font-mono uppercase tracking-wider font-semibold"
                        style={{ color: project.auraColor }}
                      >
                        ARCHITECTURE BLOCK SCHEMATIC
                      </span>
                      <span className="text-[10px] font-mono text-[#92969F] px-2.5 py-1 rounded border border-[#292C33] bg-[#050608]">
                        Conceptual Visual
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                      <div className="p-4 rounded-xl border border-[#292C33] bg-[#050608]">
                        <div className="font-mono text-[10px] mb-1 font-semibold" style={{ color: project.auraColor }}>
                          STAGE A // INGEST
                        </div>
                        <div className="font-medium text-[#F4F4F0] text-sm mb-1">Sensory &amp; Telemetry</div>
                        <p className="text-[11px] text-[#92969F] leading-relaxed m-0">
                          Raw sensor capture, low-noise pre-amplification, and spatial orientation ingestion.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl border border-[#292C33] bg-[#050608]">
                        <div className="font-mono text-[10px] mb-1 font-semibold" style={{ color: project.auraColor }}>
                          STAGE B // PROCESS
                        </div>
                        <div className="font-medium text-[#F4F4F0] text-sm mb-1">Representation Core</div>
                        <p className="text-[11px] text-[#92969F] leading-relaxed m-0">
                          Spike sorting, feature extraction, and conversational or spatial matrix alignment.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl border border-[#292C33] bg-[#050608]">
                        <div className="font-mono text-[10px] mb-1 font-semibold" style={{ color: project.auraColor }}>
                          STAGE C // DELIVER
                        </div>
                        <div className="font-medium text-[#F4F4F0] text-sm mb-1">Haptic / Data Egress</div>
                        <p className="text-[11px] text-[#92969F] leading-relaxed m-0">
                          Closed-loop tactile pulsing, low-latency BLE delivery, and verified benchmark reporting.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* 03 // CURRENT STATE & EVIDENCE */}
            <section id="evidence" className="scroll-mt-32 border-b border-[#292C33] pb-14">
              <SectionLabel index="03">Current State &amp; Evidence</SectionLabel>

              <div className="mt-6 space-y-6">
                <h2 className="text-2xl sm:text-3xl font-normal text-[#F4F4F0] m-0">
                  Transparent Evidence Standard
                </h2>

                <p className="text-sm text-[#92969F] leading-relaxed">
                  Jatayu Labs maintains strict boundaries between physical working hardware, software in development, active laboratory research, and long-term concepts.
                </p>

                <div className="optical-glass p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-medium text-[#F4F4F0] flex items-center gap-2 mb-1">
                      <span>Maturity Classification</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-[#668CFF]/30 bg-[#668CFF]/10 text-[#668CFF]">
                        {project.stage}
                      </span>
                    </div>
                    <p className="text-xs text-[#92969F] m-0">
                      All milestones below reflect manually verified laboratory progress. No simulated metrics are published.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-[#D4FF00] px-3 py-1 rounded-full border border-[#D4FF00]/40 bg-[#D4FF00]/10 shrink-0">
                    BENCH STANDARD
                  </span>
                </div>
              </div>
            </section>

            {/* 04 // MILESTONE ROADMAP & LIMITATIONS */}
            <section id="roadmap" className="scroll-mt-32 border-b border-[#292C33] pb-14">
              <SectionLabel index="04">Milestone Roadmap &amp; Limitations</SectionLabel>

              <div className="mt-8 space-y-8">
                {/* 3-Column Milestone Tracker */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Completed */}
                  <div className="optical-glass p-5 rounded-2xl">
                    <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3 pb-2 border-b border-[#292C33]">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Completed
                    </div>
                    <ul className="space-y-2.5 text-xs text-[#92969F]">
                      {project.milestones.completed.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-emerald-400 font-mono shrink-0">&bull;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* In-Progress */}
                  <div className="optical-glass p-5 rounded-2xl">
                    <div
                      className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider mb-3 pb-2 border-b border-[#292C33]"
                      style={{ color: project.auraColor }}
                    >
                      <Clock className="w-3.5 h-3.5" /> In-Progress
                    </div>
                    <ul className="space-y-2.5 text-xs text-[#F4F4F0]">
                      {project.milestones.inProgress.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="font-mono shrink-0" style={{ color: project.auraColor }}>&bull;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Planned */}
                  <div className="optical-glass p-5 rounded-2xl">
                    <div className="flex items-center gap-2 text-[#92969F] text-xs font-mono uppercase tracking-wider mb-3 pb-2 border-b border-[#292C33]">
                      <Calendar className="w-3.5 h-3.5" /> Planned
                    </div>
                    <ul className="space-y-2.5 text-xs text-[#92969F]">
                      {project.milestones.planned.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#92969F] font-mono shrink-0">&bull;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Explicit Limitations & Dependencies Callouts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="p-5 rounded-2xl border border-amber-500/30 bg-amber-950/15">
                    <div className="flex items-center gap-2 text-amber-300 text-xs font-mono uppercase tracking-wider mb-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0" /> Known Technical Limitations
                    </div>
                    <ul className="space-y-2 text-xs text-[#92969F]">
                      {project.limitations.map((limit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-amber-400 font-mono shrink-0">&ndash;</span>
                          <span>{limit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="optical-glass p-5 rounded-2xl">
                    <div
                      className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider mb-2.5 font-semibold"
                      style={{ color: project.auraColor }}
                    >
                      <Layers className="w-4 h-4 shrink-0" /> External Dependencies
                    </div>
                    <ul className="space-y-2 text-xs text-[#92969F]">
                      {project.dependencies.map((dep, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="font-mono shrink-0" style={{ color: project.auraColor }}>&ndash;</span>
                          <span>{dep}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 05 // RELATED LAB LOGS */}
            <section id="logs" className="scroll-mt-32 border-b border-[#292C33] pb-14">
              <SectionLabel index="05">Related Lab Logs</SectionLabel>
              <div className="mt-6 optical-glass p-6 sm:p-7 rounded-2xl text-xs text-[#92969F]">
                <p className="m-0">
                  Lab logs for <strong className="text-[#F4F4F0]">{project.name}</strong> will stream here as genuine empirical findings and bench test cycles conclude.
                </p>
              </div>
            </section>

            {/* 06 // DEDICATED COLLABORATION FORM */}
            <section id="collaborate" className="scroll-mt-32 pt-2">
              <SectionLabel index="06">Collaborate on {project.name}</SectionLabel>

              <div className="mt-6 space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-normal text-[#F4F4F0] leading-tight m-0">
                    Interested in {project.name}?
                  </h2>
                  <p className="text-sm text-[#92969F] leading-relaxed mt-2">
                    Whether you are an engineer looking to contribute, a researcher with domain expertise, or an institution interested in pilot validation, reach out directly.
                  </p>
                  <div className="pt-2 text-xs text-[#92969F] font-mono">
                    RECOMMENDED TRACK: <span style={{ color: project.auraColor }}>{project.inquiryCategory}</span>
                  </div>
                </div>

                <div className="optical-glass p-6 sm:p-8 rounded-2xl shadow-2xl">
                  <CollabForm defaultProject={project.name === 'Bio-Bus' ? 'Bio-Bus (Organoid Intelligence)' : project.name} />
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN: STICKY 3D REVOLVING & EXPLODING PRODUCT RIG (DESKTOP lg:col-span-5) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28 h-[calc(100vh-8.5rem)] flex items-center justify-center">
            <Project3DScrollStage slug={project.slug} />
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
