'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import {
  Activity,
  Dna,
  Cpu,
  Layers,
  Radio,
  Sparkles,
  Zap,
  AlertCircle,
  Play,
  CheckCircle2
} from 'lucide-react'
import { cn } from '@/lib/utils'

export function BioBusOiMotion({ className }: { className?: string }) {
  const [activeStep, setActiveStep] = useState(0)
  const [isStimulating, setIsStimulating] = useState(false)
  const [spikeCount, setSpikeCount] = useState(842)
  const [snrValue, setSnrValue] = useState(24.8)
  const [activeElectrodes, setActiveElectrodes] = useState<number[]>([4, 12, 19, 27, 33, 42, 51, 58])
  const shouldReduceMotion = useReducedMotion()

  // Real-time flickering of random active MEA electrode channels
  useEffect(() => {
    if (shouldReduceMotion) return
    const interval = setInterval(() => {
      const randomChannels = Array.from({ length: 9 }, () => Math.floor(Math.random() * 64))
      setActiveElectrodes(randomChannels)
      setSpikeCount((prev) => prev + Math.floor(Math.random() * 4) + 1)
      setSnrValue((prev) => +(24 + Math.random() * 1.6).toFixed(1))
    }, 1800)
    return () => clearInterval(interval)
  }, [shouldReduceMotion])

  const triggerStimulus = () => {
    setIsStimulating(true)
    setSpikeCount((prev) => prev + 36)
    setSnrValue(28.4)
    // Flash all central electrodes
    setActiveElectrodes([18, 19, 20, 26, 27, 28, 34, 35, 36, 42, 43, 44])
    setTimeout(() => {
      setIsStimulating(false)
      setSnrValue(24.8)
    }, 1200)
  }

  const PIPELINE_STAGES = [
    {
      id: 'organoid',
      title: '3D Neural Organoid Substrate',
      badge: 'Living Wetware',
      desc: 'In-vitro human cerebral neural organoid culture exhibiting spontaneous rhythmic bursts and field potentials (10–100 μV).',
      telemetry: 'Spontaneous Bursting // Viability Window 45d',
    },
    {
      id: 'mea',
      title: 'High-Density MEA Interface',
      badge: 'Bidirectional Array',
      desc: '64-channel microelectrode array with sub-100μm electrode pitch recording extracellular field potentials and delivering micro-stimuli.',
      telemetry: '64 Channels Active // 20 kHz Sampling',
    },
    {
      id: 'sorter',
      title: 'Bio-Bus Real-Time Spike Sorter',
      badge: 'DSP Pipeline',
      desc: 'Low-noise analog front-end and FPGA-based wave-clustering engine separating individual multi-unit action potentials from background drift.',
      telemetry: 'SNR 24.8 dB // Drift Compensated',
    },
    {
      id: 'silicon',
      title: 'Silicon Closed-Loop Bus',
      badge: 'Digital Integration',
      desc: 'Standardized bus converting biological spike trains into digital event frames for hybrid biological-silicon computing workflows.',
      telemetry: 'Latency < 4.2 ms // Closed-Loop Validated',
    },
  ]

  return (
    <div
      style={{ ['--card-aura' as string]: '#10F5A0' }}
      className={cn(
        'metallic-border ambient-beam cryo-glass rounded-2xl overflow-hidden shadow-2xl transition-all duration-300',
        className
      )}
    >
      {/* Titlebar with Mandatory Conceptual Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between px-5 py-3.5 border-b border-[#292C33] bg-[#090A0C]/90 gap-3">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#10F5A0] animate-pulse" />
          <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#10F5A0] font-semibold">
            BIO-BUS // ORGANOID INTELLIGENCE (OI) PIPELINE
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider text-[#10F5A0] bg-[#10F5A0]/10 border border-[#10F5A0]/30">
            <AlertCircle className="w-3 h-3" /> Conceptual Visual — Research Phase
          </span>
          <button
            type="button"
            onClick={triggerStimulus}
            disabled={isStimulating}
            className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-lg bg-[#10F5A0] text-[#090A0C] font-semibold hover:bg-white transition-all shadow-[0_0_15px_rgba(16,245,160,0.3)] disabled:opacity-60"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>{isStimulating ? 'Injecting 15 µA...' : 'Inject Micro-Stimulus (15 µA)'}</span>
          </button>
        </div>
      </div>

      <div className="p-6 md:p-8 space-y-8">
        {/* 4-Stage Connected Architecture Visualization */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {/* Connector Beam across stages */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-[#10F5A0]/30 via-[#10F5A0]/60 to-[#10F5A0]/30 pointer-events-none" />

          {/* STAGE 1: Organoid Culture */}
          <div
            onClick={() => setActiveStep(0)}
            className={cn(
              'p-4 rounded-xl border transition-all cursor-pointer relative bg-[#090A0C]/80',
              activeStep === 0
                ? 'border-[#10F5A0] shadow-[0_0_20px_rgba(16,245,160,0.2)]'
                : 'border-[#292C33] hover:border-[#10F5A0]/40'
            )}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono text-[#10F5A0] font-semibold">STAGE 01</span>
              <Dna className="w-4 h-4 text-[#10F5A0]" />
            </div>

            {/* Organoid Animation */}
            <div className="h-28 rounded-lg bg-[#101217] border border-[#292C33] relative flex items-center justify-center overflow-hidden mb-3">
              <motion.div
                animate={
                  isStimulating
                    ? { scale: [1, 1.25, 0.95, 1], rotate: [0, 8, -8, 0] }
                    : shouldReduceMotion
                    ? {}
                    : { scale: [1, 1.05, 1] }
                }
                transition={{ duration: isStimulating ? 0.8 : 3, repeat: isStimulating ? 0 : Infinity }}
                className={cn(
                  'w-16 h-16 rounded-full border border-[#10F5A0]/60 flex items-center justify-center transition-all',
                  isStimulating
                    ? 'bg-[#10F5A0]/40 shadow-[0_0_35px_#10F5A0]'
                    : 'bg-[#10F5A0]/15 shadow-[0_0_20px_rgba(16,245,160,0.3)]'
                )}
              >
                {/* Internal biological neural nodes */}
                <div className="grid grid-cols-3 gap-1">
                  {[...Array(9)].map((_, idx) => (
                    <motion.div
                      key={idx}
                      animate={
                        shouldReduceMotion
                          ? {}
                          : { opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }
                      }
                      transition={{ duration: 1.5 + (idx % 3) * 0.4, repeat: Infinity }}
                      className="w-1.5 h-1.5 rounded-full bg-[#10F5A0]"
                    />
                  ))}
                </div>
              </motion.div>
            </div>
            <h5 className="text-xs font-semibold text-[#F4F4F0] m-0">3D Organoid Culture</h5>
            <span className="text-[10px] font-mono text-[#92969F] block mt-1">10–100 μV Rhythms</span>
          </div>

          {/* STAGE 2: 64-Channel MEA Grid */}
          <div
            onClick={() => setActiveStep(1)}
            className={cn(
              'p-4 rounded-xl border transition-all cursor-pointer relative bg-[#090A0C]/80',
              activeStep === 1
                ? 'border-[#10F5A0] shadow-[0_0_20px_rgba(16,245,160,0.2)]'
                : 'border-[#292C33] hover:border-[#10F5A0]/40'
            )}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono text-[#10F5A0] font-semibold">STAGE 02</span>
              <Layers className="w-4 h-4 text-[#10F5A0]" />
            </div>

            {/* 8x8 MEA Grid Graphic */}
            <div className="h-28 rounded-lg bg-[#101217] border border-[#292C33] p-2 flex items-center justify-center mb-3">
              <div className="grid grid-cols-8 gap-1 w-full max-w-[120px]">
                {[...Array(64)].map((_, idx) => {
                  const isChActive = activeElectrodes.includes(idx)
                  return (
                    <div
                      key={idx}
                      className={cn(
                        'w-2 h-2 rounded-[1px] transition-colors duration-200',
                        isChActive
                          ? 'bg-[#10F5A0] shadow-[0_0_6px_#10F5A0]'
                          : 'bg-[#292C33]/70'
                      )}
                    />
                  )
                })}
              </div>
            </div>
            <h5 className="text-xs font-semibold text-[#F4F4F0] m-0">64-Channel HD-MEA</h5>
            <span className="text-[10px] font-mono text-[#92969F] block mt-1">Microelectrode Matrix</span>
          </div>

          {/* STAGE 3: Action Potential Oscilloscope */}
          <div
            onClick={() => setActiveStep(2)}
            className={cn(
              'p-4 rounded-xl border transition-all cursor-pointer relative bg-[#090A0C]/80',
              activeStep === 2
                ? 'border-[#10F5A0] shadow-[0_0_20px_rgba(16,245,160,0.2)]'
                : 'border-[#292C33] hover:border-[#10F5A0]/40'
            )}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono text-[#10F5A0] font-semibold">STAGE 03</span>
              <Activity className="w-4 h-4 text-[#10F5A0]" />
            </div>

            {/* Oscilloscope Waveform Animation */}
            <div className="h-28 rounded-lg bg-[#101217] border border-[#292C33] relative flex items-center justify-center overflow-hidden mb-3">
              <svg className="w-full h-16 px-1" viewBox="0 0 160 50" fill="none">
                <path d="M 0 25 L 30 25 L 40 10 L 50 42 L 60 25 L 90 25 L 100 5 L 115 45 L 125 25 L 160 25" stroke="#292C33" strokeWidth="1" />
                <motion.path
                  d={
                    isStimulating
                      ? "M 0 25 L 20 25 L 30 5 L 45 48 L 60 12 L 75 42 L 95 2 L 110 49 L 130 18 L 160 25"
                      : "M 0 25 L 30 25 L 40 10 L 50 42 L 60 25 L 90 25 L 100 5 L 115 45 L 125 25 L 160 25"
                  }
                  stroke="#10F5A0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={false}
                  animate={
                    shouldReduceMotion
                      ? {}
                      : { strokeDashoffset: [0, -320] }
                  }
                  transition={{ duration: isStimulating ? 1 : 2.5, repeat: Infinity, ease: 'linear' }}
                  style={{ strokeDasharray: '16 6' }}
                />
              </svg>
            </div>
            <h5 className="text-xs font-semibold text-[#F4F4F0] m-0">Spike Sorter &amp; ADC</h5>
            <span className="text-[10px] font-mono text-[#92969F] block mt-1">20 kHz Waveform DSP</span>
          </div>

          {/* STAGE 4: Silicon Bridge Bus */}
          <div
            onClick={() => setActiveStep(3)}
            className={cn(
              'p-4 rounded-xl border transition-all cursor-pointer relative bg-[#090A0C]/80',
              activeStep === 3
                ? 'border-[#10F5A0] shadow-[0_0_20px_rgba(16,245,160,0.2)]'
                : 'border-[#292C33] hover:border-[#10F5A0]/40'
            )}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono text-[#10F5A0] font-semibold">STAGE 04</span>
              <Cpu className="w-4 h-4 text-[#10F5A0]" />
            </div>

            {/* Digital Packet Telemetry Graphic */}
            <div className="h-28 rounded-lg bg-[#101217] border border-[#292C33] p-3 flex flex-col justify-between font-mono text-[9px] mb-3">
              <div className="flex justify-between text-[#92969F]">
                <span>STREAM</span>
                <span className="text-[#10F5A0]">SPI // 4.2ms</span>
              </div>
              <div className="space-y-1 text-[#F4F4F0]">
                <div className="flex justify-between">
                  <span className="text-[#92969F]">PKT_ID:</span>
                  <span>#0x8F4C</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#92969F]">RATE:</span>
                  <span className="text-[#10F5A0] font-bold">142 Hz</span>
                </div>
              </div>
              <div className="w-full bg-[#292C33] h-1 rounded-full overflow-hidden">
                <div className="bg-[#10F5A0] h-full w-4/5 animate-pulse" />
              </div>
            </div>
            <h5 className="text-xs font-semibold text-[#F4F4F0] m-0">Silicon Event Bridge</h5>
            <span className="text-[10px] font-mono text-[#92969F] block mt-1">Standardized Bio-Bus</span>
          </div>
        </div>

        {/* Selected Stage Deep-Dive Card */}
        <div className="p-6 rounded-xl bg-[#101217] border border-[#292C33] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#10F5A0] font-semibold">
                INSPECTING STAGE 0{activeStep + 1}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-[#10F5A0]/40 text-[#10F5A0] bg-[#10F5A0]/10">
                {PIPELINE_STAGES[activeStep].badge}
              </span>
            </div>
            <h4 className="text-xl font-normal text-[#F4F4F0] m-0">
              {PIPELINE_STAGES[activeStep].title}
            </h4>
            <p className="text-xs sm:text-sm text-[#92969F] mt-2 leading-relaxed m-0">
              {PIPELINE_STAGES[activeStep].desc}
            </p>
          </div>

          {/* Real-Time Telemetry Counters */}
          <div className="grid grid-cols-2 gap-3 shrink-0">
            <div className="p-3 rounded-lg bg-[#090A0C] border border-[#292C33] text-center min-w-[120px]">
              <span className="block text-[9px] font-mono text-[#92969F] uppercase">Spike Counter</span>
              <span className="text-base font-mono text-[#10F5A0] font-bold">{spikeCount}</span>
            </div>
            <div className="p-3 rounded-lg bg-[#090A0C] border border-[#292C33] text-center min-w-[120px]">
              <span className="block text-[9px] font-mono text-[#92969F] uppercase">SNR Baseline</span>
              <span className="text-base font-mono text-[#F4F4F0] font-bold">{snrValue} dB</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
