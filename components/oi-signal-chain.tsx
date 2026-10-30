'use client'

import { useState } from 'react'
import { motion, useReducedMotion, AnimatePresence } from 'motion/react'
import { Activity, Cpu, Layers, Radio, Sparkles, AlertCircle } from 'lucide-react'

export interface SignalStage {
  id: string
  number: string
  title: string
  sublabel: string
  icon: typeof Activity
  detail: string
  question: string
  bottleneck: string
  telemetry: {
    samplingRate: string
    voltageRange: string
    channelCount: string
    latency: string
  }
}

const stages: SignalStage[] = [
  {
    id: 'substrate',
    number: '01',
    title: 'Biological Substrate',
    sublabel: 'Organoid Intelligence (OI)',
    icon: Sparkles,
    detail:
      'In-vitro 3D cerebral neural organoid cultures exhibiting spontaneous rhythmic bursting and stimulus-evoked electrophysiological field potentials.',
    question:
      'How can living biological activity be computationally represented without flattening its functional non-linear variability?',
    bottleneck:
      'Finite wetware viability windows, micro-fluidic nutrient delivery constraints, and high biological non-determinism across batches.',
    telemetry: {
      samplingRate: 'Spontaneous Bursting',
      voltageRange: '10–100 μV',
      channelCount: '3D Neural Cluster',
      latency: '< 5 ms Bioreaction',
    },
  },
  {
    id: 'interface',
    number: '02',
    title: 'Bio-Electronic Interface',
    sublabel: 'HD-MEA Layer',
    icon: Layers,
    detail:
      'High-density CMOS Multielectrode Array delivering localized, charge-balanced micro-stimulation pulses (μA) and recording extracellular field potentials.',
    question:
      'What spatial and temporal electrode configurations minimize tissue impedance while maximizing single-unit action potential isolation?',
    bottleneck:
      'Signal-to-noise ratio degradation over weeks due to cellular encapsulation and micro-electrode impedance drift.',
    telemetry: {
      samplingRate: '30 kHz / channel',
      voltageRange: '±500 μV',
      channelCount: '1,024–4,096 Electrodes',
      latency: '< 100 μs Switching',
    },
  },
  {
    id: 'bus',
    number: '03',
    title: 'Signal Acquisition & Digitization',
    sublabel: 'Bio-Bus Standardized Framing',
    icon: Radio,
    detail:
      'Low-noise instrumentation front-end performing hardware bandpass filtering (300 Hz–3 kHz), real-time spike sorting, and deterministic framing.',
    question:
      'How do we distinguish genuine synaptic action potentials from high-frequency electromagnetic artifacts and thermal noise?',
    bottleneck:
      'Analog-to-digital converter power-density limits and thermal dissipation near temperature-sensitive biological cultures.',
    telemetry: {
      samplingRate: '24-bit Delta-Sigma',
      voltageRange: '< 2.4 μV RMS Noise',
      channelCount: 'Standardized Packets',
      latency: '< 2.5 ms Roundtrip',
    },
  },
  {
    id: 'analysis',
    number: '04',
    title: 'Computational Analysis',
    sublabel: 'Closed-Loop Reproducibility',
    icon: Cpu,
    detail:
      'Spatiotemporal spike-train encoding, closed-loop feedback latency characterization, and open-source benchmark dataset generation for biocomputing.',
    question:
      'What formal benchmark primitives can evaluate whether an organoid demonstrates authentic adaptive computation versus stochastic resonance?',
    bottleneck:
      'Lack of standardized, peer-verified biological benchmark datasets and deterministic baseline metrics for hybrid wetware-silicon systems.',
    telemetry: {
      samplingRate: '100 GbE Digital Stream',
      voltageRange: 'Quantized Spikes',
      channelCount: 'Real-time Telemetry',
      latency: '< 15 ms Closed-loop',
    },
  },
]

export function OiSignalChain() {
  const [activeIdx, setActiveIdx] = useState(0)
  const shouldReduceMotion = useReducedMotion()
  const stage = stages[activeIdx]
  const Icon = stage.icon

  return (
    <div
      style={{ ['--card-aura' as string]: '#10F5A0' }}
      className="oi-panel metallic-border ambient-beam cryo-glass rounded-2xl overflow-hidden my-10 shadow-2xl"
      aria-label="Organoid Intelligence Signal Chain"
    >
      {/* Header bar */}
      <div className="p-6 md:p-8 border-b border-[#292C33] bg-[#090A0C]/70 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#10F5A0] font-semibold">
              Bio-Bus / OI Architecture
            </span>
            <span className="inline-block w-2 h-2 rounded-full bg-[#10F5A0] animate-pulse" />
          </div>
          <h3 className="text-2xl md:text-3xl font-normal tracking-tight text-[#F4F4F0] m-0">
            From Living Substrate to <em>Silicon Signal.</em>
          </h3>
          <p className="text-[#92969F] text-xs sm:text-sm mt-1 max-w-xl m-0">
            A 4-stage pipeline investigating interfaces between computing systems and organoid intelligence research.
          </p>
        </div>
        <div className="flex items-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider text-[#10F5A0] bg-[#10F5A0]/10 border border-[#10F5A0]/30 rounded-lg">
            <AlertCircle className="w-3.5 h-3.5" /> Conceptual Visual — Early Research Phase
          </span>
        </div>
      </div>

      {/* 4-Stage Stepper / Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-b border-[#292C33] bg-[#090A0C]/50" role="tablist">
        {stages.map((item, index) => {
          const ItemIcon = item.icon
          const isActive = activeIdx === index
          return (
            <button
              key={item.id}
              onClick={() => setActiveIdx(index)}
              role="tab"
              aria-selected={isActive}
              className={`relative p-5 text-left transition-all duration-200 border-r border-b md:border-b-0 border-[#292C33] last:border-r-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#10F5A0] ${
                isActive ? 'bg-[#10F5A0]/10 text-[#F4F4F0]' : 'text-[#92969F] hover:text-[#F4F4F0] hover:bg-white/[0.02]'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-[#10F5A0] font-semibold">{item.number}</span>
                <ItemIcon className={`w-4 h-4 ${isActive ? 'text-[#10F5A0]' : 'text-[#92969F]'}`} />
              </div>
              <div className="text-sm font-medium tracking-tight mb-1 text-[#F4F4F0]">{item.title}</div>
              <div className="text-[11px] text-[#92969F] font-mono truncate">{item.sublabel}</div>

              {isActive && (
                <motion.div
                  layoutId={shouldReduceMotion ? undefined : 'oi-stage-indicator'}
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#10F5A0]"
                  transition={{ duration: 0.25 }}
                />
              )}
            </button>
          )
        })}
      </div>

      {/* Main Stage Detail Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={stage.id}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? false : { opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="p-6 md:p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Research Question & Overview */}
            <div className="space-y-6">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#10F5A0] mb-2 font-semibold">
                  CORE RESEARCH QUESTION
                </p>
                <p className="text-base font-normal text-[#F4F4F0] leading-relaxed italic m-0">
                  &ldquo;{stage.question}&rdquo;
                </p>
              </div>

              <div>
                <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#92969F] mb-2 font-semibold">
                  SYSTEM ARCHITECTURE
                </p>
                <p className="text-sm text-[#92969F] leading-relaxed m-0">
                  {stage.detail}
                </p>
              </div>
            </div>

            {/* Middle Column: Known Bottlenecks */}
            <div className="space-y-6 border-t lg:border-t-0 lg:border-l border-[#292C33] pt-6 lg:pt-0 lg:pl-8">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-amber-400 mb-2 flex items-center gap-1.5 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> KNOWN TECHNICAL BOTTLENECK
                </p>
                <p className="text-xs sm:text-sm text-[#92969F] leading-relaxed m-0">
                  {stage.bottleneck}
                </p>
              </div>

              {/* Synthetic Signal Trace Schematic */}
              <div className="bg-[#090A0C] border border-[#292C33] rounded-xl p-4">
                <div className="flex items-center justify-between text-[10px] font-mono text-[#92969F] mb-3">
                  <span>SIGNAL STREAM SIMULATION</span>
                  <span className="text-[#10F5A0] font-semibold">ONLINE</span>
                </div>
                <div className="relative h-14 flex items-center overflow-hidden">
                  <svg className="w-full h-full text-[#10F5A0]/80" viewBox="0 0 200 40" preserveAspectRatio="none">
                    <path
                      d="M0 20 L25 20 L30 18 L35 22 L40 20 L60 20 L65 5 L70 35 L75 12 L80 25 L85 20 L120 20 L125 15 L130 25 L135 20 L160 20 L165 2 L170 38 L175 10 L180 22 L185 20 L200 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#10F5A0]/10 to-transparent animate-pulse" />
                </div>
              </div>
            </div>

            {/* Right Column: Stage Telemetry Matrix */}
            <div className="border-t lg:border-t-0 lg:border-l border-[#292C33] pt-6 lg:pt-0 lg:pl-8">
              <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#92969F] mb-4 font-semibold">
                TELEMETRY &amp; SPECIFICATIONS
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#090A0C] border border-[#292C33] rounded-xl p-3">
                  <div className="text-[10px] font-mono text-[#92969F]">SAMPLING</div>
                  <div className="text-xs font-mono text-[#F4F4F0] mt-1 font-semibold">{stage.telemetry.samplingRate}</div>
                </div>
                <div className="bg-[#090A0C] border border-[#292C33] rounded-xl p-3">
                  <div className="text-[10px] font-mono text-[#92969F]">VOLTAGE SCALE</div>
                  <div className="text-xs font-mono text-[#F4F4F0] mt-1 font-semibold">{stage.telemetry.voltageRange}</div>
                </div>
                <div className="bg-[#090A0C] border border-[#292C33] rounded-xl p-3">
                  <div className="text-[10px] font-mono text-[#92969F]">CAPACITY</div>
                  <div className="text-xs font-mono text-[#F4F4F0] mt-1 font-semibold">{stage.telemetry.channelCount}</div>
                </div>
                <div className="bg-[#090A0C] border border-[#292C33] rounded-xl p-3">
                  <div className="text-[10px] font-mono text-[#92969F]">MEASURED LATENCY</div>
                  <div className="text-xs font-mono text-[#10F5A0] mt-1 font-semibold">{stage.telemetry.latency}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
