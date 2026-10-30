import Link from 'next/link'
import { ArrowUpRight, BookOpen, Dna, FileText, Sparkles } from 'lucide-react'
import Navbar from '@/components/landing/navbar'
import Footer from '@/components/landing/footer'
import { SectionLabel } from '@/components/site'
import { OiSignalChain } from '@/components/oi-signal-chain'
import { ResearchMap } from '@/components/research-map'

export const metadata = {
  title: 'Research & Technical Notes | Jatayu Labs',
  description: 'Frontier research directions, Organoid Intelligence signal pipelines, and technical inquiry map.',
}

export default function ResearchPage() {
  return (
    <>
      <Navbar />
      <main className="shell max-w-[1240px] mx-auto px-6 md:px-8 py-16 relative">
        {/* Ambient Top Glow */}
        <div className="absolute top-10 left-1/3 w-[600px] h-[350px] bg-[#668CFF]/[0.035] blur-[150px] pointer-events-none rounded-full" />

        <section className="page-hero border-b border-[#292C33] pb-12 mb-12 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#292C33] bg-[#101217] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#668CFF]" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#92969F]">
              RESEARCH DIRECTIONS
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal text-[#F4F4F0] tracking-tight leading-[1] mb-6">
            Questions worth<br />
            <em className="text-[#92969F] font-normal italic font-serif">staying with.</em>
          </h1>

          <p className="text-base sm:text-xl text-[#92969F] max-w-3xl leading-relaxed">
            We investigate the boundaries between human perception, silicon computation, and biological intelligence—grounding our work in empirical inquiry rather than speculative claims.
          </p>
        </section>

        {/* 1. FRONTIER RESEARCH MAP */}
        <section className="py-14 border-b border-[#292C33] relative z-10">
          <SectionLabel index="01">Interconnected Frontier Map</SectionLabel>
          <div className="mt-6 mb-8 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-normal text-[#F4F4F0] mb-2">
              Four Converging Vectors
            </h2>
            <p className="text-xs sm:text-sm text-[#92969F] leading-relaxed m-0">
              Explore how human-computer interaction, biological computing, cognitive preservation, and employability intelligence inform each other. Select any node to inspect its technical focus.
            </p>
          </div>
          <ResearchMap />
        </section>

        {/* 2. BIOLOGICAL INTELLIGENCE & ORGANOID INTELLIGENCE (OI) */}
        <section className="py-14 border-b border-[#292C33] relative z-10">
          <SectionLabel index="02">Organoid Intelligence (OI) & Bio-Bus</SectionLabel>
          <div className="mt-6 mb-8 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-normal text-[#F4F4F0] mb-2">
              Wetware-to-Silicon Interfaces
            </h2>
            <p className="text-xs sm:text-sm text-[#92969F] leading-relaxed m-0">
              Biological computing experiments require standardizing signal acquisition across microelectrode arrays without distorting neural electrophysiology.
            </p>
          </div>
          <OiSignalChain />
        </section>

        {/* 3. PUBLICATIONS & OPEN SCIENCE POLICY */}
        <section className="py-16 relative z-10">
          <SectionLabel index="03">Open Science & Publications</SectionLabel>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-normal text-[#F4F4F0] leading-snug m-0">
                Transparent reproducibility.
              </h2>
              <p className="text-xs sm:text-sm text-[#92969F] leading-relaxed m-0">
                We believe scientific progress depends on reproducible benchmarks. As our experiments mature, datasets and technical notes will be published openly for academic scrutiny.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#668CFF] hover:underline"
                >
                  Propose academic collaboration &rarr;
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div
                style={{ ['--card-aura' as string]: '#10F5A0' }}
                className="metallic-border ambient-beam cryo-glass p-6 sm:p-7 rounded-2xl shadow-lg"
              >
                <div className="flex items-center justify-between text-xs text-[#92969F] mb-2">
                  <span className="font-mono text-[#10F5A0] font-semibold">TECHNICAL NOTE // IN PREPARATION</span>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded border border-[#292C33] bg-[#090A0C]">FORTHCOMING</span>
                </div>
                <h3 className="text-base font-normal text-[#F4F4F0] mb-2">
                  Standardizing Spatiotemporal Spike-Train Framing for In-Vitro Microelectrode Arrays
                </h3>
                <p className="text-xs text-[#92969F] leading-relaxed m-0">
                  A formal exploration of Bio-Bus signal arbitration, low-noise amplification constraints, and reproducible benchmark criteria for organoid computing interfaces.
                </p>
              </div>

              <div
                style={{ ['--card-aura' as string]: '#00F0FF' }}
                className="metallic-border ambient-beam cryo-glass p-6 sm:p-7 rounded-2xl shadow-lg"
              >
                <div className="flex items-center justify-between text-xs text-[#92969F] mb-2">
                  <span className="font-mono text-[#00F0FF] font-semibold">RESEARCH SPECIFICATION</span>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded border border-[#292C33] bg-[#090A0C]">FORTHCOMING</span>
                </div>
                <h3 className="text-base font-normal text-[#F4F4F0] mb-2">
                  Axial Haptic Mapping: Perceptual Latencies in Waist-Worn Tactile Navigation
                </h3>
                <p className="text-xs text-[#92969F] leading-relaxed m-0">
                  Empirical measurements of reaction time and cognitive load comparing directional vibration bursts against spatial audio cues.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
