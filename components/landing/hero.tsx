'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  ArrowUpRight,
  Compass,
  Dna,
  Brain,
  Sparkles,
  Activity,
  Zap,
  Radio,
  Sliders,
  CheckCircle2,
  AlertCircle,
  Command,
  Search
} from 'lucide-react';
import Container from './container';
import Heading from './heading';
import SubHeading from './subheading';
import { cn } from "@/lib/utils";

type LabTab = 'sense' | 'biobus' | 'uploaded' | 'skills';

interface TabConfig {
  id: LabTab;
  tabLabel: string;
  projectName: string;
  domain: string;
  stage: string;
  stageClass: string;
  auraColor: string;
  slug: string;
  icon: React.ElementType;
}

const TABS: TabConfig[] = [
  {
    id: 'sense',
    tabLabel: '[01] SENSE HAPTICS',
    projectName: 'Project SENSE',
    domain: 'Wearable Interface',
    stage: 'Prototype direction',
    stageClass: 'border-[#00F0FF]/40 text-[#00F0FF] bg-[#00F0FF]/10',
    auraColor: '#00F0FF',
    slug: '/projects/sense',
    icon: Compass,
  },
  {
    id: 'biobus',
    tabLabel: '[02] BIO-BUS / OI WETWARE',
    projectName: 'Bio-Bus (OI)',
    domain: 'Biological Computing',
    stage: 'Research phase',
    stageClass: 'border-[#10F5A0]/40 text-[#10F5A0] bg-[#10F5A0]/10',
    auraColor: '#10F5A0',
    slug: '/projects/bio-bus',
    icon: Dna,
  },
  {
    id: 'uploaded',
    tabLabel: '[03] UPLOADED COGNITION',
    projectName: 'Uploaded Intelligence',
    domain: 'Cognitive Technology',
    stage: 'Concept exploration',
    stageClass: 'border-[#B87BFF]/40 text-[#B87BFF] bg-[#B87BFF]/10',
    auraColor: '#B87BFF',
    slug: '/projects/uploaded-intelligence',
    icon: Brain,
  },
  {
    id: 'skills',
    tabLabel: '[04] SKILLSYNTHESIS AI',
    projectName: 'SkillSynthesis',
    domain: 'Employability AI',
    stage: 'Product development',
    stageClass: 'border-[#FF9E3B]/40 text-[#FF9E3B] bg-[#FF9E3B]/10',
    auraColor: '#FF9E3B',
    slug: '/projects/skillsynthesis',
    icon: Sparkles,
  },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState<LabTab>('sense');
  const [searchQuery, setSearchQuery] = useState('');
  const shouldReduceMotion = useReducedMotion();

  // Tab 1 (SENSE) state: Active actuator index
  const [activeActuator, setActiveActuator] = useState<number>(0);
  const [hapticIntensity, setHapticIntensity] = useState<number>(85);

  // Tab 2 (Bio-Bus) state: Stimulation firing state
  const [isStimulating, setIsStimulating] = useState<boolean>(false);
  const [spikeCount, setSpikeCount] = useState<number>(1420);

  // Tab 3 (Uploaded) state: Active semantic node
  const [activeMemoryNode, setActiveMemoryNode] = useState<string>('Episodic');

  // Tab 4 (SkillSynthesis) state: Live metric playback
  const [cadence, setCadence] = useState<number>(138);

  const currentTab = TABS.find((t) => t.id === activeTab) ?? TABS[0];

  const handleStimulate = () => {
    setIsStimulating(true);
    setSpikeCount((prev) => prev + 18);
    setTimeout(() => setIsStimulating(false), 900);
  };

  // Keyboard navigation for tabs
  const handleKeyDown = (e: React.KeyboardEvent) => {
    const currentIndex = TABS.findIndex((t) => t.id === activeTab);
    if (e.key === 'ArrowRight') {
      const nextIndex = (currentIndex + 1) % TABS.length;
      setActiveTab(TABS[nextIndex].id);
    } else if (e.key === 'ArrowLeft') {
      const prevIndex = (currentIndex - 1 + TABS.length) % TABS.length;
      setActiveTab(TABS[prevIndex].id);
    }
  };

  return (
    <section className="relative min-h-screen pt-32 pb-24 border-b border-[#292C33] overflow-hidden">
      {/* Dynamic Ambient Bioluminescent Light Leak */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] blur-[150px] pointer-events-none transition-colors duration-700 ease-out opacity-25 rounded-full"
        style={{
          backgroundColor: currentTab.auraColor,
        }}
      />

      {/* Background Architectural Grid Lines */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #292C33 1px, transparent 1px), linear-gradient(to bottom, #292C33 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <Container className="relative z-10 w-full">
        {/* Main Hero Header (Exact Brief Requirements) */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#292C33] bg-[#101217]/80 backdrop-blur-md"
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: currentTab.auraColor }}
            />
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#92969F]">
              JATAYU LABS
            </span>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <Heading as="h1" variant="big" className="text-[#F4F4F0] max-w-3xl mx-auto">
              We build <br className="hidden sm:inline" />
              <em className="text-[#92969F] font-normal italic font-serif">what comes next.</em>
            </Heading>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <SubHeading variant="big" className="max-w-2xl mx-auto text-[#92969F]">
              From new ways to interact with the physical world to experiments in biological intelligence, we explore technologies that could expand human capability.
            </SubHeading>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <Link
              href="/projects"
              className="btn-primary group px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#668CFF]"
            >
              <span className="text-[#090A0C] font-semibold">Explore projects</span>
              <ArrowUpRight className="w-4 h-4 text-[#090A0C] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/journal"
              className="btn-secondary group px-6 py-3 rounded-lg text-xs font-medium uppercase tracking-wider focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#668CFF]"
            >
              <span className="text-[#F4F4F0] group-hover:text-white transition-colors">Inside the lab</span>
              <ArrowUpRight className="w-4 h-4 text-[#668CFF] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* =========================================================================
            RAYCAST-STYLE INTERACTIVE "JATAYU LAB CONSOLE"
           ========================================================================= */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-14 max-w-4xl mx-auto"
        >
          <div
            className="metallic-border ambient-beam cryo-glass rounded-2xl overflow-hidden shadow-2xl transition-all duration-500"
            style={{
              ['--card-aura' as string]: currentTab.auraColor,
            }}
            tabIndex={0}
            onKeyDown={handleKeyDown}
          >
            {/* Console Titlebar with Command Filter */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between px-5 py-3 border-b border-[#292C33] bg-[#090A0C]/90 gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="h-4 w-px bg-[#292C33]" />
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#92969F] flex items-center gap-1.5">
                  <Command className="w-3.5 h-3.5 text-[#668CFF]" />
                  <span>JATAYU LAB CONSOLE // LIVE TELEMETRY DECK</span>
                </span>
              </div>

              {/* Mini Search & Key shortcut */}
              <div className="flex items-center gap-2">
                <div className="relative flex items-center">
                  <Search className="w-3 h-3 text-[#92969F] absolute left-2 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Filter instruments..."
                    className="bg-[#101217] border border-[#292C33] rounded-md pl-7 pr-3 py-1 text-[11px] font-mono text-[#F4F4F0] placeholder-[#92969F]/40 focus:outline-none focus:border-[#668CFF] w-40 sm:w-48 transition-all"
                  />
                </div>
                <kbd className="hidden sm:inline-block text-[9px] font-mono text-[#92969F] px-1.5 py-0.5 rounded bg-[#101217] border border-[#292C33]">
                  ← → TABS
                </kbd>
              </div>
            </div>

            {/* 4 Interactive Switcher Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-[#292C33] bg-[#090A0C]/60 text-xs font-mono">
              {TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "p-3.5 flex items-center justify-between border-r border-b sm:border-b-0 border-[#292C33] last:border-r-0 transition-all text-left relative focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#668CFF]",
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
            <div className="p-6 sm:p-8 min-h-[340px] flex flex-col justify-between bg-gradient-to-b from-[#101217]/90 to-[#090A0C]">
              <AnimatePresence mode="wait">
                {/* =========================================================================
                    TAB 01: SENSE HAPTICS (Interactive 8-node Directional Actuator Ring)
                   ========================================================================= */}
                {activeTab === 'sense' && (
                  <motion.div
                    key="sense"
                    initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                  >
                    <div className="md:col-span-7 space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#00F0FF]">
                          WEARABLE HAPTIC INTERFACE
                        </span>
                        <span className="px-2 py-0.5 rounded-full border border-[#00F0FF]/40 text-[#00F0FF] bg-[#00F0FF]/10 text-[9px] font-mono uppercase tracking-wider">
                          Prototype direction
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-normal text-[#F4F4F0] m-0">
                        Project SENSE: Subconscious Spatial Navigation
                      </h3>

                      <p className="text-xs text-[#92969F] leading-relaxed max-w-md m-0">
                        Interactive tactile ring test bench. Click or hover any directional heading node around the virtual waist-belt to test the low-latency vibrational heading protocol.
                      </p>

                      <div className="p-3.5 rounded-lg border border-[#292C33] bg-[#090A0C] space-y-2 text-xs font-mono">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-[#92969F]">ACTIVE BEARING:</span>
                          <span className="text-[#00F0FF] font-semibold">
                            {['000° [N] Forward', '045° [NE] Sector', '090° [E] Lateral', '135° [SE] Aft', '180° [S] Reversal', '225° [SW] Aft', '270° [W] Lateral', '315° [NW] Sector'][activeActuator]}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-[#92969F]">HAPTIC INTENSITY:</span>
                          <span className="text-[#F4F4F0]">{hapticIntensity}% ERM/LRA duty</span>
                        </div>
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-[#92969F]">BENCHMARK LATENCY:</span>
                          <span className="text-emerald-400">&lt; 14.2 ms (BLE 5.3)</span>
                        </div>
                      </div>
                    </div>

                    {/* Interactive 8-Node Haptic Circle */}
                    <div className="md:col-span-5 flex flex-col items-center justify-center p-4">
                      <div className="relative w-48 h-48 rounded-full border border-[#292C33] flex items-center justify-center bg-[#090A0C]/80 shadow-[0_0_30px_rgba(0,240,255,0.1)]">
                        {/* Center compass core */}
                        <div className="w-14 h-14 rounded-full bg-[#101217] border border-[#00F0FF]/40 flex flex-col items-center justify-center text-center">
                          <Compass className="w-4 h-4 text-[#00F0FF] animate-pulse" />
                          <span className="text-[8px] font-mono text-[#F4F4F0]">IMU AXIS</span>
                        </div>

                        {/* 8 Actuators around the ring */}
                        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => {
                          const rad = (angle - 90) * (Math.PI / 180);
                          const radius = 78;
                          const x = Math.round(radius * Math.cos(rad));
                          const y = Math.round(radius * Math.sin(rad));
                          const isCurrent = activeActuator === idx;

                          return (
                            <button
                              key={angle}
                              onClick={() => {
                                setActiveActuator(idx);
                                setHapticIntensity(Math.floor(70 + Math.random() * 25));
                              }}
                              style={{ transform: `translate(${x}px, ${y}px)` }}
                              className={cn(
                                "absolute w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-mono font-bold transition-all duration-200 focus:outline-none",
                                isCurrent
                                  ? "bg-[#00F0FF] text-[#090A0C] scale-125 shadow-[0_0_20px_#00F0FF]"
                                  : "bg-[#101217] text-[#92969F] border border-[#292C33] hover:border-[#00F0FF] hover:scale-110"
                              )}
                              aria-label={`Actuator ${angle} degrees`}
                            >
                              {idx + 1}
                            </button>
                          );
                        })}
                      </div>
                      <span className="text-[10px] font-mono text-[#92969F] mt-3">
                        Click any actuator to pulse
                      </span>
                    </div>
                  </motion.div>
                )}

                {/* =========================================================================
                    TAB 02: BIO-BUS / ORGANOID INTELLIGENCE WETWARE OSCILLOSCOPE
                   ========================================================================= */}
                {activeTab === 'biobus' && (
                  <motion.div
                    key="biobus"
                    initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                  >
                    <div className="md:col-span-6 space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#10F5A0]">
                          BIOLOGICAL COMPUTING // BIO-BUS
                        </span>
                        <span className="px-2 py-0.5 rounded-full border border-[#10F5A0]/40 text-[#10F5A0] bg-[#10F5A0]/10 text-[9px] font-mono uppercase tracking-wider">
                          Research phase
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-normal text-[#F4F4F0] m-0">
                        In-Vitro Organoid Electrophysiology Bus
                      </h3>

                      <p className="text-xs text-[#92969F] leading-relaxed max-w-md m-0">
                        Standardized hardware bus for high-density Multielectrode Arrays (HD-MEAs). Delivers patterned micro-stimulation and captures single-unit spike trains in real-time.
                      </p>

                      <div className="flex flex-wrap items-center gap-3 pt-1">
                        <button
                          onClick={handleStimulate}
                          disabled={isStimulating}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#10F5A0] text-[#090A0C] font-mono text-xs font-semibold hover:bg-white transition-colors disabled:opacity-50"
                        >
                          <Zap className="w-3.5 h-3.5" />
                          <span>{isStimulating ? 'Stimulating Wetware...' : 'Stimulate Organoid (µA)'}</span>
                        </button>
                        <span className="text-[10px] font-mono text-[#92969F]">
                          Cumulative Spikes: <strong className="text-[#10F5A0]">{spikeCount}</strong>
                        </span>
                      </div>
                    </div>

                    {/* Interactive Oscilloscope Display */}
                    <div className="md:col-span-6 bg-[#090A0C] border border-[#292C33] rounded-xl p-5 space-y-3 relative overflow-hidden">
                      <div className="flex items-center justify-between text-[10px] font-mono">
                        <span className="text-[#10F5A0] flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#10F5A0] animate-pulse" />
                          <span>MEA CH-01 &ndash; CH-04 OSCILLOSCOPE</span>
                        </span>
                        <span className="text-[9px] font-mono text-[#92969F] px-1.5 py-0.5 rounded border border-[#292C33]">
                          Conceptual Visual
                        </span>
                      </div>

                      {/* Oscilloscope SVG Waveform */}
                      <div className="h-28 w-full relative flex items-center bg-[#090A0C] rounded border border-[#292C33]/60 overflow-hidden px-2">
                        <svg className="w-full h-full text-[#10F5A0]" viewBox="0 0 300 70" preserveAspectRatio="none">
                          <path
                            d={
                              isStimulating
                                ? "M0 35 L20 35 L25 5 L30 65 L35 15 L40 50 L45 35 L90 35 L95 2 L100 68 L105 10 L110 55 L115 35 L170 35 L175 4 L180 66 L185 12 L190 48 L195 35 L240 35 L245 8 L250 62 L255 18 L260 45 L265 35 L300 35"
                                : "M0 35 L40 35 L45 28 L50 42 L55 35 L110 35 L115 12 L120 58 L125 22 L130 35 L200 35 L205 25 L210 45 L215 35 L260 35 L265 18 L270 52 L275 35 L300 35"
                            }
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            className="transition-all duration-300"
                          />
                        </svg>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#10F5A0]/10 to-transparent pointer-events-none" />
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-[10px] font-mono text-[#92969F] pt-1">
                        <div>BANDPASS: 300Hz-3kHz</div>
                        <div>SAMPLING: 30 kHz</div>
                        <div>NOISE: &lt;2.4 µV RMS</div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* =========================================================================
                    TAB 03: UPLOADED INTELLIGENCE COGNITIVE VECTOR GRAPH
                   ========================================================================= */}
                {activeTab === 'uploaded' && (
                  <motion.div
                    key="uploaded"
                    initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                  >
                    <div className="md:col-span-6 space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#B87BFF]">
                          COGNITIVE TECHNOLOGY // RESEARCH CONCEPT
                        </span>
                        <span className="px-2 py-0.5 rounded-full border border-[#B87BFF]/40 text-[#B87BFF] bg-[#B87BFF]/10 text-[9px] font-mono uppercase tracking-wider">
                          Concept exploration
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-normal text-[#F4F4F0] m-0">
                        Associative Episodic Memory Graph
                      </h3>

                      <p className="text-xs text-[#92969F] leading-relaxed max-w-md m-0">
                        Explores verifiable personal memory representations and semantic lattices—rigorously separating digital cognition modeling from speculative biological mind uploading.
                      </p>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {['Episodic', 'Somatic', 'Semantic', 'Temporal'].map((node) => (
                          <button
                            key={node}
                            onClick={() => setActiveMemoryNode(node)}
                            className={cn(
                              "px-3 py-1 rounded text-xs font-mono transition-all",
                              activeMemoryNode === node
                                ? "bg-[#B87BFF] text-[#090A0C] font-semibold"
                                : "bg-[#101217] border border-[#292C33] text-[#92969F] hover:text-[#F4F4F0]"
                            )}
                          >
                            {node} Node
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Semantic Graph Visualizer */}
                    <div className="md:col-span-6 bg-[#090A0C] border border-[#292C33] rounded-xl p-5 space-y-3">
                      <div className="flex items-center justify-between text-[10px] font-mono">
                        <span className="text-[#B87BFF]">SEMANTIC LATTICE READOUT</span>
                        <span className="text-[#92969F]">ACTIVE: {activeMemoryNode.toUpperCase()}</span>
                      </div>

                      <div className="p-4 rounded border border-[#292C33] bg-[#101217] space-y-2 text-xs">
                        <div className="text-[11px] font-mono text-[#F4F4F0]">
                          Target Schema: <span className="text-[#B87BFF]">{activeMemoryNode} Context Mesh</span>
                        </div>
                        <p className="text-[11px] text-[#92969F] leading-relaxed m-0">
                          {activeMemoryNode === 'Episodic' && 'Stores biographical event sequences, autobiographical anchors, and causality graphs.'}
                          {activeMemoryNode === 'Somatic' && 'Documents physical sensory-motor associations and visceral perceptual metadata.'}
                          {activeMemoryNode === 'Semantic' && 'Formal ontology mapping conceptual knowledge, entities, and multi-relational attributes.'}
                          {activeMemoryNode === 'Temporal' && 'Time-stamped delta log preserving decay rates, revision histories, and memory shifts.'}
                        </p>
                      </div>

                      <div className="text-[10px] font-mono text-[#92969F] flex items-center justify-between pt-1">
                        <span>ZERO NEURAL REPLICATION CLAIMED</span>
                        <span className="text-[#B87BFF]">STRUCTURAL MODEL</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* =========================================================================
                    TAB 04: SKILLSYNTHESIS AI EMPLOYABILITY ANALYTICS
                   ========================================================================= */}
                {activeTab === 'skills' && (
                  <motion.div
                    key="skills"
                    initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                  >
                    <div className="md:col-span-6 space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF9E3B]">
                          EMPLOYABILITY AI // PRODUCT DEVELOPMENT
                        </span>
                        <span className="px-2 py-0.5 rounded-full border border-[#FF9E3B]/40 text-[#FF9E3B] bg-[#FF9E3B]/10 text-[9px] font-mono uppercase tracking-wider">
                          Product development
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-normal text-[#F4F4F0] m-0">
                        SkillSynthesis: Conversational Intelligence Engine
                      </h3>

                      <p className="text-xs text-[#92969F] leading-relaxed max-w-md m-0">
                        Multi-modal AI analyzing verbal cadence, response clarity, and structural coherence in real-time to build interview confidence without algorithmic bias.
                      </p>

                      <div className="pt-1">
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FF9E3B] text-[#090A0C] font-mono text-xs font-semibold hover:bg-white transition-colors"
                        >
                          <span>Discuss an institutional pilot</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                    {/* Live Metric Readout Panel */}
                    <div className="md:col-span-6 bg-[#090A0C] border border-[#292C33] rounded-xl p-5 space-y-3">
                      <div className="flex items-center justify-between text-[10px] font-mono">
                        <span className="text-[#FF9E3B]">VERIFIED CONVERSATIONAL RUBRIC</span>
                        <span className="text-emerald-400">ACTIVE SESSION</span>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                        <div className="p-3 rounded border border-[#292C33] bg-[#101217]">
                          <div className="text-[10px] text-[#92969F]">SPEAKING CADENCE</div>
                          <div className="text-base font-bold text-[#F4F4F0] mt-1">{cadence} WPM</div>
                          <div className="text-[10px] text-emerald-400">Optimal Range</div>
                        </div>

                        <div className="p-3 rounded border border-[#292C33] bg-[#101217]">
                          <div className="text-[10px] text-[#92969F]">STRUCTURAL CLARITY</div>
                          <div className="text-base font-bold text-[#FF9E3B] mt-1">94.2%</div>
                          <div className="text-[10px] text-[#92969F]">STAR Method Alignment</div>
                        </div>

                        <div className="p-3 rounded border border-[#292C33] bg-[#101217]">
                          <div className="text-[10px] text-[#92969F]">FILLER FREQUENCY</div>
                          <div className="text-base font-bold text-emerald-400 mt-1">1.1%</div>
                          <div className="text-[10px] text-[#92969F]">Low Hesitation</div>
                        </div>

                        <div className="p-3 rounded border border-[#292C33] bg-[#101217]">
                          <div className="text-[10px] text-[#92969F]">RESPONSE LATENCY</div>
                          <div className="text-base font-bold text-[#668CFF] mt-1">&lt;780 ms</div>
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

        {/* Bottom Telemetry Strip */}
        <div className="mt-16 pt-8 border-t border-[#292C33]/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono uppercase tracking-widest text-[#92969F]">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#668CFF]" />
            <span>CORE VECTORS // 4 ACTIVE TRACKS</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#00F0FF] transition-colors">PROJECT SENSE</span>
            <span>&middot;</span>
            <span className="hover:text-[#10F5A0] transition-colors">BIO-BUS (OI)</span>
            <span>&middot;</span>
            <span className="hover:text-[#B87BFF] transition-colors">UPLOADED INTELLIGENCE</span>
            <span>&middot;</span>
            <span className="hover:text-[#FF9E3B] transition-colors">SKILLSYNTHESIS</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
