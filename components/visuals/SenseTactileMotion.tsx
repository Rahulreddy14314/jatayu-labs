'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import {
  Compass,
  Radio,
  Activity,
  Cpu,
  Layers,
  Zap,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Play,
  RotateCcw
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface ActuatorNode {
  id: string
  label: string
  deg: number
  x: number // percentage
  y: number // percentage
  cue: string
}

const ACTUATORS: ActuatorNode[] = [
  { id: 'N', label: 'Front // 000°', deg: 0, x: 50, y: 15, cue: 'Forward Event / Acknowledge' },
  { id: 'NE', label: 'NE // 045°', deg: 45, x: 78, y: 26, cue: 'Right Forward Bearing' },
  { id: 'E', label: 'Right // 090°', deg: 90, x: 88, y: 50, cue: 'Right Directional Cue (Motor Imagery)' },
  { id: 'SE', label: 'SE // 135°', deg: 135, x: 78, y: 74, cue: 'Right Aft Bearing' },
  { id: 'S', label: 'Back // 180°', deg: 180, x: 50, y: 85, cue: 'Rear / Proximity Reverse' },
  { id: 'SW', label: 'SW // 225°', deg: 225, x: 22, y: 74, cue: 'Left Aft Bearing' },
  { id: 'W', label: 'Left // 270°', deg: 270, x: 12, y: 50, cue: 'Left Directional Cue (Motor Imagery)' },
  { id: 'NW', label: 'NW // 315°', deg: 315, x: 22, y: 26, cue: 'Left Forward Bearing' },
]

type ModeType = 'neuroloop' | 'navigation' | 'industrial' | 'proximity'

export function SenseTactileMotion({ className }: { className?: string }) {
  const [activeIdx, setActiveIdx] = useState(0)
  const [mode, setMode] = useState<ModeType>('neuroloop')
  const [activeTab, setActiveTab] = useState<'motion' | 'hardware'>('motion')
  const [pulseCount, setPulseCount] = useState(142)
  const [isStimulating, setIsStimulating] = useState(false)
  const [eegState, setEegState] = useState<'IDLE' | 'MOTOR_IMAGERY_LEFT' | 'MOTOR_IMAGERY_RIGHT' | 'CONFIRMED'>('CONFIRMED')
  const shouldReduceMotion = useReducedMotion()

  // Automated cycling for navigation mode
  useEffect(() => {
    if (mode === 'navigation' && !shouldReduceMotion) {
      const interval = setInterval(() => {
        setActiveIdx((prev) => (prev + 1) % ACTUATORS.length)
        setPulseCount((prev) => prev + 1)
      }, 2200)
      return () => clearInterval(interval)
    }
  }, [mode, shouldReduceMotion])

  const triggerHaptic = (index: number) => {
    setActiveIdx(index)
    setIsStimulating(true)
    setPulseCount((prev) => prev + 1)

    if (mode === 'neuroloop') {
      if (index === 6) setEegState('MOTOR_IMAGERY_LEFT')
      else if (index === 2) setEegState('MOTOR_IMAGERY_RIGHT')
      else setEegState('CONFIRMED')
    }

    setTimeout(() => setIsStimulating(false), 600)
  }

  const activeNode = ACTUATORS[activeIdx]

  return (
    <div
      style={{ ['--card-aura' as string]: '#00F0FF' }}
      className={cn(
        'metallic-border ambient-beam cryo-glass rounded-2xl overflow-hidden shadow-2xl transition-all duration-300',
        className
      )}
    >
      {/* Top Telemetry & Control Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between px-5 py-3.5 border-b border-[#292C33] bg-[#090A0C]/85 gap-3">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] animate-pulse" />
          <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#00F0FF] font-semibold">
            SENSE NEUROLOOP // HAPTIC WAIST INTERFACE
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-[#00F0FF]/30 text-[#00F0FF] bg-[#00F0FF]/10 hidden md:inline-block">
            V0/V1 Belt Prototype
          </span>
        </div>

        {/* View Switcher: Live Motion vs Hardware Workbench */}
        <div className="flex items-center gap-1.5 bg-[#101217] p-1 rounded-lg border border-[#292C33]">
          <button
            type="button"
            onClick={() => setActiveTab('motion')}
            className={cn(
              'px-3 py-1 text-[11px] font-mono rounded transition-colors',
              activeTab === 'motion'
                ? 'bg-[#00F0FF]/15 text-[#00F0FF] font-semibold'
                : 'text-[#92969F] hover:text-[#F4F4F0]'
            )}
          >
            Live Simulation
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('hardware')}
            className={cn(
              'px-3 py-1 text-[11px] font-mono rounded transition-colors',
              activeTab === 'hardware'
                ? 'bg-[#00F0FF]/15 text-[#00F0FF] font-semibold'
                : 'text-[#92969F] hover:text-[#F4F4F0]'
            )}
          >
            Hardware Specs
          </button>
        </div>
      </div>

      {activeTab === 'motion' ? (
        <div className="p-6 md:p-8 space-y-6">
          {/* Mode Selector Pills */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#292C33]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#92969F] mr-1">
                Active Protocol:
              </span>
              {[
                { id: 'neuroloop', label: 'EEG Closed-Loop (NeuroLoop)' },
                { id: 'navigation', label: 'Spatial Bearing (Autonomous)' },
                { id: 'industrial', label: 'Industrial Guidance' },
                { id: 'proximity', label: 'Proximity Alert' },
              ].map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setMode(m.id as ModeType)}
                  className={cn(
                    'px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 border',
                    mode === m.id
                      ? 'bg-[#00F0FF]/10 text-[#00F0FF] border-[#00F0FF]/50 font-semibold shadow-[0_0_12px_rgba(0,240,255,0.2)]'
                      : 'bg-[#101217] text-[#92969F] border-[#292C33] hover:text-[#F4F4F0] hover:border-[#92969F]/40'
                  )}
                >
                  {m.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => triggerHaptic((activeIdx + 1) % ACTUATORS.length)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/40 hover:bg-[#00F0FF]/25 transition-all shadow-[0_0_15px_rgba(0,240,255,0.25)]"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Step Actuator Pulse</span>
            </button>
          </div>

          {/* Interactive Waist Belt Schematic & Concentric Haptic Waves */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Canvas (Belt + Torso + Waves) */}
            <div className="lg:col-span-7 relative h-[340px] sm:h-[380px] rounded-xl bg-[#090A0C]/90 border border-[#292C33] flex items-center justify-center overflow-hidden">
              {/* Radial polar grid */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <div className="w-[300px] h-[300px] rounded-full border border-[#00F0FF]/30" />
                <div className="w-[210px] h-[210px] rounded-full border border-dashed border-[#00F0FF]/40" />
                <div className="w-[120px] h-[120px] rounded-full border border-[#00F0FF]/25" />
                <div className="absolute w-full h-px bg-[#292C33]" />
                <div className="absolute h-full w-px bg-[#292C33]" />
              </div>

              {/* Anatomical Torso / Waist Ellipse Silhouette */}
              <div className="relative w-[210px] h-[260px] rounded-[48%_48%_44%_44%] border-2 border-[#292C33] bg-[#101217]/80 flex flex-col items-center justify-center shadow-inner">
                {/* Waist Belt Band */}
                <div className="absolute inset-y-[42%] inset-x-[-12px] h-[44px] rounded-xl border border-[#00F0FF]/50 bg-[#00F0FF]/5 flex items-center justify-between px-2 shadow-[0_0_20px_rgba(0,240,255,0.15)]">
                  <span className="text-[8px] font-mono text-[#00F0FF]/70 tracking-widest uppercase">
                    L
                  </span>
                  <span className="text-[8px] font-mono text-[#00F0FF] font-semibold tracking-wider">
                    ESP32-BLE
                  </span>
                  <span className="text-[8px] font-mono text-[#00F0FF]/70 tracking-widest uppercase">
                    R
                  </span>
                </div>

                {/* Center Core Display */}
                <div className="text-center z-10 px-2">
                  <span className="text-[9px] font-mono text-[#92969F] uppercase tracking-wider block">
                    Orientation
                  </span>
                  <span className="text-xl font-mono text-[#F4F4F0] font-bold block">
                    {activeNode.deg.toString().padStart(3, '0')}°
                  </span>
                  <span className="text-[10px] font-mono text-[#00F0FF] block mt-0.5">
                    {activeNode.id} Sector
                  </span>
                </div>
              </div>

              {/* 8 Radial Actuators with Concentric Vibration Wave Animations */}
              {ACTUATORS.map((node, i) => {
                const isActive = activeIdx === i
                return (
                  <button
                    key={node.id}
                    type="button"
                    onClick={() => triggerHaptic(i)}
                    className="absolute group focus:outline-none"
                    style={{
                      left: `${node.x}%`,
                      top: `${node.y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    title={`Click to stimulate: ${node.label}`}
                  >
                    {/* Concentric Haptic Wave Circles */}
                    {isActive && (
                      <div className="absolute inset-0 pointer-events-none -m-3 flex items-center justify-center">
                        <motion.div
                          initial={shouldReduceMotion ? false : { scale: 0.8, opacity: 0.9 }}
                          animate={{ scale: [1, 2.4, 3.2], opacity: [0.9, 0.4, 0] }}
                          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeOut' }}
                          className="absolute w-8 h-8 rounded-full border-2 border-[#00F0FF]"
                        />
                        <motion.div
                          initial={shouldReduceMotion ? false : { scale: 0.8, opacity: 0.8 }}
                          animate={{ scale: [1, 1.8, 2.5], opacity: [0.8, 0.3, 0] }}
                          transition={{ duration: 1.2, delay: 0.3, repeat: Infinity, ease: 'easeOut' }}
                          className="absolute w-8 h-8 rounded-full border border-[#00F0FF]/60"
                        />
                      </div>
                    )}

                    {/* Actuator Pin */}
                    <div
                      className={cn(
                        'w-7 h-7 rounded-full flex items-center justify-center font-mono text-[10px] font-bold transition-all duration-300 border relative z-10',
                        isActive
                          ? 'bg-[#00F0FF] text-[#090A0C] border-[#00F0FF] shadow-[0_0_25px_#00F0FF] scale-110'
                          : 'bg-[#101217] text-[#92969F] border-[#292C33] hover:border-[#00F0FF]/70 hover:text-[#F4F4F0]'
                      )}
                    >
                      {node.id}
                    </div>
                  </button>
                )
              })}

              {/* Real-Time Compass Rose Label */}
              <div className="absolute bottom-3 left-4 text-[10px] font-mono text-[#92969F] flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#00F0FF]" />
                <span>Radial Array (8 Nodes)</span>
              </div>
              <div className="absolute bottom-3 right-4 text-[10px] font-mono text-[#00F0FF]">
                Status: {isStimulating ? 'FIRING HAPTIC PULSE' : 'STANDBY IDLE'}
              </div>
            </div>

            {/* Right Telemetry & Closed-Loop Readout */}
            <div className="lg:col-span-5 space-y-4">
              {/* Active Sector Card */}
              <div className="p-5 rounded-xl bg-[#101217]/90 border border-[#292C33]">
                <div className="flex items-center justify-between text-xs font-mono text-[#92969F] mb-1">
                  <span>ACTIVE SECTOR</span>
                  <span className="text-[#00F0FF] font-semibold">{activeNode.label}</span>
                </div>
                <h4 className="text-base font-normal text-[#F4F4F0] m-0">
                  {activeNode.cue}
                </h4>
                <p className="text-xs text-[#92969F] mt-2 leading-relaxed m-0">
                  {mode === 'neuroloop'
                    ? 'Decoded via constrained non-invasive motor-imagery intent. Triggers confirmation pulse before robot step execution.'
                    : mode === 'navigation'
                    ? 'Autonomous axial heading cue informing user of waypoint direction without requiring visual screen check.'
                    : 'Tactile workflow event notification carrying machine-state status directly to the skin.'}
                </p>
              </div>

              {/* Closed-Loop Pipeline Steps */}
              <div className="p-5 rounded-xl bg-[#090A0C] border border-[#292C33] space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#92969F] block">
                  Closed-Loop Signal Path (PDF Specification)
                </span>

                <div className="space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between p-2 rounded bg-[#101217] border border-[#292C33]">
                    <span className="text-[#92969F]">1. Scalp EEG Ingest</span>
                    <span className="text-[#00F0FF]">BrainFlow / CSP+LDA</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-[#101217] border border-[#292C33]">
                    <span className="text-[#92969F]">2. Confidence Gate</span>
                    <span className="text-[#F4F4F0]">Dwell 350ms &gt; 82%</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-[#101217] border border-[#292C33]">
                    <span className="text-[#92969F]">3. Simulator Task</span>
                    <span className="text-[#00F0FF]">Virtual Robot Sim</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-[#101217] border border-[#292C33]">
                    <span className="text-[#92969F]">4. ESP32 BLE Haptic</span>
                    <span className="text-[#00F0FF] font-semibold">4–8ch ERM Actuator</span>
                  </div>
                </div>
              </div>

              {/* Hardware Telemetry Bar */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-3 rounded-lg bg-[#101217] border border-[#292C33]">
                  <span className="block text-[9px] font-mono text-[#92969F] uppercase">Frequency</span>
                  <span className="text-sm font-mono text-[#00F0FF] font-semibold">210 Hz</span>
                </div>
                <div className="p-3 rounded-lg bg-[#101217] border border-[#292C33]">
                  <span className="block text-[9px] font-mono text-[#92969F] uppercase">BLE Latency</span>
                  <span className="text-sm font-mono text-[#F4F4F0] font-semibold">&lt; 14 ms</span>
                </div>
                <div className="p-3 rounded-lg bg-[#101217] border border-[#292C33]">
                  <span className="block text-[9px] font-mono text-[#92969F] uppercase">Total Pulses</span>
                  <span className="text-sm font-mono text-[#00F0FF] font-semibold">{pulseCount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Hardware Prototype Workbench Tab (From exact PDF Specs) */
        <div className="p-6 md:p-8 space-y-6">
          <div className="max-w-2xl">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#00F0FF] block mb-1">
              PROTOTYPE HARDWARE BENCH // ESP32 INVENTORY
            </span>
            <h3 className="text-2xl font-normal text-[#F4F4F0] m-0">
              Low-Risk, Modular 4-Channel Architecture
            </h3>
            <p className="text-xs sm:text-sm text-[#92969F] mt-2 leading-relaxed m-0">
              Per Section 06 of the research dossier, the haptic belt is built and validated independently over BLE before EEG integration. Heavy ML decoding remains on the host laptop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-[#101217] border border-[#292C33] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00F0FF] font-semibold">
                <Cpu className="w-4 h-4" />
                <span>Available Parts (User Inventory)</span>
              </div>
              <ul className="text-xs font-mono text-[#92969F] space-y-1.5 pl-4 list-disc">
                <li>ESP32 USB-C development board with BLE 5.0 stack</li>
                <li>Solderless breadboard, jumper wire loom, pull-up resistors</li>
                <li>Digital temperature sensor, buzzer, small OLED display</li>
                <li>Two small LiPo battery cells (kept disconnected for safety)</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-[#101217] border border-[#292C33] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#668CFF] font-semibold">
                <Layers className="w-4 h-4" />
                <span>Integration Target (Phase 1 Bench)</span>
              </div>
              <ul className="text-xs font-mono text-[#92969F] space-y-1.5 pl-4 list-disc">
                <li>4x precision ERM vibration motors (Front, Back, Left, Right)</li>
                <li>Dedicated MOSFET motor driver board (No GPIO overcurrent)</li>
                <li>Adjustable Velcro belt harness with vibration dampening</li>
                <li>Regulated 3.3V/5V power path with watchdog disconnect timeout</li>
              </ul>
            </div>
          </div>

          {/* Safety & Medical Disclaimer Callout */}
          <div className="p-4 rounded-xl bg-[#00F0FF]/5 border border-[#00F0FF]/30 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#00F0FF] shrink-0 mt-0.5" />
            <div className="text-xs text-[#92969F] space-y-1">
              <p className="font-mono text-[#F4F4F0] uppercase tracking-wider font-semibold m-0">
                Mandatory Responsible Research Boundary (PDF Section 13)
              </p>
              <p className="m-0 leading-relaxed">
                Project SENSE NeuroLoop is an exploratory human-machine interaction demonstrator, not an implant, brain stimulator, or medical device. The wearable belt applies mechanical skin-level vibration only. Scalp electrodes are never connected directly to the ESP32.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
