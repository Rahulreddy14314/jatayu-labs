import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, CheckCircle2, Clock, Calendar, AlertCircle, Cpu, Radio, Shield, Layers, Zap } from 'lucide-react'
import { notFound } from 'next/navigation'
import Navbar from '@/components/landing/navbar'
import Footer from '@/components/landing/footer'
import { ProjectStatusBadge, SectionLabel } from '@/components/site'
import { OiSignalChain } from '@/components/oi-signal-chain'
import { CollabForm } from '@/components/collab-form'
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
        className="project-detail shell max-w-[1240px] mx-auto px-6 md:px-8 py-16 relative"
      >
        {/* Dynamic Project Ambient Glow */}
        <div
          className="absolute top-10 right-1/4 w-[500px] h-[350px] blur-[150px] pointer-events-none opacity-20 rounded-full"
          style={{ backgroundColor: project.auraColor }}
        />

        {/* Breadcrumb Back Link */}
        <div className="mb-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#92969F] hover:text-[#F4F4F0] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to all projects
          </Link>
        </div>

        {/* 1. PROJECT IDENTITY HEADER */}
        <header className="border-b border-[#292C33] pb-12 mb-14 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <span
              className="text-[11px] font-mono uppercase tracking-[0.2em] font-semibold"
              style={{ color: project.auraColor }}
            >
              {project.domain} // {project.role}
            </span>
            <ProjectStatusBadge stage={project.stage} />
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal text-[#F4F4F0] tracking-tight leading-[1] mb-6">
            {project.name}
          </h1>

          <p className="text-lg sm:text-xl text-[#F4F4F0] max-w-3xl leading-relaxed font-light mb-4">
            {project.summary}
          </p>

          <p className="text-sm text-[#92969F] max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </header>

        {/* 2. PROBLEM STATEMENT OR RESEARCH QUESTION */}
        <section className="py-14 border-b border-[#292C33] relative z-10">
          <SectionLabel index="01">Problem Statement & Research Question</SectionLabel>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
            <div className="lg:col-span-5">
              <h2 className="text-2xl sm:text-3xl font-normal text-[#F4F4F0] leading-snug">
                The core challenge being investigated.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <div className="metallic-border ambient-beam cryo-glass p-6 sm:p-7 rounded-2xl">
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

              <div className="metallic-border ambient-beam cryo-glass p-6 sm:p-7 rounded-2xl">
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

        {/* 3. CORE HYPOTHESIS & SYSTEM ARCHITECTURE */}
        <section className="py-14 border-b border-[#292C33] relative z-10">
          <SectionLabel index="02">System Architecture</SectionLabel>

          <div className="mt-6 space-y-6">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-normal text-[#F4F4F0] mb-3">
                How the proposed system operates.
              </h2>
              <p className="text-sm text-[#92969F] leading-relaxed">
                {project.systemArchitecture}
              </p>
            </div>

            {/* Special Interactive Architecture Component for Bio-Bus */}
            {project.slug === 'bio-bus' ? (
              <div className="mt-8">
                <OiSignalChain />
              </div>
            ) : (
              /* Custom Architecture Visual for other projects */
              <div className="metallic-border ambient-beam cryo-glass p-8 sm:p-10 rounded-2xl mt-8">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#292C33]">
                  <span
                    className="text-[10px] font-mono uppercase tracking-wider font-semibold"
                    style={{ color: project.auraColor }}
                  >
                    ARCHITECTURE BLOCK SCHEMATIC
                  </span>
                  <span className="text-[10px] font-mono text-[#92969F] px-2.5 py-1 rounded border border-[#292C33] bg-[#090A0C]">
                    Conceptual Visual
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-xs">
                  <div className="p-5 rounded-xl border border-[#292C33] bg-[#090A0C]">
                    <div className="font-mono text-[10px] mb-1" style={{ color: project.auraColor }}>
                      STAGE A // INGEST
                    </div>
                    <div className="font-medium text-[#F4F4F0] text-sm mb-1.5">Sensory / Data Capture</div>
                    <p className="text-xs text-[#92969F] leading-relaxed m-0">
                      Raw telemetry and contextual data capture at the hardware/software edge.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-[#292C33] bg-[#090A0C]">
                    <div className="font-mono text-[10px] mb-1" style={{ color: project.auraColor }}>
                      STAGE B // PROCESSING
                    </div>
                    <div className="font-medium text-[#F4F4F0] text-sm mb-1.5">Representation Engine</div>
                    <p className="text-xs text-[#92969F] leading-relaxed m-0">
                      Feature extraction, filtering, and conversion into standardized representations.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-[#292C33] bg-[#090A0C]">
                    <div className="font-mono text-[10px] mb-1" style={{ color: project.auraColor }}>
                      STAGE C // ACTUATION
                    </div>
                    <div className="font-medium text-[#F4F4F0] text-sm mb-1.5">Delivery & Verification</div>
                    <p className="text-xs text-[#92969F] leading-relaxed m-0">
                      Closed-loop feedback, human tactile actuation, or objective evaluation reporting.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 4. CURRENT STATE & PROOF OF WORK */}
        <section className="py-14 border-b border-[#292C33] relative z-10">
          <SectionLabel index="03">Current State & Evidence</SectionLabel>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6 items-center">
            <div className="lg:col-span-6 relative min-h-[300px] metallic-border ambient-beam cryo-glass rounded-2xl overflow-hidden flex flex-col justify-between p-6">
              <div className="focus-scan" />
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#92969F] bg-[#090A0C]/80 px-2.5 py-1 rounded border border-[#292C33]">
                  BENCHMARK TELEMETRY
                </span>
                <span
                  className="text-[10px] font-mono px-2.5 py-1 rounded border font-semibold"
                  style={{
                    color: project.auraColor,
                    borderColor: `${project.auraColor}40`,
                    backgroundColor: `${project.auraColor}15`,
                  }}
                >
                  ACTIVE EXPLORATION
                </span>
              </div>
              <div className="relative z-10 bg-[#090A0C]/90 p-4 rounded-xl border border-[#292C33] text-xs text-[#92969F] backdrop-blur-md">
                Laboratory testing and empirical evidence collection ongoing. No fabricated metrics or marketing claims are published.
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-2xl font-normal text-[#F4F4F0] m-0">
                Transparent Evidence Standard
              </h2>
              <p className="text-sm text-[#92969F] leading-relaxed">
                Jatayu Labs maintains strict boundaries between physical working hardware, software in development, active laboratory research, and long-term concepts.
              </p>
              <div className="metallic-border ambient-beam cryo-glass p-5 rounded-xl text-xs text-[#92969F]">
                <span className="text-[#F4F4F0] font-medium block mb-1">
                  Maturity Classification: {project.stage}
                </span>
                All milestones below reflect manually verified progress. We do not use arbitrary percentage progress bars.
              </div>
            </div>
          </div>
        </section>

        {/* 5. ROADMAP, DEPENDENCIES & KNOWN LIMITATIONS */}
        <section className="py-14 border-b border-[#292C33] relative z-10">
          <SectionLabel index="04">Milestone Roadmap & Limitations</SectionLabel>

          <div className="mt-8 space-y-10">
            {/* 3-Column Milestone Tracker */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Completed */}
              <div className="metallic-border ambient-beam cryo-glass p-6 sm:p-7 rounded-2xl">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4 pb-2 border-b border-[#292C33]">
                  <CheckCircle2 className="w-4 h-4" /> Completed
                </div>
                <ul className="space-y-3 text-xs text-[#92969F]">
                  {project.milestones.completed.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-mono shrink-0">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* In-Progress */}
              <div className="metallic-border ambient-beam cryo-glass p-6 sm:p-7 rounded-2xl">
                <div
                  className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider mb-4 pb-2 border-b border-[#292C33]"
                  style={{ color: project.auraColor }}
                >
                  <Clock className="w-4 h-4" /> In-Progress
                </div>
                <ul className="space-y-3 text-xs text-[#F4F4F0]">
                  {project.milestones.inProgress.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="font-mono shrink-0" style={{ color: project.auraColor }}>&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Planned */}
              <div className="metallic-border ambient-beam cryo-glass p-6 sm:p-7 rounded-2xl">
                <div className="flex items-center gap-2 text-[#92969F] text-xs font-mono uppercase tracking-wider mb-4 pb-2 border-b border-[#292C33]">
                  <Calendar className="w-4 h-4" /> Planned Milestones
                </div>
                <ul className="space-y-3 text-xs text-[#92969F]">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border border-amber-500/30 bg-amber-950/10">
                <div className="flex items-center gap-2 text-amber-300 text-xs font-mono uppercase tracking-wider mb-3">
                  <AlertCircle className="w-4 h-4 shrink-0" /> Known Technical Limitations
                </div>
                <ul className="space-y-2.5 text-xs text-[#92969F]">
                  {project.limitations.map((limit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-400 font-mono shrink-0">&ndash;</span>
                      <span>{limit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="metallic-border ambient-beam cryo-glass p-6 rounded-2xl">
                <div
                  className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider mb-3 font-semibold"
                  style={{ color: project.auraColor }}
                >
                  <Layers className="w-4 h-4 shrink-0" /> External Dependencies
                </div>
                <ul className="space-y-2.5 text-xs text-[#92969F]">
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

        {/* 6. RELATED JOURNAL ENTRIES */}
        <section className="py-14 border-b border-[#292C33] relative z-10">
          <SectionLabel index="05">Related Lab Logs</SectionLabel>
          <div className="mt-6 metallic-border ambient-beam cryo-glass p-6 sm:p-7 rounded-2xl text-xs text-[#92969F]">
            <p className="m-0">
              Lab logs for <strong className="text-[#F4F4F0]">{project.name}</strong> will stream here as genuine empirical findings and bench test cycles conclude.
            </p>
          </div>
        </section>

        {/* 7. DEDICATED COLLABORATION CTA */}
        <section className="py-16 relative z-10">
          <SectionLabel index="06">Collaborate on {project.name}</SectionLabel>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-normal text-[#F4F4F0] leading-tight m-0">
                Interested in {project.name}?
              </h2>
              <p className="text-sm text-[#92969F] leading-relaxed">
                Whether you are an engineer looking to contribute, a researcher with domain expertise, or an institution interested in pilot validation, reach out directly.
              </p>
              <div className="pt-2 text-xs text-[#92969F] font-mono">
                RECOMMENDED TRACK: <span style={{ color: project.auraColor }}>{project.inquiryCategory}</span>
              </div>
            </div>

            <div className="lg:col-span-7 metallic-border ambient-beam cryo-glass p-6 sm:p-9 rounded-2xl shadow-2xl">
              <CollabForm defaultProject={project.name === 'Bio-Bus' ? 'Bio-Bus (Organoid Intelligence)' : project.name} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
