'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from 'motion/react';
import {
  Compass,
  RotateCw,
  Layers,
  Sparkles,
  Zap,
  Activity,
  Eye,
  Crosshair,
  Maximize2,
  Sliders,
  ShieldAlert
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Project3DScrollStageProps {
  slug: string;
  className?: string;
}

export function Project3DScrollStage({ slug, className }: Project3DScrollStageProps) {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  // Manual preset override mode
  const [manualMode, setManualMode] = useState<null | 'assembled' | 'exploded' | 'orbital'>(null);
  const [activeActuator, setActiveActuator] = useState<number>(0);
  const [hudReadout, setHudReadout] = useState({ yaw: -25, pitch: 18, state: 'ASSEMBLED' });

  // Scroll Tracking
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  // 3D Motion Mappings
  const scrollRotateY = useTransform(smoothProgress, [0, 0.33, 0.66, 1], [-25, 110, 245, 335]);
  const scrollRotateX = useTransform(smoothProgress, [0, 0.35, 0.7, 1], [18, 28, 52, 16]);
  const scrollExplodeZ = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], [0, 75, 95, 40, 0]);

  // Update HUD telemetry values
  useEffect(() => {
    const unsubscribeY = scrollRotateY.on('change', (latestY) => {
      if (manualMode) return;
      const curX = scrollRotateX.get();
      const curExp = scrollExplodeZ.get();
      setHudReadout({
        yaw: Math.round(latestY % 360),
        pitch: Math.round(curX),
        state: curExp > 35 ? 'EXPLODED_VIEW' : 'ASSEMBLED_ISOMETRIC',
      });
    });

    return () => {
      unsubscribeY();
    };
  }, [scrollRotateY, scrollRotateX, scrollExplodeZ, manualMode]);

  // Set manual preset angles
  const applyPreset = (preset: 'assembled' | 'exploded' | 'orbital') => {
    setManualMode(preset);
    if (preset === 'assembled') {
      setHudReadout({ yaw: -25, pitch: 18, state: 'ASSEMBLED_ISOMETRIC' });
    } else if (preset === 'exploded') {
      setHudReadout({ yaw: 110, pitch: 28, state: 'EXPLODED_VIEW' });
    } else {
      setHudReadout({ yaw: 270, pitch: 52, state: 'TOP_ORBITAL' });
    }
  };

  const resumeScrollSync = () => {
    setManualMode(null);
    setHudReadout({
      yaw: Math.round(scrollRotateY.get() % 360),
      pitch: Math.round(scrollRotateX.get()),
      state: scrollExplodeZ.get() > 35 ? 'EXPLODED_VIEW' : 'ASSEMBLED_ISOMETRIC',
    });
  };

  // Resolve active transform values
  const currentRotateX = manualMode === 'assembled' ? 18 : manualMode === 'exploded' ? 28 : manualMode === 'orbital' ? 52 : shouldReduceMotion ? 18 : scrollRotateX;
  const currentRotateY = manualMode === 'assembled' ? -25 : manualMode === 'exploded' ? 110 : manualMode === 'orbital' ? 270 : shouldReduceMotion ? -25 : scrollRotateY;
  const currentExplode = manualMode === 'assembled' ? 0 : manualMode === 'exploded' ? 85 : manualMode === 'orbital' ? 35 : shouldReduceMotion ? 0 : scrollExplodeZ;

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full rounded-2xl optical-glass border border-[rgba(244,244,240,0.1)] p-6 sm:p-7 overflow-hidden shadow-2xl flex flex-col justify-between select-none min-h-[460px] lg:min-h-[580px]",
        className
      )}
    >
      {/* Background Radial Light Leak */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-[#668CFF]/15 blur-[100px] pointer-events-none rounded-full" />

      {/* Grid Pattern Floor */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #668CFF 1px, transparent 1px), linear-gradient(to bottom, #668CFF 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Top HUD Telemetry Bar */}
      <div className="relative z-20 flex flex-wrap items-center justify-between gap-3 border-b border-[#292C33]/80 pb-4 text-[10px] font-mono">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#D4FF00] animate-pulse shadow-[0_0_8px_#D4FF00]" />
          <span className="text-[#F4F4F0] font-semibold tracking-wider">
            3D SPATIAL RIG // {slug.toUpperCase()}
          </span>
          <span className="text-[#92969F] hidden sm:inline">&middot; 60 FPS GPU PIPELINE</span>
        </div>

        <div className="flex items-center gap-2 text-[#92969F]">
          <span className="px-2 py-0.5 rounded bg-[#050608]/90 border border-[#292C33] text-[#F4F4F0]">
            YAW: <strong className="text-[#668CFF]">{hudReadout.yaw}&deg;</strong>
          </span>
          <span className="px-2 py-0.5 rounded bg-[#050608]/90 border border-[#292C33] text-[#F4F4F0]">
            PITCH: <strong className="text-[#668CFF]">{hudReadout.pitch}&deg;</strong>
          </span>
          <span className="hidden sm:inline px-2 py-0.5 rounded bg-[#050608]/90 border border-[#292C33] text-[#D4FF00]">
            {hudReadout.state}
          </span>
        </div>
      </div>

      {/* Center 3D Spatial Assembly Stage */}
      <div
        className="relative my-auto w-full h-[320px] sm:h-[380px] flex items-center justify-center pointer-events-auto"
        style={{
          perspective: 1400,
        }}
      >
        <motion.div
          style={{
            transformStyle: "preserve-3d",
            rotateX: currentRotateX,
            rotateY: currentRotateY,
          }}
          className="relative w-64 h-64 flex items-center justify-center transition-transform duration-100 ease-out"
        >
          {/* Dynamic 3D Models mapped by slug */}
          {slug === 'sense' && (
            <Sense3DAssembly
              explodeZ={currentExplode}
              activeActuator={activeActuator}
              setActiveActuator={setActiveActuator}
            />
          )}

          {slug === 'bio-bus' && (
            <BioBus3DAssembly explodeZ={currentExplode} />
          )}

          {slug === 'uploaded-intelligence' && (
            <UploadedIntelligence3DAssembly explodeZ={currentExplode} />
          )}

          {slug === 'skillsynth' && (
            <SkillSynth3DAssembly explodeZ={currentExplode} />
          )}
        </motion.div>
      </div>

      {/* Bottom Interactive HUD Toolbar */}
      <div className="relative z-20 pt-4 border-t border-[#292C33]/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] font-mono">
        {/* Preset Angle Buttons */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[#92969F] text-[10px] mr-1 hidden sm:inline">PRESETS:</span>
          <button
            type="button"
            onClick={() => applyPreset('assembled')}
            className={cn(
              "px-2.5 py-1 rounded-full border text-[10px] transition-all",
              manualMode === 'assembled'
                ? "bg-[#668CFF]/20 border-[#668CFF] text-[#F4F4F0]"
                : "border-[#292C33] bg-[#050608]/60 text-[#92969F] hover:text-[#F4F4F0] hover:border-[#668CFF]/50"
            )}
          >
            [01 // ASSEMBLED]
          </button>
          <button
            type="button"
            onClick={() => applyPreset('exploded')}
            className={cn(
              "px-2.5 py-1 rounded-full border text-[10px] transition-all",
              manualMode === 'exploded'
                ? "bg-[#D4FF00]/20 border-[#D4FF00] text-[#D4FF00]"
                : "border-[#292C33] bg-[#050608]/60 text-[#92969F] hover:text-[#F4F4F0] hover:border-[#D4FF00]/50"
            )}
          >
            [02 // EXPLODED]
          </button>
          <button
            type="button"
            onClick={() => applyPreset('orbital')}
            className={cn(
              "px-2.5 py-1 rounded-full border text-[10px] transition-all",
              manualMode === 'orbital'
                ? "bg-[#668CFF]/20 border-[#668CFF] text-[#F4F4F0]"
                : "border-[#292C33] bg-[#050608]/60 text-[#92969F] hover:text-[#F4F4F0] hover:border-[#668CFF]/50"
            )}
          >
            [03 // ORBITAL]
          </button>

          {manualMode && (
            <button
              type="button"
              onClick={resumeScrollSync}
              className="px-2 py-1 rounded-full border border-[#D4FF00]/50 bg-[#D4FF00]/10 text-[#D4FF00] text-[10px] font-semibold flex items-center gap-1 animate-pulse"
            >
              <RotateCw className="w-3 h-3" />
              <span>SYNC SCROLL</span>
            </button>
          )}
        </div>

        {/* Scroll status hint */}
        <div className="text-[10px] text-[#92969F] flex items-center gap-1.5">
          <Compass className="w-3 h-3 text-[#668CFF]" />
          <span>SCROLL PAGE TO REVOLVE &middot; 360&deg; YAW</span>
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// 1. PROJECT SENSE: 3D WAIST-WORN HAPTIC BELT, IMU & BLE BRIDGE
// =========================================================================
function Sense3DAssembly({
  explodeZ,
  activeActuator,
  setActiveActuator,
}: {
  explodeZ: any;
  activeActuator: number;
  setActiveActuator: (idx: number) => void;
}) {
  const directions = ['000° [N]', '045° [NE]', '090° [E]', '135° [SE]', '180° [S]', '225° [SW]', '270° [W]', '315° [NW]'];

  return (
    <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
      {/* LAYER 1: OUTER 3D TACTILE BELT & 8 LRA ACTUATOR PODS */}
      <motion.div
        style={{
          transformStyle: 'preserve-3d',
          translateZ: 0,
        }}
        className="absolute inset-0 flex items-center justify-center pointer-events-auto"
      >
        {/* Belt Torus Wireframe */}
        <div
          className="w-56 h-56 rounded-full border-2 border-dashed border-[#668CFF]/30 flex items-center justify-center shadow-[0_0_35px_rgba(102,140,255,0.15)]"
          style={{ transform: 'rotateX(80deg)' }}
        />

        {/* 8 Vibrotactile Actuator Pods arranged in a 3D circle */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => {
          const rad = (angle * Math.PI) / 180;
          const radius = 110;
          const x = Math.round(radius * Math.sin(rad));
          const z = Math.round(-radius * Math.cos(rad));
          const isActive = activeActuator === idx;

          return (
            <motion.div
              key={angle}
              onClick={() => setActiveActuator(idx)}
              style={{
                transform: `translate3d(${x}px, 0px, ${z}px) rotateY(${angle}deg)`,
                transformStyle: 'preserve-3d',
              }}
              className="absolute cursor-pointer group"
            >
              {/* Actuator Pod Chassis */}
              <div
                className={cn(
                  "w-7 h-9 rounded-md border flex flex-col items-center justify-center transition-all duration-200",
                  isActive
                    ? "bg-[#D4FF00] border-[#D4FF00] text-[#050608] shadow-[0_0_20px_#D4FF00] scale-110"
                    : "bg-[#090A0C]/90 border-[#668CFF]/50 text-[#668CFF] hover:border-[#D4FF00] hover:scale-105"
                )}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-current mb-0.5 animate-pulse" />
                <span className="text-[7px] font-mono font-bold leading-none">{idx + 1}</span>
              </div>

              {/* Callout Tag on Active */}
              {isActive && (
                <div
                  style={{ transform: 'translateY(-24px) translateZ(10px)' }}
                  className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap px-1.5 py-0.5 rounded bg-[#050608] border border-[#D4FF00] text-[#D4FF00] text-[8px] font-mono shadow-md"
                >
                  {directions[idx]}
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* LAYER 2: MIDDLE IMU GYRO CORE (Separates forward on explode) */}
      <motion.div
        style={{
          transformStyle: 'preserve-3d',
          translateZ: explodeZ,
        }}
        className="absolute w-36 h-36 rounded-full border border-[#D4FF00]/60 flex items-center justify-center bg-[#050608]/85 backdrop-blur-md shadow-[0_0_25px_rgba(212,255,0,0.2)]"
      >
        {/* Gimbal orientation rings */}
        <div className="absolute inset-1.5 rounded-full border border-dashed border-[#D4FF00]/30 animate-spin" style={{ animationDuration: '24s' }} />
        <div className="w-20 h-20 rounded-full border border-[#668CFF]/50 flex items-center justify-center">
          <Compass className="w-6 h-6 text-[#D4FF00] animate-pulse" />
        </div>

        {/* Floating Callout Label */}
        <motion.div
          style={{ transform: 'translateY(-65px) translateZ(20px)' }}
          className="absolute whitespace-nowrap px-2.5 py-1 rounded-full bg-[#050608]/95 border border-[#D4FF00] text-[#D4FF00] text-[9px] font-mono shadow-lg flex items-center gap-1.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-pulse" />
          <span>MIDDLE LAYER: 6-AXIS IMU GYROSCOPE</span>
        </motion.div>
      </motion.div>

      {/* LAYER 3: INNER BLE 5.3 & MCU BRIDGE PCB (Separates backward on explode) */}
      <motion.div
        style={{
          transformStyle: 'preserve-3d',
          translateZ: useTransform(explodeZ, (z: number) => -z),
        }}
        className="absolute w-44 h-44 rounded-xl border border-[#668CFF]/50 bg-[#090A0C]/90 p-3 shadow-[0_0_30px_rgba(37,84,255,0.25)] flex flex-col justify-between"
      >
        <div className="flex items-center justify-between text-[8px] font-mono text-[#668CFF]">
          <span>BLE 5.3 TELEMETRY BRIDGE</span>
          <span className="text-[#D4FF00]">&lt;14.2ms</span>
        </div>

        {/* Microcontroller traces */}
        <div className="h-20 w-full rounded border border-[#292C33] bg-[#050608] p-2 grid grid-cols-3 gap-1">
          <div className="rounded border border-[#668CFF]/30 bg-[#668CFF]/10 p-1 flex flex-col items-center justify-center">
            <Zap className="w-3 h-3 text-[#668CFF]" />
            <span className="text-[7px] font-mono text-[#92969F]">RF MCU</span>
          </div>
          <div className="rounded border border-[#668CFF]/30 bg-[#668CFF]/10 p-1 flex flex-col items-center justify-center">
            <Activity className="w-3 h-3 text-[#D4FF00]" />
            <span className="text-[7px] font-mono text-[#92969F]">LRA PWM</span>
          </div>
          <div className="rounded border border-[#668CFF]/30 bg-[#668CFF]/10 p-1 flex flex-col items-center justify-center">
            <Crosshair className="w-3 h-3 text-[#668CFF]" />
            <span className="text-[7px] font-mono text-[#92969F]">AHRS</span>
          </div>
        </div>

        {/* Floating Callout Label */}
        <motion.div
          style={{ transform: 'translateY(60px) translateZ(20px)' }}
          className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-full bg-[#050608]/95 border border-[#668CFF] text-[#668CFF] text-[9px] font-mono shadow-lg flex items-center gap-1.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#668CFF]" />
          <span>INNER CORE: NRF5340 DUAL-CORE PCB</span>
        </motion.div>
      </motion.div>
    </div>
  );
}

// =========================================================================
// 2. BIO-BUS: 3D ORGANOID WETWARE-TO-SILICON SUBSTRATE CUBE
// =========================================================================
function BioBus3DAssembly({ explodeZ }: { explodeZ: any }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
      {/* LAYER 1: TOP BIOLUMINESCENT NEURAL ORGANOID CHAMBER (Separates upward) */}
      <motion.div
        style={{
          transformStyle: 'preserve-3d',
          translateY: useTransform(explodeZ, (z: number) => -z * 0.9),
        }}
        className="absolute w-44 h-44 rounded-2xl border border-[#668CFF]/60 bg-gradient-to-b from-[#668CFF]/20 to-[#050608]/90 backdrop-blur-md p-3 flex flex-col items-center justify-center shadow-[0_0_35px_rgba(102,140,255,0.25)]"
      >
        {/* 3D Neural Organoid Spherical Colony */}
        <div className="relative w-24 h-24 rounded-full border border-dashed border-[#D4FF00]/50 flex items-center justify-center animate-pulse">
          <div className="w-16 h-16 rounded-full bg-[#668CFF]/30 border border-[#668CFF] flex items-center justify-center shadow-[0_0_20px_#668CFF]">
            <div className="w-8 h-8 rounded-full bg-[#D4FF00] shadow-[0_0_15px_#D4FF00] animate-ping" />
          </div>
        </div>

        {/* Floating Callout Label */}
        <div
          style={{ transform: 'translateY(-75px) translateZ(25px)' }}
          className="absolute whitespace-nowrap px-2.5 py-1 rounded-full bg-[#050608]/95 border border-[#668CFF] text-[#668CFF] text-[9px] font-mono shadow-md flex items-center gap-1.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-pulse" />
          <span>TOP: 3D NEURAL ORGANOID TISSUE</span>
        </div>
      </motion.div>

      {/* LAYER 2: MIDDLE 64-CHANNEL HD-MEA SUBSTRATE GRID */}
      <motion.div
        style={{
          transformStyle: 'preserve-3d',
          translateZ: 0,
        }}
        className="absolute w-48 h-48 rounded-xl border-2 border-[#D4FF00]/70 bg-[#090A0C]/90 p-4 shadow-[0_0_40px_rgba(212,255,0,0.25)] flex flex-col justify-between"
      >
        <div className="flex items-center justify-between text-[8px] font-mono text-[#D4FF00]">
          <span>64-CHANNEL HD-MEA</span>
          <span>Pt-BLACK NODES</span>
        </div>

        {/* 8x8 Grid of Microelectrodes */}
        <div className="grid grid-cols-8 gap-1 p-2 rounded border border-[#292C33] bg-[#050608]">
          {Array.from({ length: 64 }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "w-2 h-2 rounded-[1px] transition-colors duration-300",
                i % 7 === 0
                  ? "bg-[#D4FF00] shadow-[0_0_6px_#D4FF00]"
                  : i % 3 === 0
                  ? "bg-[#668CFF]/60"
                  : "bg-[#292C33]"
              )}
            />
          ))}
        </div>

        <div className="text-[8px] font-mono text-[#92969F] text-center">
          BIDIRECTIONAL MICRO-STIMULATION BUS
        </div>
      </motion.div>

      {/* LAYER 3: BOTTOM SILICON ADC & DIGITAL BUS (Separates downward) */}
      <motion.div
        style={{
          transformStyle: 'preserve-3d',
          translateY: useTransform(explodeZ, (z: number) => z * 0.9),
        }}
        className="absolute w-48 h-36 rounded-xl border border-[#668CFF]/50 bg-[#050608]/95 p-3 flex flex-col justify-between shadow-[0_0_30px_rgba(37,84,255,0.2)]"
      >
        <div className="flex items-center justify-between text-[8px] font-mono text-[#668CFF]">
          <span>BIO-BUS DIGITIZER</span>
          <span className="text-[#D4FF00]">30 kHz SAMPLING</span>
        </div>

        {/* Waveform Output Display */}
        <div className="h-14 w-full rounded border border-[#292C33] bg-[#090A0C] p-2 flex items-center overflow-hidden">
          <svg className="w-full h-8 text-[#668CFF]" viewBox="0 0 200 40" preserveAspectRatio="none">
            <path
              d="M0 20 L20 20 L25 5 L30 35 L35 15 L40 25 L45 20 L90 20 L95 2 L100 38 L105 10 L110 30 L115 20 L160 20 L165 8 L170 32 L175 16 L180 20 L200 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            />
          </svg>
        </div>

        {/* Persistent Research Phase Badge */}
        <div className="flex items-center justify-between">
          <span className="px-2 py-0.5 rounded-full border border-[#D4FF00]/40 text-[#D4FF00] text-[8px] font-mono">
            RESEARCH PHASE
          </span>
          <span className="text-[8px] font-mono text-[#92969F]">NOISE: &lt;2.4 µV RMS</span>
        </div>

        {/* Floating Callout Label */}
        <div
          style={{ transform: 'translateY(65px) translateZ(25px)' }}
          className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-full bg-[#050608]/95 border border-[#668CFF] text-[#668CFF] text-[9px] font-mono shadow-md flex items-center gap-1.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#668CFF]" />
          <span>BOTTOM: CLOSED-LOOP SILICON FPGA BUS</span>
        </div>
      </motion.div>
    </div>
  );
}

// =========================================================================
// 3. UPLOADED INTELLIGENCE: 3D GYROSCOPIC CONNECTOME & SEMANTIC LATTICE
// =========================================================================
function UploadedIntelligence3DAssembly({ explodeZ }: { explodeZ: any }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
      {/* 3 CONCENTRIC 3D GIMBAL RINGS */}
      <div
        className="absolute w-56 h-56 rounded-full border-2 border-[#668CFF]/40 flex items-center justify-center"
        style={{ transform: 'rotateX(70deg)', transformStyle: 'preserve-3d' }}
      >
        <div className="absolute top-0 w-3 h-3 rounded-full bg-[#668CFF] shadow-[0_0_10px_#668CFF]" />
      </div>

      <div
        className="absolute w-44 h-44 rounded-full border-2 border-dashed border-[#D4FF00]/50 flex items-center justify-center"
        style={{ transform: 'rotateY(65deg)', transformStyle: 'preserve-3d' }}
      >
        <div className="absolute right-0 w-3 h-3 rounded-full bg-[#D4FF00] shadow-[0_0_10px_#D4FF00]" />
      </div>

      <div
        className="absolute w-36 h-36 rounded-full border border-[#668CFF]/60 flex items-center justify-center"
        style={{ transform: 'rotateZ(45deg)', transformStyle: 'preserve-3d' }}
      />

      {/* CORE 3D SEMANTIC LATTICE CUBE (Separates on Explode) */}
      <motion.div
        style={{
          transformStyle: 'preserve-3d',
          translateZ: explodeZ,
        }}
        className="absolute w-28 h-28 rounded-xl border border-[#668CFF] bg-[#090A0C]/90 backdrop-blur-md p-3 flex flex-col items-center justify-center shadow-[0_0_35px_rgba(102,140,255,0.35)]"
      >
        <div className="text-[8px] font-mono text-[#D4FF00] mb-1">EPISODIC LATTICE</div>
        <div className="w-12 h-12 rounded border border-dashed border-[#668CFF] flex items-center justify-center">
          <div className="w-6 h-6 rounded bg-[#668CFF]/20 border border-[#D4FF00] rotate-45 animate-spin" style={{ animationDuration: '18s' }} />
        </div>
        <span className="text-[7px] font-mono text-[#92969F] mt-1.5">STRUCTURAL MODEL</span>
      </motion.div>

      {/* Floating Exploration Boundary Tag */}
      <motion.div
        style={{
          transform: 'translateY(85px) translateZ(30px)',
        }}
        className="absolute whitespace-nowrap px-3 py-1 rounded-full bg-[#050608]/95 border border-[#D4FF00] text-[#D4FF00] text-[9px] font-mono shadow-md flex items-center gap-1.5"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00]" />
        <span>CONCEPT EXPLORATION // ZERO BRAIN EMULATION CLAIMED</span>
      </motion.div>
    </div>
  );
}

// =========================================================================
// 4. SKILLSYNTH: 3D HOLOGRAPHIC ACOUSTIC & CONVERSATIONAL ENGINE
// =========================================================================
function SkillSynth3DAssembly({ explodeZ }: { explodeZ: any }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
      {/* LAYER 1: VOCAL CADENCE FREQUENCY DISK (translateZ(-explodeZ)) */}
      <motion.div
        style={{
          transformStyle: 'preserve-3d',
          translateZ: useTransform(explodeZ, (z: number) => -z * 0.8),
        }}
        className="absolute w-52 h-52 rounded-full border border-dashed border-[#668CFF]/50 bg-[#050608]/70 flex items-center justify-center shadow-[0_0_30px_rgba(102,140,255,0.2)]"
      >
        <div className="w-36 h-36 rounded-full border border-[#668CFF]/30 flex items-center justify-center">
          <span className="text-[8px] font-mono text-[#668CFF]">138 WPM SPEECH CADENCE</span>
        </div>
      </motion.div>

      {/* LAYER 2: 4-AXIS EVALUATIVE RADAR POLYHEDRON (translateZ(0)) */}
      <motion.div
        style={{
          transformStyle: 'preserve-3d',
          translateZ: 0,
        }}
        className="absolute w-44 h-44 rounded-2xl border-2 border-[#D4FF00]/80 bg-[#090A0C]/90 p-4 shadow-[0_0_40px_rgba(212,255,0,0.3)] flex flex-col justify-between"
      >
        <div className="flex items-center justify-between text-[8px] font-mono text-[#D4FF00]">
          <span>EVALUATION CORE</span>
          <span>94.2% STAR ALIGNMENT</span>
        </div>

        {/* 4-Axis Metrics Cross */}
        <div className="relative w-full h-20 flex items-center justify-center">
          <div className="absolute w-full h-px bg-[#292C33]" />
          <div className="absolute h-full w-px bg-[#292C33]" />
          <div className="w-16 h-16 rounded-full border border-[#D4FF00]/40 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-[#D4FF00] animate-pulse" />
          </div>
        </div>

        <div className="grid grid-cols-2 text-[7px] font-mono text-[#92969F]">
          <div>FILLER: 1.1%</div>
          <div className="text-right text-[#668CFF]">LATENCY: &lt;780ms</div>
        </div>
      </motion.div>

      {/* LAYER 3: MULTI-MODAL STREAM LATTICE (translateZ(explodeZ)) */}
      <motion.div
        style={{
          transformStyle: 'preserve-3d',
          translateZ: useTransform(explodeZ, (z: number) => z * 0.8),
        }}
        className="absolute w-48 h-28 rounded-xl border border-[#668CFF]/50 bg-[#050608]/95 p-3 flex flex-col justify-between shadow-[0_0_30px_rgba(37,84,255,0.25)]"
      >
        <div className="flex items-center justify-between text-[8px] font-mono text-[#668CFF]">
          <span>WEBRTC ACOUSTIC INGEST</span>
          <span className="text-[#D4FF00]">LIVE</span>
        </div>

        <div className="flex items-center justify-around gap-1 h-10 px-2 rounded border border-[#292C33] bg-[#090A0C]">
          {[40, 75, 25, 90, 60, 85, 30, 95, 50, 70].map((h, idx) => (
            <div
              key={idx}
              className="w-1.5 bg-[#668CFF] rounded-full transition-all duration-300"
              style={{
                height: `${h}%`,
                backgroundColor: idx % 3 === 0 ? '#D4FF00' : '#668CFF',
              }}
            />
          ))}
        </div>

        <div className="text-[8px] font-mono text-[#92969F] text-center">
          OBJECTIVE SOFT-SKILLS BENCHMARK
        </div>
      </motion.div>
    </div>
  );
}
