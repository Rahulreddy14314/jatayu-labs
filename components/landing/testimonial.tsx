'use client';

import Link from 'next/link';
import { ArrowUpRight, Terminal, Clock, ShieldCheck, Mail } from 'lucide-react';
import Heading from './heading';
import SubHeading from './subheading';
import Container from './container';
import { CollabForm } from '@/components/collab-form';

// Guardrail: Strictly hides until genuine published logs exist
const hasPublishedLogs = false;

export default function Testimonial() {
  return (
    <section className="py-24 border-b border-[#292C33] bg-[#090A0C] relative">
      <Container className="relative z-10">
        {/* SECTION 05: LATEST EXPERIMENTS (LAB LOG) */}
        {hasPublishedLogs ? (
          <div className="mb-24 pb-16 border-b border-[#292C33]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#668CFF] block mb-2">
                  SECTION 05 // LATEST EXPERIMENTS
                </span>
                <Heading as="h2" variant="medium" className="text-3xl font-normal text-[#F4F4F0] m-0">
                  Lab Log Feed
                </Heading>
              </div>
              <Link href="/journal" className="text-xs font-mono text-[#668CFF] hover:underline">
                View all logs &rarr;
              </Link>
            </div>
          </div>
        ) : (
          <div className="mb-20 pb-12 border-b border-[#292C33]">
            <div className="metallic-border ambient-beam cryo-glass p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#090A0C] border border-[#292C33] flex items-center justify-center text-[#668CFF]">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-medium text-[#F4F4F0] flex items-center gap-2">
                    <span>SECTION 05 // LATEST EXPERIMENTS</span>
                    <span className="text-[10px] font-mono text-[#668CFF] px-2 py-0.5 rounded border border-[#668CFF]/30 bg-[#668CFF]/10">
                      EMPIRICAL BENCH STANDARD
                    </span>
                  </div>
                  <div className="text-[11px] text-[#92969F] mt-0.5">
                    No fabricated logs or simulated numbers. Verified hardware and wetware telemetry will stream directly here upon milestone completion.
                  </div>
                </div>
              </div>

              <Link
                href="/journal"
                className="text-xs font-mono text-[#668CFF] hover:underline shrink-0 flex items-center gap-1"
              >
                <span>Inspect log archive</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        )}

        {/* SECTION 06: COLLABORATOR INTAKE FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#668CFF] block mb-2">
                SECTION 06 // COLLABORATION
              </span>
              <Heading as="h2" variant="medium" className="text-3xl sm:text-5xl font-normal text-[#F4F4F0] leading-tight m-0">
                Have a difficult <br />
                <em className="text-[#92969F] font-normal italic font-serif">problem to work on?</em>
              </Heading>
            </div>

            <SubHeading variant="medium" className="text-[#92969F]">
              We are open to conversations with researchers, engineers, industrial partners, institutions, early customers, and prospective team members.
            </SubHeading>

            <div className="metallic-border ambient-beam cryo-glass p-6 rounded-2xl space-y-3.5 text-xs text-[#92969F]">
              <div className="font-mono text-[#668CFF] uppercase tracking-wider text-[10px] flex items-center justify-between">
                <span>DIRECT CHANNELS</span>
                <span className="text-emerald-400">&bull; MONITORED</span>
              </div>
              <p className="m-0 leading-relaxed">
                Direct Inquiries: <a href="mailto:hello@jatayulabs.com" className="text-[#F4F4F0] font-mono underline hover:text-[#668CFF]">hello@jatayulabs.com</a>
              </p>
              <p className="m-0 leading-relaxed">
                SkillSynthesis Institutional Track: <Link href="/projects/skillsynthesis" className="text-[#FF9E3B] underline">Academic Pilot</Link>
              </p>
              <p className="m-0 leading-relaxed">
                Bio-Bus &amp; Organoid Intelligence Track: <Link href="/projects/bio-bus" className="text-[#10F5A0] underline">Wetware Research</Link>
              </p>
              <p className="m-0 leading-relaxed">
                Project SENSE Wearable Haptics: <Link href="/projects/sense" className="text-[#00F0FF] underline">Industrial Pilot</Link>
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 metallic-border ambient-beam cryo-glass p-6 sm:p-9 rounded-2xl shadow-2xl">
            <div className="mb-6 pb-4 border-b border-[#292C33] flex items-center justify-between">
              <div>
                <h3 className="text-lg font-normal text-[#F4F4F0] m-0">Collaborator Intake Deck</h3>
                <p className="text-xs text-[#92969F] mt-1 m-0">
                  Submissions are reviewed directly by our engineering and research leads.
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#668CFF] px-2 py-0.5 rounded border border-[#668CFF]/30 bg-[#668CFF]/10">
                ACTIVE
              </span>
            </div>
            <CollabForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
