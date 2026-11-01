'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { cn } from '@/lib/utils';
import type { Project } from '@/lib/projects';

interface ProjectCardVisualProps {
  project: Project;
  className?: string;
}

export function ProjectCardVisual({ project, className }: ProjectCardVisualProps) {
  const shouldReduceMotion = useReducedMotion();

  const badgeText =
    project.slug === 'sense'
      ? 'HARDWARE PROTOTYPE'
      : project.slug === 'bio-bus'
      ? 'WETWARE RESEARCH'
      : project.slug === 'uploaded-intelligence'
      ? 'COGNITIVE LATTICE'
      : 'CONVERSATIONAL AI';

  return (
    <div className={cn("relative h-56 w-full overflow-hidden bg-[#050608] border-b border-[#292C33] group", className)}>
      {/* Visual Canvas by Project */}
      {project.slug === 'sense' && <SenseVisual shouldReduceMotion={shouldReduceMotion} />}
      {project.slug === 'bio-bus' && <BioBusVisual shouldReduceMotion={shouldReduceMotion} />}
      {project.slug === 'uploaded-intelligence' && <UploadedIntelligenceVisual shouldReduceMotion={shouldReduceMotion} />}
      {project.slug === 'skillsynth' && <SkillSynthVisual shouldReduceMotion={shouldReduceMotion} />}

      {/* Optical Vignette & Edge Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.04] pointer-events-none rounded-t-2xl" />

      {/* Bottom-Left Clean Glass Pill */}
      <div className="absolute bottom-3 left-3.5 z-20 flex items-center gap-2">
        <span className="text-[9px] font-mono tracking-widest text-[#F4F4F0] px-2.5 py-1 rounded-full bg-[#090A0C]/90 backdrop-blur-md border border-[#292C33] shadow-md flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] shadow-[0_0_6px_#D4FF00]" />
          {badgeText}
        </span>
      </div>

      {/* Top-Right Optical Aura Indicator */}
      <div className="absolute top-3 right-3.5 z-20">
        <span
          className="block w-2.5 h-2.5 rounded-full animate-pulse shadow-md"
          style={{
            backgroundColor: project.auraColor,
            boxShadow: `0 0 12px ${project.auraColor}`,
          }}
        />
      </div>
    </div>
  );
}

// =========================================================================
// 1. PROJECT SENSE: Unobstructed Studio Hardware + Cobalt Light Sweep + Sonar Rings
// =========================================================================
function SenseVisual({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Studio View: Black Waist Belt & Haptic Pods */}
      <div
        className="absolute inset-0 bg-[url('/images/sense-hardware-grid.jpg')] bg-[length:160%_200%] bg-[position:0%_0%] bg-no-repeat transition-all duration-700 ease-out group-hover:opacity-0 group-hover:scale-105"
        style={{ filter: 'contrast(1.1) brightness(0.92)' }}
      />

      {/* Hover View: Teardown Exploded Actuator Pod */}
      <div
        className="absolute inset-0 bg-[url('/images/sense-hardware-grid.jpg')] bg-[length:265%_200%] bg-[position:100%_0%] bg-no-repeat opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
        style={{ filter: 'contrast(1.15) brightness(0.95)' }}
      />

      {/* Cinematic Deep Radial Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,#050608_95%)] pointer-events-none" />

      {/* Breathing Electric Cobalt Optical Light Sweep */}
      {!shouldReduceMotion && (
        <motion.div
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.5 }}
          className="absolute inset-y-0 w-1/2 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(102,140,255,0.18) 50%, rgba(212,255,0,0.12) 65%, transparent 100%)',
            transform: 'skewX(-20deg)',
          }}
        />
      )}

      {/* Concentric Delicate Sonar Rings Emanating From Actuator Center */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="relative w-40 h-40 flex items-center justify-center">
          {[0, 1, 2].map((idx) => (
            <motion.div
              key={idx}
              animate={
                shouldReduceMotion
                  ? { opacity: 0.2 }
                  : {
                      scale: [0.75, 1.45],
                      opacity: [0.55, 0],
                    }
              }
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: 'easeOut',
                delay: idx * 1.05,
              }}
              className="absolute inset-0 rounded-full border border-[#668CFF]/50"
            />
          ))}

          {/* Central Actuator Focus Node */}
          <div className="relative w-3 h-3 rounded-full bg-[#D4FF00] shadow-[0_0_12px_#D4FF00] flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#050608]" />
          </div>
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// 2. BIO-BUS: Glowing Bioluminescent Organoid Orb + Sinusoidal Silk Ribbons
// =========================================================================
function BioBusVisual({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  return (
    <div className="relative w-full h-full overflow-hidden flex items-center justify-center bg-[#050608]">
      {/* Background Deep Bioluminescent Radial Wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,84,255,0.2)_0%,rgba(5,6,8,0.95)_75%)] pointer-events-none" />

      {/* Central Glowing Bioluminescent Organoid Orb */}
      <div className="relative flex items-center justify-center">
        {/* Soft Outer Aura */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: [0.95, 1.1, 0.95],
                  opacity: [0.4, 0.7, 0.4],
                }
          }
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-44 h-44 rounded-full bg-[#668CFF]/25 blur-2xl pointer-events-none"
        />

        {/* Acid Lime Inner Bioreactive Core Glow */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: [1, 1.15, 1],
                  opacity: [0.6, 0.95, 0.6],
                }
          }
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute w-24 h-24 rounded-full bg-[#D4FF00]/20 blur-xl pointer-events-none"
        />

        {/* Crisp Multilayer Organoid Core */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: [0.98, 1.04, 0.98],
                  rotate: [0, 180, 360],
                }
          }
          transition={{
            scale: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
          }}
          className="relative w-24 h-24 rounded-full border border-[#668CFF]/50 bg-gradient-to-tr from-[#090A0C] via-[#101935] to-[#0A1226] flex items-center justify-center shadow-[0_0_35px_rgba(37,84,255,0.35)]"
        >
          {/* Inner Organoid Core Structure */}
          <div className="w-14 h-14 rounded-full border border-[#D4FF00]/40 bg-[#D4FF00]/10 flex items-center justify-center">
            <div className="w-5 h-5 rounded-full bg-[#D4FF00] shadow-[0_0_16px_#D4FF00]" />
          </div>
        </motion.div>
      </div>

      {/* 3 Overlapping Sinusoidal Silk Ribbons Undulating Across the Canvas */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 600 220">
        <defs>
          <linearGradient id="silkGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#668CFF" stopOpacity="0" />
            <stop offset="30%" stopColor="#668CFF" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#D4FF00" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#668CFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="silkGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2554FF" stopOpacity="0" />
            <stop offset="50%" stopColor="#668CFF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#2554FF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Ribbon 1 */}
        <motion.path
          d="M 0 110 Q 150 60, 300 110 T 600 110"
          fill="none"
          stroke="url(#silkGrad1)"
          strokeWidth="2.5"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  d: [
                    'M 0 110 Q 150 60, 300 110 T 600 110',
                    'M 0 110 Q 150 160, 300 110 T 600 110',
                    'M 0 110 Q 150 60, 300 110 T 600 110',
                  ],
                }
          }
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Ribbon 2 (Higher Frequency) */}
        <motion.path
          d="M 0 110 Q 150 150, 300 110 T 600 110"
          fill="none"
          stroke="url(#silkGrad2)"
          strokeWidth="1.8"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  d: [
                    'M 0 110 Q 150 150, 300 110 T 600 110',
                    'M 0 110 Q 150 70, 300 110 T 600 110',
                    'M 0 110 Q 150 150, 300 110 T 600 110',
                  ],
                }
          }
          transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        />

        {/* Ribbon 3 (Subtle Accent) */}
        <motion.path
          d="M 0 130 C 180 80, 420 180, 600 130"
          fill="none"
          stroke="rgba(212,255,0,0.3)"
          strokeWidth="1.2"
          strokeDasharray="4 6"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  d: [
                    'M 0 130 C 180 80, 420 180, 600 130',
                    'M 0 130 C 180 180, 420 80, 600 130',
                    'M 0 130 C 180 80, 420 180, 600 130',
                  ],
                }
          }
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
}

// =========================================================================
// 3. UPLOADED INTELLIGENCE: 3D Gyroscopic Memory Constellation
// =========================================================================
function UploadedIntelligenceVisual({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  return (
    <div className="relative w-full h-full overflow-hidden flex items-center justify-center bg-[#050608]">
      {/* Deep Violet / Cobalt Ambient Wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(102,140,255,0.15)_0%,rgba(5,6,8,0.95)_75%)] pointer-events-none" />

      {/* 3D Gyroscopic Orbit Assembly */}
      <div className="relative w-52 h-44 flex items-center justify-center [perspective:800px]">
        {/* Central Cognitive Core Singularity */}
        <div className="relative z-10 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#668CFF] to-[#090A0C] border border-[#668CFF] flex items-center justify-center shadow-[0_0_24px_rgba(102,140,255,0.5)]">
            <motion.div
              animate={shouldReduceMotion ? {} : { scale: [0.8, 1.2, 0.8], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-4 h-4 rounded-full bg-[#D4FF00] shadow-[0_0_12px_#D4FF00]"
            />
          </div>
        </div>

        {/* Orbit Ring 1 (Tilted +28deg) */}
        <motion.div
          animate={shouldReduceMotion ? {} : { rotateZ: 360 }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
          className="absolute w-44 h-24 rounded-full border border-[#668CFF]/40 shadow-[0_0_15px_rgba(102,140,255,0.15)] flex items-center justify-center"
          style={{ transform: 'rotateX(62deg) rotateY(28deg)' }}
        >
          {/* Orbiting Memory Node A */}
          <div className="absolute -left-1.5 w-3 h-3 rounded-full bg-[#668CFF] shadow-[0_0_8px_#668CFF] flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-white" />
          </div>
          {/* Orbiting Memory Node B */}
          <div className="absolute -right-1.5 w-3 h-3 rounded-full bg-[#D4FF00] shadow-[0_0_8px_#D4FF00] flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-[#050608]" />
          </div>
        </motion.div>

        {/* Orbit Ring 2 (Tilted -28deg) */}
        <motion.div
          animate={shouldReduceMotion ? {} : { rotateZ: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute w-44 h-24 rounded-full border border-dashed border-[#D4FF00]/45 flex items-center justify-center"
          style={{ transform: 'rotateX(62deg) rotateY(-28deg)' }}
        >
          {/* Orbiting Memory Node C */}
          <div className="absolute -top-1.5 w-2.5 h-2.5 rounded-full bg-[#D4FF00] shadow-[0_0_8px_#D4FF00]" />
          {/* Orbiting Memory Node D */}
          <div className="absolute -bottom-1.5 w-2.5 h-2.5 rounded-full bg-[#668CFF] shadow-[0_0_8px_#668CFF]" />
        </motion.div>

        {/* Synaptic Light Bridge Lines Connecting Nodes */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 208 176">
          <motion.line
            x1="40"
            y1="50"
            x2="168"
            y2="126"
            stroke="#668CFF"
            strokeWidth="1"
            strokeDasharray="3 3"
            opacity="0.3"
            animate={shouldReduceMotion ? {} : { strokeDashoffset: [0, -24] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
          <motion.line
            x1="168"
            y1="50"
            x2="40"
            y2="126"
            stroke="#D4FF00"
            strokeWidth="1"
            strokeDasharray="3 3"
            opacity="0.3"
            animate={shouldReduceMotion ? {} : { strokeDashoffset: [0, 24] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
        </svg>
      </div>
    </div>
  );
}

// =========================================================================
// 4. SKILLSYNTH: Translucent 4-Layer Harmonic Voice Wave + Acid Lime Crest
// =========================================================================
function SkillSynthVisual({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  return (
    <div className="relative w-full h-full overflow-hidden flex items-center justify-center bg-[#050608]">
      {/* Deep Cobalt Background Halo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,84,255,0.18)_0%,rgba(5,6,8,0.95)_80%)] pointer-events-none" />

      {/* 4-Layer Harmonic Voice Waveforms */}
      <svg
        className="w-full h-40 pointer-events-none px-2"
        viewBox="0 0 500 160"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="harmonicsFill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#668CFF" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#668CFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="harmonicsFill2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2554FF" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#2554FF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Harmonic Layer 1: Background Fluid Swell */}
        <motion.path
          d="M 0 110 Q 125 40, 250 110 T 500 110 L 500 160 L 0 160 Z"
          fill="url(#harmonicsFill2)"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  d: [
                    'M 0 110 Q 125 40, 250 110 T 500 110 L 500 160 L 0 160 Z',
                    'M 0 110 Q 125 140, 250 110 T 500 110 L 500 160 L 0 160 Z',
                    'M 0 110 Q 125 40, 250 110 T 500 110 L 500 160 L 0 160 Z',
                  ],
                }
          }
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Harmonic Layer 2: Mid-Tone Cadence */}
        <motion.path
          d="M 0 100 Q 125 150, 250 100 T 500 100 L 500 160 L 0 160 Z"
          fill="url(#harmonicsFill)"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  d: [
                    'M 0 100 Q 125 150, 250 100 T 500 100 L 500 160 L 0 160 Z',
                    'M 0 100 Q 125 50, 250 100 T 500 100 L 500 160 L 0 160 Z',
                    'M 0 100 Q 125 150, 250 100 T 500 100 L 500 160 L 0 160 Z',
                  ],
                }
          }
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />

        {/* Harmonic Layer 3: Electric Cobalt Crest Line */}
        <motion.path
          d="M 0 90 Q 70 30, 150 90 T 300 90 T 450 90 T 500 90"
          fill="none"
          stroke="#668CFF"
          strokeWidth="2"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  d: [
                    'M 0 90 Q 70 30, 150 90 T 300 90 T 450 90 T 500 90',
                    'M 0 90 Q 70 130, 150 90 T 300 90 T 450 90 T 500 90',
                    'M 0 90 Q 70 30, 150 90 T 300 90 T 450 90 T 500 90',
                  ],
                }
          }
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Harmonic Layer 4: Razor-Sharp Acid Lime Peak Harmonic Crest */}
        <motion.path
          d="M 0 80 Q 125 15, 250 80 T 500 80"
          fill="none"
          stroke="#D4FF00"
          strokeWidth="2.5"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  d: [
                    'M 0 80 Q 125 15, 250 80 T 500 80',
                    'M 0 80 Q 125 130, 250 80 T 500 80',
                    'M 0 80 Q 125 15, 250 80 T 500 80',
                  ],
                }
          }
          transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        />

        {/* Real-time Voice Formant Nodes on the Acid Lime Line */}
        <motion.circle
          cx="125"
          cy="48"
          r="3"
          fill="#D4FF00"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  cy: [48, 105, 48],
                }
          }
          transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        />
        <motion.circle
          cx="375"
          cy="112"
          r="3"
          fill="#D4FF00"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  cy: [112, 55, 112],
                }
          }
          transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        />
      </svg>
    </div>
  );
}
