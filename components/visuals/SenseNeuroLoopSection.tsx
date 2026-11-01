'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Brain, Cpu, Bot, Radio, Compass, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function SenseNeuroLoopSection() {
  const [activeStage, setActiveStage] = useState<number>(0);
  const shouldReduceMotion = useReducedMotion();

  const stages = [
    {
      step: '01',
      title: 'EEG HEADSET',
      tagline: 'Non-invasive brain signal acquisition',
      detail: 'Multi-channel wireless dry/gel EEG array captures cortical sensorimotor rhythms (mu and beta band desynchronization) without surgical implants.',
      icon: Brain,
      color: '#668CFF',
    },
    {
      step: '02',
      title: 'AI PROCESSING',
      tagline: 'Signal decoding & intent recognition',
      detail: 'Embedded ultra-low-power DSP and deep neural decoder running on edge hardware translates raw electroencephalogram packets into directional motion vectors in <12ms.',
      icon: Cpu,
      color: '#2554FF',
    },
    {
      step: '03',
      title: 'ROBOT CONTROL',
      tagline: 'Command translation & execution',
      detail: 'Trajectory kinematics and force commands stream over real-time deterministic ROS2 bus to industrial robotic manipulator or spatial guidance system.',
      icon: Bot,
      color: '#668CFF',
    },
    {
      step: '04',
      title: 'HAPTIC FEEDBACK',
      tagline: 'Tactile information through waist belt',
      detail: 'Closed-loop spatial feedback pulses through the 8-node Project SENSE waist belt, providing immediate intuitive subconscious guidance to the human operator.',
      icon: Radio,
      color: '#D4FF00',
    },
  ];

  return (
    <div className="space-y-16 mt-8">
      {/* =========================================================================
          1. THE SENSE NEUROLOOP 4-STAGE CLOSED-LOOP ARCHITECTURE
         ========================================================================= */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#292C33]">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#668CFF]">
              SYSTEM ARCHITECTURE // CLOSED-LOOP NEURO-HAPTIC PIPELINE
            </span>
            <h3 className="text-xl sm:text-2xl font-normal text-[#F4F4F0] m-0 mt-1 font-heading">
              SENSE NeuroLoop: Brain-to-Robot-to-Body Feedback
            </h3>
          </div>
          <span className="text-[10px] font-mono text-[#D4FF00] px-2.5 py-1 rounded border border-[#D4FF00]/40 bg-[#D4FF00]/10 shrink-0 self-start sm:self-auto">
            CLOSED LOOP &lt; 14.2 MS
          </span>
        </div>

        {/* Hero NeuroLoop Image Showcase */}
        <div className="relative rounded-2xl optical-glass border border-white/[0.12] overflow-hidden shadow-2xl">
          <div className="relative h-[280px] sm:h-[400px] w-full bg-[#050608] overflow-hidden">
            <img
              src="/images/sense-neuroloop.jpg"
              alt="SENSE NeuroLoop Laboratory Setup with EEG, Robotic Arm, and Waist Belt"
              className="w-full h-full object-cover object-center"
            />
            {/* Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-transparent to-transparent pointer-events-none" />

            {/* Corner Badge */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
              <span className="text-[9px] font-mono tracking-widest text-[#F4F4F0] px-3 py-1 rounded bg-[#090A0C]/90 backdrop-blur-md border border-[#292C33] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-pulse" />
                NEUROLOOP BENCH // VERIFIED 4-STAGE PIPELINE
              </span>
            </div>
          </div>
        </div>

        {/* 4 Interactive Glass Pipeline Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            const isSelected = activeStage === idx;

            return (
              <div
                key={stage.step}
                onClick={() => setActiveStage(idx)}
                className={cn(
                  "p-5 rounded-2xl optical-glass border transition-all duration-300 cursor-pointer space-y-3 relative",
                  isSelected
                    ? "border-[#668CFF] shadow-[0_0_30px_rgba(102,140,255,0.25)] bg-[#101217]/90"
                    : "border-white/[0.08] hover:border-white/[0.2] hover:bg-white/[0.02]"
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold" style={{ color: stage.color }}>
                    {stage.step} // {stage.title}
                  </span>
                  <Icon className="w-4 h-4" style={{ color: stage.color }} />
                </div>

                <div className="text-xs font-medium text-[#F4F4F0] leading-snug">
                  {stage.tagline}
                </div>

                <p className="text-[11px] text-[#92969F] leading-relaxed m-0">
                  {stage.detail}
                </p>

                {isSelected && (
                  <motion.div
                    layoutId={shouldReduceMotion ? undefined : "pipeline-indicator"}
                    className="absolute bottom-0 inset-x-4 h-[2px] rounded-full"
                    style={{ backgroundColor: stage.color }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          2. HARDWARE SUBSYSTEM BREAKDOWN BENTO (4 MACRO CROPS)
         ========================================================================= */}
      <div className="space-y-6 pt-6 border-t border-[#292C33]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#292C33]">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#668CFF]">
              PHYSICAL HARDWARE // SUB-ASSEMBLY INSPECTION
            </span>
            <h3 className="text-xl sm:text-2xl font-normal text-[#F4F4F0] m-0 mt-1 font-heading">
              Hardware Subsystem Breakdown
            </h3>
          </div>
          <span className="text-[10px] font-mono text-[#92969F] px-2.5 py-1 rounded border border-[#292C33] bg-[#050608]">
            CAD REV. 04 &bull; MACRO SPEC
          </span>
        </div>

        {/* 4-Card Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1: Vibration Modules (4 Directions) */}
          <div className="rounded-2xl optical-glass border border-white/[0.1] overflow-hidden group hover:border-[#668CFF] transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div className="relative h-56 w-full bg-[#050608] overflow-hidden">
              <div
                className="absolute inset-0 bg-[url('/images/sense-hardware-grid.jpg')] bg-[length:350%_350%] bg-[position:95%_65%] bg-no-repeat group-hover:scale-105 transition-transform duration-700"
                style={{ filter: 'contrast(1.15) brightness(0.95)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-3 left-3 z-10">
                <span className="text-[9px] font-mono text-[#D4FF00] bg-[#050608]/90 px-2 py-0.5 rounded border border-[#D4FF00]/40">
                  SUB-SYSTEM 01
                </span>
              </div>
            </div>
            <div className="p-5 space-y-2 bg-[#090A0C]">
              <h4 className="text-base font-normal text-[#F4F4F0] m-0">
                Vibration Modules (4 Directions)
              </h4>
              <p className="text-xs text-[#92969F] leading-relaxed m-0">
                Radial tactile pods with signature blue LED status arcs. Houses high-torque ERM/LRA motors delivering distinct resonant frequencies for compass bearing cues.
              </p>
            </div>
          </div>

          {/* Card 2: Control Unit (ESP32) */}
          <div className="rounded-2xl optical-glass border border-white/[0.1] overflow-hidden group hover:border-[#668CFF] transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div className="relative h-56 w-full bg-[#050608] overflow-hidden">
              <div
                className="absolute inset-0 bg-[url('/images/sense-hardware-grid.jpg')] bg-[length:265%_202%] bg-[position:100%_0%] bg-no-repeat group-hover:scale-105 transition-transform duration-700"
                style={{ filter: 'contrast(1.15) brightness(0.95)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-3 left-3 z-10">
                <span className="text-[9px] font-mono text-[#668CFF] bg-[#050608]/90 px-2 py-0.5 rounded border border-[#668CFF]/40">
                  SUB-SYSTEM 02
                </span>
              </div>
            </div>
            <div className="p-5 space-y-2 bg-[#090A0C]">
              <h4 className="text-base font-normal text-[#F4F4F0] m-0">
                Control Unit (ESP32 PCB)
              </h4>
              <p className="text-xs text-[#92969F] leading-relaxed m-0">
                Exploded internal PCB with RF-shielded ESP32 SoC, dedicated motor driver bridge, BLE 5.3 telemetry stack, and integrated LiPo power management circuit.
              </p>
            </div>
          </div>

          {/* Card 3: Magnetic Center Clasp */}
          <div className="rounded-2xl optical-glass border border-white/[0.1] overflow-hidden group hover:border-[#668CFF] transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div className="relative h-56 w-full bg-[#050608] overflow-hidden">
              <div
                className="absolute inset-0 bg-[url('/images/sense-hardware-grid.jpg')] bg-[length:320%_340%] bg-[position:15%_95%] bg-no-repeat group-hover:scale-105 transition-transform duration-700"
                style={{ filter: 'contrast(1.15) brightness(0.95)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-3 left-3 z-10">
                <span className="text-[9px] font-mono text-[#D4FF00] bg-[#050608]/90 px-2 py-0.5 rounded border border-[#D4FF00]/40">
                  SUB-SYSTEM 03
                </span>
              </div>
            </div>
            <div className="p-5 space-y-2 bg-[#090A0C]">
              <h4 className="text-base font-normal text-[#F4F4F0] m-0">
                Magnetic Center Clasp
              </h4>
              <p className="text-xs text-[#92969F] leading-relaxed m-0">
                Quick-release front lock mechanism with vertical optical LED lock bar. Neodymium alignment ensures single-handed attachment and secure retention under motion.
              </p>
            </div>
          </div>

          {/* Card 4: Adjustable Strap & Comfort Fit */}
          <div className="rounded-2xl optical-glass border border-white/[0.1] overflow-hidden group hover:border-[#668CFF] transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div className="relative h-56 w-full bg-[#050608] overflow-hidden">
              <div
                className="absolute inset-0 bg-[url('/images/sense-hardware-grid.jpg')] bg-[length:320%_340%] bg-[position:65%_95%] bg-no-repeat group-hover:scale-105 transition-transform duration-700"
                style={{ filter: 'contrast(1.15) brightness(0.95)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-3 left-3 z-10">
                <span className="text-[9px] font-mono text-[#668CFF] bg-[#050608]/90 px-2 py-0.5 rounded border border-[#668CFF]/40">
                  SUB-SYSTEM 04
                </span>
              </div>
            </div>
            <div className="p-5 space-y-2 bg-[#090A0C]">
              <h4 className="text-base font-normal text-[#F4F4F0] m-0">
                Adjustable Strap &amp; Comfort Fit
              </h4>
              <p className="text-xs text-[#92969F] leading-relaxed m-0">
                Heavy-duty ballistic nylon webbing with breathable internal mesh padding. Ergonomically distributes actuator contact pressure across all waist circumferences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
