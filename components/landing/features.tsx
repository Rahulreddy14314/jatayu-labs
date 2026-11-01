'use client';

import Link from 'next/link';
import { ArrowUpRight, Compass, Activity, Layers, Zap } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import Container from './container';
import Heading from './heading';
import SubHeading from './subheading';
import { TactileRingVisual, PrototypeVisualFrame } from './feature-visuals';

export default function Features() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-24 border-b border-[#292C33] bg-[#090A0C] relative">
      {/* Ambient background cyan glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-[#00F0FF]/[0.03] blur-[140px] pointer-events-none rounded-full" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#292C33]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#00F0FF]">
                SECTION 02 // CURRENT FOCUS
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded-full border border-[#00F0FF]/50 text-[#00F0FF] bg-[#00F0FF]/10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" /> Prototype direction
              </span>
            </div>
            <Heading as="h2" variant="medium" className="text-3xl sm:text-5xl font-normal text-[#F4F4F0] m-0">
              Project SENSE &mdash; <em>Wearable Spatial Intelligence</em>
            </Heading>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/projects/sense"
              className="btn-primary group inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-[0_4px_20px_rgba(244,244,240,0.15)] hover:bg-[#D4FF00] hover:shadow-[0_0_25px_rgba(212,255,0,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4FF00]"
              style={{ backgroundColor: '#F4F4F0', color: '#050608' }}
            >
              <span className="font-semibold text-[#050608]" style={{ color: '#050608' }}>Follow the build</span>
              <ArrowUpRight className="w-4 h-4 text-[#050608] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: '#050608', stroke: '#050608' }} />
            </Link>
            <Link
              href="/contact"
              className="optical-glass group inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider border border-[rgba(244,244,240,0.12)] hover:border-[#668CFF] hover:bg-[#668CFF]/10 text-[#F4F4F0] hover:text-white transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#668CFF]"
            >
              <span className="text-[#F4F4F0] group-hover:text-white transition-colors">Discuss a pilot</span>
            </Link>
          </div>
        </div>

        {/* 2-Column Grid: Visual Frame & Interactive Tactile Ring */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Prototype Frame + Key Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <PrototypeVisualFrame />

            <div
              style={{ ['--card-aura' as string]: '#00F0FF' }}
              className="metallic-border ambient-beam cryo-glass p-6 rounded-2xl space-y-3"
            >
              <h3 className="text-base font-normal text-[#F4F4F0] m-0 flex items-center justify-between">
                <span>A waist-worn tactile interface for subconscious navigation.</span>
                <span className="text-[10px] font-mono text-[#00F0FF]">&lt;15ms Closed Loop</span>
              </h3>
              <p className="text-xs text-[#92969F] leading-relaxed m-0">
                Project SENSE explores how vibration patterns can communicate directional or contextual information without overloading human vision or hearing. Potential applications include industrial workflow guidance, navigation assistance, and assistive technology.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Ring Simulator + Technical Specs */}
          <div className="lg:col-span-6 space-y-6">
            <TactileRingVisual />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div
                style={{ ['--card-aura' as string]: '#00F0FF' }}
                className="metallic-border ambient-beam cryo-glass p-4 rounded-xl"
              >
                <div className="text-[10px] text-[#00F0FF] mb-1">LATENCY</div>
                <div className="text-[#F4F4F0] font-semibold text-sm">&lt; 14.2 ms</div>
                <div className="text-[10px] text-[#92969F] mt-0.5">Real-time haptic loop</div>
              </div>

              <div
                style={{ ['--card-aura' as string]: '#00F0FF' }}
                className="metallic-border ambient-beam cryo-glass p-4 rounded-xl"
              >
                <div className="text-[10px] text-[#00F0FF] mb-1">ACTUATORS</div>
                <div className="text-[#F4F4F0] font-semibold text-sm">8 Channels</div>
                <div className="text-[10px] text-[#92969F] mt-0.5">Axial ERM/LRA array</div>
              </div>

              <div
                style={{ ['--card-aura' as string]: '#00F0FF' }}
                className="metallic-border ambient-beam cryo-glass p-4 rounded-xl"
              >
                <div className="text-[10px] text-[#00F0FF] mb-1">BATTERY BUDGET</div>
                <div className="text-[#F4F4F0] font-semibold text-sm">12h Runtime</div>
                <div className="text-[10px] text-[#92969F] mt-0.5">Pulsed duty cycle</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
