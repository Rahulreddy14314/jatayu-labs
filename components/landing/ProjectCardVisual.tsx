'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Compass, Activity, Brain, Sparkles, Radio, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Project } from '@/lib/projects';

interface ProjectCardVisualProps {
  project: Project;
  className?: string;
}

export function ProjectCardVisual({ project, className }: ProjectCardVisualProps) {
  const shouldReduceMotion = useReducedMotion();

  // Mapping authentic dark-graded photography per project
  const photographyConfig: Record<string, { url: string; alt: string }> = {
    sense: {
      url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85',
      alt: 'Macro hardware circuitry and tactile actuator workbench',
    },
    'bio-bus': {
      url: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=85',
      alt: 'Laboratory wetware electrophysiology culture dish',
    },
    'uploaded-intelligence': {
      url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85',
      alt: 'High-density optical computing server cluster and synaptic fibers',
    },
    skillsynth: {
      url: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1000&q=85',
      alt: 'Studio acoustic monitoring equipment and conversational DSP interface',
    },
  };

  const photo = photographyConfig[project.slug] || photographyConfig.sense;
  const badgeText = project.slug === 'sense' ? 'HARDWARE PROTOTYPE' : 'CONCEPTUAL VISUAL';

  return (
    <div className={cn("relative h-56 w-full overflow-hidden bg-[#050608] border-b border-[#292C33] group", className)}>
      {/* LAYER 1: AUTHENTIC PHOTOGRAPHY / REAL SENSE HARDWARE */}
      {project.slug === 'sense' ? (
        <>
          {/* Default Studio View: Top-Left Hero Waist Belt Crop */}
          <div
            className="absolute inset-0 bg-[url('/images/sense-hardware-grid.jpg')] bg-[length:162%_202%] bg-[position:0%_0%] bg-no-repeat transition-all duration-700 ease-out group-hover:opacity-0 group-hover:scale-105"
            style={{ filter: 'contrast(1.1) brightness(0.85)' }}
          />

          {/* Hover View: Top-Right Exploded Pod Teardown Crop */}
          <div
            className="absolute inset-0 bg-[url('/images/sense-hardware-grid.jpg')] bg-[length:265%_202%] bg-[position:100%_0%] bg-no-repeat opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
            style={{ filter: 'contrast(1.15) brightness(0.9)' }}
          />

          {/* Interactive HUD Overlay on Hover */}
          <div className="absolute top-3 left-3.5 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <span className="text-[8px] font-mono uppercase tracking-wider text-[#D4FF00] bg-[#050608]/90 px-2 py-0.5 rounded border border-[#668CFF]/40 shadow-lg flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-pulse" />
              ESP32 CONTROL UNIT // 4-DIR HAPTIC MODULES
            </span>
          </div>
        </>
      ) : (
        <img
          src={photo.url}
          alt={photo.alt}
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-[0.34] group-hover:scale-105 group-hover:brightness-[0.45] transition-all duration-700 ease-out"
          loading="lazy"
        />
      )}

      {/* Optical Electric Cobalt Vignette & Midnight Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-[#090A0C]/50 to-[#668CFF]/15 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#090A0C_92%)] pointer-events-none" />

      {/* Fine Coordinate Grid Overlay */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #668CFF 1px, transparent 1px), linear-gradient(to bottom, #668CFF 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* LAYER 2: LIVE ANIMATED SVG CAD & TELEMETRY OVERLAY */}
      <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
        {project.slug === 'sense' && <SenseCadOverlay shouldReduceMotion={shouldReduceMotion} />}
        {project.slug === 'bio-bus' && <BioBusCadOverlay shouldReduceMotion={shouldReduceMotion} />}
        {project.slug === 'uploaded-intelligence' && <UploadedIntelligenceCadOverlay shouldReduceMotion={shouldReduceMotion} />}
        {project.slug === 'skillsynth' && <SkillSynthCadOverlay shouldReduceMotion={shouldReduceMotion} />}
      </div>

      {/* LAYER 3: PERSISTENT CALLOUT BADGE & STATUS DOT */}
      <div className="absolute bottom-3 left-3.5 z-20 flex items-center gap-2">
        <span className="text-[9px] font-mono tracking-widest text-[#F4F4F0] px-2.5 py-1 rounded bg-[#090A0C]/90 backdrop-blur-md border border-[#292C33] shadow-md flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] shadow-[0_0_6px_#D4FF00]" />
          {badgeText}
        </span>
      </div>

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
// 1. SENSE CAD OVERLAY: 8-Node Haptic Waist Ring + Rotating Directional Vector
// =========================================================================
function SenseCadOverlay({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Top Telemetry Stamp */}
      <div className="absolute top-3 left-3.5 text-[8px] font-mono text-[#92969F] flex items-center gap-2">
        <span className="text-[#668CFF]">IMU: 6-AXIS LOCKED</span>
        <span>&middot;</span>
        <span className="text-[#D4FF00]">LRA_ARRAY: 185Hz</span>
      </div>

      {/* 8-Node Circular Tactile Array */}
      <div className="relative w-36 h-36 flex items-center justify-center">
        {/* Concentric Haptic Wave Rings */}
        <motion.div
          animate={shouldReduceMotion ? {} : { scale: [1, 1.25, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full border border-dashed border-[#668CFF]/50"
        />
        <div className="absolute inset-3 rounded-full border border-[#668CFF]/30" />
        <div className="absolute inset-7 rounded-full border border-[#292C33]" />

        {/* 8 Actuator Nodes */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const x = 54 * Math.sin(rad);
          const y = -54 * Math.cos(rad);
          const isNorth = deg === 0;

          return (
            <div
              key={deg}
              style={{ transform: `translate(${x}px, ${y}px)` }}
              className="absolute w-2 h-2 -ml-1 -mt-1 rounded-full flex items-center justify-center"
            >
              <div
                className={cn(
                  "w-2 h-2 rounded-full",
                  isNorth ? "bg-[#D4FF00] shadow-[0_0_8px_#D4FF00]" : "bg-[#668CFF] shadow-[0_0_5px_#668CFF]"
                )}
              />
            </div>
          );
        })}

        {/* Sweeping Directional Vector Needle */}
        <motion.div
          animate={shouldReduceMotion ? {} : { rotate: 360 }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          className="absolute w-24 h-24 flex items-center justify-center"
        >
          <div className="w-px h-12 bg-gradient-to-t from-transparent via-[#D4FF00] to-[#D4FF00] -translate-y-6" />
          <div className="absolute top-0 w-1.5 h-1.5 rounded-full bg-[#D4FF00] shadow-[0_0_8px_#D4FF00]" />
        </motion.div>

        {/* Center Compass Core */}
        <div className="w-7 h-7 rounded-full bg-[#050608]/90 border border-[#668CFF] flex items-center justify-center shadow-lg">
          <Compass className="w-3.5 h-3.5 text-[#668CFF]" />
        </div>
      </div>

      {/* Bottom Right Telemetry */}
      <div className="absolute bottom-3 right-3.5 text-[8px] font-mono text-[#668CFF] flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-ping" />
        <span>HEADING: 045&deg; [NE] &middot; LATENCY &lt;14.2ms</span>
      </div>
    </div>
  );
}

// =========================================================================
// 2. BIO-BUS CAD OVERLAY: 64-Channel MEA Grid + Oscilloscope Waveform
// =========================================================================
function BioBusCadOverlay({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6">
      {/* Top Telemetry */}
      <div className="absolute top-3 left-3.5 text-[8px] font-mono text-[#92969F] flex items-center gap-2">
        <span className="text-[#668CFF]">OI_BUS // 15µA STIM_ACTIVE</span>
        <span>&middot;</span>
        <span className="text-[#D4FF00]">30 kHz SAMPLING</span>
      </div>

      <div className="w-full max-w-[280px] space-y-2">
        {/* 64-Channel HD-MEA Microelectrode Array Dot Substrate */}
        <div className="grid grid-cols-16 gap-1 p-2 rounded-lg border border-[#292C33] bg-[#050608]/80 backdrop-blur-sm">
          {Array.from({ length: 32 }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "w-1.5 h-1.5 rounded-[1px] transition-colors",
                i % 9 === 0
                  ? "bg-[#D4FF00] shadow-[0_0_6px_#D4FF00] animate-pulse"
                  : i % 4 === 0
                  ? "bg-[#668CFF]"
                  : "bg-[#292C33]/60"
              )}
            />
          ))}
        </div>

        {/* Live Scrolling Action-Potential Oscilloscope Wave */}
        <div className="relative h-14 w-full rounded-lg border border-[#668CFF]/40 bg-[#050608]/90 overflow-hidden flex items-center px-2">
          <svg className="w-full h-10 text-[#668CFF]" viewBox="0 0 260 40" preserveAspectRatio="none">
            <motion.path
              d="M0 20 L25 20 L30 5 L35 35 L40 12 L45 26 L50 20 L100 20 L105 2 L110 38 L115 8 L120 28 L125 20 L180 20 L185 6 L190 34 L195 14 L200 20 L260 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              animate={shouldReduceMotion ? {} : { strokeDashoffset: [0, -100] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              strokeDasharray="6 3"
            />
          </svg>
          <div className="absolute top-1 right-2 text-[7px] font-mono text-[#D4FF00]">
            NOISE: &lt;2.4 µV RMS
          </div>
        </div>
      </div>

      {/* Bottom Right Telemetry */}
      <div className="absolute bottom-3 right-3.5 text-[8px] font-mono text-[#668CFF] flex items-center gap-1.5">
        <Activity className="w-3 h-3 text-[#D4FF00]" />
        <span>MEA CH-01 &ndash; CH-64 LIVE CAPTURE</span>
      </div>
    </div>
  );
}

// =========================================================================
// 3. UPLOADED INTELLIGENCE CAD OVERLAY: Dual-Hemisphere Synaptic Connectome
// =========================================================================
function UploadedIntelligenceCadOverlay({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Top Telemetry */}
      <div className="absolute top-3 left-3.5 text-[8px] font-mono text-[#92969F] flex items-center gap-2">
        <span className="text-[#668CFF]">CONNECTOME GRAPH // EPS-08</span>
        <span>&middot;</span>
        <span className="text-[#D4FF00]">ZERO BRAIN EMULATION</span>
      </div>

      {/* Synaptic Lattice Vector Assembly */}
      <div className="relative w-48 h-32 flex items-center justify-between px-3">
        {/* Left Cluster: Verified Episodic Schema */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-lg border border-[#668CFF] bg-[#050608]/90 flex items-center justify-center relative shadow-[0_0_15px_rgba(102,140,255,0.3)]">
            <Brain className="w-5 h-5 text-[#668CFF]" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#D4FF00]" />
          </div>
          <span className="text-[7px] font-mono text-[#668CFF] text-center">EPISODIC LATTICE</span>
        </div>

        {/* Center Moving Packet Pathways */}
        <div className="relative flex-1 h-12 mx-2 flex items-center justify-center">
          <div className="w-full h-px bg-gradient-to-r from-[#668CFF] via-[#D4FF00] to-[#668CFF]" />
          <motion.div
            animate={shouldReduceMotion ? {} : { x: [-35, 35, -35] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-2 h-2 rounded-full bg-[#D4FF00] shadow-[0_0_8px_#D4FF00]"
          />
          <div className="absolute -top-2.5 text-[7px] font-mono text-[#92969F]">
            CONTEXT MESH
          </div>
        </div>

        {/* Right Cluster: Cognitive Preservation Boundary */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-lg border border-dashed border-[#D4FF00]/80 bg-[#050608]/90 flex items-center justify-center shadow-[0_0_15px_rgba(212,255,0,0.25)]">
            <Sparkles className="w-5 h-5 text-[#D4FF00] animate-pulse" />
          </div>
          <span className="text-[7px] font-mono text-[#D4FF00] text-center">BOUNDARY PROTOCOL</span>
        </div>
      </div>

      {/* Bottom Right Telemetry */}
      <div className="absolute bottom-3 right-3.5 text-[8px] font-mono text-[#92969F]">
        STRUCTURAL MODEL &middot; <strong className="text-[#668CFF]">EMPIRICAL SCHEMA</strong>
      </div>
    </div>
  );
}

// =========================================================================
// 4. SKILLSYNTH CAD OVERLAY: 24-Bar Spectrum + Evaluative Radar Polygon
// =========================================================================
function SkillSynthCadOverlay({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  const barHeights = [35, 65, 45, 80, 55, 95, 40, 75, 60, 85, 30, 90, 50, 70, 85, 60, 40, 75, 90, 55, 35, 65, 80, 45];

  return (
    <div className="relative w-full h-full flex items-center justify-between px-6">
      {/* Top Telemetry */}
      <div className="absolute top-3 left-3.5 text-[8px] font-mono text-[#92969F] flex items-center gap-2">
        <span className="text-[#668CFF]">CADENCE: 138 WPM</span>
        <span>&middot;</span>
        <span className="text-[#D4FF00]">STAR ALIGNMENT: 94.2%</span>
      </div>

      {/* Left: 24-Bar Live Audio Cadence Frequency Spectrum */}
      <div className="flex items-end gap-1 h-20 w-36 px-2 py-1 rounded-lg border border-[#292C33] bg-[#050608]/85 backdrop-blur-sm">
        {barHeights.map((h, i) => (
          <motion.div
            key={i}
            animate={shouldReduceMotion ? { height: `${h * 0.7}%` } : { height: [`${h * 0.4}%`, `${h}%`, `${h * 0.5}%`] }}
            transition={{
              duration: 1.2 + (i % 5) * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i % 6) * 0.1,
            }}
            className="w-1 bg-[#668CFF] rounded-full"
            style={{
              backgroundColor: i % 4 === 0 ? '#D4FF00' : '#668CFF',
            }}
          />
        ))}
      </div>

      {/* Right: 4-Axis Communication Rubric Radar Polygon */}
      <div className="relative w-28 h-28 rounded-lg border border-[#668CFF]/30 bg-[#050608]/85 p-2 flex items-center justify-center">
        {/* Radar Crosshairs */}
        <div className="absolute inset-x-2 h-px bg-[#292C33]" />
        <div className="absolute inset-y-2 w-px bg-[#292C33]" />
        <div className="w-16 h-16 rounded-full border border-[#292C33]" />

        {/* Dynamic Morphing Radar Polyhedron */}
        <svg className="w-20 h-20 overflow-visible text-[#668CFF]" viewBox="0 0 100 100">
          <motion.polygon
            points="50,15 85,50 50,80 20,50"
            fill="rgba(102, 140, 255, 0.18)"
            stroke="#668CFF"
            strokeWidth="1.6"
            animate={
              shouldReduceMotion
                ? {}
                : {
                    points: [
                      "50,15 85,50 50,80 20,50",
                      "50,22 80,45 50,88 15,50",
                      "50,12 90,52 50,75 25,48",
                      "50,15 85,50 50,80 20,50",
                    ],
                  }
            }
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Vertex Peak Markers */}
          <circle cx="50" cy="15" r="2.5" fill="#D4FF00" />
          <circle cx="85" cy="50" r="2" fill="#668CFF" />
          <circle cx="50" cy="80" r="2" fill="#668CFF" />
          <circle cx="20" cy="50" r="2" fill="#D4FF00" />
        </svg>

        <span className="absolute top-1 text-[7px] font-mono text-[#D4FF00]">CLARITY</span>
        <span className="absolute bottom-1 text-[7px] font-mono text-[#92969F]">PACING</span>
      </div>

      {/* Bottom Right Telemetry */}
      <div className="absolute bottom-3 right-3.5 text-[8px] font-mono text-[#668CFF]">
        LATENCY: &lt;780ms &middot; <strong className="text-[#D4FF00]">REAL-TIME DSP</strong>
      </div>
    </div>
  );
}
