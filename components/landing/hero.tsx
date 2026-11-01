'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion, useMotionValue, useSpring, useTransform } from 'motion/react';
import {
  ArrowUpRight,
  Compass,
  Dna,
  Brain,
  Sparkles,
  Zap,
  Activity,
  Radio,
  Sliders,
  CheckCircle2,
  Cpu,
  Layers,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import Container from './container';
import { cn } from "@/lib/utils";

type LabTab = 'sense' | 'biobus' | 'uploaded' | 'skills';

interface TabConfig {
  id: LabTab;
  tabLabel: string;
  projectName: string;
  domain: string;
  stage: string;
  auraColor: string;
  slug: string;
  icon: React.ElementType;
}

const TABS: TabConfig[] = [
  {
    id: 'sense',
    tabLabel: '01 / PROJECT SENSE',
    projectName: 'Project SENSE',
    domain: 'Wearable Haptic Interface',
    stage: 'Prototype direction',
    auraColor: '#668CFF',
    slug: '/projects/sense',
    icon: Compass,
  },
  {
    id: 'biobus',
    tabLabel: '02 / BIO-BUS [OI]',
    projectName: 'Bio-Bus (OI)',
    domain: 'Biological Computing',
    stage: 'Research phase',
    auraColor: '#2554FF',
    slug: '/projects/bio-bus',
    icon: Dna,
  },
  {
    id: 'uploaded',
    tabLabel: '03 / UPLOADED INTELLIGENCE',
    projectName: 'Uploaded Intelligence',
    domain: 'Cognitive Technology',
    stage: 'Concept exploration',
    auraColor: '#668CFF',
    slug: '/projects/uploaded-intelligence',
    icon: Brain,
  },
  {
    id: 'skills',
    tabLabel: '04 / SKILLSYNTH',
    projectName: 'SkillSynth',
    domain: 'Employability AI',
    stage: 'Product development',
    auraColor: '#2554FF',
    slug: '/projects/skillsynth',
    icon: Sparkles,
  },
];

const ACTUATOR_BEARINGS = [
  { label: '000° N', deg: 0, title: 'Forward Nav Vector', sub: 'Navigational True North' },
  { label: '045° NE', deg: 45, title: 'Northeast Sector', sub: 'Starboard Heading' },
  { label: '090° E', deg: 90, title: 'Lateral East', sub: 'Right Lateral Flank' },
  { label: '135° SE', deg: 135, title: 'Southeast Sector', sub: 'Starboard Aft' },
  { label: '180° S', deg: 180, title: 'Reversal South', sub: 'Direct Aft Recoil' },
  { label: '225° SW', deg: 225, title: 'Southwest Sector', sub: 'Port Aft' },
  { label: '270° W', deg: 270, title: 'Lateral West', sub: 'Left Lateral Flank' },
  { label: '315° NW', deg: 315, title: 'Northwest Sector', sub: 'Port Heading' },
];

const POD_TARGETS = [
  { deg: 0, label: '000° N', left: '44%', top: '52%', name: 'Front-Center Clasp' },
  { deg: 45, label: '045° NE', left: '65%', top: '48%', name: 'Front-Right Pod' },
  { deg: 90, label: '090° E', left: '83%', top: '38%', name: 'Right Lateral Pod' },
  { deg: 135, label: '135° SE', left: '72%', top: '25%', name: 'Rear-Right Pod' },
  { deg: 180, label: '180° S', left: '48%', top: '20%', name: 'Posterior Spine Pod' },
  { deg: 225, label: '225° SW', left: '26%', top: '25%', name: 'Rear-Left Pod' },
  { deg: 270, label: '270° W', left: '14%', top: '38%', name: 'Left Lateral Pod' },
  { deg: 315, label: '315° NW', left: '26%', top: '48%', name: 'Front-Left Pod' },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState<LabTab>('sense');
  const shouldReduceMotion = useReducedMotion();

  // 3D Perspective Tilt on Mouse Movement
  const consoleRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 120, damping: 25 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [3, -3]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-4, 4]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!consoleRef.current || shouldReduceMotion) return;
    const rect = consoleRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Tab 01 (SENSE) state
  const [activeActuator, setActiveActuator] = useState<number>(0);
  const [hapticFrequency, setHapticFrequency] = useState<'185Hz' | '240Hz'>('185Hz');
  const [senseViewMode, setSenseViewMode] = useState<'belt' | 'exploded' | 'neuroloop' | 'clasp' | 'module'>('belt');

  // Tab 02 (Bio-Bus) state
  const [isStimulating, setIsStimulating] = useState<boolean>(false);
  const [spikeCount, setSpikeCount] = useState<number>(1420);

  // Tab 03 (Uploaded) state
  const [activeMemoryNode, setActiveMemoryNode] = useState<string>('Episodic');

  // Tab 04 (SkillSynth) state
  const [synthMode, setSynthMode] = useState<'speaking' | 'arena'>('speaking');
  const [cadence] = useState<number>(138);

  const currentTab = TABS.find((t) => t.id === activeTab) ?? TABS[0];

  const handleStimulate = () => {
    setIsStimulating(true);
    setSpikeCount((prev) => prev + 24);
    setTimeout(() => setIsStimulating(false), 900);
  };

  // Keyboard navigation for tabs (1-4)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === '1') setActiveTab('sense');
      if (e.key === '2') setActiveTab('biobus');
      if (e.key === '3') setActiveTab('uploaded');
      if (e.key === '4') setActiveTab('skills');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="relative min-h-screen pt-36 sm:pt-44 pb-24 border-b border-[#292C33] overflow-hidden bg-[#050608]">
      {/* Top Cobalt Atmospheric Radial Light Dome */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] cobalt-atmosphere pointer-events-none" />

      {/* Dynamic Ambient Bioluminescent Light Leak */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] blur-[160px] pointer-events-none transition-colors duration-700 ease-out opacity-25 rounded-full"
        style={{
          backgroundColor: currentTab.auraColor,
        }}
      />

      {/* Background Architectural Grid Lines */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #292C33 1px, transparent 1px), linear-gradient(to bottom, #292C33 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <Container className="relative z-10 w-full">
        {/* =========================================================================
            1. HERO HEADER: MONUMENTAL TYPOGRAPHY & BULLETPROOF CTAS
           ========================================================================= */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Smoked Glass Eyebrow Pill */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full optical-glass border border-white/[0.1] shadow-lg"
          >
            <span className="w-2 h-2 rounded-[2px] bg-[#D4FF00] animate-pulse shadow-[0_0_8px_#D4FF00]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#92969F]">
              JATAYU LABS // FRONTIER INVENTION &amp; RESEARCH
            </span>
          </motion.div>

          {/* Monumental Headline */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <h1 className="text-5xl sm:text-7xl lg:text-[84px] font-heading font-medium tracking-[-0.045em] leading-[0.96] text-center max-w-4xl mx-auto">
              <span className="bg-gradient-to-b from-[#FFFFFF] via-[#F4F4F0] to-[#92969F] bg-clip-text text-transparent">
                We build
              </span>{' '}
              <br className="hidden sm:inline" />
              <em className="text-[#92969F] font-normal italic font-serif">what comes next.</em>
            </h1>
          </motion.div>

          {/* Subcopy */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <p className="max-w-2xl mx-auto text-[#92969F] text-base sm:text-lg leading-relaxed font-sans">
              From new ways to interact with the physical world to experiments in biological intelligence, we explore technologies that could expand human capability.
            </p>
          </motion.div>

          {/* Bulletproof High-Contrast CTAs */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-3"
          >
            {/* Primary CTA: Crisp Ivory Pill with Pitch-Black Text & SVG, hover shifts to Acid Lime */}
            <Link
              href="/projects"
              className="btn-primary group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 bg-[#F4F4F0] text-[#050608] hover:bg-[#D4FF00] hover:text-[#050608] shadow-[0_4px_24px_rgba(244,244,240,0.22)] hover:shadow-[0_0_35px_rgba(212,255,0,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4FF00] active:scale-95"
              style={{ backgroundColor: '#F4F4F0', color: '#050608' }}
            >
              <span className="font-bold text-[#050608] tracking-wider select-none" style={{ color: '#050608' }}>
                Explore projects
              </span>
              <ArrowUpRight
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#050608]"
                style={{ color: '#050608', stroke: '#050608', strokeWidth: 2.5 }}
              />
            </Link>

            {/* Secondary CTA: Smoked Optical Glass Pill */}
            <Link
              href="/journal"
              className="btn-secondary group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-xs font-medium uppercase tracking-wider border border-white/[0.12] bg-[#090A0C]/85 hover:border-[#668CFF] hover:bg-[#668CFF]/10 text-[#F4F4F0] hover:text-white transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.8)] hover:shadow-[0_0_30px_rgba(102,140,255,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#668CFF] active:scale-95"
            >
              <span className="text-[#F4F4F0] group-hover:text-white transition-colors tracking-wider select-none">
                Inside the lab
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#668CFF] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* =========================================================================
            2. VOLUMETRIC COBALT HORIZON ARC
           ========================================================================= */}
        <div className="w-[110%] max-w-6xl h-[240px] mx-auto -mb-40 rounded-[100%] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(37,84,255,0.32)_0%,rgba(102,140,255,0.08)_55%,transparent_100%)] blur-2xl pointer-events-none" />

        {/* =========================================================================
            3. RAYCAST-INSPIRED 3D MOUSE-PERSPECTIVE INSTRUMENT DECK
           ========================================================================= */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-14 max-w-5xl mx-auto"
          style={{ perspective: 1200 }}
        >
          {/* Double-Bezel Optical Outer Frame */}
          <motion.div
            ref={consoleRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={shouldReduceMotion ? {} : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="p-2 sm:p-2.5 rounded-[26px] bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-transparent border border-white/[0.09] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.95),0_0_70px_-15px_rgba(37,84,255,0.25)] backdrop-blur-2xl transition-shadow duration-500"
          >
            {/* Inner Core Chassis */}
            <div className="rounded-[20px] bg-[#07080B]/95 border border-[#292C33] overflow-hidden relative">
              {/* 1px Specular Laser Highlight Across Top Edge */}
              <div className="h-[1px] w-full absolute top-0 inset-x-0 bg-gradient-to-r from-transparent via-[#668CFF] to-transparent opacity-80" />

              {/* Aerospace Telemetry Header (Replacing macOS Traffic Lights) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between px-5 py-3.5 border-b border-[#292C33] bg-[#090A0C] gap-3">
                {/* Left: Telemetry Lock Badge */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-[#101217] border border-[#292C33]">
                    <span className="text-[10px] font-mono text-[#92969F]">[ + ]</span>
                    <span className="w-2 h-2 rounded-[2px] bg-[#D4FF00] shadow-[0_0_6px_#D4FF00] animate-pulse" />
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#F4F4F0] font-semibold">
                      SYS.TELEMETRY // JATAYU_LAB_DECK_v4.2
                    </span>
                  </div>
                </div>

                {/* Center: Live Optical Sync Waveform */}
                <div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-[#92969F]">
                  <span className="text-[#668CFF] flex items-center gap-1">
                    <Activity className="w-3.5 h-3.5 text-[#668CFF] animate-pulse" />
                    <span>SYNC: 120Hz</span>
                  </span>
                  <span className="text-[#292C33]">|</span>
                  <span className="text-emerald-400">OPTICAL_LOCK: TRUE</span>
                </div>

                {/* Right: Keyboard Shortcuts */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-[10px] font-mono text-[#92969F] px-2 py-1 rounded bg-[#101217] border border-[#292C33]">
                    <span className="text-[#D4FF00]">[ 1 - 4 ]</span>
                    <span>SWITCH VECTOR</span>
                  </div>
                  <Link
                    href="/projects"
                    className="flex items-center gap-1 text-[10px] font-mono text-[#92969F] hover:text-[#668CFF] px-2 py-1 rounded bg-[#101217] border border-[#292C33] transition-colors"
                  >
                    <span>[ ⌘K ] INDEX</span>
                  </Link>
                </div>
              </div>

              {/* 4 Interactive Switcher Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-[#292C33] bg-[#090A0C]/80 text-xs font-mono">
                {TABS.map((tab) => {
                  const isActive = activeTab === tab.id;
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={cn(
                        "p-3.5 flex items-center justify-between border-r border-b sm:border-b-0 border-[#292C33] last:border-r-0 transition-all text-left relative focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#668CFF] cursor-pointer",
                        isActive
                          ? "bg-[#101217] text-[#F4F4F0] font-semibold"
                          : "text-[#92969F] hover:text-[#F4F4F0] hover:bg-white/[0.02]"
                      )}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <Icon
                          className="w-3.5 h-3.5 shrink-0 transition-colors"
                          style={{ color: isActive ? tab.auraColor : undefined }}
                        />
                        <span className="truncate text-[11px]">{tab.tabLabel}</span>
                      </div>

                      {isActive && (
                        <motion.div
                          layoutId={shouldReduceMotion ? undefined : "hero-tab-beam"}
                          className="absolute bottom-0 left-0 right-0 h-[2px]"
                          style={{ backgroundColor: tab.auraColor }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Interactive Tab Workbenches */}
              <div className="p-6 sm:p-8 min-h-[420px] flex flex-col justify-between bg-gradient-to-b from-[#090A0C] via-[#0B0D11] to-[#07080B]">
                <AnimatePresence mode="wait">
                  {/* =========================================================================
                      TAB 01: PROJECT SENSE (True 3D Isometric Viewport + Precision Haptics)
                     ========================================================================= */}
                  {activeTab === 'sense' && (
                    <motion.div
                      key="sense"
                      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                    >
                      {/* Left Column Controls */}
                      <div className="lg:col-span-6 space-y-4">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#668CFF]">
                            WEARABLE HAPTIC INTERFACE // PROTOTYPE
                          </span>
                          <span className="px-2 py-0.5 rounded-full border border-[#668CFF]/40 text-[#668CFF] bg-[#668CFF]/10 text-[9px] font-mono uppercase tracking-wider">
                            Prototype direction
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-normal text-[#F4F4F0] m-0 font-heading">
                          Project SENSE: Subconscious Spatial Navigation
                        </h3>

                        <p className="text-xs text-[#92969F] leading-relaxed max-w-md m-0">
                          Subconscious direction-sensing tactile wave belt. Operating at low-latency 14.2ms BLE 5.3 with 8 ERM/LRA precision haptic nodes. Select any bearing below to trigger spatial actuation.
                        </p>

                        {/* Interactive Bearing Matrix (8 Headings) */}
                        <div className="space-y-2 pt-1">
                          <div className="text-[10px] font-mono text-[#92969F] uppercase tracking-wider flex items-center justify-between">
                            <span>BEARING VECTOR SELECTOR:</span>
                            <span className="text-[#D4FF00] font-semibold">
                              {ACTUATOR_BEARINGS[activeActuator].label} &bull; {ACTUATOR_BEARINGS[activeActuator].title}
                            </span>
                          </div>

                          <div className="grid grid-cols-4 gap-1.5">
                            {ACTUATOR_BEARINGS.map((bearing, idx) => {
                              const isSelected = activeActuator === idx;
                              return (
                                <button
                                  key={bearing.label}
                                  onClick={() => {
                                    setActiveActuator(idx);
                                    setSenseViewMode('belt');
                                  }}
                                  className={cn(
                                    "px-2 py-1.5 rounded text-[10px] font-mono border transition-all text-center cursor-pointer",
                                    isSelected
                                      ? "bg-[#D4FF00] text-[#050608] font-bold border-[#D4FF00] shadow-[0_0_12px_rgba(212,255,0,0.4)]"
                                      : "bg-[#101217] text-[#92969F] border-[#292C33] hover:border-[#668CFF] hover:text-[#F4F4F0]"
                                  )}
                                >
                                  {bearing.label}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Frequency Toggle & Telemetry */}
                        <div className="p-3.5 rounded-lg border border-[#292C33] bg-[#090A0C] space-y-2 text-xs font-mono">
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="text-[#92969F]">TACTILE FREQUENCY:</span>
                            <div className="flex items-center gap-1.5">
                              {(['185Hz', '240Hz'] as const).map((freq) => (
                                <button
                                  key={freq}
                                  onClick={() => setHapticFrequency(freq)}
                                  className={cn(
                                    "px-2 py-0.5 rounded text-[9px] font-mono cursor-pointer transition-colors",
                                    hapticFrequency === freq
                                      ? "bg-[#668CFF] text-[#050608] font-bold"
                                      : "bg-[#101217] text-[#92969F] border border-[#292C33]"
                                  )}
                                >
                                  {freq}
                                </button>
                              ))}
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="text-[#92969F]">PROPAGATION DELAY:</span>
                            <span className="text-emerald-400 font-semibold">&lt; 14.2 ms (BLE 5.3)</span>
                          </div>
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="text-[#92969F]">VECTOR LOCK:</span>
                            <span className="text-[#D4FF00]">RESONANT HAPTIC COUPLING</span>
                          </div>
                        </div>
                      </div>

                      {/* Right Column: Real Project SENSE Hardware Optical Viewport */}
                      <div className="lg:col-span-6 flex flex-col justify-between space-y-3">
                        {/* Hardware Viewport Frame */}
                        <div className="relative rounded-2xl border border-[#292C33] bg-[#07080B] overflow-hidden shadow-[inset_0_0_40px_rgba(0,0,0,0.85)] flex flex-col justify-between">
                          {/* Top Telemetry & View Switcher Bar */}
                          <div className="flex flex-wrap items-center justify-between gap-2 px-3.5 py-2 border-b border-[#292C33] bg-[#090A0C]/95 z-20">
                            <div className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-[2px] bg-[#D4FF00] shadow-[0_0_6px_#D4FF00] animate-pulse" />
                              <span className="text-[9px] font-mono uppercase tracking-wider text-[#F4F4F0] font-semibold">
                                HARDWARE OPTICAL VIEWPORT
                              </span>
                            </div>

                            {/* 3-Mode Micro-Pill Switcher */}
                            <div className="flex items-center gap-1 text-[9px] font-mono">
                              <button
                                type="button"
                                onClick={() => setSenseViewMode('belt')}
                                className={cn(
                                  "px-2 py-0.5 rounded transition-colors cursor-pointer",
                                  senseViewMode === 'belt'
                                    ? "bg-[#668CFF] text-[#050608] font-bold shadow-[0_0_8px_rgba(102,140,255,0.4)]"
                                    : "bg-[#101217] text-[#92969F] hover:text-[#F4F4F0] border border-[#292C33]"
                                )}
                              >
                                [ 01 // BELT HARDWARE ]
                              </button>
                              <button
                                type="button"
                                onClick={() => setSenseViewMode('exploded')}
                                className={cn(
                                  "px-2 py-0.5 rounded transition-colors cursor-pointer",
                                  senseViewMode === 'exploded'
                                    ? "bg-[#668CFF] text-[#050608] font-bold shadow-[0_0_8px_rgba(102,140,255,0.4)]"
                                    : "bg-[#101217] text-[#92969F] hover:text-[#F4F4F0] border border-[#292C33]"
                                )}
                              >
                                [ 02 // EXPLODED POD ]
                              </button>
                              <button
                                type="button"
                                onClick={() => setSenseViewMode('neuroloop')}
                                className={cn(
                                  "px-2 py-0.5 rounded transition-colors cursor-pointer",
                                  senseViewMode === 'neuroloop'
                                    ? "bg-[#668CFF] text-[#050608] font-bold shadow-[0_0_8px_rgba(102,140,255,0.4)]"
                                    : "bg-[#101217] text-[#92969F] hover:text-[#F4F4F0] border border-[#292C33]"
                                )}
                              >
                                [ 03 // NEUROLOOP ]
                              </button>
                            </div>
                          </div>

                          {/* Optical Display Window */}
                          <div className="relative h-[250px] sm:h-[280px] w-full bg-[#050608] overflow-hidden flex items-center justify-center">
                            {/* Fine Coordinate Reticle Grid Overlay */}
                            <div
                              className="absolute inset-0 opacity-15 pointer-events-none z-10"
                              style={{
                                backgroundImage: 'radial-gradient(circle at center, #668CFF 1px, transparent 1px)',
                                backgroundSize: '24px 24px',
                              }}
                            />

                            {/* VIEW: BELT HARDWARE with 8-Actuator Target Reticles */}
                            {senseViewMode === 'belt' && (
                              <motion.div
                                key="belt-view"
                                initial={shouldReduceMotion ? false : { opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.25 }}
                                className="relative w-full h-full bg-[url('/images/sense-hardware-grid.jpg')] bg-[length:162%_202%] bg-[position:0%_0%] bg-no-repeat"
                                style={{ filter: 'contrast(1.1) brightness(0.92)' }}
                              >
                                {/* Floating Active Target HUD Tag */}
                                <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#090A0C]/90 backdrop-blur-md border border-[#D4FF00]/40 shadow-lg text-[9px] font-mono text-[#D4FF00]">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-pulse" />
                                  <span>
                                    ACTIVE POD: [{POD_TARGETS[activeActuator].label}] // {hapticFrequency} LRA PULSE // ESP32_LOCKED
                                  </span>
                                </div>

                                {/* 8 Interactive Vibration Pod Target Overlays */}
                                {POD_TARGETS.map((target, idx) => {
                                  const isActive = activeActuator === idx;
                                  return (
                                    <div
                                      key={target.label}
                                      style={{ left: target.left, top: target.top }}
                                      className="absolute z-20"
                                    >
                                      {/* Active Reticle & Concentric Shockwave Pulse */}
                                      {isActive && (
                                        <div className="pointer-events-none">
                                          {/* Concentric Expanding Shockwave */}
                                          <span className="w-12 h-12 -ml-6 -mt-6 absolute rounded-full border border-[#D4FF00] animate-ping opacity-75" />
                                          <span className="w-8 h-8 -ml-4 -mt-4 absolute rounded-full bg-[#D4FF00]/25 animate-pulse" />
                                          {/* Target Reticle Frame */}
                                          <div className="w-8 h-8 -ml-4 -mt-4 absolute rounded-full border-2 border-[#D4FF00] shadow-[0_0_20px_#D4FF00] flex items-center justify-center">
                                            <div className="w-2.5 h-2.5 rounded-full bg-[#D4FF00] shadow-[0_0_6px_#D4FF00]" />
                                          </div>
                                        </div>
                                      )}

                                      {/* Clickable Bearing Hotspot */}
                                      <button
                                        type="button"
                                        onClick={() => {
                                          setActiveActuator(idx);
                                          setSenseViewMode('belt');
                                        }}
                                        aria-label={`Select Pod ${target.label}`}
                                        className={cn(
                                          "w-6 h-6 -ml-3 -mt-3 absolute rounded-full flex items-center justify-center text-[8px] font-mono font-bold transition-all cursor-pointer",
                                          isActive
                                            ? "opacity-0"
                                            : "border border-white/30 bg-[#090A0C]/70 hover:border-[#668CFF] hover:scale-125 text-[#F4F4F0]/90 shadow-md"
                                        )}
                                      >
                                        {idx + 1}
                                      </button>
                                    </div>
                                  );
                                })}
                              </motion.div>
                            )}

                            {/* VIEW: EXPLODED POD TEARDOWN */}
                            {senseViewMode === 'exploded' && (
                              <motion.div
                                key="exploded-view"
                                initial={shouldReduceMotion ? false : { opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.25 }}
                                className="relative w-full h-full bg-[url('/images/sense-hardware-grid.jpg')] bg-[length:265%_202%] bg-[position:100%_0%] bg-no-repeat"
                                style={{ filter: 'contrast(1.15) brightness(0.95)' }}
                              >
                                <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#090A0C]/90 backdrop-blur-md border border-[#668CFF]/40 shadow-lg text-[9px] font-mono text-[#668CFF]">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#668CFF] animate-pulse" />
                                  <span>5-PART TEARDOWN: LED CAP &rarr; LRA MOTOR &rarr; ISOLATION &rarr; ESP32 &rarr; LiPo</span>
                                </div>
                              </motion.div>
                            )}

                            {/* VIEW: NEUROLOOP CLOSED-LOOP ARCHITECTURE */}
                            {senseViewMode === 'neuroloop' && (
                              <motion.div
                                key="neuroloop-view"
                                initial={shouldReduceMotion ? false : { opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.25 }}
                                className="relative w-full h-full bg-[url('/images/sense-neuroloop.jpg')] bg-cover bg-center"
                              >
                                <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#090A0C]/90 backdrop-blur-md border border-[#668CFF]/40 shadow-lg text-[9px] font-mono text-[#668CFF]">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-pulse" />
                                  <span>CLOSED-LOOP: EEG &rarr; AI DSP &rarr; ROBOT CONTROL &rarr; HAPTIC FEEDBACK</span>
                                </div>
                              </motion.div>
                            )}

                            {/* VIEW: MAGNETIC CENTER CLASP */}
                            {senseViewMode === 'clasp' && (
                              <motion.div
                                key="clasp-view"
                                initial={shouldReduceMotion ? false : { opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.25 }}
                                className="relative w-full h-full bg-[url('/images/sense-hardware-grid.jpg')] bg-[length:320%_340%] bg-[position:15%_95%] bg-no-repeat"
                                style={{ filter: 'contrast(1.15) brightness(0.95)' }}
                              >
                                <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#090A0C]/90 backdrop-blur-md border border-[#D4FF00]/40 shadow-lg text-[9px] font-mono text-[#D4FF00]">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-pulse" />
                                  <span>MAGNETIC CENTER CLASP // QUICK-RELEASE RETENTION BAR</span>
                                </div>
                              </motion.div>
                            )}

                            {/* VIEW: 4-DIR TACTILE POD */}
                            {senseViewMode === 'module' && (
                              <motion.div
                                key="module-view"
                                initial={shouldReduceMotion ? false : { opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.25 }}
                                className="relative w-full h-full bg-[url('/images/sense-hardware-grid.jpg')] bg-[length:350%_350%] bg-[position:95%_65%] bg-no-repeat"
                                style={{ filter: 'contrast(1.15) brightness(0.95)' }}
                              >
                                <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#090A0C]/90 backdrop-blur-md border border-[#668CFF]/40 shadow-lg text-[9px] font-mono text-[#668CFF]">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#668CFF] animate-pulse" />
                                  <span>RADIAL TACTILE POD // COBALT LED STATUS ARC</span>
                                </div>
                              </motion.div>
                            )}
                          </div>
                        </div>

                        {/* 4-Thumbnail Optical Strip (Directly Below Main Photo) */}
                        <div className="grid grid-cols-4 gap-2 pt-1">
                          <button
                            type="button"
                            onClick={() => setSenseViewMode('belt')}
                            className={cn(
                              "group relative h-14 rounded-lg overflow-hidden border transition-all text-left flex flex-col justify-end p-1.5 cursor-pointer",
                              senseViewMode === 'belt'
                                ? "border-[#D4FF00] shadow-[0_0_12px_rgba(212,255,0,0.35)]"
                                : "border-[#292C33] hover:border-[#668CFF]"
                            )}
                          >
                            <div className="absolute inset-0 bg-[url('/images/sense-hardware-grid.jpg')] bg-[length:162%_202%] bg-[position:0%_0%] bg-no-repeat opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] to-transparent pointer-events-none" />
                            <span className="relative z-10 text-[8px] font-mono text-[#F4F4F0] truncate font-medium">
                              Assembled Belt
                            </span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setSenseViewMode('exploded')}
                            className={cn(
                              "group relative h-14 rounded-lg overflow-hidden border transition-all text-left flex flex-col justify-end p-1.5 cursor-pointer",
                              senseViewMode === 'exploded'
                                ? "border-[#D4FF00] shadow-[0_0_12px_rgba(212,255,0,0.35)]"
                                : "border-[#292C33] hover:border-[#668CFF]"
                            )}
                          >
                            <div className="absolute inset-0 bg-[url('/images/sense-hardware-grid.jpg')] bg-[length:265%_202%] bg-[position:100%_0%] bg-no-repeat opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] to-transparent pointer-events-none" />
                            <span className="relative z-10 text-[8px] font-mono text-[#F4F4F0] truncate font-medium">
                              Exploded Pod
                            </span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setSenseViewMode('clasp')}
                            className={cn(
                              "group relative h-14 rounded-lg overflow-hidden border transition-all text-left flex flex-col justify-end p-1.5 cursor-pointer",
                              senseViewMode === 'clasp'
                                ? "border-[#D4FF00] shadow-[0_0_12px_rgba(212,255,0,0.35)]"
                                : "border-[#292C33] hover:border-[#668CFF]"
                            )}
                          >
                            <div className="absolute inset-0 bg-[url('/images/sense-hardware-grid.jpg')] bg-[length:320%_340%] bg-[position:15%_95%] bg-no-repeat opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] to-transparent pointer-events-none" />
                            <span className="relative z-10 text-[8px] font-mono text-[#F4F4F0] truncate font-medium">
                              Magnetic Clasp
                            </span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setSenseViewMode('module')}
                            className={cn(
                              "group relative h-14 rounded-lg overflow-hidden border transition-all text-left flex flex-col justify-end p-1.5 cursor-pointer",
                              senseViewMode === 'module'
                                ? "border-[#D4FF00] shadow-[0_0_12px_rgba(212,255,0,0.35)]"
                                : "border-[#292C33] hover:border-[#668CFF]"
                            )}
                          >
                            <div className="absolute inset-0 bg-[url('/images/sense-hardware-grid.jpg')] bg-[length:350%_350%] bg-[position:95%_65%] bg-no-repeat opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] to-transparent pointer-events-none" />
                            <span className="relative z-10 text-[8px] font-mono text-[#F4F4F0] truncate font-medium">
                              Tactile Pod
                            </span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* =========================================================================
                      TAB 02: BIO-BUS [OI] (3D HD-MEA Array & Extracellular Spikes)
                     ========================================================================= */}
                  {activeTab === 'biobus' && (
                    <motion.div
                      key="biobus"
                      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                    >
                      <div className="lg:col-span-6 space-y-4">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#2554FF]">
                            BIOLOGICAL COMPUTING // BIO-BUS [OI]
                          </span>
                          <span className="px-2 py-0.5 rounded-full border border-[#2554FF]/40 text-[#668CFF] bg-[#2554FF]/10 text-[9px] font-mono uppercase tracking-wider">
                            Research phase
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-normal text-[#F4F4F0] m-0 font-heading">
                          In-Vitro Organoid Electrophysiology Bus
                        </h3>

                        <p className="text-xs text-[#92969F] leading-relaxed max-w-md m-0">
                          Standardized hardware bus for high-density Multielectrode Arrays (HD-MEAs). Delivers patterned 15µA micro-stimulation and captures extracellular spike trains in real-time.
                        </p>

                        <div className="flex flex-wrap items-center gap-3 pt-1">
                          <button
                            onClick={handleStimulate}
                            disabled={isStimulating}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D4FF00] text-[#050608] font-mono text-xs font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(212,255,0,0.35)] disabled:opacity-50 cursor-pointer"
                          >
                            <Zap className="w-3.5 h-3.5" />
                            <span>{isStimulating ? 'Stimulating Wetware...' : 'Inject 15µA Micro-Stimulus'}</span>
                          </button>
                          <span className="text-[10px] font-mono text-[#92969F]">
                            Cumulative Spikes: <strong className="text-[#D4FF00]">{spikeCount}</strong>
                          </span>
                        </div>

                        <div className="grid grid-cols-3 gap-2 p-3 rounded-lg border border-[#292C33] bg-[#090A0C] text-[10px] font-mono text-[#92969F]">
                          <div>
                            <span className="text-[#92969F]">BANDPASS:</span>
                            <div className="text-[#F4F4F0] font-semibold">300Hz - 3kHz</div>
                          </div>
                          <div>
                            <span className="text-[#92969F]">SAMPLING:</span>
                            <div className="text-[#F4F4F0] font-semibold">30 kHz</div>
                          </div>
                          <div>
                            <span className="text-[#92969F]">NOISE:</span>
                            <div className="text-emerald-400 font-semibold">&lt; 2.4 µV RMS</div>
                          </div>
                        </div>
                      </div>

                      {/* Right: 3D Biocomputing Stage & Oscilloscope Trace */}
                      <div className="lg:col-span-6 bg-[#090A0C] border border-[#292C33] rounded-xl p-5 space-y-4">
                        <div className="flex items-center justify-between text-[10px] font-mono">
                          <span className="text-[#668CFF] flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#D4FF00] animate-pulse shadow-[0_0_6px_#D4FF00]" />
                            <span>HD-MEA 64-CH SIGNAL CHAIN // LIVE TRACE</span>
                          </span>
                          <span className="text-[9px] font-mono text-[#92969F] px-1.5 py-0.5 rounded border border-[#292C33]">
                            Conceptual Visual
                          </span>
                        </div>

                        {/* Oscilloscope SVG Waveform */}
                        <div className="h-28 w-full relative flex items-center bg-[#07080B] rounded border border-[#292C33]/60 overflow-hidden px-2">
                          <svg className="w-full h-full text-[#668CFF]" viewBox="0 0 300 70" preserveAspectRatio="none">
                            <path
                              d={
                                isStimulating
                                  ? "M0 35 L20 35 L25 5 L30 65 L35 15 L40 50 L45 35 L90 35 L95 2 L100 68 L105 10 L110 55 L115 35 L170 35 L175 4 L180 66 L185 12 L190 48 L195 35 L240 35 L245 8 L250 62 L255 18 L260 45 L265 35 L300 35"
                                  : "M0 35 L40 35 L45 28 L50 42 L55 35 L110 35 L115 12 L120 58 L125 22 L130 35 L200 35 L205 25 L210 45 L215 35 L260 35 L265 18 L270 52 L275 35 L300 35"
                              }
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              className="transition-all duration-300"
                            />
                          </svg>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2554FF]/10 to-transparent pointer-events-none" />
                        </div>

                        <div className="flex items-center justify-between text-[10px] font-mono text-[#92969F]">
                          <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#668CFF]" />
                            <span>STIMULUS PROTOCOL: BIPHASIC VOLTAGE CLAMP</span>
                          </span>
                          <span className="text-[#D4FF00]">ORGANOID RESPONSE: VERIFIED</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* =========================================================================
                      TAB 03: UPLOADED INTELLIGENCE (3D Connectome Memory Lattice)
                     ========================================================================= */}
                  {activeTab === 'uploaded' && (
                    <motion.div
                      key="uploaded"
                      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                    >
                      <div className="lg:col-span-6 space-y-4">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#668CFF]">
                            COGNITIVE TECHNOLOGY // RESEARCH CONCEPT
                          </span>
                          <span className="px-2 py-0.5 rounded-full border border-[#668CFF]/40 text-[#668CFF] bg-[#668CFF]/10 text-[9px] font-mono uppercase tracking-wider">
                            Concept exploration
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-normal text-[#F4F4F0] m-0 font-heading">
                          Associative Episodic Memory Graph
                        </h3>

                        <p className="text-xs text-[#92969F] leading-relaxed max-w-md m-0">
                          Explores verifiable personal memory representations and semantic lattices—rigorously separating digital cognition modeling from speculative biological mind uploading.
                        </p>

                        <div className="space-y-2 pt-1">
                          <div className="text-[10px] font-mono text-[#92969F] uppercase">SELECT MEMORY VECTOR:</div>
                          <div className="flex flex-wrap gap-2">
                            {['Episodic', 'Somatic', 'Semantic', 'Temporal'].map((node) => (
                              <button
                                key={node}
                                onClick={() => setActiveMemoryNode(node)}
                                className={cn(
                                  "px-3 py-1.5 rounded text-xs font-mono transition-all cursor-pointer",
                                  activeMemoryNode === node
                                    ? "bg-[#668CFF] text-[#050608] font-bold shadow-[0_0_12px_rgba(102,140,255,0.4)]"
                                    : "bg-[#101217] border border-[#292C33] text-[#92969F] hover:text-[#F4F4F0]"
                                )}
                              >
                                {node} Node
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Guardrail Disclaimer */}
                        <div className="p-3 rounded border border-[#292C33] bg-[#090A0C] text-[10px] font-mono text-[#92969F] flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-amber-300">
                            <ShieldAlert className="w-3.5 h-3.5" />
                            <span>ZERO NEURAL REPLICATION CLAIMED</span>
                          </span>
                          <span className="text-[#668CFF]">STRUCTURAL ONTOLOGY</span>
                        </div>
                      </div>

                      {/* Right: Semantic Lattice Readout */}
                      <div className="lg:col-span-6 bg-[#090A0C] border border-[#292C33] rounded-xl p-5 space-y-3">
                        <div className="flex items-center justify-between text-[10px] font-mono">
                          <span className="text-[#668CFF]">SEMANTIC LATTICE READOUT</span>
                          <span className="text-[#D4FF00]">ACTIVE: {activeMemoryNode.toUpperCase()}</span>
                        </div>

                        <div className="p-4 rounded border border-[#292C33] bg-[#07080B] space-y-2 text-xs">
                          <div className="text-[11px] font-mono text-[#F4F4F0]">
                            Target Schema: <span className="text-[#668CFF]">{activeMemoryNode} Context Mesh</span>
                          </div>
                          <p className="text-[11px] text-[#92969F] leading-relaxed m-0">
                            {activeMemoryNode === 'Episodic' && 'Stores biographical event sequences, autobiographical anchors, and causality graphs.'}
                            {activeMemoryNode === 'Somatic' && 'Documents physical sensory-motor associations and visceral perceptual metadata.'}
                            {activeMemoryNode === 'Semantic' && 'Formal ontology mapping conceptual knowledge, entities, and multi-relational attributes.'}
                            {activeMemoryNode === 'Temporal' && 'Time-stamped delta log preserving decay rates, revision histories, and memory shifts.'}
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-[#92969F] pt-1">
                          <div className="p-2 rounded bg-[#101217] border border-[#292C33]">
                            <div>RETRIEVAL LATENCY</div>
                            <div className="text-emerald-400 font-bold mt-0.5">&lt; 38 ms</div>
                          </div>
                          <div className="p-2 rounded bg-[#101217] border border-[#292C33]">
                            <div>VERIFICATION AUDIT</div>
                            <div className="text-[#668CFF] font-bold mt-0.5">CRYPTOGRAPHIC SHARD</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* =========================================================================
                      TAB 04: SKILLSYNTH (Conversational Intelligence Engine)
                     ========================================================================= */}
                  {activeTab === 'skills' && (
                    <motion.div
                      key="skills"
                      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                    >
                      <div className="lg:col-span-6 space-y-4">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#668CFF]">
                            EMPLOYABILITY AI // PRODUCT DEVELOPMENT
                          </span>
                          <span className="px-2 py-0.5 rounded-full border border-[#2554FF]/40 text-[#668CFF] bg-[#2554FF]/10 text-[9px] font-mono uppercase tracking-wider">
                            Product development
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-normal text-[#F4F4F0] m-0 font-heading">
                          SkillSynth: Conversational Intelligence Engine
                        </h3>

                        <p className="text-xs text-[#92969F] leading-relaxed max-w-md m-0">
                          Multi-modal AI analyzing verbal cadence, response clarity, and structural coherence in real-time to build interview confidence without algorithmic bias.
                        </p>

                        <div className="space-y-2 pt-1">
                          <div className="text-[10px] font-mono text-[#92969F] uppercase">SIMULATION MODE:</div>
                          <div className="flex gap-2">
                            {(['speaking', 'arena'] as const).map((mode) => (
                              <button
                                key={mode}
                                onClick={() => setSynthMode(mode)}
                                className={cn(
                                  "px-3 py-1.5 rounded text-xs font-mono transition-all cursor-pointer",
                                  synthMode === mode
                                    ? "bg-[#668CFF] text-[#050608] font-bold shadow-[0_0_12px_rgba(102,140,255,0.4)]"
                                    : "bg-[#101217] border border-[#292C33] text-[#92969F] hover:text-[#F4F4F0]"
                                )}
                              >
                                {mode === 'speaking' ? 'Public Speaking Lab' : 'Group Discussion Arena'}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="pt-1">
                          <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F4F4F0] text-[#050608] hover:bg-[#D4FF00] font-mono text-xs font-semibold transition-all shadow-md"
                            style={{ color: '#050608' }}
                          >
                            <span style={{ color: '#050608' }}>Discuss an institutional pilot</span>
                            <ArrowUpRight className="w-3.5 h-3.5" style={{ color: '#050608', stroke: '#050608' }} />
                          </Link>
                        </div>
                      </div>

                      {/* Live Metric Readout Panel */}
                      <div className="lg:col-span-6 bg-[#090A0C] border border-[#292C33] rounded-xl p-5 space-y-3">
                        <div className="flex items-center justify-between text-[10px] font-mono">
                          <span className="text-[#668CFF]">VERIFIED CONVERSATIONAL RUBRIC</span>
                          <span className="text-emerald-400">ACTIVE SESSION</span>
                        </div>

                        <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                          <div className="p-3 rounded border border-[#292C33] bg-[#07080B]">
                            <div className="text-[10px] text-[#92969F]">SPEAKING CADENCE</div>
                            <div className="text-base font-bold text-[#F4F4F0] mt-1">{cadence} WPM</div>
                            <div className="text-[10px] text-emerald-400">Optimal Range</div>
                          </div>

                          <div className="p-3 rounded border border-[#292C33] bg-[#07080B]">
                            <div className="text-[10px] text-[#92969F]">STRUCTURAL CLARITY</div>
                            <div className="text-base font-bold text-[#D4FF00] mt-1">94.2%</div>
                            <div className="text-[10px] text-[#92969F]">STAR Method Alignment</div>
                          </div>

                          <div className="p-3 rounded border border-[#292C33] bg-[#07080B]">
                            <div className="text-[10px] text-[#92969F]">FILLER FREQUENCY</div>
                            <div className="text-base font-bold text-emerald-400 mt-1">1.1%</div>
                            <div className="text-[10px] text-[#92969F]">Low Hesitation</div>
                          </div>

                          <div className="p-3 rounded border border-[#292C33] bg-[#07080B]">
                            <div className="text-[10px] text-[#92969F]">RESPONSE LATENCY</div>
                            <div className="text-base font-bold text-[#668CFF] mt-1">&lt; 780 ms</div>
                            <div className="text-[10px] text-[#92969F]">Real-time Evaluation</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Console Footer Toolbar */}
                <div className="pt-6 mt-6 border-t border-[#292C33] flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-mono text-[#92969F]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: currentTab.auraColor }} />
                    <span>INSTRUMENT: {currentTab.projectName} &middot; {currentTab.domain}</span>
                  </div>

                  <Link
                    href={currentTab.slug}
                    className="inline-flex items-center gap-1.5 text-[#F4F4F0] hover:text-[#668CFF] transition-colors"
                  >
                    <span>Open Full Technical Specification</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Telemetry Strip */}
        <div className="mt-16 pt-8 border-t border-[#292C33]/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono uppercase tracking-widest text-[#92969F]">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] shadow-[0_0_6px_#D4FF00]" />
            <span>CORE VECTORS // 4 ACTIVE INITIATIVES</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/projects/sense" className="hover:text-[#668CFF] transition-colors">
              PROJECT SENSE
            </Link>
            <span>&middot;</span>
            <Link href="/projects/bio-bus" className="hover:text-[#668CFF] transition-colors">
              BIO-BUS [OI]
            </Link>
            <span>&middot;</span>
            <Link href="/projects/uploaded-intelligence" className="hover:text-[#668CFF] transition-colors">
              UPLOADED INTELLIGENCE
            </Link>
            <span>&middot;</span>
            <Link href="/projects/skillsynth" className="hover:text-[#668CFF] transition-colors">
              SKILLSYNTH
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
