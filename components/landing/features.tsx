'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Compass, Activity, Layers, Zap, Eye, Radio, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import Container from './container';
import Heading from './heading';
import { TactileRingVisual } from './feature-visuals';
import { cn } from '@/lib/utils';

type ShowcaseTab = 'assembled' | 'exploded' | 'neuroloop';

export default function Features() {
  const [activeTab, setActiveTab] = useState<ShowcaseTab>('assembled');
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-24 border-b border-[#292C33] bg-[#090A0C] relative overflow-hidden">
      {/* Ambient background cobalt glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-[#668CFF]/[0.06] blur-[150px] pointer-events-none rounded-full" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#292C33]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#668CFF]">
                SECTION 02 // CURRENT FOCUS
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded-full border border-[#668CFF]/50 text-[#668CFF] bg-[#668CFF]/10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] shadow-[0_0_6px_#D4FF00] animate-pulse" /> Prototype direction
              </span>
            </div>
            <Heading as="h2" variant="medium" className="text-3xl sm:text-5xl font-normal text-[#F4F4F0] m-0">
              Project SENSE &mdash; <em className="text-[#92969F] font-normal italic font-serif">Wearable Spatial Intelligence</em>
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

        {/* 2-Column Grid: Hardware Showcase Switcher & Interactive Tactile Ring */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive 3-Tab Hardware Showcase Switcher */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative w-full rounded-2xl optical-glass border border-[rgba(244,244,240,0.12)] overflow-hidden shadow-2xl flex flex-col justify-between">
              {/* Tab Switcher Header */}
              <div className="grid grid-cols-3 border-b border-[#292C33] bg-[#090A0C]/90 text-[10px] font-mono tracking-wider">
                <button
                  onClick={() => setActiveTab('assembled')}
                  className={cn(
                    "p-3 text-center transition-colors cursor-pointer border-r border-[#292C33]",
                    activeTab === 'assembled'
                      ? "bg-[#101217] text-[#D4FF00] font-bold"
                      : "text-[#92969F] hover:text-[#F4F4F0]"
                  )}
                >
                  01 // ASSEMBLED BELT
                </button>
                <button
                  onClick={() => setActiveTab('exploded')}
                  className={cn(
                    "p-3 text-center transition-colors cursor-pointer border-r border-[#292C33]",
                    activeTab === 'exploded'
                      ? "bg-[#101217] text-[#D4FF00] font-bold"
                      : "text-[#92969F] hover:text-[#F4F4F0]"
                  )}
                >
                  02 // EXPLODED TEARDOWN
                </button>
                <button
                  onClick={() => setActiveTab('neuroloop')}
                  className={cn(
                    "p-3 text-center transition-colors cursor-pointer",
                    activeTab === 'neuroloop'
                      ? "bg-[#101217] text-[#D4FF00] font-bold"
                      : "text-[#92969F] hover:text-[#F4F4F0]"
                  )}
                >
                  03 // NEUROLOOP SYSTEM
                </button>
              </div>

              {/* Hardware Showcase Viewport */}
              <div className="relative h-[340px] w-full bg-[#050608] overflow-hidden flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {/* TAB 1: ASSEMBLED WAIST BELT */}
                  {activeTab === 'assembled' && (
                    <motion.div
                      key="assembled"
                      initial={shouldReduceMotion ? false : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={shouldReduceMotion ? false : { opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-[url('/images/sense-hardware-grid.jpg')] bg-[length:162%_202%] bg-[position:0%_0%] bg-no-repeat"
                      style={{ filter: 'contrast(1.1) brightness(0.9)' }}
                    >
                      {/* Top Overlay Badge */}
                      <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                        <span className="text-[9px] font-mono tracking-widest text-[#F4F4F0] px-2.5 py-1 rounded bg-[#090A0C]/90 backdrop-blur-md border border-[#292C33] flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-pulse" />
                          STUDIO HARDWARE // FULLY ASSEMBLED BELT
                        </span>
                      </div>

                      {/* Bottom Feature Callout */}
                      <div className="absolute bottom-3 inset-x-3 z-10 p-3 rounded-xl bg-[#090A0C]/90 backdrop-blur-md border border-[#292C33] text-xs space-y-1">
                        <div className="text-[10px] font-mono text-[#668CFF]">MATTE-BLACK TACTILE ENCLOSURE // REV. 04</div>
                        <p className="text-[11px] text-[#92969F] m-0">
                          Equidistant 8-node radial haptic pods with signature cobalt-blue LED indicator arcs and magnetic front clasp.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* TAB 2: EXPLODED POD TEARDOWN */}
                  {activeTab === 'exploded' && (
                    <motion.div
                      key="exploded"
                      initial={shouldReduceMotion ? false : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={shouldReduceMotion ? false : { opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-[url('/images/sense-hardware-grid.jpg')] bg-[length:265%_202%] bg-[position:100%_0%] bg-no-repeat"
                      style={{ filter: 'contrast(1.15) brightness(0.92)' }}
                    >
                      {/* Top Overlay Badge */}
                      <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                        <span className="text-[9px] font-mono tracking-widest text-[#F4F4F0] px-2.5 py-1 rounded bg-[#090A0C]/90 backdrop-blur-md border border-[#292C33] flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-pulse" />
                          5-PART EXPLODED HARDWARE TEARDOWN
                        </span>
                      </div>

                      {/* Bottom Feature Callout */}
                      <div className="absolute bottom-3 inset-x-3 z-10 p-3 rounded-xl bg-[#090A0C]/90 backdrop-blur-md border border-[#292C33] text-xs space-y-1">
                        <div className="text-[10px] font-mono text-[#D4FF00]">INTERNAL ACTUATOR SIGNAL CHAIN</div>
                        <p className="text-[11px] text-[#92969F] m-0">
                          LED Tactile Bezel &rarr; LRA Cylindrical Motor &rarr; Isolation Ring &rarr; ESP32 RF PCB &rarr; LiPo Power Cell.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* TAB 3: SENSE NEUROLOOP SYSTEM */}
                  {activeTab === 'neuroloop' && (
                    <motion.div
                      key="neuroloop"
                      initial={shouldReduceMotion ? false : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={shouldReduceMotion ? false : { opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-[url('/images/sense-neuroloop.jpg')] bg-cover bg-center bg-no-repeat"
                    >
                      {/* Top Overlay Badge */}
                      <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                        <span className="text-[9px] font-mono tracking-widest text-[#F4F4F0] px-2.5 py-1 rounded bg-[#090A0C]/90 backdrop-blur-md border border-[#292C33] flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#668CFF] animate-pulse" />
                          CLOSED-LOOP NEURAL &amp; ROBOTIC BENCH
                        </span>
                      </div>

                      {/* Bottom Feature Callout */}
                      <div className="absolute bottom-3 inset-x-3 z-10 p-3 rounded-xl bg-[#090A0C]/90 backdrop-blur-md border border-[#292C33] text-xs space-y-1">
                        <div className="text-[10px] font-mono text-[#668CFF]">SENSE NEUROLOOP CLOSED-LOOP ARCHITECTURE</div>
                        <p className="text-[11px] text-[#92969F] m-0">
                          01. EEG Headset &rarr; 02. AI Processing &rarr; 03. Robot Control &rarr; 04. Haptic Feedback.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Context Card */}
            <div
              style={{ ['--card-aura' as string]: '#668CFF' }}
              className="metallic-border ambient-beam optical-glass p-6 rounded-2xl space-y-3"
            >
              <h3 className="text-base font-normal text-[#F4F4F0] m-0 flex items-center justify-between">
                <span>A waist-worn tactile interface for subconscious navigation.</span>
                <span className="text-[10px] font-mono text-[#668CFF]">&lt;14.2ms Closed Loop</span>
              </h3>
              <p className="text-xs text-[#92969F] leading-relaxed m-0">
                Project SENSE explores how vibration patterns can communicate directional or contextual information without overloading human vision or hearing. Potential applications include robotic teleoperation, industrial spatial guidance, and human-in-the-loop navigation.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Ring Simulator + Technical Specs */}
          <div className="lg:col-span-6 space-y-6">
            <TactileRingVisual />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div
                style={{ ['--card-aura' as string]: '#668CFF' }}
                className="metallic-border ambient-beam optical-glass p-4 rounded-xl"
              >
                <div className="text-[10px] text-[#668CFF] mb-1">LATENCY</div>
                <div className="text-[#F4F4F0] font-semibold text-sm">&lt; 14.2 ms</div>
                <div className="text-[10px] text-[#92969F] mt-0.5">Real-time haptic loop</div>
              </div>

              <div
                style={{ ['--card-aura' as string]: '#668CFF' }}
                className="metallic-border ambient-beam optical-glass p-4 rounded-xl"
              >
                <div className="text-[10px] text-[#668CFF] mb-1">ACTUATORS</div>
                <div className="text-[#F4F4F0] font-semibold text-sm">8 Channels</div>
                <div className="text-[10px] text-[#92969F] mt-0.5">Axial ERM/LRA array</div>
              </div>

              <div
                style={{ ['--card-aura' as string]: '#668CFF' }}
                className="metallic-border ambient-beam optical-glass p-4 rounded-xl"
              >
                <div className="text-[10px] text-[#668CFF] mb-1">BATTERY BUDGET</div>
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
