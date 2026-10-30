import Link from 'next/link'
import { ArrowUpRight, Compass, Cpu, Dna, ShieldCheck, Sparkles, Terminal } from 'lucide-react'
import Navbar from '@/components/landing/navbar'
import Footer from '@/components/landing/footer'
import { SectionLabel } from '@/components/site'

export const metadata = {
  title: 'About | Jatayu Labs',
  description: 'Mission, methodology, and philosophy of Jatayu Labs.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="shell max-w-[1240px] mx-auto px-6 md:px-8 py-16 relative">
        <section className="page-hero border-b border-[#292C33] pb-12 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#292C33] bg-[#101217] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#668CFF]" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#92969F]">
              ABOUT JATAYU LABS
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal text-[#F4F4F0] tracking-tight leading-[1] mb-6">
            A lab for<br />
            <em className="text-[#92969F] font-normal italic font-serif">what comes next.</em>
          </h1>

          <p className="text-base sm:text-xl text-[#92969F] max-w-3xl leading-relaxed">
            Jatayu Labs develops products and explores new technological frontiers across human-computer interaction, biological intelligence, and human capability.
          </p>
        </section>

        {/* MISSION & POSITIONING */}
        <section className="py-14 border-b border-[#292C33]">
          <SectionLabel index="01">The Thesis</SectionLabel>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
            <div className="lg:col-span-5">
              <h2 className="text-2xl sm:text-4xl font-normal text-[#F4F4F0] leading-tight m-0">
                Building at the edge of human potential.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4 text-sm text-[#92969F] leading-relaxed">
              <p className="m-0">
                We believe the most important technological breakthroughs emerge when hardware engineering, biological sciences, and computing intelligence intersect. Rather than pursuing incremental SaaS features or speculative hype, we focus on hard engineering and foundational scientific questions.
              </p>
              <p className="m-0">
                Our work spans the physical reality of wearable tactile devices (Project SENSE), the frontiers of biological computing and organoid intelligence (Bio-Bus), deep cognitive representations (Uploaded Intelligence), and AI platforms that expand human capability (SkillSynthesis).
              </p>
            </div>
          </div>
        </section>

        {/* 5 CORE PRINCIPLES */}
        <section className="py-14 border-b border-[#292C33]">
          <SectionLabel index="02">Operating Principles</SectionLabel>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div
              style={{ ['--card-aura' as string]: '#668CFF' }}
              className="metallic-border ambient-beam cryo-glass p-7 rounded-2xl"
            >
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#668CFF] mb-2 font-semibold">01 // AMBITIOUS</div>
              <h3 className="text-lg font-normal text-[#F4F4F0] mb-2">Beyond Incremental</h3>
              <p className="text-xs text-[#92969F] leading-relaxed m-0">
                We choose problems that challenge current paradigms, prioritizing long-term consequence over quick convenience.
              </p>
            </div>

            <div
              style={{ ['--card-aura' as string]: '#00F0FF' }}
              className="metallic-border ambient-beam cryo-glass p-7 rounded-2xl"
            >
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#00F0FF] mb-2 font-semibold">02 // EXPERIMENTAL</div>
              <h3 className="text-lg font-normal text-[#F4F4F0] mb-2">Build, Test, Learn</h3>
              <p className="text-xs text-[#92969F] leading-relaxed m-0">
                Ideas remain unproven until tested in physical hardware or empirical code. We build prototypes early and embrace honest iteration.
              </p>
            </div>

            <div
              style={{ ['--card-aura' as string]: '#10F5A0' }}
              className="metallic-border ambient-beam cryo-glass p-7 rounded-2xl"
            >
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#10F5A0] mb-2 font-semibold">03 // CREDIBLE</div>
              <h3 className="text-lg font-normal text-[#F4F4F0] mb-2">Strict Scientific Grounding</h3>
              <p className="text-xs text-[#92969F] leading-relaxed m-0">
                We separate current empirical evidence from future hypotheses. We never publish fabricated metrics, fake partners, or exaggerated claims.
              </p>
            </div>

            <div
              style={{ ['--card-aura' as string]: '#668CFF' }}
              className="metallic-border ambient-beam cryo-glass p-7 rounded-2xl"
            >
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#668CFF] mb-2 font-semibold">04 // TECHNICAL</div>
              <h3 className="text-lg font-normal text-[#F4F4F0] mb-2">Engineering First</h3>
              <p className="text-xs text-[#92969F] leading-relaxed m-0">
                We document hardware schematics, signal-to-noise ratios, telemetry latency, and real-world constraints transparently.
              </p>
            </div>

            <div
              style={{ ['--card-aura' as string]: '#FF9E3B' }}
              className="metallic-border ambient-beam cryo-glass p-7 rounded-2xl"
            >
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#FF9E3B] mb-2 font-semibold">05 // HUMAN-CENTRIC</div>
              <h3 className="text-lg font-normal text-[#F4F4F0] mb-2">Expanding Capability</h3>
              <p className="text-xs text-[#92969F] leading-relaxed m-0">
                Our technology exists to broaden what humans can perceive, accomplish, and understand—not to displace or diminish human agency.
              </p>
            </div>

            <div
              style={{ ['--card-aura' as string]: '#B87BFF' }}
              className="metallic-border ambient-beam cryo-glass p-7 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#B87BFF] mb-2 font-semibold">COLLABORATION</div>
                <h3 className="text-lg font-normal text-[#F4F4F0] mb-2">Join the Lab</h3>
                <p className="text-xs text-[#92969F] leading-relaxed m-0">
                  Open to research scholars, hardware engineers, and institutional partners.
                </p>
              </div>
              <Link href="/contact" className="inline-flex items-center gap-1.5 text-xs text-[#B87BFF] mt-4 hover:underline font-mono">
                Start a conversation &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* TEAM & ETHOS */}
        <section className="py-14">
          <SectionLabel index="03">Independence &amp; Governance</SectionLabel>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
            <div className="lg:col-span-5">
              <h2 className="text-2xl sm:text-3xl font-normal text-[#F4F4F0] m-0">
                An independent research &amp; invention laboratory.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4 text-sm text-[#92969F] leading-relaxed">
              <p className="m-0">
                Jatayu Labs operates as an independent invention and research entity. We partner selectively with academic universities, open-source developers, and industrial testing facilities to validate our hypotheses in real-world conditions.
              </p>
              <div className="metallic-border ambient-beam cryo-glass p-5 rounded-xl flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs text-[#92969F] m-0">
                  We believe in scientific humility: acknowledging biological viability windows, sensor drift, and computational trade-offs openly rather than obscuring them.
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
