import Link from 'next/link'
import Navbar from '@/components/landing/navbar'
import Footer from '@/components/landing/footer'
import { SectionLabel } from '@/components/site'
import { ArrowUpRight, Clock, Filter, Terminal, Sparkles } from 'lucide-react'

export const metadata = {
  title: 'Journal & Lab Log | Jatayu Labs',
  description: 'Chronological feed of prototype changes, test results, and empirical findings.',
}

export default function JournalPage() {
  return (
    <>
      <Navbar />
      <main className="shell max-w-[1240px] mx-auto px-6 md:px-8 pt-32 pb-20 relative">
        <section className="page-hero border-b border-[#292C33] pb-12 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#292C33] bg-[#101217] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#668CFF]" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#92969F]">
              LAB LOG FEED
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal text-[#F4F4F0] tracking-tight leading-[1] mb-6">
            Notes from<br />
            <em className="text-[#92969F] font-normal italic font-serif">the workbench.</em>
          </h1>

          <p className="text-base sm:text-xl text-[#92969F] max-w-3xl leading-relaxed">
            Raw build logs, empirical experiments, prototype revisions, bench test failures, and lessons learned from the edge.
          </p>
        </section>

        {/* Filter Bar */}
        <section className="py-6 border-b border-[#292C33] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-[#92969F]">
            <Filter className="w-3.5 h-3.5 text-[#668CFF]" />
            <span>FILTER BY DOMAIN:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-lg border border-[#668CFF] text-[#668CFF] bg-[#668CFF]/10 font-semibold">
              All Tracks
            </span>
            <span className="px-3 py-1 rounded-lg border border-[#292C33] text-[#92969F] hover:text-[#00F0FF] transition-colors">
              Project SENSE
            </span>
            <span className="px-3 py-1 rounded-lg border border-[#292C33] text-[#92969F] hover:text-[#10F5A0] transition-colors">
              Bio-Bus / OI
            </span>
            <span className="px-3 py-1 rounded-lg border border-[#292C33] text-[#92969F] hover:text-[#B87BFF] transition-colors">
              Uploaded Intelligence
            </span>
            <span className="px-3 py-1 rounded-lg border border-[#292C33] text-[#92969F] hover:text-[#668CFF] transition-colors">
              SkillSynth
            </span>
          </div>
        </section>

        {/* Lab Log Feed Container */}
        <section className="py-16">
          <div
            style={{ ['--card-aura' as string]: '#668CFF' }}
            className="metallic-border ambient-beam cryo-glass p-12 sm:p-14 rounded-2xl text-center max-w-2xl mx-auto space-y-5 shadow-2xl"
          >
            <div className="w-12 h-12 rounded-xl bg-[#090A0C] border border-[#668CFF]/40 flex items-center justify-center text-[#668CFF] mx-auto shadow-[0_0_20px_rgba(102,140,255,0.2)]">
              <Terminal className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-normal text-[#F4F4F0] m-0">No Fabricated Logs</h3>
            <p className="text-xs sm:text-sm text-[#92969F] leading-relaxed max-w-lg mx-auto m-0">
              In accordance with our credibility standard, we do not invent placeholder logs or simulated updates. Genuine hardware telemetry, code diffs, and biological protocol notes will be posted as active bench test cycles conclude.
            </p>
            <div className="pt-3">
              <span className="inline-flex items-center gap-2 text-xs font-mono text-[#668CFF] bg-[#668CFF]/10 px-3.5 py-1.5 rounded-full border border-[#668CFF]/30">
                <Clock className="w-3.5 h-3.5" /> Next Release: Project SENSE Rev. 03 Enclosure Analysis
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
